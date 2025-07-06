import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import SkillsSection from './components/Skills';
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
      key={darkMode ? "dark" : "light"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8 sm:px-6 sm:py-10 gap-12">

        <HomeSection />

        <AboutSection />
        
        <SkillsSection />

        <ProjectsSection />

        <ContactSection />

        <Footer />

      </main>
      {
        showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 px-4 py-2 rounded-full bg-blue-500 text-white text-base shadow-lg hover:bg-blue-600 z-50 flex items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <span className="text-xl">↑</span>
            <span className="hidden sm:inline">Back to top</span>
          </motion.button>
        )
      }
    </motion.div>
  );
}
