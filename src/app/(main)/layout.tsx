import Navbar from "@/components/Navbar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
}
