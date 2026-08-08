//Strictly Static
import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { ventures } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export default function Completedventures() {
  return (
    <section className="bg-background-secondary py-24 px-6 sm:px-12 xl:px-[100px] flex flex-col gap-16">
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
          {ventures.map((venture) => (
            <article
              key={venture.id}
              className="grid md:grid-cols-[1.4fr_auto] items-center gap-8 border-t border-neutral-8 py-7 xl:grid-cols-[minmax(0,1fr)_520px]"
            >
              <div className="flex min-w-0 items-center gap-5">
                <span className="shrink-0 text-sm leading-5 text-neutral-80">
                  {venture.id}
                </span>

                <h3 className="truncate font-heading text-3xl font-bold leading-9 tracking-[-0.75px] text-neutral-100">
                  {venture.name}
                </h3>
              </div>

              <div className="grid grid-cols-[1fr_1fr_60px_40px] text-nowrap items-center gap-8 text-right text-sm leading-5 text-neutral-80">
                <span>{venture.location}</span>

                <span>{venture.category}</span>

                <span>{venture.year}</span>

                <a
                  href="#"
                  aria-label={`Visit ${venture.name}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-8"
                >
                  <Image
                    src="/icons/whiteArrowUp.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
}
