import React from 'react';

const PandaAdsSolutions: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      <section className="bg-[#f7f7f7] py-24 md:py-32 px-6 md:px-[10%] border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-[72px] font-black text-[#333e48] leading-[1] tracking-tight text-center md:text-left">Our Solutions</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            From in-app visibility to off-platform reach, we provide a full suite of retail media tools to grow your brand.
          </p>
        </div>
      </section>
      <section className="py-24 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-[2.5rem] p-12 space-y-6 border border-gray-100">
            <h3 className="text-3xl font-black">In-App Advertising</h3>
            <p className="text-gray-600">Banners, search results, and checkout placements that drive immediate conversion.</p>
            <ul className="space-y-4 font-bold text-gray-800">
              <li className="flex items-center gap-3"><i className="fas fa-check text-panda"></i> Native Banners</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-panda"></i> Sponsored Search</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-panda"></i> Push Notifications</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-[2.5rem] p-12 space-y-6 border border-gray-100">
            <h3 className="text-3xl font-black">Offline & Beyond</h3>
            <p className="text-gray-600">Reach customers in the real world through our fleet and packaging solutions.</p>
            <ul className="space-y-4 font-bold text-gray-800">
              <li className="flex items-center gap-3"><i className="fas fa-check text-panda"></i> Sampling</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-panda"></i> Digital Out-of-Home</li>
              <li className="flex items-center gap-3"><i className="fas fa-check text-panda"></i> Branded Collaterals</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PandaAdsSolutions;