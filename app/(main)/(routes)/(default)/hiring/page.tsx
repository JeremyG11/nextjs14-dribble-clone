import React from "react";
import CTAHiring from "../../../../../components/Hiring/CTAHiring";
import InfiniteScrollingLogos from "../../../../../components/Hiring/InfiniteScrollingLogos";
import JobBoard from "../../../../../components/Hiring/JobBoard";
import CTAHiring2 from "../../../../../components/Hiring/CTAHiring2";
import FeatureSection from "../../../../../components/Hiring/Feature";
import Testimonial from "../../../../../components/Hiring/Testimonial";

export default function HiringPage() {
  return (
    <>
      <div className="py-14  ">
        <CTAHiring />
        <InfiniteScrollingLogos />
        <JobBoard />
        <Testimonial
          userImageUrl="https://framerusercontent.com/images/lSn7CdDjdm73O1nwfrasVIfPI.png"
          userName="Lham Wakoa"
          userTitle="Head of design, OneSignal"
          quote="Dribbble is my go-to for hiring designers. It always provides a wealth of quality candidates and instantly builds my pipeline."
          testinomialImageUrl="https://framerusercontent.com/images/S5BMILr4aSBsQ0mgFpf9Mtqgxc.svg"
        />
        <FeatureSection />
        <CTAHiring2 />
      </div>
    </>
  );
}
