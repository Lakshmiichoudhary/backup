"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navOptions, whatsaapNumber } from "@/utils/constants";

export default function Navbar() {
  const pathname = usePathname();

  const [isNavOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleToggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    const currentTheme = savedTheme || "dark";

    document.documentElement.classList.toggle("dark", currentTheme === "dark");

    setTheme(currentTheme);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 z-50
          flex w-full items-center
          justify-between
          px-5 py-5
          font-outfit
          transition-all duration-300
          md:px-10
          xl:px-[100px]
          ${
            isScrolled
              ? "bg-background-secondary bg-radial shadow-[0_4px_20px_var(--neutral-5)]"
              : "bg-transparent"
          }
        `}
      >
        <div className="relative z-50 shrink-0">
          <Link href="/" aria-label="Empedance home">
            <Image
              width={87}
              height={57}
              src="/images/logo.png"
              alt="Empedance Logo"
              priority
              className="h-[57px] w-[87px] object-contain"
            />
          </Link>
        </div>

        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-8 text-sm font-medium leading-5 text-neutral-80">
            {navOptions?.map((option) => {
              // const isActive = pathname === option.link;

              return (
                <li key={option.link}>
                  <Link
                    href={option.link}
                    className={`
                      relative
                      cursor-pointer
                      transition-colors duration-200
                      hover:text-brand
                      text-neutral-80
                      
                    `}
                  >
                    {option.name}

                    {/* {isActive && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-brand" />
                    )} */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden items-center justify-center gap-3 lg:flex">
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-neutral-25
              bg-background-secondary
              transition-all duration-200
              hover:border-brand
              hover:bg-neutral-5
            "
          >
            <Image src="/icons/theme.svg" alt="Theme" width={18} height={18} />
          </button>

          <Link
            href={"tel:" + whatsaapNumber}
            className="
              flex items-center gap-2
              rounded-full
              bg-neutral-100
              px-5 py-3
              text-sm font-semibold leading-5
              text-text-primary
              transition-all duration-200
              hover:bg-brand
            "
          >
            <Image
              src="/icons/contact.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            Start a Project
          </Link>
        </div>

        {/* Tablet + Mobile Menu Button */}
        <button
          type="button"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          onClick={handleToggleNav}
          className="
            relative z-50
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            border border-neutral-10
            bg-background-surface
            text-text-main
            transition-all duration-200
            hover:border-brand
            hover:text-brand
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand
            lg:hidden
          "
        >
          {isNavOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isNavOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={handleToggleNav}
            className="
              fixed left-0 right-0 top-0 z-40
              bg-neutral-80
              lg:hidden
            "
          />

          {/* Menu */}
          <div
            className="
              fixed left-0 right-0 top-0 z-40
              overflow-y-auto
              bg-background-secondary
              px-5 pb-10 pt-32
              shadow-[0_20px_40px_var(--neutral-10)]
              md:px-10
              lg:hidden
            "
          >
            <ul className="flex flex-col gap-2">
              {navOptions?.map((option) => {
                const isActive = pathname === option.link;

                return (
                  <li key={option.link}>
                    <Link
                      href={option.link}
                      className={`
                        group flex items-center
                        rounded-xl
                        border
                        px-4 py-4
                        text-sm font-medium
                        transition-all duration-200
                        ${
                          isActive
                            ? "border-brand bg-neutral-5 text-brand"
                            : "border-transparent text-text-secondary hover:border-neutral-10 hover:bg-neutral-5 hover:text-text-main"
                        }
                      `}
                    >
                      <span className="flex-1">{option.name}</span>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-brand" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile/Tablet Actions */}
            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-10 pt-6">
              {/* Theme */}
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  border border-neutral-10
                  bg-background-surface
                  px-4 py-3.5
                  text-sm font-medium
                  text-text-main
                  transition-all duration-200
                  hover:border-brand
                "
              >
                <span>
                  {theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"}
                </span>

                <Image
                  src="/icons/theme.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                />
              </button>

              {/* Start Project */}
              <Link
                href={"tel:" + whatsaapNumber}
                className="
                  flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-neutral-100
                  px-5 py-3.5
                  text-sm font-semibold
                  text-text-primary
                  transition-all duration-200
                  hover:bg-brand
                "
              >
                <Image
                  src="/icons/contact.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
                Start a Project
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
