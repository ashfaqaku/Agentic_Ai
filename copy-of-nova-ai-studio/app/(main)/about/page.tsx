'use client';

// Fix: Convert to client component and provide required onNavigate prop to AboutPage
import AboutPage from '@/components/AboutPage';
import { useRouter } from 'next/navigation';
import { AppTab } from '@/types';

export default function About() {
  const router = useRouter();

  const handleNavigate = (tab: AppTab) => {
    router.push(tab === AppTab.HOME ? '/' : `/${tab}`);
  };

  return <AboutPage onNavigate={handleNavigate} />;
}
