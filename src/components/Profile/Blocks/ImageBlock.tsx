"use client";
import AdjustLayout from "@/components/Reusable/AdjustLayout";
import AltText from "@/components/Reusable/AltText";
import MediaUpload from "@/components/Reusable/MediaUpload";
import React, {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
} from "react";

interface ImageBlockProps {
  toggleImageBlock: boolean;
  setToggleImageBlock: Dispatch<SetStateAction<boolean>>;
  onSelect: () => void;
}

export const ImageBlock = forwardRef(
  (
    { toggleImageBlock, setToggleImageBlock, onSelect }: ImageBlockProps,
    ref: ForwardedRef<any>
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setToggleImageBlock(true);
      onSelect();
    };
    return (
      <>
        {!toggleImageBlock ? (
          <div ref={ref} onClick={handleClick} className="flex">
            <ul className="space-y-4 w-64 pt-2 ">
              <button className="w-full text-gray-700 rounded-lg flex items-center cursor-pointer hover:bg-gray-200 p-2">
                <p className="flex items-center w-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    role="presentation"
                    focusable="false"
                    className="icon-20 margin-r-12"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 1.5H4A2.5 2.5 0 001.5 4v12a2.5 2.5 0 001.265 2.174l9.29-9.29a2.75 2.75 0 013.89 0l2.555 2.555V4A2.5 2.5 0 0016 1.5zm2.5 12.059a.741.741 0 01-.03-.029l-3.586-3.586a1.25 1.25 0 00-1.768 0L4.561 18.5H16a2.5 2.5 0 002.5-2.5v-2.441zM4 0a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4H4zm2.5 5.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
                    ></path>
                  </svg>
                  <span className="mx-2.5 font-normal">Image</span>
                </p>
              </button>
            </ul>
          </div>
        ) : (
          <div>
            <div className="w-full rounded-lg flex items-center cursor-pointer">
              <p className="flex items-center w-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  svg-inline=""
                  role="presentation"
                  focusable="false"
                  className="icon-20 margin-r-12"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 1.5H4A2.5 2.5 0 001.5 4v12a2.5 2.5 0 001.265 2.174l9.29-9.29a2.75 2.75 0 013.89 0l2.555 2.555V4A2.5 2.5 0 0016 1.5zm2.5 12.059a.741.741 0 01-.03-.029l-3.586-3.586a1.25 1.25 0 00-1.768 0L4.561 18.5H16a2.5 2.5 0 002.5-2.5v-2.441zM4 0a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4H4zm2.5 5.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
                  ></path>
                </svg>
                <span className="mx-2.5 font-normal text-xl">Image</span>
              </p>
            </div>
            <div>
              <MediaUpload />
              <AltText />
              <AdjustLayout />
            </div>
          </div>
        )}
      </>
    );
  }
);
