"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useSpring,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxAnimationProps {
  children: React.ReactNode;
  baseVelocity: number;
}
export default function ParallaxAnimation({
  baseVelocity,
  children,
}: ParallaxAnimationProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-60, 60, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className="scroller" style={{ x }}>
      <span>{children} </span>
    </motion.div>
  );
}
