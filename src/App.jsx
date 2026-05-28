import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0b1329] min-h-screen text-slate-200 antialiased selection:bg-indigo-500/30 selection:text-white">
      
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Single Page Sections Container */}
      <main>
        
        {/* Hero Banner Section */}
        <Hero />

        {/* Professional About Me Section */}
        <About />

        {/* Technologies and Skills Metrics Section */}
        <Skills />

        {/* Visual Projects Cards Section */}
        <Projects />

        {/* Professional Resume Preview and Certifications */}
        <Resume />

        {/* Interactive Messaging Contact Form Section */}
        <Contact />

      </main>

      {/* Footer credits and smooth scroll button */}
      <Footer />

    </div>
  );
}

