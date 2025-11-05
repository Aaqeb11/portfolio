import { Noto_Serif_Dives_Akuru } from "next/font/google";
import Image from "next/image";
import { SocialSideBar } from "@/components/SocialSideBar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="text-white">
      <Hero />
      <SocialSideBar />
      <TechStack />
    </div>
  );
}
