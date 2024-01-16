import { z } from "zod";

export const ShotSchema = z.object({});

export type Shot = z.infer<typeof ShotSchema>;
