import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Notewiz from "../../../svg/Notewiz.svg";
import BackButton from "@/components/ui/backButton";

const NoteWiz = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              NoteWiz - AI Education Platform
            </h1>
            <p className="text-xl text-[#ccf5f5]">EdTech</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {/* Overview */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Overview
            </h2>
            <p className="text-[#6DB9DE] text-lg leading-loose">
              NoteWiz is an innovative AI-powered education platform that
              transforms the learning experience through intelligent features
              like contextual chatbots, automated flashcard generation, and
              adaptive quiz creation. The platform employs gamification
              strategies to increase student engagement and improve knowledge
              retention.
            </p>
          </div>

          {/* Architecture*/}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg h-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Architecture
            </h2>
            <div className="">
              <Image
                src={Notewiz}
                alt="NoteWiz Logo"
                width={1300}
                height={1200}
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "AI Chatbot with File Upload",
                  description:
                    "Upload PDFs and documents, ask questions about content",
                },
                {
                  title: "Flashcard Generator",
                  description:
                    "Automatic flashcard creation from study materials",
                },
                {
                  title: "Adaptive Quiz Generator",
                  description:
                    "Generate quizzes with multiple question types and difficulty adaptation",
                },
                {
                  title: "Gamification System",
                  description:
                    "Gamification System: Points, badges, leaderboards, and streak tracking",
                },
                {
                  title: "Progress Analytics",
                  description:
                    "Track learning progress and performance over time",
                },
              ].map((feature, index) => (
                <div key={index} className="p-4 bg-[#262626]/20 rounded-lg">
                  <h3 className="font-semibold text-[#ccf5f5] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6DB9DE]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-6 bg-[#141414] border border-[#3d4d5c]/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "OpenAI",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#3d4d5c]/50 text-[#6DB9DE] border border-[#3da5d9]/20 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Impact
            </h2>
            <ul className="flex flex-col gap-3 list-none p-0 text-[#6DB9DE]">
              {[
                "Improved study efficiency through AI assistance",
                "Increased engagement via gamification",
                "Personalized learning experiences",
                "Better knowledge retention through spaced repetition",
              ].map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3da5d9] mt-1">▹</span>
                  <span className="text-[#262626]-[#ccf5f5]">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://note-wiz-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3da5d9] text-[#3da5d9]-[#ccf5f5] rounded-lg hover:bg-[#3da5d9]/90 transition-all no-underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Link</span>
            </a>
            <a
              href="https://github.com/NoteWiz/NoteWiz-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d5c] text-[#6DB9DE] rounded-lg hover:bg-[#3d4d5c]/80 transition-all no-underline"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoteWiz;
