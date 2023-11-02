import React from "react";
import SocialGroup from "./SocialGroup";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-800 text-[#faecd2]">
      <aside>
        <p>Built and designed with Nextjs and Tailwind CSS</p>
        <Link href="" target="_blank">
          <p className="underline">Site Source Code</p>
        </Link>
      </aside>
      <SocialGroup className={""} dark={false} />
    </footer>
  );
};

export default Footer;
