import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { portfolio } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export default function CaseStudies() {
  return (
    <section className="flex flex-col gap-24 bg-background-main px-6 pb-32 sm:px-12 justify-center  items-center xl:px-[100px]">
      <header className="flex flex-col gap-5 justify-center items-center text-center">
        <TitleTag title="CASE STUDIES" />
        <SectionHeader
          className="text-center items-center"
          title={
            <>
              How we build,{" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                in depth
              </span>
            </>
          }
          description="Deep dives into our process — from brief and research to design, engineering
and results. Open any case study to see how we did it."
        />
      </header>
      <div className="grid md:grid-cols-2 w-full gap-9">
        {portfolio?.map((venture) => (
          <article
            key={venture.name}
            className="bg-background-secondary flex flex-col gap-10 pt-[42px] px-6 pb-6 rounded-[26px] border border-neutral-10"
          >
            <Image
              src={venture.image}
              alt={venture.name}
              width={500}
              height={300}
              className="w-full"
            />
            <div className="flex flex-col justify-between h-full gap-3">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-neutral-100 text-xl font-bold leading-7 tracking-[-0.5px]">
                    {venture.name}
                  </h3>
                  <p className="text-neutral-80 text-xs leading-4">
                    {venture.year}
                  </p>
                </div>
                <p className="text-neutral-80 mt-1 text-sm leading-5">
                  {venture.tagline}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {venture.platforms.map((platform) => (
                  <span
                    className="text-neutral-100 text-xs font-medium bg-background-main px-[11px] py-1 border border-neutral-10 rounded-full leading-4"
                    key={platform}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
