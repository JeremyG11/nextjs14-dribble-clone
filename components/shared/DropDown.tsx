"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

interface DropDownProps {
  children: React.ReactNode;
}

export default function DropDown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2.5 duration-150 border rounded-full"
      >
        <HiOutlineEllipsisHorizontal className="text-2xl" />
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 z-10 mt-2 w-48 rounded-md border border-gray-100 text-gray-500 shadow-sm">
          <div className="">
            <ul className="p-2">
              {[
                "Add or remove from the lists",
                "Edit your account settings",
                "Edit your work preferences",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="" className="text-[13px] truncate">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
