import React from "react";

export default function AltText() {
  return (
    <div>
      <label htmlFor="file" className="block font-normal mt-4 py-1.5 pt-4">
        Alt Text
      </label>

      <input
        type="text"
        placeholder="Enter Text..."
        className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40"
      />
    </div>
  );
}
