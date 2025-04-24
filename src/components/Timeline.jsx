import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Software Developer Assistant",
      company: "Global Launch ASU",
      location: "Tempe, Arizona, USA",
      period: "November 2023 - Present",
      logo: "/api/placeholder/48/48", // Replace with actual logo path
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
      period: "June 2024 – August 2024",
      logo: "/api/placeholder/48/48", // Replace with actual logo path
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
      logo: "/api/placeholder/48/48", // Replace with actual logo path
      color: "#27ae60", // Green
      achievements: [
        "Re-engineered SIMNIC (J2EE-based government app) interfaces using Bootstrap improving user experience and accessibility.",
        "Enhanced system performance and reliability by 29% through distributed storage systems using MeghRaj cloud infrastructure.",
        "Enhanced accessibility and reduced data entry errors by 27% via Unicode-based multilingual support, improving usability for diverse language speakers in government applications."
      ],
      tech: ["J2EE", "Bootstrap", "MeghRaj", "Unicode"],
      icon: "🏛️"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">
        <span className="text-[#ff5e1a]">Professional</span> Journey
      </h2>

      <div className="relative">
        {/* Timeline central line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="mb-24 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline dot with icon */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-12 h-12 rounded-full flex items-center justify-center z-20"
              style={{ backgroundColor: exp.color }}
            >
              <span className="text-xl">{exp.icon}</span>
            </div>

            {/* Content box */}
            <div className={`w-5/12 bg-[#131315] rounded-2xl p-6 border border-gray-800 shadow-lg ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}>
              {/* Connector line to timeline */}
              {/* <div 
                className={`absolute top-0 w-1/12 h-0.5 bg-gray-700 ${
                  index % 2 === 0 ? "left-[45%] right-auto" : "right-[45%] left-auto"
                }`}
              ></div> */}

              {/* Duration tag */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: `${exp.color}30`, color: exp.color }}>
                {exp.period}
              </div>

              {/* Header with role and company */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-[#ff5e1a] font-medium">{exp.company}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{exp.location}</span>
                  </div>
                </div>
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-10 h-10 rounded-md" />
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
                      <span className="text-sm text-gray-300">{achievement}</span>
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

              {/* Interactive element - pulsing circle on hover */}
              {/* <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#131315] border border-gray-800 group-hover:border-[#ff5e1a] transition-colors duration-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#ff5e1a] group-hover:animate-ping"></div>
              </div> */}
            </div>
          </motion.div>
        ))}

        {/* Timeline end marker */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-4 h-4 rounded-full bg-[#ff5e1a]"></div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-3 gap-6 mt-24">
        <div className="bg-[#131315] rounded-2xl p-6 border border-gray-800 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div className="text-3xl font-bold text-white mb-2">30+</div>
          <div className="text-center text-gray-400">Email Templates</div>
        </div>

        <div className="bg-[#131315] rounded-2xl p-6 border border-gray-800 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-3xl font-bold text-white mb-2">57%</div>
          <div className="text-center text-gray-400">Faster Load Times</div>
        </div>

        <div className="bg-[#131315] rounded-2xl p-6 border border-gray-800 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-3xl font-bold text-white mb-2">13</div>
          <div className="text-center text-gray-400">REST APIs Built</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;








// const SimpleTimeline = () => {
//   // Sample experience data - replace with your actual experience
//   const experiences = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       year: "2023",
//       company: "Tech Company",
//       description: "Working on cloud infrastructure and AI solutions, developing scalable applications and implementing machine learning models."
//     },
//     {
//       id: 2,
//       title: "Full Stack Developer",
//       year: "2021",
//       company: "StartupX",
//       description: "Built scalable web applications using React and Django. Implemented RESTful APIs and optimized database performance for high-traffic applications."
//     },
//     {
//       id: 3,
//       title: "ML Research Intern",
//       year: "2020",
//       company: "AI Lab",
//       description: "Worked on YOLOv8 for surface roughness detection. Achieved XX% accuracy in manufacturing data analysis through custom model architecture."
//     },
//     {
//       id: 4,
//       title: "Junior Developer",
//       year: "2019",
//       company: "Web Agency",
//       description: "Developed frontend interfaces and REST APIs for client projects. Worked with diverse technologies and participated in all stages of the development lifecycle."
//     }
//   ];

//   return (
//     <FadeIn>
//       <div className="w-full max-w-7xl mx-auto p-4 mb-8">
//         <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white">Experience</h2>
//             <p className="text-gray-400 mt-2 text-lg">My professional journey</p>
//           </div>
          
//           <div className="timeline px-4 py-8 relative">
//             <div className="outer">
//               {experiences.map((exp, index) => (
//                 <div key={exp.id} className="card">
//                   <div className="info bg-[#1f1f23] border border-gray-800">
//                     <h3 className="title flex items-center text-[#ff5e1a] text-xl font-medium mb-1">
//                       {exp.title}
//                       <span className="text-gray-400 text-sm ml-2">{exp.year} | {exp.company}</span>
//                     </h3>
//                     <p className="text-gray-300">{exp.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Custom CSS for timeline styling */}
//       <style jsx>{`
//         .timeline {
//           position: relative;
//         }
        
//         /* Timeline center line */
//         .outer::after {
//           content: "";
//           position: absolute;
//           width: 2px;
//           background: #333;
//           top: 0;
//           bottom: 0;
//           left: 50%;
//           margin-left: -1px;
//         }
        
//         /* Card container */
//         .card {
//           position: relative;
//           max-width: 46%;
//           margin-bottom: 30px;
//         }
        
//         /* Alternating cards left/right */
//         .card:nth-child(odd) {
//           margin-right: auto;
//           padding-right: 30px;
//         }
        
//         .card:nth-child(even) {
//           margin-left: auto;
//           padding-left: 30px;
//         }
        
//         /* Information about the timeline */
//         .info {
//           display: flex;
//           flex-direction: column;
//           border-radius: 10px;
//           padding: 15px;
//         }
        
//         /* Title of the card */
//         .title {
//           position: relative;
//         }
        
//         /* Timeline dot */
//         .title::before {
//           content: "";
//           position: absolute;
//           width: 10px;
//           height: 10px;
//           background: #131315;
//           border-radius: 999px;
//           border: 2px solid #ff5e1a;
//         }
        
//         /* Setting dot to the right if the card is odd */
//         .card:nth-child(odd) > .info > .title::before {
//           right: -40px;
//         }
        
//         /* Setting dot to the left if the card is even */
//         .card:nth-child(even) > .info > .title::before {
//           left: -40px;
//         }
        
//         /* Responsive adjustments */
//         @media only screen and (max-width: 768px) {
//           .outer::after {
//             left: 30px;
//           }
          
//           .card {
//             max-width: 100%;
//             margin-bottom: 20px;
//           }
          
//           .card:nth-child(odd),
//           .card:nth-child(even) {
//             margin-left: 60px;
//             margin-right: 0;
//             padding-left: 0;
//             padding-right: 0;
//           }
          
//           .card:nth-child(odd) > .info > .title::before,
//           .card:nth-child(even) > .info > .title::before {
//             left: -70px;
//             right: auto;
//           }
//         }
//       `}</style>
//     </FadeIn>
//   );
// };

// export default SimpleTimeline;







// Vertical and Horizontal Timeline Component from Claude

// import React from "react";
// import { FadeIn } from "./FadeIn";

// const TimelineExperience = () => {
//   // Sample experience data - replace with your actual experience
//   const experiences = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       company: "Tech Company",
//       period: "2023 - Present",
//       description: "Working on cloud infrastructure and AI solutions",
//       color: "bg-blue-500",
//     },
//     {
//       id: 2,
//       title: "Full Stack Developer",
//       company: "StartupX",
//       period: "2021 - 2023",
//       description: "Built scalable web applications using React and Django",
//       color: "bg-green-500",
//     },
//     {
//       id: 3,
//       title: "ML Research Intern",
//       company: "AI Lab",
//       period: "2020 - 2021",
//       description: "Worked on YOLOv8 for surface roughness detection",
//       color: "bg-pink-500",
//     },
//     {
//       id: 4,
//       title: "Junior Developer",
//       company: "Web Agency",
//       period: "2019 - 2020",
//       description: "Developed frontend interfaces and REST APIs",
//       color: "bg-purple-600",
//     },
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4 mb-8">
//       <FadeIn>
//         <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800">
//           <h2 className="text-4xl font-bold text-white mb-12">Experience Timeline</h2>
          
//           {/* Vertical Timeline */}
//           <div className="relative">
//             {/* Main timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-800"></div>
            
//             {/* Timeline items */}
//             <div className="space-y-16">
//               {experiences.map((exp) => (
//                 <div key={exp.id} className="relative pl-20">
//                   {/* Timeline blob/circle */}
//                   <div className={`absolute left-6 w-6 h-6 rounded-full ${exp.color} transform -translate-x-1/2 z-10`}></div>
                  
//                   {/* Timeline content */}
//                   <div className="bg-[#1f1f23] rounded-2xl p-6 border border-gray-800">
//                     <div className="flex justify-between items-start mb-3">
//                       <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
//                       <span className={`${exp.color} px-3 py-1 text-sm rounded-full text-white font-medium`}>
//                         {exp.period}
//                       </span>
//                     </div>
//                     <p className="text-xl font-medium text-gray-300 mb-2">{exp.company}</p>
//                     <p className="text-gray-400">{exp.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </FadeIn>
//     </div>
//   );
// };

// Horizontal timeline alternative - uncomment to use instead of vertical timeline
// const HorizontalTimelineExperience = () => {
//   const experiences = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       company: "Tech Company",
//       period: "2023 - Present",
//       color: "bg-blue-500",
//     },
//     {
//       id: 2,
//       title: "Full Stack Developer",
//       company: "StartupX",
//       period: "2021 - 2023",
//       color: "bg-green-500",
//     },
//     {
//       id: 3,
//       title: "ML Research Intern",
//       company: "AI Lab",
//       period: "2020 - 2021",
//       color: "bg-pink-500",
//     },
//     {
//       id: 4,
//       title: "Junior Developer",
//       company: "Web Agency",
//       period: "2019 - 2020",
//       color: "bg-purple-600",
//     },
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4 mb-8">
//       <FadeIn>
//         <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800">
//           <h2 className="text-4xl font-bold text-white mb-12">Experience Timeline</h2>
          
//           {/* Horizontal Timeline */}
//           <div className="relative">
//             {/* Main timeline line */}
//             <div className="absolute left-0 right-0 top-8 h-1 bg-gray-800"></div>
            
//             {/* Timeline items */}
//             <div className="flex justify-between">
//               {experiences.map((exp) => (
//                 <div key={exp.id} className="relative w-1/4 px-2">
//                   {/* Timeline blob/circle */}
//                   <div className={`absolute top-8 w-6 h-6 rounded-full ${exp.color} transform -translate-y-1/2 z-10`}></div>
                  
//                   {/* Timeline content - alternate up/down */}
//                   <div className={`mt-12 bg-[#1f1f23] rounded-2xl p-4 border border-gray-800`}>
//                     <span className={`${exp.color} px-2 py-1 text-xs rounded-full text-white font-medium mb-2 inline-block`}>
//                       {exp.period}
//                     </span>
//                     <h3 className="text-lg font-bold text-white">{exp.title}</h3>
//                     <p className="text-sm font-medium text-gray-300">{exp.company}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </FadeIn>
//     </div>
//   );
// };

// // Export the vertical timeline by default
// // You can switch to the horizontal timeline by changing the export below
// export default HorizontalTimelineExperience;
// export default HorizontalTimelineExperience;







// *********************************************** //

// OLD TIMELINE CODE

// import React from "react";
// import Container from "./Container";
// import { FadeIn } from "./FadeIn";

// const timelineData = [
//   {
//     year: "2025",
//     role: "Software Developer Assistant",
//     company: "ASU Global Launch",
//     tech: ["HTML", "CSS", "JavaScript"],
//     desc: "Maintained ASU’s international programs web pages, improved compatibility and reduced load time by 30%.",
//   },
//   {
//     year: "2024",
//     role: "Backend Intern",
//     company: "FlowAI",
//     tech: ["Flask", "PostgreSQL", "Docker"],
//     desc: "Developed and deployed scalable REST APIs and microservices handling thousands of requests daily.",
//   },
//   {
//     year: "2023",
//     role: "Founder",
//     company: "Linguify",
//     tech: ["Python", "MongoDB", "Azure"],
//     desc: "Built and launched a multilingual translation platform used in 6+ countries.",
//   },
//   {
//     year: "2022",
//     role: "Intern + Hackathons",
//     company: "Multiple Startups",
//     tech: ["React", "Node.js", "Firebase"],
//     desc: "Won 3 national hackathons, contributed to open-source, and supported dev teams remotely.",
//   },
// ];

// function Timeline() {
//   return (
//     <Container id="timeline">
//       <FadeIn>
//         <div className="flex flex-col gap-6 bg-[#131315] px-12 py-10 rounded-3xl max-md:p-8 my-2">
//           <h2 className="text-white text-3xl font-semibold mb-2">📅 My Journey</h2>
//           <p className="text-[#8a8a93] max-w-3xl mb-4">
//             From hackathons to leading projects, here’s a quick timeline of my evolving roles and skills across the years.
//           </p>
//           <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
//             {timelineData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1a1a1d] p-6 rounded-2xl text-white flex flex-col gap-4"
//               >
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-[#8a8a93]">{item.year}</span>
//                   <span className="bg-[#ff5e1a] text-white text-xs px-3 py-1 rounded-full">
//                     {item.company}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold leading-tight">{item.role}</h3>
//                 <p className="text-sm text-[#a1a1aa]">{item.desc}</p>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {item.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs bg-[#2a2a2e] px-3 py-1 rounded-full text-white"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </FadeIn>
//     </Container>
//   );
// }

// export default Timeline;