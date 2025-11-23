import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Debezium from "../../../svg/Debezium.svg";
import BackButton from "@/components/ui/BackButton";

const ComponentDock = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              Component Dock
            </h1>
            <p className="text-xl text-[#ccf5f5]">
              React Component Library CLI
            </p>
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
              Component Dock is a powerful command-line interface tool designed
              to streamline the creation of modern React component libraries.
              Built to solve the complexity of setting up component library
              infrastructure, it provides developers with production-ready
              scaffolding that includes all the essential tools and
              configurations needed for building, testing, and publishing
              high-quality React components.
            </p>
          </div>

          {/* Architecture*/}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Architecture
            </h2>
            <div className="h-[300px]">
              <Image
                src={Debezium}
                alt="Debezium Logo"
                width={1200}
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
                  title: "Automated Scaffolding",
                  description:
                    "Instantly generate a complete component library structure with a single command",
                },
                {
                  title: "Modern Toolchain",
                  description:
                    "Pre-configured with Rollup, TypeScript, Storybook, ESLint, and Prettier",
                },
                {
                  title: "Zero Configuration",
                  description:
                    "Start building components immediately without spending hours on build configuration",
                },
                {
                  title: "Best Practices Built-in",
                  description:
                    "Follows React community standards and modern development practices",
                },
                {
                  title: "NPM Publishing Ready",
                  description:
                    "Generated libraries are pre-configured for seamless NPM package publishing",
                },
                {
                  title: "Type Safety",
                  description:
                    "TypeScript integration for better developer experience and fewer bugs",
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
                "TypeScript",
                "Rollup",
                "Storybook",
                "Jest",
                "ESLint",
                "Prettier",
                "NPM",
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
              Use Cases
            </h2>
            <ul className="flex flex-col gap-3 list-none p-0 text-[#6DB9DE]">
              {[
                "Quickly bootstrap new component libraries for design systems",
                "Create reusable UI component packages for multiple projects",
                "Build open-source React component libraries",
                "Establish consistent component architecture across teams",
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
              href="https://www.npmjs.com/package/@aaqeb11/component-dock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3da5d9] text-[#3da5d9]-[#ccf5f5] rounded-lg hover:bg-[#3da5d9]/90 transition-all no-underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>NPM Package</span>
            </a>
            <a
              href="https://github.com/Aaqeb11/component-dock"
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

export default ComponentDock;
