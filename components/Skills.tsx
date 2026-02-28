
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-slate-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mastered Technologies</h2>
          <p className="text-slate-400 max-w-xl mx-auto">A collection of tools and frameworks I use to bring complex ideas to life with high quality standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <h3 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-widest border-b border-indigo-500/20 pb-2">
                {cat} Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
