"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import imageCompression from "browser-image-compression";
import {
  FaCloudUploadAlt,
  FaSpinner,
  FaCheck,
} from "react-icons/fa";
import { toast } from "sonner";

interface FileUploadProps {
  onUploadComplete: (urls: string[]) => void;
  folder?: string;
  setIsWebP: (value: boolean) => void;
  setIsCompress: (value: boolean) => void;
  isCompress: boolean;
  isWebP: boolean;
}

export default function FileUploadAdvance({
  onUploadComplete,
  folder = "testing",
  setIsWebP,
  setIsCompress,
  isCompress,
  isWebP,
}: FileUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const [originalSize, setOriginalSize] = useState(0);
  const [processedSize, setProcessedSize] = useState(0);
  const [savedPercent, setSavedPercent] = useState(0);

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
            reject(new Error("Could not process image."));
            return;
          }

          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("WebP conversion failed."));
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

        img.onerror = () => {
          reject(new Error("Unable to load image."));
        };

        img.src = event.target?.result as string;
      };

      reader.onerror = () => {
        reject(new Error("Unable to read image."));
      };

      reader.readAsDataURL(file);
    });
  };

  const compressImage = async (file: File): Promise<File> => {
    return imageCompression(file, {
      maxSizeMB: 2,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    });
  };

  const processImage = async (file: File): Promise<File> => {
    let processedFile = file;

    if (isCompress) {
      processedFile = await compressImage(processedFile);
    }

    if (isWebP && processedFile.type !== "image/webp") {
      processedFile = await convertToWebP(processedFile);
    }

    return processedFile;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        const rejection = fileRejections[0];

        toast.error(
          rejection.errors[0]?.message ||
            "One or more files could not be selected.",
        );

        return;
      }

      if (!acceptedFiles.length) return;

      previewUrls.forEach((url) => URL.revokeObjectURL(url));

      const urls = acceptedFiles.map((file) =>
        URL.createObjectURL(file),
      );

      setSelectedFiles(acceptedFiles);
      setPreviewUrls(urls);

      setOriginalSize(0);
      setProcessedSize(0);
      setSavedPercent(0);
    },
    [previewUrls],
  );

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/webp": [".webp"],
        "image/svg+xml": [".svg"],
      },
      multiple: true,
      disabled: isUploading,
    });

  const handleUpload = async () => {
    if (!selectedFiles.length) {
      toast.error("Please select at least one image.");
      return;
    }

    try {
      setIsUploading(true);

      let totalOriginalSize = 0;
      let totalProcessedSize = 0;

      const uploadedUrls: string[] = [];

      for (const file of selectedFiles) {
        totalOriginalSize += file.size;

        const processedFile = await processImage(file);

        totalProcessedSize += processedFile.size;

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
          throw new Error(
            "Upload completed but no file URL was returned.",
          );
        }

        uploadedUrls.push(data.file);
      }

      const saved =
        totalOriginalSize > 0
          ? Math.max(
              0,
              Math.round(
                ((totalOriginalSize - totalProcessedSize) /
                  totalOriginalSize) *
                  100,
              ),
            )
          : 0;

      setOriginalSize(totalOriginalSize);
      setProcessedSize(totalProcessedSize);
      setSavedPercent(saved);

      onUploadComplete(uploadedUrls);

      toast.success(
        `${uploadedUrls.length} ${
          uploadedUrls.length === 1 ? "image" : "images"
        } uploaded successfully.`,
      );

      clearSelection(false);
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

  const clearSelection = (resetOptions = true) => {
    previewUrls.forEach((url) => URL.revokeObjectURL(url));

    setSelectedFiles([]);
    setPreviewUrls([]);

    if (resetOptions) {
      setIsWebP(false);
      setIsCompress(false);
    }

    setOriginalSize(0);
    setProcessedSize(0);
    setSavedPercent(0);
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const formatSize = (bytes: number) => {
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }

    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  return (
    <div className="w-full">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`
          group relative cursor-pointer overflow-hidden rounded-xl
          border border-dashed
          transition-all duration-200
          ${
            isDragActive
              ? "border-brand bg-brand/5"
              : "border-neutral-20 bg-background-surface hover:border-brand hover:bg-brand/5"
          }
          ${isUploading ? "cursor-not-allowed opacity-70" : ""}
        `}
      >
        <input {...getInputProps()} />

        {previewUrls.length > 0 ? (
          <div className="p-3">
            {/* Preview Grid */}
            <div
              className={`
                grid gap-2
                ${
                  previewUrls.length === 1
                    ? "grid-cols-1"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                }
              `}
            >
              {previewUrls.map((url, index) => (
                <div
                  key={url}
                  className="group/preview relative overflow-hidden rounded-lg border border-neutral-10 bg-background-secondary"
                >
                  <img
                    src={url}
                    alt={`Selected image ${index + 1}`}
                    className="
                      h-32 w-full object-cover
                      sm:h-36
                    "
                  />

                  <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Replace hint */}
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                {selectedFiles.length}{" "}
                {selectedFiles.length === 1
                  ? "image selected"
                  : "images selected"}
              </p>

              <p className="text-xs font-medium text-brand">
                Click or drop to replace
              </p>
            </div>
          </div>
        ) : (
          <div className="flex min-h-[190px] flex-col items-center justify-center px-5 py-8">
            {/* Upload icon */}
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
                ? "Drop your images here"
                : "Drag & drop your images here"}
            </p>

            <p className="mt-1.5 text-xs text-text-secondary">
              or click to browse from your device
            </p>

            <p className="mt-4 text-[11px] text-text-secondary">
              JPG, PNG, WebP or SVG · Multiple files supported
            </p>
          </div>
        )}
      </div>

      {/* Processing Summary */}
      {(originalSize > 0 || isCompress || isWebP) && (
        <div className="mt-4 rounded-xl border border-neutral-10 bg-background-surface p-3">
          <div className="flex flex-wrap items-center gap-2">
            {isCompress && (
              <div className="flex items-center gap-1.5 rounded-lg bg-brand/10 px-2.5 py-1.5 text-[11px] font-medium text-brand">
                <FaCheck className="text-[9px]" />
                Compression enabled
              </div>
            )}

            {isWebP && (
              <div className="flex items-center gap-1.5 rounded-lg bg-brand/10 px-2.5 py-1.5 text-[11px] font-medium text-brand">
                <FaCheck className="text-[9px]" />
                WebP conversion enabled
              </div>
            )}

            {originalSize > 0 && processedSize > 0 && (
              <>
                <div className="h-4 w-px bg-neutral-10" />

                <p className="text-[11px] text-text-secondary">
                  {formatSize(originalSize)} →{" "}
                  <span className="font-semibold text-text-main">
                    {formatSize(processedSize)}
                  </span>
                </p>

                {savedPercent > 0 && (
                  <span className="rounded-lg bg-green-500/10 px-2 py-1 text-[11px] font-semibold text-green-600">
                    {savedPercent}% saved
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => clearSelection(true)}
          disabled={isUploading || selectedFiles.length === 0}
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
          disabled={isUploading || selectedFiles.length === 0}
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
            <>
              Upload
              {selectedFiles.length > 0 && (
                <span className="rounded-md bg-white/15 px-1.5 py-0.5 text-[10px]">
                  {selectedFiles.length}
                </span>
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
}