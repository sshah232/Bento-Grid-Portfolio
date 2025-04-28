import React, { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import asuLogo from "../assets/asu-logo.png";
import uofm from "../assets/mumbai.png";
import ml1 from "../assets/Research1.png";
import ml2 from "../assets/Research2.png";
import rec from "../assets/Rec.jpg";

function HomeBentoGridLayout() {
  // Array of programming and tech quotes
  const [quotes, setQuotes] = useState([
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman"
    },
    {
      text: "It's not a bug; it's an undocumented feature.",
      author: "Anonymous"
    },
    {
      text: "In a room full of top software engineers, if two agree on the same thing, that's a majority.",
      author: "Bill Curtis"
    },
    {
      text: "The most disastrous thing that you can ever learn is your first programming language.",
      author: "Alan Kay"
    }
  ]);

  // State to track current quote index
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Function to change to the next quote
  const changeQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  return (
    <div className="mb-8 my-2">
      <FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2 auto-rows-auto">
          {/* Master's Progress Card */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-between sm:col-span-1 row-span-2 overflow-hidden">
            {/* SVG Accent */}
            <svg className="absolute -top-8 -left-8 w-48 h-48 opacity-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <path d="M0,50 Q50,0 100,50 T200,50" strokeWidth="1" />
            </svg>
            {/* ASU Logo */}
            <img src={asuLogo} alt="ASU Logo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto mb-2 lg:mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-center text-white mb-2">M.S. in Software Engineering</h3>
            {/* Progress Ring */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-2">
              {/* Background circle */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-6 lg:border-8 border-gray-800"></div>

              {/* Progress circle */}
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#FF5E1A"
                  strokeWidth="8"
                  strokeDasharray={`${95 * 2.9}, 300`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              {/* Percentage text */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">95%</span>
              </div>
            </div>
            <p className="text-center text-xs lg:text-sm text-gray-400">GPA: 3.7 / 4.0</p>
            <p className="text-center text-xs text-gray-500 mt-1">Aug 2023 – May 2025</p>
          </div>

          {/* Linguify Project Card */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden sm:col-span-2 row-span-2 group hover:bg-[#1a1a1c] transition-all duration-300">
            {/* Background Accent - Language Bubbles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-5 left-10 w-16 h-16 rounded-full bg-blue-500 blur-xl"></div>
              <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-pink-500 blur-xl"></div>
              <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-purple-500 blur-xl"></div>
              <div className="absolute bottom-20 right-1/3 w-12 h-12 rounded-full bg-green-500 blur-xl"></div>
              <div className="absolute top-1/2 left-2/3 w-16 h-16 rounded-full bg-yellow-500 blur-xl"></div>
            </div>

            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 lg:mb-6">
                <div>
                  <div className="flex flex-wrap items-center mb-2 sm:mb-0">
                    <span className="text-[#ff5e1a] text-base lg:text-lg font-bold mr-2">Linguify</span>
                    <span className="mt-1 sm:mt-0 px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 text-xs rounded-full">Founder & Lead Developer</span>
                  </div>
                  <p className="text-gray-400 text-xs lg:text-sm mt-1">June 2024</p>
                </div>

                {/* Language Icons - Using placeholder Unicode characters for languages */}
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  {[
                    { abbr: "Py", fullName: "Python" },
                    { abbr: "Re", fullName: "React" },
                    { abbr: "GC", fullName: "Google Cloud" }
                  ].map((tech, index) => (
                    <div key={tech.abbr} className="relative group/tech">
                      <span
                        className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white cursor-pointer"
                        title={tech.fullName}
                      >
                        {tech.abbr}
                      </span>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        {tech.fullName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element - Translation Visualization */}
              <div className="mb-4 lg:mb-6 bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500 mr-1 lg:mr-2"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500 mr-1 lg:mr-2"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500 mr-1 lg:mr-2"></div>
                    <span className="text-xs text-gray-400">linguify.ai</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 py-2">
                  <div className="w-full sm:w-1/2 bg-[#131315] p-2 lg:p-3 rounded-lg border border-gray-800 mb-2 sm:mb-0">
                    <div className="text-xs text-gray-400 mb-1">English</div>
                    <div className="text-xs lg:text-sm text-white">Hello, how are you today?</div>
                  </div>

                  <svg className="hidden sm:block w-4 h-4 lg:w-6 lg:h-6 text-[#ff5e1a] self-center animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>

                  <div className="w-full sm:w-1/2 bg-[#131315] p-2 lg:p-3 rounded-lg border border-gray-800">
                    <div className="text-xs text-gray-400 mb-1">Spanish</div>
                    <div className="text-xs lg:text-sm text-white">Hola, ¿cómo estás hoy?</div>
                  </div>
                </div>
              </div>

              {/* Metrics/Highlights */}
              <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-4 lg:mb-6">
                <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                  <div className="text-xl lg:text-2xl font-bold text-white">90%</div>
                  <div className="text-xs text-gray-400">Language detection accuracy</div>
                </div>
                <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                  <div className="text-xl lg:text-2xl font-bold text-white">29</div>
                  <div className="text-xs text-gray-400">Supported languages</div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-xs lg:text-sm mb-4">
                Cloud-based multi-lingual translation platform using AI-driven text and video conversions. Integrated open-source LLMs from Hugging Face for speech translation with distributed systems architecture via Kubernetes.
              </p>

              {/* Results */}
              <div className="flex flex-wrap space-x-2 lg:space-x-4 relative z-10">
                <div className="flex items-center">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                  </svg>
                  <span className="text-green-400 text-xs lg:text-sm">50% comprehension</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                  </svg>
                  <span className="text-green-400 text-xs lg:text-sm">17% engagement</span>
                </div>
              </div>
            </div>

            {/* Hover Effect - Reveal View Project Button */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#131315] to-transparent p-4 lg:p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
              <button onClick={() => window.open("https://github.com/sshah232/Linguify", "_blank")} className="w-full py-2 lg:py-3 bg-[#ff5e1a] rounded-full text-white text-sm lg:text-base font-medium hover:bg-opacity-90 transition-all">
                View Project Details
              </button>
            </div>
          </div>

          {/* Bachelor's Progress Card */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-between sm:col-span-1 row-span-2 overflow-hidden">
            {/* SVG Accent */}
            <svg className="absolute -top-8 -left-8 w-48 h-48 opacity-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <path d="M0,50 Q50,0 100,50 T200,50" strokeWidth="1" />
            </svg>
            {/* Mumbai Logo */}
            <img src={uofm} alt="University of Mumbai Logo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto mb-2 lg:mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-center text-white mb-2">B.E. in Computer Engineering</h3>
            {/* Progress Ring */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-2">
              {/* Background circle */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-6 lg:border-8 border-gray-800"></div>

              {/* Progress circle */}
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#FF5E1A"
                  strokeWidth="8"
                  strokeDasharray={`${100 * 2.9}, 300`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              {/* Percentage text */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">100%</span>
              </div>
            </div>
            <p className="text-center text-xs lg:text-sm text-gray-400">CGPA: 9.43 / 10.0</p>
            <p className="text-center text-xs text-gray-500 mt-1">Aug 2019 – May 2023</p>
          </div>

          {/* Sakhi Project Card */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden sm:col-span-2 row-span-2 group hover:bg-[#1a1a1c] transition-all duration-300">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-10 left-20 w-24 h-24 rounded-full bg-purple-500 blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-blue-500 blur-xl"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-indigo-500 blur-xl"></div>
            </div>

            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 lg:mb-6">
                <div>
                  <div className="flex flex-wrap items-center mb-2 sm:mb-0">
                    <span className="text-[#ff5e1a] text-base lg:text-lg font-bold mr-2">Sakhi Chatbot</span>
                    <span className="mt-1 sm:mt-0 px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 text-xs rounded-full">DevHacks Winner 🏆</span>
                  </div>
                  <p className="text-gray-400 text-xs lg:text-sm mt-1">March 2025</p>
                </div>

                {/* Technology Icons */}
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="React">Re</span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="Node.js">Nj</span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="Gemini">Gm</span>
                </div>
              </div>

              {/* Visual Element - Chatbot Visualization */}
              <div className="mb-4 lg:mb-6 bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500 mr-1 lg:mr-2"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500 mr-1 lg:mr-2"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500 mr-1 lg:mr-2"></div>
                    <span className="text-xs text-gray-400">sakhi-assistant.ai</span>
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-3 py-2">
                  <div className="flex">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#ff5e1a] ml-2 mr-1.5 flex-shrink-0 flex items-center justify-center text-white text-xs">SS</div>
                    <div className="bg-[#131315] p-2 lg:p-3 rounded-lg border border-gray-800 max-w-[80%]">
                      <div className="text-xs lg:text-sm text-white">I am feeling very low today!</div>
                    </div>
                  </div>

                  <div className="flex flex-row-reverse">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#ff5e1a] ml-2 flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="bg-[#24242b] p-2 lg:p-3 rounded-lg border border-gray-700 max-w-[80%]">
                      <div className="text-xs lg:text-sm text-white">Hello! 🤗 I'm here for you, always. Whatever you're going through, I'll listen without judgment and offer my support. You're not alone in this.❤️</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-full py-1 px-2 lg:px-3 space-x-1">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#ff5e1a] animate-pulse"></div>
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#ff5e1a] animate-pulse delay-100"></div>
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#ff5e1a] animate-pulse delay-200"></div>
                      <span className="text-xs text-gray-400 ml-1">Voice response ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics/Highlights */}
              <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-4 lg:mb-6">
                <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                  <div className="text-xl lg:text-2xl font-bold text-white">92%</div>
                  <div className="text-xs text-gray-400">Response accuracy</div>
                </div>
                <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                  <div className="text-xl lg:text-2xl font-bold text-white">~500ms</div>
                  <div className="text-xs text-gray-400">Response time</div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-xs lg:text-sm mb-4">
                End-to-end GenAI pipeline using Gemini API and RAG for employee engagement. Includes voice interactions via Azure TTS/STT APIs and secure user authentication with AES-256 encryption & OAuth 2.0.
              </p>

              {/* Results */}
              <div className="flex flex-wrap space-x-2 lg:space-x-4">
                <div className="flex items-center">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                  </svg>
                  <span className="text-green-400 text-xs lg:text-sm">40% reduced friction</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                  </svg>
                  <span className="text-green-400 text-xs lg:text-sm">100% data security</span>
                </div>
              </div>
            </div>

            {/* Hover Effect - Reveal View Project Button */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1a1a1c] via-[#1a1a1c] to-transparent p-4 lg:p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
              <button onClick={() => window.open("https://github.com/sshah232/SakhiClient", "_blank")} className="w-full py-2 lg:py-3 bg-[#ff5e1a] rounded-full text-white text-sm lg:text-base font-medium hover:bg-opacity-90 transition-all">
                View Project Details
              </button>
            </div>
          </div>

          {/* Research & ML Card */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden group hover:bg-[#1a1a1c] transition-all duration-300 col-span-1 row-span-2 sm:col-span-2">
            {/* Background Animation */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-yellow-500 blur-xl"></div>
              <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full bg-green-500 blur-xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 lg:mb-4">
                <div>
                  <div className="flex flex-wrap items-center mb-2 sm:mb-0">
                    <span className="text-[#ff5e1a] text-base lg:text-lg font-bold mr-2">YOLOv8 Research</span>
                    <span className="mt-1 sm:mt-0 px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 text-xs rounded-full">Prof. Shenghan Guo, ASU</span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="PyTorch">Pt</span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="OpenCV">CV</span>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex flex-col sm:flex-row sm:space-x-3 mb-3 lg:mb-4">
                <div className="flex-1 bg-[#1f1f23] p-2 lg:p-3 rounded-xl border border-gray-800 relative overflow-hidden mb-2 sm:mb-0">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-500 to-transparent"></div>
                    {/* <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-lg border-2 border-green-400"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-8 rounded-lg border-2 border-blue-400"></div> */}
                  </div>
                  <div className="relative w-full h-full">
                    <div className="text-xs text-gray-400 mb-1">Original Image</div>
                    <div className="w-full h-auto min-h-[180px] sm:min-h-[200px] bg-gray-800 rounded-md">
                      <img src={ml1} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center">
                  <svg className="w-4 h-4 lg:w-6 lg:h-6 text-[#ff5e1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <div className="flex-1 bg-[#1f1f23] p-2 lg:p-3 rounded-xl border border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-500 to-transparent"></div>
                    {/* <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-lg border-2 border-green-400">
                      <div className="absolute -top-6 -left-1 text-xs text-green-400">Defect 99.2%</div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-8 rounded-lg border-2 border-blue-400">
                      <div className="absolute -top-6 -left-1 text-xs text-blue-400">Scratch 97.8%</div>
                    </div> */}
                  </div>
                  <div className="relative">
                    <div className="text-xs text-gray-400 mb-1">YOLOv8 Detection</div>
                    {/* <div className="w-full h-12 sm:h-16 bg-gray-800 rounded-md"> */}
                    <div className="w-full h-auto min-h-[180px] sm:min-h-[200px] bg-gray-800 rounded-md">
                      <img src={ml2} className="w-full h-full object-contain" />
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>

              {/* Accuracy Meter */}
              <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800 mb-3 lg:mb-4">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Accuracy</span>
                  <span>79%</span>
                </div>
                <div className="w-full h-1.5 lg:h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff5e1a] rounded-full" style={{ width: '79%' }}></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs lg:text-sm">
                Enhanced manufacturing defect detection using YOLOv8 transfer learning through dataset labeling, model fine-tuning, and evaluation to improve surface roughness detection across diverse manufacturing environments.
              </p>
            </div>
          </div>

          {/* Philo Physics Project Card - NEW CARD */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden group hover:bg-[#1a1a1c] transition-all duration-300 col-span-1 sm:col-span-2">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-blue-500 blur-xl"></div>
              <div className="absolute bottom-1/3 left-1/3 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-purple-500 blur-xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 lg:mb-6">
                <div>
                  <div className="flex flex-wrap items-center mb-2">
                    <span className="text-[#ff5e1a] text-base lg:text-lg font-bold mr-2">Philo Physics</span>
                    <span className="mt-1 sm:mt-0 px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-400 text-xs rounded-full">Gov't Copyright (SW-18144/2024)</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Dec 2021 - May 2022</p>
                </div>

                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="Flutter">Fl</span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="Dart">Da</span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="Firebase">Fb</span>
                </div>
              </div>

              {/* App Rating Display */}
              <div className="flex flex-col sm:flex-row items-center justify-center bg-[#1f1f23] py-3 px-4 sm:py-4 sm:px-6 rounded-xl border border-gray-800 mb-3 sm:mb-4 lg:mb-6">
                <div className="flex flex-col items-center mb-3 sm:mb-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">4.8</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg key={index} className={`w-3 h-3 sm:w-4 sm:h-4 ${index < 5 ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">App Store Rating</div>
                </div>

                <div className="mx-4 h-px w-16 sm:h-12 sm:w-px bg-gray-700 my-2 sm:my-0 sm:mx-6 lg:mx-8"></div>

                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">5000+</div>
                  <div className="text-xs text-gray-400">Engineering Students</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                Co-developed Android application using Flutter, Dart and Firebase that helped over 5000 engineering students learn physics concepts through an interactive interface.
              </p>

              {/* App Store Button */}
              <button onClick={() => window.open("https://play.google.com/store/apps/details?id=com.philophysics.physicsappli&hl=en_US&pli=1", "_blank")} className="w-full py-2 border border-[#ff5e1a] text-[#ff5e1a] rounded-full text-xs sm:text-sm font-medium hover:bg-[#ff5e1a] hover:bg-opacity-10 transition-all">
                View on App Store
              </button>
            </div>
          </div>

          {/* Fun Interactive Quote Card */}
          <div
            className="relative bg-[#1f1f23] rounded-3xl p-4 md:p-6 lg:p-8 col-span-1 sm:col-span-2 row-span-1 overflow-hidden group cursor-pointer"
            onClick={changeQuote}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#131315] via-[#1f1f23] to-[#131315] opacity-80"></div>
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-purple-500 blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-blue-500 blur-xl opacity-10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#ff5e1a] blur-xl opacity-20 animate-pulse"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              {/* Random Fun Fact Button */}
              <div className="mb-4 sm:mb-6 relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center mx-auto">
                  <div className="absolute inset-0 bg-[#ff5e1a] rounded-full opacity-20 animate-ping"></div>
                  <div className="absolute inset-0 bg-[#ff5e1a] rounded-full opacity-30"></div>
                  <span className="text-3xl sm:text-4xl transform group-hover:rotate-12 transition-transform duration-300">💡</span>
                </div>
              </div>

              {/* Random Quote - Now using the current quote from state */}
              <div className="transition-opacity duration-300">
                <p className="text-base sm:text-lg md:text-xl font-bold text-white italic mb-2 sm:mb-4">
                  "{quotes[currentQuoteIndex].text}"
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  – {quotes[currentQuoteIndex].author}
                </p>
              </div>

              {/* Hover/Click Instruction */}
              <div className="absolute bottom-3 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-gray-500">Click for another quote</p>
              </div>
            </div>
          </div>

          {/* REC Engine Project Card */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden sm:col-span-2 row-span-2 group hover:bg-[#1a1a1c] transition-all duration-300">
            {/* Background Accent - Virtual House Environment */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-10 left-20 w-24 h-24 rounded-full bg-cyan-500 blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-emerald-500 blur-xl"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-amber-500 blur-xl"></div>
            </div>

            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 lg:mb-6">
                <div>
                  <div className="flex flex-wrap items-center mb-2 sm:mb-0">
                    <span className="text-[#ff5e1a] text-base lg:text-lg font-bold mr-2">REC Engine</span>
                    <span className="mt-1 sm:mt-0 px-2 py-1 bg-indigo-500 bg-opacity-20 text-indigo-400 text-xs rounded-full">
                      <span className="inline-block mr-1">🏆</span>
                      Award-Winning Project
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs lg:text-sm mt-1">March 2022 - May 2022</p>
                </div>

                {/* Technology Icons with Hover Tooltips */}
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  {[
                    { abbr: "Py", fullName: "Python" },
                    { abbr: "ML", fullName: "Machine Learning" },
                    { abbr: "Sp", fullName: "Spline 3D" }
                  ].map((tech, index) => (
                    <div key={tech.abbr} className="relative group/tech">
                      <span
                        className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white cursor-pointer"
                        title={tech.fullName}
                      >
                        {tech.abbr}
                      </span>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        {tech.fullName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element - Terminal-Style Virtual House Visualization */}
              <div className="mb-4 lg:mb-6 bg-[#1f1f23] rounded-xl border border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between p-2 lg:p-3 bg-[#131315] border-b border-gray-800">
                  <div className="flex items-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500 mr-1 lg:mr-2"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500 mr-1 lg:mr-2"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500 mr-1 lg:mr-2"></div>
                    <span className="text-xs text-gray-400">rec-engine.virtual.house</span>
                  </div>
                </div>

                {/* House Visualization */}
                <div className="p-3 lg:p-4">
                  <img
                    src={rec}
                    alt="REC Engine Virtual House"
                    className="w-full h-auto rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: "180px" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.height = "180px";
                      e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='180' viewBox='0 0 800 180'%3E%3Crect fill='%231f1f23' width='800' height='180'/%3E%3Ctext fill='%238a8a93' font-family='Arial' font-size='18' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E3D Virtual House Visualization%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              {/* Recommendation Rooms Grid */}
              <div className="grid grid-cols-3 gap-2 py-2 mb-4 lg:mb-6 bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                {/* Movies Room */}
                <div className="bg-[#131315] p-2 lg:p-3 rounded-lg border border-gray-800 flex flex-col items-center">
                  <div className="text-xs text-gray-400 mb-1">Movies</div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-amber-500 bg-opacity-30 rounded-md flex items-center justify-center mb-1">
                    <span className="text-lg">🎬</span>
                  </div>
                  <div className="text-xs text-center text-white">Theater Room</div>
                </div>

                {/* Music Room */}
                <div className="bg-[#131315] p-2 lg:p-3 rounded-lg border border-gray-800 flex flex-col items-center">
                  <div className="text-xs text-gray-400 mb-1">Music</div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-500 bg-opacity-30 rounded-md flex items-center justify-center mb-1">
                    <span className="text-lg">🎵</span>
                  </div>
                  <div className="text-xs text-center text-white">Music Room</div>
                </div>

                {/* Restaurants Room */}
                <div className="bg-[#131315] p-2 lg:p-3 rounded-lg border border-gray-800 flex flex-col items-center">
                  <div className="text-xs text-gray-400 mb-1">Restaurants</div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 bg-opacity-30 rounded-md flex items-center justify-center mb-1">
                    <span className="text-lg">🍽️</span>
                  </div>
                  <div className="text-xs text-center text-white">Restaurants</div>
                </div>
              </div>

              {/* Metrics/Highlights */}
              <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-4 lg:mb-6">
                <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                  <div className="text-xl lg:text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-gray-400">User engagement</div>
                </div>
                <div className="bg-[#1f1f23] p-3 lg:p-4 rounded-xl border border-gray-800">
                  <div className="text-xl lg:text-2xl font-bold text-white">3+</div>
                  <div className="text-xs text-gray-400">Competition wins</div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-xs lg:text-sm mb-4">
                Multi-option recommendation system gamifying exploration of various recommendation algorithms based on virtual house environment. Acclaimed by faculty and won multiple competitions for its innovative user-centric approach and cross-platform functionality.
              </p>

              {/* Results */}
              <div className="flex flex-wrap space-x-2 lg:space-x-4 relative z-10">
                <div className="flex items-center">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                  </svg>
                  <span className="text-green-400 text-xs lg:text-sm">85% higher discovery</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
                  </svg>
                  <span className="text-green-400 text-xs lg:text-sm">90% cross-platform</span>
                </div>
              </div>
            </div>

            {/* Mobile-only visible button */}
            <div className="mt-6 block md:hidden">
              <a
                href="https://rec-engine-deploy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 lg:py-3 bg-[#ff5e1a] rounded-full text-white text-sm lg:text-base font-medium hover:bg-opacity-90 transition-colors"
              >
                View Project Details
              </a>
            </div>

            {/* Hover Effect - Reveal View Project Button */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1a1a1c] via-[#1a1a1c] to-transparent p-4 lg:p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
              <button onClick={() => window.open("https://rec-engine-deploy.vercel.app/", "_blank")} className="w-full py-2 lg:py-3 bg-[#ff5e1a] rounded-full text-white text-sm lg:text-base font-medium hover:bg-opacity-90 transition-all">
                View Project Details
              </button>
            </div>
          </div>

          {/* Tech Stack Card - ENHANCED */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden col-span-1 sm:col-span-2">
            <svg className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 opacity-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" strokeWidth="1" />
            </svg>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {/* Languages */}
              <div className="col-span-2 sm:col-span-4">
                <div className="text-xs text-gray-500 mb-1">Languages</div>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++', 'C#', 'Rust', 'Golang'].map(t => (
                    <span key={t} className="bg-gray-800 text-white text-xs px-2 sm:px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="col-span-2 sm:col-span-4">
                <div className="text-xs text-gray-500 mb-1">Frameworks</div>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {['Django', 'Flask', 'Node.js', 'React.js', 'Angular', 'REST APIs', 'MERN Stack'].map(t => (
                    <span key={t} className="bg-gray-800 text-white text-xs px-2 sm:px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="col-span-2 sm:col-span-4">
                <div className="text-xs text-gray-500 mb-1">Tools</div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {['Docker', 'Kubernetes', 'Git', 'Jenkins', 'PostgreSQL', 'MongoDB', 'Kafka', 'GCP', 'Azure'].map(t => (
                    <span key={t} className="bg-gray-800 text-white text-xs px-2 sm:px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Extracurriculars Card - NEW CARD */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden col-span-1 sm:col-span-2 row-span-2">
            <svg className="absolute -bottom-8 -right-8 w-48 h-48 opacity-5 text-white rotate-12" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <path d="M30,10 Q50,30 70,10 T90,30" strokeWidth="1" />
            </svg>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-5 relative z-10">Extracurriculars & Leadership</h3>

            {/* Leadership Roles */}
            <div className="mb-4 lg:mb-6 relative z-10">
              <h4 className="text-sm sm:text-base text-[#ff5e1a] font-medium mb-2">Student Council & Research Cell</h4>

              <div className="space-y-3">
                {/* Cultural Secretary */}
                <div className="bg-[#1f1f23] p-3 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-lg">🎭</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center mb-1">
                        <span className="text-sm text-white font-medium mr-2">Cultural Secretary</span>
                        <span className="text-xs text-gray-400">Student Council | 2022-2023</span>
                      </div>
                      <p className="text-xs text-gray-300">Planned and conducted various annual cultural events for over 3000+ students, coordinating multiple teams and managing event logistics.</p>
                    </div>
                  </div>
                </div>

                {/* Secretary - Research Cell */}
                <div className="bg-[#1f1f23] p-3 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-lg">🔬</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center mb-1">
                        <span className="text-sm text-white font-medium mr-2">Secretary</span>
                        <span className="text-xs text-gray-400">Research Cell | 2022-2023</span>
                      </div>
                      <p className="text-xs text-gray-300">Led research initiatives across departments, facilitating workshops and connecting students with faculty mentors for collaborative projects.</p>
                    </div>
                  </div>
                </div>

                {/* Sports Coordinator */}
                <div className="bg-[#1f1f23] p-3 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center mb-1">
                        <span className="text-sm text-white font-medium mr-2">Sports Coordinator</span>
                        <span className="text-xs text-gray-400">Student Council | 2021-2022</span>
                      </div>
                      <p className="text-xs text-gray-300">Organized inter-college sports tournaments and managed team selections, increasing sports participation by 40% among engineering students.</p>
                    </div>
                  </div>
                </div>

                {/* Technical Secretary */}
                <div className="bg-[#1f1f23] p-3 rounded-xl border border-gray-800">
                  <div className="flex items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-lg">💻</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center mb-1">
                        <span className="text-sm text-white font-medium mr-2">Technical Secretary</span>
                        <span className="text-xs text-gray-400">Research Cell | 2021-2022</span>
                      </div>
                      <p className="text-xs text-gray-300">Coordinated technical workshops and hackathons, helping students develop practical skills and fostering innovation across engineering disciplines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports & Activities */}
            <div className="relative z-10">
              <h4 className="text-sm sm:text-base text-[#ff5e1a] font-medium mb-2">Sports & Activities</h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-[#1f1f23] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-800">
                  <span className="text-2xl mb-1">🏏</span>
                  <span className="text-xs sm:text-sm text-white">Cricket</span>
                </div>

                <div className="bg-[#1f1f23] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-800">
                  <span className="text-2xl mb-1">⚽</span>
                  <span className="text-xs sm:text-sm text-white">Soccer</span>
                </div>

                <div className="bg-[#1f1f23] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-800">
                  <span className="text-2xl mb-1">🏓</span>
                  <span className="text-xs sm:text-sm text-white">Table Tennis</span>
                </div>

                <div className="bg-[#1f1f23] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-800">
                  <span className="text-2xl mb-1">🏸</span>
                  <span className="text-xs sm:text-sm text-white">Badminton</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card - ENHANCED */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-between overflow-hidden col-span-1 sm:col-span-2">
            <svg className="absolute bottom-0 left-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 opacity-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" strokeWidth="1" />
            </svg>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Certifications & Awards</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {/* Google Cloud Hero */}
              <div className="bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-white">Google Cloud Hero</div>
                  <div className="text-xs text-gray-400">Gemini & Vertex AI</div>
                  <div className="text-xs text-gray-500">October 2024</div>
                </div>
              </div>

              {/* JP Morgan */}
              <div className="bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-white">JPMorgan Chase</div>
                  <div className="text-xs text-gray-400">Software Engineering Simulation</div>
                  <div className="text-xs text-gray-500">May 2024</div>
                </div>
              </div>

              {/* DevHacks Winner */}
              <div className="bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-lg sm:text-xl text-yellow-400">🏆</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-white">DevHacks Winner</div>
                  <div className="text-xs text-gray-400">1st Prize</div>
                  <div className="text-xs text-gray-500">March 2025</div>
                </div>
              </div>

              {/* Smart India Hackathon */}
              <div className="bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-lg sm:text-xl text-red-400">🏅</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-white">Smart India Hackathon</div>
                  <div className="text-xs text-gray-400">Winner</div>
                  <div className="text-xs text-gray-500">2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Infrastructure Card - ENHANCED */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden group hover:bg-[#1a1a1c] transition-all duration-300 col-span-1 sm:col-span-2">
            <svg className="absolute top-4 right-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 opacity-5 text-white rotate-30" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <path d="M10,90 L90,10" strokeWidth="1" />
            </svg>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Cloud Infrastructure</h3>

              <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4 mb-3 sm:mb-6">
                {/* GCP */}
                <div className="flex-1 bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 relative overflow-hidden">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500 bg-opacity-20 text-red-400 flex items-center justify-center mr-2">
                      GC
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white">Google Cloud Platform</div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-400">Kubernetes Deployments</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-400">API Gateway Implementation</span>
                  </div>
                </div>

                {/* Azure */}
                <div className="flex-1 bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 relative overflow-hidden">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 flex items-center justify-center mr-2">
                      AZ
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white">Microsoft Azure</div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-400">Cognitive Services Integration</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-400">Serverless Functions</span>
                  </div>
                </div>
              </div>

              {/* Uptime Metric */}
              <div className="bg-[#1f1f23] p-3 sm:p-4 rounded-xl border border-gray-800 mb-2 sm:mb-4">
                <div className="flex justify-between mb-1 sm:mb-2">
                  <span className="text-xs sm:text-sm text-gray-400">Service Uptime</span>
                  <span className="text-xs sm:text-sm font-medium text-white">99.9%</span>
                </div>
                <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '99.9%' }}></div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300">
                Designed and deployed scalable microservices architecture ensuring consistent high availability across multiple cloud platforms with automated CI/CD pipelines.
              </p>
            </div>
          </div>

          {/* Skills Card - NEW CARD */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden col-span-1 sm:col-span-2">
            <svg className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 opacity-5 text-white rotate-12" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <path d="M10,10 L90,90" strokeWidth="1" />
            </svg>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-6">Interpersonal Skills</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                { name: "Communicator", icon: "💬" },
                { name: "Detail-oriented", icon: "🔍" },
                { name: "Flexible", icon: "🌊" },
                { name: "Problem-solver", icon: "🧩" },
                { name: "Well-organized", icon: "📋" },
                { name: "Innovative", icon: "💡" }
              ].map((skill, index) => (
                <div key={index} className="bg-[#1f1f23] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center border border-gray-800">
                  <span className="text-xl sm:text-2xl mb-1 sm:mb-2">{skill.icon}</span>
                  <span className="text-xs sm:text-sm text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer/Call to Action */}
          <div className="relative bg-[#131315] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-between col-span-1 sm:col-span-4 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center justify-between">
              <div className="mb-4 sm:mb-0 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-white">Ready to collaborate?</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Let's turn innovative ideas into reality</p>
              </div>

              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://www.linkedin.com/in/shubhamshah15" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a href="https://www.github.com/sshah232" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a href="mailto:shubhamshah1551@gmail.com" className="bg-[#ff5e1a] px-4 sm:px-6 py-2 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-opacity-90 transition-all">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}



// function BentoGrid() {
//   return (
//     <div className="w-full max-w-7xl mx-auto mb-10">
//       <FadeIn>
//         <div className="grid grid-cols-4 gap-2 auto-rows-auto">
//           {/* Master's Progress Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col justify-between col-span-1 row-span-2 overflow-hidden">
//             {/* SVG Accent */}
//             <svg className="absolute -top-8 -left-8 w-48 h-48 opacity-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <path d="M0,50 Q50,0 100,50 T200,50" strokeWidth="1" />
//             </svg>
//             {/* ASU Logo */}
//             <img src={asuLogo} alt="ASU Logo" className="w-36 h-36 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-center text-white mb-2">M.S. in Software Engineering</h3>
//             {/* Progress Ring */}
//             <div className="relative w-32 h-32 mx-auto mb-2">
//               {/* Background circle */}
//               <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-gray-800"></div>

//               {/* Progress circle */}
//               <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="46"
//                   fill="none"
//                   stroke="#FF5E1A"
//                   strokeWidth="8"
//                   strokeDasharray={`${95 * 2.9}, 300`}
//                   strokeLinecap="round"
//                   transform="rotate(-90 50 50)"
//                 />
//               </svg>

//               {/* Percentage text */}
//               <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//                 <span className="text-3xl font-bold text-white">95%</span>
//               </div>
//             </div>
//             <p className="text-center text-sm text-gray-400">GPA: 3.7 / 4.0</p>
//             <p className="text-center text-xs text-gray-500 mt-1">Aug 2023 – May 2025</p>
//           </div>

//           {/* SDA Assistant Card */}
//           {/* Linguify Project Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 overflow-hidden col-span-2 row-span-2 group hover:bg-[#1a1a1c] transition-all duration-300">
//             {/* Background Accent - Language Bubbles */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
//               <div className="absolute top-5 left-10 w-16 h-16 rounded-full bg-blue-500 blur-xl"></div>
//               <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-pink-500 blur-xl"></div>
//               <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-purple-500 blur-xl"></div>
//               <div className="absolute bottom-20 right-1/3 w-12 h-12 rounded-full bg-green-500 blur-xl"></div>
//               <div className="absolute top-1/2 left-2/3 w-16 h-16 rounded-full bg-yellow-500 blur-xl"></div>
//             </div>

//             <div className="relative z-10">
//               {/* Project Header */}
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <div className="flex items-center">
//                     <span className="text-[#ff5e1a] text-lg font-bold">Linguify</span>
//                     <span className="ml-3 px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 text-xs rounded-full">Founder & Lead Developer</span>
//                   </div>
//                   <p className="text-gray-400 text-sm mt-1">June 2024</p>
//                 </div>

//                 {/* Language Icons - Using placeholder Unicode characters for languages */}
//                 <div className="flex space-x-2">
//                   <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="Python">Py</span>
//                   <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="React">Re</span>
//                   <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs text-white" title="GCP">GC</span>
//                 </div>
//               </div>

//               {/* Visual Element - Translation Visualization */}
//               <div className="mb-6 bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
//                     <span className="text-xs text-gray-400">linguify.ai</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between space-x-4 py-2">
//                   <div className="w-1/2 bg-[#131315] p-3 rounded-lg border border-gray-800">
//                     <div className="text-xs text-gray-400 mb-1">English</div>
//                     <div className="text-sm text-white">Hello, how are you today?</div>
//                   </div>

//                   <svg className="w-6 h-6 text-[#ff5e1a] self-center animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>

//                   <div className="w-1/2 bg-[#131315] p-3 rounded-lg border border-gray-800">
//                     <div className="text-xs text-gray-400 mb-1">Spanish</div>
//                     <div className="text-sm text-white">Hola, ¿cómo estás hoy?</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Metrics/Highlights */}
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
//                   <div className="text-2xl font-bold text-white">90%</div>
//                   <div className="text-xs text-gray-400">Language detection accuracy</div>
//                 </div>
//                 <div className="bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
//                   <div className="text-2xl font-bold text-white">29</div>
//                   <div className="text-xs text-gray-400">Supported languages</div>
//                 </div>
//               </div>

//               {/* Project Description */}
//               <p className="text-gray-300 text-sm mb-4">
//                 Cloud-based multi-lingual translation platform using AI-driven text and video conversions. Integrated open-source LLMs from Hugging Face for speech translation with distributed systems architecture via Kubernetes.
//               </p>

//               {/* Results */}
//               <div className="flex space-x-4">
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
//                   </svg>
//                   <span className="text-green-400 text-sm">50% comprehension</span>
//                 </div>
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" />
//                   </svg>
//                   <span className="text-green-400 text-sm">17% engagement</span>
//                 </div>
//               </div>
//             </div>

//             {/* Hover Effect - Reveal View Project Button */}
//             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#131315] to-transparent p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//               <button className="w-full py-3 bg-[#ff5e1a] rounded-full text-white font-medium hover:bg-opacity-90 transition-all">
//                 View Project Details
//               </button>
//             </div>
//           </div>

//           {/* FlowAI Internship Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
//             <svg className="absolute top-0 right-0 w-32 h-32 opacity-5 text-white rotate-12" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <path d="M0,100 L100,0" strokeWidth="1" />
//             </svg>
//             <h3 className="text-xl font-bold text-white">Backend Intern</h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Developed REST APIs and optimized microservices for real-time data pipelines on FlowAI platform.
//             </p>
//             <p className="text-xs text-gray-500">Flask · Docker · PostgreSQL</p>
//           </div>

//           {/* Founder @ Linguify Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
//             <svg className="absolute bottom-4 left-2 w-32 h-32 opacity-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <path d="M50,0 C20,100 80,100 50,0" strokeWidth="1" />
//             </svg>
//             <h3 className="text-xl font-bold text-white">Founder</h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Launched a multilingual AI translation platform supporting 29 languages with 90% accuracy.
//             </p>
//             <p className="text-xs text-gray-500">Python · MongoDB · Kubernetes</p>
//           </div>

//           {/* Center Feature: Key Project */}
//           <div className="relative bg-[#1f1f23] rounded-3xl p-8 col-span-2 row-span-1 flex flex-col justify-center items-start overflow-hidden">
//             <svg className="absolute inset-0 w-full h-full opacity-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 200 200">
//               <path d="M0,100 Q100,0 200,100 T400,100" strokeWidth="2" />
//             </svg>
//             <h2 className="text-2xl font-bold text-white mb-2">Featured Project</h2>
//             <h3 className="text-xl text-[#ff5e1a] mb-4">Sakhi Chatbot</h3>
//             <p className="text-sm text-gray-300 leading-relaxed">
//               An LLM-powered assistant to streamline employee engagement and rewards management.
//             </p>
//             <a
//               href="mailto:shubhamshah1551@gmail.com"
//               className="min-h-[72px] bg-[#ff5e1a] transition-[background-color] duration-300 ease-[ease-out] text-[32px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white"
//             >
//               hey@shubham.com
//               {/* <span className=" animate-pulse">👋</span> */}
//             </a>
//           </div>

//           {/* Tech Stack Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
//             <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <circle cx="50" cy="50" r="40" strokeWidth="1" />
//             </svg>
//             <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {['Python', 'TypeScript', 'React', 'Node.js', 'Django', 'MongoDB', 'Azure', 'Docker', 'GCP', 'Rust', 'OpenAI', 'Tailwind'].map(t => (
//                 <span key={t} className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">{t}</span>
//               ))}
//             </div>
//           </div>

//           {/* Research Achievement Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col justify-between col-span-2 overflow-hidden">
//             <svg className="absolute top-0 left-1/3 w-40 h-40 opacity-5 text-white rotate-90" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <path d="M20,0 L80,100" strokeWidth="1" />
//             </svg>
//             <h3 className="text-xl font-bold text-white mb-2">AI Research</h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Enhanced manufacturing defect detection using YOLOv8 transfer learning, achieving 79% accuracy.
//             </p>
//             <p className="text-xs text-gray-500">PyTorch · Computer Vision</p>
//           </div>

//           {/* Cloud Infrastructure Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
//             <svg className="absolute top-4 right-4 w-32 h-32 opacity-5 text-white rotate-30" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <path d="M10,90 L90,10" strokeWidth="1" />
//             </svg>
//             <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure</h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Designed and deployed scalable microservices on Azure and GCP, ensuring 99.9% uptime.
//             </p>
//             <p className="text-xs text-gray-500">Azure · GCP · Kubernetes</p>
//           </div>

//           {/* Certifications Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-4 flex flex-col justify-center items-center overflow-hidden">
//             <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <circle cx="50" cy="50" r="40" strokeWidth="1" />
//             </svg>
//             <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
//             <ul className="text-l text-gray-400 text-center">
//               <li>Google Cloud Hero</li>
//               <li>JPMorgan Chase Software Engineering Job Simulation</li>
//             </ul>
//           </div>

//           {/* Hackathons & Awards Card */}
//           <div className="relative bg-[#131315] rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden">
//             <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 100 100">
//               <circle cx="50" cy="50" r="40" strokeWidth="1" />
//             </svg>
//             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
//               <span className="text-2xl">🏆</span>
//             </div>
//             <h3 className="text-lg font-bold text-white text-center">DevHacks & SIH Winner</h3>
//             <p className="text-xs text-gray-400 mt-2 text-center">National hackathons, AI & EdTech domains</p>
//           </div>
//         </div>
//       </FadeIn>
//     </div>
//   );
// }

export default HomeBentoGridLayout;
