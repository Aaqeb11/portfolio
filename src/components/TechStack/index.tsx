import * as React from "react";
import { Grid } from "./grid";

const TechStack = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl md:text-7xl">My Tech Stack</h1>
      <Grid />
    </div>
  );
};

export default TechStack;
