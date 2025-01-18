import React from "react";
import ProjectCard from "./ProjectCard"; // Import ProjectCard

const Projects = () => {
    const projectData = [
        {
            title: "Project One",
            description: "ML model.",
            imgUrl: "https://via.placeholder.com/150", // Replace with actual image
            link: "https://github.com/adviship/ml_app"
        },
        {
            title: "Project Two",
            description: "This is a description for project two.",
            imgUrl: "https://via.placeholder.com/150", // Replace with actual image
            link: "https://github.com/your-repo"
        },
        {
            title: "Project Three",
            description: "This is a description for project three.",
            imgUrl: "https://via.placeholder.com/150", // Replace with actual image
            link: "https://github.com/your-repo"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-amber-200 dark:bg-gray-900">
            <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white  mb-10">My Projects</h2>
            <div className="bg-gradient-to-tl flex flex-wrap justify-center gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
