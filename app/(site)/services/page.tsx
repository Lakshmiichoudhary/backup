import React from "react";
import Header from "./Header";
import Services from "./Services";
import WhereToStart from "./WhereToStart";

function page() {
  return (
    <div className="min-h-screen h-full">
      <Header />
      <Services />
      <WhereToStart />
    </div>
  );
}

export default page;
