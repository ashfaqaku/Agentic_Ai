'use client';

// Fix: Import React and navigation hooks to manage and pass activeTab and onTabChange props
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePathname, useRouter } from 'next/navigation';
import { AppTab } from '@/types';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Fix: Derive the active tab from the current URL path
  const getActiveTab = (): AppTab => {
    if (pathname === '/') return AppTab.HOME;
    const tab = pathname.substring(1) as AppTab;
    if (Object.values(AppTab).includes(tab)) return tab;
    return AppTab.HOME;
  };

  // Fix: Provide a handler for tab changes that uses Next.js routing
  const handleTabChange = (tab: AppTab) => {
    router.push(tab === AppTab.HOME ? '/' : `/${tab}`);
  };

  const activeTab = getActiveTab();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fix: Pass required activeTab and onTabChange props to Header */}
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="flex-1">
        {children}
      </main>
      {/* Fix: Pass required activeTab and onTabChange props to Footer */}
      <Footer activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
