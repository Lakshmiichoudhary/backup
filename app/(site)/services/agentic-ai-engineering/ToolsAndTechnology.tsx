import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { technologies } from "@/utils/constants";
import React from "react";

export default function ToolsAndTechnology() {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-main flex flex-col gap-14">
      <header className="flex flex-col gap-5">
        <TitleTag title="Tools & technology" className=" text-text-secondary" />
        <SectionHeader
          title={
            <>
              Built with the{" "}
              <span className="text-transparent bg-clip-text bg-icon-gradient">
                right stack.
              </span>
            </>
          }
          descriptionClassName="text-text-secondary"
          description="Modern, battle-tested tools chosen for performance, reliability and longevity."
        />
      </header>
      <div className="flex flex-wrap gap-3">
        {technologies?.map((technology) => (
          <span
            key={technology}
            className={
              "px-5 text-text-main bg-background-secondary capitalize font-sans py-3 flex items-center gap-2 text-sm font-medium rounded-full border border-neutral-8 w-max "
            }
          >
            <span className={`w-[6px] h-[6px] shrink-0 rounded-full bg-brand`} />

            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
