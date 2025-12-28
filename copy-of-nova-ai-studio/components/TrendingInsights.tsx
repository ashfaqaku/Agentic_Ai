import React from 'react';

const TrendingInsights: React.FC = () => {
  const insightItems = [
    {
      title: "6 Ways to reach high-value customers with panda ads",
      date: "08.08.2024",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Retail media 101: The new frontier in digital advertising",
      date: "30.07.2024",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "APAC food delivery and Q-commerce insights",
      date: "30.07.2024",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="pb-24 px-6 md:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={item.title}
                />
              </div>

              {/* Content Section */}
              <div className="bg-[#f4f7f9] p-8 flex-1 flex flex-col justify-between space-y-8">
                <h3 className="text-2xl font-black text-[#333e48] leading-tight group-hover:text-panda transition-colors">
                  {item.title}
                </h3>
                <span className="text-gray-500 font-bold text-sm">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingInsights;