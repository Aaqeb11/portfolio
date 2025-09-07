import { Noto_Serif_Dives_Akuru } from "next/font/google";
import Image from "next/image";
import { SocialSideBar } from "@/components/SocialSideBar";

export default function Home() {
  return (
    <div className="text-white">
      Hello World!
      <SocialSideBar />
    </div>
  );
}
