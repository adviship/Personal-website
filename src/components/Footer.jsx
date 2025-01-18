import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-20 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} PRAKASH </p>
                <a href="https://www.linkedin.com/in/aditya-prakash-kushwaha-b55001253/"  target="_blank" className="text-blue-500 hover:text-blue-700">Linkedin</a>
                <a href="https://github.com/adviship" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
