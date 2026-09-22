import { Request, Response } from "express";
import { getExercisesData, createExerciseData } from "../services/exercise.service";

export const getExercises = async (
    req: Request,
    res: Response
) => {
    try {
        const {
            search,
            category,
            page,
            limit
        } = res.locals.query;

        const result = await getExercisesData({
            search,
            category,
            page,
            limit
        });

        return res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching exercises:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const createExercise = async (
    req: Request,
    res: Response
) => {
    try {
        //     console.log("body:", req.body);
        //     console.log("validated body:", res.locals.body);
        //     console.log("Sending to service:", res.locals.body);
        const exercise = await createExerciseData(
            res.locals.body
        )

        return res.status(201).json(exercise)
    } catch (error) {
        console.error("Error creating exercise ", error)

        res.status(500).json({
            message: "Internal server error"
        })
    }
}