import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

import { generateComponents } from "@uploadthing/react";

export const { UploadButton } = generateComponents<OurFileRouter>();
