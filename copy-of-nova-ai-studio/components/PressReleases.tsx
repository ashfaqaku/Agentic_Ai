import React from 'react';

const PressReleases: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-[64px] font-black text-gray-800 tracking-tight">
          Press Releases
        </h2>

        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer border border-gray-100">
          {/* Left Side: Image Area */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[450px] bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden flex items-end justify-center">
            {/* Dots Pattern Overlay */}
            <div className="absolute left-8 bottom-8 flex flex-wrap w-24 gap-2 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
              ))}
            </div>
            
            {/* Person Image */}
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
              className="relative z-10 w-[70%] h-[90%] object-contain" 
              alt="Person using phone"
            />
            
            {/* Floating UI Elements from screenshot */}
            <div className="absolute top-1/3 left-12 w-10 h-10 border-2 border-white/20 rounded-xl"></div>
          </div>

          {/* Right Side: Content Area */}
          <div className="w-full lg:w-1/2 bg-[#f4f7f9] p-10 md:p-16 flex flex-col justify-center relative">
            {/* Central Icon */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:flex w-24 h-24 bg-white rounded-full border border-gray-100 shadow-xl items-center justify-center z-20">
               <div className="w-16 h-16 rounded-full bg-gray-400/20 flex items-center justify-center text-gray-500 text-3xl">
                 <i className="fas fa-eye"></i>
               </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[#ff2b85] font-black text-sm uppercase tracking-widest">
                  INDUSTRY INSIGHTS
                </span>
                <span className="text-gray-400 font-bold text-sm">11 Dec 2024</span>
              </div>
              
              <h3 className="text-3xl md:text-[40px] font-black text-[#333e48] leading-[1.1] tracking-tight group-hover:text-panda transition-colors">
                Maximising omnichannel campaigns with retail media networks
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReleases;