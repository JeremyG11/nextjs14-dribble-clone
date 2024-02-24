"use client";
import React, { useState } from "react";
import { Button } from "../shared/Button";
import ShotCard from "../Home/ShotCard";
import DropDownButton from "../shared/DropDownButton";
import { ShotWithProfile } from "@/libs/definitions";

interface ButtonTabsProps {
  shots: ShotWithProfile[];
}
export default function ButtonTabs({ shots }: ButtonTabsProps) {
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
            <div className="relative mx-4">
              <DropDownButton
                title="Recent Shots"
                isOpened={isOpened}
                setIsOpened={setIsOpened}
                className="flex items-center justify-between border text-gray-600 p-2.5 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
              />
              {isOpened && (
                <div className="absolute left-0 z-10 mt-2 rounded-md border border-gray-100 bg-white ">
                  <ul>
                    {[
                      "Add or remove from the lists",
                      "Edit your account settings",
                      "Edit your work preferences",
                    ].map((item, i) => {
                      return (
                        <li key={i}>
                          <a href="">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <Button className="flex items-center text-sm font-medium p-2 px-6 bg-gray-100 text-gray-900 xl:block rounded-full">
              <span> Customize order</span>
              <span className="bg-pink-500 uppercase mx-2 px-1 text-[10px] rounded-sm text-white">
                Pro
              </span>
            </Button>
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {shots.map((shot, i) => (
          <div key={i}>
            <ShotCard shot={shot} key={shot.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
