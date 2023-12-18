import React from "react";
import { Button } from "../Reusable/Button";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";

export default function HiringSuitePricingCard() {
  return (
    <div className="bg-white relative z-0 w-1/2 max-w-md rounded-3xl flex flex-col items-center p-10 border-2 border-pink-500">
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
      <Button className="mt-8 w-full block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-1 hover:ring-pink-700 focus:outline-none focus:ring active:text-pink-500">
        Find talent
      </Button>
      <p className="mt-4 font-light ">Cancel anytime. No strings attached</p>
    </div>
  );
}
