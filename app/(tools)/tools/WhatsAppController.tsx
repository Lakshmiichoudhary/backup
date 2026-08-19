"use client";

import ProjectActions from "@/components/ProjectActions";
import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { whatsaapNumber } from "@/utils/constants";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppController() {
  const whatsappMessage = encodeURIComponent("I want to integrate WhatsApp");

  const whatsappLink = `https://wa.me/${whatsaapNumber.replace(
    /\D/g,
    "",
  )}?text=${whatsappMessage}`;

  return (
    <main className="">

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        <header className="max-w-3xl text-center flex flex-col gap-3 justify-center items-center ">
          <TitleTag title="WhatsApp Integration" />

          <SectionHeader
            className="flex justify-center items-center text-center"
            title={
              <>
                Grow with WhatsApp{" "}
                <span className="text-transparent bg-clip-text bg-text-gradient">
                  — Let&apos;s Talk!
                </span>
              </>
            }
            description="Connect your business with WhatsApp to communicate with customers,
            automate conversations, and create a better support experience."
          />
        </header>

        <section className="mt-10 w-full max-w-3xl rounded-3xl border border-neutral-10 bg-background-secondary p-6 shadow-box-shadow sm:p-8 md:p-10">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background-green text-4xl text-text-primary shadow-lg">
              <FaWhatsapp aria-hidden="true" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-text-main sm:text-3xl">
              Integrate WhatsApp into Your Business
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              Want to automate communication, boost customer engagement, or
              streamline your support? We help you connect your business with
              WhatsApp quickly and efficiently.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-background-green
                px-7
                py-3.5
                text-sm
                font-semibold
                text-text-primary
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:opacity-90
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background-secondary
              "
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Start WhatsApp Chat
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-12 w-full max-w-3xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
              Business Benefits
            </p>

            <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
              Why Integrate WhatsApp?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
              Meet your customers where they already communicate and build
              faster, more convenient conversations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Support */}
            <div className="rounded-2xl border border-neutral-10 bg-background-secondary p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-5 text-brand">
                <span className="text-lg font-bold">01</span>
              </div>

              <h3 className="text-base font-bold text-text-main">
                Instant Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Provide customers with fast and convenient communication through
                WhatsApp.
              </p>
            </div>

            {/* Automation */}
            <div className="rounded-2xl border border-neutral-10 bg-background-secondary p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-5 text-brand">
                <span className="text-lg font-bold">02</span>
              </div>

              <h3 className="text-base font-bold text-text-main">
                Automated Messages
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Streamline notifications, updates, and customer communication
                with automation.
              </p>
            </div>

            {/* Conversion */}
            <div className="rounded-2xl border border-neutral-10 bg-background-secondary p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-5 text-brand">
                <span className="text-lg font-bold">03</span>
              </div>

              <h3 className="text-base font-bold text-text-main">
                Better Conversion
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Turn real-time conversations into stronger customer
                relationships and business opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 w-full max-w-3xl flex flex-col gap-3 justify-center items-center  overflow-hidden rounded-3xl border border-neutral-10 bg-background-surface p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold text-text-main sm:text-2xl">
            Ready to connect your business?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-secondary">
            Talk to our team about integrating WhatsApp into your existing
            business workflow.
          </p>

        <ProjectActions />
        </section>
      </div>
    </main>
  );
}
