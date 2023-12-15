import React from "react";

interface ButtonProps {
  styles: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button({ styles, onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full ${styles}`}
    >
      {children}
    </button>
  );
}
