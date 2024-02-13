import { cn } from "@/libs/utils/tw.util";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  imageUrl: string;
  className?: string;
}

export default function Avatar({ imageUrl, className }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div
        className={cn(
          "relative object-cover rounded-full overflow-hidden",
          className
        )}
      >
        <Image src={imageUrl} alt="" fill />
      </div>
    </div>
  );
}
