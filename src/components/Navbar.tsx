"use client";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import dribbleLogo from "../../public/images/Dribbble_logo.svg";
import SearchBar from "./Home/SearchBar";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Button } from "./Reusable/Button";

export default () => {
  const [state, setState] = useState(false);

  // Replace # paths with your paths
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      //   if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className={`bg-white md:text-sm p-4 `}>
      <div className="md:gap-x-14 justify-between items-center max-w-screen-xl md:mx-auto flex ">
        <div className="flex items-center flex-row-reverse justify-between md:py-5 md:block">
          <Link href="#" className="flex ">
            <Image
              src={dribbleLogo}
              alt="Logo"
              width={120}
              height={50}
              className="h-6 xl:h-7"
            />
          </Link>
          <div className="md:hidden ">
            <button
              className="text-gray-800 flex items-center justify-center hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <VscChromeClose className="text-3xl font-bold" />
              ) : (
                <HiOutlineMenuAlt2 className="text-3xl font-bold" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex justify-between ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {[
              { title: "Find talent", path: "#" },
              { title: "Inspirations", path: "#" },
            ].map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 mx-2 hover:text-gray-900"
                >
                  <a href={item.path} className="block font-medium">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <li className="text-gray-700 mx-2 hover:text-gray-900">
              <Link href="" className="block font-medium">
                Learn Design
              </Link>
            </li>
            {[
              { title: "Jobs", path: "#" },
              { title: "Go Pro", path: "#" },
            ].map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 mx-2 hover:text-gray-900"
                >
                  <Link href={item.path} className="block font-medium">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex p-2 space-x-2 gap-x-2 md:gap-x-6 items-center justify-end space-y-0 md:flex md:space-y-0 md:mt-0">
          <SearchBar />
          <Button styles="hidden py-3 px-6 font-medium text-gray-900  xl:block rounded-full border border-gray-200">
            Share work
          </Button>
          <div className="rounded-full h-10 w-10 xl:w-11 xl:h-11">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-full h-full",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
