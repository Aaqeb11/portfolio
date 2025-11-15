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
        <div className="p-2 border-blue-300 w-[60vw] h-[500px]">
          <Card
            className="w-[60vw] h-[500px] bg-transparent rounded-3xl flex flex-row p-12 backdrop-blur-3xl"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="w-1/2 flex flex-col">
              <CardHeader className="p-0">
                <CardTitle className="text-center text-3xl mb-8 text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-base mt-8 text-white">
                {project.summary}
              </CardDescription>
            </div>
            <CardContent className="w-1/2 flex items-center justify-center p-0 pl-12">
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
