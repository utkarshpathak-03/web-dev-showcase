import { Router } from "express";
import { getCurrentSplit } from "../controllers/workout.controller";

const router = Router();

router.get("/currentSplit", getCurrentSplit);

export default router;