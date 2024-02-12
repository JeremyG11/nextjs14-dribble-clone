"use client";

import React, { ChangeEvent } from "react";
import { BlockType, useBlock } from "@/hooks/zustandStore";

interface UploaderProps {
  blockType: BlockType;
}
export default function BlockUploader({ blockType }: UploaderProps) {
  const { updateFiles } = useBlock();

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const fileData = { file: fileUrl, type: blockType };
    }
  }

  return (
    <div className="relative w-full h-full mx-auto rounded-lg">
      <label
        htmlFor={`${blockType}-file`}
        className="relative p-3 bg-gray-200 flex flex-col justify-center w-full max-w-5xl mx-auto h-full rounded-lg border-gray-300 cursor-pointer"
      >
        <div className="z-30 flex flex-col items-center justify-center pt-5 pb-6 space-y-8">
          <div className="flex flex-col text-base items-center justify-center space-y-3">
            <p className="mb-2">
              Drag and drop {blockType}, or
              <span className="border-b border-black  mx-1">Browse</span>
            </p>
          </div>
        </div>
      </label>
      <input
        id={`${blockType}-file`}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
