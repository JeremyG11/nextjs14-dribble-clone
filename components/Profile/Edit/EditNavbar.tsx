import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

interface EditNavbarProps {
  profile: User;
  title: string;
  subtitle: string;
}

export default function EditNavbar({
  profile,
  title,
  subtitle,
}: EditNavbarProps) {
  return (
    <div className="pt-14 flex space-y-2 flex-col-reverse md:flex-row justify-between max-w-5xl mx-auto px-4  md:px-8 ">
      <div className="flex py-4">
        <div className="relative rounded-full h-14 w-14">
          <Image
            src={profile.image as string}
            alt=""
            className="rounded-full"
            fill
          />
        </div>
        <div className="mx-4">
          <h3 className="text-xl text-black">
            {profile.name} <span className="mx-0.5 text-gray-500">/</span>
            {title}
          </h3>
          <p className=" text-gray-600 ">{subtitle} </p>
        </div>
      </div>
      <Link
        href="/pro"
        className="group border h-[60px] rounded py-2 md:py-0 md:px-10 flex items-center justify-center flex-col hover:text-white hover:bg-orange-pink-gradient transition-all duration-150 ease-linear"
      >
        <p>
          Go
          <span className="mx-2 text-primary group-hover:text-white font-bold">
            Pro
          </span>
        </p>
        <p className="text-sm">Get 3x more portfolio views</p>
      </Link>
    </div>
  );
}
