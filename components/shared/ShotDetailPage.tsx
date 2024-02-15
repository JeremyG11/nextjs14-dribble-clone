"use client";
import Image from "next/image";
import { LuMail } from "react-icons/lu";
import React, { useEffect, useState } from "react";

import Avatar from "./Avatar";
import { Button } from "./Button";
import DividerLine from "./DividerLine";
import { cn } from "@/libs/utils/tw.util";
import { LikeButton } from "./LikeButton";
import ProfileStatus from "./ProfileStatus";
import { FavoriteButton } from "./FavoriteButton";
import { ShotWithProfile } from "@/libs/definitions";
import MediaDisplay from "./MediaDisplay";

interface ShotDetailPageProps {
  shot: ShotWithProfile;
}

export default function ShotDetailPage({ shot }: ShotDetailPageProps) {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(shot.files);
  return (
    <section className="bg-white ">
      <nav
        className={cn(
          "md:text-sm lg:mx-auto w-full px-4  transition-all bg-white",
          scrollActive && "fixed top-0 shadow-sm py-0 z-50"
        )}
      >
        <h1
          className={cn(
            "text-2xl font-bold mx-auto lg:max-w-5xl ",
            scrollActive && "hidden"
          )}
        >
          {shot.title} At the Airport
        </h1>
        <div className="lg:max-w-5xl py-2 md:py-0 md:gap-x-14 justify-between items-center max-w-screen-xl md:mx-auto flex ">
          <div className="flex items-center flex-row-reverse justify-between md:py-5 md:block">
            <ProfileStatus profile={shot.profile} />
          </div>
          <ul className="flex justify-center items-center space-x-2 md:space-x-3 md:space-y-0">
            <li className="text-gray-700 border rounded-full hover:text-gray-900">
              <LikeButton />
            </li>
            <li className="text-gray-700 border rounded-full hover:text-gray-900">
              <FavoriteButton />
            </li>
            <li className="hidden text-gray-700 hover:text-gray-900 md:block">
              <Button
                className={cn(
                  "py-1 md:py-2.5 md:px-6 text-white text-sm font-medium bg-primary "
                )}
              >
                Get in touch
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container flex flex-col items-center p-4 mx-auto xl:flex-row lg:max-w-5xl ">
        <div className="flex flex-col h-full">
          <MediaDisplay files={shot.files} />
        </div>
      </div>
      <div className="mx-auto lg:max-w-5xl lg:my-20">
        <DividerLine>
          <Avatar imageUrl={shot.profile.imageUrl} className="w-20 h-20 " />
        </DividerLine>
        <div className="space-y-4 flex flex-col items-center justify-center mt-4">
          <h2 className="text-xl font-medium">{shot.profile.name}</h2>
          <p className="text-sm text-gray-500">
            Welcome to my design portfolio on Dribbble
          </p>
          <Button
            className={cn(
              "py-2.5 px-6 text-white text-sm font-medium bg-primary flex items-center justify-center"
            )}
          >
            <LuMail className="icon mx-2 w-4 h-4 " />
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export const PingAnimate = () => {
  return (
    <span className="mr-2 relative flex  h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
    </span>
  );
};
