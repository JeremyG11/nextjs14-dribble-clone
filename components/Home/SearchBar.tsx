import React from "react";

function SearchBar() {
  return (
    <form className="relative xl:px-1.5 p-1 bg-transparent xl:bg-gray-100 rounded-full flex items-center">
      <span className="inset-y-0 grid xl:w-10 place-content-center">
        <button type="button" className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="hidden xl:block rounded-full py-2.5 text-lg text-gray-600 bg-transparent outline-none sm:text-sm"
      />
    </form>
  );
}

export default SearchBar;
