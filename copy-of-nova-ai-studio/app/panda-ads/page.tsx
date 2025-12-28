'use client';
import PandaAdsPage from '@/components/PandaAdsPage';
import { useRouter } from 'next/navigation';

export default function PandaAds() {
  const router = useRouter();
  
  const handleNavigate = (tab: string) => {
    router.push(tab === 'home' ? '/' : `/${tab}`);
  };

  return <PandaAdsPage onNavigate={handleNavigate} />;
}