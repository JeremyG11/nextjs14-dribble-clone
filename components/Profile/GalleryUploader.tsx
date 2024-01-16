"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLayoutStore } from "@/hooks/layout";
import { FaPlus } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";

interface File {
  type: string;
  url: string;
}

interface GalleryBlockProps {
  files: File[];
  blockType: string;
}

const GalleryUploader = ({ files, blockType }: GalleryBlockProps) => {
  const { layout } = useLayoutStore();
  const [selectedFile, setSelectedFile] = useState<File>(files[0]); // initially set to the first file

  return (
    <div className="">
      <div
        className={`relative w-full h-screen mx-auto border-2 rounded-xl p-4 border-orange-500 transition-all duration-200 ease-in-out ${
          layout === "layout1" ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        <div className="relative h-5/6">
          {selectedFile.type === "video" ? (
            <video src={selectedFile.url} controls>
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={selectedFile.url}
              alt={selectedFile.type}
              fill
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
        <div className="flex items-center justify-center space-x-6 py-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="group cursor-pointer p-1 relative border-2 border-pink-300 h-16 w-20 rounded-lg"
              onClick={() => setSelectedFile(file)} // update selected file when a box is clicked
            >
              <Image
                src={file.url}
                alt={file.type}
                fill
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="hidden group-hover:block absolute z-40 top-1 right-1 transform translate-x-1/2 -translate-y-1/2 text-white transition-all duration-500 hover:text-white p-2.5 hover:bg-pink-300 rounded-full shadow-2xl bg-black">
                <BsFillTrash3Fill className="text-sm" />
              </button>
            </div>
          ))}
          <div className="cursor-pointer p-1 flex justify-center items-center relative border-2 border-dashed h-16 w-20 rounded-lg  hover:text-red-400 hover:border-red-400">
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryUploader;
