"use client";
import React, { useState } from "react";
import Image from "next/image";

import SideDrawer from "./SideDrawer";
import { Button } from "../Reusable/Button";
import imageIcon from "../../../public/images/shotUploadIcon.png";

export default function ShotUploadForm() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex-grow">
        <div className="px-6 w-full flex justify-between sticky top-6">
          <Button styles="border py-2 px-5 text-sm font-medium">Cancel</Button>

          <div className="inline-flex">
            <Button styles="py-2 px-5 text-sm font-medium mx-4 bg-zinc-100">
              Save as draft
            </Button>
            <Button styles="py-2 px-5 text-white text-sm mr-4 font-medium bg-black">
              Continue
            </Button>
          </div>
        </div>
        <div className="mx-40 mt-12 ">
          <div className="w-full">
            <h1 className="text-center text-gray-800 text-2xl font-semibold sm:text-4xl">
              What have you been working on ?
            </h1>
            <div className="flex items-center justify-center w-full h-full mt-10">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col justify-center w-full h-screen border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-8">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <Image src={imageIcon} alt="" width={80} height={100} />
                    <p className="mb-2 text-gray-500">
                      Drag and drop image, or
                      <span className="border-b-2 pb-0,5 mx-1 border-pink-500">
                        Browse
                      </span>
                    </p>
                    <p className=" text-gray-500">
                      Minimum 1600px width recommended. Max 10MB each (20MB for
                      videos)
                    </p>
                  </div>

                  <ul className="w-full mt-8 space-y-1 flex items-center justify-evenly text-gray-500 list-disc list-inside ">
                    <div>
                      <li>High resolution images (png, jpg, gif)</li>
                      <li>Animated gifs</li>
                    </div>
                    <div>
                      <li>Videos (mp4)</li>
                      <li>Only upload media you own the rights to</li>
                    </div>
                  </ul>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <SideDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
}
