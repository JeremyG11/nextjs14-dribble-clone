"use client";

import { TextBlock } from "./Blocks/TextBlock";
import { ImageBlock } from "./Blocks/ImageBlock";
import TextBlockStyle from "./Blocks/TextBlockStyles";
import { GalleryBlock } from "./Blocks/GalleryBlock";
import { VideoBlock } from "./Blocks/VideoBlock";
import { PastWorkBlock } from "./Blocks/PastWorkBlock";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";

interface SideDrawerProps {
  isDrawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  onSelectionChanged: () => void;
}

export default function SideDrawer({
  isDrawerOpen,
  setDrawerOpen,
  onSelectionChanged,
}: SideDrawerProps) {
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const [toggleTextBlock, setToggleTextBlock] = useState(false);
  const [toggleImageBlock, setToggleImageBlock] = useState(false);
  const [toggleVideoBlock, setToggleVideoBlock] = useState(false);

  const [toggleGalleryBlock, setToggleGalleryBlock] = useState(false);
  const [togglePastWorkBlock, setTogglePastWorkBlock] = useState(false);

  const textBlockRef = useRef<RefObject<HTMLDivElement>>(null);
  const imageBlockRef = useRef<RefObject<HTMLDivElement>>(null);
  const videoBlockRef = useRef<RefObject<HTMLDivElement>>(null);
  const galleryBlockRef = useRef<RefObject<HTMLDivElement>>(null);
  const pastWorkBlockRef = useRef<RefObject<HTMLDivElement>>(null);

  const [selectedBlockRef, setSelectedBlockRef] =
    useState<RefObject<any> | null>(null);

  const handleBlockSelection = (blockRef: RefObject<any>) => {
    setSelectedBlockRef(blockRef);
  };

  const renderSelectedBlock = () => {
    if (!selectedBlockRef)
      return (
        <>
          <h2 className="text-xl font-medium">Insert block</h2>
          <div className="pt-8">
            <p className="text-sm">Basics</p>
            <div className="w-full">
              <TextBlock
                toggleTextBlock={toggleTextBlock}
                setToggleTextBlock={setToggleTextBlock}
                ref={textBlockRef}
                onSelect={() => handleBlockSelection(textBlockRef)}
              />
            </div>
            <ImageBlock
              toggleImageBlock={toggleImageBlock}
              setToggleImageBlock={setToggleImageBlock}
              ref={imageBlockRef}
              onSelect={() => handleBlockSelection(imageBlockRef)}
            />
            <VideoBlock
              toggleVideoBlock={toggleVideoBlock}
              setToggleVideoBlock={setToggleVideoBlock}
              ref={videoBlockRef}
              onSelect={() => handleBlockSelection(videoBlockRef)}
            />
          </div>

          <div>
            <GalleryBlock
              toggleGalleryBlock={toggleImageBlock}
              setToggleGalleryBlock={setToggleGalleryBlock}
              ref={galleryBlockRef}
              onSelect={() => handleBlockSelection(galleryBlockRef)}
            />
          </div>
          <div className="w-full">
            <PastWorkBlock
              togglePastWorkBlock={togglePastWorkBlock}
              setTogglePastWorkBlock={setTogglePastWorkBlock}
              ref={pastWorkBlockRef}
              onSelect={() => handleBlockSelection(pastWorkBlockRef)}
            />
          </div>
        </>
      );

    if (selectedBlockRef === textBlockRef) {
      return (
        <div className="w-full">
          <TextBlock
            toggleTextBlock={toggleTextBlock}
            setToggleTextBlock={setToggleTextBlock}
            ref={textBlockRef}
            onSelect={() => handleBlockSelection(textBlockRef)}
          />
        </div>
      );
    } else if (selectedBlockRef === imageBlockRef) {
      return (
        <ImageBlock
          toggleImageBlock={toggleImageBlock}
          setToggleImageBlock={setToggleImageBlock}
          ref={imageBlockRef}
          onSelect={() => handleBlockSelection(imageBlockRef)}
        />
      );
    } else if (selectedBlockRef === videoBlockRef) {
      return (
        <VideoBlock
          toggleVideoBlock={toggleVideoBlock}
          setToggleVideoBlock={setToggleVideoBlock}
          ref={videoBlockRef}
          onSelect={() => handleBlockSelection(videoBlockRef)}
        />
      );
    } else if (selectedBlockRef === galleryBlockRef) {
      return (
        <GalleryBlock
          toggleGalleryBlock={toggleGalleryBlock}
          setToggleGalleryBlock={setToggleGalleryBlock}
          ref={galleryBlockRef}
          onSelect={() => handleBlockSelection(galleryBlockRef)}
        />
      );
    } else if (selectedBlockRef === pastWorkBlockRef) {
      return (
        <PastWorkBlock
          togglePastWorkBlock={togglePastWorkBlock}
          setTogglePastWorkBlock={setTogglePastWorkBlock}
          ref={pastWorkBlockRef}
          onSelect={() => handleBlockSelection(pastWorkBlockRef)}
        />
      );
    }

    return null;
  };

  return (
    <div className={`w-full h-screen ${isDrawerOpen ? "block" : "hidden"} `}>
      <div className="flex w-full h-screen shadow-2xl ">
        <div className="w-80 p-8">
          <button onClick={toggleDrawer} className="text-sm">
            Close
          </button>

          <div className="pt-6 w-full">{renderSelectedBlock()}</div>
        </div>
        {toggleTextBlock ? (
          <div className="h-h-full w-80 bg-gray-200 p-8">
            <TextBlockStyle />
          </div>
        ) : null}
      </div>
    </div>
  );
}
