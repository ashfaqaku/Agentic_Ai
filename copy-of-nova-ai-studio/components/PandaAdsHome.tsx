import React from 'react';

interface PandaAdsHomeProps {
  onNavigateToSolutions: () => void;
}

const PandaAdsHome: React.FC<PandaAdsHomeProps> = ({ onNavigateToSolutions }) => {
  const brandLogos = [
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Heineken', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Heineken_logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Citi', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg' },
    { name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Huawei_Logo.svg' },
    { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { name: 'Unilever', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Unilever.svg/1200px-Unilever.svg.png' },
    { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
    { name: 'P&G', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg' },
    { name: 'Standard Chartered', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Standard_Chartered_Logo.svg/1200px-Standard_Chartered_Logo.svg.png' },
    { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { name: 'Mars', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Mars-logo.svg' },
    { name: 'GCash', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GCash_logo.svg' },
    { name: 'Zalora', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Zalora_Logo.svg/2560px-Zalora_Logo.svg.png' },
    { name: 'Disney+', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  ];

  const targetingData = [
    { label: "Age, gender, location", generic: true, panda: true },
    { label: "Preferences and inferred data", generic: true, panda: true },
    { label: "Type of device/OS used", generic: true, panda: true },
    { label: "Actual products purchased", generic: false, panda: true },
    { label: "Spending habits", generic: false, panda: true },
    { label: "Payment methods used", generic: false, panda: true },
    { label: "Telco provider", generic: false, panda: true },
  ];

  const caseStudies = [
    {
      title: "Coca-Cola leveraged retail media channels to boost sales and drive growth",
      vertical: "CPG",
      bg: "bg-[#D70F64]",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=600",
      accent: "#BetterWithCoke"
    },
    {
      title: "Mars Wrigley finds the perfect audience for its new product with panda ads",
      vertical: "CPG",
      bg: "bg-[#fff3cc]",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
      accent: "Eclipse Mints"
    },
    {
      title: "Amazon Prime Video and foodpanda’s impressive entertainment strategy",
      vertical: "Entertainment",
      bg: "bg-[#D70F64]",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600",
      accent: "Amazon Prime"
    }
  ];

  const testimonials = [
    {
      quote: "We were looking for a large APAC-wide partner with premium O&O mobile ad inventory that could connect us to our target audiences. panda ads were able to be that partner and have delivered beyond our campaign's target KPIs. We look forward to expanding our business with them.",
      author: "Luke Addison",
      title: "Managing Director",
      logo: "https://egentic.com/wp-content/uploads/2019/04/eGENTIC-Lead-Generation-Logo.png"
    },
    {
      quote: "As one of the goals from 2023 was to accelerate quick commerce growth through new activations and media, tapping into panda ads helped us grow our quick commerce business and deliver on our KPIs.",
      author: "Jayson Lopez",
      title: "Senior Media and Digital Marketing Manager",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Universal_Robina_Logo.svg/2560px-Universal_Robina_Logo.svg.png"
    },
    {
      quote: "The collaboration with foodpanda through panda ads greatly enhanced our customer acquisition initiatives, by capturing our audience's interest and fostering heightened user engagement.",
      author: "Jessica Faye Tan",
      title: "Head of Commercial",
      logo: "https://www.moneymax.ph/assets/images/moneymax-logo-colored.svg"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Section 1: Hero */}
      <section className="relative w-full bg-[#0a0a0a] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full lg:w-2/3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 px-6 md:px-[10%] max-w-4xl space-y-8 py-20">
          <h1 className="text-white font-black text-6xl md:text-[84px] leading-[0.95] tracking-tight">Reach millions<br />with panda ads</h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-xl">Connect your brand to foodpanda’s high-value audience through our powerful retail media ecosystem.</p>
          <div className="pt-6">
            <button className="bg-[#D70F64] text-white hover:bg-[#b00c52] px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl">Get in touch</button>
          </div>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="bg-white py-24 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">Boost your brand with Asia’s largest food and grocery delivery network*</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-1"><div className="text-6xl md:text-8xl font-black text-gray-900">125M</div><p className="text-gray-900 font-bold text-lg">app downloads</p></div>
            <div className="space-y-1"><div className="text-6xl md:text-8xl font-black text-gray-900">11</div><p className="text-gray-900 font-bold text-lg">markets</p></div>
            <div className="space-y-1"><div className="text-6xl md:text-8xl font-black text-gray-900">400+</div><p className="text-gray-900 font-bold text-lg">cities</p></div>
          </div>
        </div>
      </section>

      {/* Section 3: Power up features */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-[42px] font-black text-gray-900 tracking-tight">
            Power up your visibility & engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-32 h-32 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Loudspeaker.png" alt="Megaphone" className="w-24 h-24 object-contain drop-shadow-xl" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Maximise your reach</h3>
                <p className="text-gray-600 font-medium leading-relaxed max-w-[280px] mx-auto">Amplify your campaign by connecting with your target customers right where they shop</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <div className="w-32 h-32 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Basket.png" alt="Shopping Basket" className="w-24 h-24 object-contain drop-shadow-xl" />
                  <div className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Engage high-value audiences</h3>
                <p className="text-gray-600 font-medium leading-relaxed max-w-[280px] mx-auto">Leverage our first-party data and advanced targeting to connect with the right audience</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <div className="w-32 h-32 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Spiral%20Notepad.png" alt="Notepad" className="w-24 h-24 object-contain drop-shadow-xl" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Get personalised support</h3>
                <p className="text-gray-600 font-medium leading-relaxed max-w-[280px] mx-auto">Achieve your marketing goals and drive growth with personalised support, insights, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: In-app advertising */}
      <section className="bg-white py-24 px-6 md:px-[10%] border-b border-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-[52px] font-black text-gray-900 text-center tracking-tight leading-tight max-w-4xl mx-auto">
            Customised retail media advertising solutions for your brand's needs
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
            <div className="relative w-full lg:w-1/2 flex justify-center h-[500px] md:h-[600px]">
              <div className="absolute top-10 left-[10%] md:left-[20%] w-[260px] md:w-[320px] aspect-[9/19] rounded-[3rem] border-[12px] border-black overflow-hidden shadow-2xl bg-white transform -rotate-6">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" alt="App 1" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 right-[10%] md:right-[15%] w-[260px] md:w-[320px] aspect-[9/19] rounded-[3rem] border-[12px] border-black overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] bg-white z-20">
                <div className="relative w-full h-full">
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" alt="App 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute bottom-20 left-[5%] md:left-[15%] z-30 bg-[#fff3cc] rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white/50 transform -rotate-12 w-[240px]">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-lg object-cover" alt="Burger" />
                <div>
                  <div className="text-xs font-black text-gray-900">savings, delivered</div>
                  <div className="bg-[#D70F64] text-white text-[8px] px-2 py-0.5 rounded-full inline-block mt-1 uppercase font-black">Order now</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-8 text-left">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-gray-900 tracking-tight">In-app advertising</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">Increase brand visibility with native display ads across different categories on the foodpanda app</p>
              </div>
              <button onClick={onNavigateToSolutions} className="bg-[#D70F64] text-white px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-[#D70F64]/20 hover:bg-[#b00c52] transition-all transform hover:scale-105 active:scale-95">Explore solutions</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Off-app advertising */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-[10%] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-2/5 space-y-8 text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-[40px] font-black text-gray-900 tracking-tight leading-tight">Off-app advertising</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">Amplify your campaigns with foodpanda, from email marketing and social media to rider bag ads and product sampling</p>
            </div>
            <button onClick={onNavigateToSolutions} className="bg-[#D70F64] text-white px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-[#D70F64]/20 hover:bg-[#b00c52] transition-all transform hover:scale-105 active:scale-95">Explore solutions</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[500px]">
              <div className="relative flex items-end justify-center">
                <div className="w-1/3 transform translate-y-4 -rotate-3 z-10">
                   <div className="bg-[#e7d9c6] rounded-lg shadow-xl p-4 aspect-[3/4] flex flex-col items-center justify-end relative overflow-hidden border border-black/5">
                      <div className="w-full text-center mt-2 text-[8px] font-black text-gray-600 uppercase tracking-tighter">foodpanda</div>
                   </div>
                </div>
                <div className="w-1/2 z-20 relative transform translate-x-[-15%]">
                   <div className="bg-[#D70F64] rounded-2xl shadow-2xl aspect-square flex flex-col items-center justify-between p-6 relative overflow-hidden border-t-8 border-black/10">
                      <div className="flex flex-col items-center gap-1 opacity-90">
                        <i className="fas fa-paw text-white text-5xl"></i>
                        <span className="text-white font-black text-xl tracking-tighter">foodpanda</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Strategic partnerships */}
      <section className="bg-white py-24 px-6 md:px-[10%] overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] flex items-center justify-center">
            <div className="relative z-20 w-[240px] md:w-[280px] aspect-[9/19] rounded-[3rem] border-[10px] border-black overflow-hidden shadow-2xl bg-white transform -rotate-2">
              <img src="https://images.unsplash.com/photo-1534940859016-d56088431872?auto=format&fit=crop&q=80&w=400" alt="Campaign UI" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <div className="text-white font-black italic text-xl uppercase leading-tight">PASKO like<br/>a Panda</div>
                <div className="mt-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-[10px] text-white font-black uppercase tracking-widest">code: FPASKO</div>
              </div>
            </div>
            <div className="absolute top-[5%] right-0 md:right-[-5%] z-30 w-[280px] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 transform rotate-3 animate-float">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-black text-[#D70F64] uppercase tracking-widest">panda ads ROAS Report - SKUs</div>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                   <div className="text-[8px] text-gray-400 font-bold uppercase">Total ROAS</div>
                   <div className="text-sm font-black text-gray-900">12.5x</div>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                   <div className="text-[8px] text-gray-400 font-bold uppercase">Campaign Duration</div>
                   <div className="text-sm font-black text-gray-900">30 Days</div>
                </div>
              </div>
              <div className="h-16 flex items-end gap-1.5 pt-2">
                {[40, 60, 45, 90, 100, 80, 55, 75, 95, 110, 85].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm transition-all duration-500 ${i === 4 || i === 9 ? 'bg-[#D70F64]' : 'bg-gray-200'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-[15%] left-0 md:left-[-10%] z-30 w-[240px] md:w-[280px] bg-white rounded-2xl shadow-2xl border-4 border-[#D70F64]/10 p-4 transform -rotate-6 transition-transform hover:scale-110 duration-500">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-[#fff0f6] rounded-xl flex items-center justify-center shrink-0 border border-[#D70F64]/20">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" className="w-10 h-auto grayscale opacity-80" alt="Coke" />
                </div>
                <div className="space-y-1">
                   <div className="text-[#D70F64] text-lg font-black leading-none">₱100 off</div>
                   <div className="text-gray-900 text-xs font-black uppercase">Coke orders</div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f8f9fa] rounded-full -z-10 scale-90 opacity-60"></div>
          </div>
          <div className="w-full lg:w-2/5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-[40px] font-black text-gray-900 tracking-tight leading-tight">Strategic partnerships</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">Execute integrated campaigns for maximum impact, with tailored solutions like vouchers, data partnerships and consumer insights</p>
            </div>
            <button onClick={onNavigateToSolutions} className="bg-[#D70F64] text-white px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-[#D70F64]/20 hover:bg-[#b00c52] transition-all transform hover:scale-105 active:scale-95">Explore solutions</button>
          </div>
        </div>
      </section>

      {/* Section 7: Go beyond basic targeting */}
      <section className="bg-white py-24 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-2/5 space-y-8 text-left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-[48px] font-black text-gray-900 leading-tight tracking-tight">
                Go beyond basic targeting with panda ads
              </h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Maximise your ROI and connect with a broader, more relevant audience through precise targeting powered by our first-party data.
              </p>
            </div>
            <button onClick={onNavigateToSolutions} className="bg-[#ff2b85] text-white px-12 py-4 rounded-full font-black text-lg shadow-xl shadow-[#ff2b85]/20 hover:bg-[#d70f64] transition-all transform hover:scale-105 active:scale-95">
              Explore solutions
            </button>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#ff2b85] text-white">
                      <th className="py-5 px-6 font-black text-sm md:text-base whitespace-nowrap">Targeting based on</th>
                      <th className="py-5 px-6 font-black text-sm md:text-base text-center whitespace-nowrap">Generic platforms</th>
                      <th className="py-5 px-6 font-black text-sm md:text-base text-center whitespace-nowrap">panda ads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {targetingData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="py-5 px-6 text-sm md:text-base font-bold text-gray-700">{row.label}</td>
                        <td className="py-5 px-6 text-center">
                          {row.generic ? (
                            <i className="fas fa-check text-[#ff2b85] text-xl"></i>
                          ) : (
                            <i className="fas fa-times text-gray-800 text-xl font-black"></i>
                          )}
                        </td>
                        <td className="py-5 px-6 text-center bg-[#ff2b85]/5">
                          <i className="fas fa-check text-[#ff2b85] text-xl"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Proven impact with panda ads */}
      <section className="bg-gray-50/50 py-24 px-6 md:px-[10%]">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-[52px] font-black text-gray-900 text-center tracking-tight">
            Proven impact with panda ads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col">
                <div className={`h-64 relative overflow-hidden flex items-center justify-center p-8 ${cs.bg}`}>
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30">
                      <span className="text-white font-black italic text-xl uppercase">{cs.accent}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">
                      {cs.title}
                    </h3>
                  </div>
                  <button className="bg-[#ff2b85] text-white px-8 py-3 rounded-full font-black text-[15px] w-fit hover:bg-[#d70f64] transition-all transform active:scale-95">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: What our customers are saying (NEW SECTION ADDED HERE) */}
      <section className="bg-white py-24 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-4xl md:text-[52px] font-black text-gray-900 text-center tracking-tight">
            What our customers are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-8">
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-6xl text-gray-100 font-serif">“</span>
                  <p className="text-gray-800 font-medium text-lg leading-relaxed relative z-10 italic">
                    {t.quote}
                  </p>
                  <span className="absolute -bottom-10 -right-4 text-6xl text-gray-100 font-serif">”</span>
                </div>
                <div className="pt-4 space-y-1">
                  <div className="font-black text-gray-900 text-xl">{t.author}</div>
                  <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">{t.title}</div>
                </div>
                <div className="pt-6 h-16 flex items-center justify-center">
                  <img src={t.logo} alt={t.author} className="max-h-full max-w-[180px] object-contain grayscale opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Brands excelling with us */}
      <section className="bg-white py-24 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-4xl md:text-[52px] font-black text-gray-900 text-center tracking-tight">Brands excelling with us</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-12 gap-y-16 items-center">
            {brandLogos.map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center group">
                <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
              </div>
            ))}
          </div>
          <div className="text-center pt-8"><p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">*outside of China</p></div>
        </div>
      </section>
    </div>
  );
};

export default PandaAdsHome;