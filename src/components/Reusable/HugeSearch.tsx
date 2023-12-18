import React from "react";

export default function HugeSearch() {
  return (
    <div>
      <form>
        <div className="relative px w-full max-w-xl mx-auto">
          <div className="absolute ml-6 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full pl-14 ps-10 ml-4 text-sm placeholder-gray-500 rounded-full border border-gray-200 bg-white py-4 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40 appearance-none"
            placeholder="Search 18 million+ Shots..."
            required
          />
        </div>
      </form>
    </div>
  );
}
