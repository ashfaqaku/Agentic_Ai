import React, { useState } from 'react';
import { AppTab } from '../types';

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
  ];

  return (
    <header className="h-20 bg-white shadow-sm sticky top-0 z-50 px-6 md:px-[10%]">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <button 
          onClick={() => onTabChange(AppTab.HOME)} 
          className="flex items-center gap-3 cursor-pointer outline-none group shrink-0"
        >
          <div className=" rounded-xl p-2 flex items-center justify-center transition-transform group-hover:scale-110">
            <img src="app/assets/images/foodpandicon.png" alt="" />
            {/* " alt="" /> */}
            {/* ../../app/assets/images/foodpandicon.png */}
          </div>
          <span className="text-[28px] font-black text-[#ff2b85] tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>foodpanda</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 h-full mx-4">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group h-20 flex items-center">
              <button
                onClick={() => onTabChange(item.id)}
                className={`px-4 text-[15px] font-bold whitespace-nowrap ${
                  activeTab === item.id 
                    ? 'text-black' 
                    : 'text-gray-800 hover:text-panda'
                }`}
              >
                {item.label}
              </button>
              {/* Top line - Active tab has static line, others animate on hover */}
              <div className={`absolute top-0 left-0 h-[3px] bg-[#ff2b85] ${
                activeTab === item.id 
                  ? 'w-full' 
                  : 'w-0 transition-all duration-300 group-hover:w-full'
              }`}></div>
            </div>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            {/* "Choose location" Pill Button */}
            <button className="bg-[#ff2b85] text-white px-8 py-3 rounded-full font-bold text-[15px] shadow-lg shadow-panda/20 hover:bg-[#d70f64] transition-all transform active:scale-95 whitespace-nowrap">
              Choose location
            </button>
            
            {/* Search Icon */}
            <button className="text-gray-900 hover:text-panda transition-colors p-2">
              <i className="fas fa-search text-[20px]"></i>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-gray-600 hover:text-panda transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl p-6 space-y-2 animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left p-4 rounded-2xl text-lg font-bold block transition-all ${
                activeTab === item.id ? 'bg-[#ff2b85]/5 text-[#ff2b85]' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button className="w-full bg-[#ff2b85] text-white py-4 rounded-full font-bold">
              Choose location
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
