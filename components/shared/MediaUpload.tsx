"use client";
import { useBlock } from "@/hooks/zustandStore";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

interface MediaUploadProps {
  mediaType: "image" | "video";
  mediaSrcUrl: string;
}

export default function MediaUpload({
  mediaType,
  mediaSrcUrl,
}: MediaUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const { onOpenBlock, updateFiles, setDrawerOpen } = useBlock();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const fileData = { file: selectedFile, type: mediaType, altText: "" };

      if (mediaType === "image") {
        onOpenBlock("image");
        updateFiles("image", [fileData]);
      } else if (mediaType === "video") {
        onOpenBlock("video");
        updateFiles("video", [fileData]);
      }

      setDrawerOpen(true);
    }
  };
  return (
    <div>
      <label htmlFor="file" className="block font-medium my-3 py-2 pt-4">
        Media
      </label>
      {mediaSrcUrl ? (
        <div className="relative flex flex-col items-center w-full h-56 bg-gray-100 max-w-lg mx-auto text-center border cursor-pointer rounded-lg">
          {mediaSrcUrl && mediaType === "image" ? (
            <Image
              alt=""
              src={mediaSrcUrl}
              fill
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <video
              className="object-cover w-full h-full rounded-lg"
              autoPlay
              loop
              muted
            >
              <source src={mediaSrcUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center w-full bg-gray-100 max-w-lg p-5 mx-auto text-center border cursor-pointer rounded-lg"
        >
          <div className="py-2 px-5 me-2 w-11/12 my-2 font-medium text-sm focus:outline-none bg-white rounded-full border border-gray-200">
            Select media
          </div>

          <p className="text-sm text-gray-500">or drop media to upload</p>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}
    </div>
  );
}
