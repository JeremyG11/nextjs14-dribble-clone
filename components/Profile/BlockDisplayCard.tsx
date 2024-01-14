"use client";
import React, { ChangeEvent, useState } from "react";
import { BlockType, useBlock } from "@/hooks/toggle";
import Image from "next/image";

interface UploaderProps {
  blockType: BlockType;
}

const Uploader = ({ blockType }: UploaderProps) => {
  const { updateFiles } = useBlock();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      updateFiles(blockType, [fileUrl]);
    }
  }
  return (
    <div className="relative w-full h-96 mx-auto max-w-5xl border-2 rounded-lg p-4 border-pink-500">
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
};

export default function BlockDisplayCard() {
  const { boardData, onOpenBlock, setDrawerOpen } = useBlock();

  const handleFileClick = (blockKey: BlockType) => {
    onOpenBlock(blockKey);
    setDrawerOpen(true);
  };

  return (
    <div className="w-full space-y-6">
      {Object.keys(boardData).map((blockKey) => {
        const block = boardData[blockKey as BlockType];
        if (typeof block === "object" && block !== null && "files" in block) {
          return block.files.length > 0 ? (
            block.files.map((file, index) => (
              <div
                onClick={() => handleFileClick(blockKey as BlockType)}
                className="relative w-full h-screen mx-auto max-w-5xl border-2 rounded-lg p-4 border-pink-500"
              >
                <Image
                  key={`${blockKey}-${index}`}
                  src={file}
                  alt={blockKey}
                  fill
                  className="w-96 h-96"
                />
              </div>
            ))
          ) : (
            <div
              onClick={() => handleFileClick(blockKey as BlockType)}
              className="relative w-full h-screen mx-auto max-w-5xl border-2 rounded-lg p-4 border-pink-500"
            >
              <Uploader blockType={blockKey as BlockType} />
            </div>
          );
        }
      })}
    </div>
  );
}
