import React from "react";
import Link from "next/link";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

import { Button } from "@/components/Reusable/Button";
import TooltipButton from "@/components/Reusable/Tooltip";
import DropDown from "@/components/Reusable/DropDown";
import ButtonTabs from "@/components/Profile/ButtonTabs";

export default function Profile() {
  return (
    <main>
      <div className="py-14 flex justify-center max-w-screen-xl mx-auto px-4  md:px-8 ">
        <div className="rounded-full h-10 w-10 xl:w-32 xl:h-32 bg-slate-900 xl:mx-10">
          <img
            src="https://cdn.dribbble.com/users/14860331/avatars/normal/data?1674854196"
            alt=""
            className="rounded-full"
          />
        </div>

        <div className="py-3">
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Gatwech Tap Nguth
            </h3>
            <p className="mt-3 text-gray-600">Addis Ababa</p>
          </div>
          <div className="flex gap-3 items-center mt-4 ">
            <Button
              title="Edit Profile"
              styles="py-3 px-6 font-medium text-gray-900  xl:block rounded-full border border-gray-200"
            />
            <DropDown />

            <TooltipButton
              styles="hidden peer-hover:flex absolute max-h-24  peer-hover:items-center peer-hover:justify-center w-64 p-2 text-white -translate-x-1/2 bg-black rounded-md -top-32 left-1/2"
              description={
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="line-clamp-3 text-center">
                    Your account is only visible to logged in users and cannot
                    be followed or discovered in public feeds
                  </p>
                  <Link href="#" className="underline">
                    Learn more
                  </Link>
                </div>
              }
            >
              <Button
                title="Limitted account"
                styles="font-bold text-xs p-2 px-3 bg-indigo-50 text-indigo-500 uppercase xl:block rounded-full"
              />
            </TooltipButton>
          </div>
        </div>
      </div>
      <ButtonTabs />
    </main>
  );
}
