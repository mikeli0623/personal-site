"use client";

import React, { useRef } from "react";
import NavButton from "./NavButton";
import { NavProps } from "../util/interfaces";
import Image from "next/image";
import SocialGroup from "./SocialGroup";

const TopNav: React.FC<NavProps> = ({
  projectRef,
  contactRef,
  aboutRef,
  scrollRef,
  activeNav,
}) => {
  const handleScrollTop = () => {
    scrollRef.current?.view.scroll({ top: 0, behavior: "smooth" });
  };

  const scrollToElement = (element: HTMLDivElement) => {
    const offset = ref.current?.clientHeight || 0;
    const y =
      element.getBoundingClientRect().top +
      scrollRef.current?.getScrollTop() -
      offset -
      5;
    scrollRef.current?.view.scroll({ top: y, behavior: "smooth" });
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="navbar w-screen p-4 bg-neutral fixed top-0 z-50 hidden md:block "
      ref={ref}
      style={{
        background: " rgba(81, 81, 81, 0.27)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.3px)",
      }}
    >
      <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr] w-full justify-center content-center">
        <button
          className="btn btn-circle col-start-1 m-auto tooltip tooltip-bottom flex"
          data-tip="Go to Top"
          onClick={handleScrollTop}
        >
          <Image src="/up.svg" alt="Up Icon" width={25} height={25} />
        </button>
        <div className="flex justify-center col-start-2 w-full">
          <NavButton
            text="About Me"
            onClick={() => {
              if (aboutRef.current) scrollToElement(aboutRef.current);
            }}
            active={activeNav === "about"}
          />
          <NavButton
            text="Projects"
            onClick={() => {
              if (projectRef.current) scrollToElement(projectRef.current);
            }}
            active={activeNav === "project"}
          />
          <NavButton
            text="Contact"
            onClick={() => {
              if (contactRef.current) scrollToElement(contactRef.current);
            }}
            active={activeNav === "contact"}
          />
        </div>
        <div className="col-start-3 flex justify-center">
          <button className="btn btn-ghost max-w-[110px] m-auto">
            <a
              onClick={() => window.open("resume.pdf")}
              target="_blank"
              className="cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <p>Résumé</p>
                <Image
                  src="/open.svg"
                  alt="Open Icon"
                  width={20}
                  height={20}
                  className="ml-1"
                />
              </div>
            </a>
          </button>
          <SocialGroup className="m-auto" dark={true} />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
