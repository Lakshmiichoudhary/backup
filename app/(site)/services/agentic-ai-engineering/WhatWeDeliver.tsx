import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { weDeliver } from "@/utils/constants";
import React from "react";

export const WhatWeDeliver = () => {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-main flex flex-col gap-14">
      <header className="flex flex-col gap-5">
        <TitleTag
          title="Our AI & Agentic AI services"
          className=" text-text-secondary"
        />
        <SectionHeader
          title={
            <>
              What we {" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                deliver.
              </span>
            </>
          }
          descriptionClassName="text-text-secondary"
          description="A complete ai & agentic ai capability — from strategy to launch and beyond."
        />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {weDeliver?.map((service) => (
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
};

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
        bg-background-secondary p-7 flex flex-col justify-between gap-3
        ${className}
      `}
    >
      <div>
        <span className="text-brand font-bold text-sm font-heading">{id}</span>
        <h3
          className={`
          font-heading leading-7 mt-4 tracking-[-0.5px] text-xl font-bold text-text-main
        `}
        >
          {title}
        </h3>

        <p
          className={`
           text-text-secondary text-sm leading-[22px] mt-[2px] ${descriptionClassName}
        `}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
