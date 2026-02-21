// src/routes/auth.routes.js

import express from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("fullName").notEmpty().withMessage("Full name required"),
        body("email").isEmail().withMessage("Valid email required"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters"),
    ],
    validate,
    register
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Valid email required"),
        body("password").notEmpty().withMessage("Password required"),
    ],
    validate,
    login
);

export default router;