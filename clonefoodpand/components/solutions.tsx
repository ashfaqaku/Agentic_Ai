import React from 'react';
import { AppTab } from '../types/types';

interface SolutionsPageProps {
  onNavigate: (tab: AppTab) => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700 bg-white min-h-screen font-sans">
      
      {/* ✅ SOLUTIONS KA APNA HEADER - Panda Ads ki tarah */}
      <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-[10%] flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate(AppTab.HOME)}
        >
          <span className="text-2xl font-black text-panda tracking-tight group-hover:opacity-80 transition-opacity">panda</span>
          <span className="text-2xl font-light text-gray-400 -ml-1">ads</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => onNavigate(AppTab.PANDA_ADS)}
            className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-transparent"
          >
            Home
          </button>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-panda">Solutions</a>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-transparent">Resources</a>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-transparent">Tools</a>

          <button className="btn-panda px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-panda/20">
            Contact us
          </button>

          <button className="text-gray-800 text-xl">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>

      {/* ✅ HERO SECTION */}
      <section className="relative w-full bg-[#0a0a0a] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full lg:w-2/3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
            alt="Solutions"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-20 px-6 md:px-[10%] max-w-4xl space-y-8 py-20">
          <h1 className="text-white font-black text-5xl md:text-[72px] leading-[0.95] tracking-tight">
            Retail Media<br />
            Solutions
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
            Complete advertising solutions to connect with millions of ready-to-shop customers.
          </p>
          <div className="pt-6">
            <button className="bg-white text-panda hover:bg-gray-100 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ✅ CONTENT SECTIONS */}
      <section className="py-20 px-6 md:px-[10%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-10">Our Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">In-App Display</h3>
              <p>Reach customers within the app experience.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Retargeting</h3>
              <p>Extend reach beyond the app.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Analytics</h3>
              <p>Performance tracking & insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SOLUTIONS KA APNA FOOTER - Panda Ads ki tarah */}
      <footer className="bg-black text-white py-16 px-6 md:px-[10%] mt-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Logo Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-panda rounded-lg p-1.5 flex items-center justify-center">
                  <i className="fas fa-paw text-white text-lg"></i>
                </div>
                <span className="text-[26px] font-black text-white tracking-tight">foodpanda</span>
              </div>
            </div>

            {/* Our Company */}
            <div>
              <h3 className="text-lg font-black mb-6">Our company</h3>
              <ul className="space-y-3">
                <li><button onClick={() => onNavigate(AppTab.HOME)} className="text-white hover:text-panda font-bold">Home</button></li>
                <li><button onClick={() => onNavigate(AppTab.ABOUT)} className="text-white hover:text-panda font-bold">About</button></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-black mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-panda font-bold">Display Ads</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold">Retargeting</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold">Analytics</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-black mb-6">Get in touch</h3>
              <button className="bg-panda text-white hover:bg-panda/90 px-8 py-3 rounded-full font-black">
                Contact us
              </button>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 text-center text-white/60">
            Copyright © 2025 foodpanda
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolutionsPage;