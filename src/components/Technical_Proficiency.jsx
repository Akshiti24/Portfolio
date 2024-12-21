import React from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaJava, FaDocker, FaAws, FaGitAlt, FaGithub, FaNodeJs, FaHtml5, FaCss3Alt, FaReact,
} from "react-icons/fa";
import {
  SiMysql, SiCplusplus, SiPostgresql, SiJenkins, SiTensorflow, SiPytorch,
  SiKeras, SiPandas, SiNumpy, SiScikitlearn, SiKubernetes,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

// Icon Data
const icons = [
  { component: <FaPython />, color: "#3776AB" },
  { component: <FaJava />, color: "#007396" },
  { component: <FaDocker />, color: "#2496ED" },
  { component: <FaAws />, color: "#FF9900" },
  { component: <FaGitAlt />, color: "#F05032" },
  { component: <FaGithub />, color: "#333" },
  { component: <SiCplusplus />, color: "#00599C" },
  { component: <SiMysql />, color: "#00758F" },
  { component: <SiPostgresql />, color: "#336791" },
  { component: <SiJenkins />, color: "#D24939" },
  { component: <SiTensorflow />, color: "#FF6F00" },
  { component: <SiPytorch />, color: "#EE4C2C" },
  { component: <SiKeras />, color: "#D00000" },
  { component: <SiPandas />, color: "#150458" },
  { component: <SiNumpy />, color: "#013243" },
  { component: <SiScikitlearn />, color: "#F7931E" },
  { component: <DiRedis />, color: "#DC382D" },
  { component: <SiKubernetes />, color: "#326CE5" },
  { component: <FaNodeJs />, color: "#339933" },
  { component: <FaHtml5 />, color: "#E34F26" },
  { component: <FaCss3Alt />, color: "#1572B6" },
  { component: <FaReact />, color: "#61DAFB" },
];

const Technical_Proficiency = () => {
  const waveVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div id="technical-proficiency" className="border-b border-neutral-800 pt-16 pb-24">
      {/* Section Heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-3xl sm:text-4xl text-gray-300"
      >
        Technical Proficiency
      </motion.h1>

      {/* Icons Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 mx-auto max-w-6xl px-4"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={waveVariants}
            whileHover={{ y: -10, scale: 1.1 }}
            className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-700 bg-gray-800 transition-transform duration-300"
          >
            <div
              className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] flex items-center justify-center"
              style={{ color: icon.color }}
            >
              {icon.component}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technical_Proficiency;
