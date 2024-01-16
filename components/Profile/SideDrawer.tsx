"use client";

import { useEffect } from "react";

import BlockButton from "./BlockButton";
import { TextBlock } from "./Blocks/TextBlock";
import { ImageBlock } from "./Blocks/ImageBlock";
import TextBlockStyle from "./Blocks/TextBlockStyles";
import { GalleryBlock } from "./Blocks/GalleryBlock";
import { VideoBlock } from "./Blocks/VideoBlock";
import { PastWorkBlock } from "./Blocks/PastWorkBlock";
import { BlockType, useBlock } from "../../hooks/toggle";

export default function SideDrawer() {
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const { onOpenBlock, isDrawerOpen, setDrawerOpen, blockType } = useBlock();

  const renderSelectedBlock = () => {
    const activeBlock = blockType || "index";

    const BlockMap: Record<BlockType, JSX.Element> = {
      index: (
        <>
          <h2 className="text-xl font-medium">Insert block</h2>
          <div className="pt-8">
            <p className="text-sm">Basics</p>
            <BlockButton
              type="text"
              label="Text"
              className={`w-full ${
                blockType === "text"
                  ? "text-blue-600 bg-gray-100"
                  : "text-gray-700"
              }  rounded-lg flex items-center cursor-pointer hover:bg-gray-100 p-2`}
              toggleIcon={true}
            />
            <BlockButton
              type="video"
              label="video"
              className="w-full text-gray-700 rounded-lg flex items-center cursor-pointer hover:bg-gray-200 p-2"
            />

            <BlockButton
              type="image"
              label="Image"
              className="w-full text-gray-700 rounded-lg flex items-center cursor-pointer hover:bg-gray-200 p-2"
            />
            <div className="pt-6">
              <p className="text-sm">Rich media</p>
              <ul className="space-y-4 pt-2">
                <BlockButton
                  type="gallery"
                  label="Gallery"
                  className="w-full text-gray-700 rounded-lg flex items-center cursor-pointer hover:bg-gray-200 p-2"
                />
              </ul>
            </div>
            <div className="pt-6">
              <p className="text-sm">Past work</p>
              <ul className="space-y-4 pt-2">
                <BlockButton
                  type="pastwork"
                  label="pastwork"
                  className="w-full text-gray-700 rounded-lg flex items-center cursor-pointer hover:bg-gray-200 p-2"
                  toggleIcon={true}
                />
              </ul>
            </div>
          </div>
        </>
      ),
      text: <TextBlock />,
      image: <ImageBlock />,
      video: <VideoBlock />,
      gallery: <GalleryBlock />,
      pastwork: <PastWorkBlock />,
    };

    return BlockMap[activeBlock];
  };

  useEffect(() => {
    switch (blockType) {
      case "text":
        onOpenBlock("text");
        break;
      case "image":
        onOpenBlock("image");
        break;
      case "video":
        onOpenBlock("video");
        break;
      case "gallery":
        onOpenBlock("gallery");
        break;
      case "pastwork":
        onOpenBlock("pastwork");
        break;
      default:
        onOpenBlock("index");
        break;
    }
  }, [blockType]);
  return (
    <div
      className={`w-full h-screen transition-all duration-300 ease-in-out transform ${
        isDrawerOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex w-full h-screen shadow-2xl">
        <div className="w-80 p-8 overflow-y-auto h-full">
          <button onClick={toggleDrawer} className="text-sm">
            Close
          </button>
          <div className="pt-6 w-full mb-14">{renderSelectedBlock()}</div>
        </div>
        {blockType === "text" ? (
          <div className="h-h-full w-80 bg-gray-200 p-8">
            <TextBlockStyle />
          </div>
        ) : null}
      </div>
    </div>
  );
}
