import * as React from "react";
import { Grid } from "./grid";
import { merriweather } from "@/app/font";

const TechStack = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-8 mt-[80px] lg:mt-[10vh]">
      <h1 className={`${merriweather.className} text-5xl md:text-7xl`}>
        My Tech Stack
      </h1>
      <Grid />
    </div>
  );
};

export default TechStack;
