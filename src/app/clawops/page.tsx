import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import { Github } from "lucide-react";

const ClawOps = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-border/50 bg-gradient-to-b from-[#0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              ClawOps
            </h1>
            <p className="text-xl text-[#ccf5f5]">DevOps</p>
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
              ClawOps is an AI-driven DevOps monitoring system built on OpenClaw
              — an open-source personal AI agent runtime. It continuously
              watches your cloud infrastructure, understands what it sees, and
              communicates with your development team through Slack in plain,
              human language. Rather than forwarding raw metrics, ClawOps
              correlates signals, reasons about anomalies, and suggests or takes
              appropriate action — including flagging wasteful compute to reduce
              your carbon footprint.
            </p>
          </div>

          {/* How It Works */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              How It Works
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: "01",
                  title: "Data Collection",
                  description:
                    "A TypeScript skill uses your cloud provider's SDK to pull live metrics — CPU, memory, disk I/O, network throughput, and instance health — on a scheduled heartbeat.",
                },
                {
                  step: "02",
                  title: "AI Analysis",
                  description:
                    "OpenClaw receives raw metrics and reasons over them with persistent memory — it recognises that a server behaves differently on weekends or has been degrading over several days.",
                },
                {
                  step: "03",
                  title: "Action & Communication",
                  description:
                    "Slack serves as both notification surface and command interface. Low-risk actions auto-execute; high-risk actions (terminate, scale down) always require team approval via Slack buttons.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 bg-[#262626]/20 rounded-lg"
                >
                  <span className="text-2xl font-bold text-[#3da5d9] font-mono shrink-0">
                    {item.step}
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

          {/* Key Features */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "AI Analysis",
                  description:
                    "Correlates signals, reasons about anomalies, and suggests or auto-executes remediation actions",
                },
                {
                  title: "Two-Way Slack",
                  description:
                    "Receive alerts and issue natural language commands directly from your Slack channel",
                },
                {
                  title: "Green Computing",
                  description:
                    "Detects idle servers, estimates carbon footprint, and recommends eco-friendly actions",
                },
                {
                  title: "Persistent Memory",
                  description:
                    "Builds context over time — knows each instance's normal behaviour patterns",
                },
                {
                  title: "Action Classification",
                  description:
                    "Low-risk actions auto-execute; critical actions always require human approval",
                },
                {
                  title: "Multi-Cloud",
                  description:
                    "Pluggable adapters for AWS (EC2 + CloudWatch), GCP, and Azure",
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

          {/* Sustainability */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              🌱 Sustainability & Green Computing
            </h2>
            <p className="text-[#6DB9DE] text-lg leading-loose mb-4">
              Up to 30% of cloud servers are idle at any given time, consuming
              power without delivering value. ClawOps addresses this directly.
            </p>
            <ul className="flex flex-col gap-3 list-none p-0 text-[#6DB9DE]">
              {[
                "Detects idle and underutilised servers running below meaningful CPU/memory thresholds",
                "Recommends or auto-executes green actions — stop, pause, or right-size instances",
                "Estimates carbon impact using regional grid carbon intensity (e.g. UAE: ~0.4 kg CO₂/kWh)",
                "Tracks sustainability trends over time via OpenClaw's persistent memory",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3da5d9] mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="p-6 bg-[#141414] border border-[#3d4d5c]/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "OpenClaw",
                "Slack API",
                "AWS",
                "Terraform",
                "pnpm",
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

          {/* Action Classification */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Action Classification
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-[#6DB9DE]">
                <thead>
                  <tr className="border-b border-border/50 text-[#ccf5f5]">
                    <th className="text-left py-2 pr-6">Action</th>
                    <th className="text-left py-2 pr-6">Risk</th>
                    <th className="text-left py-2">Behaviour</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    {
                      action: "Fetch logs",
                      risk: "Low",
                      behaviour: "Auto-execute",
                    },
                    {
                      action: "Restart a service",
                      risk: "Low",
                      behaviour: "Auto-execute",
                    },
                    {
                      action: "Reboot an instance",
                      risk: "Medium",
                      behaviour: "Auto-execute with notification",
                    },
                    {
                      action: "Scale up / down",
                      risk: "High",
                      behaviour: "Requires Slack approval",
                    },
                    {
                      action: "Terminate instance",
                      risk: "Critical",
                      behaviour: "Requires approval + confirmation",
                    },
                    {
                      action: "Stop idle instance",
                      risk: "Medium",
                      behaviour: "Auto-execute + CO₂ saved estimate",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-6">{row.action}</td>
                      <td className="py-2 pr-6">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${
                            row.risk === "Low"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : row.risk === "Medium"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : row.risk === "High"
                                  ? "bg-orange-500/10 text-orange-400"
                                  : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {row.risk}
                        </span>
                      </td>
                      <td className="py-2">{row.behaviour}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* GitHub */}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#ccf5f5] mb-1">
                View Source
              </h2>
              <p className="text-sm text-[#6DB9DE]">
                Open source — contributions and feedback welcome.
              </p>
            </div>
            <a
              href="https://github.com/Aaqeb11/ClawOps"
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

export default ClawOps;
