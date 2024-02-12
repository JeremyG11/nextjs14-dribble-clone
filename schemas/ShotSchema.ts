import { z } from "zod";

export const FileSchema = z.object({
  id: z.string(),
  fileMeta: z.any(),
  fileUrl: z.string(),
  altText: z.string().optional(),
  shotId: z.number(),
});

export const ShotSchema = z.object({
  title: z.string({ required_error: "Give your shot a title" }),
  files: z.array(z.string()).optional(),
  gallery: z.any().optional(),
});

export type ShotFile = z.infer<typeof FileSchema>;
export type Shot = z.infer<typeof ShotSchema>;
