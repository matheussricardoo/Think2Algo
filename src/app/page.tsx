'use client';
import { AlgorithmWorkspace } from '@/components/app/algorithm-workspace';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
        <AlgorithmWorkspace />
    </div>
  );
}
