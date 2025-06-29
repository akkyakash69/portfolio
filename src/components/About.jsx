import React from "react";
import SplitText from "../Animations/SplitText/SplitText";
import BlurText from "../Animations/SplitText/BlurText";
import AnimatedContent from "../Animations/SplitText/AnimatedContent";
import GlareHover from "../Animations/SplitText/HoverGlare";
import FadeContent from "../Animations/FadeContent";
import DotGrid from "../Animations/SplitText/DotGrid";
import portfolioImg from "../assets/portfolio.jpg";

const About = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className=" relative flex flex-col lg:flex-row items-center justify-between mx-auto my-12 w-[95%] min-h-[40em] rounded-xl bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden">

      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid />
      </div>

      {/* Left Content */}
      <div className=" relative z-10 h-max w-full lg:w-1/2 px-6 sm:px-10 py-14 text-white">
        <BlurText
          text="Hi I'm"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-6xl font-semibold text-cyan-200"
        />

        <SplitText
          text="Akash"
          className="text-cyan-300 text-[3.5rem] sm:text-7xl font-bold drop-shadow-lg"
          delay={100}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <SplitText
          text="Frontend Developer"
          className="text-lg sm:text-xl lg:text-3xl text-cyan-100 tracking-wide mt-3"
          delay={100}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <AnimatedContent
          distance={150}
          direction="-horizontal"
          reverse={false}
          duration={1.2}
          ease=""
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0}
          delay={0.3}
        >
          <p className="mt-5 max-w-[90%] lg:max-w-xl text-gray-300 text-[15px] sm:text-lg lg:text-[1.1rem] leading-relaxed tracking-wide">
            A <span className="text-white font-medium">tech enthusiast</span> passionate about clean code and futuristic UI. I build responsive websites using
            <span className="text-cyan-200"> React</span>, 
            <span className="text-cyan-200"> Tailwind CSS</span>, and 
            <span className="text-cyan-200"> Next.js</span>. I’m obsessed with <span className="text-white font-medium">UI/UX design</span>, accessibility, and pixel perfection.
          </p>
        </AnimatedContent>

        {/* Social Icons */}
        <FadeContent blur={true} duration={3000} easing="ease-out" initialOpacity={0}>
          <div className="mt-10 flex justify-center lg:justify-start">
            <div className="flex w-max text-2xl items-center border-cyan-500 border-2 rounded-full px-4 gap-4 text-cyan-200 bg-white/5 backdrop-blur-md hover:scale-105 transition-all">
              <a href="https://github.com/Akash041005"><i className="ri-github-fill"></i></a>
              <a href="https://www.linkedin.com/in/akash-choppadandi-86598a348/"><i className="ri-linkedin-box-fill"></i></a>
              <a href="mailto:akash.choppadandi04@gmail.com"><i className="ri-mail-fill"></i></a>
              <a href="https://x.com/Akash041005"><i className="ri-twitter-x-fill"></i></a>
            </div>
          </div>
        </FadeContent>
      </div>

      {/* Right Side Image (Only visible on large screens) */}
      <div className="relative z-10 w-full lg:w-1/2 h-full hidden lg:flex justify-center items-center">
        <GlareHover
          className="rounded-full h-[80%]"
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <img
            className="h-[400px] rounded-full"
            src={portfolioImg}
            alt="Akash"
          />
        </GlareHover>
      </div>
    </div>
  );
};

export default About;
