import Image from "next/image";

interface Props {
  className?: string;
  title: string;
  dotColor?: string;
  icon?: string;
  showDot?: boolean;
}

export default function TitleTag({
  className = "",
  title,
  dotColor = "bg-brand",
  icon,
  showDot = true,
}: Props) {
  return (
    <span
      className={
        "px-5 py-[7px] flex items-center gap-2 text-neutral-80 uppercase leading-4 text-xs font-medium tracking-[1.2px] rounded-full border border-neutral-8 w-fit xxs:w-max " +
        className
      }
    >
      {showDot &&
        (icon ? (
          <Image
            className="flex items-center justify-center shrink-0"
            width={20}
            height={20}
            src={icon}
            alt=""
          />
        ) : (
          <span
            className={`w-[6px] h-[6px] shrink-0 rounded-full ${dotColor }`}
          />
        ))}

      {title}
    </span>
  );
}
