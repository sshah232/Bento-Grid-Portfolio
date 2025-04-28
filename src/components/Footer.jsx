import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pb-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="bg-[#131315] rounded-3xl p-5 relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-[#ff5e1a] blur-xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-blue-500 blur-xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <div className="text-[#8a8a93] text-sm">
              © {currentYear} Shubham Shah. All rights reserved.
            </div>
            
            {/* Creator attribution */}
            <div className="flex items-center">
              <span className="text-sm text-[#8a8a93]">Crafted with</span>
              <span className="text-[#ff5e1a] mx-1">❤️</span>
              <span className="text-sm text-[#8a8a93]">by</span>
              <a 
                href="https://github.com/sshah232" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5e1a] transition-colors duration-300 ml-1 text-sm"
              >
                Shubham Shah
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;