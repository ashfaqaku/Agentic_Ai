import React, { useState, useEffect } from 'react';
import { AppTab } from '../types';
import PandaAdsHeader from './PandaAdsHeader';
import PandaAdsHome from './PandaAdsHome';
import PandaAdsInsights from './PandaAdsInsights';
import PandaAdsSolutions from './PandaAdsSolutions';
import PandaAdsFooter from './PandaAdsFooter';
import CaseStudyHeader from './CaseStudyHeader';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import AmazonCaseStudy from './AmazonCaseStudy';
import MarsCaseStudy from './MarsCaseStudy';
import UnderArmourCaseStudy from './UnderArmourCaseStudy';
import StartAdvertisingBanner from './StartAdvertisingBanner';
import VisionLab from './VisionLab';
import MediaKitGenerator from './MediaKitGenerator';
import MarketerPersonalityQuiz from './MarketerPersonalityQuiz';

interface PandaAdsPageProps {
  activeTab?: AppTab;
  onNavigate: (tab: AppTab) => void;
}

type ExtendedSubTab = 'home' | 'solutions' | 'insights' | 'case-studies' | 'newsroom' | 'tools' | 'media-kit' | 'personality-quiz';

const PandaAdsPage: React.FC<PandaAdsPageProps> = ({ activeTab, onNavigate }) => {
  // Initialize to newsroom if that's where we're coming from
  const [activeSubTab, setActiveSubTab] = useState<ExtendedSubTab>(
    activeTab === AppTab.NEWSROOM ? 'newsroom' : 'home'
  );
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Sync sub-tab if activeTab changes from parent
  useEffect(() => {
    if (activeTab === AppTab.NEWSROOM) {
      setActiveSubTab('newsroom');
    } else if (activeTab === AppTab.PANDA_ADS && activeSubTab === 'newsroom') {
      // If we switch to generic panda-ads from newsroom, go home
      setActiveSubTab('home');
    }
  }, [activeTab]);

  const renderCaseStudies = () => (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <CaseStudyHeader />
      <FeaturedCaseStudy />
      <AmazonCaseStudy />
      <MarsCaseStudy />
      <UnderArmourCaseStudy />
      <StartAdvertisingBanner />
    </div>
  );

  const renderContent = () => {
    switch (activeSubTab) {
      case 'home': return <PandaAdsHome onNavigateToSolutions={() => setActiveSubTab('solutions')} />;
      case 'solutions': return <PandaAdsSolutions />;
      case 'insights': return <PandaAdsInsights />;
      case 'case-studies': return renderCaseStudies();
      case 'newsroom': return <VisionLab />;
      case 'media-kit': return <MediaKitGenerator />;
      case 'personality-quiz': return <MarketerPersonalityQuiz />;
      case 'tools': 
        return (
          <div className="py-40 text-center animate-in fade-in duration-500">
            <h2 className="text-4xl font-black text-[#333e48]">Interactive Tools</h2>
            <p className="text-gray-500 mt-4">Select a tool from the dropdown menu to get started.</p>
          </div>
        );
      default: return <PandaAdsHome onNavigateToSolutions={() => setActiveSubTab('solutions')} />;
    }
  };

  // Determine if common UI elements should be visible
  const isToolPage = activeSubTab === 'media-kit' || activeSubTab === 'personality-quiz';
  const showGlobalHeader = !isToolPage;
  const showGlobalFooter = !isToolPage;

  return (
    <div className="flex flex-col bg-white min-h-screen relative">
      {showGlobalHeader && (
        <PandaAdsHeader 
          activeSubTab={activeSubTab} 
          onSubTabChange={setActiveSubTab} 
          isResourcesOpen={isResourcesOpen}
          setIsResourcesOpen={setIsResourcesOpen}
          onHomeClick={() => { setActiveSubTab('home'); onNavigate(AppTab.HOME); }}
        />
      )}
      <main className="flex-1">{renderContent()}</main>
      {showGlobalFooter && <PandaAdsFooter />}
    </div>
  );
};

export default PandaAdsPage;