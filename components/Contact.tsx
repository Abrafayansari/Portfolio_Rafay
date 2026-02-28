import React from 'react';
import  DEVELOPER_INFO  from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div>
          <h2 className="text-5xl font-bold mb-6">
            Let's build something <span className="text-gradient">remarkable</span>.
          </h2>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas or original visions.
          </p>

          <div id="contact-details" className="space-y-6 mb-12">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                📧
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">Email</p>
                <p className="font-medium">{DEVELOPER_INFO.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                📱
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">Phone</p>
                <p className="font-medium">{DEVELOPER_INFO.phone}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                📍
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">Location</p>
                <p className="font-medium">{DEVELOPER_INFO.location}</p>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>

            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
