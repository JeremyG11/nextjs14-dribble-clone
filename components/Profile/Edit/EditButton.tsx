"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button";

export default function EditButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/profile/edit")}
      className="py-3 px-6 font-medium text-gray-900  xl:block rounded-full border border-gray-200"
    >
      Edit Profile
    </Button>
  );
}
