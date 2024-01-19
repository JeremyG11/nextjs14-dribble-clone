"use client";
import Image from "next/image";
import { FileWithPath } from "@uploadthing/react";
import { FileData, useBlock } from "@/hooks/toggle";
import { useDropzone } from "@uploadthing/react/hooks";
import imageIcon from "@/public/images/shotUploadIcon.png";
import { generateClientDropzoneAccept } from "uploadthing/client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";

interface FileUploaderProps {
  onFilesChange: (files: File[]) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const FileUploader = ({ onFilesChange, setFiles }: FileUploaderProps) => {
  const { onOpenBlock, updateFiles, setDrawerOpen } = useBlock();

  const createFileData = (file: File): FileData => {
    const fileType = file.type.split("/")[0];
    return { file: file, type: fileType };
  };

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);

      const selectedFileData = selectedFiles.map(createFileData);
      onFilesChange(selectedFiles);

      const fileType = selectedFiles[0].type.split("/")[0];
      if (fileType === "image") {
        onOpenBlock("image");
        updateFiles("image", selectedFileData);
      } else if (fileType === "video") {
        onOpenBlock("video");
        updateFiles("video", selectedFileData);
      } else {
        console.error(`Unsupported file type: ${fileType}`);
      }

      setDrawerOpen(true);
    }
  };
  return (
    <div {...getRootProps()} className="relative w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="relative p-3 flex flex-col justify-center w-full h-screen max-w-5xl mx-auto border-2 border-dashed rounded-lg border-gray-300 cursor-pointer"
      >
        <div className="z-30 flex flex-col items-center justify-center pt-5 pb-6 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image
              src={imageIcon}
              alt=""
              width={80}
              height={100}
              className=""
            />
            <p className="mb-2 text-gray-500">
              Drag and drop files, or
              <span className="border-b-2 pb-0.5 mx-1 border-pink-500">
                Browse
              </span>
            </p>
            <p className="text-gray-500">
              Images (png, jpg, gif) or Videos (mp4)
            </p>
          </div>
        </div>

        <input
          {...getInputProps()}
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </label>
    </div>
  );
};

export default FileUploader;
