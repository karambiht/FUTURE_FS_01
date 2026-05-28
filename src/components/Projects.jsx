import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Cooki",
      description: "An intelligent cooking assistant that supports both voice and visual interactions. Users can discover recipes, get step-by-step guidance, and interact hands-free while cooking — powered by FastAPI and MongoDB.",
      tags: ["React", "FastAPI", "MongoDB"],
      github: "https://github.com/karambiht",
      demo: "https://github.com/karambiht"
    },
    {
      title: "UPIcred",
      description: "A credit scoring system that analyses UPI transaction history to generate a dynamic credit score. Helps users understand their financial health using real payment data — built with Flask and MongoDB.",
      tags: ["HTML", "CSS", "Flask", "MongoDB"],
      github: "https://github.com/karambiht",
      demo: "https://github.com/karambiht"
    },
    {
      title: "Learning Path Dashboard",
      description: "A personalised learning path generator that provides tailored guidance and curated resources based on user goals and skill levels. Built with a React frontend and a FastAPI + PostgreSQL backend.",
      tags: ["React", "FastAPI", "PostgreSQL"],
      github: "https://github.com/karambiht",
      demo: "https://github.com/karambiht"
    }
  ];


  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#0b1329] border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Take a look at some of my recent application projects completed during my studies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 hover:border-slate-700/80 hover:shadow-xl hover:shadow-indigo-950/20 flex flex-col justify-between overflow-hidden transition-all duration-300 transform hover:-translate-y-1 group"
            >
              
              {/* Card Top Block */}
              <div className="p-6 space-y-4">
                
                {/* Decorative Tech Matrix Grid Header */}
                <div className="h-28 w-full rounded-xl bg-gradient-to-br from-indigo-950 to-slate-900 border border-slate-800/80 flex items-center justify-center relative overflow-hidden">
                  
                  {/* Glowing core bg */}
                  <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
                  
                  <span className="text-3xl font-extrabold text-indigo-400 opacity-60 tracking-wider select-none uppercase font-mono group-hover:scale-105 transition-transform duration-300">
                    {`[ Project 0${idx + 1} ]`}
                  </span>

                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

              </div>

              {/* Card Bottom Block */}
              <div className="p-6 pt-0 space-y-4">
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-[10px] font-semibold bg-slate-800 text-indigo-300 border border-slate-700 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-white border border-slate-700 hover:bg-slate-700/80 hover:border-slate-600 transition-colors duration-200"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-950/40 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={10} />
                    Live Demo
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
