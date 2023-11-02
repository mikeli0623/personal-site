"use client";

import { useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import ProjectSection from "./components/ProjectSection";
import { NavProps } from "./util/interfaces";
import { Scrollbars } from "react-custom-scrollbars-2";
import Hero from "./components/Hero";
import { Raleway } from "next/font/google";
import Footer from "./components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeNav, setActiveNav] = useState<NavProps["activeNav"]>(null);

  const scrollRef = useRef<Scrollbars>(null);

  const determineActiveNav = () => {
    const windowY = scrollRef.current?.getScrollTop() || 0;
    const project = projectRef.current;
    const projectTop = project?.offsetTop || 0;
    const projectHeight = project?.offsetHeight || 0;
    const actualProjectTop = projectTop - (window.innerHeight * 2) / 5;
    const projectStart = Math.max(windowY - actualProjectTop, 0);
    const ratioProjectSeen = projectStart / projectHeight;
    const about = aboutRef.current;
    const aboutTop = about?.offsetTop || 0;
    const aboutHeight = about?.offsetHeight || 0;
    const actualAboutTop = aboutTop - window.innerHeight;
    const aboutStart = Math.max(windowY - actualAboutTop, 0);
    const ratioAboutSeen = aboutStart / aboutHeight;
    if (ratioProjectSeen > 0.94) setActiveNav("contact");
    else if (ratioProjectSeen > 0) setActiveNav("project");
    else if (ratioAboutSeen > 0.8) setActiveNav("about");
    else setActiveNav(null);
  };

  return (
    <main className={raleway.className}>
      <TopNav
        projectRef={projectRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        scrollRef={scrollRef}
        activeNav={activeNav}
      />
      <Scrollbars
        className="min-w-screen min-h-screen flex flex-col items-center justify-between p-4 md:p-24 "
        universal
        onScroll={determineActiveNav}
        ref={scrollRef}
      >
        <Hero />
        <AboutMe ref={aboutRef} />
        <ProjectSection ref={projectRef} />
        <Contact ref={contactRef} />
        <Footer />
      </Scrollbars>
    </main>
  );
}
