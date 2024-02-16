import React from "react";
import { MdOutlineDone } from "react-icons/md";

import { Button } from "../shared/Button";
import { proFeaturesData } from "@/libs/constants";
import Link from "next/link";

export default function BillingCardTwo() {
  return (
    <div className="bg-white space-y-8 w-full max-w-2xl rounded-3xl flex flex-col p-10">
      <h2 className="text-xl md:text-3xl font-medium">Pro</h2>

      <p className="mt-2 sm:mt-4 text-xl">
        Grow your design business with 10x more shot visibility & premium
        features to showcase your work
      </p>
      <div>
        <p className="text-xl md:text-3xl font-medium">$8/mo</p>
        <p className="text-gray-500">bililed annually</p>
      </div>

      <ul className="mt-6 space-y-3 w-full">
        {proFeaturesData.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <MdOutlineDone className="font-bold text-emerald-500 text-xl" />
            <p className="text-gray-700">{item.text} </p>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-pink-700 focus:outline-none active:text-pink-500">
        Get started today
      </Button>
      <p className="mt-4 font-light text-center ">
        Prefer a monthly subscription?{" "}
        <Link href="#" className="font-medium underline">
          Subscribe for $16/mo
        </Link>
      </p>
      <p className="text-xs text-center text-gray-400">
        *Pros who post over 4 shots per month get 10x more views on average than
        non-Pro Players
      </p>
    </div>
  );
}
