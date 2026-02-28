
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { DEVELOPER_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section - No Picture, Animated Terminal Instead */}
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
                   <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Philosophy</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                  Crafting code that <span className="text-indigo-400">scales</span> and interfaces that <span className="text-purple-400">sing</span>.
                </h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    I am a {DEVELOPER_INFO.role} who believes that performance is a feature. My development process is rooted in the "clean code" philosophy, ensuring that every application I build is maintainable, efficient, and robust.
                  </p>
                  <p>
                    Focusing heavily on the <span className="text-indigo-400">PERN</span> and <span className="text-indigo-400">MERN</span> stacks, I bridge the gap between complex backend logic (PostgreSQL/Prisma) and pixel-perfect frontend experiences. For me, web development is about engineering scalable solutions.
                  </p>
                  <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div>
                      <p className="text-3xl font-extrabold text-white">2+</p>
                      <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-1">Years of Craft</p>
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold text-white">1</p>
                      <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-1">Live Application</p>
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold text-white">100%</p>
                      <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-1">Commitment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Visualization instead of Photo */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-slate-900/80 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-[10px] font-mono text-slate-500 tracking-wider">rafay.ts — Visual Studio Code</span>
                      </div>
                    </div>
                    <div className="p-6 font-mono text-sm sm:text-base space-y-2 text-slate-300">
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">1</span>
                        <p><span className="text-purple-400">interface</span> <span className="text-amber-300">Developer</span> &#123;</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">2</span>
                        <p className="pl-4">name: <span className="text-emerald-400">"{DEVELOPER_INFO.name}"</span>;</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">3</span>
                        <p className="pl-4">role: <span className="text-emerald-400">"{DEVELOPER_INFO.role}"</span>;</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">4</span>
                        <p className="pl-4">stack: [<span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"Prisma"</span>, <span className="text-emerald-400">"React"</span>];</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">5</span>
                        <p>&#125;</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">6</span>
                        <p>&nbsp;</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">7</span>
                        <p><span className="text-purple-400">function</span> <span className="text-blue-400">buildMagic</span>(specs) &#123;</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600 select-none">8</span>
                        <p className="pl-4"><span className="text-purple-400">return</span> specs.<span className="text-blue-400">map</span>(s =&gt; <span className="text-purple-400">new</span> <span className="text-amber-300">Experience</span>(s));</p>
                      </div>
                      <div className="flex gap-4 animate-pulse">
                        <span className="text-slate-600 select-none">9</span>
                        <p className="pl-4">&#125;<span className="inline-block w-2 h-5 bg-indigo-500 ml-1"></span></p>
                      </div>
                    </div>
                  </div>
                  {/* Floating Elements for extra flair */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">
            {DEVELOPER_INFO.name.split(' ')[0]}.<span className="text-indigo-500">dev</span>
          </div>
          
          <p className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved. Built with passion & AI.
          </p>

          <div className="flex gap-6 items-center">
             <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Github</a>
             <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
