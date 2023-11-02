import React, { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

interface VideoProps {
  placeholder: string;
  src: string;
  playing: boolean;
  setPlaying: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  link: string;
}

const ProjectVideo = ({ placeholder, src, playing, link }: VideoProps) => {
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

  return (
    <div
      className="bg-cover w-5/12 h-full bg-no-repeat relative"
      style={{
        backgroundImage: `url(${placeholder})`,
      }}
    >
      <video
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
      </video>
    </div>
  );
};

export default ProjectVideo;
