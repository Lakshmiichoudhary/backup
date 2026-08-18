import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import React from "react";
import { ServiceCard } from "../../whatwedo";
import { services } from "@/utils/constants";

export default function ExploreMore() {
  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] py-32 bg-background-surface flex flex-col gap-14">
      <header className="flex flex-col gap-5">
        <TitleTag title="Explore more" className=" text-text-secondary" />
        <SectionHeader
          title={
            <>
              Other{" "}
              <span className="text-transparent bg-clip-text bg-icon-gradient">
                services.
              </span>
            </>
          }
        />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services?.slice(0,3).map((service) => (
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
