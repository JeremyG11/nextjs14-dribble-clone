import React from "react";
import { Button } from "../Reusable/Button";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function CTAHome1() {
  return (
    <div className=" max-w-full h-screen text-center flex items-center justify-center bg-[#ffda79] pt-10 pb-20 mt-20">
      <div className="max-w-xl space-y-8">
        <h2
          className={`text-7xl mt-5 ${font.className} text-gray-900 md:text-7xl`}
        >
          Find your next designer today
        </h2>

        <p className="text-xl sm:mt-4 sm:block leading-8">
          The world's leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <div className="flex items-center justify-center">
          <Button
            // onClick={() => router.push("/uploads/new")}
            styles="py-4 px-8 bg-primary font-medium text-white rounded-full hover:opacity-60 hover:opacity-color:white"
          >
            Get started now
          </Button>
          <Button
            // onClick={() => router.push("/uploads/new")}
            styles="ml-4 py-4 px-8 bg-white font-medium rounded-full border border-gray-200 hover:opacity-60"
          >
            Learn about hiring
          </Button>
        </div>
        <p className="text-xl">
          Are you a designer?
          <Link href="#" className="underline mx-1">
            Join Dribbble
          </Link>
        </p>
      </div>
    </div>
  );
}
