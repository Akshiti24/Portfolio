import { HERO_CONTENT } from "../constants";
import React from "react";
import profilePic from "../assets/pp2.jpg";
import { motion } from "motion/react"

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
    <div id="home" className="relative lg:mb-32 pt-40">
      {/* Background Theme */}

      <div className="flex flex-wrap relative z-10">
        {/* Image Section with Bigger Gradient Ring Shifted Down */}
        <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start lg:p-4">
          <div className="relative">
            {/* Adjusted Gradient Ring */}
            <div
              className="absolute top-[30px] left-[-30px] right-[-30px] bottom-[-50px] rounded-full 
              bg-gradient-to-r from-[#63e] to-[#9370db] opacity-50 blur-[40px]"
            ></div>

            {/* Image with Bottom Cropped */}
            <img
              src={profilePic}
              alt="Akshiti"
              className="relative w-80 h-80 lg:w-[20rem] lg:h-[20rem] rounded-full object-cover shadow-2xl 
              hover:scale-105 transition-transform duration-300 ease-in-out object-top"
            />
          </div>
        </div>

        {/* Text Section Positioned at Bottom Right */}
        <div className="absolute bottom-8 right-8 w-full lg:w-2/3 px-4 lg:px-8 text-right text-white">
          {/* Heading */}
          <motion.h1 
            variants = {container(0)}
            initial = "hidden"
            animate = "visible"
            className="pb-4 text-6xl lg:text-8xl font-thin leading-tight text-gray-300 drop-shadow-lg"
          >
            Akshiti Agarwal
          </motion.h1>

          {/* Gradient Subtitle */}
          <motion.span
          variants = {container(0.5)}
          initial = "hidden"
          animate = "visible"
            className="bg-gradient-to-r from-[#63e] to-[#9370db]
            bg-clip-text text-2xl font-medium tracking-tight text-transparent"
          >
            Software Developer
          </motion.span>

          {/* Description */}
          <motion.p 
          variants = {container(1)}
          initial = "hidden"
          animate = "visible"
          className="mt-6 text-lg font-light leading-relaxed tracking-wide text-gray-300 text-justify">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
