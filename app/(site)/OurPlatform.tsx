"use client";

import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { platforms } from "@/utils/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    <Image
                      src={item.icon}
                      alt={item.productName}
                      width={24}
                      height={24}
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
              <button className="bg-brand px-5 py-[13px] flex items-center gap-1 text-xs md:text-sm font-semibold leading-5 rounded-full text-text-primary">
                White-label this for your brand
                <Image
                  src="/icons/arrowRight.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>

              <button className="border border-neutral-8 px-5 py-[13px] text-sm font-semibold leading-5 rounded-full text-neutral-100">
                Request a demo
              </button>
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
                        ${isActive ? "bg-neutral-50" : "bg-neutral-25"}
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
                      className="w-full h-auto object-contain transition-opacity duration-300"
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