"use client";
import React, { useState } from "react";

export default function ButtonTabs() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>
        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option selected>Notifications</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex gap-6" aria-label="Tabs">
          {[1, 4, 7, 8, 9].map((item) => (
            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              Settings
            </a>
          ))}
          <button
            className="w-32 flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
            onClick={() => setIsOpened(!isOpened)}
          >
            <div className="flex items-center gap-x-2">
              {/* {children} */} jrrrr
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
