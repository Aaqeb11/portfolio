import BackButton from "@/components/ui/BackButton";
import { Github } from "lucide-react";

const DynaAudit = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-border/50 bg-gradient-to-b from-[#0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              DynaAudit
            </h1>
            <p className="text-xl text-[#ccf5f5]">AI/ML System</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {/* Overview */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Overview
            </h2>
            <p className="text-[#6DB9DE] text-lg leading-loose">
              DynaAudit is a multi-agent smart contract auditing system that
              addresses a critical gap in existing LLM-based tools: static
              knowledge bases cannot detect vulnerabilities from exploits that
              occur after model training cutoffs. Over $2.6 billion USD was lost
              across 192 smart contract exploits in 2024 alone. DynaAudit
              combines four specialized AI agents with a dynamic RAG pipeline
              that continuously ingests live on-chain exploits — detecting both
              known and emerging vulnerabilities with confidence scoring and
              severity classification.
            </p>
          </div>

          {/* The Problem */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              The Problem
            </h2>
            <ul className="flex flex-col gap-3 list-none p-0 text-[#6DB9DE]">
              {[
                "Smart contracts on Ethereum are immutable once deployed — bugs cannot be patched post-deployment",
                "Over $2.6B USD lost across 192 exploit incidents in 2024 alone",
                "Existing LLM-based tools rely on static training data and miss new exploit patterns post-cutoff",
                "A single LLM auditor suffers from degeneration-of-thought — it becomes biased toward its initial analysis",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3da5d9] mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Agent Team */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              The Four-Agent Audit Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  role: "Project Manager",
                  short: "PM",
                  description:
                    "Orchestrates the audit — sets objectives, initiates subtasks, tracks progress",
                  color: "text-violet-400",
                  bg: "bg-violet-500/10",
                },
                {
                  role: "Smart Contract Auditor",
                  short: "SCA",
                  description:
                    "Primary analyst — identifies vulnerabilities using Dynamic RAG context",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
                {
                  role: "Solidity Programming Expert",
                  short: "SPE",
                  description:
                    "Deep code-level analysis — integrates Slither & Mythril static tool output",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
                {
                  role: "Smart Contract Counselor",
                  short: "SCC",
                  description:
                    "Validator & reporter — challenges findings, deduplicates, writes the final structured report",
                  color: "text-orange-400",
                  bg: "bg-orange-500/10",
                },
              ].map((agent) => (
                <div
                  key={agent.short}
                  className="p-4 bg-[#262626]/20 rounded-lg flex gap-4"
                >
                  <span
                    className={`text-lg font-bold font-mono shrink-0 w-10 h-10 flex items-center justify-center rounded-md ${agent.bg} ${agent.color}`}
                  >
                    {agent.short}
                  </span>
                  <div>
                    <h3 className={`font-semibold mb-1 ${agent.color}`}>
                      {agent.role}
                    </h3>
                    <p className="text-sm text-[#6DB9DE]">
                      {agent.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Phase Audit Loop */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              3-Phase Audit Loop
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  phase: "Phase 1",
                  title: "Contract Analysis",
                  description:
                    "PM ↔ SCA: Understand contract purpose, structure, and entry points. RAG injection adds top-K similar exploits into SCA context.",
                },
                {
                  phase: "Phase 2",
                  title: "Vulnerability Identification",
                  description:
                    "SCA ↔ SPE (role reversal): Forces SPE to independently re-evaluate findings, eliminating confirmation bias and degeneration-of-thought. Slither & Mythril output fed into SPE reasoning.",
                },
                {
                  phase: "Phase 3",
                  title: "Report Generation",
                  description:
                    "SCC validates, deduplicates, and produces the final report. Diff Detector flags vulnerabilities matching newly-added exploits not in GPT's static training data.",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="flex gap-4 p-4 bg-[#262626]/20 rounded-lg"
                >
                  <span className="text-sm font-bold text-[#3da5d9] font-mono shrink-0 mt-0.5">
                    {item.phase}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#ccf5f5] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6DB9DE]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* vs Baseline */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              DynaAudit vs LLM-SmartAudit (Baseline)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-[#6DB9DE]">
                <thead>
                  <tr className="border-b border-border/50 text-[#ccf5f5]">
                    <th className="text-left py-2 pr-6">Feature</th>
                    <th className="text-left py-2 pr-6">LLM-SmartAudit</th>
                    <th className="text-left py-2">DynaAudit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    [
                      "Knowledge base",
                      "Static (training cutoff)",
                      "Dynamic — live on-chain exploits",
                    ],
                    [
                      "Exploit sources",
                      "None",
                      "Etherscan, Forta, Rekt.news, DeFiHackLabs",
                    ],
                    [
                      "Vulnerability detection",
                      "Known patterns only",
                      "Known + emerging (post-cutoff)",
                    ],
                    [
                      "Confidence scoring",
                      "Binary (yes/no)",
                      "Scored with severity levels",
                    ],
                    [
                      "Diff detection",
                      "Not present",
                      "Flags novel vs. known exploits",
                    ],
                    [
                      "Feedback loop",
                      "None",
                      "Continuous re-ingestion of new exploits",
                    ],
                  ].map(([feature, baseline, dynaaudit], i) => (
                    <tr key={i}>
                      <td className="py-2 pr-6 text-[#ccf5f5]">{feature}</td>
                      <td className="py-2 pr-6 text-red-400/70">{baseline}</td>
                      <td className="py-2 text-emerald-400/80">{dynaaudit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-6 bg-[#141414] border border-[#3d4d5c]/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "LangChain.js",
                "LangGraph",
                "GPT-4o",
                "NestJS",
                "PostgreSQL",
                "Pinecone",
                "pgvector",
                "Slither",
                "Mythril",
                "TypeScript",
                "Etherscan API",
                "Forta Network",
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
          {/* GitHub */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#ccf5f5] mb-1">
                View Source
              </h2>
              <p className="text-sm text-[#6DB9DE]">
                Research project — extending LLM-SmartAudit (IEEE TSE, 2025).
              </p>
            </div>
            <a
              href="https://github.com/Aaqeb11/DynaAudit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#262626]/50 hover:bg-[#262626] border border-border/50 hover:border-[#3da5d9]/40 text-[#ccf5f5] rounded-lg transition-all duration-200 text-sm font-medium shrink-0"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DynaAudit;
