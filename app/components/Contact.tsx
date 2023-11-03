import React, { forwardRef } from "react";
import Link from "next/link";
import Header from "./Header";

interface Props {}

type Ref = HTMLDivElement;

const Contact = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className="flex flex-col items-center h-[45vh] w-full" ref={ref}>
      <Header text="Contact" />
      <p className="lg:w-1/4 w-11/12 text-center">
        I&apos;m always open to any new opportunities, or just a chance to chat.
        Feel free to shoot me an email and I&apos;ll try to get back as soon as
        I can.
      </p>
      <Link href="mailto:mike.li0623@gmail.com">
        <button className="btn btn-primary mt-2">Message Me</button>
      </Link>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
