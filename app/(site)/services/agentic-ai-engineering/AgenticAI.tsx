import { Breadcrumbs } from "@/components/Breadcrumbs";
import TitleTag from "@/components/TitleTag";
import { agenticAiStats } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AgenticAI() {
  return (
    <section className="pb-24 bg-header-gradient px-6 text-neutral-100 sm:px-12 xl:px-[100px] pt-[100px] xxs:pt-40  gap-4 flex flex-col">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "AI & Agentic AI",
          },
        ]}
      />
      <TitleTag
        icon="/icons/ai-icon.svg"
        title="AI product engineering"
        className="border-neutral-20 text-neutral-80"
      />
      <h1 className="text-neutral-100 font-heading font-bold text-4xl md:text-7xl tracking-[-1.8px] max-w-4xl">
        AI & Agentic AI Engineering
      </h1>
      <p className="text-xl text-neutral-90 font-medium">
        Ship intelligent products — not demos that never leave the lab.
      </p>
      <p className="text-neutral-70 text-lg leading-[29px] max-w-2xl">
        We embed LLMs, autonomous agents and predictive intelligence into real
        products your customers use every day. From copilots and RAG-powered
        assistants to multi-step agentic workflows, we design AI systems that
        are accurate, observable and safe to run in production.
      </p>
      <div className="flex flex-wrap gap-3 sm:flex-nowrap mt-9 justify-center items-center sm:justify-start sm:items-start ">
        <button className="flex shrink-0 items-center gap-2 rounded-full bg-neutral-100 px-7 py-4 text-sm font-semibold leading-5 text-text-primary">
          Talk to our experts
          <Image
            src="/icons/arrowRight.svg"
            alt="start a project"
            width={16}
            height={16}
            className="-rotate-45"
          />
        </button>

        <Link
          href={"/services"}
          className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-25 px-7 py-4 text-sm font-semibold leading-5 text-neutral-100"
        >
          All services
        </Link>
      </div>

      <div className="flex flex-col xs:flex-row gap-8 lg:gap-[102px] mt-12 border-t border-neutral-10 w-fit pt-8">
        {agenticAiStats?.map((item) => (
          <div key={item.label}>
            <div className="text-2xl sm:text-4xl font-heading font-bold">{item.value}</div>
            <div className="text-neutral-60 text-sm mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
