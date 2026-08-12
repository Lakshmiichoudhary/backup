import BuildWithUsSection from "./BuildWithUsSection";
import CaseStudies from "./CaseStudies";
import ClientLogos from "./ClientLogos";
import Completedventures from "./Completedventures";
import HeroSection from "./HeroSection";
import OurPlatform from "./OurPlatform";
import WhatWeDO from "./whatwedo";
import WhoWeAre from "./WhoWeAre";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <HeroSection />
      <WhatWeDO />
      <OurPlatform />
      <Completedventures />
      <CaseStudies />
      <WhoWeAre />
      <ClientLogos />
      <BuildWithUsSection />
    </div>
  );
}
