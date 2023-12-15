import React from "react";
import Link from "next/link";
import Image from "next/image";
import dribbleLogo from "../../../public/images/Dribbble_logo.svg";

export default function Logo() {
  return (
    <Link href="#" className="flex ">
      <Image
        src={dribbleLogo}
        alt="Logo"
        width={120}
        height={50}
        className="h-6 xl:h-7"
      />
    </Link>
  );
}
