import React from "react";
import Navbar from "@/components/Navbar";
import CTAHiring from "@/components/Hiring/CTAHiring";
import InfiniteScrollingLogos from "@/components/Hiring/InfiniteScrollingLogos";
import JobBoard from "@/components/Hiring/JobBoard";
import CTAHiring2 from "@/components/Hiring/CTAHiring2";
import FeatureSection from "@/components/Hiring/Feature";

export default function HiringPage() {
  return (
    <>
      <Navbar />
      <div className="py-14  ">
        <CTAHiring />
        <InfiniteScrollingLogos />
        <JobBoard />
        <FeatureSection />
        <CTAHiring2 />
      </div>
    </>
  );
}
