import { PROJECTS } from "../constants";
import { motion } from "framer-motion"; // Ensure Framer Motion is installed

const Projects = () => {
  // Animation for cards (fade-in and zoom-in)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2, // Staggered animation
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Section heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headingVariants}
        className="my-16 text-center text-3xl sm:text-4xl text-gray-300"
      >
        Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mx-auto max-w-7xl"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col items-center rounded-lg bg-neutral-800 bg-opacity-80 p-4 sm:p-6 shadow-lg overflow-hidden transition-transform duration-300"
            whileHover={{
              scale: 1.05, // Hover scale effect
              boxShadow: "0px 0px 40px rgba(133, 77, 255, 0.8)", // Glowing hover effect
            }}
          >
            {/* Project Image */}
            <div className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden rounded-lg mb-4">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Project Title */}
            <h6 className="mb-2 text-lg sm:text-xl font-semibold text-white text-center">
              {project.title}
            </h6>

            {/* Project Description */}
            <p className="mb-4 text-sm sm:text-base text-neutral-400 text-center leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-purple-900 bg-opacity-30 px-2 py-1 text-xs sm:text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              {/* GitHub Button */}
              {project.title !== "SecureCast" && (
                <a
                  href="https://github.com/Akshiti24/TextManipulation.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-gray-700 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
              )}

              {/* Live Demo Button */}
              {project.title === "SecureCast" && (
                <a
                  href="https://securecast-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-purple-900 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-purple-800 transition"
                >
                  Try It!
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
