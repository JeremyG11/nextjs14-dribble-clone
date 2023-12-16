import React from "react";
import { MdOutlineDone, MdArrowBack } from "react-icons/md";

import { Button } from "../Reusable/Button";
import Heading1 from "../Reusable/Headings";

export default function CTAHiring() {
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-600">
      <div className="text-center space-y-5 mb-10 py-5 px-28">
        <span className="uppercase text-lg text-primary">Dribble Hiring</span>
        <Heading1
          text="Hire the world's top designers"
          className="text-gray-900 md:text-6xl"
        />
        <p className="text-xl sm:mt-4 sm:block leading-8">
          Whether you prefer to actively seek out candidates using Designer
          Search or let designers come to you through our Job Board, Dribbble
          Hiring makes it easier than ever to source top-notch design talent.
        </p>
      </div>
      <div className="w-full flex flex-row-reverse justify-center gap-x-10">
        <div className="relative z-0 w-1/2 max-w-md rounded-3xl flex flex-col items-center p-10 border-2 border-pink-500">
          <span className="absolute -top-5 px-6 pt-1 pb-2 font-medium rounded-full border-2 z-10 text-pink-500 bg-pink-200 border-pink-500">
            Most Popular
          </span>

          <div className="text">
            <h2 className="text-xl font-medium">Hiring Suite</h2>

            <p className="mt-2 sm:mt-4">
              Tap into our ready-to-hire community of top designers with our
              seamless hiring solution.
            </p>

            <div className="my-6">
              <p>
                <span className="text-3xl line-through dark:text-gray-300">
                  &nbsp;$499&nbsp;
                </span>
                <span className="pb-2 text-3xl">$199</span>
              </p>
              <p className="text block">per month</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 w-full">
            <li className="flex items-center gap-1">
              <MdArrowBack className="font-bold text-emerald-500 text-xl" />
              <p className="text-gray-700">Job Board included </p>
            </li>
            {[
              {
                text: "Search our entire database of available designers",
              },
              {
                text: "Filter by work, location, budget, and more",
              },
              {
                text: "Unlimited messages for designer outreach",
              },
              {
                text: "Save and bookmark designers for future needs",
              },
            ].map((item) => (
              <li className="flex items-center gap-1">
                <MdOutlineDone className="font-bold text-emerald-500 text-xl" />
                <p className="text-gray-700">{item.text} </p>
              </li>
            ))}
          </ul>
          <Button styles="mt-8 w-full block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-1 hover:ring-pink-700 focus:outline-none focus:ring active:text-pink-500">
            Find talent
          </Button>
          <p className="mt-4 font-light ">
            Cancel anytime. No strings attached
          </p>
        </div>
        <div className="h-3/4 relative z-0 w-1/2 max-w-md rounded-3xl flex flex-col items-center p-10 border">
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
              <li className="flex items-center gap-1">
                <MdOutlineDone className="font-bold text-emerald-500 text-xl" />
                <p className="text-gray-700">{item.text} </p>
              </li>
            ))}
          </ul>
          <Button styles="mt-8 w-full block  border font-normal rounded-full px-12 py-3 text-center text-sm hover:text-gray-500">
            Post a job
          </Button>
          <p className="mt-4 font-light ">
            Cancel anytime. No strings attached
          </p>
        </div>
      </div>
    </div>
  );
}
