import Image from "next/image";

type Variant = "card";

export default function Decor({ variant }: { variant: Variant }) {
  if (variant === "card") {
    return (
      <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
        <Image
          width={288}
          height={288}
          className="w-[288px] h-[288px]"
          alt="Gradient"
          src="/images/GradientDecore.png"
        />
      </div>
    );
  }

  return null;
}
