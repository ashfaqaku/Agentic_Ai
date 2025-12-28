import React from 'react';
import PressReleases from './PressReleases';
import LatestNews from './LatestNews';
import TrendingInsights from './TrendingInsights';

const NewsroomPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Editorial Hero Section */}
      <section className="relative h-[450px] bg-gray-900 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495020689067-958852dbc201?auto=format&fit=crop&q=80&w=2000" 
            alt="Newsroom Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-[10%] w-full max-w-[1400px] mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block bg-[#ff2b85] text-white px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest animate-bounce">
              Official Updates
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
              The Panda<br />Newsroom
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-xl">
              Latest stories, press releases, and industry insights from Asia's leading delivery platform.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
           <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-2xl space-y-4 w-64 animate-float">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-panda">
                <i className="fas fa-rss"></i>
              </div>
              <p className="text-white font-black text-sm">Stay updated with our daily digest.</p>
           </div>
        </div>
      </section>

      {/* 1st Content Section: Press Releases */}
      <PressReleases />

      {/* 2nd Content Section: Filterable News Grid */}
      <LatestNews />

      {/* 3rd Content Section: Deeper Insights */}
      <TrendingInsights />
    </div>
  );
};

export default NewsroomPage;