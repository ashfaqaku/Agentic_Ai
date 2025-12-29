import React from 'react';
import { AppTab } from '../types';



interface FooterProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const Footer: React.FC<FooterProps> = ({ activeTab, onTabChange }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-[10%] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-32">
          {/* Logo Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#ff2b85] rounded-xl p-2 flex items-center justify-center">
                 <i className="fas fa-paw text-white text-xl"></i>
              </div>
              <span className="text-[30px] font-black text-white tracking-tight">foodpanda</span>
            </div>
          </div>

          {/* Navigate Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-black text-white tracking-tight">Navigate</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onTabChange(AppTab.HOME)} className={`text-white text-lg font-bold hover:text-panda transition-colors ${activeTab === AppTab.HOME ? 'text-panda' : ''}`}>Home</button></li>
              <li><button onClick={() => onTabChange(AppTab.ABOUT)} className={`text-white text-lg font-bold hover:text-panda transition-colors ${activeTab === AppTab.ABOUT ? 'text-panda' : ''}`}>About</button></li>
              <li><button onClick={() => onTabChange(AppTab.CONTACT)} className={`text-white text-lg font-bold hover:text-panda transition-colors ${activeTab === AppTab.CONTACT ? 'text-panda' : ''}`}>Contact</button></li>
            </ul>
          </div>

          {/* Collaborate Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-black text-white tracking-tight">Collaborate</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onTabChange(AppTab.CAREERS)} className="text-white text-lg font-bold hover:text-panda transition-colors">Explore careers</button></li>
              <li><a href="#" className="text-white text-lg font-bold hover:text-panda transition-colors">Become a rider</a></li>
              <li><button onClick={() => onTabChange(AppTab.PARTNERS)} className="text-white text-lg font-bold hover:text-panda transition-colors">Feed your team</button></li>
            </ul>
          </div>

          {/* Follow us Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-black text-white tracking-tight">Follow us on</h3>
            <div className="flex items-center gap-8">
              <a href="#" className="text-white text-3xl hover:text-panda transition-all transform hover:scale-110">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white text-3xl hover:text-panda transition-all transform hover:scale-110">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white text-3xl hover:text-panda transition-all transform hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10">
          <div className="text-white text-sm md:text-base font-bold">
            Copyright © 2025 foodpanda
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-12 bg-[#ff2b85] text-white flex items-center justify-center rounded-lg hover:bg-[#e02475] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-panda/20"
          >
            <i className="fas fa-chevron-up text-xl"></i>
          </button>

          <div className="text-white text-sm md:text-base font-bold">
            <a href="#" className="hover:text-panda transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;