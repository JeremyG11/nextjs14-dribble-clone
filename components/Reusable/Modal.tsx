"use client";
import React from "react";
import { motion } from "framer-motion";

import { useModal } from "@/hooks/modal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
}
export default function Modal({ children, isOpen, title }: ModalProps) {
  const { onClose } = useModal();
  const ref = React.useRef(null);
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === ref.current) {
      onClose();
    }
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return isOpen ? (
    <div
      ref={ref}
      onClick={handleBackdropClick}
      className="bg-black/70 overflow-y-auto overflow-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full"
    >
      <div className=" relative p-4 w-full xl:max-w-4xl">
        <div className="relative w-full bg-white rounded-xl shadow-2xl">
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            className="relative w-full h-full xl:px-14"
          >
            <h3 className=" xl:py-8 xl:text-2xl xl:font-bold capitalize">
              {title}
            </h3>
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  ) : null;
}
