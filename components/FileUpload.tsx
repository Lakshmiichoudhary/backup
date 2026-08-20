"use client";

import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { FaSpinner, FaCloudUploadAlt } from "react-icons/fa";
import imageCompression from "browser-image-compression";
import { toast } from "sonner";

interface FileUploadProps {
  onUploadComplete: (url: string) => void;
  folder?: string;
}

export default function FileUpload({
  onUploadComplete,
  folder = "testing",
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const MAX_FILE_SIZE_MB = 3;

  const convertToWebP = async (file: File): Promise<File> => {
    if (file.type === "image/webp") {
      return file;
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement("canvas");

          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(new Error("Could not create canvas context."));
            return;
          }

          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Could not convert image."));
                return;
              }

              const webpFile = new File(
                [blob],
                `${file.name.replace(/\.[^/.]+$/, "")}.webp`,
                {
                  type: "image/webp",
                  lastModified: Date.now(),
                },
              );

              resolve(webpFile);
            },
            "image/webp",
            0.8,
          );
        };

        img.onerror = () => reject(new Error("Unable to load the image."));
        img.src = event.target?.result as string;
      };

      reader.onerror = () => reject(new Error("Unable to read the file."));
      reader.readAsDataURL(file);
    });
  };

  const compressAndConvertImage = async (file: File): Promise<File> => {
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 2,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    });

    const webpFile = await convertToWebP(compressedFile);

    if (webpFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      throw new Error(`Image size must be less than ${MAX_FILE_SIZE_MB}MB.`);
    }

    return webpFile;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        const rejection = fileRejections[0];

        const message =
          rejection.errors[0]?.code === "file-too-large"
            ? `Image size must be less than ${MAX_FILE_SIZE_MB}MB.`
            : rejection.errors[0]?.message || "Invalid file.";

        toast.error(message);
        return;
      }

      const file = acceptedFiles[0];

      if (!file) return;

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    },
    [previewUrl],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
      "image/svg+xml": [".svg"],
    },
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
    multiple: false,
    disabled: isUploading,
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first.");
      return;
    }

    try {
      setIsUploading(true);

      const processedFile = await compressAndConvertImage(selectedFile);

      const formData = new FormData();

      formData.append("file", processedFile);
      formData.append("folder", folder);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/file-upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Upload failed.");
      }

      const data = await res.json();

      if (!data?.file) {
        throw new Error("Upload completed but no file URL was returned.");
      }

      let fileUrl = data.file;

      if (!fileUrl.toLowerCase().endsWith(".webp")) {
        fileUrl = fileUrl.replace(/\.[^/.]+$/, "") + ".webp";
      }

      onUploadComplete(fileUrl);

      toast.success("Image uploaded successfully.");

      handleClear();
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Something went wrong while uploading.",
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(null);
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={`
          group relative cursor-pointer overflow-hidden rounded-xl
          border border-dashed
          transition-all duration-200
          ${
            isDragActive
              ? "border-brand bg-background-green/5"
              : "border-neutral-20 bg-background-surface hover:border-brand hover:bg-background-green/5"
          }
          ${isUploading ? "cursor-not-allowed opacity-70" : ""}
        `}
      >
        <input {...getInputProps()} />

        {previewUrl ? (
          <div className="p-3">
            <div className="relative overflow-hidden rounded-lg border border-neutral-10 bg-background-secondary">
              <img
                src={previewUrl}
                alt="Selected image preview"
                className="h-56 w-full object-contain sm:h-64"
              />

              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-4 py-2.5 text-sm font-medium text-white">
                    <FaSpinner className="animate-spin" />
                    Processing...
                  </div>
                </div>
              )}

              {!isUploading && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-10">
                  <p className="text-xs font-medium text-white">
                    Click or drop another image to replace
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex min-h-[200px] flex-col items-center justify-center px-5 py-8">
            <div
              className={`
                mb-4 flex h-12 w-12 items-center justify-center
                rounded-xl border
                transition-all duration-200
                ${
                  isDragActive
                    ? "border-brand bg-background-secondary text-brand"
                    : "border-neutral-10 bg-background-secondary text-text-secondary group-hover:border-brand group-hover:text-brand"
                }
              `}
            >
              <FaCloudUploadAlt className="h-5 w-5" />
            </div>

            <p className="font-heading text-sm font-semibold text-text-main sm:text-base">
              {isDragActive
                ? "Drop your image here"
                : "Drag & drop your image here"}
            </p>

            <p className="mt-1.5 text-xs text-text-secondary">
              or click to browse from your device
            </p>

            <p className="mt-4 text-[11px] text-text-secondary">
              JPG, PNG, WebP or SVG 
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={handleClear}
          disabled={isUploading || !selectedFile}
          className="
            rounded-lg border border-neutral-10
            bg-background-surface px-4 py-2
            text-xs font-medium text-text-secondary
            transition-all duration-200
            hover:border-neutral-20
            hover:bg-background-secondary
            hover:text-text-main
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Clear
        </button>

        <button
          type="button"
          onClick={handleUpload}
          disabled={isUploading || !selectedFile}
          className="
            flex items-center gap-2 rounded-lg
            bg-brand px-5 py-2
            text-xs font-semibold text-white
            shadow-blue-glow
            transition-all duration-200
            hover:-translate-y-0.5
            hover:opacity-90
            active:translate-y-0
            disabled:cursor-not-allowed
            disabled:opacity-40
            disabled:shadow-none
          "
        >
          {isUploading ? (
            <>
              <FaSpinner className="animate-spin" />
              Uploading...
            </>
          ) : (
            "Upload Image"
          )}
        </button>
      </div>
    </div>
  );
}
