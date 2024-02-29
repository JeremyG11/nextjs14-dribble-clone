import React from "react";

interface DividerLineProps {
  children: React.ReactNode;
  height?: number;
}

export default function DividerLine({
  children,
  height = 2,
}: DividerLineProps) {
  return (
    <span className="flex items-center">
      <span className={`h-[${height}px] flex-1 mr-4 bg-gray-200`} />
      {children}
      <span className={`h-[${height}px] flex-1 ml-4 bg-gray-200`} />
    </span>
  );
}
