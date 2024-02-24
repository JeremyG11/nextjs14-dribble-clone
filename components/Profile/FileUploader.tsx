"use client";
import Image from "next/image";
import { FileData, useBlock } from "@/hooks/zustandStore";
import imageIcon from "@/public/images/shotUploadIcon.png";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface FileUploaderProps {
  onFilesChange: (files: File[]) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const FileUploader = ({ onFilesChange }: FileUploaderProps) => {
  const { onOpenBlock, updateFiles, setDrawerOpen } = useBlock();

  const createFileData = (file: File): FileData => {
    const fileType = file.type.split("/")[0];
    return { file: file, type: fileType, altText: "" };
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);

      const selectedFileData = selectedFiles.map(createFileData);
      onFilesChange(selectedFiles);

      const fileType = selectedFiles[0].type.split("/")[0];
      if (fileType === "image") {
        onOpenBlock("image");
        updateFiles("image", selectedFileData);
      } else if (fileType === "video") {
        onOpenBlock("video");
        updateFiles("video", selectedFileData);
      } else {
        console.error(`Unsupported file type: ${fileType}`);
      }

      setDrawerOpen(true);
    }
  };
  return (
    <div className="relative w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="relative p-3 max-w-5xl mx-auto flex flex-col justify-center w-full xl:h-screen border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
      >
        <div className="z-30 flex flex-col items-center justify-center pt-5 pb-6 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image src={imageIcon} alt="" width={80} height={100} />
            <p className="mb-2 text-gray-500">
              Drag and drop image, or
              <span className="border-b-2 pb-0,5 mx-1 border-pink-500">
                Browse
              </span>
            </p>
            <p className=" text-center md:text-left text-gray-500">
              Minimum 1600px width recommended. Max 10MB each (20MB for videos)
            </p>
          </div>

          <ul className="w-full px-4 md:px-0 md:space-x-0 mt-8 space-y-1 md:flex md:items-center md:justify-evenly text-gray-500 list-disc list-inside ">
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

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </label>
    </div>
  );
};

export default FileUploader;
