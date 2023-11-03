import React, { forwardRef } from "react";
import Project from "./Project";
import Header from "./Header";

interface Props {}

type Ref = HTMLDivElement;

const projects = require("../projects.json");
const ProjectSection = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className="flex flex-col items-center w-full my-14 md:my-36" ref={ref}>
      <Header text="Projects" />
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
