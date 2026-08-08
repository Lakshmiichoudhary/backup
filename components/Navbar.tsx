"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navOptions } from "@/utils/constants";

export default function Navbar() {
  const [width, setWidth] = useState(0);
  const location = usePathname();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isAnimateNavButton, setAnimateNavButton] = useState(false);
  
  const handleToggleNav = () => {
    setNavOpen((prev) => !prev);
    setAnimateNavButton(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Function to update width on resize
      const handleResize = () => setWidth(window.innerWidth);

      // Set initial width
      setWidth(window.innerWidth);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Timeout to close nav
      const timeOut = setTimeout(() => {
        if (isNavOpen) {
          setNavOpen(false);
        }
      }, 10000);

      // Cleanup function
      return () => {
        clearTimeout(timeOut);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isNavOpen]);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  return (
    <nav
      className={
        "w-full py-5 fixed text-center font-outfit top-0 xl:px-[100px] md:px-10 flex justify-between  items-center max-md:flex-col max-md:px-[5vw] z-10    text-white  "
      }>
      {/*=====================  Background Overlay when nav is open ========================== */}
      {isNavOpen && (
        <div
          className="w-full h-screen absolute items-center  top-0 left-0 bg-black/25"
          onClick={handleToggleNav}></div>
      )}
      <div className="flex max-md:w-full justify-between items-center z-10">
        <Link href={"/"}>
          <Image
            width={87}
            height={57}
            src="/images/logo.png"
            alt=""
            className="w-[87px] h-[57px] "
          />
        </Link>
        {/*=====================  Open nav with cross transition ========================== */}
        <div
          className={
            "flex flex-col w-max gap-[7px] md:hidden cursor-pointer " +
            (isNavOpen
              ? " h-8 justify-center items-center relative w-8 mr-4"
              : "")
          }
          onClick={handleToggleNav}>
          <div
            className={
              "w-7 h-[2px] rounded-full bg-black " +
              (isNavOpen
                ? " rotateRightDiagonal  absolute "
                : isAnimateNavButton
                ? " unwindRightDiagonal"
                : "")
            }></div>

          {!isNavOpen && (
            <div
              className={
                "w-7 h-[2px] rounded-full bg-black false" +
                (isNavOpen
                  ? "  "
                  : isAnimateNavButton
                  ? " expand-horizontal"
                  : "")
              }></div>
          )}

          <div
            className={
              "w-7 h-[2px] rounded-full bg-black " +
              (isNavOpen
                ? " rotateLeftDiagonal  absolute "
                : isAnimateNavButton
                ? " unwindLeftDiagonal"
                : "")
            }></div>
        </div>
        {/*=====================  Close nav with cross transition ========================== */}
      </div>
      {/* Nav items */}
      {(width > 768 || isNavOpen) && (
        <div
          className={
            "flex    md:justify-between items-center max-lg:text-sm   max-md:flex-col gap-4 max-md:pb-8 max-md:pt-28 font-medium   " +
            (isNavOpen
              ? "absolute top-0  bg-neutral-50 navSlideDown shadow-sm "
              : "")
          }>
          <ul className="flex gap-8 text-sm font-medium leading-5 text-neutral-80 capitalize  max-md:flex-col max-md:items-center max-md:justify-center ">
            {navOptions?.map((option, i) => (
              <li
                key={i}
                className={
                  location === option.link
                    ? " "
                    : ""
                }>
                <Link href={option.link}>{option.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
       <div className="flex items-center justify-center gap-3">
        <button className="rounded-full border border-neutral-25 p-3">
          <Image src={"/icons/theme.svg"} alt="start a project" width={18} height={18}/>
        </button>
            <button className="text-sm font-semibold flex leading-5 text-text-primary gap-2 bg-neutral-100 px-5 py-3 rounded-full">
              <Image src={"/icons/contact.svg"} alt="start a project" width={16} height={16}/>
              Start a Project
            </button>
          </div>
    </nav>
  );
}
