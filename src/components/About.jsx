import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="scroll-mt-24 md:scroll-mt-40 px-4 sm:px-6 py-12 max-w-6xl mx-auto flex flex-col gap-12"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center w-full mb-4"
            >
                <p className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-xs px-3 py-1 rounded-full shadow-sm">
                    About Me
                </p>

                <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 text-neutral-900 dark:text-white">
                    Transforming <span className="text-blue-400 dark:text-blue-300">Thought</span> into <span className="text-blue-600 dark:text-blue-400">Technology</span>
                </h2>
            </motion.div>

            <motion.div className="flex flex-col lg:flex-row items-center gap-12">
                {/*Text on the left */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="lg:w-2/3 text-center lg:text-left"
                >
                    <p className="text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        With over 2 years of hands-on experience, I specialize in building robust backend systems and designing scalable, cloud-native solutions
                        <br /><br />
                        I work extensively with Java and Spring Boot to build robust RESTful APIs, integrate databases, and develop secure, high-performance server-side applications. My experience includes deploying microservices, handling authentication flows, and optimizing backend performance for real-world applications.
                        <br /><br />
                        While I enjoy crafting clean UIs when needed, my true strength lies in solving complex problems behind the scenes — ensuring the logic, architecture, and data flows work seamlessly across the system.
                    </p>
                </motion.div>
                {/*Card on the right */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
                >
                    <img
                        src="/images/profile.png"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
                    />

                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        Backend Focused Full-Stack Developer
                    </h4>

                    <div className="mt-2 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-4 py-1 rounded-full text-xs font-medium">
                        2 Years Experience
                    </div>

                    <div className="mt-6 w-full relative pl-4">
                        {/* Vertical line */}
                        <div className="absolute top-1 left-2 h-[70%] w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 rounded-full"></div>
                        <div className="mb-6 pl-4 relative">
                            {/* Dot */}
                            <div className="absolute left-0 top-[6px] w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-800"></div>
                            <p className="text-left text-xs text-blue-500 uppercase tracking-wider">2023 – Present</p>
                            <p className="text-left font-semibold text-neutral-800 dark:text-neutral-100">Backend Developer</p>
                            <p className="text-left text-sm text-neutral-600 dark:text-neutral-400">Tata Consultancy Services</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <div className="hidden lg:flex justify-center mt-8">
                <a
                    href="#skills"
                    className="mt-8 inline-block text-blue-600 dark:text-blue-400 font-medium animate-bounce scroll-mt-16 text-base sm:text-lg md:text-xl"
                >
                    ↓ View My Skills
                </a>
            </div>
        </section>
    );
}
