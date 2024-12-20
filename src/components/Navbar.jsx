import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiGmail } from "react-icons/si";
import React from "react";

export const Navbar = () => {
  const iconStyle =
    "hover:scale-125 transition-transform duration-300 ease-in-out";

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8">
      {/* Icons */}
      <div className="flex items-center gap-6 text-2xl ml-auto">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/akshiti-agarwal-996b63261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={iconStyle} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Akshiti24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={iconStyle} />
        </a>

        {/* Codeforces */}
        <a
          href="https://codeforces.com/profile/Ak.24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodeforces className={iconStyle} />
        </a>

        {/* Gmail */}
        <a href="mailto:akshitiagarwal@gmail.com">
          <SiGmail className={iconStyle} />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/Akshiti024"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className={iconStyle} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
