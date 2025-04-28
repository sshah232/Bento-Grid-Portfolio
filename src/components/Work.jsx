import React from 'react';
import { motion } from 'framer-motion';
import FlowAI from "../assets/FlowAI_logo.png";
import GL from "../assets/ASUGL.png";
import NIC from "../assets/NIC.png";
import UN from "../assets/uneako.png";

const Work = () => {
  const experiences = [
    {
      role: "Software Developer Assistant",
      company: "Global Launch ASU",
      location: "Tempe, Arizona, USA",
      period: "November 2023 - Present",
      logo: GL,
      color: "#8A1D41", // ASU maroon
      achievements: [
        "Built and maintained 17+ responsive, performant UIs using HTML/CSS/JavaScript (Drupal), reducing page load times by 57% YoY.",
        "Utilized Salesforce Account Engagement (Pardot) to develop 30+ responsive email templates.",
        "Streamlined deployment workflows via automation, reducing approval-to-launch time by 30%.",
        "Created and maintained Salesforce Knowledge articles to streamline internal documentation and student support.",
        "Automated backend data processes using Python and cloud services, cutting manual workloads by 40%.",
        "Led A/B testing on interface elements and user flows, improving engagement and informing design iterations."
      ],
      tech: ["HTML", "CSS", "JavaScript", "Drupal", "Salesforce", "Python"],
      icon: "🎓"
    },
    {
      role: "Software Engineer Intern",
      company: "Flow AI",
      location: "Austin, Texas, USA",
      period: "May 2024 – August 2024",
      logo: FlowAI,
      backgroundColor: "#1abc9c", // Teal
      color: "#3498db", // Blue
      achievements: [
        "Built 13 RESTful APIs with Python/Django, enabling modular, scalable microservices for ML-powered data flows.",
        "Reduced API response time by 15% through optimized data handling; scaled services to handle 5,000+ data points.",
        "Designed CI/CD pipelines with Docker and Jenkins, cutting deployment latency by 15ms and reducing dev cycles by 23%.",
        "Contributed to ML resource infrastructure, improving system resiliency and operational efficiency."
      ],
      tech: ["Python", "Django", "REST APIs", "Docker", "Jenkins", "ML"],
      icon: "🚀"
    },
    {
      role: "Software Engineer Trainee",
      company: "National Informatics Center (NIC)",
      location: "Mumbai, India",
      period: "April 2022 – October 2022",
      logo: NIC,
      color: "#27ae60", // Green
      achievements: [
        "Re-engineered SIMNIC (J2EE-based government app) interfaces using Bootstrap improving user experience and accessibility.",
        "Enhanced system performance and reliability by 29% through distributed storage systems using MeghRaj cloud infrastructure.",
        "Enhanced accessibility and reduced data entry errors by 27% via Unicode-based multilingual support, improving usability for diverse language speakers in government applications."
      ],
      tech: ["J2EE", "Bootstrap", "MeghRaj", "Unicode"],
      icon: "🏛️"
    },
    {
      role: "Web Developer Intern",
      company: "Uneako",
      location: "Mumbai, India",
      period: "September 2021 – November 2021",
      logo: UN,
      backgroundColor: "white",
      color: "#FFA500", // Green
      achievements: [
        "Built Uneako.com with PHP, MySQL, HTML, CSS, and JavaScript, delivering a scalable web platform.",
        "Developed a secure e-commerce system for 50+ eco-friendly products with real-time order management.",
        "Designed a clean, mission-driven front-end, boosting user engagement by 40% in the first month.",
        "Optimized backend with efficient SQL queries, cutting page load times by 30%.",
        "Delivered a seamless, responsive UI across desktop and mobile for a frictionless checkout experience."
      ],
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      icon:"🌳"
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-4 md:py-4 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 text-white">
        <span className="text-[#ff5e1a]">Professional</span> Journey
      </h2>

      <div className="relative">
        {/* Timeline central line - visible only on medium screens and up */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

        {/* For mobile: left-side timeline */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gray-800"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="mb-12 md:mb-24 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline dot with icon - different positioning for mobile vs desktop */}
            <div 
              className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 ${
                index % 2 === 0 ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"
              } left-4 -translate-x-1/2`}
              style={{ backgroundColor: exp.color }}
            >
              <span className="text-lg md:text-xl">{exp.icon}</span>
            </div>

            {/* Content box - full width on mobile, alternating on desktop */}
            <div className={`md:w-5/12 w-full ml-8 md:ml-0 bg-[#131315] rounded-2xl p-4 md:p-6 border border-gray-800 shadow-lg ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            }`}>
              {/* Duration tag */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: `${exp.color}30`, color: exp.color }}>
                {exp.period}
              </div>

              {/* Header with role and company */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center mt-1">
                    <span className="text-[#ff5e1a] font-medium">{exp.company}</span>
                    <span className="hidden md:inline mx-2 text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{exp.location}</span>
                  </div>
                </div>
                <img src={exp.logo} alt={`${exp.company} logo`} style={{ backgroundColor: exp.backgroundColor }} className="w-12 h-8 md:w-15 md:h-10 object-contain" />
              </div>

              {/* Key achievements */}
              <div className="mb-4">
                <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-[#ff5e1a] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs md:text-sm text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology tags */}
              <div>
                <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Timeline end marker */}
        <div className="absolute bottom-0 md:left-1/2 left-4 transform -translate-x-1/2 translate-y-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff5e1a]"></div>
      </div>

      {/* Stats section - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-24">
        {/* Email Templates */}
        <div className="bg-[#131315] rounded-2xl p-4 md:p-6 border border-gray-800 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mb-3 md:mb-4">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">55+</div>
          <div className="text-center text-sm md:text-base text-gray-400">Email Templates</div>
        </div>

        {/* Faster Load Times */}
        <div className="bg-[#131315] rounded-2xl p-4 md:p-6 border border-gray-800 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mb-3 md:mb-4">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">57%</div>
          <div className="text-center text-sm md:text-base text-gray-400">Faster Load Times</div>
        </div>

        {/* REST APIs Built */}
        <div className="bg-[#131315] rounded-2xl p-4 md:p-6 border border-gray-800 flex flex-col items-center sm:col-span-2 md:col-span-1">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mb-3 md:mb-4">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">35+</div>
          <div className="text-center text-sm md:text-base text-gray-400">REST APIs Built</div>
        </div>
      </div>
    </div>
  );
};

export default Work;