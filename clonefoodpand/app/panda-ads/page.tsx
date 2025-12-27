// app/panda-ads/page.tsx
"use client";

import PandaAdsPage from '@/components/PandaAdsPage';
import { AppTab } from '@/types/types';

export default function PandaAdsRoute() {
    function handleTabChange(tab: AppTab): void {
        throw new Error('Function not implemented.');
    }

return <PandaAdsPage onNavigate={handleTabChange || (() => {})} />;

}