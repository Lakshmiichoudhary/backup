//Strictly Static
import Decor from "@/components/Decore";
import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { services, tags } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhatWeDO() {
  return (
    <section className="w-full bg-background-secondary py-[108px] px-6 sm:px-12 xl:px-[100px] flex flex-col gap-16">
      <header className="flex flex-col gap-5">
        <TitleTag title="What we do" />
        <SectionHeader
          title={
            <>
              What can we do{" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                for you?
              </span>
            </>
          }
          description="From a single screen to an entire platform — a full-stack studio that designs, builds and grows your product."
        />
      </header>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex w-full flex-col gap-5 ">
          <article
            className="bg-radial border relative overflow-hidden
        border-neutral-8 p-10 rounded-[22px] flex flex-col gap-[72px]"
          >
            <Decor variant="card" />
            <div className="flex flex-col gap-5 max-w-md">
              <Image
                src="/icons/AI-Integrated.svg"
                alt="AI-Integrated Product Engineering"
                width={56}
                height={56}
              />
              <h1 className="text-2xl md:text-4xl font-heading text-neutral-100 font-bold leading-[45px] tracking-[-0.9px]">
                AI-Integrated Product Engineering
              </h1>
              <p className="text-neutral-80 text-base leading-[26px]">
                We embed intelligent automation, assistants and prediction into
                products — turning workflows into competitive advantages.
              </p>

              <div className="flex flex-wrap gap-1">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-8 bg-background-main px-3 py-[5px] font-medium text-xs text-neutral-100 leading-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={"services/agentic-ai-engineering"}
              className="text-brand group text-sm font-semibold leading-5 flex gap-[6px] items-center"
            >
              <span className="relative">
                Learn more
                <span
                  className="
        absolute -bottom-1 left-0 h-px w-0
        bg-current
        transition-all duration-300
        group-hover:w-full
      "
                />
              </span>
              <Image
                src={"/icons/brandMainArrow.svg"}
                alt="Learn More"
                width={16}
                height={16}
                className="
      transition-transform duration-300
      group-hover:translate-x-1
    "
              />
            </Link>
          </article>

          <article className="flex flex-col md:flex-row gap-5">
            <ServiceCard {...services[2]} className="flex-1" />

            <ServiceCard {...services[3]} className="flex-1" />
          </article>
        </div>

        <article className="sm:min-w-[392px] grid md:grid-cols-2 xl:grid-cols-1 gap-5 ">
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[1]} />
          <ServiceCard {...services[4]} />
        </article>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
  className?: string;
  descriptionClassName?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
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
        bg-background-secondary
        p-6 flex flex-col justify-between gap-3
        ${className}
      `}
    >
      <div>
        <Image src={icon} alt={title} width={48} height={48} />

        <h3
          className={`
          font-heading leading-7 mt-5 tracking-[-0.45px] text-lg font-bold text-neutral-100
        `}
        >
          {title}
        </h3>

        <p
          className={`
           text-neutral-80 text-sm leading-[22px] mt-[2px] ${descriptionClassName}
        `}
        >
          {description}
        </p>
      </div>

      <Link
        href={""}
        className="text-brand group text-sm font-semibold leading-5 flex gap-[6px] items-center"
      >
        <span className="relative">
          Learn more
          <span
            className="
        absolute -bottom-1 left-0 h-px w-0
        bg-current
        transition-all duration-300
        group-hover:w-full
      "
          />
        </span>
        <Image
          src={"/icons/brandMainArrow.svg"}
          alt="Learn More"
          width={16}
          height={16}
          className="
      transition-transform duration-300
      group-hover:translate-x-1
    "
        />
      </Link>
    </article>
  );
}
