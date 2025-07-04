import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-center gap-4 sm:gap-6 scroll-mt-16 w-full max-w-2xl min-h-[85vh]"
    >
      <motion.img
        src="/profile.png"
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-blue-500 shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        Hi, I’m <span className="text-blue-500">Nandaka Vinay</span>
      </motion.h1>

      <motion.h2
        className="text-lg sm:text-3xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Software Developer
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I build modern, scalable web applications focused on performance and clean design.
      </motion.p>

      {/* Scroll Link */}
      <motion.a
        href="#skills"
        className="mt-8 inline-block text-blue-600 dark:text-blue-400 font-medium animate-bounce scroll-mt-16"
        whileHover={{ scale: 1.05 }}
      >
        ↓ View My Skills
      </motion.a>
    </motion.section>
  );
}
