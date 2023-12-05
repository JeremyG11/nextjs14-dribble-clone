import React from "react";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

import { Button } from "@/components/Reusable/Button";
import { UserButton } from "@clerk/nextjs";
import TooltipButton from "@/components/Reusable/Tooltip";

export default function Profile() {
  return (
    <main className="py-14 flex justify-center max-w-screen-xl mx-auto px-4  md:px-8 bg-red-50">
      <div className="rounded-full h-10 w-10 xl:w-32 xl:h-32 bg-slate-900 xl:mx-12">
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
          <button className="p-2.5 duration-150 border rounded-full">
            <HiOutlineEllipsisHorizontal className="text-2xl" />
          </button>
          <div className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Billing
            </span>
            <Button
              title="Limitted account"
              styles="font-bold text-xs p-2 px-3 bg-indigo-50 text-indigo-500 uppercase xl:block rounded-full"
            />
            <TooltipButton description="this is tooltip description" />
          </div>
        </div>
      </div>
    </main>
  );
}
