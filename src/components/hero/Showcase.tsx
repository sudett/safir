import React from "react";

import Navbar from "./Navbar";
import ShowcaseCenter from "./ShowcaseCenter";
import FlagsContainer from "@/components/hero/FlagsContainer";

export default function Showcase() {
  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-40px)] flex flex-col justify-between bg-slate-200 rounded-3xl p-8">
      <Navbar />
      <ShowcaseCenter />
      <FlagsContainer />
    </div>
  );
}
