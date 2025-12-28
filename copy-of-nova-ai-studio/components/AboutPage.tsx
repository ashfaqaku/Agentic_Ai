import React, { useState } from 'react';
import { AppTab } from '../types';

interface AboutPageProps {
  onNavigate: (tab: AppTab) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    { title: "prioritise, decide, deliver", image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/prioritise.819c9e0c.png" },
    { title: "customer first", image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/customer.3789439e.png" },
    { title: "own it end-to-end", image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/ownership.a95e7c10.png" },
    { title: "challenge status quo", image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/challenge.09452295.png" },
    { title: "we before me", image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/we-before-me.3c60467c.png" },
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700 bg-white">
      {/* Pink Gradient Hero */}
      <section className="relative h-[550px] bg-panda flex items-center px-6 md:px-[10%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <img 
          src="https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/hero.81056501.jpg" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" 
          alt="About Hero"
        />
        <div className="relative z-10">
          <h1 className="text-white text-6xl md:text-[100px] font-black leading-[0.8] tracking-tight">
            About<br />foodpanda
          </h1>
        </div>
      </section>

      {/* Mission Text */}
      <section className="py-32 px-6 md:px-[10%] max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-[#333e48] mb-12">Dedicated to joy.</h2>
        <div className="space-y-8 text-xl text-gray-600 font-medium leading-relaxed">
          <p>foodpanda launched in Singapore in 2014 as a food delivery platform. Today, we are the leading delivery platform in Asia-Pacific, dedicated to bringing customers a wide range of food, groceries and more, quickly and conveniently.</p>
          <p>Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f8f9fa] py-32 px-6 md:px-[10%] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-5xl font-black text-center text-[#333e48]">Our values</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-4">
                {values.map((v, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveValue(i)}
                    className={`w-full text-left p-6 rounded-2xl font-black text-xl md:text-2xl uppercase transition-all ${activeValue === i ? 'bg-black text-white shadow-2xl' : 'text-panda hover:bg-panda/5'}`}
                  >
                    {v.title}
                  </button>
                ))}
             </div>
             <div className="bg-[#fff0f6] rounded-[3rem] aspect-square flex items-center justify-center p-20 shadow-inner">
                <img src={values[activeValue].image} className="w-full h-full object-contain animate-in zoom-in-95 duration-500" alt="Value Visual" />
             </div>
          </div>
        </div>
      </section>

      {/* Rider Section */}
      <section className="py-32 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-10">
            <h2 className="text-5xl font-black">Our riders are our heroes.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">We’re here to provide exciting opportunities and empower work flexibility. Learn more about our riders’ journey or sign up to become one.</p>
            <button className="bg-[#ff2b85] text-white px-10 py-4 rounded-full font-black text-lg">Sign up now</button>
          </div>
          <div className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1200" alt="Rider" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;