import { StartProjectButton } from "@/components/ProjectActions";

const WhereToStart = () => {
  return (
    <section className="w-full bg-background-secondary border-t border-neutral-8 py-24 px-6 sm:px-12 xl:px-[100px] flex flex-col justify-center items-center text-center gap-4">
      <h2 className="text-4xl leading-[40px] tracking-[-0.9px] font-heading font-bold text-neutral-100">
        Not sure where to start?
      </h2>
      <p className="text-text-secondary text-base leading-6">
        Tell us about your product and we&apos;ll recommend the right mix.
      </p>
      <div className="mt-7">
        <StartProjectButton />
      </div>
    </section>
  );
};

export default WhereToStart;
