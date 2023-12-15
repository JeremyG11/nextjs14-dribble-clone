import React, {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
} from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface GalleryBlockProps {
  toggleGalleryBlock: boolean;
  setToggleGalleryBlock: Dispatch<SetStateAction<boolean>>;
  onSelect: () => void;
}

export const GalleryBlock = forwardRef(
  (
    { toggleGalleryBlock, setToggleGalleryBlock, onSelect }: GalleryBlockProps,
    ref: ForwardedRef<any>
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setToggleGalleryBlock(true);

      onSelect();
    };
    return (
      <>
        {!toggleGalleryBlock ? (
          <div ref={ref} onClick={handleClick}>
            <div className="pt-6">
              <p className="text-sm">Rich Media</p>
              <ul className="space-y-4 pt-2">
                <button className="w-full text-gray-700 rounded-lg flex items-center cursor-pointer hover:bg-gray-200 p-2">
                  <p className="flex items-center w-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      svg-inline=""
                      role="presentation"
                      focusable="false"
                      className="icon-20 margin-r-12"
                    >
                      <path
                        d="M20 13a3 3 0 01-3 3v-1.5a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0017 5.5V4a3 3 0 013 3v6zM0 7v6a3 3 0 003 3v-1.5A1.5 1.5 0 011.5 13V7A1.5 1.5 0 013 5.5V4a3 3 0 00-3 3z"
                        fill="currentColor"
                      ></path>
                      <rect
                        x="4.75"
                        y="2.75"
                        width="10.5"
                        height="14.5"
                        rx="2.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></rect>
                    </svg>{" "}
                    <span className="mx-2.5 font-normal">Gallery</span>
                  </p>
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full rounded-lg flex items-center cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                svg-inline=""
                role="presentation"
                focusable="false"
                className="icon-20 margin-r-12"
              >
                <path
                  d="M20 13a3 3 0 01-3 3v-1.5a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0017 5.5V4a3 3 0 013 3v6zM0 7v6a3 3 0 003 3v-1.5A1.5 1.5 0 011.5 13V7A1.5 1.5 0 013 5.5V4a3 3 0 00-3 3z"
                  fill="currentColor"
                ></path>
                <rect
                  x="4.75"
                  y="2.75"
                  width="10.5"
                  height="14.5"
                  rx="2.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
              </svg>
              <span className="mx-2.5 text-xl font-normal">Gallery</span>
            </div>

            <div className="pt-6 space-y-4">
              <p className="font-medium">Slides</p>

              <button
                onClick={() => console.log("clicked Slide")}
                className={`w-full ${
                  true ? "text-indigo-400 bg-gray-100" : "text-gray-700"
                }  rounded-lg flex items-center cursor-pointer hover:bg-gray-100 p-2`}
              >
                <p className="flex items-center w-full">
                  <span className="font-normal">Slide 1</span>
                </p>
                <MdOutlineKeyboardArrowRight className="text-xl" />
              </button>
              <label htmlFor="slideFile" className="bg-red-500 mt-4">
                <span className="border-b-2 text-sm mt-4 mx-1 border-pink-500">
                  Add slides
                </span>
                <input type="file" id="slideFile" className="sr-only" />
              </label>
            </div>
          </div>
        )}
      </>
    );
  }
);
