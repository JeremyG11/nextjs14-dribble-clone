import React from "react";
import { Heading1 } from "../shared/Headings";
import BillingCardTwo from "../shared/BillingCardTwo";

export default function ProBillingCTA() {
  return (
    <div className="w-full max-w-full flex justify-center bg-subscription-bg pt-10 pb-20 mt-20">
      <div className=" flex flex-col items-center justify-center xl:max-w-4xl space-y-10">
        <Heading1
          className={` mt-5 text-center text-gray-900 md:text-5xl`}
          text="Upgrade to Dribbble Pro today!"
        />
        <div className="px-8">
          <BillingCardTwo />
        </div>
      </div>
    </div>
  );
}
