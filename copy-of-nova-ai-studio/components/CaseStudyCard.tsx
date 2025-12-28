import React from 'react';

interface CaseStudyCardProps {
  vertical: string;
  title: string;
  desc: string;
  img: string;
  stats: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ vertical, title, desc, img, stats }) => {
  return (
    <div className="group cursor-pointer space-y-8 bg-white rounded-[2rem] border border-gray-100 p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] relative">
        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
        <div className="absolute top-4 right-4 bg-panda text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
          {stats}
        </div>
      </div>
      <div className="px-2 space-y-4">
        <span className="text-xs font-black text-panda uppercase tracking-widest">{vertical}</span>
        <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-panda transition-colors">{title}</h3>
        <p className="text-gray-500 font-medium leading-relaxed line-clamp-3">{desc}</p>
        <button className="text-panda font-black flex items-center gap-2 group-hover:gap-4 transition-all">
          Read case study <i className="fas fa-arrow-right text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;