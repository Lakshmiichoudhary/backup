import React, { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`flex flex-col gap-5 ${className}`}>

      <h2 className="text-neutral-100 font-heading text-5xl font-bold tracking-[-1.2px]">
        {title}
      </h2>

      {description && (
        <p className="text-neutral-80 text-base leading-[25px] max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}