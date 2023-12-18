import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
