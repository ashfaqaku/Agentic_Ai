import React, { useRef, useState } from 'react';

const MediaKitGenerator: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formStep, setFormStep] = useState(1);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextStep = () => {
    setFormStep(2);
    scrollToForm();
  };

  const prevStep = () => {
    setFormStep(1);
    scrollToForm();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen flex flex-col">
      {/* Brand Hero Section */}
      <section className="bg-[#ff2b85] relative overflow-hidden min-h-[500px] flex items-center px-6 md:px-[10%] shrink-0">
        <div className="absolute top-1/4 right-1/3 text-yellow-300 text-4xl animate-pulse opacity-80 select-none">✦</div>
        <div className="absolute bottom-1/4 right-1/2 text-white text-5xl opacity-30 select-none transform rotate-45">+</div>
        <div className="absolute top-1/2 right-[10%] text-yellow-200 text-6xl opacity-40 select-none transform -rotate-12">+</div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <div className="space-y-8 text-left">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
              Get your custom<br />panda ads media kit
            </h1>
            <p className="text-white text-xl md:text-2xl font-bold opacity-90 max-w-xl leading-relaxed">
              Share your next campaign with us and receive a tailored media kit straight to your inbox — easy peasy!
            </p>
            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-white text-[#ff2b85] px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-black/10 hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95"
              >
                Get started
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="absolute w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative transform rotate-[-25deg] animate-float">
                <div className="w-80 h-[500px] bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-full rounded-b-[40%] shadow-2xl relative border-4 border-white/20">
                   <div className="absolute inset-x-0 top-1/4 h-12 bg-white/20"></div>
                   <div className="absolute inset-x-0 top-1/2 h-12 bg-white/20"></div>
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl border-8 border-[#ff2b85]">
                      <i className="fas fa-paw text-[#ff2b85] text-6xl"></i>
                   </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-24 h-48 bg-pink-600 rounded-l-full transform rotate-12"></div>
                <div className="absolute -bottom-10 -right-10 w-24 h-48 bg-pink-600 rounded-r-full transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Form Section */}
      <section ref={formRef} className="py-24 px-6 md:px-[10%] bg-white relative overflow-hidden flex-1">
        <div className="max-w-7xl mx-auto relative z-10 min-h-[600px]">
          
          {formStep === 1 ? (
            /* STEP 1: CAMPAIGN INFO */
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 animate-in slide-in-from-left duration-500">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-[64px] font-black text-[#ff2b85] leading-[1.1] tracking-tight">
                  Tell us a little<br />about your<br />campaign!
                </h2>
              </div>

              <div className="lg:w-1/2 relative w-full max-w-xl">
                {/* Sparkles */}
                <div className="absolute -top-12 -left-8 text-yellow-400 text-4xl select-none">✦</div>
                <div className="absolute -top-6 -left-16 text-yellow-400 text-6xl select-none">✦</div>
                <div className="absolute top-10 -left-12 text-yellow-400 text-5xl select-none">✦</div>

                {/* Pink Card */}
                <div className="bg-[#ff2b85] rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(215,15,100,0.3)] space-y-8 relative">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-white font-bold text-lg">Industry *</label>
                      <div className="relative">
                        <select className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700 appearance-none cursor-pointer">
                          <option value="" disabled selected>Select industry</option>
                          <option>CPG / FMCG</option>
                          <option>Banking & Finance</option>
                          <option>Entertainment</option>
                          <option>Retail</option>
                        </select>
                        <i className="fas fa-caret-down absolute right-6 top-1/2 -translate-y-1/2 text-[#ff2b85] pointer-events-none"></i>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-bold text-lg">Campaign objective(s) *</label>
                      <div className="relative">
                        <select className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700 appearance-none cursor-pointer">
                          <option value="" disabled selected>Select objective</option>
                          <option>Brand Awareness</option>
                          <option>Sales & Conversion</option>
                          <option>Product Launch</option>
                        </select>
                        <i className="fas fa-caret-down absolute right-6 top-1/2 -translate-y-1/2 text-[#ff2b85] pointer-events-none"></i>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-bold text-lg">Market(s) *</label>
                      <div className="relative">
                        <select className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700 appearance-none cursor-pointer">
                          <option value="" disabled selected>Select market</option>
                          <option>Philippines</option>
                          <option>Singapore</option>
                          <option>Hong Kong</option>
                          <option>Malaysia</option>
                        </select>
                        <i className="fas fa-caret-down absolute right-6 top-1/2 -translate-y-1/2 text-[#ff2b85] pointer-events-none"></i>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs font-bold">*Required fields</p>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button 
                      onClick={nextStep}
                      className="bg-white text-black px-20 py-4 rounded-full font-black text-xl hover:bg-gray-50 transition-all transform active:scale-95 shadow-xl"
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* Target Illustration */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 z-20">
                   <div className="relative w-full h-full flex items-center justify-center">
                     <div className="absolute w-32 h-32 bg-[#ff2b85] rounded-full flex items-center justify-center border-8 border-white shadow-xl">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                           <div className="w-12 h-12 bg-[#ff2b85] rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                           </div>
                        </div>
                     </div>
                     <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 rotate-45">
                        <div className="w-32 h-2 bg-blue-500 rounded-full relative">
                           <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex flex-col gap-1">
                              <div className="w-8 h-3 bg-blue-600 rounded-sm skew-x-[30deg]"></div>
                              <div className="w-8 h-3 bg-blue-600 rounded-sm skew-x-[-30deg]"></div>
                           </div>
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-blue-500"></div>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          ) : (
            /* STEP 2: PERSONAL INFO */
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 animate-in slide-in-from-right duration-500 pb-20">
              <div className="lg:w-1/2">
                {/* Form Card */}
                <div className="relative w-full max-w-xl">
                  {/* Notepad Illustration - Top Right */}
                  <div className="absolute -top-24 -right-12 w-48 h-48 z-20 pointer-events-none transform rotate-[-10deg] animate-float">
                    <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-gray-50 p-4 w-40 h-48 flex flex-col gap-3">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-4 h-6 bg-gray-400 rounded-t-full border border-gray-300"></div>
                        <div className="w-4 h-6 bg-gray-400 rounded-t-full border border-gray-300"></div>
                        <div className="w-4 h-6 bg-gray-400 rounded-t-full border border-gray-300"></div>
                      </div>
                      <div className="h-1 bg-gray-100 w-full mt-4"></div>
                      <div className="h-1 bg-gray-100 w-full"></div>
                      <div className="h-1 bg-gray-100 w-full"></div>
                      {/* Pencil */}
                      <div className="absolute bottom-4 -right-8 w-4 h-32 bg-yellow-400 rounded-full transform rotate-45 border-2 border-black/10">
                        <div className="absolute top-0 w-full h-4 bg-pink-400 rounded-t-full"></div>
                        <div className="absolute bottom-0 w-full h-8 bg-gray-200 rounded-b-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Pink Card */}
                  <div className="bg-[#ff2b85] rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(215,15,100,0.3)] space-y-6 relative">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-white font-bold text-lg">Name *</label>
                        <input type="text" className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-white font-bold text-lg">Title</label>
                        <input type="text" className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-white font-bold text-lg">Company</label>
                        <input type="text" className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-white font-bold text-lg">Work email *</label>
                        <input type="email" className="w-full bg-white rounded-xl px-6 py-4 outline-none font-bold text-gray-700" />
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center h-5 mt-1">
                        <input type="checkbox" id="privacy-agreement-gen" className="w-5 h-5 rounded border-none accent-pink-600 cursor-pointer" />
                      </div>
                      <label htmlFor="privacy-agreement-gen" className="text-white text-[13px] font-bold leading-relaxed cursor-pointer select-none">
                        I acknowledge and agree to the <a href="#" className="underline">Privacy Statement</a> and agree to receive marketing materials and industry updates from panda ads. I understand that I can unsubscribe at any time.*
                      </label>
                    </div>

                    <p className="text-white/80 text-[11px] font-bold">*Required fields</p>

                    <div className="pt-6 flex justify-center">
                      <button 
                        onClick={() => alert("Success! Your Media Kit is being sent.")}
                        className="bg-white text-black px-16 py-4 rounded-full font-black text-xl hover:bg-gray-50 transition-all transform active:scale-95 shadow-2xl"
                      >
                        Get my media kit!
                      </button>
                    </div>
                  </div>

                  {/* 3D Monitor Illustration - Bottom Left */}
                  <div className="absolute -bottom-16 -left-20 w-64 h-64 z-20 pointer-events-none transform animate-float delay-700">
                    <div className="relative w-full h-full flex flex-col items-center">
                      <div className="w-56 h-44 bg-white rounded-[2rem] shadow-2xl border-4 border-gray-50 p-5 flex flex-col gap-4 relative overflow-hidden">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[#ff2b85] flex items-center justify-center text-white shadow-md">
                            <i className="fas fa-user text-lg"></i>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end gap-1.5 pt-2">
                          <div className="flex-1 bg-gray-100 rounded-t-lg h-[40%]"></div>
                          <div className="flex-1 bg-gray-100 rounded-t-lg h-[70%]"></div>
                          <div className="flex-1 bg-[#ff2b85] rounded-t-lg h-[100%]"></div>
                          <div className="flex-1 bg-gray-100 rounded-t-lg h-[60%]"></div>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-[#ff2b85] -mt-2"></div>
                      <div className="w-28 h-8 bg-[#ff2b85] rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-[64px] font-black text-[#ff2b85] leading-[1.1] tracking-tight">
                  ...and now<br />a bit about<br />you!
                </h2>
                <div className="mt-8">
                  <button onClick={prevStep} className="text-[#ff2b85] font-black underline text-lg">Go back</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Black Footer to match screenshot */}
      <footer className="bg-black text-white px-6 md:px-[10%] py-12 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#ff2b85] rounded-xl p-2 flex items-center justify-center">
                <i className="fas fa-paw text-white text-xl"></i>
              </div>
              <span className="text-[28px] font-black text-white tracking-tight">foodpanda</span>
            </div>
            <p className="text-white text-[15px] font-bold opacity-80">Copyright © 2024 foodpanda</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-16 h-14 bg-gray-800 text-white flex items-center justify-center rounded-xl hover:bg-gray-700 transition-all shadow-xl"
          >
            <i className="fas fa-chevron-up text-2xl"></i>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MediaKitGenerator;