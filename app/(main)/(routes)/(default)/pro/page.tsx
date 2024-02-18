import React from "react";

import ProCTA from "@/components/pro/ProCTA";
import BrandsLogos from "@/components/pro/BrandsLogos";
import Testimonial from "@/components/Hiring/Testimonial";
import ProBillingCTA from "@/components/pro/ProBillingCTA";
import ProFeatruesCards from "@/components/pro/ProFeatruesCards";
import MoreOPportunitiesCard from "@/components/pro/MoreOPportunitiesCard";

export default function ProPage() {
  return (
    <>
      <div className="py-14 ">
        <ProCTA />
        <ProFeatruesCards />
        <BrandsLogos />
        <MoreOPportunitiesCard />
        <Testimonial
          userImageUrl="https://framerusercontent.com/images/lSn7CdDjdm73O1nwfrasVIfPI.png"
          userName="Nguth Gach"
          userTitle="Icon Design Lead, Font Awesome"
          quote="I've had the opportunity to work on the types of projects that excite me the most. I'm grateful for the exposure, the community and the inspiration."
          testinomialImageUrl="https://framerusercontent.com/images/S5BMILr4aSBsQ0mgFpf9Mtqgxc.svg"
        />
        <ProBillingCTA />
      </div>
    </>
  );
}
