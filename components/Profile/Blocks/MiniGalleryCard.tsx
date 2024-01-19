"use client";
import React from "react";
import Image from "next/image";
import { FileData } from "@/hooks/toggle";
import { BsFillTrash3Fill } from "react-icons/bs";
import { createFileUrl } from "@/libs/utils/createFileUrl";

interface MiniGalleryCardProps {
  file: FileData;
  setSelectedFile: (file: FileData) => void;
}

const MiniGalleryCard = ({ file, setSelectedFile }: MiniGalleryCardProps) => {
  return (
    <div
      className="group cursor-pointer p-1 relative border-2 border-pink-300 h-16 w-20 rounded-lg"
      onClick={() => setSelectedFile(file)}
    >
      <Image
        src={createFileUrl(file.file)}
        alt={file.type}
        layout="fill"
        className="w-full h-full object-cover rounded-lg"
      />
      <button className="hidden group-hover:block absolute z-40 top-1 right-1 transform translate-x-1/2 -translate-y-1/2 text-white transition-all duration-500 hover:text-white p-2.5 hover:bg-pink-300 rounded-full shadow-2xl bg-black">
        <BsFillTrash3Fill className="text-sm" />
      </button>
    </div>
  );
};

export default MiniGalleryCard;
