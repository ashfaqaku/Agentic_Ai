import React from 'react';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50 group hover:shadow-panda/10 transition-shadow duration-500">
          {/* Left: Image Side */}
          <div className="w-full lg:w-3/5 relative h-[300px] lg:h-[450px] bg-[#ff2b85] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-1000"
              alt="Coca-Cola Better with Coke Campaign"
            />
            {/* Graphic overlay to mimic the #BetterWithCoke aesthetic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-white px-8">
                <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl mb-4 border border-white/30">
                  <span className="text-4xl font-black italic">#BetterWithCoke</span>
                </div>
                <p className="text-xl font-bold drop-shadow-lg">Enjoy magical meals with your loved ones</p>
              </div>
            </div>
            {/* Mock Floating elements */}
            <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded-xl shadow-lg border border-white">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-panda rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-percent"></i>
                 </div>
                 <span className="font-black text-gray-800">Up to ₱100 off</span>
               </div>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-[#ff2b85] font-black text-sm uppercase tracking-widest">
                CPG | AWARENESS & SALES
              </span>
              <h2 className="text-3xl md:text-[36px] font-black text-gray-900 leading-tight">
                Driving growth: Coca-Cola leveraged retail media channels to boost sales
              </h2>
            </div>
            
            <p className="text-gray-600 font-medium leading-relaxed text-lg">
              While The Coca-Cola Company has numerous ongoing partnerships with foodpanda in the Philippines, one campaign that really stood out in increasing the brand's penetration, transactions and sales across online and offline platforms was its #BetterwithCoke campaign on foodpanda.
            </p>

            <div className="pt-4">
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

export default FeaturedCaseStudy;