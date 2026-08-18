"use client";
import CustomInput from "@/components/CustomInput";
import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import Image from "next/image";
import React, { useState } from "react";
import { ContactOptions } from "./ContactOptions";
import { toast } from "sonner";
import { isNumber } from "@/utils/functions/UniversalFunctions";
import { mailId } from "@/utils/constants";

export const ContactForm = () => {
  const [countryCode, setCountryCode] = useState("+91");

  const [formData, setFormData] = React.useState({
    full_name: "",
    mobile_number: "",
    email: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    if (
      name === "mobile_number" &&
      (isNumber(value) === false || value.length > 10)
    ) {
      return;
    }

    if (name === "message" && value.length > 200) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");

    if (!formData.full_name.trim()) {
      toast.dismiss();
      toast.info("Please Enter Your Name");
      return;
    }
    if (!formData.mobile_number.trim()) {
      toast.dismiss();
      toast.info("Please Enter Your Mobile Number");
      return;
    }
    if (!formData.email.trim()) {
      toast.dismiss();
      toast.info("Please Enter Your Email");
      return;
    }
    if (!formData.message.trim()) {
      toast.dismiss();
      toast.info("Please Enter Your Message");
      return;
    }

    const subject = encodeURIComponent("Contact Us");

    const body = encodeURIComponent(
      `Name: ${formData.full_name}
Mobile Number: ${countryCode} ${formData.mobile_number}
Email: ${formData.email}
Message: ${formData.message}`,
    );
    //send a mail with all these details
    window.location.href = `mailto:${mailId}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="px-6 text-neutral-100 sm:px-12 xl:px-[100px] pt-44 pb-32  gap-12 flex flex-col">
      <header className="max-w-2xl flex flex-col gap-[10px]">
        <TitleTag
          title="Contact us"
          dotColor="bg-neutral-100"
          className="border-neutral-20 text-text-secondary"
        />

        <SectionHeader
          descriptionClassName="text-text-secondary "
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-transparent bg-clip-text bg-text-gradient">
                users adore.
              </span>
            </>
          }
          description="Tell us about your project and we'll get back within one business day."
        />
      </header>
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <form
          onSubmit={handleSubmit}
          className="border border-neutral-16 w-full lg:max-w-[645px] p-8 pb-12 flex flex-col gap-11 rounded-[26px] backdrop-blur-[8px] bg-neutral-55 shadow-box-shadow"
        >
          <CustomInput
            label="Name"
            placeholder="Your name"
            value={formData.full_name}
            onChange={(e) => handleChange("full_name", e.target.value)}
          />
          <CustomInput
            label="Phone"
            placeholder="00000 00000"
            type="mobile"
            countryCode={countryCode}
            onCountryCodeChange={(e) => setCountryCode(e.target.value)}
            value={formData.mobile_number}
            onChange={(e) => handleChange("mobile_number", e.target.value)}
          />
          <CustomInput
            label="Email"
            placeholder="Your email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <CustomInput
            label="Message"
            type="description"
            placeholder="Tell us about your project…"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <button type="submit" className="py-[15px] rounded-full bg-text-gradient text-text-primary shadow-box-shadow font-semibold text-sm leading-5 flex gap-2 justify-center items-center">
            Send message
            <Image
              src={"/icons/messageIcon.svg"}
              alt="send Message"
              width={16}
              height={16}
            />
          </button>
        </form>

        <ContactOptions />
      </div>
    </section>
  );
};
