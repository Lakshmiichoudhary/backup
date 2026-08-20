"use client";

import FileUpload from "@/components/FileUpload";
import SectionHeader from "@/components/SectionHeaderProps";
import { clientsFoldersDO } from "@/utils/constants";
import { handleCopy } from "@/utils/functions/UniversalFunctions";
import React, { useState } from "react";

export default function ToolsPage() {
  const [uploadedUrl, setUploadedUrl] = useState<string>("");
  const [folder] = useState<string>(clientsFoldersDO[0]);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <SectionHeader
          className="justify-center text-center"
          title={
            <>
              Upload &{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Copy Image URL
              </span>
            </>
          }
          description="Upload an image and instantly generate a shareable URL for your websites, blogs, documents, and applications."
        />
      </div>

      <div className="w-full rounded-2xl border border-neutral-10 bg-background-secondary p-4 shadow-box-shadow sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-base font-semibold text-text-main">
              Upload Image
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              JPG, PNG, WebP or SVG · Max 3MB
            </p>
          </div>

        </div>

        <FileUpload
          folder={folder}
          onUploadComplete={(url) => setUploadedUrl(url)}
        />
      </div>

      {uploadedUrl && (
        <div className="mt-5 w-full rounded-2xl border border-neutral-10 bg-background-secondary p-4 shadow-box-shadow sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-base font-semibold text-text-main">
                Uploaded Successfully
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Your image is ready to use.
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-green/10">
              <svg
                className="h-4 w-4 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l4 4L19 6"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Preview */}
            <div className="flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-10 bg-background-surface sm:h-24 sm:w-32">
              <img
                src={uploadedUrl}
                alt="Uploaded image"
                className="h-full w-full object-contain"
              />
            </div>

            {/* URL */}
            <div className="min-w-0 flex-1">
              <p className="mb-1.5 text-xs font-medium text-text-secondary">
                Image URL
              </p>

              <button
                type="button"
                onClick={() => handleCopy(uploadedUrl)}
                className="group flex w-full items-center gap-3 rounded-xl border border-neutral-10 bg-background-surface p-3 text-left transition-all duration-200 hover:border-brand hover:bg-background-green/5"
              >
                <span className="min-w-0 flex-1 break-all text-xs leading-5 text-text-secondary group-hover:text-text-main">
                  {uploadedUrl}
                </span>

                <span className="shrink-0 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-opacity group-hover:opacity-90">
                  Copy
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Why Use This Tool */}
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-neutral-10" />

          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Simple & Fast
          </span>

          <span className="h-px w-8 bg-neutral-10" />
        </div>

        <h3 className="font-heading text-base font-semibold text-text-main">
          Image hosting without the hassle
        </h3>

        <p className="mt-2 text-xs leading-6 text-text-secondary sm:text-sm">
          Upload your image, get a shareable URL, and use it anywhere. No
          additional hosting setup required.
        </p>
      </div>
    </div>
  );
}
