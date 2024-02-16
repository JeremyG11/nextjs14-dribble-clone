"use client";
import React, { Dispatch, SetStateAction } from "react";

import { EditNavLinks } from "@/libs/definitions";

interface EditNavbarProps {
  activeLink: EditNavLinks;
  setActiveLink: Dispatch<SetStateAction<EditNavLinks>>;
}

export default function EditNavLink({
  activeLink,
  setActiveLink,
}: EditNavbarProps) {
  const links = [
    { title: "General" },
    { title: "Edit Profile" },
    { title: "Password" },
    { title: "Social Profiles" },
    { title: "Email Notifications" },
    { title: "Billing" },
    { title: "Sessions" },
    { title: "Applications" },
    { title: "Data Export" },
  ];

  return (
    <ul className="w-full xl:w-1/4">
      {links.map((item, i) => (
        <li
          key={i}
          className={`py-1 ${
            item.title === activeLink ? "active font-semibold" : ""
          }  cursor-pointer`}
          onClick={() => setActiveLink(item.title as EditNavLinks)}
        >
          {item.title}
        </li>
      ))}
      <li className="text-red-500 py-4 my-4 border-t">Delete Account</li>
    </ul>
  );
}
