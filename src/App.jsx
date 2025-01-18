import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Assuming you have a Footer component

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Set initial dark mode based on localStorage or system preference
    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode) {
            setIsDarkMode(storedMode === "enabled");
        } else {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [isDarkMode]);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-2xl">
            {/* Toast Notifications */}
            <Toaster />

            {/* Navbar */}
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 mr-52 bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-800 dark:text-white transition-all duration-300"
            >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Main Content Sections */}
            <div className="relative z-10 px-8 py-20 text-gray-900 dark:text-white flex-grow">
                {/* About Section */}
                <About />

                {/* Projects Section */}
                <Projects />

                {/* Contact Section */}
                <Contact />
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
