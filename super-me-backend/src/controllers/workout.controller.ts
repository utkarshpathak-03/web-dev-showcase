import { Request, Response } from "express";
import { getCurrentSplitData } from "../services/workout.service";

export const getCurrentSplit = async (
    req: Request,
    res: Response
) => {
    try {
        const workout = await getCurrentSplitData();

        if (!workout) {
            return res.status(404).json({
                message: "Current workout not found"
            });
        }

        return res.status(200).json(workout);
    } catch (error) {
        console.error("Error fetching current split:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};