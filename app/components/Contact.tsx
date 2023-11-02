import Image from "next/image";
import React, { forwardRef } from "react";
import Link from "next/link";

interface Props {}

type Ref = HTMLDivElement;

const Contact = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className="flex flex-col items-center h-[50vh]" ref={ref}>
      <h1 className="font-extrabold text-6xl mb-4">Contact</h1>
      Please, hire me
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
