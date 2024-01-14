import React from "react";
import { IconEntry, IconMap } from "./IconMap";
import { BlockType, useBlock } from "../../hooks/toggle";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface BlockButtonProps {
  type: BlockType;
  label: string;
  className: string;
  toggleIcon?: boolean;
}

const BlockButton = ({
  type,
  label,
  className,
  toggleIcon,
}: BlockButtonProps) => {
  const { onOpenBlock } = useBlock();

  const iconEntry = IconMap.find((entry) =>
    entry.hasOwnProperty(type)
  ) as IconEntry;

  const handleOnClick = () => {
    onOpenBlock(type);
  };
  return (
    <div className="flex">
      <div className="space-y-4 w-64 pt-2 ">
        <button onClick={handleOnClick} className={`${className}`}>
          <p className="flex items-center w-full">
            {iconEntry[type]}
            <span className="mx-2.5 font-normal capitalize">{label}</span>
          </p>
          {toggleIcon && <MdOutlineKeyboardArrowRight className="text-xl" />}
        </button>
      </div>
    </div>
  );
};

export default BlockButton;
