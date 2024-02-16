import React from "react";

import ProCTA from "@/components/pro/ProCTA";
import Testimonial from "@/components/Hiring/Testimonial";
import ProBillingCTA from "@/components/pro/ProBillingCTA";
import BrandsLogos from "@/components/pro/BrandsLogos";

export default function ProPage() {
  return (
    <>
      <div className="py-14 ">
        <ProCTA />
        {/* <InfiniteScrollingLogos />
        <JobBoard />
      */}
        <BrandsLogos />
        <Testimonial
          userImageUrl="https://framerusercontent.com/images/lSn7CdDjdm73O1nwfrasVIfPI.png"
          userName="Lham Wakoa"
          userTitle="Head of design, OneSignal"
          quote="Dribbble is my go-to for hiring designers. It always provides a wealth of quality candidates and instantly builds my pipeline."
          testinomialImageUrl="https://framerusercontent.com/images/S5BMILr4aSBsQ0mgFpf9Mtqgxc.svg"
        />
        <ProBillingCTA />
      </div>
    </>
  );
}
