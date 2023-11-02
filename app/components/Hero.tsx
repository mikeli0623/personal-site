import React from "react";

const Hero = () => {
  return (
    <div className="hero w-full mt-4 md:mt-20 min-h-[50vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/me.jpg" alt="Me" className="max-w-sm max-h-64" />
        <div>
          <h1 className="text-5xl font-bold">Hi, I&apos;m Mike</h1>
          <p className="py-6">Hire me :)</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
