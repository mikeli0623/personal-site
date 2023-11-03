import React from "react";
import { motion } from "framer-motion";

const first = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.8,
    },
  },
};

const second = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 2.1,
    },
  },
};

const third = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 3.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero w-full mt-4 md:mt-20 min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/me.webp"
          alt="Me"
          className="mask mask-squircle max-w-sm max-h-64"
        />
        <div>
          <motion.span
            className="text-5xl font-bold text-primary"
            initial="hidden"
            animate="show"
            variants={first}
          >
            Hi
          </motion.span>
          <span className="overflow-hidden">
            <motion.span
              className="text-5xl font-bold text-primary"
              initial="hidden"
              animate="show"
              variants={second}
            >
              , I&apos;m Mike
            </motion.span>
          </span>
          <motion.p
            className="py-6"
            initial="hidden"
            animate="show"
            variants={third}
          >
            Software Engineer, overall cool guy 😎
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
