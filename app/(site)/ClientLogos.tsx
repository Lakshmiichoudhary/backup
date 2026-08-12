"use client";

import { allLogos, testimonials } from "@/utils/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LOOPED_IMAGES = [...allLogos, ...allLogos];

function ClientLogos() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <section className="bg-background-surface py-[70px] flex flex-col gap-[77px]">
      <div className="flex flex-col gap-8">
        <h2 className="text-neutral-100 uppercase text-sm leading-5 tracking-[1.4px] font-medium text-center">
          Trusted by ambitious teams
        </h2>
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

      <div className="px-6 sm:px-12 xl:px-[100px] flex flex-col justify-center items-center w-full">
        <div className="bg-background-main p-8 sm:p-12 rounded-[26px] border border-neutral-8 w-full max-w-3xl">
          <Image src="/icons/doubleQuote.png" alt="" width={40} height={40} />

          <div className="mt-4">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <article key={index}>
                  <blockquote className="text-neutral-100 text-2xl sm:text-3xl font-medium leading-[36px] sm:leading-[41px] tracking-[-0.75px] font-heading">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <footer className="flex flex-col mt-6">
                    <cite className="text-neutral-100 text-base leading-6">
                      {testimonial.name}
                    </cite>

                    <span className="text-neutral-80 text-sm leading-5">
                      {testimonial.role}
                    </span>
                  </footer>
                </article>
              ))}
            </Slider>
          </div>

          <div className="mt-8 flex gap-8 items-center">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous testimonial"
                className="rounded-full flex justify-center items-center border border-neutral-8 w-10 h-10 hover:bg-background-surface transition-colors"
              >
                <Image
                  src="/icons/leftIcon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>

              <button
                type="button"
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next testimonial"
                className="rounded-full flex justify-center items-center border border-neutral-8 w-10 h-10 hover:bg-background-surface transition-colors"
              >
                <Image
                  src="/icons/rightIcon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => sliderRef.current?.slickGoTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-brand w-6 h-[6px]"
                      : "bg-neutral-8 w-[6px] h-[6px]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
