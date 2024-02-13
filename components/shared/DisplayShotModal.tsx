"use client";
import Image from "next/image";
import { useModal } from "@/hooks/modal";

export function DisplayShotModal() {
  const { isOpen, type, onClose } = useModal();

  const isDisplayShotModal = isOpen && type === "displayShotModal";

  return (
    <div className=" ">{isDisplayShotModal && <h1>DisplayShotModal</h1>}</div>
  );
}
