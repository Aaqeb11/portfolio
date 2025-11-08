import { Noto_Serif_Dives_Akuru } from "next/font/google";
import Image from "next/image";
import { SocialSideBar } from "@/components/ui/SocialSideBar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="text-white">
      <Hero />
      <SocialSideBar />
      <Projects />
      <TechStack />
    </div>
  );
}
