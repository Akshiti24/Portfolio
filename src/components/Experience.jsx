import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion"; // Install with 'npm install framer-motion'

const Experience = () => {
  // Animation variants for slide-in and fade-in effects
  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl text-gray-300"
      >
        Experience
      </motion.h1>

      {/* Timeline Container */}
      <div className="relative mx-auto w-full max-w-4xl">
        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-8 top-0 h-full w-1 bg-neutral-800 hidden lg:block z-0 origin-top"
        ></motion.div>

        {/* Timeline Entries */}
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={cardVariants(index % 2 === 0 ? "left" : "right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={`flex flex-col lg:flex-row items-start mb-12 relative ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Timeline Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-[1.6rem] top-[1.5rem] h-5 w-5 bg-purple-400 rounded-full border-4 border-neutral-900 hidden lg:block z-0"
            ></motion.div>

            {/* Year */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:pl-16 lg:pr-8 text-center lg:text-left">
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </div>

            {/* Experience Card */}
            <div className="relative w-full lg:w-3/4 p-6 rounded-lg bg-neutral-800 hover:scale-105 transition-transform duration-300 shadow-lg z-10">
              <h6 className="text-lg font-thin text-white">
                {experience.role}{" "}
                <span className="text-purple-400 text-sm font-light">
                  - {experience.company}
                </span>
              </h6>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
