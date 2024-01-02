import React from "react";

export default function BlockDisplayCard() {
  return (
    <div className="relative w-full h-96 mx-auto max-w-5xl border-2  rounded-lg p-4 border-pink-500">
      <label
        htmlFor="dropzone-file"
        className="relative p-3 bg-gray-200 flex flex-col justify-center w-full max-w-5xl mx-auto h-full rounded-lg border-gray-300 cursor-pointer"
      >
        <div className="z-30 flex flex-col items-center justify-center pt-5 pb-6 space-y-8">
          <div className="flex flex-col text-base items-center justify-center space-y-3">
            <p className="mb-2">
              Drag and drop media, or
              <span className="border-b border-black  mx-1">Browse</span>
            </p>
          </div>
        </div>
      </label>
      <input id="dropzone-file" type="file" className="hidden" />
    </div>
  );
}
