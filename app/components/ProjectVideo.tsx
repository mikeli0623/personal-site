import React, { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { motion } from "framer-motion";

interface VideoProps {
  placeholder: string;
  src: string;
  playing: boolean;
  flip: boolean;
  width: number;
}

const ProjectVideo = ({
  placeholder,
  src,
  playing,
  flip,
  width,
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isOnScreen = useOnScreen(videoRef);

  useEffect(() => {
    if (!playing) return;
    const vid = videoRef.current;
    let timeout: ReturnType<typeof setTimeout>;
    if (isOnScreen && playing) {
      timeout = setTimeout(() => {
        vid?.play();
      }, 500);
    }
    return () => {
      vid?.pause();
      clearTimeout(timeout);
    };
  }, [isOnScreen, playing]);

  const container = {
    hidden: { opacity: 0, x: flip ? 100 : -100 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="bg-cover lg:w-5/12 h-full bg-no-repeat relative lg:m-0 my-4"
      style={{
        backgroundImage: `url(${placeholder})`,
      }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: width > 640 ? 0.7 : 0.3 }}
    >
      <motion.video
        className={`${
          isOnScreen && playing ? "opacity-100" : "opacity-0"
        } transition-opacity object-fill h-full w-full`}
        ref={videoRef}
        loop
        muted
        preload="none"
        poster={placeholder}
      >
        <source src={src} />
      </motion.video>
    </motion.div>
  );
};

export default ProjectVideo;
