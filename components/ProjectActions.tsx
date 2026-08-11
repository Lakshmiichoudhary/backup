import Image from "next/image";

export default function ProjectActions() {
  return (
    <div className="flex flex-wrap gap-3 sm:flex-nowrap justify-center items-center sm:justify-start sm:items-start ">
      <button className="flex shrink-0 items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold leading-5 text-text-primary">
        Start a Project
        <Image
          src="/icons/arrowRight.svg"
          alt="start a project"
          width={16}
          height={16}
        />
      </button>

      <button className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-25 bg-neutral-5 px-7 py-4 text-sm font-semibold leading-5 text-neutral-100">
        <Image
          src="/icons/whatsapp.svg"
          alt="Talk on WhatsApp"
          width={20}
          height={20}
        />
        Talk on WhatsApp
      </button>
    </div>
  );
}