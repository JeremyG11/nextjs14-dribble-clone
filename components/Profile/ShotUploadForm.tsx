"use client";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { AddBlock } from "./AddBlock";
import SideDrawer from "./SideDrawer";
import { useModal } from "@/hooks/modal";
import { cn } from "@/libs/utils/tw.util";
import FileUploader from "./FileUploader";
import { useBlock } from "@/hooks/zustandStore";
import { Button } from "../shared/Button";
import BlockDisplayCard from "./BlockDisplayCard";
import { ShotSchema } from "@/schemas/ShotSchema";
import { createShot } from "@/libs/actions/shot.actions";
import { useRouter } from "next/navigation";

export default function ShotUploadForm() {
  const { isDrawerOpen, boardData } = useBlock();
  const isFileSelected = Object.keys(boardData).length !== 0;

  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const { onOpen, isOpen, setData } = useModal();
  const [title, setTitle] = useState("");

  const handleDropZone = (files: File[]) => {
    const selectedFile = files[0];

    const reader = new FileReader();

    reader.readAsDataURL(new Blob([selectedFile]));
  };

  // React hook form
  const { register, handleSubmit, formState } =
    useForm<z.infer<typeof ShotSchema>>();
  const { isSubmitting } = formState;
  const onSubmit: SubmitHandler<z.infer<typeof ShotSchema>> = async (data) => {
    try {
      const res = await createShot(data);
      if ("success" in res && res.success) {
        setData({ id: res.shot.id });
        onOpen("publishShotModal");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  useEffect(() => {}, [title]);
  const handleContinueClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className="lg:flex w-full min-w-full max-h-screen">
      <div className="relative flex-grow overflow-y-auto hide-scroll-bar">
        <div
          className={`px-6 w-full z-10 flex justify-between  top-6  ${
            isFileSelected ? "absolute" : "sticky"
          }`}
        >
          <Button
            onClick={() => router.push("/")}
            className="border py-2 px-5 text-sm font-medium"
          >
            Cancel
          </Button>

          <div className="inline-flex">
            <Button
              disabled={!title || isSubmitting}
              onClick={handleSubmit(onSubmit)}
              className="py-2 px-5 text-sm font-medium mx-4 bg-zinc-100"
            >
              Save as draft
            </Button>
            <Button
              disabled={!title || isSubmitting}
              onClick={handleContinueClick}
              className={cn(
                "px-3 py-1 md:py-2 md:px-5 text-white text-sm mr-4 font-medium bg-black",
                !title && "cursor-not-allowed "
              )}
            >
              Continue
            </Button>
          </div>
        </div>
        <div
          className={`${
            isDrawerOpen ? "mx-0" : "mx-8 xl:mx-40"
          } pt-14 xl:h-full `}
        >
          <div className="mt-14 w-full xl:h-auto ">
            {isFileSelected ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <span className="py-5 flex items-center text-gray-800 text-2xl font-semibold sm:text-4xl xl:max-w-3xl">
                  <input
                    type="text"
                    placeholder=" Give me a name"
                    {...register("title", {
                      required: true,
                      maxLength: 32,
                    })}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mx-auto outline-none placeholder:text-gray-400"
                  />
                </span>
              </form>
            ) : (
              <h1 className="text-center text-gray-800 text-2xl font-semibold sm:text-4xl">
                What have you been working on ?
              </h1>
            )}
            <div
              className={`flex items-center justify-center w-full xl:h-full ${
                isFileSelected ? "mt-3" : "mt-10"
              }`}
            >
              {!isFileSelected ? (
                <FileUploader
                  setFiles={setFiles}
                  onFilesChange={handleDropZone}
                />
              ) : (
                <BlockDisplayCard />
              )}
            </div>

            <>
              <div className="w-8/12 mx-auto mt-8"></div>
              {isFileSelected && <AddBlock />}
            </>
          </div>
        </div>
      </div>
      <div className="">
        <SideDrawer />
      </div>
    </div>
  );
}
