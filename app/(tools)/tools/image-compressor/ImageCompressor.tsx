"use client";

import { useCallback, useState } from "react";
import imageCompression from "browser-image-compression";
import { useDropzone } from "react-dropzone";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import TitleTag from "@/components/TitleTag";
import SectionHeader from "@/components/SectionHeaderProps";
import Image from "next/image";

interface CompressedImage {
  original: File;
  compressed: File;
  url: string;
  preview: string;
  savedPercent: number;
}

export default function ImageCompressor() {
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    setLoading(true);

    const compressedImages: CompressedImage[] = [];

    for (const file of acceptedFiles) {
      const preview = URL.createObjectURL(file);

      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        });

        const url = URL.createObjectURL(compressedFile);

        const savedPercent = Math.max(
          0,
          Math.round(((file.size - compressedFile.size) / file.size) * 100),
        );

        compressedImages.push({
          original: file,
          compressed: compressedFile,
          url,
          preview,
          savedPercent,
        });
      } catch (error) {
        console.error("Image compression error:", error);
        toast.error(`Failed to compress ${file.name}`);
      }
    }

    setImages(compressedImages);
    setLoading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    multiple: true,
    maxFiles: 5,
    onDropRejected: () => {
      toast.error("You can upload up to 5 images.");
    },
  });

  const formatSize = (bytes: number) =>
    bytes >= 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(2)} MB`
      : `${(bytes / 1024).toFixed(2)} KB`;

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center">
      {/* Header */}
      <header className="flex max-w-3xl flex-col items-center justify-center gap-3 text-center">
        <TitleTag title="Image Compressor" />

        <SectionHeader
          className="justify-center text-center"
          title={
            <>
              From Bulky to{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Breezy
              </span>
            </>
          }
          description="Compress JPG, PNG, and WebP images to reduce file size and improve website performance."
        />
      </header>

      {/* Upload */}
      <section className="mt-10 w-full max-w-3xl">
        <div
          {...getRootProps()}
          className="
            cursor-pointer rounded-3xl border-2 border-dashed
            border-neutral-20 bg-background-secondary
            p-10 text-center transition-all duration-200
            hover:border-brand hover:bg-neutral-5
          "
        >
          <input {...getInputProps()} />

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-5 text-brand">
            <span className="text-2xl">↑</span>
          </div>

          <h2 className="text-lg font-bold text-text-main">
            {isDragActive ? "Drop your images here" : "Drag & drop your images"}
          </h2>

          <p className="mt-2 text-sm text-text-secondary">
            or click to select images
          </p>

          <p className="mt-1 text-xs text-text-secondary">
            JPG, PNG, WEBP · Maximum 5 images
          </p>
        </div>

        {/* Loader */}
        {loading && (
          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-brand">
            <FaSpinner className="animate-spin" />
            Compressing images...
          </div>
        )}
      </section>

      {/* Results */}
      {images.length > 0 && (
        <section className="mt-8 w-full max-w-4xl">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-text-main">
              Compressed Images
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              {images.length} image{images.length > 1 ? "s" : ""} compressed
              successfully.
            </p>
          </div>

          <div className="space-y-3">
            {images.map((img) => (
              <div
                key={img.original.name}
                className="
                  flex flex-col gap-4 rounded-2xl
                  border border-neutral-10
                  bg-background-secondary p-4
                  sm:flex-row sm:items-center sm:justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <Image
                    width={70}
                    height={70}
                    src={img.preview}
                    alt={`Preview of ${img.original.name}`}
                    className="h-[70px] w-[70px] rounded-xl object-cover"
                  />

                  <div>
                    <p className="font-semibold text-text-main">
                      {img.original.name}
                    </p>

                    <p className="mt-1 text-sm text-text-secondary">
                      {formatSize(img.original.size)} →{" "}
                      {formatSize(img.compressed.size)}
                    </p>

                    <p className="text-sm font-semibold text-brand">
                      Saved {img.savedPercent}%
                    </p>
                  </div>
                </div>

                <a
                  href={img.url}
                  download={`compressed-${img.original.name}`}
                  className="
                    rounded-full border border-brand
                    px-5 py-2.5 text-center text-sm
                    font-semibold text-brand transition-all
                    hover:bg-brand hover:text-text-primary
                  "
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 max-w-2xl text-center">
        <h2 className="text-xl font-bold text-text-main">
          Why Compress Images?
        </h2>

        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Smaller images help improve page speed, reduce bandwidth usage, and
          provide a better experience across devices.
        </p>
      </section>
    </main>
  );
}
