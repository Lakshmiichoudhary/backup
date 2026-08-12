"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navOptions } from "@/utils/constants";

export default function Navbar() {
  const location = usePathname();

  const [isNavOpen, setNavOpen] = useState(false);
  const [isAnimateNavButton, setAnimateNavButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleNav = () => {
    setNavOpen((prev) => !prev);
    setAnimateNavButton(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between py-5 text-center font-outfit
        max-md:flex-col max-md:px-[5vw]
        md:px-10
        xl:px-[100px]
        ${
          isScrolled
            ? "bg-background-secondary bg-radial"
            : "bg-transparent"
        }`}
    >
      {isNavOpen && (
        <div
          className="fixed inset-0 z-0 h-screen bg-background-secondary md:hidden"
          onClick={handleToggleNav}
        />
      )}

      
      <div className="z-20 flex w-full items-center justify-between md:w-auto">
        <Link href="/">
          <Image
            width={87}
            height={57}
            src="/images/logo.png"
            alt="Logo"
            className="h-[57px] w-[87px]"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          onClick={handleToggleNav}
          className={`flex w-max cursor-pointer flex-col gap-[7px] md:hidden
            ${
              isNavOpen
                ? "relative mr-4 h-8 w-8 items-center justify-center"
                : ""
            }`}
        >
          <span
            className={`h-[2px] w-7 rounded-full bg-neutral-100 ${
              isNavOpen
                ? "rotateRightDiagonal absolute"
                : isAnimateNavButton
                  ? "unwindRightDiagonal"
                  : ""
            }`}
          />

          {!isNavOpen && (
            <span
              className={`h-[2px] w-7 rounded-full bg-neutral-100 ${
                isAnimateNavButton ? "expand-horizontal" : ""
              }`}
            />
          )}

          <span
            className={`h-[2px] w-7 rounded-full bg-neutral-100 ${
              isNavOpen
                ? "rotateLeftDiagonal absolute"
                : isAnimateNavButton
                  ? "unwindLeftDiagonal"
                  : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`
          z-10 flex items-center font-medium
          md:static md:flex
          max-md:absolute max-md:left-0 max-md:right-0 max-md:top-0
          max-md:min-h-screen max-md:flex-col
         
          max-md:bg-background-secondary
          max-md:pb-8 max-md:pt-28
          max-md:shadow-sm
          ${
            isNavOpen
              ? "navSlideDown"
              : "pointer-events-none hidden md:flex"
          }
        `}
      >
        <ul
          className="
            flex items-center gap-8 text-sm font-medium leading-5
            text-neutral-80 capitalize
            max-md:flex-col max-md:gap-6
          "
        >
          {navOptions?.map((option) => (
            <li key={option.link} className="">
              <Link
                href={option.link}
                className="cursor-pointer transition-opacity hover:opacity-70"
              >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="
          z-20 flex items-center justify-center gap-3
          max-md:hidden
        "
      >
        <button className="rounded-full border border-neutral-25 p-3">
          <Image
            src="/icons/theme.svg"
            alt="Theme"
            width={18}
            height={18}
          />
        </button>

        <button className="flex gap-2 rounded-full bg-neutral-100 px-5 py-3 text-sm font-semibold leading-5 text-text-primary">
          <Image
            src="/icons/contact.svg"
            alt="Start a project"
            width={16}
            height={16}
          />
          Start a Project
        </button>
      </div>
    </nav>
  );
}