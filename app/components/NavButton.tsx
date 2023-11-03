import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  text: string;
  onClick: () => void;
  active: boolean;
}

const NavButton = ({ text, onClick, active }: Props) => {
  return (
    <div className="relative mx-4">
      <button
        className={`btn btn-ghost hover:bg-neutral hover:bg-opacity-40 ${
          active ? "bg-neutral bg-opacity-40" : ""
        } normal-case text-xl`}
        onClick={onClick}
      >
        {text}
      </button>
      {active && (
        <motion.div
          className="bg-accent absolute left-0 right-0 -bottom-1 h-[2px]"
          layoutId="underline"
        />
      )}
    </div>
  );
};

export default NavButton;
