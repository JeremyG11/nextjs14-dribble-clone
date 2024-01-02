import React, {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
} from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface PastWorkBlockProps {
  togglePastWorkBlock: boolean;
  setTogglePastWorkBlock: Dispatch<SetStateAction<boolean>>;
  onSelect: () => void;
}

export const PastWorkBlock = () => {
  return (
    <div>
      <div className="pt-6">
        <p className="text-sm">Past work</p>
        <ul className="space-y-4 pt-2">
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
                  d="M.75 0a.75.75 0 100 1.5h4.5a.75.75 0 000-1.5H.75zM2 4.5h16a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5zM0 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V5zm0 14.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75zm13.75-.75a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"
                ></path>
              </svg>
              <span className="mx-2.5 font-normal">Shot</span>
            </p>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </button>
        </ul>
      </div>
    </div>
  );
};
