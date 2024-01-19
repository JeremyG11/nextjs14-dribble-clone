"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import { FileData } from "@/hooks/toggle";
import { useLayoutStore } from "@/hooks/layout";
import { createFileUrl } from "@/libs/utils/createFileUrl";
import MiniGalleryCard from "./Blocks/MiniGalleryCard";
import { MiniGalleryUploader } from "./Blocks/GalleryBlock";

interface GalleryBlockProps {
  files: FileData[];
}

const GalleryUploader = ({ files }: GalleryBlockProps) => {
  const { layout } = useLayoutStore();
  const [selectedFile, setSelectedFile] = useState<FileData>(files[0]);

  useEffect(() => {
    setSelectedFile(files[0]);
  }, [files]);

  return (
    <div className="">
      <div
        className={`relative w-full h-screen mx-auto border-2 rounded-xl p-4 border-orange-500 transition-all duration-200 ease-in-out ${
          layout === "layout1" ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        <div className="relative h-5/6">
          {selectedFile.type === "video" ? (
            <video src={createFileUrl(selectedFile.file)} controls>
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={createFileUrl(selectedFile.file)}
              alt={selectedFile.type}
              fill
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
        <div className="flex items-center justify-center space-x-6 py-4">
          {files.map((file, index) => (
            <MiniGalleryCard
              key={index}
              file={file}
              setSelectedFile={setSelectedFile}
            />
          ))}
          <MiniGalleryUploader className="cursor-pointer p-1 flex justify-center items-center relative border-2 border-dashed h-16 w-20 rounded-lg  hover:text-red-400 hover:border-red-400" />
        </div>
      </div>
    </div>
  );
};

export default GalleryUploader;
