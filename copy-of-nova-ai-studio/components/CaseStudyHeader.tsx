import React from 'react';

const CaseStudyHeader: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] py-24 md:py-32 px-6 md:px-[10%]">
      <div className="max-w-7xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-[52px] font-black text-gray-900 tracking-tight leading-tight">
          Discover case studies
        </h1>
        <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-4xl">
          Explore success stories from our brand partners across verticals like CPG (FMCG), banking & finance, travel, retail, and more.
        </p>
      </div>
    </section>
  );
};

export default CaseStudyHeader;