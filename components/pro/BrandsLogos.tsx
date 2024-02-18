import React from "react";

import { brandsLogosData } from "@/libs/logos";

export default function BrandsLogos() {
  return (
    <div className="py-14">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-16 flex flex-col justify-between">
          <h2 className="text-center text-gray-700 xl:text-4xl ">
            People & brands love it
          </h2>
          <ul className="inline-grid grid-cols-2 gap-10 md:gap-16 md:grid-cols-3 lg:grid-cols-5">
            {brandsLogosData.map((logo, index) => (
              <li key={index}>{logo?.icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
