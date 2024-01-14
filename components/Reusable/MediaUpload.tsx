import React from "react";

interface MediaUploadProps {
  mediaType: "image" | "video";
  mediaSrcUrl: string;
}

export default function MediaUpload({
  mediaType,
  mediaSrcUrl,
}: MediaUploadProps) {
  return (
    <div>
      <label htmlFor="file" className="block font-medium my-3 py-2 pt-4">
        Media
      </label>
      <div className="flex flex-col items-center w-full bg-gray-100 max-w-lg p-5 mx-auto text-center border cursor-pointer rounded-lg">
        {mediaType === "image" ? (
          <img src={mediaSrcUrl} />
        ) : (
          <video src={mediaSrcUrl} />
        )}
      </div>

      {!mediaSrcUrl && (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center w-full bg-gray-100 max-w-lg p-5 mx-auto text-center border cursor-pointer rounded-lg"
        >
          <div className="py-2 px-5 me-2 w-11/12 my-2 font-medium text-sm focus:outline-none bg-white rounded-full border border-gray-200">
            Select media
          </div>

          <p className="text-sm text-gray-500">or drop media to upload</p>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      )}
    </div>
  );
}
