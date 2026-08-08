import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import React from "react";

export default function OurPlatform() {
  return (
    <section className="bg-radial bg-background-secondary py-[108px] px-6 sm:px-12 xl:px-[100px] flex flex-col gap-16 justify-center items-center">
      <header className="flex flex-col gap-5 justify-center items-center text-center">
        <TitleTag title="OUR PLATFORMS" />
        <SectionHeader
          className="text-center items-center"
          title={
            <>
              Ready-built platforms <br />
              <span className="text-transparent bg-clip-text bg-text-gradient">
                you can launch under your ownbrand
              </span>
            </>
          }
          description="Three in-house, white-label-ready products — fully customizable and fast to
deploy for your business."
        />
      </header>
    </section>
  );
}
