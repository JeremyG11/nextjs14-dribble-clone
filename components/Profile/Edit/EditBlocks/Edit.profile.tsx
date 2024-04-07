"use client";
import { z } from "zod";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { User } from "@prisma/client";
import { cn } from "@/libs/utils/tw.util";
import { uploadFiles } from "@/libs/uploadthing";
import { Button } from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import InputField from "@/components/shared/InputField";
import { updateUserProfilePicture } from "@/libs/actions/profile.actions";
import { ProfileImageSchema } from "@/schemas/ProfileSchema";

interface GeneralProps {
  profile: User;
}

export const EditProfileBlock: React.FC<GeneralProps> = ({ profile }) => {
  const [toggle, setToggle] = useState(false);

  const { handleSubmit, control, formState } = useForm({
    defaultValues: {
      image: "",
    },
    resolver: zodResolver(ProfileImageSchema),
  });
  const [files, setFiles] = useState<File[]>([]);

  const onSubmit = async (data: z.infer<typeof ProfileImageSchema>) => {
    console.log("Form submitted");

    try {
      const imageUrls = await uploadFiles("imageUploader", { files });
      const imageUrl = imageUrls[0]?.url;
      if (imageUrl) {
        await updateUserProfilePicture({ image: imageUrl });
      }
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="space-y-4 py-8">
      <div className={cn("flex items-center mb-4", toggle && "")}>
        <div className="relative rounded-full h-20 w-20">
          <Image
            src={profile.image as string}
            alt=""
            className="rounded-full"
            fill
          />
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
          <Controller
            control={control}
            name="image"
            render={({ field: { onChange, onBlur, value, ref } }) => {
              const handleFileChange = (
                e: React.ChangeEvent<HTMLInputElement>
              ) => {
                if (e.target.files) {
                  setFiles([e.target.files[0]]);
                }
                onChange(e);
              };

              return (
                <div className="flex items-center">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="block cursor-pointer w-full max-w-sm px-3 py-5 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full"
                  />
                  {formState.errors.image && <p>Error</p>}
                </div>
              );
            }}
          />

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className={cn(
              "text-sm py-2 mx-3 px-6 font-semibold text-gray-900  xl:block rounded-full bg-gray-100",
              formState.isSubmitting && "bg-gray-300 cursor-not-allowed"
            )}
          >
            {formState.isSubmitting ? "Uploading" : "Upload Now"}
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
      <h2 className="pt-10 pb-5  my-4 border-b font-semibold text-xs tracking-widest uppercase">
        ONLINE PRESENCE
      </h2>
      <InputField label="Personal website" placeholder="" />
      <div className="flex items-center pt-4 justify-end">
        <Button className="text-sm py-2.5 px-6 font-semibold text-white  xl:block rounded-full bg-gray-800">
          Save profile
        </Button>
      </div>
    </div>
  );
};
