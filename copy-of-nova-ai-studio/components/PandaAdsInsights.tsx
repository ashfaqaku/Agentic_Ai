import React from 'react';

const PandaAdsInsights: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* 1. Header Section */}
      <section className="bg-[#f8f9fa] py-24 md:py-32 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-[52px] font-black text-gray-900 tracking-tight leading-tight">
            Discover the latest insights
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Tap into the pulse of the advertising industry with the latest trends and consumer insights.
          </p>
        </div>
      </section>

      {/* 2. Featured Downloads Section */}
      <section className="py-16 px-6 md:px-[10%] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group space-y-8">
            <div className="aspect-[2/1] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 relative">
               <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Whitepaper" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 leading-tight">Whitepaper: Retail media – the revolution of advertising in Asia</h3>
              <button className="bg-[#ff2b85] text-white px-10 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#d70f64] transition-all transform hover:scale-105 shadow-lg shadow-panda/10">Download</button>
            </div>
          </div>
          <div className="group space-y-8">
            <div className="aspect-[2/1] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 relative bg-[#ff2b85]">
               <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Report" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-white px-8">
                    <h4 className="text-3xl font-black mb-2">Delivery & retail trends in APAC</h4>
                    <p className="text-sm font-bold opacity-80">Insights on customers' purchasing behaviors</p>
                  </div>
               </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 leading-tight">Report: Delivery & retail trends in APAC 2023</h3>
              <button className="bg-[#ff2b85] text-white px-10 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#d70f64] transition-all transform hover:scale-105 shadow-lg shadow-panda/10">Download</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pink CTA Banner Section */}
      <section className="bg-[#ff2b85] py-14 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-[40px] font-bold text-white tracking-tight leading-tight text-center md:text-left">
            Start advertising with panda ads today!
          </h2>
          <button className="bg-white text-[#ff2b85] px-12 py-4 rounded-full font-bold text-[18px] shadow-2xl shadow-black/10 hover:bg-gray-50 transition-all transform active:scale-95 whitespace-nowrap">
            Get in touch!
          </button>
        </div>
      </section>
    </div>
  );
};

export default PandaAdsInsights;