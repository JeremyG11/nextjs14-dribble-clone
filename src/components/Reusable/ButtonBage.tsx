import React from "react";

interface ButtonBageProps {
  text: string;
  className: string;
}
export default function ButtonBage({ text, className }: ButtonBageProps) {
  return (
    <button className={`rounded-full  border  duration-150 ${className}`}>
      {text}
    </button>
  );
}
