import { Source_Serif_4 } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/Reusable/Button";
import { InfiniteScrollCards } from "@/components/Home/InfiniteScrollCards";
import ShotCard from "@/components/Home/ShotCard";
import CTA1 from "@/components/Home/CTA1";

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="pb-20">
        <div className="p-8 lg:px-16 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            <span
              className={`${font.className} mx-auto p-2.5 px-4 font-medium whitespace-nowrap rounded-full bg-purple-100 change-bg-color `}
            >
              Over 3 million ready-to-work creatives!
            </span>
            <h2
              className={`text-7xl mt-5 ${font.className} text-gray-900 md:text-7xl`}
            >
              Work with the world's top creative talent.
            </h2>

            <p className="text-lg sm:mt-4 sm:block">
              Connect with millions of top-rated designers & agencies around the
              world.
            </p>
          </div>

          <div className="flex items-center justify-center w-full mt-8 max-w-4xl mx-auto ">
            <Button
              // onClick={() => router.push("/uploads/new")}
              styles="py-4 px-8 bg-primary font-medium text-white font-normal rounded-full border border-gray-200 hover:opacity-60"
            >
              Start hiring today
            </Button>
          </div>
        </div>
        <div className="overflow-hidden py-8">
          <InfiniteScrollCards />
        </div>
        <div className="pt-5">
          <h1 className="text-center text-5xl py-10">
            Explore inspiring designs
          </h1>
          <div className="grid grid-cols-4 gap-8 p-8 lg:px-14 ">
            {[1, 3, 6, 8, 0, 9, 5, 34, 67, 80, 23].map((i) => (
              <ShotCard key={i} />
            ))}
          </div>
          <div className="py-8 flex items-center justify-center">
            <Button styles="py-4 px-8 border border-gray-900 font-medium text-gray-900 font-medium text-sm rounded-full border border-gray-200 hover:opacity-60">
              Browse more inspirations
            </Button>
          </div>
        </div>
        <CTA1 />
      </section>
    </>
  );
}
