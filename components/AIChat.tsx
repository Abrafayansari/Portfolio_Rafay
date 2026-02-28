
import React, { useState, useRef, useEffect } from 'react';
import { sendMessage } from '../services/geminiService';
import { Message } from '../types';
import { DEVELOPER_INFO } from '../constants';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Greetings! I'm the digital essence of ${DEVELOPER_INFO.name.split(' ')[0]}. Ask me anything about my work, my tech stack, or how we can collaborate.` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const reply = await sendMessage(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: reply || "I'm sorry, I couldn't process that. Try again?" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "My neural links are a bit fuzzy right now. Check back in a second!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-2xl overflow-hidden flex flex-col h-[500px] border border-white/10 shadow-2xl relative">
      <div className="p-4 border-b border-white/5 bg-slate-900/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg ring-2 ring-white/10">RA</div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">Rafay AI</h3>
            <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Synchronized
            </p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20' : 'bg-slate-800/80 text-slate-200 border border-white/5'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-white/5 flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-slate-900/60">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Rafay AI..."
            className="flex-1 bg-slate-800 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
          />
          <button 
            type="submit" 
            disabled={isTyping}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 px-5 py-2 rounded-xl text-white transition-all shadow-lg shadow-indigo-900/20 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChat;
