import React from "react";
import SocialGroup from "./SocialGroup";
import Link from "next/link";
import Image from "next/image";

interface Props {
  handleScrollTop: () => void;
}

const Footer = ({ handleScrollTop }: Props) => {
  return (
    <footer className="footer footer-center p-10">
      <aside>
        <p>Built and designed with Nextjs and Tailwind CSS by me.</p>
        <p>Written in Typescript and deployed using Vercel.</p>
        <Link
          href="https://github.com/mikeli0623/personal-site"
          target="_blank"
        >
          <p className="underline">Site Source Code</p>
        </Link>
      </aside>
      <div className="flex">
        <button
          className="btn btn-circle bg-accent border-accent hover:bg-accent hover:border-accent hover:brightness-125 col-start-1 m-auto tooltip flex"
          data-tip="Go to Top"
          onClick={handleScrollTop}
        >
          <Image src="/up.svg" alt="Up Icon" width={25} height={25} />
        </button>
        <SocialGroup className={""} dark={false} />
      </div>
    </footer>
  );
};

export default Footer;
