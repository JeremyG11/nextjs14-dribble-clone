import React from "react";

export function FavoriteButton() {
  return (
    <button className="z-10 group rounded-full bg-white text-white cursor-pointer focus:outline-none">
      <span className="flex items-center justify-center group rounded-full bg-white  p-3 text-white cursor-pointer focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-xs text-black font-bold hover:text-gray-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </span>
    </button>
  );
}
