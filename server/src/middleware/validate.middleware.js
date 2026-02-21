// src/middleware/validate.middleware.js

/**
 * Generic field validation middleware
 * Usage:
 * validateFields(["email", "password"])
 */
const validate = (requiredFields = []) => {
    return (req, res, next) => {
        const missingFields = [];

        requiredFields.forEach((field) => {
            if (
                req.body[field] === undefined ||
                req.body[field] === null ||
                req.body[field] === ""
            ) {
                missingFields.push(field);
            }
        });

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
                missingFields,
            });
        }

        next();
    };
};

export default validate;