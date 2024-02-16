import React from "react";

import { Button } from "../shared/Button";
import { Heading1, Heading2 } from "../shared/Headings";

export default function ProCTA() {
  return (
    <>
      <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-600">
        <div className="text-center space-y-3 mb-10 py-2 xl:px-28">
          <span className="uppercase text-lg text-primary">Dribble Hiring</span>
          <Heading1
            text="Grow your design business"
            className="text-gray-900 md:text-6xl"
          />
          <Heading2
            text="Get more eyes on your work and stand out with attention grabbing
            profile features to attract more opportunities."
            className="text-xl sm:mt-4 sm:block leading-8 max-w-2xl mx-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <h2 className="text-blue-400 xl:text-5xl xl:font-black">$8/mo</h2>
            <p className="">bililed annually</p>
            <Button
              // onClick={() => router.push("/uploads/new")}
              className="py-4 px-8 bg-primary font-medium text-white rounded-full hover:opacity-60 hover:opacity-color:white"
            >
              Get started today
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
