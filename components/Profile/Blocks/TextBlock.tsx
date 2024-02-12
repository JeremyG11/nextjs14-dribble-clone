"use client";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useBlock } from "../../../hooks/zustandStore";
import { IconMap } from "../IconMap";

export const TextBlock = () => {
  const { blockType } = useBlock();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div onClick={handleClick} className="flex">
      <ul className="space-y-4 w-64 pt-2 ">
        <button
          className={`w-full ${
            blockType === "text" ? "text-blue-600 bg-gray-100" : "text-gray-700"
          }  rounded-lg flex items-center cursor-pointer hover:bg-gray-100 p-2`}
        >
          <p className="flex items-center w-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              svg-inline=""
              role="presentation"
              focusable="false"
              className="icon-20 margin-r-12"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 2A.75.75 0 012 1.25h16a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V2.75h-6.5v14.773h1.978a.75.75 0 010 1.5H7.273a.75.75 0 010-1.5H9.25V2.75h-6.5V5a.75.75 0 01-1.5 0V2z"
              ></path>
            </svg>{" "}
            <span className="mx-2.5 font-normal">Text</span>
          </p>
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </button>
      </ul>
    </div>
  );
};
