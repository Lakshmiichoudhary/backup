import TitleTag from "@/components/TitleTag";
import React from "react";

export default function Header() {
  return (
    <section className="pb-24 bg-header-gradient px-6 text-neutral-100 sm:px-12 xl:px-[100px] pt-40  gap-4 flex flex-col">
      <TitleTag
        title="What we do"
        dotColor="bg-neutral-100"
        className="border-neutral-20"
      />
      <h1 className="text-neutral-100 font-heading font-bold text-7xl tracking-[-1.8px] max-w-4xl">
        A full-stack studio for your entire product.
      </h1>
      <p className="text-neutral-70 text-lg leading-[29px] max-w-2xl">
        From a single screen to an entire platform — we design, engineer, market
        and film. Explore each service in depth below.
      </p>
    </section>
  );
}
