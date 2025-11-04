import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";


export const SocialSideBar = () => {
  return (
    <div className="h-screen w-10">
      <div className=" space-y-20 pt-20 px-3">
        <FaGithub className="text-cyan-400 text-2xl hover:cursor-pointer" />
        <FaLinkedin className="text-cyan-400 text-2xl hover:cursor-pointer" />
        <BiLogoGmail className="text-cyan-400 text-2xl hover:cursor-pointer" />
        <FaDiscord className="text-cyan-400 text-2xl hover:cursor-pointer" />
      </div>
    </div>
  );
};
