"use client";
import { cn } from "@/libs/utils/tw.util";
import React, { useEffect, useRef } from "react";

interface InfiniteScrollCardsProps {
  children: React.ReactNode;
  className?: string;
}

export const InfiniteScrollContainer: React.FC<InfiniteScrollCardsProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const ul = ref.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);

      const nextSiblingElement = ul.nextSibling as HTMLElement | null;

      if (nextSiblingElement) {
        nextSiblingElement.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap">
      <ul
        className={cn(
          `flex items-center justify-center md:justify-start [&_li]:4 ${className}`
        )}
        ref={ref}
      >
        {children}
      </ul>
    </div>
  );
};
