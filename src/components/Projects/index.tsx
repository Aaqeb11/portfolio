"use client";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import projects, { Project } from "@/lib/data/projectDetails";
import { useScroll, motion, useTransform, MotionValue } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/moving-border";

const ProjectCard = ({
  project,
  i,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  // Normalize features across different project shapes
  const highlights = (
    project.details.features ??
    project.details.services ??
    project.details.architecture ??
    []
  )
    .slice(0, 3)
    .map((item) => {
      const [title, desc] = item.split(":");
      return { title: title.trim(), desc: desc?.trim() };
    });

  const categoryBorder: Record<string, string> = {
    "AI/ML System": "hover:border-violet-500/70",
    "Data Engineering": "hover:border-blue-500/70",
    Automation: "hover:border-emerald-500/70",
    DevOps: "hover:border-orange-500/70",
    Library: "hover:border-yellow-500/70",
    "CLI Tool": "hover:border-cyan-500/70",
    EdTech: "hover:border-pink-500/70",
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-[95vw] xl:w-[68vw] min-h-[58vh] lg:min-h-[60vh]"
      >
        <div
          className={`
            group rounded-2xl border border-white/[0.07] bg-[#0c0c0c]
            p-8 lg:p-12 min-h-[420px] flex flex-col justify-between
            transition-all duration-500 cursor-pointer
            hover:bg-[#0f0f0f] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] 2xl:h-[55vh]
            ${categoryBorder[project.category] ?? "hover:border-white/15"}
          `}
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-base text-neutral-600 uppercase tracking-widest font-medium">
              {project.category}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-base text-neutral-700 font-mono tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="w-4 h-4 text-neutral-700 transition-all duration-200 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-3 leading-snug">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-md lg:text-lg text-neutral-500 leading-relaxed mb-8 max-w-2xl">
            {project.summary}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.05] mb-8" />

          {/* Highlights — 3-column grid */}
          {highlights.length > 0 && (
            <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
              {highlights.map(({ title, desc }, idx) => (
                <div key={idx}>
                  <p className="text-md text-white/80 font-medium mb-1">
                    {title}
                  </p>
                  {desc && (
                    <p className="text-base text-neutral-600 leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Bottom row — tech tags + explore */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-base text-neutral-500 bg-white/[0.04] border border-white/[0.06] rounded-md px-2.5 py-1 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              containerClassName="h-12 w-32 md:h-16 md:w-40"
              className="flex items-center gap-1.5 text-base md:text-lg hover:text-neutral-600 text-white transition-colors duration-200 group/link rounded-none"
            >
              <Link
                href={project.page}
                className="w-full h-full flex items-center justify-center"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const start = i / projects.length;
        return (
          <ProjectCard
            key={project.id}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[start, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Projects;
