import React from "react";
import Image from "next/image";
import { Profile } from "@prisma/client";

import { PingAnimate } from "./ShotDetailPage";

interface ProfileStatusProps {
  profile: Profile;
}

export default function ProfileStatus({ profile }: ProfileStatusProps) {
  return (
    <div>
      <div className="flex items-center">
        <div className="relative object-cover w-10 h-10 rounded-full overflow-hidden">
          <Image src={profile.imageUrl} alt="" fill />
        </div>

        <div className="mx-3">
          <h2 className="font-medium">{profile.name}</h2>
          <p className="flex  items-center text-sm text-emerald-500">
            <PingAnimate />
            Available for work
          </p>
        </div>
      </div>
    </div>
  );
}
