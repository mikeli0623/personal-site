import React, { forwardRef } from "react";
import Badge from "./Badge";
import Header from "./Header";

interface Prop {}

type Ref = HTMLDivElement;

const langs = ["Python", "JavaScript", "TypeScript", "Java", "C"];

const web = ["Node", "Express", "Next.js", "React", "HTML", "CSS", "MongoDB"];

const cloud = ["AWS"];

const list1 = ["Item 1", "Item 2"];
const list2 = ["Item 3", "Item 4"];

const AboutMe = forwardRef<Ref, Prop>((prop, ref) => {
  const getRow = (i: number) => {
    if (i === 0 || i === 1) return 1;

    return Math.floor(i / 2) + 1;
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full my-2"
      ref={ref}
    >
      <Header text="About Me" />
      <div className="w-4/6">
        I love coding! Recently focusing on web development with React. Check
        out some of my skills below.
      </div>
      <div className="lg:w-2/3 w-11/12 grid grid-cols-3 gap-2 mt-8">
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
