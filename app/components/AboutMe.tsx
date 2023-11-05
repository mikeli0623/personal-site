import React, { forwardRef } from "react";
import Badge from "./Badge";
import Header from "./Header";

interface Prop {}

type Ref = HTMLDivElement;

const langs = ["Python", "JavaScript", "TypeScript", "Java", "C"];

const web = ["Node", "Express", "Next.js", "React", "HTML", "CSS", "MongoDB"];

const cloud = ["AWS"];

const AboutMe = forwardRef<Ref, Prop>((prop, ref) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full my-2"
      ref={ref}
    >
      <Header text="About Me" />
      <div className="lg:w-1/2 w-11/12 text-center lg:text-lg">
        Hey there! My name is Mike and I am a software engineer who recently
        graduated from McMaster University. I aspire to have a career that
        allows me to create software which can have a positive impact on
        people&apos;s lives. Recently, I have been focusing on web development
        with React and enjoy making small projects on the side. Check out some
        of them below! When I&apos;m not programming, I&apos;m usually playing
        my guitar, playing video games, or watching shows.
      </div>
      <h1 className="text-4xl text-primary my-8">Skills</h1>
      <div className="lg:w-2/3 w-11/12 grid grid-cols-3 gap-2">
        <h3 className="text-base md:text-xl text-accent  m-auto">
          Programming Languages
        </h3>
        <h3 className="text-base md:text-xl text-accent m-auto">
          Web Development
        </h3>
        <h3 className="text-base md:text-xl text-accent mb-auto ml-auto mr-auto">
          Cloud Development
        </h3>
        <div className="grid grid-cols-2 gap-2 grid-rows-4">
          {langs.map((t) => {
            return (
              <Badge
                key={t}
                tech={t}
                className={` lg:ml-auto ml-auto lg:mr-auto mr-auto`}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {web.map((t) => {
            return (
              <Badge
                key={t}
                tech={t}
                className={` lg:ml-auto ml-auto lg:mr-auto mr-auto`}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-2">
          {cloud.map((t) => {
            return (
              <Badge
                key={t}
                tech={t}
                className={` lg:ml-auto ml-auto lg:mr-auto mr-auto`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
