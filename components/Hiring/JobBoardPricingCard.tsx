import React from "react";
import { Button } from "../shared/Button";
import { MdOutlineDone } from "react-icons/md";

export default function JobBoardPricingCard() {
  return (
    <div className="bg-white h-3/4 relative z-0 w-1/2 max-w-md rounded-3xl flex flex-col items-center p-10 border">
      <div className="text">
        <h2 className="text-xl font-medium">Job Board</h2>

        <p className="mt-2 sm:mt-4">
          Let top creative talent come to you by posting your listing on #1
          design job board
        </p>

        <div className="my-6">
          <p>
            <span className="pb-2 text-3xl">$99</span>
          </p>
          <p className="text block">per month</p>
        </div>
      </div>

      <ul className="mt-6 space-y-2 w-full">
        {[
          {
            text: "Average of 1.1k targeted clicks per month",
          },
          {
            text: "Easily hire for full-time or freelance placements",
          },
          {
            text: "Swap out listings as needed",
          },
        ].map((item) => (
          <li key={item.text} className="flex items-center gap-1">
            <MdOutlineDone className="font-bold text-emerald-500 text-xl" />
            <p className="text-gray-700">{item.text} </p>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full block  border font-normal rounded-full px-12 py-3 text-center text-sm hover:text-gray-500">
        Post a job
      </Button>
      <p className="mt-4 font-light ">Cancel anytime. No strings attached</p>
    </div>
  );
}
