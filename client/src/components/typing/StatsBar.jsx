import React, { useMemo } from "react";
import { motion } from "framer-motion";
import SpeedIcon from "@mui/icons-material/Speed";
import TimerIcon from "@mui/icons-material/Timer";
import ErrorIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StatusBar = ({
    wpm = 0,
    accuracy = 100,
    timeLeft = 60,
    totalTime = 60,
    errors = 0,
    progress = 0,
}) => {
    const progressPercent = useMemo(() => {
        return Math.min(100, Math.max(0, progress));
    }, [progress]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full backdrop-blur-xl bg-white/5 border border-white/10 
                 rounded-2xl p-6 shadow-2xl"
        >
            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {/* WPM */}
                <StatCard
                    icon={<SpeedIcon />}
                    label="WPM"
                    value={wpm}
                    color="from-indigo-500 to-purple-500"
                />

                {/* Accuracy */}
                <StatCard
                    icon={<CheckCircleIcon />}
                    label="Accuracy"
                    value={`${accuracy}%`}
                    color="from-green-400 to-emerald-500"
                />

                {/* Time */}
                <StatCard
                    icon={<TimerIcon />}
                    label="Time"
                    value={`${timeLeft}s`}
                    color="from-yellow-400 to-orange-500"
                />

                {/* Errors */}
                <StatCard
                    icon={<ErrorIcon />}
                    label="Errors"
                    value={errors}
                    color="from-red-500 to-pink-500"
                />
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{progressPercent.toFixed(0)}%</span>
                </div>

                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
                    />
                </div>
            </div>
        </motion.div>
    );
};

/* ========================
   Reusable Stat Card
========================= */

const StatCard = ({ icon, label, value, color }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/5 
                 border border-white/10 
                 rounded-xl p-4 
                 backdrop-blur-md 
                 shadow-lg"
        >
            <div
                className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white shadow-md`}
            >
                {icon}
            </div>

            <div>
                <p className="text-xs text-gray-400">{label}</p>
                <motion.p
                    key={value}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-bold text-white"
                >
                    {value}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default StatusBar;