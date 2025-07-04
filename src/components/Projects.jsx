import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function ProjectSection() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website with dark mode and animations.",
            codeLink: "https://github.com/yourusername/portfolio",
        },
        {
            title: "E-commerce App",
            description: "A full-stack shopping app using Spring Boot and React.",
            codeLink: "https://github.com/yourusername/ecommerce-app",
        },
        {
            title: "Task Manager",
            description: "A simple task manager app with CRUD operations.",
            codeLink: "https://github.com/yourusername/task-manager",
        },
    ];

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-screen flex flex-col justify-center items-center gap-6 w-full max-w-4xl px-4 scroll-mt-16"
        >
            <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
            <div className="grid md:grid-cols-2 gap-6 pb-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow dark:shadow-lg dark:bg-gray-800 text-left hover:shadow-xl transition-shadow duration-300 hover:border-blue-400 dark:hover:border-blue-300"
                        whileHover={{ scale: 1.03 }}
                    >
                        <h4 className="text-xl font-semibold mb-2 text-center">{project.title}</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-3 text-center">{project.description}</p>
                        <div className="text-center">
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-blue-600 hover:underline"
                            >
                                <FaCode className="mr-2" /> View Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.a
                href="#contact"
                className="mt-6 inline-block text-blue-600 dark:text-blue-400 font-medium animate-bounce scroll-mt-16"
                whileHover={{ scale: 1.05 }}
            >
                ↓ Connect With Me
            </motion.a>
        </motion.section>
    );
}