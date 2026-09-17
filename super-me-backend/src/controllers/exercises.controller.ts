import { Request, Response } from 'express';

export const getExercises = async (
    req: Request,
    res: Response
) => {
    try {

        const { search, category, page, limit } = res.locals.query;
        console.log({ search, category, page, limit })

        return res.status(200).json({
            exercises: []
        });
    } catch (error) {
        console.error("Error fetching exercises:", error);

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}