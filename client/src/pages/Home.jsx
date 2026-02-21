import { motion } from "framer-motion";
import DesertBackground from "../components/three/DesertBackground";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <DesertBackground />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="text-6xl font-bold text-sunset mb-6">
                    Typing Dune
                </h1>
                <p className="text-gray-300 mb-8">
                    Master your speed like desert wind.
                </p>

                <Link
                    to="/typing"
                    className="px-8 py-4 bg-sunset rounded-full text-white font-semibold hover:scale-110 transition"
                >
                    Start Typing
                </Link>
            </motion.div>
        </div>
    );
}