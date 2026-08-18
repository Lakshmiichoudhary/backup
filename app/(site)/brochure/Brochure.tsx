import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { capabilities } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export default function Brochure() {
  return (
    <section className="py-[108px] px-6 sm:px-12 xl:px-[100px] pt-36 flex flex-col gap-14 justify-center items-center">
      <header className="flex flex-col gap-5 justify-center items-center text-center">
        <TitleTag title="Brochure" />

        <SectionHeader
          className="text-center items-center"
          title={
            <>
              Get the full{" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                Empedance deck.
              </span>
            </>
          }
          description="One document with everything you need to evaluate us — services, platforms,
work and process."
        />
      </header>
      <div className="bg-radial flex flex-col md:flex-row justify-between items-center gap-10 border border-neutral-8 bg-background-secondary rounded-[32px] p-12 w-full max-w-[958px]">
        <div className="flex flex-col gap-6">
          <div className="w-14 h-14 rounded-[22px] shadow-box-shadow flex justify-center items-center bg-text-gradient">
            <Image
              src={"/icons/listicon.svg"}
              alt="Empedance Company Profile 2026"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-neutral-100 text-2xl font-bold leading-[32px] tracking-[-0.6px] font-heading">
              Empedance Company Profile 2026
            </p>
            <p className="text-[#8B99AC] text-base">
              PDF · ~4 MB · Updated this quarter
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {capabilities.map((item, index) => (
              <div key={index} className=" text-neutral-100 text-sm flex gap-3">
                <div className="w-5 h-5 bg-[#0F2233] rounded-full flex justify-center items-center">
                  <Image
                    src={"/icons/blue-tick.svg"}
                    alt={item}
                    width={12}
                    height={12}
                  />
                </div>
                {item}
              </div>
            ))}
          </div>
          <a
            href="/brochure/empedance-brochure.pdf"
            download="Empedance_Company_Profile_2026.pdf"
            className="bg-brand text-text-primary flex items-center justify-center gap-2 mt-2 text-sm font-semibold py-4 px-7 rounded-full w-fit hover:opacity-90 transition-opacity"
          >
            <Image
              src="/icons/downloadIcon.svg"
              alt="Download Brochure"
              width={16}
              height={16}
            />
            Download Brochure
          </a>
        </div>
        <div className="bg-background-main rounded-[22px] border border-neutral-8 p-5 shadow-blue-glow">
          <Image
            src={"/images/brochure.png"}
            alt="brochure"
            width={261}
            height={261}
          />
        </div>
      </div>
    </section>
  );
}
