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
        <div className="absolute left-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white ">
          <div className="p-2">
            <ul>
              <li>
                <Link href="">Add or remove from the lists</Link>
              </li>
              <li>
                <Link href="">Edit your account settings</Link>
              </li>
              <li>
                <Link href="">Edit your work preferences</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
