'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/lib/i18n';

interface BacktrackingVisualizationProps {
  initialTarget?: number;
  initialNumbers?: number[];
}

interface SolutionStep {
  currentPath: number[];
  currentSum: number;
  remainingNumbers: number[];
  decision: 'add' | 'skip' | 'backtrack' | 'found' | 'reject';
  level: number;
}

export function BacktrackingVisualization({ 
  initialTarget = 10,
  initialNumbers = [2, 3, 5, 7]
}: BacktrackingVisualizationProps) {
  const [target, setTarget] = useState(initialTarget);
  const [numbers, setNumbers] = useState(initialNumbers);
  const [inputValue, setInputValue] = useState('');
  const { t } = useI18n();

  const steps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    const solutions: number[][] = [];
    
    function backtrack(
      index: number,
      currentPath: number[],
      currentSum: number,
      stepId: number
    ): number {
      // Add current state to steps
      result.push({
        id: stepId,
        description: t.visualizations.backtracking.currentState(currentPath.join(', '), currentSum, index),
        highlights: currentPath.map(num => numbers.indexOf(num)),
        metadata: {
          currentPath: [...currentPath],
          currentSum,
          index,
          target,
          status: 'exploring',
          level: currentPath.length,
          remainingNumbers: numbers.slice(index)
        }
      });
      stepId++;

      // Base case: found a solution
      if (currentSum === target) {
        solutions.push([...currentPath]);
        result.push({
          id: stepId,
          description: t.visualizations.backtracking.solutionFoundDetail(currentPath.join(', '), currentSum),
          highlights: currentPath.map(num => numbers.indexOf(num)),
          metadata: {
            currentPath: [...currentPath],
            currentSum,
            index,
            target,
            status: 'found',
            level: currentPath.length,
            solutionCount: solutions.length
          }
        });
        return stepId + 1;
      }

      // Base case: sum exceeded or no more numbers
      if (currentSum > target || index >= numbers.length) {
        result.push({
          id: stepId,
          description: currentSum > target 
            ? `Sum exceeded target (${currentSum} > ${target}). Backtracking.`
            : `No more numbers to explore. Backtracking.`,
          highlights: [],
          metadata: {
            currentPath: [...currentPath],
            currentSum,
            index,
            target,
            status: 'reject',
            level: currentPath.length
          }
        });
        return stepId + 1;
      }

      // Try including current number
      const currentNumber = numbers[index];
      result.push({
        id: stepId,
        description: t.visualizations.backtracking.tryingInclude(currentNumber, currentSum + currentNumber),
        highlights: [index],
        metadata: {
          currentPath: [...currentPath],
          currentSum,
          index,
          target,
          status: 'considering',
          level: currentPath.length,
          consideringNumber: currentNumber
        }
      });
      stepId++;

      if (currentSum + currentNumber <= target) {
        currentPath.push(currentNumber);
        result.push({
          id: stepId,
          description: t.visualizations.backtracking.addingNumber(currentNumber),
          highlights: [index],
          metadata: {
            currentPath: [...currentPath],
            currentSum: currentSum + currentNumber,
            index,
            target,
            status: 'add',
            level: currentPath.length,
            addedNumber: currentNumber
          }
        });
        stepId++;

        stepId = backtrack(index + 1, currentPath, currentSum + currentNumber, stepId);

        // Backtrack
        const removed = currentPath.pop();
        result.push({
          id: stepId,
          description: t.visualizations.backtracking.backtrackingRemove(removed!),
          highlights: [],
          metadata: {
            currentPath: [...currentPath],
            currentSum,
            index,
            target,
            status: 'backtrack',
            level: currentPath.length,
            removedNumber: removed
          }
        });
        stepId++;
      } else {
        result.push({
          id: stepId,
          description: `${currentNumber} cannot be added (${currentSum} + ${currentNumber} > ${target})`,
          highlights: [index],
          metadata: {
            currentPath: [...currentPath],
            currentSum,
            index,
            target,
            status: 'reject',
            level: currentPath.length,
            rejectedNumber: currentNumber
          }
        });
        stepId++;
      }

      // Try skipping current number
      result.push({
        id: stepId,
        description: t.visualizations.backtracking.skippingNumber(currentNumber),
        highlights: [index],
        metadata: {
          currentPath: [...currentPath],
          currentSum,
          index,
          target,
          status: 'skip',
          level: currentPath.length,
          skippedNumber: currentNumber
        }
      });
      stepId++;

      stepId = backtrack(index + 1, currentPath, currentSum, stepId);

      return stepId;
    }

    result.push({
      id: 0,
      description: t.visualizations.backtracking.startingSearch(target, numbers.join(', ')),
      highlights: [],
      metadata: {
        currentPath: [],
        currentSum: 0,
        index: 0,
        target,
        status: 'start',
        level: 0
      }
    });

    backtrack(0, [], 0, 1);

    result.push({
      id: result.length,
      description: t.visualizations.backtracking.searchCompleted(solutions.length, solutions.map(sol => `[${sol.join(', ')}]`).join(', ')),
      highlights: [],
      metadata: {
        currentPath: [],
        currentSum: 0,
        index: numbers.length,
        target,
        status: 'complete',
        level: 0,
        solutions,
        solutionCount: solutions.length
      }
    });

    return result;
  }, [numbers, target, t]);

  const handleNumbersChange = () => {
    if (inputValue.trim()) {
      const newNumbers = inputValue.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num) && num > 0);
      if (newNumbers.length > 0) {
        setNumbers(newNumbers);
        setInputValue('');
      }
    }
  };

  const generateRandomExample = () => {
    const newNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 8) + 1);
    const newTarget = Math.floor(Math.random() * 10) + 5;
    setNumbers(newNumbers);
    setTarget(newTarget);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="numbers-input">{t.visualizations.backtracking.availableNumbers}:</Label>
          <div className="flex gap-2">
            <Input
              id="numbers-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ex: 2,3,5,7"
              onKeyDown={(e) => e.key === 'Enter' && handleNumbersChange()}
            />
            <Button onClick={handleNumbersChange} variant="outline" size="sm">
              {t.visualizations.common.apply}
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="target-input">{t.visualizations.backtracking.targetSum}:</Label>
          <Input
            id="target-input"
            type="number"
            value={target}
            onChange={(e) => setTarget(parseInt(e.target.value) || 0)}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label>{t.visualizations.common.actions}:</Label>
          <Button onClick={generateRandomExample} variant="outline" className="w-full">
            {t.visualizations.common.generateRandom}
          </Button>
        </div>
      </div>

      <BaseVisualization
        title={t.visualizations.backtracking.title}
        description={t.visualizations.backtracking.description}
        data={numbers}
        steps={steps}
        speed={1200}
      >
        {(currentStep, isPlaying) => (
          <div className="w-full space-y-6">
            {/* Numbers Display */}
            <div className="flex flex-wrap justify-center gap-2">
              {numbers.map((number, index) => {
                const isHighlighted = currentStep.highlights.includes(index);
                const isInCurrentPath = currentStep.metadata?.currentPath?.includes(number);
                const isConsidering = currentStep.metadata?.consideringNumber === number;
                
                let className = 'p-3 rounded-lg border-2 font-bold text-lg transition-all duration-300';
                
                if (isInCurrentPath) {
                  className += ' bg-green-200 border-green-500 text-green-800 shadow-lg transform scale-110';
                } else if (isConsidering) {
                  className += ' bg-yellow-200 border-yellow-500 text-yellow-800 shadow-lg';
                } else if (isHighlighted) {
                  className += ' bg-blue-200 border-blue-500 text-blue-800 shadow-md';
                } else {
                  className += ' bg-gray-100 border-gray-300 text-gray-700';
                }
                
                return (
                  <div key={index} className={className}>
                    {number}
                  </div>
                );
              })}
            </div>

            {/* Current State */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.backtracking.currentPath}</div>
                  <div className="text-lg font-bold text-blue-600">
                    [{currentStep.metadata?.currentPath?.join(', ') || ''}]
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.backtracking.currentSum}</div>
                  <div className="text-lg font-bold text-purple-600">
                    {currentStep.metadata?.currentSum || 0}
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.common.target}</div>
                  <div className="text-lg font-bold text-orange-600">
                    {currentStep.metadata?.target || 0}
                  </div>
                </div>
              </Card>
            </div>

            {/* Decision Tree Visualization */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="text-center mb-4">
                <div className="text-sm font-medium text-muted-foreground">
                  {t.visualizations.backtracking.decisionTree}: {currentStep.metadata?.level || 0}
                </div>
                <div className="flex justify-center mt-2">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-200 border border-green-500 rounded"></div>
                      <span>{t.visualizations.backtracking.included}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-yellow-200 border border-yellow-500 rounded"></div>
                      <span>{t.visualizations.backtracking.considering}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-blue-200 border border-blue-500 rounded"></div>
                      <span>{t.visualizations.backtracking.exploring}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Display */}
            <div className="flex justify-center">
              <div className={`p-4 rounded-lg border-2 ${
                currentStep.metadata?.status === 'found' 
                  ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                  : currentStep.metadata?.status === 'reject'
                  ? 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-700'
                  : currentStep.metadata?.status === 'backtrack'
                  ? 'bg-orange-100 border-orange-500 dark:bg-orange-900/30 dark:border-orange-700'
                  : currentStep.metadata?.status === 'add'
                  ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                  : currentStep.metadata?.status === 'skip'
                  ? 'bg-gray-100 border-gray-500 dark:bg-gray-900/30 dark:border-gray-700'
                  : 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-700'
              }`}>
                <div className="text-center">
                  <div className="font-bold text-lg">
                    {currentStep.metadata?.status === 'found' && t.visualizations.backtracking.solutionFound + '!'}
                    {currentStep.metadata?.status === 'reject' && t.visualizations.backtracking.pathRejected}
                    {currentStep.metadata?.status === 'backtrack' && t.visualizations.backtracking.backtrack}
                    {currentStep.metadata?.status === 'add' && t.visualizations.backtracking.addNumber}
                    {currentStep.metadata?.status === 'skip' && t.visualizations.backtracking.skipNumber}
                    {currentStep.metadata?.status === 'exploring' && t.visualizations.backtracking.exploring}
                    {currentStep.metadata?.status === 'considering' && t.visualizations.backtracking.considering}
                    {currentStep.metadata?.status === 'complete' && t.visualizations.backtracking.searchComplete}
                    {currentStep.metadata?.status === 'start' && t.visualizations.backtracking.startSearch}
                  </div>
                  {currentStep.metadata?.solutionCount !== undefined && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {t.visualizations.backtracking.solutionCount(currentStep.metadata.solutionCount)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Algorithm Info */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="text-center">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  {t.visualizations.backtracking.complexityInfo}
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                  {t.visualizations.backtracking.pruningNote}
                </div>
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
