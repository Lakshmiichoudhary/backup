import { StartProjectButton } from "@/components/ProjectActions";
import Image from "next/image";
import React from "react";

export default function StartProject() {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-main flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl leading-[48px] tracking-[-1.2px] font-heading font-bold text-text-main max-w-lg">
        Ready to start your ai & agentic ai project?
      </h2>
      <p className="text-text-secondary text-base leading-6 mt-2">
        Tell us about your product and we&apos;ll recommend the right mix.
      </p>
      <div className="flex gap-4 mt-8">
        <StartProjectButton />
        <button className="rounded-full  gap-[6px] flex justify-center items-center py-[17px] px-8 text-text-secondary text-base leading-6 font-semibold border border-neutral-8 shadow-box-shadow">
          <Image
            src={"/icons/blue-tick.svg"}
            alt="Not sure where to start?"
            width={16}
            height={16}
          />
          Reply within 1 business day
        </button>
      </div>
    </section>
  );
}
