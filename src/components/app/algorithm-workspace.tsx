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
import { useI18n } from '@/lib/i18n';
import { BigOExplained } from './big-o-explained';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const BASE_TITLE = 'Think2Algo';

export function AlgorithmWorkspace() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(algorithms[0]);
  const [activeView, setActiveView] = useState('algorithm'); // 'algorithm', 'challenges', or 'big-o'
  const [challengeFilter, setChallengeFilter] = useState<string | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useI18n();
  const isMobile = useIsMobile();

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

    // Close sidebar on mobile after selection
    if (isMobile) {
        setSidebarOpen(false);
    }
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
          return <AlgorithmDetails algorithm={selectedAlgorithm} onPractice={handlePracticeRequest} />
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
  
  const sidebar = <AppSidebar onSelectView={handleSelectView} selectedView={activeView === 'algorithm' ? (selectedAlgorithm?.id || '') : activeView} />;

  if (isMobile) {
    return (
        <div className="h-screen w-full flex">
            <main className='flex-1 flex flex-col'>
                <Header>
                   <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu />
                                <span className="sr-only">Open Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64 sm:w-72">
                           <SheetHeader>
                               <SheetTitle className="sr-only">Menu</SheetTitle>
                               <SheetDescription className="sr-only">
                                   Main navigation for algorithms, Big O notation, and challenges.
                               </SheetDescription>
                           </SheetHeader>
                           {sidebar}
                        </SheetContent>
                    </Sheet>
                </Header>
                <div className="flex-1 overflow-auto">
                    {renderContent()}
                </div>
            </main>
        </div>
    )
  }

  return (
    <div className="h-screen w-full flex">
       {sidebar}
       <main className='flex-1 flex flex-col'>
            <Header/>
            <div className="flex-1 overflow-auto">
                {renderContent()}
            </div>
       </main>
    </div>
  );
}
