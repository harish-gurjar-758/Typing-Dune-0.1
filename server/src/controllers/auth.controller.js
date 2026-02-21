import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateAccessToken = (userId) =>
    jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "15m" });

const generateRefreshToken = (userId) =>
    jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
    });

export const register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;

        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: "Email exists" });

        const user = await User.create({ fullName, email, password });

        res.status(201).json({
            accessToken: generateAccessToken(user._id),
            refreshToken: generateRefreshToken(user._id),
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const match = await user.comparePassword(password);
        if (!match)
            return res.status(400).json({ message: "Invalid credentials" });

        res.json({
            accessToken: generateAccessToken(user._id),
            refreshToken: generateRefreshToken(user._id),
        });
    } catch (error) {
        next(error);
    }
};