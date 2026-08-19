"use client";

import { toolsNavOptions } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { FaSignInAlt } from "react-icons/fa";

export default function ToolsSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex
    w-full
    min-h-screen
    flex-col
    justify-between
    bg-background-secondary
    text-text-main
    
    py-6"
    >
      <div className="flex flex-col items-center">
        <Link href="/" aria-label="Empedance home" className="mb-10">
          <Image
            width={87}
            height={57}
            src="/images/logo.png"
            alt="Logo"
            className="h-[57px] w-[87px]"
          />
        </Link>

        <nav
          aria-label="Tools navigation"
          className="flex w-full flex-col gap-2 px-4"
        >
          {toolsNavOptions.map((item) => {
            const isActive = pathname === item.navLink;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.navLink}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group flex items-center gap-3 rounded-lg
                  border-l-4 px-3 py-3
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-transparent text-text-secondary hover:border-brand/40 hover:bg-neutral-5 hover:text-text-main"
                  }
                `}
              >
                <Icon
                  className={`
                    shrink-0 text-lg transition-colors
                    ${
                      isActive
                        ? "text-brand"
                        : "text-text-secondary group-hover:text-brand"
                    }
                  `}
                  aria-hidden="true"
                />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout
      <div className="px-4">
        <button
          type="button"
          className="
            flex w-full items-center justify-center gap-2
            rounded-lg bg-brand px-4 py-3
            text-sm font-semibold text-text-primary
            transition-all duration-200
            hover:opacity-90
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background-secondary
          "
        >
          <FaSignInAlt
            className="text-base"
            aria-hidden="true"
          />

          <span>Log Out</span>
        </button>
      </div> */}
    </aside>
  );
}
