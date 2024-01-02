// FileUploader.tsx
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import imageIcon from "@/public/images/shotUploadIcon.png";
import useBlock from "@/hooks/toggle";

interface FileUploaderProps {
  onFilesChange: (files: File[]) => void;
}

const FileUploader = ({ onFilesChange }: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileContainerRef = useRef<HTMLDivElement | null>(null);
  const { blocks, onOpenBlock, setDrawerOpen } = useBlock();

  useEffect(() => {
    if (fileContainerRef.current) {
      // Handle file container logic here
    }
  }, [files]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      onOpenBlock("image");
      setDrawerOpen(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="relative p-3 flex flex-col justify-center w-full max-w-5xl mx-auto h-full border-2 rounded-lg border-gray-300 cursor-pointer"
      >
        {files.length === 0 ? (
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
        ) : (
          <div ref={fileContainerRef} className="relative w-full h-full z-30">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="relative w-full h-full rounded-lg overflow-hidden"
              >
                {block.id}
              </div>
            ))}
          </div>
        )}

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
          disabled={files.length > 0}
        />
      </label>
    </div>
  );
};

export default FileUploader;
