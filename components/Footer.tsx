import {
  footerSections,
  navOptions,
  privacyOptions,
  socialsLinks,
  whatsaapNumber,
} from "@/utils/constants";
import { year } from "@/utils/functions/UniversalFunctions";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background-main text-white bg-radial pt-11 px-6 sm:px-12 xl:px-[100px]">
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-70 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(34, 167, 232, 0) 0%, #22A7E8 50%, rgba(34, 167, 232, 0) 100%)",
        }}
      />
      <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start lg:justify-between gap-10 lg:gap-12">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-5 lg:gap-20">
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start text-center lg:text-start gap-6">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/logo.png"
                alt="Empedance Consultancy Services Logo"
                width={87}
                height={56}
                priority
              />
            </Link>
            <p className="text-sm text-neutral-60 leading-[22.75px] lg:max-w-64 w-full">
              A digital-engineering studio crafting web, mobile, AI and
              white-label platforms that users adore.
            </p>

            <div className="flex gap-3">
              {socialsLinks?.map((option, i) => (
                <Link
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                >
                  <Image
                    src={option.linkType}
                    alt={option.url}
                    width={40}
                    height={40}
                  />
                </Link>
              ))}
            </div>
          </div>

          <nav
            aria-label="Explore Navigation"
            className="flex flex-col justify-center items-center lg:justify-start lg:items-start pt-0 sm:pt-4 gap-6"
          >
            <h3 className="text-neutral-50 uppercase leading-5 tracking-[1.4px] font-bold text-sm font-heading">
              Explore
            </h3>
            <ul className="text-lg flex flex-row flex-wrap lg:flex-col lg:justify-start lg:items-start justify-center items-center gap-4 list-none p-0 m-0">
              {navOptions?.map((option) => (
                <li key={option.name}>
                  <Link
                    href={option.link}
                    className="gap-8 text-sm font-medium leading-5 text-neutral-80 capitalize hover:text-neutral-70 transition-colors"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid xs:grid-cols-2 gap-10 md:gap-24 items-start pt-0 lg:pt-4">
          {footerSections?.map((section) => (
            <nav
              key={section.title}
              aria-label={section.title}
              className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start gap-6"
            >
              <h3 className="text-neutral-50 uppercase leading-5 tracking-[1.4px] font-bold text-sm font-heading">
                {section.title}
              </h3>

              <ul className="flex flex-col gap-4 list-none p-0 m-0 lg:max-w-56">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="text-sm font-medium leading-5 text-neutral-80 hover:text-neutral-70 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {section.button && (
                <div>
                  <Link
                    href={"tel:" + whatsaapNumber}
                    className="inline-flex w-fit gap-2 items-center justify-center rounded-full bg-neutral-100 px-5 py-3 text-sm font-semibold text-background-main hover:opacity-90 transition-opacity"
                  >
                    {section.button.label}
                    <Image
                      src="/icons/arrowup.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                    />
                  </Link>
                </div>
              )}
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-10 text-center mt-12 sm:mt-16 flex flex-col py-8 gap-2 justify-center items-center lg:flex-row lg:justify-between">
        <small className="block text-sm font-medium leading-5 text-neutral-50">
          © {year} Empedance Consultancy Services Pvt Ltd. All rights reserved.
        </small>
        <div className="flex flex-row flex-wrap justify-center gap-4 text-sm font-medium leading-5 text-neutral-50">
          {privacyOptions?.map((item, index) => (
            <span key={item.link} className="flex  gap-4">
              <Link href={item.link} className="hover:text-neutral-70">
                {item.name}
              </Link>
              {index !== privacyOptions.length - 1 && <span>|</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
