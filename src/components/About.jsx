import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  // Split the ABOUT_TEXT into paragraphs
  const aboutParagraphs = ABOUT_TEXT.split(/\n\s*\n|\.\s{2,}/).filter(Boolean);

  // Animation variants for container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // Delay between children
      },
    },
  };

  // Animation variants for each paragraph (text reveal effect)
  const revealVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Animation for the heading
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className="border-b border-neutral-900 pt-8 pb-20"
    >
      {/* Centered Heading */}
      <motion.h1
        variants={headingVariants}
        className="my-10 text-center text-4xl font-bold text-gray-200"
      >
        About Me
      </motion.h1>

      {/* Paragraphs with Reveal Animation */}
      <motion.div
        variants={containerVariants}
        className="w-full lg:w-3/4 mx-auto text-justify"
      >
        {aboutParagraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={revealVariants}
            className="mt-6 text-lg text-neutral-300 leading-relaxed"
          >
            {paragraph.endsWith(".") ? paragraph : `${paragraph}.`}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
