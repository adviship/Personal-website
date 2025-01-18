import React from "react";
import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <nav className="bg-gray-800 dark:bg-gray-900 p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white text-xl font-semibold hover:text-indigo-500 dark:hover:text-indigo-300">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </div>
                <div className="text-white text-xl font-semibold hover:text-indigo-500 dark:hover:text-indigo-300">
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </div>
                <div className="text-white text-xl font-semibold hover:text-indigo-500 dark:hover:text-indigo-300">
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-800 dark:text-white hover:bg-rose-400 dark:hover:bg-rose-600 transition duration-300"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
