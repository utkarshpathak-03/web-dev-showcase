import { Router } from "express";
import {
    getCurrentSplit,
    createCurrentSplit,
    updateCurrentSplit,
    getWorkoutHistory
} from "../controllers/workout.controller";
import { validateBody } from "../middleware/validate";

import {
    createCurrentSplitSchema,
    updateCurrentSplitSchema
} from "../validators/workout.validator";

const router = Router();

router.get("/currentSplit", getCurrentSplit);

router.post(
    "/currentSplit",
    validateBody(createCurrentSplitSchema),
    createCurrentSplit
);

router.patch(
    "/currentSplit",
    validateBody(updateCurrentSplitSchema),
    updateCurrentSplit
);

router.get("/workoutHistory", getWorkoutHistory);


export default router;