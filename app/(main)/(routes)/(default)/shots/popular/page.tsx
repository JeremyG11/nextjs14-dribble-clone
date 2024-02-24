import React from "react";

import ShotCard from "@/components/Home/ShotCard";
import HugeSearch from "@/components/shared/HugeSearch";
import ButtonBage from "@/components/shared/ButtonBage";
import { Heading1, Heading2 } from "@/components/shared/Headings";
import ButtonTabListFilter from "@/components/Hiring/ButtonTabListFilter";

export default async function PopularShots() {
  const shots = await prisma?.shot.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
    include: {
      profile: true,
    },
  });
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center text-center space-y-4 w-full max-w-4xl mx-auto">
        <Heading1
          text="Discover the world's top designers & creatives"
          className="text-gray-900 "
        />
        <Heading2
          text="Explore the newest animation, motion graphics, and animated GIFs from up and coming designers"
          className="w-full text-center max-w-xl text-gray-600"
        />
      </div>
      <HugeSearch />
      <div className="py-5 space-x-4 flex items-center justify-center text-sm">
        <p>Trending searches </p>
        {[
          "after effects",
          "gifs",
          "motion",
          "motion graphics",
          "2d",
          "loop",
        ].map((item, index) => (
          <ButtonBage
            key={index}
            text={item}
            className="p-1 px-3 hover:border-gray-600 "
          />
        ))}
      </div>
      <ButtonTabListFilter />
      <div className="px-14 py-10 grid grid-cols-4 gap-8 ">
        {shots?.map((shot) => <ShotCard shot={shot} key={shot.id} />)}
      </div>
    </div>
  );
}
