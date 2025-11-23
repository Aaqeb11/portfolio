import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Debezium from "../../../svg/Debezium.svg";
import BackButton from "@/components/ui/BackButton";

const CdcPipeline = () => {
  return (
    <div className="min-h-screen bg-[##0a0a0a]">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-[##0a0a0a] to-[#141414]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <BackButton />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccf5f5]">
              CDC Pipeline with Debezium & Kafka
            </h1>
            <p className="text-xl text-[#ccf5f5]">Data Engineering</p>
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
              Architected and implemented a robust Change Data Capture (CDC)
              solution using Debezium and Apache Kafka for real-time data
              synchronization and event streaming. This system enables seamless
              data flow between multiple databases and services while
              maintaining data consistency and enabling event-driven
              architecture.
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
                  title: "Change Detection",
                  description:
                    "Debezium monitors database transaction logs in real-time",
                },
                {
                  title: "Event Creation",
                  description: "Converts database changes into Kafka events",
                },
                {
                  title: "Stream Processing",
                  description:
                    "Kafka distributes events to subscribed consumers",
                },
                {
                  title: "Schema Registry",
                  description: "Maintains event schema consistency",
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
                "Apache Kafka",
                "Debezium",
                "PostgreSQL",
                "Event Streaming",
                "NestJS",
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
                "Real-time data replication across microservices",
                "Cache invalidation and synchronization",
                "Audit logging and compliance tracking",
                "Analytics pipeline feeding",
                "Search index updates",
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

export default CdcPipeline;
