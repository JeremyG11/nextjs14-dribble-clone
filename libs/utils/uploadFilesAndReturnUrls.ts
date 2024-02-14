import { Uploader } from "@/libs/definitions";
import { uploadFiles } from "@/libs/uploadthing";

export const uploadFilesAndReturnUrls = async (
  uploader: Uploader,
  filesData: any
) => {
  const files = filesData.map((fileData: any) => fileData.file);
  const uploadedFiles = await uploadFiles(uploader, { files });
  return uploadedFiles.map((file: any) => file.url);
};
