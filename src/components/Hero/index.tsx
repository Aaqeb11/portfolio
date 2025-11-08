"use client";
import * as React from "react";
import TextType from "../ui/TextType";
import Particles from "../ui/Particles";
import ProfileCard from "../ui/ProfileCard";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="absolute inset-0 z-0">
        <Particles
          className=""
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={30}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className=" flex flex-col md:flex-row pt-8 md:pt-0 gap-12 items-center">
        <div className="text-center space-y-8 z-10 relative">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Aaqeb Ahmed
              </span>
            </h1>

            {/* Typewriter Effect */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300">
              <span className="text-gray-400">I&apos;m a </span>
              <TextType
                text={[
                  "Full Stack Developer",
                  "Tech Enthusiast",
                  "Problem Solver",
                  "Creative Thinker",
                  "Open Source Contributor",
                ]}
                typingSpeed={80}
                pauseDuration={2000}
                deletingSpeed={50}
                showCursor={true}
                cursorCharacter="|"
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold"
                loop={true}
                variableSpeed={false}
                onSentenceComplete={() => {}}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#a9a9bd] tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
            Crafting exceptional digital experiences with modern technologies
            and innovative solutions. Where others stumble, I engineer solutions
          </p>

          {/* Action btn */}
          <button className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline" type="button" aria-disabled="false">
            <span className="btn__ripple"></span>
            <span className="block overflow-hidden">
              <span className="btn__text" data-attr="My Resume">My Resume</span>
              </span>
          </button>
        </div>
        <ProfileCard
          name="Software Developer"
          title=""
          handle="Aaqeb11"
          status="Online"
          contactText="Contact Me"
          avatarUrl="./me.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => "mailto:aaqebahmed@gmail.com"}
          innerGradient="linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
          miniAvatarUrl="./me.png"
          grainUrl=""
          behindGlowColor={""}
          behindGlowSize={""}
        />
      </div>
    </div>
  );
};

export default Hero;
