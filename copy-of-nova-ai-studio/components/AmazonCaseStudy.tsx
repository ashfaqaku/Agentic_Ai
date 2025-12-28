import React from 'react';

const AmazonCaseStudy: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50 group hover:shadow-panda/10 transition-shadow duration-500">
          {/* Right Side: Image with specific branding */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[500px] bg-[#ff2b85] overflow-hidden">
            {/* Split background effect like screenshot */}
            <div className="absolute inset-0 flex">
              <div className="w-1/3 h-full bg-[#00A8E1]"></div> {/* Amazon Blue */}
              <div className="w-2/3 h-full bg-[#ff2b85]"></div> {/* Panda Pink */}
            </div>
            
            {/* Visual elements */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-center justify-between">
                {/* Mascot Placeholder */}
                <div className="w-1/3 transform -translate-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1599305090598-fe179d501c27?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                    alt="Pau-Pau mascot"
                  />
                </div>
                
                {/* Phone Mockups */}
                <div className="w-2/3 flex gap-4 transform translate-x-4">
                  <div className="w-1/2 rounded-[2rem] border-[6px] border-black overflow-hidden shadow-2xl bg-white aspect-[9/19]">
                    <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="App Preview 1" />
                  </div>
                  <div className="w-1/2 rounded-[2rem] border-[6px] border-black overflow-hidden shadow-2xl bg-white aspect-[9/19] mt-8">
                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="App Preview 2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Circle */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#00A8E1] rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-[#ff2b85] font-black text-sm uppercase tracking-widest">
                ENTERTAINMENT | ACQUISITION
              </span>
              <h2 className="text-3xl md:text-[42px] font-black text-gray-900 leading-[1.1] tracking-tight">
                Amazon Prime Video and foodpanda's impressive entertainment strategy
              </h2>
            </div>
            
            <p className="text-gray-600 font-medium leading-relaxed text-lg lg:text-xl">
              We have all experienced the combination of binge watching while munching on our favourite snacks and meals during the holiday season. The entertainment giant decided to jump on board foodpanda's platform to raise the brand's visibility in the lives of the local people.
            </p>

            <div className="pt-4">
              <button className="bg-[#ff2b85] text-white px-12 py-4 rounded-full font-black text-lg shadow-lg shadow-panda/20 hover:bg-[#d70f64] transition-all transform hover:scale-105 active:scale-95">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazonCaseStudy;