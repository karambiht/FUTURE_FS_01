import React from 'react';
import { FaGithub, FaLinkedin, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-[#0b1329] border-t border-slate-900 text-slate-400 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Title */}
        <div className="text-center md:text-left">
          <span className="font-bold text-white tracking-wide">
            Shaam<span className="text-indigo-400">Sunder</span>
          </span>
          <p className="text-xs text-slate-500 mt-1">Full Stack Web Developer Portfolio</p>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-center md:text-left order-3 md:order-2">
          &copy; {currentYear} Shaam Sunder V. All rights reserved. Developed for FutureInterns Task 1.
        </p>

        {/* Social Tray */}
        <div className="flex space-x-4 order-2 md:order-3 text-lg">
          <a 
            href="https://github.com/karambiht" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/shaam-sunder-v-64b03a407/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      {/* Smooth Scroll back-to-top floating indicator button */}
      <button 
        onClick={handleScrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-600 hover:bg-indigo-500 text-white p-3.5 rounded-full shadow-lg hover:shadow-indigo-500/25 border border-indigo-500/20 transition-all duration-250 cursor-pointer group"
        aria-label="Scroll back to top of page"
      >
        <FaChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>

    </footer>
  );
}
