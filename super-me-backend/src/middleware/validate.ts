import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validate = (schema: ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.query);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid query parameters",
                errors: result.error
            });
        }
        res.locals.query = result.data;

        next();
    };
};