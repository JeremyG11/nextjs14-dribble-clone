"use client";
import React, { useState } from "react";
import { Profile } from "@prisma/client";

import EditNavbar from "./EditNavbar";
import EditNavLink from "./EditNavLink";
import FieldsRenderer from "./FieldsRenderer";
import { EditNavLinks } from "@/libs/definitions";

interface EditProps {
  profile: Profile;
}
export default function EditContent({ profile }: EditProps) {
  const [activeLink, setActiveLink] = useState<EditNavLinks>("General");

  return (
    <>
      <EditNavbar
        profile={profile}
        title={activeLink}
        subtitle="Update your username and manage your account"
      />
      <div className="pt-8 flex justify-between max-w-5xl mx-auto px-4  md:px-8 ">
        <EditNavLink activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="w-full rounded py-2 px-10 flex flex-col">
          <FieldsRenderer title={activeLink} profile={profile} />
        </div>
      </div>
    </>
  );
}
