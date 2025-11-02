'use client';
import { GitMerge, Code } from 'lucide-react';
import { AlgorithmList } from './algorithm-list';
import type { Algorithm } from '@/lib/algorithms';
import { useI18n } from '@/lib/i18n';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

type AppSidebarProps = {
    onSelectView: (view: string, algorithm?: Algorithm) => void;
    selectedView: string;
}

export function AppSidebar({ onSelectView, selectedView }: AppSidebarProps) {
  const { t } = useI18n();
  return (
    <aside className="w-full h-full border-r flex flex-col md:w-64">
        <div className="p-4 border-b h-16 flex items-center gap-2">
            <GitMerge className="h-7 w-7 text-primary" />
            <span className="text-lg font-semibold">{t.sidebar.title}</span>
        </div>
        <ScrollArea className="flex-1">
            <div className="p-2">
                <h2 className="px-3 py-2 text-lg font-semibold tracking-tight">{t.sidebar.theory}</h2>
                <AlgorithmList
                    selectedView={selectedView}
                    onSelectView={onSelectView}
                />
                <Separator className="my-2" />
                <Button
                    variant="ghost"
                    className={cn(
                        'w-full justify-start gap-3 px-3',
                        selectedView === 'leetcode' && 'bg-muted text-primary hover:bg-muted hover:text-primary'
                    )}
                    onClick={() => onSelectView('leetcode')}
                >
                    <Code className="h-5 w-5 shrink-0" />
                    <span className="truncate">{t.sidebar.leetcode}</span>
                </Button>
            </div>
        </ScrollArea>
    </aside>
  );
}
