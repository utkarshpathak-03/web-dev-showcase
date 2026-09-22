import { Router } from "express";
import { getExercises, createExercise } from "../controllers/exercises.controller";
import { validateQuery, validateBody } from "../middleware/validate";
import { exercisesQuerySchema, createExerciseSchema } from "../validators/exercises.validator";

const router = Router();

router.get(
    "/",
    validateQuery(exercisesQuerySchema),
    getExercises
);

router.post(
    "/",
    validateBody(createExerciseSchema),
    createExercise
);

export default router;