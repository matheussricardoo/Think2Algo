'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, ArrayElement, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useI18n } from '@/lib/i18n';

interface SlidingWindowVisualizationProps {
  initialArray?: number[];
  initialWindowSize?: number;
}

export function SlidingWindowVisualization({ 
  initialArray = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0],
  initialWindowSize = 3
}: SlidingWindowVisualizationProps) {
  const [array, setArray] = useState(initialArray);
  const [windowSize, setWindowSize] = useState(initialWindowSize);
  const [inputValue, setInputValue] = useState('');
  const { t } = useI18n();

  const steps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    
    if (windowSize > array.length) {
      return [{
        id: 0,
        description: t.visualizations.slidingWindow.windowTooLarge,
        highlights: [],
        pointers: {}
      }];
    }

    // Initial step
    result.push({
      id: 0,
      description: t.visualizations.slidingWindow.initializing(windowSize),
      highlights: Array.from({ length: windowSize }, (_, i) => i),
      pointers: { left: 0, right: windowSize - 1 },
      metadata: { 
        currentSum: array.slice(0, windowSize).reduce((sum, val) => sum + val, 0),
        maxSum: array.slice(0, windowSize).reduce((sum, val) => sum + val, 0),
        maxStart: 0
      }
    });

    let currentSum = array.slice(0, windowSize).reduce((sum, val) => sum + val, 0);
    let maxSum = currentSum;
    let maxStart = 0;

    // Sliding the window
    for (let i = 1; i <= array.length - windowSize; i++) {
      // Remove the leftmost element and add the new rightmost element
      currentSum = currentSum - array[i - 1] + array[i + windowSize - 1];
      
      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxStart = i;
      }

      result.push({
        id: i,
        description: t.visualizations.slidingWindow.slidingWindow(array[i - 1], i - 1, array[i + windowSize - 1], i + windowSize - 1, currentSum),
        highlights: Array.from({ length: windowSize }, (_, j) => i + j),
        pointers: { left: i, right: i + windowSize - 1 },
        metadata: { 
          currentSum,
          maxSum,
          maxStart,
          removed: array[i - 1],
          added: array[i + windowSize - 1]
        }
      });
    }

    // Final step showing the result
    result.push({
      id: result.length,
      description: t.visualizations.slidingWindow.completed(maxSum, maxStart),
      highlights: Array.from({ length: windowSize }, (_, j) => maxStart + j),
      pointers: { left: maxStart, right: maxStart + windowSize - 1 },
      metadata: { 
        currentSum: maxSum,
        maxSum,
        maxStart,
        isComplete: true
      }
    });

    return result;
  }, [array, windowSize, t]);

  const handleArrayChange = () => {
    if (inputValue.trim()) {
      const newArray = inputValue.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
      if (newArray.length > 0) {
        setArray(newArray);
        setInputValue('');
      }
    }
  };

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
    setArray(newArray);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="array-input">{t.visualizations.common.arrayCommaSeparated}</Label>
          <div className="flex gap-2">
            <Input
              id="array-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ex: 4,2,1,7,8,1,2,8,1,0"
              onKeyDown={(e) => e.key === 'Enter' && handleArrayChange()}
            />
            <Button onClick={handleArrayChange} variant="outline">
              {t.visualizations.common.apply}
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="window-size">{t.visualizations.common.windowSize}</Label>
          <div className="flex gap-2">
            <Input
              id="window-size"
              type="number"
              min="1"
              max={array.length}
              value={windowSize}
              onChange={(e) => setWindowSize(Math.max(1, Math.min(array.length, parseInt(e.target.value) || 1)))}
              className="w-24"
            />
            <Button onClick={generateRandomArray} variant="outline">
              {t.visualizations.common.randomArray}
            </Button>
          </div>
        </div>
      </div>

      <BaseVisualization
        title={t.visualizations.slidingWindow.title}
        description={t.visualizations.slidingWindow.description}
        data={array}
        steps={steps}
        speed={1500}
      >
        {(currentStep, isPlaying) => (
          <div className="w-full space-y-6">
            {/* Array Visualization */}
            <div className="flex flex-wrap justify-center gap-2">
              {array.map((value, index) => {
                const isHighlighted = currentStep.highlights.includes(index);
                const isLeftPointer = currentStep.pointers?.left === index;
                const isRightPointer = currentStep.pointers?.right === index;
                
                return (
                  <ArrayElement
                    key={index}
                    value={value}
                    index={index}
                    isHighlighted={isHighlighted}
                    isPointer={isLeftPointer || isRightPointer}
                    pointerLabel={isLeftPointer ? 'L' : isRightPointer ? 'R' : ''}
                    className={
                      isHighlighted 
                        ? 'bg-blue-200 border-blue-500 text-blue-800 shadow-lg transform scale-105' 
                        : ''
                    }
                  />
                );
              })}
            </div>

            {/* Window Information */}
            {currentStep.metadata && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{t.visualizations.slidingWindow.currentSum}</div>
                  <div className="text-xl font-bold text-blue-800 dark:text-blue-200">
                    {currentStep.metadata.currentSum}
                  </div>
                </div>
                
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">{t.visualizations.slidingWindow.maxSum}</div>
                  <div className="text-xl font-bold text-green-800 dark:text-green-200">
                    {currentStep.metadata.maxSum}
                  </div>
                </div>
                
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">{t.visualizations.slidingWindow.maxPosition}</div>
                  <div className="text-xl font-bold text-purple-800 dark:text-purple-200">
                    {currentStep.metadata.maxStart}
                  </div>
                </div>
              </div>
            )}

            {/* Operation Details */}
            {currentStep.metadata && currentStep.metadata.removed !== undefined && (
              <div className="flex justify-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg border border-yellow-300 dark:border-yellow-700">
                  <div className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
                    <span className="text-red-600 font-bold">-{currentStep.metadata.removed}</span>
                    {' + '}
                    <span className="text-green-600 font-bold">+{currentStep.metadata.added}</span>
                    {' = '}
                    <span className="font-bold">{currentStep.metadata.currentSum}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
