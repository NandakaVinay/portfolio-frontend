import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaSun,
    FaMoon,
    FaDownload,
} from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {

    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            const sections = ["home", "about", "skills", "projects", "contact"];

            for (const sec of sections) {
                const el = document.getElementById(sec);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(sec);
                        break;
                    }   
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 flex flex-col sm:flex-row justify-between items-center px-6 py-4 shadow dark:shadow-gray-800 gap-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold">
                Nandaka Vinay
            </motion.h1>
            <div className="flex gap-4 items-center">
                {/* Desktop links */}
                <div className="hidden md:flex gap-4">
                    <motion.a
                        href="#home"
                        className={`px-3 py-1 rounded-md transition-all duration-300 ${activeSection === "home"
                            ? "bg-blue-500 text-white shadow-md"
                            : "hover:bg-blue-100 dark:hover:bg-gray-700"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#about"
                        className={`px-3 py-1 rounded-md transition-all duration-300 ${activeSection === "about"
                            ? "bg-blue-500 text-white shadow-md"
                            : "hover:bg-blue-100 dark:hover:bg-gray-700"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        About
                    </motion.a>
                    <motion.a
                        href="#skills"
                        className={`px-3 py-1 rounded-md transition-all duration-300 ${activeSection === "skills"
                            ? "bg-blue-500 text-white shadow-md"
                            : "hover:bg-blue-100 dark:hover:bg-gray-700"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Skills
                    </motion.a>
                    <motion.a
                        href="#projects"
                        className={`px-3 py-1 rounded-md transition-all duration-300 ${activeSection === "projects"
                            ? "bg-blue-500 text-white shadow-md"
                            : "hover:bg-blue-100 dark:hover:bg-gray-700"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className={`px-3 py-1 rounded-md transition-all duration-300 ${activeSection === "contact"
                            ? "bg-blue-500 text-white shadow-md"
                            : "hover:bg-blue-100 dark:hover:bg-gray-700"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </motion.a>
                </div>
                {/* Mobile menu button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl p-1">
                    ☰
                </button>
                <motion.a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <FaDownload /> Resume
                </motion.a>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:hidden shadow-md z-40 flex flex-col gap-3 text-center px-4 py-4"
                    >
                        {["home", "about", "skills", "projects", "contact"].map((sec) => (
                            <a
                                key={sec}
                                href={`#${sec}`}
                                onClick={() => setMenuOpen(false)}
                                className={`inline-block w-fit px-3 py-2 rounded-md transition-all duration-300 ${activeSection === sec
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "hover:bg-blue-100 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}