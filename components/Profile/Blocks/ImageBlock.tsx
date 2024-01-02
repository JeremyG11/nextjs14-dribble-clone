"use client";
import AdjustLayout from "../../Reusable/AdjustLayout";
import AltText from "../../Reusable/AltText";
import MediaUpload from "../../Reusable/MediaUpload";
import React from "react";
import useBlock from "../../../hooks/toggle";

export const ImageBlock = () => {
  const { addBoardBlock } = useBlock();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
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
        <AltText
          label="Alt Text"
          placeholder="Enter Text..."
          className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40"
        />
        <AdjustLayout />
      </div>
    </div>
  );
};
