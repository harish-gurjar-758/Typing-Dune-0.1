import TestResult from "../models/testResult.model.js";
import User from "../models/user.model.js";

export const submitTest = async (req, res, next) => {
    try {
        const { wpm, accuracy, errors, duration, mode, typedText } = req.body;

        const result = await TestResult.create({
            user: req.user.id,
            wpm,
            accuracy,
            errors,
            duration,
            mode,
            typedText,
        });

        const user = await User.findById(req.user.id);

        user.totalTests += 1;
        user.bestWPM = Math.max(user.bestWPM, wpm);
        user.bestAccuracy = Math.max(user.bestAccuracy, accuracy);
        user.averageWPM =
            (user.averageWPM * (user.totalTests - 1) + wpm) / user.totalTests;
        user.rankPoints += wpm + accuracy;

        await user.save();

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};