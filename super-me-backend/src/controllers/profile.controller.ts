import { Request, Response } from "express";
import { getProfileData } from "../services/profile.service";

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