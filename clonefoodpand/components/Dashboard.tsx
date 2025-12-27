import React from 'react';
import { AppTab } from '../types/types';

interface DashboardProps {
  onNavigate: (tab: AppTab) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const newsItems = [
    {
      category: "Merchants",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
      date: "17.12.2025",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Press Releases",
      title: "foodpanda expands 'panda hearts' programme, reports 30% drop in rider accidents across Asia",
      date: "25.11.2025",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Business",
      title: "foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships across Asia",
      date: "21.11.2025",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Press Releases",
      title: "foodpanda Singapore strengthens support for delivery partners through signed MOU with NTA",
      date: "25.04.2025",
      image: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "News",
      title: "Sustainability at foodpanda: How we're reducing our carbon footprint in 2025",
      date: "12.03.2025",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    }
  ];

return (
  <div className="relative min-h-[70vh]">
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* 1. Main Hero Section - FIXED */}
      <div className="absolute inset-0 w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source 
            src="https://player.vimeo.com/progressive_redirect/playback/887673049/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=01e93bdd482c18d9e437c0cfc867ddf242690ae4e9819149a92bd5c8046f8e7e" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark overlay - text readable banane ke liye */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Hero Text - Directly on top of video */}
      <div className="relative z-10 min-h-screen flex items-start md:items-center justify-left px-6 md:px-[10%] pt-32 md:pt-0 mt-[-100px]">
        <h1 className="text-white text-left text-5xl md:text-7xl font-bold leading-tight">
          food<br />
          and groceries<br />
          in a tap
        </h1>
      </div>
    </section>

    {/* Rest of your code remains same... */}
  
    

      {/* 2. Brand Mission Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-[10%]">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-[56px] font-black text-gray-900 leading-[1.1] tracking-tight">
            We’re here to help you<br />
            live life the panda way.<br />
            Spend more time doing what you love –<br />
            we’ll take care of tasty meals, fresh<br />
            groceries and new flavours.
          </h2>
          
          <div className="pt-12">
             <button 
               onClick={() => onNavigate(AppTab.ABOUT)}
               className="btn-panda px-10 py-4 rounded-xl font-black text-lg shadow-xl shadow-panda/20 hover:scale-105 transition-transform"
             >
               Explore AI Lab
             </button>
          </div>
        </div>
      </section>

      {/* 3. Next Generation of Delivery */}
      <section className="bg-white py-16 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative bg-[#f0a1c2]/50 rounded-[2rem] aspect-[16/9] flex items-center justify-center overflow-hidden p-8 md:p-12">
            <div className="relative flex items-center justify-center h-full w-full">
              <div className="absolute left-[15%] top-[10%] w-[45%] h-[90%] bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform -rotate-12 translate-x-4">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="App UI 1" />
              </div>
              <div className="absolute left-[35%] top-[5%] w-[45%] h-[90%] bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform -rotate-6 z-10">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="App UI 2" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-[54px] font-black text-gray-900 leading-[1.05] tracking-tight">
              Meet the next<br />
              generation of delivery!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.
            </p>
            <div className="pt-4">
              <button onClick={() => onNavigate(AppTab.ABOUT)} className="bg-panda text-white px-10 py-3.5 rounded-full font-black text-lg transition-all shadow-xl shadow-panda/20 hover:bg-panda/90">
                About
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Taste the Convenience */}
      <section className="bg-white py-16 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Taste the convenience.
            </h2>
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed font-medium">
              Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               <button className="bg-black hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 shadow-md">
                 <i className="fab fa-apple text-white text-2xl"></i>
                 <div className="text-left">
                   <p className="text-[10px] text-white/70 font-bold uppercase leading-none">Download on the</p>
                   <p className="text-sm text-white font-black leading-tight">App Store</p>
                 </div>
               </button>
               <button className="bg-black hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 shadow-md">
                 <i className="fab fa-google-play text-white text-xl"></i>
                 <div className="text-left">
                   <p className="text-[10px] text-white/70 font-bold uppercase leading-none">GET IT ON</p>
                   <p className="text-sm text-white font-black leading-tight">Google Play</p>
                 </div>
               </button>
               <button className="bg-black hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 shadow-md">
                 <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <i className="fas fa-shopping-bag text-white text-[10px]"></i>
                 </div>
                 <div className="text-left">
                   <p className="text-[10px] text-white/70 font-bold uppercase leading-none">EXPLORE IT ON</p>
                   <p className="text-sm text-white font-black leading-tight">AppGallery</p>
                 </div>
               </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
             <img src="https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=1200" alt="Foodpanda Delivery" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* 5. Find the job you'd love */}
      <section className="bg-white py-24 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Working at foodpanda" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Find the job you’d love
            </h2>
            <p className="text-lg font-bold text-gray-800">
              Hungry to make a difference? There’s a seat at our table!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda.
            </p>
            <div className="pt-4">
              <button onClick={() => onNavigate(AppTab.CAREERS)} className="bg-[#ff2b85] text-white px-10 py-3.5 rounded-full font-black text-lg transition-all shadow-xl shadow-panda/20 hover:bg-[#e02475]">
                Join us!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Have you heard? - Moving News Section */}
      <section className="bg-white py-24 border-t border-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
             Have you heard?
           </h2>
           <p className="text-gray-500 max-w-2xl mx-auto font-medium">
             The industry is changing fast! Stay up to date with foodpanda press. Catch up on the latest news, updates and reports here.
           </p>
        </div>

        <div className="relative group overflow-hidden py-4">
          <div className="animate-marquee flex gap-8">
            {newsItems.map((news, idx) => (
              <div key={`news-1-${idx}`} className="relative w-80 h-[480px] rounded-[2rem] overflow-hidden flex-shrink-0 group/card shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={news.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" alt={news.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                   <span className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-3 bg-white/10 w-fit px-2 py-0.5 rounded backdrop-blur-sm">
                     {news.category}
                   </span>
                   <h3 className="text-lg font-black text-white leading-[1.3] line-clamp-4">
                     {news.title}
                   </h3>
                   <span className="text-[11px] text-white/40 mt-4 font-bold tracking-wider">
                     {news.date}
                   </span>
                </div>
              </div>
            ))}
            {newsItems.map((news, idx) => (
              <div key={`news-2-${idx}`} className="relative w-80 h-[480px] rounded-[2rem] overflow-hidden flex-shrink-0 group/card shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={news.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" alt={news.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                   <span className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-3 bg-white/10 w-fit px-2 py-0.5 rounded backdrop-blur-sm">
                     {news.category}
                   </span>
                   <h3 className="text-lg font-black text-white leading-[1.3] line-clamp-4">
                     {news.title}
                   </h3>
                   <span className="text-[11px] text-white/40 mt-4 font-bold tracking-wider">
                     {news.date}
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
           <button className="bg-panda text-white px-8 py-3 rounded-full font-black text-sm shadow-xl shadow-panda/20 hover:scale-105 transition-transform">
             All newsroom
           </button>
        </div>
      </section>

      {/* 7. Feed your team - Corporate Solutions Section */}
      <section className="bg-white py-24 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Feed your team.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-lg">
              Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => onNavigate(AppTab.PARTNERS)}
                className="bg-[#ff2b85] text-white px-10 py-3.5 rounded-full font-black text-lg transition-all shadow-xl shadow-panda/20 hover:bg-[#e02475]"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50 relative group">
             <img 
               src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200" 
               alt="Corporate Food Delivery"
               className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 shadow-2xl transform transition-transform group-hover:scale-110">
                   <div className="bg-panda w-12 h-12 rounded-lg flex items-center justify-center">
                      <i className="fas fa-briefcase text-white text-xl"></i>
                   </div>
                   <div>
                      <p className="text-sm font-black text-gray-900 leading-tight">foodpanda</p>
                      <p className="text-sm font-bold text-gray-500">for business</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;