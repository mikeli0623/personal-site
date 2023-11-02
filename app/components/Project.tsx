import React, { useState } from "react";
import { Project } from "../util/interfaces";
import ProjectVideo from "./ProjectVideo";
import ProjectTech from "./ProjectTech";
import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { title } from "process";

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
  const [playing, setPlaying] = useState(true);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      className={`w-11/12 my-4 flex items-center`}
    >
      <motion.div
        className={`w-full h-full flex items-center ${
          flip ? "justify-end" : "justify-start"
        }`}
        variants={variants}
      >
        {flip ? (
          <ProjectTech tech={project.tech} flip={flip} />
        ) : (
          project.preview && (
            <ProjectVideo
              src={project.preview}
              placeholder={project.placeholder}
              playing={playing}
              setPlaying={setPlaying}
              link={project.link}
            />
          )
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
        {flip ? (
          project.preview && (
            <ProjectVideo
              src={project.preview}
              placeholder={project.placeholder}
              playing={playing}
              setPlaying={setPlaying}
              link={project.link}
            />
          )
        ) : (
          <ProjectTech tech={project.tech} flip={flip} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Project;
