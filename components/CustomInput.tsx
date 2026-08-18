import React from "react";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "mobile" | "password" | "number" | "description";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  countryCode?: string;
  onCountryCodeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function CustomInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  countryCode = "+91",
  onCountryCodeChange,
  className = "",
}: CustomInputProps) {
  const isMobile = type === "mobile";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-text-main text-sm font-medium">{label}</label>
      {type === "description" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          className="bg-background-main border border-neutral-10 rounded-[18px] px-4 py-[14px] placeholder:text-neutral-50 text-sm outline-none resize-none"
        />
      ) : (
        <div className="flex gap-2">
          {isMobile && (
            <input
              type="text"
              value={countryCode}
              onChange={onCountryCodeChange}
              className="px-4 py-[14px] bg-background-surface text-text-secondary border border-neutral-10 rounded-[18px] w-14 text-sm text-center outline-none"
              aria-label="Country code"
            />
          )}

          <input
            type={isMobile ? "tel" : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-1 bg-background-main border border-neutral-10 rounded-[18px] px-4 py-[14px] placeholder:text-neutral-50 text-sm outline-none"
          />
        </div>
      )}
    </div>
  );
}
