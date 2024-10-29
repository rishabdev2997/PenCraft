import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle logout logic here, e.g., clear tokens, reset state, etc.
        console.log("User logged out");
        // Redirect to /signup page
        navigate("/signin");
    };

    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                PenCraft
            </Link>
            <div className="flex items-center space-x-4">
                <Link to={"/publish"}>
                    <button
                        type="button"
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-1"
                    >
                        New
                    </button>
                </Link>
                <div className="relative flex items-center">
                    <div className="relative group">
                        <Avatar size={"big"} name="Rishab" onClick={handleLogout} /> {/* Attach handleLogout to Avatar click */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded px-2 py-1">
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
