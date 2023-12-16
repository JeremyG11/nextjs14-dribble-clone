import React from "react";
import Navbar from "@/components/Navbar";
import CTAHiring from "@/components/Hiring/CTAHiring";
import InfiniteScrollingLogos from "@/components/Hiring/InfiniteScrollingLogos";
import JobBoard from "@/components/Hiring/JobBoard";

export default function HiringPage() {
  return (
    <>
      <Navbar />
      <div className="py-14 max-w-screen-xl mx-auto px-4  md:px-8 ">
        <CTAHiring />
        <InfiniteScrollingLogos />
        <JobBoard />
      </div>
    </>
  );
}
