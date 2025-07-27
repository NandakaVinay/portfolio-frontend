import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql, SiSpringboot, SiJavascript, SiMongodb, SiAmazonaws, SiDocker, SiPostman, SiGit, SiGithub
} from "react-icons/si";


// Skill data
const skills = [
  {
    icon: <FaJava className="text-red-600" />,
    name: "Java",
    description: "Used for building backend logic and APIs using Spring Boot, and practiced core OOP concepts through problem-solving and real-world applications.",
    categories: ["Programming"],
    proficiency: 90,
    projects: [
      { name: "Portfolio" },
      { name: "E-commerce Application" },]
  },
  {
    icon: <SiSpringboot className="text-green-700" />,
    name: "Spring Boot",
    description: "Built robust RESTful APIs using Spring Boot with validation, exception handling, and MySQL integration for full-stack applications.",
    categories: ["Frameworks", "Web Development"],
    proficiency: 90,
    projects: [
      { name: "Portfolio Backend" },
      { name: "E-commerce Application Backend" },]
  },
  {
    icon: <SiJavascript className="text-yellow-400" />,
    name: "JavaScript",
    description: "Extensive experience in building interactive web applications. Also, worked on gateway scripts for API management.",
    categories: ["Programming"],
    proficiency: 80,
    projects: [
      { name: "Portfolio" },
      { name: "E-commerce Application" },]
  },
  {
    icon: <FaReact className="text-cyan-400" />,
    name: "React",
    description: "Used React to develop interactive UIs with reusable components, stateful logic via hooks, and client-side routing with React Router for multiple web projects.",
    categories: ["Frameworks", "Web Development"],
    proficiency: 70,
    projects: [
      { name: "Portfolio Frontend" },
      { name: "E-commerce Application Frontend" },]
  },
  {
    icon: (
      <img
        src="/images/ibm-logo.svg"
        alt="IBM Logo"
        className="w-14 h-10 flex items-center justify-center"
      />
    ),
    name: "IBM API Connect",
    description: "Used IBM API Connect for designing, deploying, and managing secure APIs across the full lifecycle, including API creation, security, and monitoring.",
    proficiency: 95
  },
  {
    icon: <FaDatabase className="text-indigo-600" />,
    name: "SQL/PostgreSQL",
    description: "Used SQL for querying and managing relational databases, including data retrieval, joins, filtering, and aggregation in projects with MySQL and PostgreSQL.",
    categories: ["Web Development", "Frameworks"],
    proficiency: 90,
    projects: [
      { name: "Various projects" }]
  },

  {
    icon: <SiMongodb className="text-green-500" />,
    name: "MongoDB",
    description: "Experience using MongoDB as a NoSQL database for storing and querying flexible, schema-less data. Integrated it with backend services to handle dynamic content and perform CRUD operations efficiently.",
    proficiency: 90,
    projects: [
      { name: "Various projects" }]
  },
  {
    icon: <SiAmazonaws className="text-[#FF9900]" />,
    name: "AWS",
    description: "Experience deploying and managing backend services using AWS EC2. Utilized AWS to host Spring Boot applications, ensuring scalability, availability, and secure communication for dynamic content delivery.",
    proficiency: 90,
    categories: ["Web Development"],
    projects: [
      { name: "Various projects" }
    ]
  },
  {
    icon: <SiDocker className="text-[#2496ED]" />, // Docker blue
    name: "Docker",
    description: "Used Docker to containerize backend applications for consistent deployment across environments. Familiar with writing Dockerfiles and managing containers.",
    categories: ["Tools"]
  },
  {
    icon: (
      <img
        src="/images/python-logo.svg"
        alt="Python Logo"
        className="w-14 h-14"
      />
    ),
    name: "Python",
    description: "Used Python extensively for machine learning, computer vision, and data structure & algorithm (DSA) problems. I've worked with popular libraries like NumPy, Pandas, OpenCV, scikit-learn, and TensorFlow to build intelligent systems and analyze data. It’s my go-to language for prototyping ideas quickly and solving complex algorithmic challenges.",
    categories: ["Programming"],
    proficiency: 90,
    projects: [
      { name: "Prediction of Power Energy Consumption" },
      { name: "Face-recognition based attendence system" }]
  },
  {
    icon: <FaHtml5 className="text-orange-500" />,
    name: "HTML5",
    description: "Proficient in this technology with hands-on experience.",
    categories: ["Web Development"],
    proficiency: 80,
    projects: [
      { name: "Various projects" }]
  },
  {
    icon: <FaCss3Alt className="text-blue-500" />,
    name: "CSS3",
    description: "Proficient in this technology with hands-on experience.",
    categories: ["Web Development"],
    proficiency: 75,
    projects: [
      { name: "Various projects" }]
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    name: "Tailwind CSS",
    description: "Used Tailwind CSS to build modern, responsive UI components with utility-first classes, enabling consistent design and rapid development.",
    categories: ["Frameworks", "Web Development"],
    proficiency: 65,
    projects: [
      { name: "Portfolio Frontend" },
      { name: "E-commerce Application Frontend" }]
  },
  {
    icon: <SiGithub className="text-black dark:text-white" />, // GitHub logo
    name: "GitHub",
    description: "Experience using GitHub for code collaboration, repository management, pull requests, and issue tracking. Used GitHub Actions for CI/CD in personal and team projects.",
    proficiency: 90,
    categories: ["Tools"],
    projects: [
      { name: "Portfolio Website" },
      { name: "Spring Boot Backend" }
    ]
  },
  {
    icon: <SiGit className="text-[#F05032]" />, // Git's orange color
    name: "Git",
    description: "Proficient in using Git for version control, including branching, merging, rebasing, and resolving conflicts. Used extensively to manage codebase changes across multiple projects.",
    proficiency: 90,
    categories: ["Tools"],
    projects: [
      { name: "Portfolio Website" },
      { name: "Backend API Projects" }
    ]
  },
  {
    icon: <SiPostman className="text-[#FF6C37]" />, // Using react-icons
    name: "Postman",
    description: "Experience using Postman for API testing, automation, and debugging. Used it to test RESTful endpoints, create collections, and validate backend functionality during development.",
    proficiency: 85,
    categories: ["Tools"],
    projects: [
      { name: "Various Backend Projects" }
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredSkills = skills.filter(
    skill => selectedCategory === "All Skills" || skill.categories?.includes(selectedCategory)
  );

  //number of skills to be shown acc to screen size
  const skillsToShow = showAll
    ? filteredSkills
    : windowWidth < 640
      ? filteredSkills.slice(0, 6)
      : filteredSkills.slice(0, 12);

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="w-full relative scroll-mt-16 md:scroll-mt-28 sm:mt-16 sm:mb-16 py-12 sm:py-20
         bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-white
         dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-12 items-center min-h-[720px]">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-center text-neutral-900 dark:text-white"
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="md:text-xl flex flex-wrap gap-2 justify-center mt-0.5 sm:mt-4">
          {["All Skills", "Programming", "Web Development", "Frameworks", "Tools"].map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden px-4 py-2 rounded-full border transition duration-300 ${selectedCategory === cat
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-transparent text-gray-800 dark:text-white dark:border-gray-500 border-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
            >
              {cat}
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </motion.button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div
          className={`w-full px-0 sm:px-0 ${filteredSkills.length <= 6
            ? "flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto justify-items-center"
            }`}

          variants={containerVariants}
        >

          {skillsToShow.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="w-full max-w-[120px] sm:max-w-[140px] aspect-square border-2 border-gray-300 dark:border-gray-600 p-3 rounded-lg 
    cursor-pointer flex flex-col items-center justify-center gap-3
    transition-transform transform hover:scale-[1.05] 
    duration-150 ease-in-out 
    hover:border-blue-400 dark:hover:border-blue-300 will-change-transform"
            >

              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-3xl sm:text-4xl">
                {skill.icon}
              </div>
              <p className="text-center text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>

        {filteredSkills.length > (windowWidth < 640 ? 6 : 12) && (
          <button
            onClick={() => {
              if (showAll) {
                // Scroll to top of skills section on collapse
                setTimeout(() => {
                  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }
              setShowAll(!showAll);
            }}
            className="mt-1 sm:mt-6 px-6 py-2 rounded-full bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>

        )}

        {/* {!showAll && (
          <motion.button
            onClick={() => {
              const aboutEl = document.getElementById("projects");
              if (aboutEl) {
                aboutEl.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
            className="hidden lg:flex mt-8 text-blue-600 dark:text-blue-400 font-medium animate-bounce scroll-mt-16 text-base sm:text-lg md:text-xl"
            whileHover={{ scale: 1.05 }}
          >
            ↓ View my projects
          </motion.button>
        )} */}

        {/* Modal for selected skill */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-sm w-full shadow-lg relative max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-2 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-l"
                  aria-label="Close"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✕
                </motion.button>

                <div className="mb-2">
                  <div className="text-5xl w-20 h-10 flex justify-start items-center">
                    {selectedSkill.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-left mb-1">{selectedSkill.name}</h3>
                {selectedSkill.proficiency !== undefined && (
                  <div className="mt-4">
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.proficiency || 0}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400"
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-left mt-2">
                      Proficiency: {selectedSkill.proficiency}%
                    </p>
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-200 text-left">{selectedSkill.description}</p>
                {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-left text-gray-800 dark:text-gray-200 mb-2">
                      Featured Projects
                    </h4>
                    <ul className="space-y-1">
                      {selectedSkill.projects.map((project, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <span className="mt-1 text-sm">•</span>
                          <span>{project.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section >
  );
}
