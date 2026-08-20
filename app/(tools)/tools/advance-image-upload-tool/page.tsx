"use client";

// import FileUploadAdvance from "@/components/FileUploadAdvance";
import SectionHeader from "@/components/SectionHeaderProps";
import { clientsFoldersDO } from "@/utils/constants";
import { handleCopy } from "@/utils/functions/UniversalFunctions";
import React, { useState } from "react";
import FileUploadAdvance from "./FileUploadAdvance";

export default function ToolsPage() {
  const [uploadedUrl, setUploadedUrl] = useState<string[]>([]);
  const [folder, setFolder] = useState<string>(clientsFoldersDO[0]);
  const [isCompress, setIsCompress] = useState(false);
  const [isWebP, setIsWebP] = useState(false);

  const handleClearAll = () => {
    setUploadedUrl([]);
  };

  const handleCopyAll = () => {
    if (!uploadedUrl.length) return;

    handleCopy(uploadedUrl.join("\n"));
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col">
      {/* Header */}
      <div className="mb-8 max-w-3xl">
        <SectionHeader
          title={
            <>
              Upload &{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Copy Image URLs
              </span>
            </>
          }
          description="Upload, compress, convert and instantly copy shareable image URLs."
        />
      </div>

      {/* Main Upload Card */}
      <div className="rounded-2xl border border-neutral-10 bg-background-secondary p-5 shadow-box-shadow sm:p-6">
        {/* Card Header */}
        <div className="mb-5">
          <h2 className="font-heading text-lg font-semibold text-text-main">
            Image Upload
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Choose a destination folder and configure your image processing
            options.
          </p>
        </div>

        {/* Options */}
        <div className="mb-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          {/* Folder */}
          <div>
            <label
              htmlFor="folder"
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-text-secondary"
            >
              Destination Folder
            </label>

            <select
              id="folder"
              name="folder"
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              className="
                h-10 w-full rounded-lg
                border border-neutral-10
                bg-background-surface
                px-3 text-sm text-text-main
                outline-none
                transition-all duration-200
                focus:border-brand
                focus:ring-2
                focus:ring-brand/10
              "
            >
              {clientsFoldersDO.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex h-10 items-center gap-2">
            <label
              className={`
                flex h-full cursor-pointer items-center gap-2 rounded-lg
                border px-3
                text-xs font-medium
                transition-all duration-200
                ${
                  isCompress
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-neutral-10 bg-background-surface text-text-secondary hover:border-neutral-20"
                }
              `}
            >
              <input
                type="checkbox"
                checked={isCompress}
                onChange={(e) => setIsCompress(e.target.checked)}
                className="sr-only"
              />
              <span
                className={`
                  flex h-4 w-4 items-center justify-center rounded border
                  transition-all
                  ${
                    isCompress
                      ? "border-brand bg-brand"
                      : "border-neutral-20 bg-background-secondary"
                  }
                `}
              >
                {isCompress && (
                  <span className="h-1.5 w-1.5 rounded-sm bg-white" />
                )}
              </span>
              Compress
            </label>

            <label
              className={`
                flex h-full cursor-pointer items-center gap-2 rounded-lg
                border px-3
                text-xs font-medium
                transition-all duration-200
                ${
                  isWebP
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-neutral-10 bg-background-surface text-text-secondary hover:border-neutral-20"
                }
              `}
            >
              <input
                type="checkbox"
                checked={isWebP}
                onChange={(e) => setIsWebP(e.target.checked)}
                className="sr-only"
              />
              <span
                className={`
                  flex h-4 w-4 items-center justify-center rounded border
                  transition-all
                  ${
                    isWebP
                      ? "border-brand bg-brand"
                      : "border-neutral-20 bg-background-secondary"
                  }
                `}
              >
                {isWebP && <span className="h-1.5 w-1.5 rounded-sm bg-white" />}
              </span>
              WebP
            </label>
          </div>
        </div>

        <FileUploadAdvance
          folder={folder}
          onUploadComplete={(url) => setUploadedUrl(url)}
          setIsWebP={setIsWebP}
          setIsCompress={setIsCompress}
          isCompress={isCompress}
          isWebP={isWebP}
        />
      </div>

      {uploadedUrl.length > 0 && (
        <div className="mt-6 rounded-2xl border border-neutral-10 bg-background-secondary p-5 shadow-box-shadow sm:p-6">
          {/* Results Header */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading text-lg font-semibold text-text-main">
                  Uploaded Images
                </h2>

                <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
                  {uploadedUrl.length}
                </span>
              </div>

              <p className="mt-1 text-sm text-text-secondary">
                Copy an individual URL or copy all generated links at once.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyAll}
                className="
                  rounded-lg border border-neutral-10
                  bg-background-surface px-3 py-2
                  text-xs font-semibold text-text-main
                  transition-all duration-200
                  hover:border-brand
                  hover:text-brand
                "
              >
                Copy All
              </button>

              <button
                type="button"
                onClick={handleClearAll}
                className="
                  rounded-lg border border-neutral-10
                  bg-background-surface px-3 py-2
                  text-xs font-medium text-text-secondary
                  transition-all duration-200
                  hover:border-red-400
                  hover:text-red-500
                "
              >
                Clear
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3">
            {uploadedUrl.map((url, index) => (
              <div
                key={`${url}-${index}`}
                className="
                  flex flex-col gap-3 rounded-xl
                  border border-neutral-10
                  bg-background-surface p-3
                  transition-all duration-200
                  hover:border-neutral-20
                  sm:flex-row sm:items-center
                "
              >
                {/* Preview */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-10 bg-background-secondary">
                  <img
                    src={url}
                    alt={`Uploaded image ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* URL */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-text-secondary">
                    Image {index + 1}
                  </p>

                  <p className="break-all text-xs leading-5 text-text-main">
                    {url}
                  </p>
                </div>

                {/* Copy */}
                <button
                  type="button"
                  onClick={() => handleCopy(url)}
                  className="
                    shrink-0 rounded-lg
                    border border-neutral-10
                    bg-background-secondary
                    px-3 py-2
                    text-xs font-semibold text-text-secondary
                    transition-all duration-200
                    hover:border-brand
                    hover:text-brand
                    active:scale-95
                  "
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty / Info State */}
      {!uploadedUrl.length && (
        <div className="mt-6 rounded-xl border border-dashed border-neutral-10 px-5 py-6 text-center">
          <p className="text-sm font-medium text-text-main">
            Your uploaded images will appear here
          </p>

          <p className="mt-1 text-xs text-text-secondary">
            Upload an image above to generate a shareable URL.
          </p>
        </div>
      )}

      {/* Why Use This Tool */}
      <div className="mx-auto mt-10 max-w-2xl text-center">
        <h3 className="font-heading text-lg font-bold text-text-main">
          Why use this tool?
        </h3>

        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Upload images, optionally compress them or convert them to WebP, and
          instantly receive shareable URLs for your websites, blogs, documents,
          and applications.
        </p>
      </div>
    </div>
  );
}
