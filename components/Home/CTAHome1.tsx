import React from "react";
import { Button } from "../shared/Button";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import { Heading1 } from "../shared/Headings";

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function CTAHome1() {
  return (
    <div className=" max-w-full h-screen text-center flex items-center justify-center bg-[#ffda79] pt-10 pb-20 mt-20">
      <div className="max-w-4xl space-y-8">
        <Heading1
          className={`text-7xl mt-5 ${font.className} text-gray-900 md:text-7xl`}
          text="Find your next designer today"
        />

        <p className="text-xl sm:mt-4 sm:block leading-8">
          The world&apos;s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <div className="flex items-center justify-center">
          <Button
            // onClick={() => router.push("/uploads/new")}
            className="py-4 px-8 bg-primary font-medium text-white rounded-full hover:opacity-60 hover:opacity-color:white"
          >
            Get started now
          </Button>
          <Button
            // onClick={() => router.push("/uploads/new")}
            className="ml-4 py-4 px-8 bg-white font-medium rounded-full border border-gray-200 hover:opacity-60"
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
