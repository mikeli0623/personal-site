"use client";

import React, { useRef } from "react";
import NavButton from "./NavButton";
import { NavProps } from "../util/interfaces";
import Image from "next/image";
import SocialGroup from "./SocialGroup";
import Link from "next/link";

const TopNav = ({ projectRef, contactRef, aboutRef, scrollRef, activeNav }) => {
  const scrollToElement = (element) => {
    const offset = ref.current?.clientHeight || 0;
    const y =
      element.getBoundingClientRect().top +
      scrollRef.current?.getScrollTop() -
      offset -
      5;
    scrollRef.current?.view.scroll({ top: y, behavior: "smooth" });
  };

  const ref = useRef(null);

  return (
    <div
      className="navbar w-screen p-4 fixed top-0 z-50 hidden md:block "
      ref={ref}
      style={{
        background: " rgba(102,178,178, 0.27)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.3px)",
      }}
    >
      <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr] w-full justify-center content-center">
        <h2 className="text-2xl m-auto">Mike Li</h2>
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
          <Link href={"resume.pdf"} target="_blank" className="cursor-pointer">
            <button className="btn btn-ghost hover:bg-secondary max-w-[110px] m-auto">
              <div className="flex items-center justify-center">
                <p>Résumé</p>
                <Image
                  src="/open.svg"
                  alt="Open Icon"
                  width={20}
                  height={20}
                  className="ml-1"
                  style={{
                    filter:
                      "invert(94%) sepia(0%) saturate(1%) hue-rotate(138deg) brightness(90%) contrast(94%)",
                  }}
                />
              </div>
            </button>
          </Link>
          <SocialGroup className="m-auto" dark={false} />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
