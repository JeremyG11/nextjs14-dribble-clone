"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface SideDrawerProps {
  isDrawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
export default function SideDrawer({
  isDrawerOpen,
  setDrawerOpen,
}: SideDrawerProps) {
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={`flex-grow p-4 py-6 bg-red-200 ${
        isDrawerOpen ? "block" : "hidden"
      } `}
    >
      Hello world <button onClick={toggleDrawer}>close</button>
    </div>
  );
}
