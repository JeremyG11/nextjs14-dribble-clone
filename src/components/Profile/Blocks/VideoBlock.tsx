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

interface VideoBlockProps {
  toggleVideoBlock: boolean;
  setToggleVideoBlock: Dispatch<SetStateAction<boolean>>;
  onSelect: () => void;
}

export const VideoBlock = forwardRef(
  (
    { toggleVideoBlock, setToggleVideoBlock, onSelect }: VideoBlockProps,
    ref: ForwardedRef<any>
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setToggleVideoBlock(true);
      onSelect();
    };

    return (
      <>
        {!toggleVideoBlock ? (
          <div onClick={handleClick} ref={ref} className="flex">
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
                      d="M2 2.5h16a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5zM0 3a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm8.25 5.151L11.771 10l-3.523 1.849V8.15zm5.062.964a1 1 0 010 1.77l-5.098 2.676a1 1 0 01-1.465-.885V7.324a1 1 0 011.465-.885l5.098 2.676z"
                    ></path>
                  </svg>
                  <span className="mx-2.5 font-normal">Video</span>
                </p>
              </button>
            </ul>
          </div>
        ) : (
          <div>
            <div className="w-full rounded-lg flex items-center cursor-pointer">
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
                  d="M2 2.5h16a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5zM0 3a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm8.25 5.151L11.771 10l-3.523 1.849V8.15zm5.062.964a1 1 0 010 1.77l-5.098 2.676a1 1 0 01-1.465-.885V7.324a1 1 0 011.465-.885l5.098 2.676z"
                ></path>
              </svg>
              <span className="mx-2.5 font-normal">Video</span>
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
