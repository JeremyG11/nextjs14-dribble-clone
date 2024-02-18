"use client";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  className?: string;
  isPercent?: boolean;
}

export function CountUp({ from, to, className, isPercent }: CounterProps) {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    const node = nodeRef.current;

    if (node) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = `${value.toFixed()}${isPercent ? "%" : ""}`;
        },
      });

      return () => controls.stop();
    }
  }, [from, to, isPercent]);

  return <p ref={nodeRef} className={className} />;
}
