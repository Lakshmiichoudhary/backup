"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaSpinner } from "react-icons/fa6";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import TitleTag from "@/components/TitleTag";
import SectionHeader from "@/components/SectionHeaderProps";
import { toast } from "sonner";

type ConvertedFile = {
  file: File;
  preview: string;
  name: string;
  webpData: string;
};

export default function WebPConverter() {
  const [files, setFiles] = useState<ConvertedFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    setIsConverting(true);

    try {
      const convertedFiles = await Promise.all(
        acceptedFiles.map(async (file) => {
          const preview = URL.createObjectURL(file);
          const name = file.name.replace(/\.[^/.]+$/, "");

          const webpData = await convertToWebP(file);

          return {
            file,
            preview,
            name,
            webpData,
          };
        }),
      );

      setFiles(convertedFiles);
    } catch (error) {
      console.error("WebP conversion error:", error);
      toast.error("Failed to convert images.");
    } finally {
      setIsConverting(false);
    }
  }, []);

  const convertToWebP = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas is not supported"));
        return;
      }

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("WebP conversion failed"));
              return;
            }

            resolve(URL.createObjectURL(blob));
          },
          "image/webp",
          0.9,
        );
      };

      img.onerror = () => {
        reject(new Error("Unable to load image"));
      };

      img.src = URL.createObjectURL(file);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,

    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },

    multiple: true,
    maxFiles: 5,

    onDropRejected: () => {
      toast.error("You can upload up to 5 JPG or PNG images.");
    },
  });

  const downloadWebP = (webpData: string, name: string) => {
    const link = document.createElement("a");

    link.href = webpData;
    link.download = `${name}.webp`;
    link.click();
  };

  const downloadAllAsZip = async () => {
    const zip = new JSZip();

    for (const file of files) {
      const response = await fetch(file.webpData);
      const blob = await response.blob();

      zip.file(`${file.name}.webp`, blob);
    }

    const zipBlob = await zip.generateAsync({
      type: "blob",
    });

    saveAs(zipBlob, "converted-webp-images.zip");
  };

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center">
      {/* Header */}
      <header className="flex max-w-3xl flex-col items-center justify-center gap-3 text-center">
        <TitleTag title="Image Converter" />

        <SectionHeader
          className="justify-center text-center"
          title={
            <>
              From Heavy to{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Speedy
              </span>
            </>
          }
          description="Convert JPG and PNG images to WebP for faster websites and better performance."
        />
      </header>

      {/* Upload */}
      <section className="mt-10 w-full max-w-3xl">
        <div
          {...getRootProps()}
          className="
            cursor-pointer rounded-3xl border-2 border-dashed
            border-neutral-20 bg-background-secondary
            p-10 text-center
            transition-all duration-200
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
            or click to select JPG and PNG files
          </p>

          <p className="mt-1 text-xs text-text-secondary">Maximum 5 images</p>
        </div>

        {/* Loader */}
        {isConverting && (
          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-brand">
            <FaSpinner className="animate-spin" />
            Converting images...
          </div>
        )}
      </section>

      {/* Results */}
      {files.length > 0 && (
        <section className="mt-8 w-full max-w-4xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-main">
              Converted Images
            </h2>

            {files.length > 1 && (
              <button
                type="button"
                onClick={downloadAllAsZip}
                className="
                  rounded-full bg-brand px-5 py-2.5
                  text-sm font-semibold text-text-primary
                  transition hover:opacity-90
                "
              >
                Download All
              </button>
            )}
          </div>

          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={file.name}
                className="
                  flex flex-col gap-4 rounded-2xl
                  border border-neutral-10
                  bg-background-secondary p-4
                  sm:flex-row sm:items-center sm:justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={file.preview}
                    width={70}
                    height={70}
                    alt={file.name}
                    className="h-[70px] w-[70px] rounded-xl object-cover"
                  />

                  <div>
                    <p className="font-semibold text-text-main">
                      {file.name}.webp
                    </p>

                    <p className="text-sm text-brand">Conversion complete</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => downloadWebP(file.webpData, file.name)}
                  className="
                    rounded-full border border-brand
                    px-5 py-2.5 text-sm font-semibold text-brand
                    transition-all duration-200
                    hover:bg-brand hover:text-text-primary
                  "
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Info */}
      <section className="mt-10 max-w-2xl text-center">
        <h2 className="text-xl font-bold text-text-main">Why WebP?</h2>

        <p className="mt-2 text-sm leading-6 text-text-secondary">
          WebP reduces image size while maintaining quality, helping improve
          website speed and performance.
        </p>
      </section>
    </main>
  );
}
