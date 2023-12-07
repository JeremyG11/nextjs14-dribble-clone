import React from "react";

interface ButtonProps {
  styles: string;
  children: React.ReactNode;
}
export function Button({ styles, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={`cursor-pointer xl:block rounded-full ${styles}`}
    >
      {children}
    </button>
  );
}
