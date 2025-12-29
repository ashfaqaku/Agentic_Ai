'use client';
import React, { useState, useRef, useEffect } from 'react';
// // import { gemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatLab: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    try {
      const history = messages.map(m => ({ role: m.role, parts: m.text }));
      // const reply = await gemini.chat(input, history);
      // const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: reply || "I couldn't generate a response.", timestamp: new Date() };
      // setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="h-[600px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-gray-100">
        <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-panda flex items-center justify-center text-white">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Nova AI Chat</h3>
              <p className="text-xs text-emerald-500 font-bold">● Online and Ready</p>
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${msg.role === 'user' ? 'bg-panda text-white' : 'bg-white text-gray-700 border border-gray-100'}`}>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
                <span className={`text-[10px] mt-1 block ${msg.role === 'user' ? 'text-white/60 text-right' : 'text-gray-400'}`}>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
          ))}
          {isLoading && <div className="flex justify-start"><div className="bg-white rounded-2xl px-5 py-4 flex gap-2 border border-gray-100 shadow-sm"><div className="w-2 h-2 rounded-full bg-panda animate-bounce" /></div></div>}
        </div>
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex gap-3">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Message Nova..." className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-panda" />
            <button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-panda hover:bg-panda/90 disabled:opacity-50 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-panda/20"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLab;
