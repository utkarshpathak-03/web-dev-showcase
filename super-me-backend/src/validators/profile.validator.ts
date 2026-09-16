import { z } from "zod";

export const updateProfileSchema = z.object({
    name: z.string().min(1).optional(),

    email: z.string().email().optional(),

    weight: z.number().positive().optional(),

    height: z.number().positive().optional(),

    fitnessGoal: z
        .enum(["Muscle Building", "Fat Loss"])
        .optional()
});