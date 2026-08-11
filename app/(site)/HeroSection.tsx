import ProjectActions from "@/components/ProjectActions";
import { stats } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col justify-end">
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/video/empedance.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-0 left-0 right-0 h-[350px] z-10 pointer-events-none bg-hero-bottom-fade" />

      <div className="relative z-20 w-full px-6 sm:px-12 xl:px-[100px] pb-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <section className="lg:col-span-5 flex flex-col gap-[26px]">
          <p className="text-neutral-80 text-base max-w-[481px]">
            Web & mobile apps, UI/UX, AI & agentic AI, SEO and video — Empedance
            takes your product from idea to launch, engineered end to end.
          </p>
          <ProjectActions />
        </section>

        <section className="hidden lg:flex lg:col-span-2  flex-col justify-center items-center text-center">
          <h4 className="text-neutral-60 font-medium text-[10px] uppercase leading-[15px] tracking-[2.5px]">
            Scroll
          </h4>
          <Image
            src={"/icons/scrollIcon.svg"}
            alt="Talk on WhatsApp"
            width={20}
            height={20}
          />
        </section>

        <section className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:justify-end">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 p-[2px]"
            >
              <span className="text-3xl font-bold font-heading text-neutral-100 leading-9">
                {stat.value}
              </span>

              <p className="text-sm leading-5 text-neutral-60">{stat.label}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
