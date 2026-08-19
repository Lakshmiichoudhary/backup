import TitleTag from "@/components/TitleTag";
import type { Metadata } from "next";
import { HiOutlineClock, HiOutlineMail } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Data Deletion Request | Empedance Consultancy Services",
  description:
    "Request deletion of your personal data held by Empedance Consultancy Services Pvt Ltd. Learn how to submit a data deletion request and the expected processing time.",
  keywords: [
    "Empedance data deletion",
    "data deletion request",
    "personal data deletion",
    "Empedance Consultancy Services",
    "privacy request",
  ],
  alternates: {
    canonical: "https://empedance.com/data-deletion",
  },
  openGraph: {
    title: "Data Deletion Request | Empedance Consultancy Services",
    description:
      "Learn how to request deletion of your personal data from Empedance Consultancy Services Pvt Ltd.",
    url: "https://empedance.com/data-deletion",
    siteName: "Empedance Consultancy Services",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataDeletionPage() {
  return (
    <main className="relative overflow-hidden bg-background-main px-4 pt-28 py-12 md:px-6 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial"
      />

      <article className="relative mx-auto w-full max-w-4xl">
        <div className="overflow-hidden rounded-[22px] border border-neutral-10 bg-background-secondary shadow-box-shadow">
          <header className="pb-8 pt-10 text-center flex flex-col justify-center items-center sm:py-10">
            <TitleTag title="Privacy Request" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-sm">
              We respect your privacy and your right to control your personal
              data. If you would like us to delete your personal information,
              you can submit a request using the details below.
            </p>
          </header>

          {/* Content */}
          <div className="px-6 pb-8 sm:px-10 md:px-16 md:pb-12">
            <section
              aria-labelledby="deletion-request"
              className="rounded-[22px] border border-neutral-8 bg-background-surface p-5 sm:p-7"
            >
              <h2
                id="deletion-request"
                className="text-xl font-bold text-text-main sm:text-xl"
              >
                How to Request Data Deletion
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-secondary ">
                To request deletion of your personal data, please send us an
                email with the following details:
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-neutral-8 bg-background-secondary">
                <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-8 text-xl text-brand">
                    <HiOutlineMail aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Email
                    </p>

                    <a
                      href="mailto:saurabh.kumar@empedance.com?subject=Data%20Deletion%20Request"
                      className="break-all text-sm font-semibold text-brand transition-opacity hover:opacity-80 sm:text-base"
                    >
                      saurabh.kumar@empedance.com
                    </a>
                  </div>
                </div>

                <div className="mx-5 border-t border-neutral-8" />

                {/* Subject */}
                <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-8 text-sm font-bold text-brand">
                    Aa
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Subject
                    </p>

                    <p className="text-sm font-semibold text-brand sm:text-base">
                      Data Deletion Request
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:saurabh.kumar@empedance.com?subject=Data%20Deletion%20Request"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-[13px] text-sm font-bold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:text-sm"
              >
                <HiOutlineMail aria-hidden="true" className="text-xl" />
                Send Deletion Request
              </a>
            </section>

            <section
              aria-labelledby="processing-time"
              className="mt-5 flex gap-4 rounded-2xl border border-neutral-8 bg-background-secondary p-5 sm:items-center sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-8 text-xl text-brand">
                <HiOutlineClock aria-hidden="true" />
              </div>

              <div>
                <h2
                  id="processing-time"
                  className="text-base font-bold
                   text-text-main sm:text-base"
                >
                  Processing Time
                </h2>

                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  We process deletion requests within{" "}
                  <strong className="text-text-main">
                    7 working days
                  </strong>
                  .
                </p>
              </div>
            </section>

            <footer className="mt-8 border-t border-neutral-8 pt-6 text-center">
              <p className="text-sm font-semibold text-[var(--text-main)]">
                Empedance Consultancy Services Pvt Ltd
              </p>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                For any questions regarding your personal data, please contact
                us at{" "}
                <a
                  href="mailto:saurabh.kumar@empedance.com"
                  className="font-medium text-text-main hover:opacity-80"
                >
                  saurabh.kumar@empedance.com
                </a>
                .
              </p>
            </footer>
          </div>
        </div>
      </article>
    </main>
  );
}
