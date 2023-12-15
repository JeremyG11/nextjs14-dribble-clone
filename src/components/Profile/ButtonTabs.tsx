"use client";
import React, { useState } from "react";
import { Button } from "../Reusable/Button";
import ShotCard from "../Home/ShotCard";

export default function ButtonTabs() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="mt-4">
      <div className="flex border-b py-3">
        <nav className="w-full flex gap-6 py-3 justify-between">
          <div>
            {[
              { title: "Work" },
              { title: "Booted Shots" },
              { title: "Collections" },
              { title: "Liked Shots" },
              { title: "About" },
            ].map((item, i) => (
              <ul key={i} className=" items-center inline-flex">
                <button className="mx-6">{item.title}</button>
              </ul>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="relative">
              <button
                className="mx-5 flex items-center justify-between border text-gray-600 p-1.5 px-3 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                onClick={() => setIsOpened(!isOpened)}
              >
                <span className="px-2"> Recent Shots</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 p-0.5 duration-150 ${
                    isOpened ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpened && (
                <div className="absolute left-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white ">
                  <div className="p-2">
                    <ul>
                      <li>
                        <a href="">Add or remove from the lists</a>
                      </li>
                      <li>
                        <a href="">Edit your account settings</a>
                      </li>
                      <li>
                        <a href="">Edit your work preferences</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Button styles="flex items-center text-sm font-medium p-2 px-6 bg-gray-100 text-gray-900 xl:block rounded-full">
              <span> Customize order</span>
              <span className="bg-pink-500 uppercase mx-2 px-1 text-[10px] rounded-sm text-white">
                Pro
              </span>
            </Button>
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-3">
        {[3, 6, 8, 7, 34, 9].map((btn, i) => (
          <div key={i}>
            <ShotCard key={btn} />
          </div>
        ))}
      </div>
    </div>
  );
}
