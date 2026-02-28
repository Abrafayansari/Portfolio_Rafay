
import React from 'react';
import { DEVELOPER_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-indigo-500"></span>
            <p className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase">Based in Karachi, Pakistan</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            Engineering <span className="text-gradient">modern stacks</span>.
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
            I'm <span className="text-white font-semibold">{DEVELOPER_INFO.name}</span>, a {DEVELOPER_INFO.role} proficient in the <span className="text-indigo-400">PERN Stack</span> (PostgreSQL, Express, React, Node.js) and <span className="text-indigo-400">Prisma</span>. Currently pursuing S.E. at FAST-NUCES.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <a href="#projects" className="group relative px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all overflow-hidden">
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="px-8 py-4 glass text-white rounded-2xl font-bold hover:bg-white/5 transition-all flex items-center gap-2 group">
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-40">
        <p className="text-[10px] uppercase tracking-widest font-mono">Scroll</p>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
