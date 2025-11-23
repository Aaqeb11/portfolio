import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const BackButton = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-cyan-50 hover:text-white
        border border-cyan-400/40 rounded-full p-2 px-4
        bg-cyan-600/80 hover:bg-transparent
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50
        backdrop-blur-sm mb-5"
    >
      <ArrowLeft className="w-4 h-4 rounded-full" />
    </Link>
  );
};

export default BackButton;
