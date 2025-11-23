import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const SocialSideBar = () => {
  return (
    <>
      {/* Mobile version - Top center */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 xl:hidden">
        <div className="flex space-x-6 items-center">
          <div className="w-10 h-0.5 bg-cyan-400 mx-auto mr-6"></div>
          <a
            href="https://github.com/Aaqeb11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com/in/aaqeb-ahmed-nawaz-30441b215"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a href="mailto:aaqebahmed@gmail.com">
            <BiLogoGmail className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://discord.com/users/aaqeb11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <div className="w-10 h-0.5 bg-cyan-400 mx-auto ml-1"></div>
        </div>
      </div>

      {/* Desktop version - Left side */}
      <div className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-6">
          <a
            href="https://github.com/Aaqeb11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com/in/aaqeb-ahmed-nawaz-30441b215"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a href="mailto:aaqebahmed@gmail.com">
            <BiLogoGmail className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://discord.com/users/aaqeb11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-cyan-400 text-2xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
        </div>
        {/* Vertical line below icons */}
        <div className="w-0.5 h-24 bg-cyan-400 mx-auto mt-6"></div>
      </div>
    </>
  );
};
