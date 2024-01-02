import React from "react";

export interface IconEntry {
  [key: string]: React.ReactElement;
}

export const IconMap: IconEntry[] = [
  {
    gallery: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        svg-inline=""
        role="presentation"
        focusable="false"
        className="icon-20 margin-r-12"
      >
        <path
          d="M20 13a3 3 0 01-3 3v-1.5a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0017 5.5V4a3 3 0 013 3v6zM0 7v6a3 3 0 003 3v-1.5A1.5 1.5 0 011.5 13V7A1.5 1.5 0 013 5.5V4a3 3 0 00-3 3z"
          fill="currentColor"
        ></path>
        <rect
          x="4.75"
          y="2.75"
          width="10.5"
          height="14.5"
          rx="2.25"
          stroke="currentColor"
          strokeWidth="1.5"
        ></rect>
      </svg>
    ),
    text: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        svg-inline=""
        role="presentation"
        focusable="false"
        className="icon-20 margin-r-12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 2A.75.75 0 012 1.25h16a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V2.75h-6.5v14.773h1.978a.75.75 0 010 1.5H7.273a.75.75 0 010-1.5H9.25V2.75h-6.5V5a.75.75 0 01-1.5 0V2z"
        ></path>
      </svg>
    ),
    video: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        svg-inline=""
        role="presentation"
        focusable="false"
        className="icon-20 margin-r-12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2.5h16a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5zM0 3a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm8.25 5.151L11.771 10l-3.523 1.849V8.15zm5.062.964a1 1 0 010 1.77l-5.098 2.676a1 1 0 01-1.465-.885V7.324a1 1 0 011.465-.885l5.098 2.676z"
        ></path>
      </svg>
    ),
    image: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        svg-inline=""
        role="presentation"
        focusable="false"
        className="icon-20 margin-r-12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 1.5H4A2.5 2.5 0 001.5 4v12a2.5 2.5 0 001.265 2.174l9.29-9.29a2.75 2.75 0 013.89 0l2.555 2.555V4A2.5 2.5 0 0016 1.5zm2.5 12.059a.741.741 0 01-.03-.029l-3.586-3.586a1.25 1.25 0 00-1.768 0L4.561 18.5H16a2.5 2.5 0 002.5-2.5v-2.441zM4 0a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4H4zm2.5 5.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
        ></path>
      </svg>
    ),
    pastwork: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        svg-inline=""
        role="presentation"
        focusable="false"
        className="icon-20 margin-r-12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.75 0a.75.75 0 100 1.5h4.5a.75.75 0 000-1.5H.75zM2 4.5h16a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5zM0 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V5zm0 14.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75zm13.75-.75a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"
        ></path>
      </svg>
    ),
  },
];
