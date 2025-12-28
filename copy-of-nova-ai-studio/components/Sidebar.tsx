
import React from 'react';
import { AppTab } from '../types';

interface SidebarProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  // Fix: map menu items to correct AppTab enum values defined in types.ts
  const menuItems = [
    { id: AppTab.HOME, label: 'Overview', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: AppTab.ABOUT, label: 'Chat Lab', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { id: AppTab.NEWSROOM, label: 'Vision Lab', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: AppTab.PARTNERS, label: 'Image Studio', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: AppTab.PANDA_ADS, label: 'Voice Lab', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
  ];

  return (
    <aside className="w-20 md:w-64 glass h-full flex flex-col border-r border-white/5 z-20 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="hidden md:block font-bold text-xl tracking-tight gradient-text">Nova AI</h1>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
              activeTab === item.id 
                ? 'bg-indigo-600/20 text-indigo-400 shadow-sm shadow-indigo-500/10' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
            <span className="hidden md:block font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="hidden md:flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden">
             <img src="https://picsum.photos/32/32" alt="Avatar" />
          </div>
          <div className="flex-1 text-sm overflow-hidden">
            <p className="font-medium text-white truncate">Pro Member</p>
            <p className="text-slate-400 truncate text-xs">Standard Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
