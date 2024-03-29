import React from "react";
import { CiSearch } from "react-icons/ci";

import Avatar from "../shared/Avatar";
import ButtonBage from "../shared/ButtonBage";
import { InfiniteScrollContainer } from "../shared/InfiniteScroller";
import { CountUp } from "../shared/CountUp";
import { proMembers } from "@/libs/constants";
import ProMemberCard from "./ProMemberCard";

interface CountUpSectionProps {
  from: number;
  to: number;
  className: string;
  text: string;
}
const CountUpSection = ({ from, to, className, text }: CountUpSectionProps) => (
  <div className="p-10 xl:mt-32 rounded-3xl space-y-5 w-full md:w-1/2">
    <CountUp from={from} to={to} className={className} isPercent={true} />
    <p className="text-lg">{text}</p>
  </div>
);

const ProSection = () => (
  <div className="p-10 bg-pink-aqua-gradient rounded-3xl w-full md:w-2/5">
    <div className="bg-white p-8 rounded-lg ">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-2/3">
          <Avatar
            className="w-10 h-10"
            imageUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <div className="ml-4 w-full">
            <span className="bg-black uppercase py-0.5 font-medium px-1.5 text-xs rounded text-white">
              Pro
            </span>
            <div className="mt-1">
              <div className="w-3/4 p-[3px] rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
        <button className="bg-pink-400 capitalize font-medium text-white px-3 py-1 rounded-md">
          hire me
        </button>
      </div>
      <video
        src="https://framerusercontent.com/assets/fNrldqdsEyJL9KV8byo1tANYM.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-full mt-5 rounded-lg"
      ></video>
    </div>
  </div>
);

export default function MoreOPportunitiesCard() {
  return (
    <>
      <div className="max-w-6xl mx-auto xl:pt-8">
        <div className="p-8 space-y-8 md:flex md:items-center gap-10">
          <div className="rounded-3xl space-y-5 w-full md:w-3/4">
            <h2 className="text-3xl font-semibold text-gray-700">
              Attract more opportunities
            </h2>
            <p className="text-lg">
              Let new opportunities come to you with more interactions and more
              messages. On average, Pros engage with 85% more future clients,
              collaborators, and employers.
            </p>
          </div>
          <div className="h-[420px] overflow-hidden p-10 flex flex-col flex-nowrap items-center justify-center bg-pink-aqua-gradient rounded-2xl space-y-5 w-full md:w-1/2">
            <form className="w-full mt-20 max-w-full mx-auto">
              <div className="relative rounded-xl overflow-hidden text-black">
                <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto left-3" />
                <input
                  disabled
                  type="text"
                  placeholder="Senior Product Designer"
                  className="placeholder:text-black text-lg w-full py-3 bg-white pl-12 pr-4 outline-none text-black rounded-xl"
                />
              </div>
            </form>

            <InfiniteScrollContainer className="animate-infinite-scroll">
              {proMembers.map((card, i) => (
                <ProMemberCard key={i} member={card} />
              ))}
            </InfiniteScrollContainer>

            <InfiniteScrollContainer className="animate-infinite-scroll-reverse">
              {proMembers.map((card, i) => (
                <li
                  key={i}
                  className="relative mx-3 w-96 h-44 rounded-2xl overflow-hidden bg-white "
                >
                  <div className="bottom-4 space-y-5 p-8">
                    <div className="flex items-center">
                      <Avatar
                        imageUrl={card.media.src}
                        className="w-20 h-20 "
                      />
                      <div className="ml-4 w-full">
                        <div className="mt-4">
                          <div className="w-3/4 p-[3px] my-1 rounded-full bg-gray-100" />
                          <div className="w-full p-[3px] my-2 rounded-full bg-gray-100" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {card.skills.map((skill) => (
                        <ButtonBage
                          key={skill}
                          text={skill}
                          className="bg-zinc-100 border-none mr-2 p-1 text-sm px-3"
                        />
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </InfiniteScrollContainer>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="p-8 space-y-8 md:flex md:items-center gap-x-10">
          <CountUpSection
            from={0}
            to={60}
            className="text-9xl xl:text-[172px] text-yellow"
            text="More messages/hiring opportunities compared to non-pro accounts on average."
          />
          <CountUpSection
            from={0}
            to={30}
            className="text-9xl xl:text-[172px] text-darkblue"
            text=" Engage with new clients, collaborators, and future employers
              actively searching for designers like you."
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="p-8 space-y-8 md:flex md:items-center gap-x-10">
          <ProSection />
          <div className="p-10 xl:mt-32 rounded-3xl space-y-5 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-700">
              Triple your engagement
            </h2>
            <p className="text-lg">
              With increased visibility on all of Dribbblebrand&apos;s feeds,
              growing your audience has never been easier. Expand your
              brand&apos;s reach with 3x the number of likes on average for
              Pros.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
