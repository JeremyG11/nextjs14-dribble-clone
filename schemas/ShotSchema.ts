import { z } from "zod";

export const FileSchema = z.object({
  id: z.number(),
  fileMeta: z.any(),
  fileUrl: z.string(),
  altText: z.string().optional(),
  shotId: z.number(),
});

export const ShotSchema = z.object({
  id: z.number(),
  title: z.string({ required_error: "Give your shot a title please" }),
  files: z.array(FileSchema),
  gallery: z.any().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.number(),
});

export type File = z.infer<typeof FileSchema>;
export type Shot = z.infer<typeof ShotSchema>;
