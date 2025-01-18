import React, { useState, useEffect } from "react";
import { Howl } from "howler"; // For sound integration
import Cursor from "./Cursor"; // Custom cursor component

const InteractiveSection = () => {
    // Scroll progress state
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollTotal) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sound integration
    const playSound = () => {
        const sound = new Howl({
            src: ["/path-to-sound-file.mp3"], // Add your sound file path
        });
        sound.play();
    };

    return (
        <div className="relative min-h-screen bg-gray-800 overflow-hidden">
            {/* Custom Cursor */}
            <Cursor />

            {/* Parallax background effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center bg-[url('/path-to-your-image.jpg')] z-0" />

            <div className="relative z-10 px-8 py-20">
                {/* Scroll Progress Bar */}
                <div
                    className="fixed top-0 left-0 w-full h-1 bg-blue-500"
                    style={{ width: `${scrollProgress}%` }}
                ></div>

                {/* Interactive Content */}
                <div className="mt-8 text-center text-white">
                    <p className="text-xl mb-4">Click anywhere to play a sound!</p>
                    <button
                        onClick={playSound}
                        className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
                    >
                        Play Sound
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InteractiveSection;
