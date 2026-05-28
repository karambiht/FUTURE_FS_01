import React from 'react';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

export default function About() {
  const cards = [
    {
      icon: <FaGraduationCap className="text-indigo-400 text-3xl" />,
      title: "Education & Background",
      desc: "Pursuing BE in Computer Science Engineering at Sri Venkateswara College of Engineering (SVCE). Strong foundation in algorithms, data structures, and software engineering principles."
    },
    {
      icon: <FaCode className="text-purple-400 text-3xl" />,
      title: "Core Focus",
      desc: "Passionate about full stack development, open source software, Retrieval-Augmented Generation (RAG), and building LLM-powered applications with real-world impact."
    },
    {
      icon: <FaRocket className="text-pink-400 text-3xl" />,
      title: "Learning Goals",
      desc: "Actively exploring Generative AI, Machine Learning, and LangChain to build intelligent applications. Goal is to grow into a well-rounded software engineer."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-[#0b1329] border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Get to know my professional journey, interests, and internship objectives.
          </p>
        </div>

        {/* Bio Narrative Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Main Biography Column */}
          <div className="md:col-span-7 space-y-6 text-slate-300">
            <h3 className="text-2xl font-bold text-white">
              Who is Shaam Sunder V?
            </h3>
            
            <p className="leading-relaxed">
              I am a Computer Science undergrad passionate about full stack web development and modern web technologies. My journey began with curiosity about how the web works, which evolved into a deep interest in building end-to-end applications — from responsive UIs to scalable backend APIs.
            </p>
            
            <p className="leading-relaxed">
              I enjoy working with React, FastAPI, and MongoDB to create practical solutions. Beyond traditional web dev, I am fascinated by open source software, Retrieval-Augmented Generation (RAG), and Large Language Models — and I'm actively learning LangChain and Machine Learning to bring AI into my projects.
            </p>

            <div className="bg-[#0f172a] p-5 rounded-xl border border-slate-800 space-y-4">
              <h4 className="font-bold text-white text-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                My Internship Objectives
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                As a FutureInterns intern, my focus is to bridge the gap between academic knowledge and professional software engineering. I aim to contribute to real projects, sharpen my full stack skills, and adopt industry-standard development practices and workflows.
              </p>
            </div>
          </div>

          {/* Info Summary Column */}
          <div className="md:col-span-5 bg-[#0f172a] p-6 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
              Quick Details
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400 font-medium">Domain</span>
                <span className="text-indigo-300 font-semibold">Full Stack & AI</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-slate-800/50">
                <span className="text-slate-400 font-medium">Core Tech</span>
                <span className="text-indigo-300 font-semibold">React, FastAPI, MongoDB</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-slate-800/50">
                <span className="text-slate-400 font-medium">Interests</span>
                <span className="text-indigo-300 font-semibold">OSS, RAG, LLMs</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-slate-800/50">
                <span className="text-slate-400 font-medium">Current Status</span>
                <span className="text-green-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                  BE Undergrad · Intern
                </span>
              </div>
            </div>
            
            <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl text-center">
              <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider block mb-1">Internship</span>
              <p className="text-white font-bold text-base">FutureInterns · 2026</p>
            </div>
          </div>

        </div>

        {/* Feature Cards Row */}
        <div className="grid sm:grid-cols-3 gap-6 pt-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#0f172a] hover:bg-[#131e36] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 group transform hover:-translate-y-1 shadow-md"
            >
              <div className="mb-4 bg-slate-900/60 p-3 rounded-lg inline-block group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
