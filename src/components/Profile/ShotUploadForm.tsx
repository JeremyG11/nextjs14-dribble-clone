"use client";
import Image from "next/image";
import React, { RefObject, useEffect, useRef, useState } from "react";

import { AddBlock } from "./AddBlock";
import SideDrawer from "./SideDrawer";
import { Button } from "../Reusable/Button";
import TooltipButton from "../Reusable/Tooltip";
import imageIcon from "../../../public/images/shotUploadIcon.png";

export default function ShotUploadForm() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [image, setImage] = useState("");

  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedSectionRef, setSelectedSectionRef] =
    useState<RefObject<any> | null>(null);

  const handleSectionSelection = (sectionRef: RefObject<any> | null) => {
    setSelectedSectionRef(sectionRef);
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      setDrawerOpen(true);
      // console.log("Image");
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
    if (e.target.files) {
      console.log(e.target.files[0]);
      handleDropZone(e.target?.files[0]);
    }
  };

  const handleDropZone = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      const result = reader.result as string;
      //   console.log(result);

      setImage(result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = () => {};

  useEffect(() => {
    if (image) {
      setDrawerOpen(true);
    }
    console.log(imageContainerRef.current);
  }, [image]);
  return (
    <div className="flex w-full min-w-full  max-h-screen">
      <div className="flex-grow overflow-y-auto">
        <div className="px-6 w-full z-10 flex justify-between sticky top-6">
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
        </div>
        <div className={`${isDrawerOpen ? "mx-0" : "mx-40"} mt-12 h-full`}>
          <form onSubmit={() => {}} className="w-full h-full">
            {image ? (
              <span className="flex items-center justify-center text-gray-400 text-2xl font-semibold sm:text-4xl">
                <TooltipButton description="Hello bg-gray-800" styles="">
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
              className={`flex items-center justify-center w-full h-full ${
                image ? "mt-3" : "mt-10"
              }`}
            >
              <label
                htmlFor="dropzone-file"
                className={`relative p-3 flex flex-col justify-center w-full max-w-5xl mx-auto h-full border-2 rounded-lg border-gray-300 cursor-pointer ${
                  image ? "" : "border-dashed "
                }`}
              >
                {!image ? (
                  <div className="z-30 flex flex-col items-center justify-center pt-5 pb-6 space-y-8">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <Image src={imageIcon} alt="" width={80} height={100} />
                      <p className="mb-2 text-gray-500">
                        Drag and drop image, or
                        <span className="border-b-2 pb-0,5 mx-1 border-pink-500">
                          Browse
                        </span>
                      </p>
                      <p className=" text-gray-500">
                        Minimum 1600px width recommended. Max 10MB each (20MB
                        for videos)
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
                ) : (
                  <div
                    ref={imageContainerRef}
                    className={`relative w-full h-full z-30 ${isDrawerOpen} `}
                  >
                    <img
                      src={image}
                      alt="Preview"
                      className="w-full h-full rounded-lg z-30 "
                    />
                  </div>
                )}

                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  disabled={image !== ""}
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {image && <AddBlock onClick={() => setDrawerOpen(true)} />}
          </form>
        </div>
      </div>
      <div className="">
        <SideDrawer
          isDrawerOpen={isDrawerOpen}
          setDrawerOpen={setDrawerOpen}
          onSelectionChanged={() =>
            handleSectionSelection(selectedSectionRef ?? null)
          }
        />
      </div>
    </div>
  );
}
