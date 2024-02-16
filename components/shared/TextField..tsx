import React from "react";

interface TextAreaFieldProps {
  label?: string;
  placeholder?: string;
  rows?: number;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}

export default function TextField({ label, rows }: TextAreaFieldProps) {
  return (
    <div className="group w-full">
      <label htmlFor="file" className="block font-normal py-1.5 ">
        {label}
      </label>

      <textarea
        rows={rows}
        className={`block w-full placeholder-gray-400/70 rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 group-hover:ring-pink-100  focus:ring-opacity-40 hover:ring-offset-1 hover:ring hover:ring-pink-100 hover:ring-opacity-40 `}
      ></textarea>
    </div>
  );
}
