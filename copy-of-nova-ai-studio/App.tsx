import React, { useState } from 'react';
import { AppTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';
import PandaAdsPage from './components/PandaAdsPage';
import NewsroomPage from './components/NewsroomPage';
import ChatLab from './components/ChatLab';
import VisionLab from './components/VisionLab';
// import ImageStudio from './components/ImageStudio';
import LiveLab from './components/LiveLab';

const App: React.FC = () => {
  const getInitialTab = (): AppTab => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam && Object.values(AppTab).includes(tabParam as AppTab)) {
      return tabParam as AppTab;
    }
    return AppTab.HOME;
  };

  const [activeTab, setActiveTab] = useState<AppTab>(getInitialTab());

  const handleTabChange = (tab: AppTab) => {
    setActiveTab(tab);
    const url = new URL(window.location.href);
    if (tab === AppTab.HOME) {
      url.searchParams.delete('tab');
    } else {
      url.searchParams.set('tab', tab);
    }
    window.history.replaceState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Dashboard onNavigate={handleTabChange} />;
      case AppTab.ABOUT:
        return <AboutPage onNavigate={handleTabChange} />;
      case AppTab.NEWSROOM:
        return <NewsroomPage />;
      case AppTab.PANDA_ADS:
        return <PandaAdsPage activeTab={activeTab} onNavigate={handleTabChange} />;
      case AppTab.PARTNERS:
        return // <ImageStudio />;
      case AppTab.CONTACT:
        return <ChatLab />;
      case AppTab.CAREERS:
        return <LiveLab />;
      default:
        return <Dashboard onNavigate={handleTabChange} />;
    }
  };

  // Only the PANDA_ADS tab uses the specialized internal navigation
  const isAdsMode = activeTab === AppTab.PANDA_ADS;

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7]">
      {!isAdsMode && (
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
      )}
      
      <main className="flex-1 bg-white">
        {renderContent()}
      </main>
      
      {!isAdsMode && (
        <Footer activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

export default App;