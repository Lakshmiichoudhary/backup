
import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { ventures } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const countryFlags: Record<string, string> = {
  Australia: "/icons/australian-flag.png",
  UAE: "/icons/uae-flag.png",
  India: "/icons/indian-flag.png",
  USA: "/icons/usa-flag.png",
  France: "/icons/france-flag.png"
};

export default function Completedventures() {
  return (
    <section className="bg-background-main py-12 sm:py-24 px-4 sm:px-12 xl:px-[100px] flex flex-col gap-10 sm:gap-16">
      <header className="flex flex-col gap-5">
        <TitleTag title="Completed ventures" />
        <SectionHeader
          title={
            <>
              Products we&apos;ve shipped for{" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                the world
              </span>
            </>
          }
          description="A living portfolio of live websites and platforms we've designed and engineered. Click any name to visit the real thing."
        />
      </header>

      <div className="flex flex-col">
        {ventures.map((venture, index) => (
          <article
            key={venture.name}
            className="flex flex-col gap-4 py-6 border-t border-neutral-8
              md:grid
              md:grid-cols-[minmax(0,1fr)_auto]
              md:items-center
              md:gap-8 md:py-7 lg:grid-cols-[minmax(0,1fr)_520px]"
          >
            {/* Title Block */}
            <div className="flex min-w-0 items-center justify-between sm:justify-start gap-3 sm:gap-5">
              <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                <span className="shrink-0 text-sm leading-5 text-neutral-80">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="truncate flex items-center gap-2 font-heading text-lg sm:text-xl lg:text-3xl font-bold leading-tight sm:leading-9 tracking-[-0.75px] text-neutral-100">
                  <span className="truncate">{venture.name}</span>

                  {venture.location && countryFlags[venture.location] && (
                    <Image
                      src={countryFlags[venture.location]}
                      alt=""
                      width={20}
                      height={14}
                      className="h-3.5 w-5 shrink-0 rounded-[2px] inline-block object-cover"
                    />
                  )}
                </h3>
              </div>

            
              <Link
                href={venture.webLink}
                target="_blank"
                aria-label={`Visit ${venture.name}`}
                className="flex md:hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-8 ml-auto"
              >
                <Image
                  src="/icons/whiteArrowUp.svg"
                  alt=""
                  width={14}
                  height={14}
                />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs sm:text-sm leading-5 text-neutral-80 md:grid md:grid-cols-[1fr_1fr_60px_40px] md:text-nowrap md:items-center md:gap-8 md:text-right">
              <span className="font-medium text-neutral-100 md:font-normal md:text-neutral-80">
                {venture.location}
              </span>

              <span className="before:content-['•'] before:mr-2 before:text-neutral-80 md:before:hidden">
                {venture.category}
              </span>

              <span className="ml-auto md:ml-0 font-mono sm:font-sans">
                {venture.year}
              </span>

            
              <Link
                href={venture.webLink}
                target="_blank"
                aria-label={`Visit ${venture.name}`}
                className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-8"
              >
                <Image
                  src="/icons/whiteArrowUp.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}