import React from "react";

export default function Testimonial() {
  return (
    <div className="group my-16 pt-10 grid grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
      <div className="rounded-xl col-span-2 ">
        <div className="space-y-10 p-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <p className="mt-0.5 text-3xl leading-10">
            &quot;Dribbble is my go-to for hiring designers. It always provides
            a wealth of quality candidates and instantly builds my
            pipeline.&quot;
          </p>

          <div className="mt-4 flex items-center flex-wrap gap-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://framerusercontent.com/images/lSn7CdDjdm73O1nwfrasVIfPI.png"
              alt="Rounded avatar"
            />

            <p className="text-xl font-medium">
              Lee Munroe —
              <span className="font-normal text-gray-600">
                Head of design, OneSignal
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-[#3b8fdd] to-[#ffc5f3] group">
        <div className="p-4 sm:p-6 flex items-center justify-center w-full h-full">
          <img
            src="https://framerusercontent.com/images/S5BMILr4aSBsQ0mgFpf9Mtqgxc.svg"
            alt=""
            className="block w-28 h-28 rounded-2xl object-contain group-hover:rotate-12  group-hover:scale-110 transition-all duration-300 ease-linear"
          ></img>
        </div>
      </div>
    </div>
  );
}
