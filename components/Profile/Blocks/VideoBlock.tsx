"use client";
import AltText from "../../shared/AltText";
import { useBlock } from "@/hooks/zustandStore";
import MediaUpload from "../../shared/MediaUpload";
import AdjustLayout from "../../shared/AdjustLayout";
import { createFileUrl } from "@/libs/utils/createFileUrl";

export const VideoBlock = () => {
  const { boardData } = useBlock();

  let mediaSrcUrl = "";
  if (Array.isArray(boardData?.video)) {
    mediaSrcUrl = boardData?.video[0];
  } else if (boardData?.video && "files" in boardData?.video) {
    mediaSrcUrl = createFileUrl(boardData.video?.files[0]?.file);
  }

  return (
    <>
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
          <MediaUpload mediaType="video" mediaSrcUrl={mediaSrcUrl} />
          {boardData.video?.files?.map((file, index) => (
            <AltText
              key={index}
              blockType="video"
              fileIndex={index}
              label={`Alt Text ${index + 1}`}
              placeholder="Enter Text..."
              className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40"
            />
          ))}
          <AdjustLayout />
        </div>
      </div>
    </>
  );
};
