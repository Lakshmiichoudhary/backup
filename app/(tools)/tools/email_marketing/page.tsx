import SectionHeader from "@/components/SectionHeaderProps";
import TitleTag from "@/components/TitleTag";
import { FaPaperPlane } from "react-icons/fa";

const features = [
  ["Campaigns", "Create professional email campaigns easily."],
  ["Targeting", "Reach the right audience with smart targeting."],
  ["Analytics", "Track your campaign performance in real time."],
];

export default function MailRedirectPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center">
      <header className="max-w-3xl text-center flex flex-col gap-3 justify-center items-center">
        <TitleTag title="Email Marketing" />

        <SectionHeader
          className="justify-center text-center"
          title={
            <>
              Smart Email Marketing for{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Better Growth
              </span>
            </>
          }
          description="Create campaigns, reach customers, and track results — all in one place."
        />
      </header>

      <section className="mt-10 w-full max-w-3xl rounded-3xl border border-neutral-10 bg-background-secondary p-6 shadow-box-shadow sm:p-10">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-5 text-2xl text-brand">
            <FaPaperPlane />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-text-main">
            Grow with Email Marketing
          </h2>

          <p className="mt-3 text-sm text-text-secondary">
            Powerful tools to connect with your customers and grow your
            business.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {features.map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-10 bg-background-surface p-4"
            >
              <h3 className="font-semibold text-text-main">{title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a
            href="http://mailer.empedance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-text-primary hover:opacity-90"
          >
            <FaPaperPlane />
            Go to Mailer
          </a>
        </div>
      </section>

      <section className="mt-10 w-full max-w-3xl rounded-3xl border border-neutral-10 bg-background-surface p-6 text-center">
        <p className="text-sm text-text-secondary">
          Start creating campaigns and engaging your audience with our Mail
          Marketing Platform.
        </p>
      </section>
    </main>
  );
}
