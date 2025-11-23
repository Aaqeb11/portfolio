import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Error from "../../../svg/Error.svg";
import BackButton from "@/components/ui/backButton";

const ComponentDock = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              Standalone Error Handling Package
            </h1>
            <p className="text-xl text-[#ccf5f5]">Library</p>
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
              Developed a comprehensive, framework-agnostic error handling
              library that provides consistent error management across different
              technologies. The package includes specialized adapters for
              popular tools like Axios, NestJS, and Prisma, enabling unified
              error handling strategies across the entire application stack.
            </p>
          </div>

          {/* Architecture*/}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg h-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Architecture
            </h2>
            <div className="flex justify-center">
              <Image
                src={Error}
                alt="Debezium Logo"
                width={1400}
                height={800}
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
                  title: "Universal Error Interface",
                  description:
                    "Standardized error structure across all adapters",
                },
                {
                  title: "Technology Adapters",
                  description:
                    "Specialized handlers for Axios, NestJS, and Prisma",
                },
                {
                  title: "Stack Trace Preservation",
                  description: "Full debugging information maintained",
                },
                {
                  title: "Metadata Support",
                  description:
                    "Contextual information for better error tracking",
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
              {["TypeScript", "Axios", "NestJS", "Prisma", "Node.js"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#3d4d5c]/50 text-[#6DB9DE] border border-[#3da5d9]/20 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Benifits
            </h2>
            <ul className="flex flex-col gap-3 list-none p-0 text-[#6DB9DE]">
              {[
                "Consistent error handling across microservices",
                "Reduced boilerplate code",
                "Improved error logging and monitoring",
                "Better error messages for debugging",
              ].map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3da5d9] mt-1">▹</span>
                  <span className="text-[#262626]-[#ccf5f5]">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentDock;
