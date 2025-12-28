import React from 'react';

const StartAdvertisingBanner: React.FC = () => {
  return (
    <section className="bg-[#ff2b85] py-14 px-6 md:px-[10%] my-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-2xl md:text-[40px] font-bold text-white tracking-tight leading-tight text-center md:text-left">
          Start advertising with panda ads today!
        </h2>
        <button className="bg-white text-[#ff2b85] px-12 py-4 rounded-full font-bold text-[18px] shadow-2xl shadow-black/10 hover:bg-gray-50 transition-all transform active:scale-95 whitespace-nowrap">
          Get in touch!
        </button>
      </div>
    </section>
  );
};

export default StartAdvertisingBanner;