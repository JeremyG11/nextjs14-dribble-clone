import React from "react";
import { Button } from "../Reusable/Button";
import Badge from "../Reusable/Badge";

export default function JobBoard() {
  return (
    <>
      <section className="overflow-hidden p-8 xl:py-20 xl:px-14 sm:grid sm:grid-cols-2 flex gap-x-10">
        <div className="px-8 py-4 flex-order-2 ">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right space-y-8">
            <Badge
              text="Job board"
              className="mx-auto p-2.5 px-4 font-medium whitespace-nowrap rounded-full bg-[#fcd0ba]"
            />

            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              The #1 job board for top design talent{" "}
            </h2>
            <p className="hidden leading-7 text-gray-500 md:mt-4 md:block">
              Our job board postings receive an average of 1.1k targeted clicks
              per month and are viewed by over 1 million top designers globally.
              With a proven track record assisting over 60&rsquo;000
              companies&rsquo; you&apos;ll spend less time sorting through
              unqualified candidates and more time hiring amazing talent.
            </p>
            <div className="mt-4 md:mt-8">
              <Button className="mt-8 block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-1 hover:ring-pink-700 focus:outline-none focus:ring active:text-pink-500">
                Vist the job board
              </Button>
            </div>
          </div>
        </div>
        <div className="flex max-h-96 flex-col items-center justify-end gap-4 p-8 relative bg-gradient-to-b from-[#fcd0ba] to-[#f6d8fb] rounded-2xl">
          <video
            src="https://framerusercontent.com/assets/anyiHSPP2um93testsvKwARCwiI.mp4"
            loop
            autoPlay
            muted
            playsInline
            className=" h-full w-full rounded-xl object-cover bg-transparent"
            style={{ objectPosition: "50% 50%" }}
          ></video>
        </div>
      </section>

      <section className="overflow-hidden p-8 xl:py-10 xl:px-14 sm:grid sm:grid-cols-2 flex flex-row-reverse gap-x-10">
        <div className="flex max-h-96 flex-col items-center justify-end gap-4 p-8 relative bg-gradient-to-b from-[#ecfbf9] to-[#e5fcde] rounded-2xl">
          <video
            src="https://framerusercontent.com/assets/anyiHSPP2um93testsvKwARCwiI.mp4"
            loop
            autoPlay
            muted
            playsInline
            className=" h-full w-full rounded-xl object-cover bg-transparent"
            style={{ objectPosition: "50% 50%" }}
          ></video>
        </div>
        <div className="px-8 py-4 flex-order-2 ">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right space-y-8">
            <Badge
              text="Hiring Suite"
              className="mx-auto p-2.5 px-4 font-medium whitespace-nowrap rounded-full bg-[#b3fbe3]"
            />

            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Hire faster & smarter with our designer search
            </h2>
            <p className="hidden leading-7 text-gray-500 md:mt-4 md:block">
              Easily find quality freelancers and full-time creatives using our
              powerful search engine with filters for specialty, location,
              experience level, and more. Search for available talent in the
              largest professional creative community with just a few clicks.
            </p>
            <div className="mt-4 md:mt-8">
              <Button className="mt-8 block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-1 hover:ring-pink-700 focus:outline-none focus:ring active:text-pink-500">
                Start your search
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
