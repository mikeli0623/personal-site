import { RefObject } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  preview: string;
  link: string;
  github: string;
  demo: boolean;
  placeholder: string;
}

export interface NavProps {
  projectRef: RefObject<HTMLHeadingElement>;
  contactRef: RefObject<HTMLHeadingElement>;
  aboutRef: RefObject<HTMLHeadingElement>;
  scrollRef: RefObject<Scrollbars>;
  activeNav: "project" | "about" | "contact" | null;
}
