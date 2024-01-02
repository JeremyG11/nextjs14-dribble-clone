import React from "react";
import { Source_Serif_4 } from "next/font/google";
import HiringSuitePricingCard from "./HiringSuitePricingCard";
import JobBoardPricingCard from "./JobBoardPricingCard";

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function CTAHiring2() {
  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-[#ecfbf9] to-[#e5fcde] pb-20 mt-20">
      <div className="py-20 w-full flex items-center justify-center">
        <h2
          className={`text-5xl mt-5 ${font.className} max-w-xl w-full text-gray-900 md:text-5xl text-center `}
        >
          Find your next creative professional today!{" "}
        </h2>
      </div>
      <div className="relative w-full flex flex-row-reverse justify-center gap-x-10">
        <HiringSuitePricingCard />
        <JobBoardPricingCard />
      </div>
    </div>
  );
}
