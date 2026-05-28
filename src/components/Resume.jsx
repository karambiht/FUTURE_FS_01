import React from 'react';
import { FaDownload, FaCertificate, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function Resume() {
  const certifications = [
    {
      title: "FastAPI — Building Modern Python APIs",
      issuer: "Udemy / freeCodeCamp",
      year: "2025"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2025"
    },
    {
      title: "Java Programming Masterclass",
      issuer: "Oracle Academy",
      year: "2024"
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 md:px-8 bg-[#0b1329] border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My <span className="text-indigo-400">Resume</span>
          </h2>
          <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Review my professional background, certifications, and download my formal resume document.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Column: Visual Resume Preview Sheet */}
          <div className="md:col-span-8 bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-slate-800 relative group overflow-hidden">
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Resume Sheet Content */}
            <div className="space-y-6 text-sm text-slate-300">
              
              {/* Header */}
              <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Shaam Sunder V</h3>
                  <p className="text-indigo-400 font-semibold mt-0.5">Full Stack Web Developer</p>
                </div>
                <div className="text-xs text-slate-400 space-y-1 sm:text-right">
                  <p>shyamsunder@gmail.com</p>
                  <p>Chennai, India</p>
                  <p>github.com/karambiht</p>
                </div>
              </div>

              {/* Education section */}
              <div className="space-y-3">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                  <FaGraduationCap className="text-indigo-400" />
                  Education
                </h4>
                <div className="pl-6 border-l border-slate-800/80 space-y-1 relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 absolute -left-1.5 top-1"></span>
                  <div className="flex justify-between items-center">
                    <h5 className="font-bold text-white">BE in Computer Science Engineering</h5>
                    <span className="text-xs text-indigo-400 font-semibold">2022 - Expected 2026</span>
                  </div>
                  <p className="text-slate-400 text-xs">Sri Venkateswara College of Engineering (SVCE), Chennai</p>
                  <p className="text-xs mt-1 text-slate-400">Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering.</p>
                </div>
              </div>

              {/* Technical Experience section */}
              <div className="space-y-3">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                  <FaBriefcase className="text-indigo-400" />
                  Technical Experience
                </h4>
                
                <div className="pl-6 border-l border-slate-800/80 space-y-3 relative">
                  
                  {/* Job item 1 */}
                  <div className="space-y-1 relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 absolute -left-[30px] top-1"></span>
                    <div className="flex justify-between items-center">
                      <h5 className="font-bold text-white">Full Stack Developer Intern</h5>
                      <span className="text-xs text-indigo-400 font-semibold">2026</span>
                    </div>
                    <p className="text-slate-400 text-xs">FutureInterns</p>
                    <ul className="list-disc list-inside text-xs mt-1 text-slate-400 space-y-1">
                      <li>Built a full stack portfolio website using React.js, Node.js, and Express.js.</li>
                      <li>Developed RESTful APIs with FastAPI and integrated MongoDB for data persistence.</li>
                      <li>Applied professional Git workflows and industry-standard development practices.</li>
                    </ul>
                  </div>

                  {/* Achievement item */}
                  <div className="space-y-1 relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 absolute -left-[30px] top-1"></span>
                    <div className="flex justify-between items-center">
                      <h5 className="font-bold text-white">🏆 Hackathon Winner</h5>
                      <span className="text-xs text-purple-400 font-semibold">2025</span>
                    </div>
                    <p className="text-slate-400 text-xs">Competed in and won college-level hackathon — built a working prototype under 24 hours.</p>
                  </div>

                </div>
              </div>

              {/* Achievements Summary text block */}
              <div className="bg-[#0b1329] p-4 rounded-xl border border-slate-800/60">
                <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Core Professional Summary</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A dedicated BE CSE undergrad with hands-on experience building full stack applications using React, FastAPI, and MongoDB. Passionate about open source software, AI/ML technologies, and delivering clean, maintainable code. Eager to grow as a software engineer through real-world collaboration and continuous learning.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Certifications & Download */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Certifications Card */}
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FaCertificate className="text-indigo-400" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-[#0b1329] rounded-xl border border-slate-800/60 hover:border-indigo-500/20 transition-all duration-200"
                  >
                    <h4 className="text-sm font-semibold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between items-center mt-1.5 text-[10px] text-slate-400 font-medium">
                      <span>{cert.issuer}</span>
                      <span className="text-indigo-400 bg-indigo-500/5 px-1.5 py-0.5 rounded border border-indigo-500/10">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA Card */}
            <div className="bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
              <h3 className="font-bold text-white text-base">Need a Physical Copy?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click below to download my complete resume as an offline-friendly PDF document.
              </p>
              
              <a 
                href="/resume.pdf"
                download="Shaam_Sunder_V_Resume.pdf"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-250 cursor-pointer group"
              >
                <FaDownload size={13} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume PDF
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
