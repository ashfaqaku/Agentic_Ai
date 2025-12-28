import React from 'react';

const UnderArmourCaseStudy: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50 group hover:shadow-panda/10 transition-shadow duration-500">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[#ff2b85] font-black text-sm uppercase tracking-widest">
                SPORTS | BRAND AWARENESS
              </span>
              <h2 className="text-3xl md:text-[42px] font-black text-gray-900 leading-[1.1] tracking-tight">
                Under Armour teamed up with panda ads to drive awareness and brand love
              </h2>
            </div>
            
            <p className="text-gray-600 font-medium leading-relaxed text-lg lg:text-xl">
              Under Armour partnered with panda ads for a situational marketing campaign that took full advantage of the excitement of one of the world’s most-watched sporting events through a full-funnel approach that maximised brand visibility, fan buzz, and connections with audiences at key moments.
            </p>

            <div className="pt-4">
              <button className="bg-[#ff2b85] text-white px-12 py-4 rounded-full font-black text-lg shadow-lg shadow-panda/20 hover:bg-[#d70f64] transition-all transform hover:scale-105 active:scale-95">
                Read more
              </button>
            </div>
          </div>

          {/* Right Side: Visuals */}
          <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[550px] bg-[#ff2b85] overflow-hidden order-1 lg:order-2">
            {/* Pink Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff2b85] to-[#d70f64]"></div>
            
            {/* Floating Visual Elements - Mimicking the screenshot style */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                {/* Scattering sports items */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                
                {/* Mock product placements */}
                <div className="absolute top-[10%] left-[5%] w-48 h-12 bg-black text-white font-black text-[10px] flex items-center justify-center rounded transform -rotate-12 shadow-2xl border border-white/20">
                  PROTECT THIS HOUSE.
                </div>
                
                <div className="absolute top-[30%] left-[20%] w-32 h-40 bg-white shadow-2xl transform rotate-6 flex items-center justify-center rounded-lg border-2 border-gray-100">
                  <div className="text-black font-black text-center text-xs">UA<br/>SHIRT</div>
                </div>

                <div className="absolute bottom-[20%] left-[10%] w-36 h-36 bg-black shadow-2xl transform -rotate-6 rounded-xl border border-white/10 flex items-center justify-center">
                   <div className="text-white font-bold text-center">GYM<br/>BAG</div>
                </div>

                {/* Pau-Pau Mascot */}
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 flex items-end justify-end">
                   <img 
                    src="https://images.unsplash.com/photo-1599305090598-fe179d501c27?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float"
                    alt="Pau-Pau giving thumbs up"
                  />
                  {/* Sparkle effects from screenshot */}
                  <div className="absolute top-1/4 left-1/4 text-yellow-300 text-3xl animate-bounce">✦</div>
                  <div className="absolute top-1/3 left-1/2 text-white text-xl">✨</div>
                </div>

                {/* Accent lightning/sparkle graphics */}
                <div className="absolute top-[20%] right-[30%] text-white text-4xl opacity-50 transform rotate-45">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderArmourCaseStudy;