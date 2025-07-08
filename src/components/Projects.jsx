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
        {
            title: "Power Consumption Prediction",
            description: "A machine learning project",
            codeLink: "https://github.com/yourusername/power",
        }
    ];

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="scroll-mt-20 md:scroll-mt-32 px-4 sm:px-6 pt-8 sm:pt-12 md:pt-24 pb-12 sm:mt-12 sm:mb-12 max-w-6xl mx-auto flex flex-col gap-10 items-center"
        >
            <h3 className="text-3xl sm:text-5xl font-extrabold text-center text-neutral-900 dark:text-white">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer w-full max-w-[90%] sm:max-w-sm mx-auto p-3 sm:p-4 border-2 border-gray-300 dark:border-gray-600 
             rounded-lg shadow dark:shadow-lg dark:bg-gray-800 text-left 
             hover:shadow-xl transition-shadow duration-300 
             hover:border-blue-400 dark:hover:border-blue-300"
                        whileHover={{ scale: 1.03 }}
                    >
                        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-center">{project.title}</h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 text-center">{project.description}</p>

                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base text-center mt-2 italic opacity-90">
                            Tap to know more →
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.button
                onClick={() => {
                  const aboutEl = document.getElementById("contact");
                  if (aboutEl) {
                    aboutEl.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="hidden lg:flex mt-8 text-blue-600 dark:text-blue-400 font-medium animate-bounce scroll-mt-16 text-base sm:text-lg md:text-xl"
                whileHover={{ scale: 1.05 }}
              >
                ↓ Connect with Me
            </motion.button>
        </motion.section>
    );
}