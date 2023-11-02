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
      className="p-4 flex flex-col content-evenly justify-between h-full w-1/3 rounded-3xl mx-4"
      style={{
        background: " rgba(81, 81, 81, 0.27)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.3px)",
      }}
    >
      <span>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="divider"></div>
      </span>
      <p>{desc}</p>
      <div className={`flex items-center w-full`}>
        <span className="flex flex-col w-full">
          <div className="divider"></div>
          {flip ? (
            <span className="flex justify-end">
              <Link href={github} target="_blank">
                <Image
                  className="hover:brightness-90 ease-in transition"
                  src="/github-mark-white.svg"
                  width={45}
                  height={45}
                  alt="GitHub Icon"
                />
              </Link>
              <Link href={link} target="_blank" className="mx-2">
                <button className="btn btn-circle">
                  <Image
                    src={"/open.svg"}
                    alt="Open Icon"
                    width={30}
                    height={30}
                  />
                </button>
              </Link>
              <button className="btn btn-circle" onClick={onClick}>
                <Image
                  src={playing ? "pause.svg" : "play.svg"}
                  alt={playing ? "Pause Icon" : "Play Icon"}
                  width={40}
                  height={40}
                />
              </button>
            </span>
          ) : (
            <span className="flex justify-start">
              <button className="btn btn-circle" onClick={onClick}>
                <Image
                  src={playing ? "pause.svg" : "play.svg"}
                  alt={playing ? "Pause Icon" : "Play Icon"}
                  width={40}
                  height={40}
                />
              </button>
              <Link href={link} target="_blank" className="mx-2">
                <button className="btn btn-circle">
                  <Image
                    src={"/open.svg"}
                    alt="Open Icon"
                    width={30}
                    height={30}
                  />
                </button>
              </Link>
              <Link href={github} target="_blank">
                <Image
                  className="hover:brightness-90 ease-in transition"
                  src="/github-mark-white.svg"
                  width={45}
                  height={45}
                  alt="GitHub Icon"
                />
              </Link>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
