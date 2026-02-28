
import React, { useState, useEffect } from 'react';
import { DEVELOPER_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          {DEVELOPER_INFO.name.split(' ')[0]}.<span className="text-indigo-500">dev</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact-details" className="hover:text-white transition-colors px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
