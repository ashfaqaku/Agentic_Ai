import React, { useState } from 'react';

const LatestNews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(2);

  const filters = ['All', 'Business', 'Campaigns', 'Editorials', 'Food delivery', 'Infographics'];

  // Synced news items based on your provided screenshots
  const newsItems = [
    {
      category: "APAC",
      title: "Uber Eats 併購 Delivery Hero 旗下之 foodpanda 台灣外送事業",
      date: "14.05.2024",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "APAC",
      title: "foodpanda doubles down on grocery business with house brand bright",
      date: "30.04.2024",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "APAC",
      title: "foodpanda and The Trade Desk partner up to provide brands with data-driven retail media solutions",
      date: "23.04.2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "APAC",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
      date: "17.12.2025",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "APAC",
      title: "foodpanda expands ‘panda hearts’ programme, reports 30% drop in rider accidents across Asia",
      date: "25.11.2025",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "APAC",
      title: "foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships across Asia",
      date: "21.11.2025",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', 13];

  return (
    <section className="py-16 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header and Filters Bar matching the screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <h2 className="text-3xl md:text-[42px] font-black text-[#333e48] tracking-tight">
            Discover latest news
          </h2>
          
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 ${
                  activeFilter === filter
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-white text-gray-800 border-gray-800 hover:border-panda hover:text-panda'
                }`}
              >
                {filter}
              </button>
            ))}
            <button className="px-6 py-2 rounded-full font-bold text-sm text-[#ff2b85] border-2 border-[#ff2b85] hover:bg-[#ff2b85] hover:text-white transition-all">
              Show more
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-300 bg-[#f4f7f9]">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={item.title}
                />
              </div>

              <div className="flex flex-col flex-1 space-y-4">
                <span className="text-[#ff2b85] font-black text-sm uppercase tracking-widest">
                  {item.category}
                </span>
                
                <h3 className="text-2xl md:text-[26px] font-black text-gray-900 leading-[1.2] tracking-tight group-hover:text-panda transition-colors line-clamp-4 min-h-[120px]">
                  {item.title}
                </h3>
                
                <div className="mt-auto pt-4">
                  <span className="text-gray-400 font-bold text-sm">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center gap-1 pt-12 pb-8">
          {pages.map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-400 font-bold select-none">...</span>
              ) : (
                <button
                  onClick={() => setCurrentPage(Number(page))}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    currentPage === page 
                      ? 'bg-[#e5e7eb] text-gray-900' 
                      : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;