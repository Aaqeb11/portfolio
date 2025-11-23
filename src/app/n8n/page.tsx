import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import n8n from "../../../svg/n8n.svg";
import BackButton from "@/components/ui/BackButton";

const N8n = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              n8n Automation & Slack Bots
            </h1>
            <p className="text-xl text-[#ccf5f5]">Automation</p>
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
              Developed comprehensive automation solutions using n8n (workflow
              automation platform) to streamline development operations and team
              communication. Created multiple intelligent Slack bots that
              enhance productivity and maintain code quality standards.
            </p>
          </div>

          {/* Architecture*/}
          {/*<div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Architecture
            </h2>
            <div className="relative w-full h-[400px]">
              <Image
                src={n8n}
                alt="Debezium Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>*/}

          {/* Key Features */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Real-time Automation",
                  description: "GitHub → Slack notifications without delay",
                },
                {
                  title: "Multi-Bot System",
                  description: "Separate bots for PRs, reminders, and blockers",
                },
                {
                  title: "Workflow Triggers",
                  description:
                    "Responds to GitHub events, Slack messages, and DB updates",
                },
                {
                  title: "Rich Slack Messages",
                  description:
                    "Sends formatted updates with links, stats, and context",
                },
                {
                  title: "Auto Ticketing",
                  description:
                    "Creates Linear/Jira tickets based on Slack conversations",
                },
                {
                  title: "Status Sync",
                  description:
                    "Keeps Slack threads updated with ticket progress",
                },
                {
                  title: "Channel Routing",
                  description:
                    "Sends updates to specific teams or repos automatically",
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
              {["n8n", "Slack API", "GitHub API", "Linear", "PostgreSQL"].map(
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
              Impact
            </h2>
            <ul className="flex flex-col gap-3 list-none p-0 text-[#6DB9DE]">
              {[
                "Reduced PR review time by 40% through timely reminders",
                "Eliminated manual ticket creation, saving 2-3 hours per week",
                "Improved team awareness of code review requirements",
                "Streamlined data operations reducing manual migration effort",
              ].map((impact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3da5d9] mt-1">▹</span>
                  <span className="text-[#262626]-[#ccf5f5]">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default N8n;
