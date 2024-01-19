import Image from "next/image";
import { useEffect } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

import BlockUploader from "./BlockUploader";
import { useLayoutStore } from "@/hooks/layout";
import { BlockType, useBlock } from "@/hooks/toggle";
import GalleryUploader from "./GalleryUploader";

export default function BlockDisplayCard() {
  const { layout } = useLayoutStore();
  const { boardData, onOpenBlock, setDrawerOpen, removeFile } = useBlock();

  const handleFileClick = (blockKey: BlockType) => {
    onOpenBlock(blockKey);
    setDrawerOpen(true);
  };

  const handleRemoveFile = (blockKey: BlockType, index: number) => {
    removeFile(blockKey, index);
  };

  useEffect(() => {}, [layout]);
  const galleryBlock = boardData["gallery"];

  return (
    <div className="w-full h-auto space-y-24">
      {Object.keys(boardData).map((blockKey, index: number) => {
        const block = boardData[blockKey as BlockType];
        if (typeof block === "object" && block !== null && "files" in block) {
          if (blockKey === "gallery") {
            return (
              <GalleryUploader
                key={blockKey}
                files={block.files}
                blockType={blockKey as BlockType}
              />
            );
          } else if (block.files.length > 0) {
            return block.files.map((file, index) => (
              <div
                onClick={() => handleFileClick(blockKey as BlockType)}
                className={`relative w-full h-screen mx-auto border-2 rounded-xl p-4 border-pink-500 transition-all duration-200 ease-in-out ${
                  layout === "layout1" ? "max-w-3xl" : "max-w-7xl"
                }`}
                key={`${blockKey}-${index}`}
              >
                {file.type === "video" ? (
                  <video
                    className="object-cover w-full h-full rounded-xl"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    key={`${blockKey}-${index}`}
                    src={file.url}
                    alt={blockKey}
                    fill
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}
                <button
                  onClick={() => handleRemoveFile(blockKey as BlockType, index)}
                  className="absolute z-40 top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-black transition-all hover:text-red-500 p-3 rounded-xl shadow-2xl bg-gray-50"
                >
                  <BsFillTrash3Fill />
                </button>
              </div>
            ));
          } else {
            return (
              <div
                onClick={() => handleFileClick(blockKey as BlockType)}
                className={`relative w-full h-screen mx-auto overflow-hidden border-2 rounded-xl p-4 border-pink-500 transition-all duration-200 ease-in-out ${
                  layout === "layout1" ? "max-w-3xl" : "max-w-7xl"
                }`}
                key={`${blockKey}-${index}`}
              >
                <BlockUploader blockType={blockKey as BlockType} />
              </div>
            );
          }
        }
      })}
    </div>
  );
}
