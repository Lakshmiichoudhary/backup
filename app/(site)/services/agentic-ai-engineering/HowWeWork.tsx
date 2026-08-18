import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { workSteps } from "@/utils/constants";
import React from "react";

export default function HowWeWork() {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-surface flex flex-col gap-14">
      <header className="flex flex-col gap-5">
        <TitleTag title="How we work" className=" text-text-secondary" />
        <SectionHeader
          title={
            <>
              A proven{" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                process
              </span>
            </>
          }
          descriptionClassName="text-text-secondary"
          description="A clear, collaborative path from idea to impact — with no surprises."
        />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {workSteps?.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.label}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  id: string;
  className?: string;
  descriptionClassName?: string;
}

function ServiceCard({
  id,
  title,
  description,
  className = "",
  descriptionClassName = "",
}: ServiceCardProps) {
  return (
    <article
      className={`
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-neutral-8
            bg-background-secondary p-6 flex flex-col justify-between gap-3
            ${className}
          `}
    >
      <div>
        <div className="flex gap-3 items-center">
          <span className="text-text-primary bg-icon-gradient w-10 h-10 flex justify-center items-center rounded-full shrink-0 font-bold text-sm font-heading">
            {id}
          </span>
          <h3
            className={`
              font-heading leading-7 tracking-[-0.45px] text-lg font-bold text-text-main
            `}
          >
            {title}
          </h3>
        </div>
        <p
          className={`
               text-text-secondary text-sm leading-[22px] mt-[14px] ${descriptionClassName}
            `}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
