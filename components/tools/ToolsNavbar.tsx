"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { toolsNavOptions } from "@/utils/constants";
import TitleTag from "../TitleTag";

export default function ToolsNavbar() {
  const pathname = usePathname();
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const currentPageName =
    toolsNavOptions.find((option) => option.navLink === pathname)?.name ??
    "Tools";

  return (
    <>
      <nav
        aria-label="Tools navigation"
        className="
          relative z-30
          flex min-h-[76px] items-center
          bg-background-secondary
          text-text-main
          shadow-[0_4px_20px_var(--neutral-5)]
        "
      >
        <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
          {/* Mobile Logo */}
          <Link
            href="/tools"
            aria-label="Empedance home"
            className="flex shrink-0 items-center lg:hidden"
          >
            <Image
              src="/images/logo.png"
              width={44}
              height={44}
              alt="Empedance Logo"
              priority
              className="h-11 w-11 object-contain "
            />
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-center lg:justify-start">
            <h1 className="truncate bg-text-gradient bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              {currentPageName}
            </h1>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-8 w-px bg-neutral-10" />
            <TitleTag title=" Empedance Tools" className="text-text-secondary border-neutral-10" />
          </div>

          <button
            type="button"
            aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isNavOpen}
            onClick={handleToggleNav}
            className="
              flex h-11 w-11 shrink-0
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
              <HiOutlineX className="text-2xl" aria-hidden="true" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={handleToggleNav}
            className="
              fixed inset-0 z-20
              bg-neutral-80
              lg:hidden
            "
          />

          <div
            className="
              fixed left-0 right-0 top-[76px] z-30
              border-b border-neutral-10
              bg-background-secondary
              shadow-[0_20px_40px_var(--neutral-10)]
              lg:hidden
            "
          >
            <div className="px-5 py-6">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  Tools Navigation
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {toolsNavOptions.map((option) => {
                  const isActive = pathname === option.navLink;
                  const Icon = option.icon;

                  return (
                    <li key={option.navLink}>
                      <Link
                        href={option.navLink}
                        aria-current={isActive ? "page" : undefined}
                        className={`
                          group flex items-center gap-3
                          rounded-xl
                          border
                          px-4 py-3.5
                          text-sm font-medium
                          transition-all duration-200
                          ${
                            isActive
                              ? "border-brand bg-neutral-5 text-brand"
                              : "border-transparent text-text-secondary hover:border-neutral-10 hover:bg-neutral-5 hover:text-text-main"
                          }
                        `}
                      >
                        <Icon
                          className={`
                            text-lg transition-colors
                            ${
                              isActive
                                ? "text-brand"
                                : "text-text-secondary group-hover:text-brand"
                            }
                          `}
                          aria-hidden="true"
                        />

                        <span className="flex-1">{option.name}</span>

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-brand" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
