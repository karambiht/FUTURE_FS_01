import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];


  // Handle active section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      // Check if user has scrolled down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // navbar offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 backdrop-blur-md bg-[#0b1329]/90 shadow-lg border-b border-slate-800' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, 'home')} 
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          Developer<span className="text-indigo-500">.Portfolio</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`relative text-sm font-medium transition-colors duration-300 py-2 ${
                  activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {/* Active Indicator Underline */}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {/* Mobile Sidebar Overlay Drawer */}
      <div className={`fixed inset-0 top-[72px] bg-[#0b1329]/95 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden ${
        navOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`text-xl font-semibold transition-colors ${
                  activeSection === link.id ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
