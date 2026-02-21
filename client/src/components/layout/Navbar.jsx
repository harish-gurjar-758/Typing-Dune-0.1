import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-lg">
            <Link to="/">
                <img src={logo} alt="Typing Dune" className="h-10" />
            </Link>

            <div className="flex gap-6">
                <Link to="/typing">Typing</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}