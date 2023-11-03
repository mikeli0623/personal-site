import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Prop {
  className: string;
  dark: boolean;
}

const SocialGroup = ({ className = "", dark = false }: Prop) => {
  return (
    <nav className={className}>
      <div className="grid grid-flow-col gap-4 justify-center items-center">
        <Link
          href="mailto:mike.li0623@gmail.com"
          className="hover:brightness-125 hover:scale-110 ease-in transition active:scale-95"
        >
          <Image
            src="email.svg"
            width={40}
            height={40}
            alt="Email Icon"
            style={{
              filter: dark
                ? ""
                : "invert(92%) sepia(32%) saturate(694%) hue-rotate(123deg) brightness(74%) contrast(81%)",
            }}
          />
        </Link>
        <Link
          href="https://github.com/mikeli0623"
          target="_blank"
          className="hover:brightness-125 hover:scale-110 ease-in transition active:scale-95"
        >
          <Image
            src={`/github-mark.svg`}
            width={40}
            height={40}
            style={{
              filter: dark
                ? ""
                : "brightness(0) saturate(100%) invert(92%) sepia(32%) saturate(694%) hue-rotate(123deg) brightness(74%) contrast(81%)",
            }}
            alt="GitHub Icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mikeli623/"
          target="_blank"
          className="hover:brightness-125 hover:scale-110 ease-in transition active:scale-95"
        >
          <Image
            src="/linkedin.svg"
            width={40}
            height={40}
            alt="LinkedIn Icon"
            style={{
              filter: dark
                ? ""
                : "invert(92%) sepia(32%) saturate(694%) hue-rotate(123deg) brightness(74%) contrast(81%)",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default SocialGroup;
