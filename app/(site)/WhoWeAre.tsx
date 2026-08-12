import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { whoAreWe } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export default function WhoWeAre() {
  return (
    <section className="flex flex-col gap-16 bg-background-main px-6 pb-32 sm:px-12 xl:flex-row  lg:items-center xl:px-[100px]">
      <header className="flex flex-col gap-5">
        <TitleTag title="WHO WE ARE" />

        <SectionHeader
          title={
            <>
              A place built to make brands{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                unforgettable online
              </span>
            </>
          }
          description="Empedance is a team of designers, engineers and strategists
crafting cutting-edge digital presence — mobile & web apps, UI/UX,
SEO and digital marketing, video production, and AI integration that
drives real efficiency and growth."
        />
      </header>

      <div className="grid w-full gap-4 md:grid-cols-3 ">
        {whoAreWe?.map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-neutral-8 bg-background-secondary p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#0F2233]">
              <Image src={item.icon} alt={item.label} width={20} height={20} />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold leading-7 tracking-[-0.45px] text-neutral-100">
              {item.label}
            </h3>

            <p className="mt-1 text-sm leading-5 text-neutral-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
