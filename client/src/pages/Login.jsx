import { TextField, Button } from "@mui/material";

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-900 p-10 rounded-xl w-96">
                <h2 className="text-2xl mb-6">Login</h2>
                <TextField fullWidth label="Email" margin="normal" />
                <TextField fullWidth label="Password" type="password" margin="normal" />
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                    Login
                </Button>
            </div>
        </div>
    );
}