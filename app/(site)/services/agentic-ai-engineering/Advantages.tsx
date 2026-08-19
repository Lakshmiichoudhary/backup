import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { empedanceAdvantages } from "@/utils/constants";
import React from "react";

export default function Advantages() {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-surface flex flex-col gap-14">
      <header className="flex flex-col gap-5">
        <TitleTag
          title="The Empedance advantage"
          className=" text-text-secondary"
        />
        <SectionHeader
          title={
            <>
              Outcomes that {" "}
              <span className="text-transparent bg-clip-text bg-icon-gradient">
                matter.
              </span>
            </>
          }
        />
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {empedanceAdvantages?.map((advantage) => (
          <article
            key={advantage.label}
            className={
              "group relative overflow-hidden rounded-[22px] border border-neutral-8 bg-background-secondary lg:h-fit py-7 px-8 xl:px-14 text-center flex flex-col gap-3"
            }
          >
            <h3 className="bg-icon-gradient text-transparent bg-clip-text text-5xl font-heading leading-[48px] font-semibold"> {advantage.label}</h3>
            <p className="text-text-secondary text-sm xl:max-w-52 text-center mx-auto">{advantage.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
