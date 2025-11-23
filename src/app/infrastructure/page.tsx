import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Debezium from "../../../svg/Debezium.svg";
import BackButton from "@/components/ui/backButton";

const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              Production Infrastructure Management
            </h1>
            <p className="text-xl text-[#ccf5f5]">DevOps</p>
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
              Built and maintained comprehensive production infrastructure for
              an internal developer platform, deploying and managing multiple
              self-hosted open-source solutions. This infrastructure supports
              the entire development lifecycle with tools for code hosting,
              secrets management, project tracking, and team collaboration.
            </p>
          </div>

          {/* Key Features */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Backstage IDP",
                  description: "Unified developer portal and service catalog",
                },
                {
                  title: "Gitea",
                  description: "Self-hosted Git service for code repositories",
                },
                {
                  title: "Infisical",
                  description:
                    "Centralized secrets and environment variable management",
                },
                {
                  title: "Plane",
                  description: "Agile project management alternative to Jira",
                },
                {
                  title: "Rocket.Chat",
                  description: "Team communication platform",
                },
                {
                  title: "NocoDB",
                  description: "Spreadsheet-like interface for PostgreSQL",
                },
                {
                  title: "AppFlowy & Affine",
                  description: "Productivity and documentation tools",
                },
              ].map((service, index) => (
                <div key={index} className="p-4 bg-[#262626]/20 rounded-lg">
                  <h3 className="font-semibold text-[#ccf5f5] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6DB9DE]">
                    {service.description}
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
                "Docker",
                "Nginx",
                "PostgreSQL",
                "Backstage",
                "Gitea",
                "Infisical",
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
                "Reduced external SaaS costs by hosting internally",
                "Full control over development tools and data",
                "Improved team collaboration through integrated tools",
                "Enhanced security with self-hosted solutions",
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

export default Infrastructure;
