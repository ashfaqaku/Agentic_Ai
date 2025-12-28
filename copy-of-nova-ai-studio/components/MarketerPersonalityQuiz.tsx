import React, { useState } from 'react';

const MarketerPersonalityQuiz: React.FC = () => {
  const [step, setStep] = useState(0);

  const questions = [
    {
      q: "What's your secret ingredient for a viral campaign?",
      options: ["Extra-sharp data analytics", "A pinch of unconventional humor", "A generous dollop of influencer spice", "Slow-cooked brand storytelling"]
    },
    {
      q: "How do you prefer to serve your results?",
      options: ["A plated five-course ROI report", "Quick and hot real-time dashboards", "A sharing platter of social engagement", "A wholesome mix of brand sentiment"]
    },
    {
      q: "Which 'kitchen appliance' is essential for your strategy?",
      options: ["The high-speed blender for rapid testing", "The slow-cooker for long-term loyalty", "The precision scale for budget optimization", "The oven for baking fresh, creative ideas"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen flex flex-col items-center">
      {step === 0 ? (
        /* LANDING PAGE: PAU-PAU'S CULINARY QUEST - Vertical Layout as per screenshot */
        <div className="w-full max-w-[500px] flex-1 flex flex-col bg-[#ff2b85] shadow-2xl relative overflow-hidden">
          
          {/* Top Kitchen Visual Area */}
          <div className="relative h-[45%] bg-[#91d8f7] overflow-hidden shrink-0">
            {/* Real Kitchen Photo Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000')" }}
            ></div>

            {/* Logo Overlays */}
            <div className="absolute top-6 left-6 z-30">
              <div className="bg-white rounded-lg p-1.5 shadow-md">
                <i className="fas fa-paw text-[#ff2b85] text-lg"></i>
              </div>
            </div>
            <div className="absolute top-6 right-6 z-30 text-white font-bold flex items-center gap-0.5">
              <span className="text-sm">panda</span><span className="text-sm font-light">ads</span>
            </div>

            {/* Pau-Pau Mascot Center Stage */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[85%] z-20">
               <img 
                 src="https://images.unsplash.com/photo-1599305090598-fe179d501c27?auto=format&fit=crop&q=80&w=600" 
                 className="w-full h-auto drop-shadow-2xl animate-float"
                 alt="Chef Pau-Pau"
               />
               {/* 3D Chef Hat Effect */}
               <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 bg-white rounded-t-full w-20 h-20 border-b-4 border-gray-100 shadow-xl flex flex-col items-center justify-end pb-2">
                  <div className="w-12 h-1 bg-gray-100 rounded-full mb-1 opacity-50"></div>
                  <div className="w-10 h-1 bg-gray-100 rounded-full opacity-30"></div>
               </div>
            </div>
          </div>

          {/* Bottom Pink Content Area */}
          <div className="flex-1 relative z-20 flex flex-col items-center p-8 text-center bg-[#ff2b85]">
            {/* Cloche Dome Curve */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[90%] w-48 h-20 bg-[#ff2b85] rounded-t-full border-t-4 border-white/20"></div>
            
            {/* The Logo/Title Area */}
            <div className="mt-4 mb-8 space-y-1 relative">
              <h1 className="text-white text-5xl font-black italic tracking-tighter drop-shadow-lg uppercase leading-none">
                Pau-Pau's
              </h1>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border-2 border-white/40 transform -rotate-1 shadow-inner">
                <span className="text-white text-2xl font-black tracking-widest uppercase">
                  CULINARY QUEST!
                </span>
              </div>
              
              {/* Floating Ingredient Icons */}
              <div className="absolute -top-4 -right-10 text-3xl animate-bounce">🥕</div>
              <div className="absolute top-1/2 -left-12 text-3xl transform -rotate-12">🍅</div>
              <div className="absolute bottom-0 right-[-30px] text-2xl transform rotate-45 opacity-60">🍳</div>
            </div>

            {/* Description Text */}
            <div className="max-w-xs space-y-6 mb-10">
              <p className="text-white text-sm font-bold leading-relaxed">
                Think of the kitchen as the marketing world: ingredients are your creative ideas, spices are your channel mix, and the final dish is your successful campaign.
              </p>
              <p className="text-white/90 text-sm font-medium italic opacity-80">
                Uncover your unique Pau-Pau marketer personality through a culinary adventure!
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-auto pb-8">
              <button 
                onClick={() => setStep(1)}
                className="bg-white text-black px-12 py-4 rounded-full font-black text-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:bg-gray-50 transition-all transform active:scale-95 flex items-center gap-2"
              >
                Let's get cookin'!
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* QUIZ QUESTIONS - Clean & Centered */
        <div className="bg-[#ff2b85] w-full min-h-screen flex items-center justify-center p-6">
          <div className="max-w-xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10 md:p-14 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-panda font-black uppercase tracking-widest text-xs">Course {step} / {questions.length}</span>
                  <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-panda transition-all duration-500" style={{ width: `${(step/questions.length)*100}%` }}></div>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  {questions[step-1].q}
                </h2>
                
                <div className="space-y-3">
                  {questions[step-1].options.map((opt, i) => (
                    <button 
                      key={i}
                      onClick={() => step < questions.length ? setStep(step + 1) : alert("Chef's Kiss! You are a 'Gourmet Growth Strategist'.")}
                      className="w-full text-left p-5 rounded-2xl border-2 border-gray-50 bg-gray-50 hover:border-panda hover:bg-panda/5 transition-all font-bold text-gray-700 flex justify-between items-center group"
                    >
                      <span className="flex-1">{opt}</span>
                      <i className="fas fa-arrow-right text-panda opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"></i>
                    </button>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="text-gray-400 font-bold hover:text-panda text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-arrow-left text-[10px]"></i> Previous course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketerPersonalityQuiz;