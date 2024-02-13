import React from "react";

interface AltTextProps {
  label?: string;
  className: string;
  placeholder: string;
  onClick?: (event: MouseEvent) => void;
}
export default function AltText({
  label,
  className,
  placeholder,
  onClick,
}: AltTextProps) {
  return (
    <div>
      <label htmlFor="file" className="block font-normal mt-4 py-1.5 pt-4">
        {label}
      </label>

      <input
        type="text"
        placeholder={`${placeholder}`}
        className={`${className}`}
      />
    </div>
  );
}
