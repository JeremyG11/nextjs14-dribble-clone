import React from "react";
import { useLayoutStore } from "@/hooks/layout";

export default function AdjustLayout() {
  const { layout, setLayout1, setLayout2 } = useLayoutStore();
  const handleLayout1Click = () => {
    setLayout1();
  };

  const handleLayout2Click = () => {
    setLayout2();
  };
  return (
    <div className="">
      <label htmlFor="file" className="block font-normal mt-3 py-1.5 pt-4">
        Layout
      </label>
      <span className="flex justify-center w-full overflow-hidden rounded-md bg-white">
        <button
          type="button"
          onClick={handleLayout1Click}
          className={`inline-flex w-full border items-center px-4 py-2.5 text-sm justify-center font-medium text-gray-900 bg-white-2 m-0.5 border-gray-200 rounded-s-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 ${
            layout === "layout1" ? "border-2 border-blue-700" : ""
          }`}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            svg-inline=""
            role="presentation"
            focusable="false"
            className="icon-12"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.53.47a.75.75 0 010 1.06L9.534 4.527h1.856a.75.75 0 010 1.5h-3.64a.748.748 0 01-.777-.75V1.61a.75.75 0 011.5 0v1.857L11.47.47a.75.75 0 011.06 0zM1.61 6.972a.75.75 0 000 1.5h1.857L.47 11.47a.75.75 0 001.06 1.06l2.997-2.997v1.856a.75.75 0 001.5 0v-3.64a.748.748 0 00-.75-.777m-3.667 0h3.667z"
            ></path>
          </svg>
        </button>

        <button
          onClick={handleLayout2Click}
          className={`inline-flex w-full border items-center justify-center px-4 p-2.5 text-sm font-medium text-gray-900 bg-white-2 m-0.5 border-gray-200 rounded-e-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none ${
            layout === "layout2" ? "border-2 border-blue-700" : ""
          }`}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            svg-inline=""
            role="presentation"
            focusable="false"
            className="icon-12"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.537.462c.18.18.25.426.213.659v3.546a.75.75 0 01-1.5 0V2.824L8.26 5.815A.76.76 0 117.183 4.74l2.99-2.99h-1.84a.75.75 0 110-1.5h3.542a.759.759 0 01.661.212zM1.75 8.333a.75.75 0 10-1.5 0V12c0 .414.336.75.75.75h3.667a.75.75 0 000-1.5H2.81l2.998-2.998a.75.75 0 10-1.06-1.06L1.75 10.188V8.333z"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  );
}
