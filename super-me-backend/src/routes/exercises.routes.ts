import { Router } from "express";
import { getExercises } from "../controllers/exercises.controller";
import { validate } from "../middleware/validate";
import { exercisesQuerySchema } from "../validators/exercises.validator";

const router = Router();

router.get(
    "/",
    validate(exercisesQuerySchema),
    getExercises
);

export default router;