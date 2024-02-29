import { Source_Serif_4 } from "next/font/google";

import { prisma } from "@/libs/prisma";
import Navbar from "@/components/Navbar";
import Badge from "@/components/shared/Badge";
import Footer from "@/components/Footer/Footer";
import ShotCard from "@/components/Home/ShotCard";
import CTAHome1 from "@/components/Home/CTAHome1";
import { Button } from "@/components/shared/Button";
import { InfiniteScrollCards } from "@/components/Home/InfiniteScrollCards";
import { currentUser } from "@/libs/auth/getCurrentUser";

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default async function Home() {
  const shots = await prisma?.shot.findMany({
    take: 8,
    include: {
      user: true,
    },
  });
  const profile = await currentUser();

  return (
    <>
      <Navbar profile={profile} />
      <section className="pb-20">
        <div className="p-8 lg:px-16 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            <Badge
              text="Over 3 million ready-to-work creatives!"
              className="mx-auto p-2.5 px-4 font-medium whitespace-nowrap rounded-full change-bg-color"
            />

            <h2
              className={`text-7xl mt-5 ${font.className} text-gray-900 md:text-7xl`}
            >
              Work with the world&apos;s top creative talent.
            </h2>

            <p className="text-lg sm:mt-4 sm:block">
              Connect with millions of top-rated designers & agencies around the
              world.
            </p>
          </div>

          <div className="flex items-center justify-center w-full mt-8 max-w-4xl mx-auto ">
            <Button
              // onClick={() => router.push("/uploads/new")}
              className="py-4 px-8 bg-primary text-white font-normal rounded-full border border-gray-200 hover:opacity-60"
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
            {shots.map((shot) => (
              <ShotCard shot={shot} key={shot.id} />
            ))}
          </div>
          <div className="py-8 flex items-center justify-center">
            <Button className="py-4 px-8 text-gray-900 font-medium text-sm rounded-full border border-gray-200 hover:opacity-60">
              Browse more inspirations
            </Button>
          </div>
        </div>
        <CTAHome1 />
      </section>
      <Footer />
    </>
  );
}
