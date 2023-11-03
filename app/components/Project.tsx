import React, { useState } from "react";
import { Project } from "../util/interfaces";
import ProjectVideo from "./ProjectVideo";
import ProjectTech from "./ProjectTech";
import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import useWindowSize from "../hooks/useWindowSize";

interface Props {
  project: Project;
  flip: boolean;
}

const variants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: [0.23, 0.98, 0.75, 1.01],
    },
  },
};

const Project: React.FC<Props> = ({ project, flip }) => {
  const [playing, setPlaying] = useState(false);

  const { width } = useWindowSize();

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: width > 640 ? 0.7 : 0.3 }}
      className={`w-11/12 my-4 flex items-center`}
    >
      <motion.div
        className={`w-full h-full flex items-center justify-start flex-col ${
          flip ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
        variants={variants}
      >
        {project.preview && (
          <ProjectVideo
            src={project.preview}
            placeholder={project.placeholder}
            playing={playing}
            flip={flip}
            width={width}
          />
        )}
        <ProjectCard
          title={project.title}
          desc={project.desc}
          flip={flip}
          github={project.github}
          link={project.link}
          playing={playing}
          onClick={() => setPlaying(!playing)}
        />
        <ProjectTech tech={project.tech} flip={flip} width={width} />
      </motion.div>
    </motion.div>
  );
};

export default Project;
