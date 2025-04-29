import React from "react";
import { FadeIn } from "./FadeIn";
import { Link } from "react-router-dom";

const navlinkes = [
  { name: "Home", link: "/" },
  { name: "Work", link: "/work" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  return (
    <div>
      <FadeIn>
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center bg-[#131315] mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6">
          {/* Make the name clickable by wrapping it in a Link component */}
          <Link to="/" className="text-lg leading-6 -translate-x-[0.01em] hover:text-[#ff5e1a] transition-all duration-300 cursor-pointer">
            Shubham Shah
          </Link>
          <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
            {navlinkes.map((navlink) => (
              <Link
                key={navlink.link}
                to={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white`}
              >
                {navlink.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center items-center sm:hidden">
          <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px] bg-[#131315] px-8 py-4 rounded-full fixed bottom-5 mx-auto z-50">
            {navlinkes.map((navlink) => (
              <Link
                key={navlink.link}
                to={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white border-2 border-[#ff5e1a] rounded-full`}
              >
                {navlink.name}
              </Link>
            ))}
            {/* <a
              href="/resume.pdf"
              download
              className="bg-[#ff5e1a] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
            >
              Resume
            </a> */}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Navbar;
