"use clientt";
import Image from "next/image";
import React, { useState } from "react";

import Modal from "../Reusable/Modal";
import { useModal } from "@/hooks/modal";
import { useBlock } from "@/hooks/toggle";
import ProfFeatures from "./ProfFeatures";
import { Button } from "../Reusable/Button";
import TagsInput from "../Reusable/InputTag";
import { useUploadThing } from "@/libs/uploadthing";

export function PublishShotModal() {
  const { isOpen, type, onClose } = useModal();
  const { boardData } = useBlock();
  const { startUpload } = useUploadThing("imageUploader");

  const isPublishShotModal = isOpen && type === "publishShotModal";

  const handleSubmit = async () => {
    // let uploadedImageUrl = values.fileUrl;
    // if (files.length > 0) {
    //   if (!uploadedImages) {
    //     return;
    //   }
    // uploadedImageUrl = uploadedImages[0].url;
    // }
    // const res = await createShot();
    try {
      if (boardData["gallery"]?.files) {
        const files = boardData["gallery"].files.map(
          (fileData) => fileData.file
        );
        for (const file of files) {
          const uploadedImage = await startUpload([file]);
          console.log(uploadedImage);
        }
      }
    } catch (error: any) {
      console.log("Error", error.message);
    }
  };
  return (
    <Modal isOpen={isPublishShotModal} title="Final touches">
      <div className="flex pb-10 w-full h-full">
        <div className="">
          <h1 className="py-1">Thumbnail preview</h1>
          <div>
            <div className="relative w-64 h-44 group cursor-pointer flex items-end overflow-hidden bg-cover rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Thumbnail"
                fill
              />
            </div>
            {/* BOTTOM ICONS AND NAME */}
            <div className="w-full pt-1 flex items-center justify-between">
              <div className="flex items-center justify-end w-full ">
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
        </div>
        <div className="flex flex-col space-y-8 pl-8 w-3/5 mx-auto">
          <TagsInput />
          <div className="w-full flex items-center space-x-3">
            <p>Looking for feedback</p>
            <label
              htmlFor="feedback"
              className="relative ml-2 h-6 w-11 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
            >
              <input type="checkbox" id="feedback" className="peer sr-only" />
              <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-pink-200"></span>
              <span className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-gray-500 peer-checked:bg-pink-500 transition-all peer-checked:start-5"></span>
            </label>
          </div>

          <ProfFeatures />
          <div className="flex justify-between items-center">
            <Button
              onClick={() => onClose()}
              className="py-2 px-5 text-sm font-medium border border-zinc-100"
            >
              Close
            </Button>
            <div className="inline-flex">
              <Button className="py-2 px-5 text-sm font-medium mx-4 bg-zinc-100">
                Save as draft
              </Button>
              <Button
                onClick={handleSubmit}
                className="px-3 py-1 md:py-3 md:px-6 text-white text-sm font-medium bg-primary"
              >
                Publish now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
