import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <motion.div
                className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl w-96"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h2 className="text-2xl mb-6 text-center">Create Account</h2>

                <TextField fullWidth label="Full Name" margin="normal" />
                <TextField fullWidth label="Email" margin="normal" />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                />

                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                    Register
                </Button>
            </motion.div>
        </div>
    );
}