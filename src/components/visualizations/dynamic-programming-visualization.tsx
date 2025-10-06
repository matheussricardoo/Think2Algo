'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/lib/i18n';

type DPProblem = 'fibonacci' | 'knapsack' | 'lcs';

interface DynamicProgrammingVisualizationProps {
  initialProblem?: DPProblem;
}

export function DynamicProgrammingVisualization({ 
  initialProblem = 'fibonacci' 
}: DynamicProgrammingVisualizationProps) {
  const { t } = useI18n();
  const [problem, setProblem] = useState<DPProblem>(initialProblem);
  const [fibN, setFibN] = useState(7);
  const [knapsackCapacity, setKnapsackCapacity] = useState(5);
  const [knapsackItems] = useState([
    { weight: 1, value: 1 },
    { weight: 2, value: 4 },
    { weight: 3, value: 7 }
  ]);
  const [lcsString1, setLcsString1] = useState('ABCD');
  const [lcsString2, setLcsString2] = useState('ACBD');

  const fibonacciSteps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    const memo: { [key: number]: number } = {};
    const callStack: number[] = [];
    let stepId = 0;

    result.push({
      id: stepId++,
      description: `Calculating Fibonacci(${fibN}) using dynamic programming with memoization.`,
      highlights: [],
      metadata: {
        memo: { ...memo },
        callStack: [...callStack],
        status: 'start',
        target: fibN
      }
    });

    function fib(n: number): number {
      result.push({
        id: stepId++,
        description: t.visualizations.dynamicProgramming.fibonacciCalling(n),
        highlights: [n],
        metadata: {
          memo: { ...memo },
          callStack: [...callStack, n],
          status: 'checking',
          current: n,
          target: fibN
        }
      });

      if (n in memo) {
        result.push({
          id: stepId++,
          description: t.visualizations.dynamicProgramming.fibonacciFoundInMemo(n, memo[n]),
          highlights: [n],
          metadata: {
            memo: { ...memo },
            callStack: [...callStack],
            status: 'memo_hit',
            current: n,
            value: memo[n],
            target: fibN
          }
        });
        return memo[n];
      }

      if (n <= 1) {
        memo[n] = n;
        result.push({
          id: stepId++,
          description: t.visualizations.dynamicProgramming.fibonacciBaseCase(n),
          highlights: [n],
          metadata: {
            memo: { ...memo },
            callStack: [...callStack],
            status: 'base_case',
            current: n,
            value: n,
            target: fibN
          }
        });
        return n;
      }

      result.push({
        id: stepId++,
        description: t.visualizations.dynamicProgramming.fibonacciNotInMemo(n),
        highlights: [n, n-1, n-2],
        metadata: {
          memo: { ...memo },
          callStack: [...callStack],
          status: 'calculating',
          current: n,
          target: fibN
        }
      });

      const result1 = fib(n - 1);
      const result2 = fib(n - 2);
      const value = result1 + result2;
      memo[n] = value;

      result.push({
        id: stepId++,
        description: t.visualizations.dynamicProgramming.fibonacciCalculated(n, result1, result2, value),
        highlights: [n],
        metadata: {
          memo: { ...memo },
          callStack: [...callStack],
          status: 'computed',
          current: n,
          value,
          target: fibN,
          subResults: [result1, result2]
        }
      });

      return value;
    }

    const finalResult = fib(fibN);

    result.push({
      id: stepId++,
      description: t.visualizations.dynamicProgramming.fibonacciFinal(fibN, finalResult, Object.keys(memo).length),
      highlights: [fibN],
      metadata: {
        memo: { ...memo },
        callStack: [],
        status: 'complete',
        current: fibN,
        value: finalResult,
        target: fibN
      }
    });

    return result;
  }, [fibN, t]);

  const knapsackSteps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    const items = knapsackItems;
    const capacity = knapsackCapacity;
    const n = items.length;
    const dp: number[][] = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
    let stepId = 0;

    result.push({
      id: stepId++,
      description: t.visualizations.dynamicProgramming.knapsackStart(capacity, n),
      highlights: [],
      metadata: {
        dp: dp.map(row => [...row]),
        items,
        capacity,
        status: 'start',
        currentItem: -1,
        currentWeight: -1
      }
    });

    // Fill the DP table
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        const item = items[i - 1];
        
        result.push({
          id: stepId++,
          description: t.visualizations.dynamicProgramming.knapsackConsidering(i, w, item.weight, item.value),
          highlights: [],
          metadata: {
            dp: dp.map(row => [...row]),
            items,
            capacity,
            status: 'considering',
            currentItem: i - 1,
            currentWeight: w,
            itemWeight: item.weight,
            itemValue: item.value
          }
        });

        if (item.weight <= w) {
          const takeItem = dp[i - 1][w - item.weight] + item.value;
          const skipItem = dp[i - 1][w];
          dp[i][w] = Math.max(takeItem, skipItem);
          
          result.push({
            id: stepId++,
            description: `Item fits! Comparing: take item (${takeItem}) vs. skip item (${skipItem}). Choosing ${dp[i][w]}.`,
            highlights: [],
            metadata: {
              dp: dp.map(row => [...row]),
              items,
              capacity,
              status: 'comparing',
              currentItem: i - 1,
              currentWeight: w,
              takeValue: takeItem,
              skipValue: skipItem,
              chosen: dp[i][w]
            }
          });
        } else {
          dp[i][w] = dp[i - 1][w];
          
          result.push({
            id: stepId++,
            description: `Item doesn't fit (weight ${item.weight} > capacity ${w}). Copying previous value: ${dp[i][w]}.`,
            highlights: [],
            metadata: {
              dp: dp.map(row => [...row]),
              items,
              capacity,
              status: 'skip',
              currentItem: i - 1,
              currentWeight: w
            }
          });
        }
      }
    }

    // Backtrack to find solution
    const solution: number[] = [];
    let i = n, w = capacity;
    while (i > 0 && w > 0) {
      if (dp[i][w] !== dp[i - 1][w]) {
        solution.unshift(i - 1);
        w -= items[i - 1].weight;
      }
      i--;
    }

    result.push({
      id: stepId++,
      description: t.visualizations.dynamicProgramming.knapsackFinalResult(dp[n][capacity], solution.map(idx => `Item${idx + 1}`)),
      highlights: solution,
      metadata: {
        dp: dp.map(row => [...row]),
        items,
        capacity,
        status: 'complete',
        solution,
        maxValue: dp[n][capacity]
      }
    });

    return result;
  }, [knapsackCapacity, knapsackItems, t]);

  const lcsSteps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    const str1 = lcsString1;
    const str2 = lcsString2;
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    let stepId = 0;

    result.push({
      id: stepId++,
      description: t.visualizations.dynamicProgramming.lcsStart(str1, str2, m, n),
      highlights: [],
      metadata: {
        dp: dp.map(row => [...row]),
        str1,
        str2,
        status: 'start',
        currentI: -1,
        currentJ: -1
      }
    });

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        result.push({
          id: stepId++,
          description: t.visualizations.dynamicProgramming.lcsComparing(i, j, str1[i-1], str2[j-1]),
          highlights: [],
          metadata: {
            dp: dp.map(row => [...row]),
            str1,
            str2,
            status: 'comparing',
            currentI: i - 1,
            currentJ: j - 1,
            char1: str1[i - 1],
            char2: str2[j - 1]
          }
        });

        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          
          result.push({
            id: stepId++,
            description: t.visualizations.dynamicProgramming.lcsMatch(i, j, dp[i][j]),
            highlights: [],
            metadata: {
              dp: dp.map(row => [...row]),
              str1,
              str2,
              status: 'match',
              currentI: i - 1,
              currentJ: j - 1,
              value: dp[i][j]
            }
          });
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          
          result.push({
            id: stepId++,
            description: t.visualizations.dynamicProgramming.lcsDifferent(i, j, dp[i][j]),
            highlights: [],
            metadata: {
              dp: dp.map(row => [...row]),
              str1,
              str2,
              status: 'no_match',
              currentI: i - 1,
              currentJ: j - 1,
              value: dp[i][j],
              leftValue: dp[i - 1][j],
              topValue: dp[i][j - 1]
            }
          });
        }
      }
    }

    // Backtrack to find LCS
    const lcs: string[] = [];
    let i = m, j = n;
    while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
        lcs.unshift(str1[i - 1]);
        i--;
        j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }

    result.push({
      id: stepId++,
      description: t.visualizations.dynamicProgramming.lcsFinal(lcs.join(''), dp[m][n]),
      highlights: [],
      metadata: {
        dp: dp.map(row => [...row]),
        str1,
        str2,
        status: 'complete',
        lcs: lcs.join(''),
        length: dp[m][n]
      }
    });

    return result;
  }, [lcsString1, lcsString2, t]);

  const currentSteps = problem === 'fibonacci' ? fibonacciSteps : 
                     problem === 'knapsack' ? knapsackSteps : lcsSteps;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label>{t.visualizations.dynamicProgramming.problem}:</Label>
          <Select value={problem} onValueChange={(value: DPProblem) => setProblem(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fibonacci">{t.visualizations.dynamicProgramming.fibonacci}</SelectItem>
              <SelectItem value="knapsack">{t.visualizations.dynamicProgramming.knapsack}</SelectItem>
              <SelectItem value="lcs">{t.visualizations.dynamicProgramming.lcs}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {problem === 'fibonacci' && (
          <div className="space-y-2">
            <Label>N ({t.visualizations.dynamicProgramming.fibonacci}):</Label>
            <Input
              type="number"
              value={fibN}
              onChange={(e) => setFibN(parseInt(e.target.value) || 1)}
              min="1"
              max="10"
            />
          </div>
        )}
        
        {problem === 'knapsack' && (
          <div className="space-y-2">
            <Label>{t.visualizations.dynamicProgramming.capacity}:</Label>
            <Input
              type="number"
              value={knapsackCapacity}
              onChange={(e) => setKnapsackCapacity(parseInt(e.target.value) || 1)}
              min="1"
              max="10"
            />
          </div>
        )}
        
        {problem === 'lcs' && (
          <>
            <div className="space-y-2">
              <Label>{t.visualizations.dynamicProgramming.string1}:</Label>
              <Input
                value={lcsString1}
                onChange={(e) => setLcsString1(e.target.value.toUpperCase())}
                maxLength={6}
              />
            </div>
            <div className="space-y-2">
              <Label>{t.visualizations.dynamicProgramming.string2}:</Label>
              <Input
                value={lcsString2}
                onChange={(e) => setLcsString2(e.target.value.toUpperCase())}
                maxLength={6}
              />
            </div>
          </>
        )}
      </div>

      <BaseVisualization
        title={`${t.visualizations.dynamicProgramming.title} - ${
          problem === 'fibonacci' ? t.visualizations.dynamicProgramming.fibonacci : 
          problem === 'knapsack' ? t.visualizations.dynamicProgramming.knapsack : 
          t.visualizations.dynamicProgramming.lcs
        }`}
        description={t.visualizations.dynamicProgramming.description}
        data={[]}
        steps={currentSteps}
        speed={1000}
      >
        {(currentStep, isPlaying) => (
          <div className="w-full space-y-6">
            {/* Problem-specific visualizations */}
            {problem === 'fibonacci' && (
              <>
                {/* Memoization Table */}
                <Card className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{t.visualizations.dynamicProgramming.memoizationTable}</h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {Array.from({ length: fibN + 1 }, (_, i) => {
                      const value = currentStep.metadata?.memo?.[i];
                      const isCurrent = currentStep.metadata?.current === i;
                      const isHighlighted = currentStep.highlights.includes(i);
                      
                      let className = 'p-3 border-2 rounded-lg text-center min-w-[70px] transition-all duration-500 transform hover:scale-105';
                      
                      if (isCurrent) {
                        className += ' bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-500 text-yellow-900 font-bold shadow-lg scale-110 ring-2 ring-yellow-400';
                      } else if (isHighlighted) {
                        className += ' bg-gradient-to-br from-blue-200 to-blue-300 border-blue-500 text-blue-900 font-semibold shadow-md';
                      } else if (value !== undefined) {
                        className += ' bg-gradient-to-br from-green-100 to-green-200 border-green-500 text-green-800 font-medium shadow-sm';
                      } else {
                        className += ' bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 text-gray-600';
                      }
                      
                      return (
                        <div key={i} className={className}>
                          <div className="text-sm font-semibold text-muted-foreground">f({i})</div>
                          <div className="text-xl font-bold mt-1">
                            {value !== undefined ? value : '?'}
                          </div>
                          {value !== undefined && (
                            <div className="text-xs text-muted-foreground mt-1">✓</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Legend for Fibonacci */}
                  <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded"></div>
                      <span>{t.visualizations.common.notFound}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-green-100 to-green-200 border border-green-500 rounded"></div>
                      <span>{t.visualizations.dynamicProgramming.cacheHit}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-300 border border-blue-500 rounded"></div>
                      <span>{t.visualizations.dynamicProgramming.checking}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-yellow-200 to-yellow-300 border border-yellow-500 rounded"></div>
                      <span>{t.visualizations.common.current}</span>
                    </div>
                  </div>
                </Card>

                {/* Call Stack */}
                <Card className="p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.dynamicProgramming.callStack}</div>
                    <div className="text-lg font-mono bg-muted/50 p-3 rounded-lg">
                      [{currentStep.metadata?.callStack?.join(', ') || ''}]
                    </div>
                  </div>
                </Card>
              </>
            )}

            {problem === 'knapsack' && (
              <>
                {/* Items Display */}
                <Card className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{t.visualizations.dynamicProgramming.availableItems}</h3>
                  </div>
                  <div className="flex justify-center gap-4">
                    {knapsackItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 border-2 rounded-lg text-center transition-all duration-300 ${
                          currentStep.metadata?.currentItem === idx
                            ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-500 font-bold shadow-lg transform scale-105'
                            : currentStep.metadata?.solution?.includes(idx)
                            ? 'bg-gradient-to-br from-green-200 to-green-300 border-green-500 shadow-md'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'
                        }`}
                      >
                        <div className="text-sm font-medium">Item {idx + 1}</div>
                        <div className="text-xs mt-1">{t.visualizations.dynamicProgramming.weight}: {item.weight}</div>
                        <div className="text-xs">{t.visualizations.common.value}: {item.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* DP Table */}
                <Card className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{t.visualizations.dynamicProgramming.dpTable}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="mx-auto border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-2 bg-gradient-to-br from-gray-200 to-gray-300 font-semibold">Item/Cap</th>
                          {Array.from({ length: knapsackCapacity + 1 }, (_, w) => (
                            <th key={w} className="border border-gray-300 p-2 bg-gradient-to-br from-gray-200 to-gray-300 text-xs font-semibold">{w}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentStep.metadata?.dp?.map((row: number[], i: number) => (
                          <tr key={i}>
                            <td className="border border-gray-300 p-2 bg-gradient-to-br from-gray-100 to-gray-200 text-xs font-medium">
                              {i === 0 ? '∅' : `Item ${i}`}
                            </td>
                            {row.map((cell, w) => {
                              const isCurrent = currentStep.metadata?.currentItem === i - 1 && 
                                              currentStep.metadata?.currentWeight === w;
                              return (
                                <td
                                  key={w}
                                  className={`border border-gray-300 p-2 text-center text-sm transition-all duration-300 ${
                                    isCurrent
                                      ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 font-bold shadow-lg'
                                      : cell > 0
                                      ? 'bg-gradient-to-br from-blue-50 to-blue-100'
                                      : 'bg-white'
                                  }`}
                                >
                                  {cell}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </>
            )}

            {problem === 'lcs' && (
              <>
                {/* Strings Display */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.dynamicProgramming.string1}</div>
                      <div className="flex justify-center gap-1">
                        {lcsString1.split('').map((char, idx) => (
                          <div
                            key={idx}
                            className={`p-2 border-2 rounded text-center transition-all duration-300 ${
                              currentStep.metadata?.currentI === idx
                                ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-500 font-bold shadow-lg transform scale-105'
                                : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'
                            }`}
                          >
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.dynamicProgramming.string2}</div>
                      <div className="flex justify-center gap-1">
                        {lcsString2.split('').map((char, idx) => (
                          <div
                            key={idx}
                            className={`p-2 border-2 rounded text-center transition-all duration-300 ${
                              currentStep.metadata?.currentJ === idx
                                ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-500 font-bold shadow-lg transform scale-105'
                                : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'
                            }`}
                          >
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* DP Table */}
                <Card className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{t.visualizations.dynamicProgramming.dpTable} - {t.visualizations.dynamicProgramming.lcs}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="mx-auto border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-2 bg-gradient-to-br from-gray-200 to-gray-300 font-semibold"></th>
                          <th className="border border-gray-300 p-2 bg-gradient-to-br from-gray-200 to-gray-300 font-semibold">∅</th>
                          {lcsString2.split('').map((char, j) => (
                            <th key={j} className="border border-gray-300 p-2 bg-gradient-to-br from-gray-200 to-gray-300 text-xs font-semibold">{char}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentStep.metadata?.dp?.map((row: number[], i: number) => (
                          <tr key={i}>
                            <td className="border border-gray-300 p-2 bg-gradient-to-br from-gray-100 to-gray-200 text-xs font-medium">
                              {i === 0 ? '∅' : lcsString1[i - 1]}
                            </td>
                            {row.map((cell, j) => {
                              const isCurrent = currentStep.metadata?.currentI === i - 1 && 
                                              currentStep.metadata?.currentJ === j - 1;
                              return (
                                <td
                                  key={j}
                                  className={`border border-gray-300 p-2 text-center text-sm transition-all duration-300 ${
                                    isCurrent
                                      ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 font-bold shadow-lg'
                                      : cell > 0
                                      ? 'bg-gradient-to-br from-blue-50 to-blue-100'
                                      : 'bg-white'
                                  }`}
                                >
                                  {cell}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </>
            )}

            {/* Status Display */}
            <div className="flex justify-center">
              <div className={`p-4 rounded-lg border-2 ${
                currentStep.metadata?.status === 'complete' 
                  ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                  : currentStep.metadata?.status === 'memo_hit'
                  ? 'bg-purple-100 border-purple-500 dark:bg-purple-900/30 dark:border-purple-700'
                  : currentStep.metadata?.status === 'match'
                  ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                  : 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-700'
              }`}>
                <div className="text-center">
                  <div className="font-bold text-lg">
                    {currentStep.metadata?.status === 'complete' && t.visualizations.dynamicProgramming.found}
                    {currentStep.metadata?.status === 'memo_hit' && t.visualizations.dynamicProgramming.cacheHit}
                    {currentStep.metadata?.status === 'match' && t.visualizations.common.match}
                    {currentStep.metadata?.status === 'calculating' && t.visualizations.common.calculating}
                    {currentStep.metadata?.status === 'comparing' && t.visualizations.dynamicProgramming.comparing}
                    {currentStep.metadata?.status === 'start' && t.visualizations.common.start}
                  </div>
                  {problem === 'fibonacci' && currentStep.metadata?.value !== undefined && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {t.visualizations.dynamicProgramming.value}: {currentStep.metadata.value}
                    </div>
                  )}
                  {problem === 'knapsack' && currentStep.metadata?.maxValue !== undefined && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {t.visualizations.dynamicProgramming.maxValue}: {currentStep.metadata.maxValue}
                    </div>
                  )}
                  {problem === 'lcs' && currentStep.metadata?.lcs && (
                    <div className="text-sm text-muted-foreground mt-1">
                      LCS: "{currentStep.metadata.lcs}" ({t.visualizations.dynamicProgramming.length}: {currentStep.metadata.length})
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Algorithm Info */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:bg-gradient-to-br dark:from-yellow-900/20 dark:to-yellow-800/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="text-center">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  {t.visualizations.dynamicProgramming.title}: {t.visualizations.dynamicProgramming.description}
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                  {problem === 'fibonacci' && t.visualizations.dynamicProgramming.memoizationVsBruteForce}
                  {problem === 'knapsack' && t.visualizations.dynamicProgramming.knapsackComplexity}
                  {problem === 'lcs' && t.visualizations.dynamicProgramming.lcsComplexity}
                </div>
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
