import React from 'react';
import { AppTab } from '../types';
import LatestNews from './LatestNews';

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
  ]

  return (
    
     <div className="relative min-h-[70vh]">
      <section className="relative w-full h-[70vh] overflow-hidden bg-white ">
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
      {/* 2. Latest News (Added here as per request) */}
      
      {/* 2. Brand Mission Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-[10%] mt-[-50px]">
        <div className="max-w-5xl">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.2] md:leading-[1.2] tracking-tight">
            We’re here to help you<br />
            live life the panda way.<br />
            Spend more time doing what you love –<br />
            we’ll take care of tasty meals, fresh<br />
            groceries and new flavours.
          </h2>
        </div>
      </section>

      {/* 3. Next Generation of Delivery */}
      <section className="bg-white py-16 px-6  border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 relative rounded-[2rem]  flex items-center justify-center overflo">
            <img loading="lazy" decoding="async" width="912" height="513" src="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home.webp" data-lazy-type="image" data-src="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home.webp" alt="" className="wp-image-3855 size-full lazy-loaded" srcSet="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home.webp 912w, https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home-900x506.webp 900w, https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home-768x432.webp 768w, https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home-90x51.webp 90w" data-srcset="" sizes="auto, (max-width: 912px) 100vw, 912px"></img>
          </div>
          <div className="w-full lg:w-1/2 space-y-2">
            <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-normal text-gray-900 leading-[1.05] tracking-tight">
              Meet the next<br />
              generation of delivery!
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-5">
          <div className=" w-full lg:w-1/2 space-y-2">
            <h2 className=" ml-[-20px] text-4xl md:text-5xl font-bold text-gray-900 tracking-tight flex flex-nowrap whitespace-nowrap">
              Taste the convenience.
            </h2>
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed font-medium">
              Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-black hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-1 border border-white/10 shadow-md">
                <i className="fab fa-apple  text-xl text-white"></i>
                <div className="text-left">
                  <p className="text-[10px] text-white/70 font-bold uppercase leading-none">Download on the</p>
                  <p className="text-sm text-white font-black leading-tight">App Store</p>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-1 border border-white/10 shadow-md">
                <i className="fab fa-google-play text-white text-lg"></i>
                <div className="text-left">
                  <p className="text-[10px] text-white/70 font-bold uppercase leading-none">GET IT ON</p>
                  <p className="text-sm text-white font-black leading-tight">Google Play</p>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-1 border border-white/10 shadow-md">
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

            <img
              loading="lazy"
              decoding="async"
              width="1024"
              height="576"
              src="https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2.webp"
              data-lazy-type="image"
              data-src="https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2.webp"
              alt="Food delivery"
              className="wp-image-3856 size-full lazy-loaded"
              srcSet="https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2.webp 1024w, https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2-900x506.webp 900w, https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2-768x432.webp 768w, https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2-90x51.webp 90w"
              data-srcset=""
              sizes="auto, (max-width: 1024px) 100vw, 1024px"
            />
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
              src="app/assets/images/feedyourteam.png"
              alt="Corporate Food Delivery"
            /></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
