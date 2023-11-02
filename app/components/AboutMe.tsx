import React, { forwardRef } from "react";

interface Prop {}

type Ref = HTMLDivElement;

const AboutMe = forwardRef<Ref, Prop>((prop, ref) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full my-2"
      ref={ref}
    >
      <h1 className="font-extrabold text-6xl my-4">About Me</h1>
      <div className="h-[30vh] w-4/6">
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
    </div>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
