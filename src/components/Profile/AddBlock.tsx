import React from "react";
import { FaPlus } from "react-icons/fa6";

import { Button } from "../Reusable/Button";
import TooltipButton from "../Reusable/Tooltip";

interface AddBlockProps {
  onClick: () => void;
}
export const AddBlock = React.forwardRef(
  ({ onClick }: AddBlockProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className=" mt-14  flex items-center justify-center py-10 w-full"
      >
        <span className="h-[2px] flex-1 bg-gray-200"></span>
        <TooltipButton
          styles="hidden peer-hover:flex absolute max-h-24  peer-hover:items-center peer-hover:justify-center w-64 p-2 text-white -translate-x-1/2 bg-black rounded-md -top-24 left-1/2"
          description={
            <div className="flex flex-col items-center justify-center space-y-1">
              <p className="line-clamp-3 text-center">
                Your account is only visible to logged in users and cannot be
                followed or discovered in public feeds
              </p>
            </div>
          }
        >
          <Button
            onClick={onClick}
            styles="flex items-center text-sm font-medium p-2.5 px-12 border border-gray-200 text-gray-500 rounded-full"
          >
            <FaPlus className="text-lg text-black font-black" />
            <span className="mx-2 font-normal">Insert Block</span>
          </Button>
        </TooltipButton>
        <span className="h-[2px] flex-1 bg-gray-200"></span>
      </div>
    );
  }
);
