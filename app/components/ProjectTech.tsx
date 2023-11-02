import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TechProps {
  tech: string[];
  flip: boolean;
}

interface IconMap {
  [key: string]: string;
}

const iconMap: IconMap = {
  React: "48, 139, 164",
  C: "0, 42, 80",
  CSS: "22, 52, 170",
  Express: "81, 81, 81",
  Javascript: "146, 131, 30",
  MongoDB: "35, 110, 36",
  "Next.js": "81, 81, 81",
  HTML: "168, 50, 16",
  Node: "56, 119, 42",
};

const ProjectTech = ({ tech, flip }: TechProps) => {
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
    hidden: { opacity: 0, x: flip ? -45 : 45, rotate: flip ? 45 : -45 },
    show: { opacity: 1, x: 0, rotate: 0 },
  };

  return (
    <div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        {tech.map((t) => (
          <motion.li
            key={t}
            variants={item}
            className={`flex items-center m-2 opacity-0 h-12 pr-2`}
            style={{
              // default is 81, 81, 81
              background: `rgba(${iconMap[t]}, 0.27)`,
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(6.3px)",
            }}
          >
            <div className="w-10 h-10 relative mx-2">
              <Image
                src={`/${t}.png`}
                alt={t}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p>{t}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProjectTech;
