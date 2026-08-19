import { whatsaapNumber } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function ProjectActions() {
  return (
    <div className="flex flex-wrap gap-3 sm:flex-nowrap justify-center items-center sm:justify-start sm:items-start ">
      <Link
        href={"tel:" + whatsaapNumber}
        className="flex shrink-0 items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold leading-5 text-text-primary"
      >
        Start a Project
        <Image
          src="/icons/arrowRight.svg"
          alt="start a project"
          width={16}
          height={16}
        />
      </Link>

      <a
        href={"https://wa.me/" + whatsaapNumber}
        target="_blank"
        className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-25 bg-neutral-5 px-7 py-4 text-sm font-semibold leading-5 text-neutral-100"
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="Talk on WhatsApp"
          width={20}
          height={20}
        />
        Talk on WhatsApp
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
      className="rounded-full gap-[6px] flex justify-center items-center py-[17px] px-8 text-[#04121B] text-base leading-6 font-semibold bg-text-gradient shadow-box-shadow"
    >
      {children}

      <Image src="/icons/button-arrow.svg" alt="" width={16} height={16} />
    </Link>
  );
}
