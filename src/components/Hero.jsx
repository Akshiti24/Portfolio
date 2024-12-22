import { HERO_CONTENT } from "../constants";
import React from "react";
import profilePic from "../assets/pp2.jpg";
import { motion } from "framer-motion"; // Ensure Framer Motion is installed

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="relative lg:mb-32 pt-20 md:pt-40 px-4">
      {/* Wrapper for Image and Text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start relative z-10 space-y-10 lg:space-y-0 lg:space-x-8">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="relative">
            {/* Gradient Ring */}
            <div
              className="absolute top-[30px] left-[-30px] right-[-30px] bottom-[-50px] rounded-full 
              bg-gradient-to-r from-[#63e] to-[#9370db] opacity-50 blur-[40px]"
            ></div>

            {/* Profile Picture */}
            <img
              src={profilePic}
              alt="Akshiti"
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[20rem] lg:h-[20rem] rounded-full object-cover shadow-2xl 
              hover:scale-105 transition-transform duration-300 ease-in-out object-top"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 text-center lg:text-right text-white space-y-4">
          {/* Name Heading */}
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-thin leading-tight text-gray-300 drop-shadow-lg"
          >
            Akshiti Agarwal
          </motion.h1>

          {/* Gradient Subtitle */}
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="block bg-gradient-to-r from-[#63e] to-[#9370db]
            bg-clip-text text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-transparent"
          >
            Software Developer
          </motion.span>

          {/* Description */}
          <motion.p
  variants={container(1)}
  initial="hidden"
  animate="visible"
  className="mt-6 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide text-gray-300 text-justify"
>
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
