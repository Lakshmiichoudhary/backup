import { contactOptions } from "@/utils/constants";
import Image from "next/image";

export function ContactOptions() {
  return (
    <section className="flex flex-col gap-[10px] w-full">
      <div className="flex flex-col gap-2">
        {contactOptions?.map((item) => {
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.type === "external" ? "_blank" : undefined}
              rel={item.type === "external" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-[22px] border border-neutral-8 bg-background-secondary p-[21px] hover:border-none  hover:bg-text-gradient"
            >
              <div className="w-12 h-12 rounded-[18px] flex justify-center items-center bg-[#0F2233] group-hover:bg-[#7DD3FC]">
                <span
                  className="h-6 w-6 bg-[#7DD3FC] transition-colors duration-200 group-hover:bg-text-primary"
                  style={{
                    maskImage: `url(${item.icon})`,
                    WebkitMaskImage: `url(${item.icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm  text-text-secondary group-hover:text-[#04121BCC]">
                  {item.title}
                </p>

                <p className="mt-1 text-base tracking-[-0.4px] font-bold group-hover:text-text-primary text-text-main">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="bg-radial rounded-[22px] group border border-neutral-8 min-h-[300px] bg-background-surface flex justify-center items-center">
        <a
          href="https://maps.app.goo.gl/hMazTP4GPcrwvKBe6"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full   hover:-translate-y-1
        hover:border-brand bg-background-secondary flex justify-center items-center gap-2 py-[10px] px-4"
        >
          <Image
            src={"/icons/location-blue.svg"}
            alt="location"
            width={16}
            height={16}
          />
          <p className="text-text-main font-medium leading-5 text-sm">
            Bengaluru
          </p>
        </a>
      </div>
    </section>
  );
}
