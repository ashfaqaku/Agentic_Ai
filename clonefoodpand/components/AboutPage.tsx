import React, { useState, useEffect } from 'react';
import { AppTab } from '../types/types';

interface AboutPageProps {
  onNavigate?: (tab: AppTab) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeValue, setActiveValue] = useState(5); // Default to 'plan for tomorrow'

  const slides = [
    {
      title: "Our riders are our heroes",
      description: "We’re here to provide exciting opportunities and empower work flexibility. Learn more about our riders’ journey or sign up to become one.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Work on your own terms",
      description: "Be your own boss. Choose your own hours and earn competitive pay while delivering joy to customers across your city.",
      image: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Join our global community",
      description: "Become part of a diverse network of thousands of riders. We support you with the best-in-class equipment and safety training.",
      image: "https://images.unsplash.com/photo-1616421275384-a4871cf679d2?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const values = [
    { 
      id: 0, 
      text: "prioritise, decide, deliver", 
      title: "prioritise, decide, deliver",
      image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/prioritise.819c9e0c.png"
    },
    { 
      id: 1, 
      text: "start with customer, end with customer", 
      title: "start with customer, end with customer",
      image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/customer.3789439e.png"
    },
    { 
      id: 2, 
      text: "own it end-to-end", 
      title: "own it end-to-end",
      image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/ownership.a95e7c10.png"
    },
    { 
      id: 3, 
      text: "challenge the status quo", 
      title: "challenge the status quo",
      image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/challenge.09452295.png"
    },
    { 
      id: 4, 
      text: "we before me", 
      title: "we before me",
      image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/we-before-me.3c60467c.png"
    },
    { 
      id: 5, 
      text: "plan for tomorrow, focus on today", 
      title: "plan for tomorrow, focus on today",
      image: "https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/plan.65be009e.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="flex flex-col animate-in fade-in duration-700 bg-white">
      {/* 1. Hero Section */}
      <section 
        className="relative w-full h-[500px] flex items-center px-[10%] bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%), url('https://micro-frontends.foodpanda.com/about-foodpanda/v1/static/media/hero.81056501.jpg')`,
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="relative z-10">
          <h1 className="text-white font-black text-6xl md:text-[80px] leading-[0.9] tracking-tight">
            About<br />
            foodpanda
          </h1>
        </div>
      </section>

      {/* 2. From food delivery to your daily convenience companion */}
      <section className="bg-white py-24 px-6 md:px-[10%]">
        <div className="max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-[54px] font-black text-gray-900 leading-[1.05] tracking-tight">
            From food delivery to your<br />
            daily convenience companion.
          </h2>
          <div className="space-y-8 text-[17px] text-gray-700 leading-relaxed font-medium">
            <p>
              A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform. 
              Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of 
              customers in APAC.
            </p>
            <p>
              Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in 
              more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, 
              Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.
            </p>
            <p>
              Thanks to dedicated partners, riders, and a team united by shared values, foodpanda is now providing 
              millions with a convenient way to get food and groceries in a few taps.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our riders are our heroes (Carousel) */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-[10%] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%] space-y-10 z-10">
            <div className="space-y-6 min-h-[220px]">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                {slides[activeSlide].title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-md">
                {slides[activeSlide].description}
              </p>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
               <button 
                 onClick={prevSlide}
                 className="text-panda hover:opacity-70 transition-opacity text-2xl"
               >
                 <i className="fas fa-long-arrow-alt-left"></i>
               </button>
               
               <div className="flex items-center gap-3">
                 {slides.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setActiveSlide(i)}
                     className={`w-2 h-2 rounded-full transition-all ${
                       i === activeSlide ? 'bg-black w-3' : 'bg-gray-300'
                     }`}
                   />
                 ))}
               </div>

               <button 
                 onClick={nextSlide}
                 className="text-panda hover:opacity-70 transition-opacity text-2xl"
               >
                 <i className="fas fa-long-arrow-alt-right"></i>
               </button>
            </div>
          </div>

          <div className="w-full lg:w-[55%] relative group">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] lg:aspect-[1.5/1]">
              <img 
                src={slides[activeSlide].image} 
                className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
                alt="foodpanda rider" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Values (Interactive Section) */}
      <section className="bg-white py-24 px-6 md:px-[10%] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-[54px] font-black text-[#333e48] tracking-tight mb-16">Our values</h2>
          
          {/* Button Pill Grid */}
          <div className="flex flex-col items-center gap-5 mb-24">
            <div className="flex justify-center">
              <button 
                onClick={() => setActiveValue(0)}
                className={`px-8 py-3 rounded-full border transition-all duration-300 font-bold text-lg md:text-xl transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase ${activeValue === 0 ? 'bg-black text-white border-black shadow-xl' : 'border-gray-200 text-panda hover:bg-panda/5'}`}
              >
                {values[0].text}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <button 
                onClick={() => setActiveValue(1)}
                className={`px-8 py-3 rounded-full border transition-all duration-300 font-bold text-lg md:text-xl transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase ${activeValue === 1 ? 'bg-black text-white border-black shadow-xl' : 'border-gray-200 text-panda hover:bg-panda/5'}`}
              >
                {values[1].text}
              </button>
              <button 
                onClick={() => setActiveValue(2)}
                className={`px-8 py-3 rounded-full border transition-all duration-300 font-bold text-lg md:text-xl transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase ${activeValue === 2 ? 'bg-black text-white border-black shadow-xl' : 'border-gray-200 text-panda hover:bg-panda/5'}`}
              >
                {values[2].text}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <button 
                onClick={() => setActiveValue(3)}
                className={`px-8 py-3 rounded-full border transition-all duration-300 font-bold text-lg md:text-xl transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase ${activeValue === 3 ? 'bg-black text-white border-black shadow-xl' : 'border-gray-200 text-panda hover:bg-panda/5'}`}
              >
                {values[3].text}
              </button>
              <button 
                onClick={() => setActiveValue(4)}
                className={`px-8 py-3 rounded-full border transition-all duration-300 font-bold text-lg md:text-xl transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase ${activeValue === 4 ? 'bg-black text-white border-black shadow-xl' : 'border-gray-200 text-panda hover:bg-panda/5'}`}
              >
                {values[4].text}
              </button>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => setActiveValue(5)}
                className={`px-8 py-3 rounded-full border transition-all duration-300 font-bold text-lg md:text-xl transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase ${activeValue === 5 ? 'bg-black text-white border-black shadow-xl' : 'border-gray-200 text-panda hover:bg-panda/5'}`}
              >
                {values[5].text}
              </button>
            </div>
          </div>

          {/* Sliding Content Container */}
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeValue * 100}%)` }}
            >
              {values.map((v) => (
                <div key={v.id} className="w-full flex-shrink-0 flex flex-col items-center">
                   <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 text-left px-4 md:px-12 w-full pt-10">
                     {/* Left side: Heading */}
                     <div className="w-full md:w-[45%] animate-in fade-in slide-in-from-left-8 duration-700">
                        <h3 className="text-4xl md:text-[54px] font-black text-[#333e48] leading-[1.05] tracking-tight">
                          {v.title}
                        </h3>
                     </div>

                     {/* Right side: Illustration */}
                     <div className="w-full md:w-[55%] flex justify-center">
                       <div className="relative w-full max-w-[500px] aspect-square rounded-[3.5rem] bg-[#fff0f6] overflow-hidden shadow-sm flex items-center justify-center p-8 animate-in fade-in slide-in-from-right-8 duration-700">
                          <img 
                            src={v.image} 
                            alt={v.title}
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute top-12 right-12 text-panda opacity-20">
                            <i className="fas fa-sparkles text-3xl"></i>
                          </div>
                          <div className="absolute bottom-12 left-12 text-panda opacity-20">
                            <i className="fas fa-star text-2xl"></i>
                          </div>
                       </div>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Join the Panda Team Section (New Screenshot Content) */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-[10%] border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-gray-900 leading-[1] tracking-tight">
              Join the panda team!
            </h2>
            <div className="space-y-6">
              <p className="text-xl font-bold text-gray-800 leading-tight">
                Hungry for growth? There’s a seat at our table!
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-lg">
                We’re looking for the best in tech, marketing, sales, logistics, account management and more. Explore career opportunities at foodpanda now.
              </p>
            </div>
            <div className="pt-4">
              <button 
                onClick={() => onNavigate?.(AppTab.CAREERS)}
                className="bg-[#ff2b85] text-white px-10 py-3.5 rounded-full font-black text-lg transition-all shadow-xl shadow-panda/20 hover:bg-[#e02475] active:scale-95"
              >
                view jobs
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
                alt="Working at foodpanda" 
                className="w-full aspect-video md:aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;