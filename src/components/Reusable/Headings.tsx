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

export default function Heading1({ className, text }: HeadingProps) {
  return <h1 className={`${font.className} ${className} `}>{text}</h1>;
}
