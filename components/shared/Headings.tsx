import React from "react";
import { Source_Serif_4 } from "next/font/google";

interface HeadingProps {
  text: string;
  className?: string;
}

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export function Heading1({ className, text }: HeadingProps) {
  return (
    <h1
      className={`text-4xl font-medium ${font.className} ${className} md:text-6xl `}
    >
      {text}
    </h1>
  );
}

export function Heading2({ className, text }: HeadingProps) {
  return <h1 className={`text-sm ${className} `}>{text}</h1>;
}
