import React from "react";

const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <div className="relative w-72 h-96 perspective-1000">
            <div className="relative w-full h-full transition-transform transform-style-preserve-3d duration-700 group hover:rotate-y-180">
                {/* Front of the Card */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d group-hover:rotate-y-180 transition-all duration-700">
                    <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
                    <div className="p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
                    </div>
                </div>

                {/* Back of the Card */}
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900 text-white rounded-lg shadow-lg flex items-center justify-center text-xl transform-style-preserve-3d group-hover:rotate-y-180 transition-all duration-700">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-white text-xl font-semibold">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
