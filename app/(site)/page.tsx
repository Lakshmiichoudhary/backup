import Completedventures from "./Completedventures";
import HeroSection from "./HeroSection";
import OurPlatform from "./OurPlatform";
import WhatWeDO from "./whatwedo";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <HeroSection />
      <WhatWeDO />
      <OurPlatform />
      <Completedventures />
    </div>
  );
}
