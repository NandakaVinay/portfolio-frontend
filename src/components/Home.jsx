import React from "react";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <motion.section
  id="home"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col justify-center items-center text-center px-4 py-12 sm:py-14 md:py-16 gap-8 scroll-mt-24 w-full max-w-xl sm:max-w-2xl lg:max-w-3xl min-h-[85vh]"
>
  <motion.img
    src="/images/profile.png"
    alt="Profile"
    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-blue-500 shadow-md"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />

  <motion.h1
    className="text-4xl sm:text-4xl md:text-5xl font-extrabold"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    Hi, I’m <span className="text-blue-500">Nandaka Vinay</span>
  </motion.h1>

  <motion.h2
    className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Backend-Focused Full Stack Developer
  </motion.h2>

  <motion.p
    className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg text-gray-500 dark:text-gray-400"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    I build modern, scalable web applications focused on performance and clean design.
  </motion.p>

    <motion.button
    onClick={() => {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        aboutEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }}
    className="mt-8 inline-block text-blue-600 dark:text-blue-400 font-medium animate-bounce scroll-mt-16 text-base sm:text-lg md:text-xl"
    whileHover={{ scale: 1.05 }}
  >
    ↓ Scroll to Explore
  </motion.button>

</motion.section>

  );
}
