import React from "react";

import { Heading1 } from "../shared/Headings";
import JobBoardPricingCard from "./JobBoardPricingCard";
import HiringSuitePricingCard from "./HiringSuitePricingCard";

export default function CTAHiring() {
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-600">
      <div className="text-center space-y-5 mb-10 py-5 px-28">
        <span className="uppercase text-lg text-primary">Dribble Hiring</span>
        <Heading1
          text="Hire the world's top designers"
          className="text-gray-900 md:text-6xl"
        />
        <p className="text-xl sm:mt-4 sm:block leading-8">
          Whether you prefer to actively seek out candidates using Designer
          Search or let designers come to you through our Job Board, Dribbble
          Hiring makes it easier than ever to source top-notch design talent.
        </p>
      </div>
      <div className="w-full flex flex-row-reverse justify-center gap-x-10">
        <HiringSuitePricingCard />
        <JobBoardPricingCard />
      </div>
    </div>
  );
}
