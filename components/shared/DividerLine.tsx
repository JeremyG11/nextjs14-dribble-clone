import React from "react";

export default function DividerLine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center">
      <span className="h-[2px] flex-1 mr-4 bg-gray-200" />
      {children}
      <span className="h-[2px] flex-1 ml-4 bg-gray-200" />
    </span>
  );
}
