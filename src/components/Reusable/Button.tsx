import React from "react";

interface ButtonProps {
  title: string;
  styles: string;
}
export function Button({ title, styles }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles}`}
      //   className=
    >
      {title}
    </button>
  );
}
