import { z } from "zod";

const currentSplitSchema = z.object({
    category: z.string().trim().min(1),
    date: z.string().date(),
    duration: z.number().int().nonnegative(),
    exercises: z.array(
        z.object({
            exerciseId: z.uuid(),
            sets: z.number().int().positive(),
            reps: z.number().int().positive(),
            weight: z.number().nonnegative()
        })
    ).min(1)
});

export const createCurrentSplitSchema = currentSplitSchema;
export const updateCurrentSplitSchema = currentSplitSchema;