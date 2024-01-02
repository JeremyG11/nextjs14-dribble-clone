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
        <Testimonial />
        <FeatureSection />
        <CTAHiring2 />
      </div>
    </>
  );
}
