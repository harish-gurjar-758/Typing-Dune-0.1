// src/utils/generateToken.js

import jwt from "jsonwebtoken";

/**
 * Generate Access Token
 * Short-lived token for API access
 */
export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "15m",
        }
    );
};

/**
 * Generate Refresh Token
 * Long-lived token for session renewal
 */
export const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: "7d",
        }
    );
};