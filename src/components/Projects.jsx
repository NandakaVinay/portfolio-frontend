import React from "react";
import { motion } from "framer-motion";

export default function ProjectSection() {
    const projects = [
        {
            title: "Portfolio Website",
            image: "/images/portfolio.png",
            codeLink: "https://github.com/yourusername/portfolio",
            descriptionPoints: [
                "Built a fully responsive and visually appealing portfolio website tailored for both desktop and mobile users using a mobile-first approach with Tailwind CSS, ensuring smooth rendering across all screen sizes.",
                "Implemented dark and light mode toggle functionality using Tailwind’s dark variant and React state, allowing users to switch themes seamlessly with preserved preferences using localStorage.",
                "Leveraged Framer Motion to add elegant page transitions and interactive animations, enhancing the user experience with smooth hover effects, fade-ins, scroll-based animations, and modals.",
                "Created a modular skill section with interactive filter buttons and animated pop-up modals that display detailed information about each skill, including related projects, experience level, and tech stack."
            ]
        },
        {
            title: "E-commerce App",
            image: "/images/ecommerce.png",
            codeLink: "https://github.com/yourusername/ecommerce-app",
            descriptionPoints: [
                "Built with Spring Boot (backend) and React (frontend).",
                "JWT-based authentication and role management.",
                "Admin panel to manage products and orders.",
                "Stripe integration for secure payments."
            ]
        },
        {
            title: "Task Manager",
            image: "/images/task-manager.png",
            codeLink: "https://github.com/yourusername/task-manager",
            descriptionPoints: [
                "Add, update, delete tasks with localStorage persistence.",
                "Simple and clean UI using React and Tailwind.",
                "Task status toggle for 'completed' or 'pending'.",
                "Responsive layout across all devices."
            ]
        },
        {
            title: "Power Consumption Prediction",
            image: "/images/power.png",
            codeLink: "https://github.com/yourusername/power",
            descriptionPoints: [
                "Forecasts energy usage using historical time-series data.",
                "Used Python, Pandas, and Scikit-learn.",
                "Linear Regression and LSTM models tested.",
                "Results visualized using Matplotlib."
            ]
        }
    ];

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="scroll-mt-20 md:scroll-mt-28 px-4 sm:px-6 pt-8 sm:pt-12 md:pt-24 pb-12 max-w-6xl mx-auto flex flex-col gap-16 items-center"
        >
            <h3 className="text-3xl sm:text-5xl font-extrabold text-center text-neutral-900 dark:text-white">Projects</h3>

            <div className="w-full flex flex-col gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-stretch gap-6 md:gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-600 hover:border-blue-400 dark:hover:border-blue-300 p-6"
                    >
                        <div className="w-full md:w-1/3 flex items-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto max-h-52 object-cover rounded-xl"
                            />
                        </div>

                        <div className="hidden md:block w-1 bg-gradient-to-b from-blue-400 via-transparent to-purple-500 rounded-full" />

                        <div className="flex flex-col gap-3 w-full">
                            <h4 className="text-2xl font-bold text-gray-800 dark:text-white text-center md:text-center">{project.title}</h4>
                            <ul className="text-gray-700 dark:text-gray-300 text-m text-left list-disc list-outside pl-5 space-y-4">
                                {project.descriptionPoints.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className="mt-4 md:mt-6 text-center md:text-center">
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                                >
                                    View Code →
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
