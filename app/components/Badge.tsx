import React from "react";
import Image from "next/image";

interface IconMap {
  [key: string]: string;
}

const iconMap: IconMap = {
  React: "60, 163, 191",
  C: "0, 42, 80",
  CSS: "22, 52, 170",
  Express: "81, 81, 81",
  JavaScript: "146, 131, 30",
  TypeScript: "27, 85, 149",
  MongoDB: "35, 110, 36",
  "Next.js": "200, 200, 200",
  HTML: "168, 50, 16",
  Node: "56, 119, 42",
  AWS: "200, 200, 200",
  Python: "26, 69, 106",
  Java: "37, 79, 106",
};

interface Props {
  tech: string;
  className: string;
}

const Badge = ({ tech, className }: Props) => {
  return (
    <div
      className={
        `flex items-center lg:h-12 max-w-min h-10 lg:m-2 m-1` + className
      }
      style={{
        // default is 81, 81, 81
        background: `rgba(${iconMap[tech]}, 0.27)`,
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.3px)",
      }}
    >
      <div className={`lg:w-10 lg:h-10 h-7 w-7 relative mx-2`}>
        <Image
          src={`/${tech.toLowerCase()}.webp`}
          alt={tech}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="mr-2 hidden lg:block">{tech}</p>
    </div>
  );
};

export default Badge;
