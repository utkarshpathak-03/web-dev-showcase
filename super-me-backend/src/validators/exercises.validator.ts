import { z } from "zod";

export const exercisesQuerySchema = z.object({
    search: z.string().trim().optional(),

    category: z.string().trim().optional(),

    page: z.coerce.number().int().positive().default(1),

    limit: z.coerce.number().int().positive().max(100).default(20)
});

export const createExerciseSchema = z.object({
    name: z.string().trim().min(1),

    muscleGroup: z.string().trim().min(1),

    category: z.string().trim().min(1),

    imageUrl: z.string().trim().optional()
});