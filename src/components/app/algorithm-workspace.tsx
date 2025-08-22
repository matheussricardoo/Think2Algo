'use client';

import { useState, useEffect } from 'react';
import type { Algorithm } from '@/lib/algorithms';
import { AlgorithmDetails } from '@/components/app/algorithm-details';
import { ChallengesWorkspace } from '@/components/app/challenges-workspace';
import { Header } from './header';
import { ScrollArea } from '../ui/scroll-area';
import { AppSidebar } from './app-sidebar';
import { Card } from '../ui/card';
import { algorithms } from '@/lib/algorithms';
import { useI18n } from '@/lib/i18n.tsx';
import { BigOExplained } from './big-o-explained';

const BASE_TITLE = 'PathFinder';

export function AlgorithmWorkspace() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(algorithms[0]);
  const [activeView, setActiveView] = useState('algorithm'); // 'algorithm', 'challenges', or 'big-o'
  const [challengeFilter, setChallengeFilter] = useState<string | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    let title = BASE_TITLE;
    if (activeView === 'algorithm' && selectedAlgorithm) {
        title = `${BASE_TITLE} | ${t.algorithms[selectedAlgorithm.id].name}`;
    } else if (activeView === 'challenges') {
        title = `${BASE_TITLE} | ${t.sidebar.challenges}`;
    } else if (activeView === 'big-o') {
        title = `${BASE_TITLE} | ${t.sidebar.bigO}`;
    }
    document.title = title;
  }, [activeView, selectedAlgorithm, t]);


  const handleSelectView = (view: string, algorithm?: Algorithm) => {
    setActiveView(view);
    if (view === 'algorithm' && algorithm) {
      setSelectedAlgorithm(algorithm);
    } else if (view !== 'algorithm') {
      setSelectedAlgorithm(null);
    }
    // Always clear filter when navigating from the sidebar
    setChallengeFilter(null);
  };

  const handlePracticeRequest = (algorithmId: string) => {
    setChallengeFilter(algorithmId);
    setActiveView('challenges');
    setSelectedAlgorithm(null);
  }

  const renderContent = () => {
    switch (activeView) {
      case 'challenges':
        return <ChallengesWorkspace algorithmFilter={challengeFilter} onClearFilter={() => setChallengeFilter(null)} />;
      case 'big-o':
        return <BigOExplained />;
      case 'algorithm':
      default:
        if (selectedAlgorithm) {
          return (
             <ScrollArea className="h-full p-4 md:p-6">
                <AlgorithmDetails algorithm={selectedAlgorithm} onPractice={handlePracticeRequest} />
            </ScrollArea>
          )
        }
        return (
            <ScrollArea className="h-full p-4 md:p-6">
                <Card>
                    <p className='p-4'>{t.workspace.selectAlgorithm}</p>
                </Card>
            </ScrollArea>
        );
    }
  };

  return (
    <div className="h-screen w-full flex">
       <AppSidebar onSelectView={handleSelectView} selectedView={activeView === 'algorithm' ? (selectedAlgorithm?.id || '') : activeView} />
       <main className='flex-1 flex flex-col'>
            <Header/>
            <div className="flex-1 overflow-auto">
                {renderContent()}
            </div>
       </main>
    </div>
  );
}
