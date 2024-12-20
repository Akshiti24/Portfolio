import { PROJECTS } from "../constants";
import { motion } from "framer-motion"; // Ensure Framer Motion is installed

const Projects = () => {
  // Animation for slide-in effect
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl text-gray-300"
      >
        Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl px-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05, // Hover scale effect
              boxShadow: "0px 0px 40px rgba(133, 77, 255, 0.8)", // Glowing hover effect
            }}
            className="relative flex flex-col items-center rounded-lg bg-neutral-800 bg-opacity-80 p-6 shadow-lg overflow-hidden transition-transform duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Project Title */}
            <h6 className="mb-2 text-xl font-semibold text-white text-center">
              {project.title}
            </h6>

            {/* Project Description */}
            <p className="mb-4 text-neutral-400 text-sm text-center leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-purple-900 bg-opacity-30 px-2 py-1 text-xs font-medium text-purple-400"
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
                  className="rounded bg-gray-700 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-gray-600 transition"
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
                  className="rounded bg-purple-900 px-4 py-2 text-xs font-medium text-white hover:bg-purple-800 transition"
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
