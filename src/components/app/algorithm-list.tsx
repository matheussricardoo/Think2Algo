'use client';

import { algorithms, type Algorithm } from '@/lib/algorithms';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Dices, Gauge, Wrench } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

type AlgorithmListProps = {
  selectedView: string;
  onSelectView: (view: string, algorithm?: Algorithm) => void;
};

export function AlgorithmList({ selectedView, onSelectView }: AlgorithmListProps) {
  const { t } = useI18n();

  const handleSelectAlgorithm = (algo: Algorithm) => {
    onSelectView('algorithm', algo);
  };

  const handleSelectChallenges = () => {
    onSelectView('challenges');
  };

  const handleSelectBigO = () => {
    onSelectView('big-o');
  };
  
  const handleSelectMike = () => {
    onSelectView('mike');
  };

  return (
    <nav className="flex flex-col gap-1">
       <Button
        variant="ghost"
        className={cn(
          'w-full justify-start gap-3 px-3',
          selectedView === 'big-o' && 'bg-muted text-primary hover:bg-muted hover:text-primary'
        )}
        onClick={handleSelectBigO}
      >
        <Gauge className="h-5 w-5 shrink-0" />
        <span className="truncate">{t.sidebar.bigO}</span>
      </Button>
      <Button
        variant="ghost"
        className={cn(
          'w-full justify-start gap-3 px-3',
          selectedView === 'mike' && 'bg-muted text-primary hover:bg-muted hover:text-primary'
        )}
        onClick={handleSelectMike}
      >
        <Wrench className="h-5 w-5 shrink-0" />
        <span className="truncate">{t.sidebar.mikeFramework}</span>
      </Button>
      <Separator className="my-2" />
      {algorithms.map((algo) => (
        <Button
          key={algo.id}
          variant="ghost"
          className={cn(
            'w-full justify-start gap-3 px-3',
            selectedView === algo.id && 'bg-muted text-primary hover:bg-muted hover:text-primary'
          )}
          onClick={() => handleSelectAlgorithm(algo)}
        >
          <algo.icon className="h-5 w-5 shrink-0" />
          <span className="truncate">{t.algorithms[algo.id].name}</span>
        </Button>
      ))}
      <Separator className="my-2" />
      <Button
        variant="ghost"
        className={cn(
          'w-full justify-start gap-3 px-3',
          selectedView === 'challenges' && 'bg-muted text-primary hover:bg-muted hover:text-primary'
        )}
        onClick={handleSelectChallenges}
      >
        <Dices className="h-5 w-5 shrink-0" />
        <span className="truncate">{t.sidebar.challenges}</span>
      </Button>
    </nav>
  );
}
