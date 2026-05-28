import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#0b1329] via-[#0f172a] to-[#0b1329]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="space-y-6 text-center md:text-left">
          
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span>Available for Internship</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Shaam Sunder V</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-indigo-400 uppercase tracking-wide">
            Full Stack Web Developer
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            A Computer Science undergrad passionate about full stack development, open source software, and emerging AI technologies. Building real-world apps with React, FastAPI, and MongoDB.
          </p>

          {/* Social Links Icons */}
          <div className="flex justify-center md:justify-start space-x-5 text-2xl text-slate-400">
            <a 
              href="https://github.com/karambiht" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:-translate-y-1 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/shaam-sunder-v-64b03a407/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:-translate-y-1 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:shyamsunder@gmail.com" 
              className="hover:text-white hover:-translate-y-1 transition-all duration-200"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Call to Actions (CTAs) */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3 rounded-lg font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Contact Me
            </button>
          </div>

        </div>

        {/* Right Side Illustration */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            
            {/* Background Decorative Glowing Blobs */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
            
            {/* SVG Visual Coder Illustration */}
            <svg 
              viewBox="0 0 500 500" 
              className="relative w-full h-full text-indigo-400 drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Coder Desk Panel */}
              <rect x="50" y="400" width="400" height="20" rx="10" fill="#1e293b" />
              
              {/* Laptop screen */}
              <rect x="120" y="200" width="260" height="180" rx="8" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="6" />
              {/* Laptop Base */}
              <path d="M 100 380 L 400 380 L 420 395 L 80 395 Z" fill="#334155" />
              {/* Screen Content - Code Lines */}
              <rect x="140" y="220" width="100" height="10" rx="3" fill="#6366f1" opacity="0.8" />
              <rect x="140" y="240" width="160" height="8" rx="3" fill="#a855f7" opacity="0.7" />
              <rect x="160" y="255" width="80" height="8" rx="3" fill="#ec4899" opacity="0.7" />
              <rect x="160" y="270" width="120" height="8" rx="3" fill="#10b981" opacity="0.7" />
              <rect x="140" y="290" width="220" height="8" rx="3" fill="#f59e0b" opacity="0.6" />
              <rect x="140" y="305" width="140" height="8" rx="3" fill="#3b82f6" opacity="0.8" />
              <rect x="160" y="320" width="90" height="8" rx="3" fill="#a855f7" opacity="0.7" />
              
              {/* Floating Tech Gear/Symbols */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                {/* Gear Left */}
                <circle cx="80" cy="120" r="25" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="10 5" />
                <circle cx="80" cy="120" r="10" fill="#6366f1" />
              </g>

              <g className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                {/* Code brackets float */}
                <path d="M 400 120 L 380 140 L 400 160" fill="none" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
                <path d="M 420 120 L 440 140 L 420 160" fill="none" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
                <line x1="415" y1="115" x2="405" y2="165" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
              </g>

              {/* Central glowing reactor or core */}
              <circle cx="250" cy="120" r="30" fill="#0b1329" stroke="#ec4899" strokeWidth="3" />
              <circle cx="250" cy="120" r="15" fill="#ec4899" className="animate-pulse" />
              
              {/* Flow connections */}
              <path d="M 105 120 Q 220 120 220 120" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 370 140 Q 280 120 280 120" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 250 150 L 250 200" fill="none" stroke="#4f46e5" strokeWidth="3" />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}
