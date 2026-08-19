import TitleTag from "@/components/TitleTag";
import BlogEditor from "./BlogEditor";
import SectionHeader from "@/components/SectionHeaderProps";

export default function ImageCompressorPage() {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <header className="max-w-3xl text-center flex flex-col gap-3 justify-center items-center">
        <TitleTag title="Word2HTML" />

        <SectionHeader
          className="justify-center text-center"
          title={
            <>
              Transform Word Text into{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                HTML
              </span>
            </>
          }
        />
      </header>
      <BlogEditor />
    </div>
  );
}
