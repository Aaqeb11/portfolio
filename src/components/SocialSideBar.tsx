import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const SocialSideBar = () => {
  return (
    <div className="h-screen w-10">
      <div className=" space-y-20 pt-20">
        <FaGithub className="text-cyan-400 text-2xl" />
        <FaLinkedin className="text-cyan-400 text-2xl" />
        <FaGithub className="text-cyan-400 text-2xl" />
        <FaGithub className="text-cyan-400 text-2xl" />
      </div>
    </div>
  );
};
