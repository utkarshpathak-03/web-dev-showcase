import { Request, Response } from "express";
import { getProfileData } from "../services/profile.service";

export const getProfile = async (
    req: Request,
    res: Response
) => {
    try {
        const profile = await getProfileData();

        res.status(200).json(profile);
    } catch (error) {
        console.error("Error fetching profile:", error);

        res.status(500).json({
            message: "Failed to fetch profile"
        });
    }
};