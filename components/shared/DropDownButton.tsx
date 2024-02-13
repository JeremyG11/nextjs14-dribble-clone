import React, { Dispatch, SetStateAction } from "react";

interface DropDownButtonProps {
  title: string;
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  className: string;
}
export default function DropDownButton({
  title,
  isOpened,
  setIsOpened,
  className,
}: DropDownButtonProps) {
  return (
    <button className={`${className}`} onClick={() => setIsOpened(!isOpened)}>
      <span className="px-2"> {title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-5 h-5 p-0.5 duration-150 ${isOpened ? "rotate-180" : ""}`}
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
