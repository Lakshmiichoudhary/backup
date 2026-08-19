import React from "react";
import AgenticAI from "./AgenticAI";
import { WhatWeDeliver } from "./WhatWeDeliver";
import HowWeWork from "./HowWeWork";
import ToolsAndTechnology from "./ToolsAndTechnology";
import ExploreMore from "./ExploreMore";
import StartProject from "./StartProject";
import Advantages from "./Advantages";
import { Faq } from "./Faq";

export default function page() {
  return (
    <section>
      <AgenticAI />
      <WhatWeDeliver />
      <HowWeWork />
      <ToolsAndTechnology />
      <Advantages />
      <Faq />
      <ExploreMore />
      <StartProject />
    </section>
  );
}
