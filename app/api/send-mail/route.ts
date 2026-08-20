import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { receiver, subject, html, apiKey } = body;

    // 🔐 API KEY CHECK
    if (apiKey !== process.env.MAIL_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!receiver || !subject || !html) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // auto fix
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: `"No Reply" <${process.env.SMTP_USER}>`,
      to: receiver,
      subject,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error: unknown) {
    console.error("Mail Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
