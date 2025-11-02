'use client';

import { useState } from 'react';
import { LeetCodeProblem } from '@/lib/types/leetcode';
import { LeetCodeList } from './leetcode-list';
import { LeetCodeDetails } from './leetcode-details';

export function LeetCodeWorkspace() {
  const [selectedProblem, setSelectedProblem] = useState<LeetCodeProblem | null>(null);

  return (
    <div className="container mx-auto p-6">
      {selectedProblem ? (
        <LeetCodeDetails problem={selectedProblem} onBack={() => setSelectedProblem(null)} />
      ) : (
        <LeetCodeList onSelectProblem={setSelectedProblem} />
      )}
    </div>
  );
}
