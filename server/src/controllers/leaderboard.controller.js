import User from "../models/user.model.js";

export const getLeaderboard = async (req, res, next) => {
    try {
        const topUsers = await User.find()
            .sort({ rankPoints: -1 })
            .limit(10)
            .select("fullName bestWPM bestAccuracy rankPoints");

        res.json(topUsers);
    } catch (error) {
        next(error);
    }
};