import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";
import { clientsFoldersDO } from "@/utils/constants";
import { toUrlSafeFilename } from "@/utils/functions/UniversalFunctions";

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
});

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint(process.env.AWS_SPACES_ENDPOINT!),
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const client = formData.get("folder") as string;

    if (!file) {
      return NextResponse.json({ error: "No file found" }, { status: 400 });
    }
    if (!client) {
      return NextResponse.json({ error: "No folder found" }, { status: 400 });
    }
    if (!clientsFoldersDO?.includes(client)) {
      return NextResponse.json(
        { error: "Client not allowed" },
        { status: 400 }
      );
    }
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size should be less than 4MB" },
        { status: 413 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const params = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: `${client}/${Date.now()}_${toUrlSafeFilename(file.name)}`,
      Body: buffer,
      ContentType: file.type,
      ACL: "public-read",
    };

    const uploadResult = await s3.upload(params).promise();

    return NextResponse.json({
      message: "File uploaded successfully",
      file: uploadResult.Location,
    });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}
