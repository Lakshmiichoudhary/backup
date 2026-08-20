import Image from "next/image";
import Link from "next/link";
import React from "react";
import { whatsaapNumber } from "@/utils/constants";
import TitleTag from "./TitleTag";
import SectionHeader from "./SectionHeaderProps";

export default function UnderDevelopment() {
  return (
    <section className="relative overflow-hidden bg-background-main py-32 px-6 sm:px-12 xl:px-[100px] min-h-[85vh] flex flex-col justify-center items-center">
      <div
        className="pointer-events-none absolute inset-0 bg-radial opacity-80"
        aria-hidden="true"
      />

      <div className="w-full overflow-hidden border-y border-neutral-10 bg-background-surface/50 backdrop-blur-sm mb-12 py-3">
        <div className="flex w-max ribbon-scroll text-xs sm:text-sm font-semibold tracking-wider uppercase text-text-secondary gap-8">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            Platform Engineering in Progress
          </span>
          <span>•</span>
          <span>Launching Soon</span>
          <span>•</span>
          <span>Next Generation Experience</span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            Platform Engineering in Progress
          </span>
          <span>•</span>
          <span>Launching Soon</span>
          <span>•</span>
          <span>Next Generation Experience</span>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <TitleTag title=" Under Active Development" />

        <SectionHeader
          title={
            <>
              Something extraordinary is{" "}
              <span className="text-transparent bg-clip-text bg-text2-gradient">
                taking shape
              </span>
            </>
          }
           description = "We&apos;re currently crafting this experience from the ground up. Check back soon or reach out directly if you have an immediate inquiry."
        />

        <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
          <Link
            href={"tel:" + whatsaapNumber}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold leading-5 text-text-primary transition-all duration-300 ease-out hover:bg-brand/90 hover:shadow-blue-glow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <span>Get Early Access</span>
            <Image
              src="/icons/arrowRight.svg"
              alt=""
              width={16}
              height={16}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>

          <a
            href={"https://wa.me/" + whatsaapNumber}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2 rounded-full border border-neutral-25 bg-background-secondary px-7 py-4 text-sm font-semibold leading-5 text-neutral-100 transition-all duration-300 ease-out hover:border-brand/40 hover:bg-background-surface active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="Talk on WhatsApp"
              width={20}
              height={20}
              className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[12deg]"
            />
            <span>Chat with us</span>
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-hero-bottom-fade"
        aria-hidden="true"
      />
    </section>
  );
}
