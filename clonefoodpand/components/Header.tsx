
import React, { useState } from 'react';
import { AppTab } from '../types/types';

interface HeaderProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: AppTab.HOME, label: 'Home' },
    { id: AppTab.ABOUT, label: 'About' },
    { id: AppTab.NEWSROOM, label: 'Newsroom' },
    { id: AppTab.PARTNERS, label: 'Partners' },
    { id: AppTab.PANDA_ADS, label: 'panda ads' },
    { id: AppTab.CONTACT, label: 'Contact' },
    { id: AppTab.CAREERS, label: 'Careers' },
    // { id: AppTab.INSIGHTS, label: 'Insights' },
    // { id: AppTab.CASE_STUDIES, label: 'Case Studies' },
    // { id: AppTab.RESOURCES, label: 'Resources' }, 
  ];

  return (
    <header className="h-20 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <a href="/panda-ads" target="_blank" rel="noopener noreferrer">
            Panda Ads
          </a>
          <div className="bg-panda rounded-lg p-1.5 flex items-center justify-center">
             <i className="fas fa-paw text-white text-lg"></i>
          </div>
          <span className="text-[26px] font-black text-panda tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>foodpanda</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 h-full">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-panda rounded-lg overflow-hidden h-11 shadow-sm">
             <button className="px-5 text-white text-[13px] font-bold whitespace-nowrap">
               Choose Location
             </button>
             <div className="w-[1px] bg-white/20 h-full"></div>
             <button className="px-4 text-white flex items-center justify-center hover:bg-black/5 transition-colors">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>
          </div>

          <button 
            className="xl:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl p-4 space-y-1 animate-in slide-in-from-top duration-200">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left p-4 rounded-xl text-sm font-bold ${
                activeTab === item.id ? 'bg-panda/5 text-panda' : 'text-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
