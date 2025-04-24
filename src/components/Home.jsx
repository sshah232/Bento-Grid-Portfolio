import React from "react";
import Container from "./Container";
import shubham from "../assets/shubham1.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
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
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#131315] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <ContactIcon className="w-[112px] h-[112px] flex-[0_0_auto]" />
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                Have a project in mind?
              </h2>
            </div>
            <a
              href="mailto:shubhamshah1551@gmail.com"
              className="min-h-[96px] bg-[#ff5e1a] transition-[background-color] duration-300 ease-[ease-out] text-[40px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white"
            >
              hey@shubham.com
              {/* <span className=" animate-pulse">👋</span> */}
            </a>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
          🚀 I’m a full-stack software engineer passionate about AI, cloud infrastructure, and building scalable systems. From launching multilingual platforms to winning national hackathons, I turn bold ideas into powerful products.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              join me to explore my unique projects and creative solutions.
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
