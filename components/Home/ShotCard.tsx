import React from "react";
import Image from "next/image";
import { ShotWithProfile } from "@/libs/definitions";

interface ShotCardProps {
  shot: ShotWithProfile;
}
export default function ShotCard({ shot }: ShotCardProps) {
  const bgImage = shot?.files.find((file) =>
    file.endsWith("png" || "jpg" || "jpeg")
  );
  return (
    <div>
      <div
        className="group bg-gray-100 cursor-pointer flex items-end overflow-hidden bg-cover rounded-lg w-full h-56"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="px-2 opacity-0 group-hover:opacity-100 flex items-center justify-between w-full py-6 overflow-hidden rounded-b-lg cursor-pointer group-hover:bg-gradient-to-t from-zinc-600 via-zinc-400 to-transparent transform transition-all duration-300">
          <h2 className=" truncate capitalize text-white">{shot.title}</h2>
          <div className=" flex items-center justify-between ">
            <span className="group inline-block rounded-full bg-white mr-2 p-3 text-white cursor-pointer focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-xs text-black font-bold hover:text-gray-400 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
            <button className="z-10 group inline-block rounded-full bg-white ml-2 p-3 text-white cursor-pointer focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-xs text-black font-bold hover:text-gray-400 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* BOTTOM ICONS AND NAME */}
      <div className="w-full pt-1 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            className="w-8 h-8 rounded-full"
            src={shot?.user?.image as string}
            alt="Rounded avatar"
            width={32}
            height={32}
          />

          <p className="ml-2 truncate text-sm">{shot?.user.name}</p>
          {shot?.user?.stripeCustomerId && (
            <span className="bg-gray-300 uppercase mx-2 px-1 text-xs font-medium rounded-sm text-white">
              pro
            </span>
          )}
        </div>
        <div className="flex items-center">
          <button className="flex items-center rounded-full bg-white ml-2 text-white cursor-pointer focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 font-bold text-gray-500 "
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>

            <p className=" text-gray-500 text-sm ml-1">20</p>
          </button>
          <button className="flex items-center rounded-full bg-white ml-2 text-white cursor-pointer focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 font-bold text-gray-500 "
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-500 text-sm ml-1">6.6k</p>
          </button>
        </div>
      </div>
    </div>
  );
}
