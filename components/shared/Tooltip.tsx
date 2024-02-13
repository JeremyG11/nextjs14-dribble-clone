import React from "react";

interface TooltipProps {
  description: React.ReactNode;
  children: React.ReactNode;
  className: string;
}

function TooltipButton({ description, className, children }: TooltipProps) {
  return (
    <div className="relative inline-block">
      <div className="peer">{children}</div>
      <div className={`${className}`}>
        <span className="text-sm">{description}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 absolute rotate-45 -translate-x-1/2 left-1/2 bottom-0.5 -mb-2 transform fill-current text-black"
          stroke="currentColor"
          viewBox="0 0 24 24 "
        >
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
        </svg>
      </div>
    </div>
  );
}

export default TooltipButton;
