import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center justify-center gap-4 border-t border-gray-300 dark:border-gray-700 text-2xl">
      <div className="flex gap-6">
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.25 }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.25 }}
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="mailto:your.email@gmail.com"
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.25 }}
        >
          <FaEnvelope size={24} />
        </motion.a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Nandaka Vinay</p>
    </footer>
  );
}
