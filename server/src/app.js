import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import testRoutes from "./routes/test.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
});

app.use(limiter);

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.use(errorHandler);

export default app;