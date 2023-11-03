import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  flip: boolean;
  github: string;
  link: string;
  onClick: () => void;
  playing: boolean;
}

const ProjectCard = ({
  title,
  desc,
  flip,
  github,
  link,
  playing,
  onClick,
}: Props) => {
  return (
    <div
      className="p-4 flex flex-col content-evenly justify-between h-full lg:w-1/3 mx-4 md:bg-[#373737]/[0.27] bg-[#474747]/[0.5] rounded-3xl"
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.3px)",
      }}
    >
      <span>
        <h2 className="text-3xl font-bold text-accent">{title}</h2>
        <div className="divider after:bg-secondary before:bg-secondary"></div>
      </span>
      <p>{desc}</p>
      <div className={`flex items-center w-full`}>
        <span className="flex flex-col w-full">
          <div className="divider after:bg-secondary before:bg-secondary"></div>
          <span
            className={`flex justify-start ${
              flip ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <button
              className="btn btn-circle bg-accent border-accent hover:bg-accent hover:border-accent hover:brightness-125 hover:scale-110"
              onClick={onClick}
            >
              <Image
                src={playing ? "pause.svg" : "play.svg"}
                alt={playing ? "Pause Icon" : "Play Icon"}
                width={40}
                height={40}
              />
            </button>
            <Link href={link} target="_blank" className="mx-2">
              <button className="btn btn-circle bg-accent border-accent hover:bg-accent hover:border-accent hover:brightness-125 hover:scale-110">
                <Image
                  src={"/open.svg"}
                  alt="Open Icon"
                  width={30}
                  height={30}
                />
              </button>
            </Link>
            <Link
              href={github}
              target="_blank"
              className="hover:brightness-125 hover:scale-110 ease-in transition active:scale-95"
            >
              <Image
                src={`/github-mark.svg`}
                width={48}
                height={48}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(92%) sepia(32%) saturate(694%) hue-rotate(123deg) brightness(74%) contrast(81%)",
                }}
                alt="GitHub Icon"
              />
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
