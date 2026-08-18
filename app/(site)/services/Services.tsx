import Decor from "@/components/Decore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ServiceCard } from "../whatwedo";
import { services } from "@/utils/constants";

export default function Services() {
  return (
    <section className="w-full bg-background-secondary py-24 px-6 sm:px-12 xl:px-[100px] flex flex-col gap-6">
      <article
        className="bg-radial border relative overflow-hidden
        border-neutral-8 p-10 rounded-[22px] flex flex-col gap-8"
      >
        <Decor variant="card" />
        <div className="flex flex-col gap-5">
          <div className="bg-text-gradient w-14 h-14 flex justify-center items-center rounded-[22px]">
            <Image
              src="/icons/agentic-star.svg"
              alt="AI-Integrated Product Engineering"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-brand text-xs font-medium uppercase tracking-[1.2px]">
              AI product engineering
            </p>
            <h2 className="text-5xl font-heading text-neutral-100 font-bold leading-[48px] tracking-[-1.2px]">
              AI & Agentic AI Engineering
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-text-secondary text-base max-w-2xl">
            <p>
              Ship intelligent products — not demos that never leave the lab.
            </p>
            <p>
              LLM copilots, autonomous agents, RAG assistants and automation
              engineered into production products.
            </p>
          </div>
        </div>
        <Link
          href={"services/agentic-ai-engineering"}
          className="text-brand text-sm font-semibold leading-5 flex gap-[6px] items-center"
        >
          Explore AI & Agentic AI
          <Image
            src={"/icons/brandMainArrow.svg"}
            alt="Learn More"
            width={16}
            height={16}
          />
        </Link>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.describe}
            icon={service.icon}
            descriptionClassName="text-text-secondary mb-2"
          />
        ))}
      </div>
    </section>
  );
}
