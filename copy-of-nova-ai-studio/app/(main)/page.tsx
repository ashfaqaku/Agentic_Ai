'use client';

// Fix: Convert to client component and provide required onNavigate prop to Dashboard
import Dashboard from '@/components/Dashboard';
import { useRouter } from 'next/navigation';
import { AppTab } from '@/types';

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (tab: AppTab) => {
    router.push(tab === AppTab.HOME ? '/' : `/${tab}`);
  };

  return <Dashboard onNavigate={handleNavigate} />;
}
