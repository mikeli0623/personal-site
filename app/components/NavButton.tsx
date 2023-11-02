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
        className={`btn btn-ghost ${
          active ? "btn-active" : ""
        } normal-case text-xl`}
        onClick={onClick}
      >
        {text}
      </button>
      {active && (
        <motion.div
          className="bg-gray-700 absolute left-0 right-0 -bottom-1"
          style={{ height: "2px" }}
          layoutId="underline"
        />
      )}
    </div>
  );
};

export default NavButton;
