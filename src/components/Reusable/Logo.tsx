"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dribbleLogo from "../../../public/images/Dribbble_logo.svg";

export default function Logo() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className="flex cursor-pointer">
      <Image
        src={dribbleLogo}
        alt="Logo"
        width={120}
        height={50}
        className="h-6 xl:h-7"
      />
    </div>
  );
}
