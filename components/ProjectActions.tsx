import { whatsaapNumber } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function ProjectActions() {
  return (
    <div className="flex flex-wrap gap-3 sm:flex-nowrap justify-center items-center sm:justify-start sm:items-start">
      {/* Primary Action Button */}
      <Link
        href={"tel:" + whatsaapNumber}
        className="group flex shrink-0 items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold leading-5 text-text-primary transition-all duration-300 ease-out hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <span>Start a Project</span>
        <Image
          src="/icons/arrowRight.svg"
          alt="start a project"
          width={16}
          height={16}
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </Link>

      {/* WhatsApp Secondary Button */}
      <a
        href={"https://wa.me/" + whatsaapNumber}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex shrink-0 items-center gap-2 rounded-full border border-neutral-25 bg-neutral-5 px-7 py-4 text-sm font-semibold leading-5 text-neutral-100 transition-all duration-300 ease-out hover:border-background-green active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="Talk on WhatsApp"
          width={20}
          height={20}
          className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[12deg]"
        />
        <span>Talk on WhatsApp</span>
      </a>
    </div>
  );
}

export function StartProjectButton({
  children = "Start a project",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={"tel:" + whatsaapNumber}
      className="group rounded-full gap-[6px] flex justify-center items-center py-[17px] px-8 text-text-primary text-base leading-6 font-semibold bg-text-gradient shadow-box-shadow transition-all duration-300 ease-out hover:opacity-95 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <span>{children}</span>

      <Image
        src="/icons/button-arrow.svg"
        alt=""
        width={16}
        height={16}
        className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}