import React from 'react';

const PandaAdsFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 px-6 md:px-[10%] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#ff2b85] rounded-xl p-2 flex items-center justify-center">
            <i className="fas fa-paw text-white text-xl"></i>
          </div>
          <span className="text-[28px] font-black text-white tracking-tight">foodpanda</span>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Our company Column */}
          <div className="space-y-6">
            <h3 className="text-base font-black text-white uppercase tracking-wider">Our company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">About foodpanda</a></li>
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* panda ads Column */}
          <div className="space-y-6">
            <h3 className="text-base font-black text-white uppercase tracking-wider">panda ads</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">Retail media solutions</a></li>
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">Media kit generator</a></li>
              <li><a href="#" className="text-[15px] font-black text-white hover:text-[#ff2b85] transition-colors">Case studies</a></li>
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">Industry Insights</a></li>
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">Newsroom</a></li>
              <li><a href="#" className="text-[15px] font-medium text-white hover:text-[#ff2b85] transition-colors">Pau-Pau marketer personality quiz</a></li>
            </ul>
          </div>

          {/* Get in touch Column */}
          <div className="space-y-6">
            <h3 className="text-base font-black text-white uppercase tracking-wider">Get in touch!</h3>
            <div className="pt-2">
              <button className="bg-[#ff2b85] text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#d70f64] transition-all transform active:scale-95 whitespace-nowrap">
                Contact us
              </button>
            </div>
          </div>

          {/* Follow us Column */}
          <div className="space-y-6">
            <h3 className="text-base font-black text-white uppercase tracking-wider">Follow us on</h3>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white text-3xl hover:text-[#ff2b85] transition-all transform hover:scale-110">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-row justify-between items-end pt-12">
          <div className="text-white text-[15px] font-medium">
            Copyright © 2025 foodpanda
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-10 bg-[#ff2b85] text-white flex items-center justify-center rounded-lg hover:bg-[#e02475] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-panda/20"
          >
            <i className="fas fa-chevron-up text-xl"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default PandaAdsFooter;