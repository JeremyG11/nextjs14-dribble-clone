"use client";
import React, { RefObject, useRef, useState } from "react";

import { AddBlock } from "./AddBlock";
import SideDrawer from "./SideDrawer";
import { Button } from "../Reusable/Button";
import TooltipButton from "../Reusable/Tooltip";
import AltText from "../Reusable/AltText";
import FileUploader from "./FileUploader";
import useBlock from "@/hooks/toggle";
import BlockDisplayCard from "./BlockDisplayCard";

export default function ShotUploadForm() {
  const { blocks, isDrawerOpen } = useBlock();
  return (
    <div className="flex w-full min-w-full max-h-screen">
      <div className="relative flex-grow overflow-y-auto hide-scroll-bar">
        <div
          className={`px-6 w-full z-10 flex justify-between  top-6  ${
            false ? "absolute" : "sticky"
          }`}
        >
          <Button className="border py-2 px-5 text-sm font-medium">
            Cancel
          </Button>

          <div className="inline-flex">
            <Button className="py-2 px-5 text-sm font-medium mx-4 bg-zinc-100">
              Save as draft
            </Button>
            <Button className="px-3 py-1 md:py-2 md:px-5 text-white text-sm mr-4 font-medium bg-black">
              Continue
            </Button>
          </div>
        </div>{" "}
        <div
          className={`${
            isDrawerOpen ? "mx-0" : "mx-8 xl:mx-40"
          } mt-12 xl:h-full `}
        >
          <form onSubmit={() => {}} className="w-full xl:h-auto ">
            {false ? (
              <span className="flex items-center justify-center text-gray-400 text-2xl font-semibold sm:text-4xl">
                <TooltipButton description="Hello bg-gray-800" className="">
                  <input
                    type="text"
                    placeholder=" Give me a name"
                    value=""
                    className="outline-none"
                  />
                </TooltipButton>
              </span>
            ) : (
              <h1 className="text-center text-gray-800 text-2xl font-semibold sm:text-4xl">
                What have you been working on ?
              </h1>
            )}
            <div
              className={`flex items-center justify-center w-full xl:h-full ${
                false ? "mt-3" : "mt-10"
              }`}
            >
              {/* <FileUploader onFilesChange={handleDropZone} /> */}
              {blocks.map((block) => (
                <BlockDisplayCard />
              ))}
            </div>

            <>
              <div className="w-8/12 mx-auto mt-8">
                <AltText
                  placeholder="Write what went in too this design or add any details you like to mention"
                  className="max-w-2xl block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border-2 border-white hover:border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40"
                />{" "}
              </div>
              <AddBlock />
            </>
          </form>
        </div>
      </div>
      <div className="">
        <SideDrawer />
      </div>
    </div>
  );
}
