import { Request, Response } from "express";
import { getProfileData, updateProfileData } from "../services/profile.service";
import { updateProfileSchema } from "../validators/profile.validator"

export const getProfile = async (
    req: Request,
    res: Response
) => {
    try {
        const profile = await getProfileData();

        if (!profile) {
            return res.status(404).json({
                message: "User profile not found"
            });
        }

        return res.status(200).json(profile);
    } catch (error) {
        console.error("Error fetching profile:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const updateProfile = async (
    req: Request,
    res: Response
) => {
    try {
        console.log('req.body => ', req.body)
        const validationResult = updateProfileSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res.status(400).json({
                message: "Invalid request body",
                errors: validationResult.error
            })
        }
        const updatedProfile = await updateProfileData(req.body);

        if (!updatedProfile) {
            return res.status(404).json({
                message: "User profile not found"
            });
        }

        return res.status(200).json(updatedProfile);
    } catch (error) {
        console.error("Error updating profile:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};