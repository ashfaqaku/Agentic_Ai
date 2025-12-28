import React, { useState } from 'react';
import { PandaAdsSubTab } from '../types';

interface PandaAdsHeaderProps {
  activeSubTab: string;
  onSubTabChange: (tab: any) => void;
  isResourcesOpen: boolean;
  setIsResourcesOpen: (open: boolean) => void;
  onHomeClick: () => void;
}

const PandaAdsHeader: React.FC<PandaAdsHeaderProps> = ({ 
  activeSubTab, 
  onSubTabChange, 
  isResourcesOpen, 
  setIsResourcesOpen,
  onHomeClick
}) => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'resources', label: 'Resources', hasDropdown: true },
    { id: 'tools', label: 'Tools', hasDropdown: true },
  ];

  const resourceLinks = [
    { id: 'insights', label: 'Insights' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'newsroom', label: 'Newsroom' },
  ];

  const toolLinks = [
    { id: 'media-kit', label: 'Media Kit Generator' },
    { id: 'personality-quiz', label: 'Marketer personality quiz' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 h-20 px-6 md:px-[10%] flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <button 
          onClick={onHomeClick} 
          className="flex items-center gap-1.5 outline-none hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl md:text-[28px] font-bold text-[#ff2b85] tracking-tight">panda</span>
          <span className="text-2xl md:text-[28px] font-light text-[#ff2b85]">ads</span>
        </button>
      </div>

      <div className="flex items-center gap-6 md:gap-10 h-full">
        <div className="hidden lg:flex items-center h-full">
          {navItems.map((item) => {
            const isResourcesActive = item.id === 'resources' && ['insights', 'case-studies', 'newsroom'].includes(activeSubTab);
            const isToolsActive = item.id === 'tools' && ['media-kit', 'personality-quiz'].includes(activeSubTab);
            const isActive = activeSubTab === item.id || isResourcesActive || isToolsActive;

            return (
              <div 
                key={item.id} 
                className="relative h-20 flex items-center"
                onMouseEnter={() => {
                  if (item.id === 'resources') setIsResourcesOpen(true);
                  if (item.id === 'tools') setIsToolsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.id === 'resources') setIsResourcesOpen(false);
                  if (item.id === 'tools') setIsToolsOpen(false);
                }}
              >
                <button 
                  onClick={() => !item.hasDropdown && onSubTabChange(item.id)}
                  className={`px-4 text-[14px] md:text-[15px] font-bold transition-all h-full flex items-center ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-panda'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-panda animate-in slide-in-from-top-1 duration-200"></div>
                  )}
                  {item.label}
                  {item.hasDropdown && (
                    <i className={`fas fa-chevron-down ml-2 text-[10px] transition-transform duration-200 ${
                      (item.id === 'resources' && isResourcesOpen) || (item.id === 'tools' && isToolsOpen) ? 'rotate-180' : ''
                    }`}></i>
                  )}
                </button>

                {item.id === 'resources' && isResourcesOpen && (
                  <div className="absolute top-20 left-0 w-48 bg-white shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                    {resourceLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => {
                          onSubTabChange(link.id);
                          setIsResourcesOpen(false);
                        }}
                        className={`w-full text-left px-6 py-4 text-[15px] font-bold transition-colors ${
                          activeSubTab === link.id ? 'text-panda bg-gray-50' : 'text-black hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}

                {item.id === 'tools' && isToolsOpen && (
                  <div className="absolute top-20 left-0 w-64 bg-white shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                    {toolLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => {
                          onSubTabChange(link.id);
                          setIsToolsOpen(false);
                        }}
                        className={`w-full text-left px-6 py-4 text-[15px] font-bold transition-colors ${
                          activeSubTab === link.id ? 'text-panda bg-gray-50' : 'text-black hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="bg-[#ff2b85] text-white px-6 md:px-8 py-2.5 rounded-full font-bold text-[14px] md:text-[15px] shadow-sm hover:bg-[#d70f64] transition-all transform active:scale-95">
            Contact us
          </button>
          <button className="text-gray-900 hover:text-panda transition-colors p-2">
            <i className="fas fa-search text-[18px]"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PandaAdsHeader;