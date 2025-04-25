import React from "react";
import Container from "./Container";
import shubham from "../assets/shubham1.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";
import HomeBentoGridLayout from "./BentoGrid";

function ModularHome() {
  return (
    <Container id="modularhome">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 ">
            <img
              src={shubham}
              alt="shubham shah"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
            />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              shubham shah
              <br />
              software developer{" "}
              <span className="text-[#8a8a93]">
                {" "}
                who builds things fueled by a passion for tech.
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-y-8 bg-[#131315] text-center p-12 rounded-3xl max-md:p-8 relative overflow-hidden hover:bg-[#1a1a1c] transition-all duration-500">
            {/* Animated Paper Plane */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute right-100 top-10 w-16 h-16 opacity-20">
                <svg className="animate-bounce-slow" viewBox="0 0 24 24" fill="#ff5e1a">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
                </svg>
              </div>
              <div className="absolute left-10 bottom-20 w-10 h-10 opacity-20">
                <svg className="animate-pulse" viewBox="0 0 24 24" fill="#ff5e1a">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
                </svg>
              </div>
              <div className="absolute right-20 bottom-10 w-12 h-12 opacity-20">
                <svg className="animate-spin-slow" viewBox="0 0 24 24" fill="#ff5e1a">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mb-2 relative z-10">
              <div className="w-24 h-24 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-[#ff5e1a] opacity-20 rounded-full animate-ping-slow"></div>
                <div className="w-20 h-20 bg-[#1f1f23] rounded-full flex items-center justify-center shadow-lg border border-[#ff5e1a] border-opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#ff5e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl max-md:text-3xl font-bold tracking-tight mb-3">
                Resume? Absolutely!
              </h2>
              <p className="text-gray-300 text-lg max-w-md mb-2">
                My life story, compressed into a PDF.
                Fewer plot twists, more code commits.
              </p>
              <p className="text-[#ff5e1a] italic">Warning: May contain traces of caffeine-fueled coding sessions</p>
            </div>

            <a
              href="/ShubhamShahResume.pdf"
              download
              className="group relative min-h-[70px] bg-[#ff5e1a] hover:bg-[#ff7a42] shadow-lg text-2xl font-bold text-center px-8 py-4 rounded-[99px] max-md:text-xl flex items-center justify-center gap-3 text-white overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">GRAB A COPY!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>

              {/* Button animated background */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-md transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              </div>
            </a>

            <div className="text-sm text-gray-500">
              <span className="inline-block animate-pulse-slow">⭐</span> Rated 5 stars by my mom, dad and sister! <span className="inline-block animate-pulse-slow">⭐</span>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 mb-2">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            🚀 I'm a full-stack software engineer passionate about AI, cloud infrastructure, and building scalable systems. From launching multilingual platforms to winning national hackathons, I turn bold ideas into powerful products.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              join me to explore my unique projects and creative solutions.
            </span>
          </h3>
        </div>
      </FadeIn>

      {/* Add the Bento Grid here */}
      <HomeBentoGridLayout />
    </Container>
  );
}

export default ModularHome;