"use client";

import React from "react";
import { FaPlus } from "react-icons/fa6";

import { useBlock } from "@/hooks/zustandStore";
import TooltipButton from "../shared/Tooltip";

export const AddBlock = () => {
  const { setDrawerOpen, onOpenBlock } = useBlock();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDrawerOpen(true);
    onOpenBlock("index");
  };

  return (
    <div className="   flex items-center justify-center py-10 w-full">
      <span className="h-[2px] flex-1 bg-gray-200"></span>
      <TooltipButton
        className="hidden peer-hover:flex absolute max-h-24  peer-hover:items-center peer-hover:justify-center w-64 p-2 text-white -translate-x-1/2 bg-black rounded-md -top-24 left-1/2"
        description={
          <div className="flex flex-col items-center justify-center space-y-1">
            <p className="line-clamp-3 text-center">
              Your account is only visible to logged in users and cannot be
              followed or discovered in public feeds
            </p>
          </div>
        }
      >
        <button
          onClick={handleClick}
          className="group flex items-center text-sm font-medium p-2.5 border-gray-200 text-gray-500 rounded-full hover:border-2 hover:px-12 border transition-all duration-300 ease-in-out"
        >
          <FaPlus className="text-lg text-black font-black" />
          <span className="hidden group-hover:block group-hover:mx-2 font-normal">
            Insert Block
          </span>
        </button>
      </TooltipButton>
      <span className="h-[2px] flex-1 bg-gray-200"></span>
    </div>
  );
};
