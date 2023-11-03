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
        hi every1 im new!!!!!!! *holds up spork* my name is katy but u can call
        me t3h PeNgU1N oF d00m!!!!!!!! lol…as u can see im very random!!!! thats
        why i came here, 2 meet random ppl like me ^_^… im 13 years old (im
        mature 4 my age tho!!) i like 2 watch invader zim w/ my girlfreind (im
        bi if u dont like it deal w/it) its our favorite tv show!!! bcuz its
        SOOOO random!!!! shes random 2 of course but i want 2 meet more random
        ppl =) like they say the more the merrier!!!! lol…neways i hope 2 make
        alot of freinds here so give me lots of commentses!!!!
        DOOOOOMMMM!!!!!!!!!!!!!!!! {"<"}--- me bein random again ^_^
        hehe…toodles!!!!! love and waffles, t3h PeNgU1N oF d00m
      </div>
      <div className="lg:w-2/3 w-11/12 grid grid-cols-6 gap-2">
        <h3 className="text-base md:text-xl text-accent col-span-2 m-auto">
          Programming Languages
        </h3>
        <h3 className="text-base md:text-xl text-accent col-span-2 m-auto">
          Web Development
        </h3>
        <h3 className="text-base md:text-xl text-accent col-span-2 mb-auto ml-auto mr-auto">
          Cloud Services
        </h3>
        <div className="col-span-2 grid grid-cols-2 gap-2 grid-rows-4">
          {langs.map((t) => {
            return <Badge key={t} tech={t} className={` ml-auto mr-auto`} />;
          })}
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {web.map((t) => {
            return <Badge key={t} tech={t} className={` ml-auto mr-auto`} />;
          })}
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {cloud.map((t) => {
            return <Badge key={t} tech={t} className={` ml-auto mr-auto`} />;
          })}
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
