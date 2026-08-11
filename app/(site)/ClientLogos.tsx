import { allLogos } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const LOOPED_IMAGES = [...allLogos, ...allLogos];

function ClientLogos() {
  return (
    <section className="bg-background-surface py-[70px] flex flex-col gap-[77px]">
      <div className="flex flex-col gap-8">
        <h3 className="text-neutral-100 uppercase text-sm leading-5 tracking-[1.4px] font-medium text-center">
          Trusted by ambitious teams
        </h3>
        <div className="overflow-hidden">
          <div className="flex gap-[66px] ribbon-scroll w-max">
            {LOOPED_IMAGES.map((item, i) => (
              <div
                key={i}
                className="relative lg:w-auto lg:h-[88px] flex-shrink-0"
              >
                <Image
                  src={item}
                  alt={`gallery-${i}`}
                  width={135}
                  height={88}
                  quality={80}
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-12 xl:px-[100px] flex flex-col justify-center items-center">
        <div className="bg-background-main p-12 rounded-[26px] border border-neutral-8 w-fit max-w-3xl">
          <Image
            src={"/icons/doubleQuote.png"}
            alt={""}
            width={40}
            height={40}
          />
          <p className="text-neutral-100 mt-4 text-3xl font-medium leading-[41px] tracking-[-0.75px] font-heading">
            &quot;Empedance didn&apos;t just build our app — they re-
            architected how our whole business operates online. Bookings up
            3x.&quot;
          </p>

          <div className="flex flex-col mt-6">
            <span className="text-neutral-100 text-base leading-6">
              Aarav Mehta
            </span>
            <span className="text-neutral-80 text-sm leading-5">
              Founder, Fit Capital
            </span>
          </div>
          <div className="mt-8 flex gap-8 items-center">
            <div className="flex gap-3">
              <div className="rounded-full flex justify-center items-center border border-neutral-8 w-10 h-10">
                <Image
                  src={"/icons/leftIcon.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="rounded-full flex justify-center items-center border border-neutral-8 w-10 h-10">
                <Image
                  src={"/icons/rightIcon.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-brand h-[6px] w-6 rounded-full"></div>
              <div className="bg-neutral-8 rounded-full w-[6px] h-[6px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
