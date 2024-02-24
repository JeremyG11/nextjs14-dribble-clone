"use client";
import { z } from "zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Profile } from "@prisma/client";
import { cn } from "@/libs/utils/tw.util";
import { Button } from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import InputField from "@/components/shared/InputField";

interface GeneralProps {
  profile: Profile;
}

export const EditProfileBlock: React.FC<GeneralProps> = ({ profile }) => {
  const [toggle, setToggle] = useState(false);
  const profileImageSchema = z.object({
    imageUrl: z.string().url(),
  });
  const { formState, handleSubmit } = useForm({
    resolver: zodResolver(profileImageSchema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="space-y-4 py-8">
      <div className={cn("flex items-center mb-4", toggle && "")}>
        <div className="relative rounded-full h-20 w-20">
          <Image src={profile.imageUrl} alt="" className="rounded-full" fill />
        </div>
        <div className="mx-4 ">
          {!toggle ? (
            <Button
              onClick={() => setToggle(true)}
              className="text-sm py-2 px-6 font-medium text-gray-900  xl:block rounded-full border border-gray-200"
            >
              Upload new picture
            </Button>
          ) : null}
        </div>
        <div className="">
          <Button className="text-sm py-2 px-6 font-medium text-gray-900  xl:block rounded-full bg-gray-100">
            Delete
          </Button>
        </div>
      </div>
      {toggle && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
          <input
            type="file"
            className="block cursor-pointer w-full max-w-sm px-3 py-5 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full"
          />
          <Button
            disabled={formState.isSubmitting}
            className="text-sm py-2 mx-3 px-6 font-semibold text-gray-900  xl:block rounded-full bg-gray-100"
          >
            Upload Now
          </Button>
        </form>
      )}
      <InputField
        label="Name *"
        placeholder={profile?.name?.split(" ")?.join(" ")}
      />
      <InputField label="Email" placeholder={profile?.email} />
      <InputField
        label="Location"
        placeholder={profile?.address || "eg. Addis Ababa"}
      />
      <TextField rows={4} label="Bio" />

      <h2 className="mt-10">ONLINE PRESENCE</h2>
      <Button className="text-sm py-2.5 mx-3 px-6 font-semibold text-white  xl:block rounded-full bg-gray-800">
        Save profile
      </Button>
    </div>
  );
};
