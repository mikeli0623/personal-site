import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";

interface TechProps {
  tech: string[];
  flip: boolean;
  width: number;
}

const ProjectTech = ({ tech, flip, width }: TechProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden:
      width > 640
        ? { opacity: 0, x: flip ? -45 : 45, rotate: flip ? 45 : -45 }
        : { opacity: 0, y: 50 },
    show: { opacity: 1, x: 0, y: 0, rotate: 0 },
  };

  return (
    <motion.div
      className="flex flex-row justify-center lg:flex-col"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: width > 640 ? 0.7 : 0.3 }}
    >
      {tech.map((t) => (
        <motion.div key={t} variants={item}>
          <Badge tech={t} className="" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectTech;
