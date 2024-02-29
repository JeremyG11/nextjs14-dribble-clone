import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen ">
      <div className="hidden w-full xl:block xl:max-w-[31%] px-20 h-screen bg-gray-700"></div>
      {children}
    </section>
  );
}
