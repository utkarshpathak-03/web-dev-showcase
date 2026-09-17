import { z } from "zod";

export const exercisesQuerySchema = z.object({
    search: z.string().trim().optional(),

    category: z.string().trim().optional(),

    page: z.coerce.number().int().positive().default(1),

    limit: z.coerce.number().int().positive().max(100).default(20)
});