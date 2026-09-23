import { Request, Response } from "express";
import { getCurrentSplitData, createCurrentSplitData, updateCurrentSplitData, getWorkoutHistoryData } from "../services/workout.service";

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

export const createCurrentSplit = async (
    req: Request,
    res: Response
) => {
    try {
        const workout = await createCurrentSplitData(
            res.locals.body
        );

        return res.status(201).json(workout);
    } catch (error) {
        console.error("Error creating current split:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const updateCurrentSplit = async (
    req: Request,
    res: Response
) => {
    try {
        const workout = await updateCurrentSplitData(
            res.locals.body
        );

        if (!workout) {
            return res.status(404).json({
                message: "Current workout not found"
            });
        }

        return res.status(200).json(workout);
    } catch (error) {
        console.error("Error updating current split:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const getWorkoutHistory = async (
    req: Request,
    res: Response
) => {
    try {
        const workouts = await getWorkoutHistoryData();

        return res.status(200).json({
            workouts
        });
    } catch (error) {
        console.error("Error fetching workout history:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

