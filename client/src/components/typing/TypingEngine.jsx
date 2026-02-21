import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sampleText =
    "The desert wind shapes the dunes endlessly under the golden sunset sky.";

export default function TypingEngine({ duration }) {
    const [input, setInput] = useState("");
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isActive, setIsActive] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (!isActive || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) {
            setFinished(true);
            setIsActive(false);
        }
    }, [timeLeft]);

    const wordsTyped = input.trim().split(" ").length;
    const wpm = Math.round((wordsTyped / duration) * 60);
    const correctChars = input
        .split("")
        .filter((char, i) => char === sampleText[i]).length;

    const accuracy = input.length
        ? Math.round((correctChars / input.length) * 100)
        : 0;

    const errors = input.length - correctChars;

    return (
        <div className="max-w-4xl w-full mt-8 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">

            {/* TEXT DISPLAY */}
            <p className="text-lg mb-6 leading-8 text-gray-300">
                {sampleText.split("").map((char, index) => {
                    let color = "text-gray-500";

                    if (index < input.length) {
                        color =
                            char === input[index] ? "text-green-400" : "text-red-500";
                    }

                    return (
                        <span key={index} className={color}>
                            {char}
                        </span>
                    );
                })}
            </p>

            {/* INPUT */}
            <textarea
                disabled={finished}
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setIsActive(true);
                }}
                className="w-full p-4 bg-black/50 rounded-lg text-white outline-none border border-gray-700"
            />

            {/* STATS */}
            <motion.div
                className="flex justify-between mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div>⏱ {timeLeft}s</div>
                <div>⚡ WPM: {wpm}</div>
                <div>🎯 Accuracy: {accuracy}%</div>
                <div>❌ Errors: {errors}</div>
            </motion.div>

            {finished && (
                <motion.div
                    className="mt-6 text-center text-xl text-sunset"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    Test Finished!
                </motion.div>
            )}
        </div>
    );
}