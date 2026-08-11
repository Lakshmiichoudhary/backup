import ProjectActions from "@/components/ProjectActions";

export default function BuildWithUsSection() {
  return (
    <section
      aria-labelledby="build-with-us-heading"
      className="bg-background-main px-6 py-24 sm:px-12 xl:px-[100px]"
    >
      <div className="flex flex-col items-center justify-center gap-10 rounded-[40px] bg-text-primary bg-secondary-gradient py-[72px]">
        <header className="flex flex-col items-center gap-5">
          <h2
            id="build-with-us-heading"
            className="font-heading text-center text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[63px] tracking-[-1.5px] text-neutral-100"
          >
            Let&apos;s build something <br />
            <span className="bg-text2-gradient bg-clip-text text-transparent">
              users adore.
            </span>
          </h2>

          <p className="max-w-2xl text-center text-lg leading-7 text-neutral-80">
            Tell us about your product. We&apos;ll show you how to take it from
            idea to launch — engineered end to end.
          </p>
        </header>
        <ProjectActions />
      </div>
    </section>
  );
}