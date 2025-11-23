import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Rag from "../../../svg/RAG.svg";
import BackButton from "@/components/ui/BackButton";

const EmailClassification = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              Advanced RAG Email Classification
            </h1>
            <p className="text-xl  text-[#ccf5f5]">AI/ML System</p>
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
              Developed a sophisticated Retrieval-Augmented Generation (RAG)
              solution for intelligent email classification and processing. This
              system combines cutting-edge AI techniques with vector embeddings
              to achieve high-accuracy email categorization, using the FLARE
              (Forward-Looking Active Retrieval) approach for enhanced
              contextual understanding.
            </p>
          </div>

          {/* Architecture*/}
          <div className="p-6 bg-[#141414] border border-border/50 rounded-lg h-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#ccf5f5]">
              Architecture
            </h2>
            <div className="flex justify-center">
              <Image src={Rag} alt="RAG Logo" width={800} height={120} />
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
                  title: "Vector Database Integration",
                  description:
                    "Dual-store architecture using Vector DB and PG Vector",
                },
                {
                  title: "FLARE Approach",
                  description:
                    "Forward-Looking Active Retrieval for proactive context gathering",
                },
                {
                  title: "Semantic Search",
                  description:
                    "Query vector database for similar historical emails",
                },
                {
                  title: "Confidence Scoring",
                  description:
                    "Assign confidence metrics to each classification",
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
                "Python",
                "Vector DB",
                "PostgreSQL",
                "LLM",
                "FLARE",
                "Celery",
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
        </div>
      </main>
    </div>
  );
};

export default EmailClassification;
