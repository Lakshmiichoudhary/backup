import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { agenticAiQuestions } from "@/utils/constants";
import { FaPlus } from "react-icons/fa6";
import React from "react";

export const Faq = () => {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-main flex flex-col justify-center items-center gap-14">
      <header className="flex flex-col gap-5">
        <TitleTag title="FAQ" className=" text-text-secondary" />
        <SectionHeader
          title={
            <>
              Questions,{" "}
              <span className="text-transparent bg-clip-text bg-icon-gradient">
                answered.
              </span>
            </>
          }
        />
      </header>
      <div className="max-w-2xl w-full flex flex-col">
        {agenticAiQuestions.map((faq) => {
          return (
            <details
              key={faq.question}
              className="border-y-[0.8px] border-neutral-8 py-[26px] group flex flex-col"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-text-main font-heading text-lg font-bold leading-[-0.4px]">
                  {faq.question}
                </span>

                <div className="flex-shrink-0 w-8 h-8 border border-neutral-8 rounded-full  flex items-center justify-center text-text-secondary transition-transform duration-300 group-open:bg-icon-gradient group-open:text-text-primary group-open:rotate-45">
                  <FaPlus size={16} />
                </div>
              </summary>
              <p className="text-base mt-7  leading-[26px] text-text-secondary">
                {faq.answer}
              </p>
            </details>
          );
        })}
      </div>
    </section>
  );
};
