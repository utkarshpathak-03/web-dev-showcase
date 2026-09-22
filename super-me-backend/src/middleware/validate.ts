import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validateQuery = (schema: ZodType) => {
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


export const validateBody = (schema: ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid request body",
                errors: result.error
            });
        }
        res.locals.body = result.data;

        next();
    };
};