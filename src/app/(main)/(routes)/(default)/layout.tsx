import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
