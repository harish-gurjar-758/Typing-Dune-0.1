import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import TypingEngine from "../components/typing/TypingEngine";
import ModeSelector from "../components/typing/ModeSelector";
import StatsBar from "../components/typing/StatsBar";

export default function TypingTest() {
    const [mode, setMode] = useState(60);
    const [restartKey, setRestartKey] = useState(0);

    const handleRestart = () => {
        setRestartKey(prev => prev + 1);
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <ModeSelector mode={mode} setMode={setMode} />

            <TypingEngine
                key={restartKey}
                duration={mode}
                onRestart={handleRestart}
            />

        </motion.div>
    );
}