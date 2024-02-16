import React from "react";
import Image from "next/image";

interface TestimonialProps {
  userImageUrl: string;
  userName: string;
  userTitle: string;
  testinomialImageUrl: string;
  quote: string;
}

export default function Testimonial({
  userImageUrl,
  userName,
  userTitle,
  testinomialImageUrl,
  quote,
}: TestimonialProps) {
  return (
    <div className="group px-8 my-16 pt-10 md:grid md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto md:px-0">
      <div className="rounded-xl col-span-2 ">
        <div className="space-y-10 p-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <p className="mt-0.5 md:text-3xl leading-10">&quot;{quote}&quot;</p>

          <div className="mt-4 flex items-center flex-wrap gap-x-4">
            <Image
              className="w-12 h-12 rounded-full"
              src={userImageUrl}
              alt={userName}
              width={100}
              height={100}
            />

            <p className="text-xl font-medium">
              {userName} —
              <span className="font-normal text-gray-600">{userTitle}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-2xl bg-gradient-to-b from-[#3b8fdd] to-[#ffc5f3] group md:block">
        <div className="p-4 sm:p-6 flex items-center justify-center w-full h-full">
          <Image
            // src="https://framerusercontent.com/images/S5BMILr4aSBsQ0mgFpf9Mtqgxc.svg"
            src={testinomialImageUrl}
            alt=""
            className="block w-28 h-28 rounded-2xl object-contain group-hover:rotate-12  group-hover:scale-110 transition-all duration-300 ease-linear"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
