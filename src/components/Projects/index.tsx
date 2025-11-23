"use client";
import * as React from "react";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projects, { Project } from "@/lib/data/projectDetails";
import { useScroll, motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const gradients = [
  "radial-gradient(ellipse at 50% 40%, #6b6b5a 0%, #4a4a58 25%, #35354a 45%, #252535 70%, #1a1a28ad 95%)", // Original gray-purple
  "radial-gradient(ellipse at 50% 40%, #5a6b6b 0%, #3d4d5a 25%, #2d3d4a 45%, #1d2d3a 70%, #1a202894 95%)", // Blue-gray
  "radial-gradient(ellipse at 50% 40%, #6b5a6b 0%, #584a58 25%, #4a354a 45%, #3a2535 70%, #281a289f 95%)", // Purple-magenta
  "radial-gradient(ellipse at 50% 40%, #6b5a5a 0%, #584a48 25%, #4a3538 45%, #3a2528 70%, #281a1a9f 95%)", // Red-brown
  "radial-gradient(ellipse at 50% 40%, #5a6b5a 0%, #4a584a 25%, #354a35 45%, #253a25 70%, #1a281a77 95%)", // Green
  "radial-gradient(ellipse at 50% 40%, #6b6b5a 0%, #58584a 25%, #4a4a35 45%, #3a3a25 70%, #28281a77 95%)", // Olive-yellow
  "radial-gradient(ellipse at 50% 40%, #5a5a6b 0%, #484858 25%, #383848 45%, #282838 70%, #1a1a28ad 95%)", // Deep blue
  "radial-gradient(ellipse at 50% 40%, #6b5a5f 0%, #584a50 25%, #4a3540 45%, #3a2530 70%, #281a20b0 95%)", // Rose-wine
];

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
  targetScale: number | MotionValue<number>;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const cardGradient = gradients[i % gradients.length];
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
        className="relative"
      >
        <Card
          className="w-[95vw] xl:w-[70vw] h-[700px] lg:h-[550px] rounded-3xl flex flex-col justify-between lg:flex-row p-12 relative overflow-hidden bg-[#000000]"
          style={{
            backgroundImage: cardGradient,
          }}
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div>
              <CardHeader className="p-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium mb-4 w-fit">
                  {project.category}
                </div>
                <CardTitle className="text-4xl mb-4 text-white font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-base lg:text-lg text-white/70 leading-relaxed">
                {project.summary}
              </CardDescription>
            </div>

            {/*features*/}
            <div className="mt-4 space-y-3">
              {project.details.features?.slice(0, 3).map((feature, idx) => {
                const [title, description] = feature.split(":");
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-base lg:text-lg"
                  >
                    <CircleCheckBig className="w-5 h-5 mt-1 text-white/60" />
                    <div className="flex-1">
                      <span className="text-white font-medium">{title}</span>
                      {description && (
                        <span className="text-white/60">
                          {" "}
                          - {description.trim()}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <CardContent className="w-full lg:w-1/2 flex items-center justify-center p-0 pt-4 lg:pt-0 lg:pl-12">
            <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
              <motion.div
                style={{ scale: imageScale }}
                className="relative w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </motion.div>
            </div>
          </CardContent>
        </Card>
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
        const end = 1;
        return (
          <ProjectCard
            key={i}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[start, end]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Projects;
