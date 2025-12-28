import React from 'react';

const MarsCaseStudy: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50 group hover:shadow-panda/10 transition-shadow duration-500">
          {/* Left Side: Product & Phone Visual */}
          <div className="w-full lg:w-3/5 relative h-[350px] lg:h-[480px] bg-[#fff3cc] overflow-hidden">
            {/* Soft gradient background similar to the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff3cc] to-[#ffedaa]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
              <div className="relative w-full h-full flex items-center justify-between gap-4">
                {/* Phone Mockup tilted like the image */}
                <div className="w-1/3 z-20 transform -rotate-6 -translate-x-4">
                  <div className="rounded-[2.5rem] border-[8px] border-black overflow-hidden shadow-2xl bg-white aspect-[9/19]">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
                      className="w-full h-full object-cover" 
                      alt="foodpanda App Interface" 
                    />
                  </div>
                </div>

                {/* Products & Mascot staging area */}
                <div className="w-2/3 relative h-full flex items-end justify-center pb-8">
                  {/* Eclipse Mints representation */}
                  <div className="flex gap-4 items-end">
                    <div className="w-24 h-32 bg-[#FFD700] rounded-lg shadow-lg border-2 border-white transform translate-y-4">
                        <div className="p-2 text-[10px] font-black italic">eclipse</div>
                    </div>
                    <div className="w-20 h-36 bg-[#00A86B] rounded-lg shadow-lg border-2 border-white transform -translate-x-2">
                         <div className="p-2 text-[10px] font-black italic text-white">eclipse</div>
                    </div>
                  </div>
                  
                  {/* Mascot */}
                  <div className="absolute bottom-10 right-0 w-24 h-24 animate-float">
                    <img 
                      src="https://images.unsplash.com/photo-1599305090598-fe179d501c27?auto=format&fit=crop&q=80&w=200" 
                      className="w-full h-full object-contain drop-shadow-lg"
                      alt="Pau-Pau"
                    />
                  </div>

                  {/* Honey & Lemon prop representation */}
                  <div className="absolute bottom-4 left-20 flex items-center gap-2 opacity-80">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white -ml-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-2/5 p-8 md:p-14 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="text-[#ff2b85] font-black text-sm uppercase tracking-widest">
                CPG | PRODUCT LAUNCH
              </span>
              <h2 className="text-3xl md:text-[34px] font-black text-gray-900 leading-tight">
                Mars Wrigley found the perfect audience for its new product with panda ads
              </h2>
            </div>
            
            <p className="text-gray-600 font-medium leading-relaxed text-lg">
              Eclipse mints are made by Mars Wrigley, the world’s leading manufacturer of chocolate, chewing gum, mints and fruity confections. When it came to launching a fresh new product in the range in Hong Kong, they knew they needed a fresh and creative solution. That’s where panda ads came in to serve up the right mix of audience targeting and creative media to get consumers buying.
            </p>

            <div className="pt-2">
              <button className="bg-[#ff2b85] text-white px-10 py-4 rounded-full font-black text-lg shadow-lg shadow-panda/20 hover:bg-[#d70f64] transition-all transform hover:scale-105 active:scale-95">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarsCaseStudy;