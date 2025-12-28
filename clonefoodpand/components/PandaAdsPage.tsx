import React from 'react';
import { AppTab } from '../types/types';

interface PandaAdsPageProps {
  onNavigate: (tab: AppTab) => void;
}

const PandaAdsPage: React.FC<PandaAdsPageProps> = ({ onNavigate }) => {
  const targetingComparison = [
    { label: "Age, gender, location", generic: true, panda: true },
    { label: "Preferences and Inferred data", generic: true, panda: true },
    { label: "Type of device/OS used", generic: true, panda: true },
    { label: "Actual products purchased", generic: false, panda: true },
    { label: "Spending habits", generic: false, panda: true },
    { label: "Payment methods used", generic: false, panda: true },
    { label: "Telco provider", generic: false, panda: true },
  ];

  const caseStudies = [
    {
      title: "Coca-Cola leveraged retail media channels to boost sales and drive growth",
      image: "https://images.unsplash.com/photo-1622484210147-fcd7624d77f8?auto=format&fit=crop&q=80&w=800",
      alt: "Coca-Cola Case Study"
    },
    {
      title: "Mars Wrigley finds the perfect audience for its new product with panda ads",
      image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800",
      alt: "Mars Wrigley Case Study"
    },
    {
      title: "Amazon Prime Video and foodpanda's impressive entertainment strategy",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
      alt: "Amazon Prime Video Case Study"
    }
  ];

  const testimonials = [
    {
      quote: "“We were looking for a large APAC-wide partner with premium O&O mobile ad inventory that could connect us to our target audiences. panda ads were able to be that partner and have delivered beyond our campaign's target KPIs. We look forward to expanding our business with them.”",
      name: "Luke Addison",
      title: "Managing Director",
      logo: "https://www.egentic.com/wp-content/uploads/2018/10/egentic-logo-white-bg.png"
    },
    {
      quote: "“As one of the goals from 2023 was to accelerate quick commerce growth through new activations and media, tapping into panda ads helped us grow our quick commerce business and deliver on our KPIs.”",
      name: "Jayson Lopez",
      title: "Senior Media and Digital Marketing Manager",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Universal_Robina_Logo.svg/1200px-Universal_Robina_Logo.svg.png"
    },
    {
      quote: "“The collaboration with foodpanda through panda ads greatly enhanced our customer acquisition initiatives, by capturing our audience's interest and fostering heightened user engagement.”",
      name: "Jessica Faye Tan",
      title: "Head of Commercial",
      logo: "https://companieslogo.com/img/orig/603096.KL-39434863.png?t=1633513364"
    }
  ];

  const brands = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Heineken", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Heineken_Logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Citi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Citi.svg" },
    { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Huawei_Logo.svg" },
    { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
    { name: "Unilever", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Unilever.svg" },
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
    { name: "P&G", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Procter_%26_Gamble_logo.svg" },
    { name: "Standard Chartered", logo: "https://upload.wikimedia.org/wikipedia/en/c/cf/Standard_Chartered_%282021%29.svg" },
    { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
    { name: "Mars", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Mars%2C_Incorporated_logo.svg" },
    { name: "GCash", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/GCash_logo.svg" },
    { name: "Zalora", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/ZALORA_Logo.svg" },
    { name: "Disney+", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700 bg-white min-h-screen font-sans">
      {/* Panda Ads Specific Header */}
      <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-[10%] flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate(AppTab.HOME)}
        >
          <span className="text-2xl font-black text-panda tracking-tight group-hover:opacity-80 transition-opacity">panda</span>
          <span className="text-2xl font-light text-gray-400 -ml-1">ads</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-panda">Home</a>
          <button
            onClick={() => onNavigate(AppTab.SOLUTIONS)} // ✅ Navigation function
            className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-transparent"
          >
            Solutions
          </button>
          {/* ✅ CORRECT RESOURCES DROPDOWN */}
          <div className="relative group">
            <button className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-transparent flex items-center gap-1">
              Resources <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>

            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg p-4 min-w-[220px] z-50 top-full mt-2 border border-gray-100 left-0">
              {/* ✅ EXISTING ITEMS */}


              {/* Divider */}
              <div className="border-t my-2"></div>

              {/* ✅ NEW ITEMS */}
              <button
                onClick={() => onNavigate?.(AppTab.INSIGHTS)}
                className="block w-full text-left p-3 hover:bg-gray-50 rounded-md text-gray-800 font-semibold hover:text-panda transition-colors"
              >
                <i className="fas fa-lightbulb mr-2 text-panda"></i>Insights
              </button>

              <button
                onClick={() => onNavigate?.(AppTab.CASE_STUDIES)}
                className="block w-full text-left p-3 hover:bg-gray-50 rounded-md text-gray-800 font-semibold hover:text-panda transition-colors"
              >
                <i className="fas fa-briefcase mr-2 text-panda"></i>Case Studies
              </button>

              <button
                onClick={() => onNavigate?.(AppTab.NEWSROOM)}
                className="block w-full text-left p-3 hover:bg-gray-50 rounded-md text-gray-800 font-semibold hover:text-panda transition-colors"
              >
                <i className="fas fa-newspaper mr-2 text-panda"></i>Newsroom
              </button>
            </div>
          </div>

          <a href="#" className="text-sm font-bold text-gray-800 hover:text-panda border-b-2 border-transparent">Tools</a>

          <button className="btn-panda px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-panda/20">
            Contact us
          </button>

          <button className="text-gray-800 text-xl">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-[#0a0a0a] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full lg:w-2/3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000"
            alt="Advertising context"
            className="w-full h-full object-cover grayscale-[0.2] contrast-125"
          />
          <div className="absolute inset-0 flex items-center justify-end pr-[5%]">
            <div className="relative w-[500px] h-[600px] hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover rounded-b-full translate-y-20 border-l-8 border-white/10"
                alt="Person on phone"
              />
              <div className="absolute -left-20 bottom-40 w-64 h-40 bg-white/5 backdrop-blur-md rounded-full border border-white/20 p-4 flex items-center justify-center rotate-[-15deg]">
                <span className="text-4xl">🍕</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 px-6 md:px-[10%] max-w-4xl space-y-8 py-20">
          <h1 className="text-white font-black text-6xl md:text-[84px] leading-[0.95] tracking-tight">
            Reach millions<br />
            with panda ads
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
            Advertise with foodpanda and connect with millions of ready-to-shop customers within and beyond the foodpanda app.
          </p>
          <div className="pt-6">
            <button className="bg-white text-panda hover:bg-gray-100 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-white/5">
              Get in touch
            </button>
          </div>
        </div>

      </section>

      <section className="bg-gradient-to-br from-panda/5 to-white py-24 px-6 md:px-[10%]">
        <div className="max-w-[1400px] mx-auto">

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-[42px] font-black text-gray-900 mb-4 leading-tight">
            Boost your brand with Asia's largest<br />
            <span>food and grocery delivery network*</span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

            {/* Stat 1 - 125M Downloads */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl md:text-[72px] font-black leading-none mb-3">
                125M
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wider">
                app downloads
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                Across all platforms and markets
              </div>
            </div>

            {/* Stat 2 - 11 Markets */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl md:text-[72px] font-black leading-none mb-3">
                11
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wider">
                markets
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                Serving major cities across Asia-Pacific
              </div>
            </div>

            {/* Stat 3 - 400+ Cities */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl md:text-[72px] font-black leading-none mb-3">
                400+
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wider">
                cities
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                With active delivery coverage
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-[32px] font-black text-gray-900 mb-6">
              Power up your visibility & engagement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

              {/* Stat 1 - 125M Downloads */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-xl font-bold text-gray-900 mb-3 ">
                  Maximise you reach
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  Amplify your campaign by connecting with your target customers right where they shop
                </div>
              </div>

              {/* Stat 2 - 11 Markets */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-[72px] font-black leading-none mb-3">
                  11
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wider">
                  markets
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  Serving major cities across Asia-Pacific
                </div>
              </div>

              {/* Stat 3 - 400+ Cities */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-[72px] font-black leading-none mb-3">
                  400+
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wider">
                  cities
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  With active delivery coverage
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-gray-50 py-24 px-6 md:px-[10%] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-[45px] font-black text-gray-900 leading-[1.1] tracking-tight">
              Go beyond basic targeting with panda ads
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Maximise your ROI and connect with a broader, more relevant audience through precise targeting powered by our first-party data.
            </p>
            <div className="pt-4">
              <button className="bg-panda text-white hover:bg-panda/90 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-panda/20">
                Explore solutions
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-panda text-white">
                  <th className="py-5 px-6 font-bold text-sm md:text-base">Targeting based on</th>
                  <th className="py-5 px-6 font-bold text-sm md:text-base text-center">Generic platforms</th>
                  <th className="py-5 px-6 font-bold text-sm md:text-base text-center">panda ads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {targetingComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-800 font-medium text-sm md:text-base">{row.label}</td>
                    <td className="py-4 px-6 text-center">
                      {row.generic ? (
                        <i className="fas fa-check text-panda text-xl"></i>
                      ) : (
                        <i className="fas fa-times text-gray-900 text-xl font-black"></i>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <i className="fas fa-check text-panda text-xl"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-24 px-6 md:px-[10%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-[54px] font-black text-gray-900 text-center mb-16 tracking-tight">
            Proven impact with panda ads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {caseStudies.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-[2.5rem] shadow-lg border border-gray-50 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-[240px] overflow-hidden">
                  <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="text-xl md:text-[22px] font-black text-gray-900 leading-[1.3] mb-8 line-clamp-3">
                    {item.title}
                  </h3>
                  <div className="mt-auto">
                    <button className="bg-panda text-white hover:bg-panda/90 px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-panda/10">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 px-6 md:px-[10%] border-t border-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-[54px] font-black text-gray-900 text-center mb-20 tracking-tight">
            What our customers are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-8">
                <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed font-medium">
                  {t.quote}
                </p>
                <div className="space-y-1">
                  <p className="text-lg font-black text-gray-900">{t.name}</p>
                  <p className="text-gray-500 font-bold text-sm">{t.title}</p>
                </div>
                <div className="mt-auto pt-8">
                  <img
                    src={t.logo}
                    alt="Company logo"
                    className="h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Advertising CTA Banner */}
      <section className="bg-[#fff0f6] py-16 px-6 md:px-[10%]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight text-center md:text-left">
            Start advertising with panda ads today!
          </h2>
          <button className="bg-[#ff2b85] text-white hover:bg-[#e02475] px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-panda/20 whitespace-nowrap">
            Get in touch!
          </button>
        </div>
      </section>

      {/* Brands Excelling With Us */}
      <section className="bg-white py-24 px-6 md:px-[10%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-20 tracking-tight">
            Brands excelling with us
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-12 gap-y-16 items-center justify-items-center">
            {brands.map((brand, idx) => (
              <div key={idx} className="w-full flex items-center justify-center group h-12">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="bg-white text-center py-4 text-[10px] text-gray-400">
        *outside of China
      </div>

      {/* Main Black Footer Section */}
      <footer className="bg-black text-white py-16 px-6 md:px-[10%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-panda rounded-lg p-1.5 flex items-center justify-center">
                  <i className="fas fa-paw text-white text-lg"></i>
                </div>
                <span className="text-[26px] font-black text-white tracking-tight">foodpanda</span>
              </div>
            </div>

            {/* Our Company Column */}
            <div>
              <h3 className="text-lg font-black mb-6">Our company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">About foodpanda</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Privacy policy</a></li>
              </ul>
            </div>

            {/* Panda Ads Column */}
            <div>
              <h3 className="text-lg font-black mb-6">panda ads</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Retail media solutions</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Media kit generator</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Case studies</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Industry Insights</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Newsroom</a></li>
                <li><a href="#" className="text-white hover:text-panda font-bold transition-colors">Pau-Pau marketer personality quiz</a></li>
              </ul>
            </div>

            {/* Get In Touch Column */}
            <div>
              <h3 className="text-lg font-black mb-6">Get in touch!</h3>
              <button className="bg-panda text-white hover:bg-panda/90 px-8 py-3 rounded-full font-black transition-all shadow-lg shadow-panda/20">
                Contact us
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-10 border-t border-white/10">
            <div className="text-white/60 font-bold text-sm">
              Copyright © 2025 foodpanda
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-black">Follow us on</h3>
              <a href="#" className="text-white text-3xl hover:text-panda transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PandaAdsPage;