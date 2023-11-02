import React, { forwardRef } from "react";
import Project from "./Project";

interface Props {}

type Ref = HTMLDivElement;

const projects = require("../projects.json");
const ProjectSection = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className="flex flex-col items-center w-full my-14 md:my-48" ref={ref}>
      <h1 className="font-extrabold text-6xl my-4">Projects</h1>
      {Object.keys(projects).map((project, i) => {
        return (
          <Project
            key={project}
            project={projects[project]}
            flip={i % 2 !== 0}
          />
        );
      })}
    </div>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
