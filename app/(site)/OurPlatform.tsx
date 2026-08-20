"use client";

import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { platforms, whatsaapNumber } from "@/utils/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function OurPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const activePlatform = platforms?.[activeIndex];

  if (!activePlatform || !platforms?.length) return null;

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (_current: number, next: number) => {
      setActiveIndex(next);
    },
  };

  const handlePlatformChange = (index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <section className="bg-radial bg-background-secondary py-[108px] px-6 sm:px-12 xl:px-[100px] flex flex-col gap-32 justify-center items-center">
      <header className="flex flex-col gap-5 justify-center items-center text-center">
        <TitleTag title="OUR PLATFORMS" />

        <SectionHeader
          className="text-center items-center"
          title={
            <>
              Ready-built platforms <br />
              <span className="text-transparent bg-clip-text bg-text-gradient">
                you can launch under your own brand
              </span>
            </>
          }
          description="Three in-house, white-label-ready products — fully customizable and fast to deploy for your business."
        />
      </header>

      <div className="flex flex-col lg:flex-row w-full gap-20">
        <div className="flex flex-col gap-[51px] lg:w-1/2">
          <div className="flex flex-col gap-3">
            {platforms.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={item.productName}
                  onClick={() => handlePlatformChange(index)}
                  className={`
                    cursor-pointer border w-full
                    p-[17px]
                    flex
                    gap-4 items-center rounded-[22px]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "border-[#22A7E880] bg-[#0A0D1480]"
                        : "border-neutral-8"
                    }
                  `}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-[18px] flex justify-center items-center
                      shrink-0 transition-all duration-300
                      ${isActive ? "bg-background-green" : "bg-background-main"}
                    `}
                  >
                    <span
                      className={`h-6 w-6 transition-colors duration-300 ${
                        isActive ? "bg-text-primary" : "bg-neutral-60"
                      }`}
                      style={{
                        maskImage: `url(${item.icon})`,
                        WebkitMaskImage: `url(${item.icon})`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-neutral-100 font-heading text-base leading-6 tracking-[-0.4px]">
                      {item.productName}
                    </h3>

                    <p className="text-neutral-60 text-sm leading-5">
                      {item.tagline}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <article className="bg-background-secondary flex flex-col gap-6 border border-background-main py-7 px-6 rounded-[22px]">
            <div className="flex flex-col gap-5">
              <p className="text-neutral-60 text-sm leading-[22px]">
                {activePlatform.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {activePlatform.features.map((feature) => (
                  <span
                    className="text-neutral-100 flex items-center gap-[6px] text-xs font-medium bg-background-main px-[13px] py-[7px] border border-neutral-10 rounded-full leading-4"
                    key={feature}
                  >
                    <Image
                      src="/icons/blue-tick.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                className="group bg-brand px-5 py-[13px] flex items-center gap-1.5 text-xs md:text-sm font-semibold leading-5 rounded-full text-text-primary transition-all duration-300 hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <span>White-label this for your brand</span>
                <Image
                  src="/icons/arrowRight.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </button>

              <Link
                href={`tel:${whatsaapNumber}`}
                className="border border-neutral-8 px-5 py-[13px] text-xs md:text-sm font-semibold leading-5 rounded-full text-neutral-100 transition-all duration-300 hover:bg-neutral-8/10 hover:border-neutral-20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-20"
              >
                Request a demo
              </Link>
            </div>
          </article>
        </div>

        <div className="relative flex lg:w-1/2 w-full h-full flex-col">
          <div className="absolute inset-0 bg-background-green rounded-[32px] opacity-35 p-5 blur-[30px]" />

          <div className="relative w-full">
            <div className="bg-background-main rounded-t-[22px] py-[15px] px-4 border-b border-neutral-10 flex items-center gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                {platforms.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={item.productName}
                      type="button"
                      onClick={() => handlePlatformChange(index)}
                      className={`
                        w-[10px]
                        h-[10px]
                        rounded-full
                        transition-all
                        duration-300
                        cursor-pointer
                        ${isActive ? "bg-neutral-25" : "bg-neutral-16"}
                      `}
                    />
                  );
                })}
              </div>

              <p className="text-neutral-50 text-xs">
                {activePlatform.category.join(" · ")}
              </p>
            </div>

            <article className="bg-background-main p-4 py-[17px] w-full rounded-b-[22px] overflow-hidden">
              <Slider ref={sliderRef} {...sliderSettings}>
                {platforms.map((platform) => (
                  <div key={platform.productName} className="outline-none">
                    <Image
                      src={platform.image}
                      alt={platform.productName}
                      width={1000}
                      height={350}
                      className="w-full h-auto object-contain rounded-[22px] transition-opacity duration-300"
                    />
                  </div>
                ))}
              </Slider>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
