"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

import { EditNavLinks } from "@/libs/definitions";
import DropDownButton from "@/components/shared/DropDownButton";
import { cn } from "@/libs/utils/tw.util";

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
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <DropDownButton
        title={activeLink}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        className="md:hidden flex items-center w-full justify-between border text-gray-600 py-2.5 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
      />
      {isOpened && (
        <div className="my-3 md:mt-0 text-gray-500">
          <ul className="w-full xl:w-1/4">
            {links.map((item, i) => (
              <li
                key={i}
                className={`py-1 ${
                  item.title === activeLink ? "active font-semibold" : ""
                }  cursor-pointer`}
                onClick={() => {
                  setActiveLink(item.title as EditNavLinks);
                  setIsOpened(false);
                }}
              >
                {item.title}
              </li>
            ))}
            <li className="text-red-500 py-4 my-4 border-t">Delete Account</li>
          </ul>
        </div>
      )}
      <ul className="hidden md:block w-full xl:w-1/4">
        {links.map((item, i) => (
          <li
            key={i}
            className={cn(
              "py-1 cursor-pointer text-gray-500 hover:text-gray-800 duration-150",
              item.title === activeLink && "active font-bold text-black"
            )}
            onClick={() => setActiveLink(item.title as EditNavLinks)}
          >
            {item.title}
          </li>
        ))}
        <li className="text-red-500 py-4 my-4 border-t">Delete Account</li>
      </ul>
    </>
  );
}
