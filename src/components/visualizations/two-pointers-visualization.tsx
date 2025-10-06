'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, ArrayElement, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useI18n } from '@/lib/i18n';

interface TwoPointersVisualizationProps {
  initialArray?: number[];
  initialTarget?: number;
}

export function TwoPointersVisualization({ 
  initialArray = [1, 2, 3, 4, 6, 8, 9, 14, 15],
  initialTarget = 13
}: TwoPointersVisualizationProps) {
  const [array, setArray] = useState(initialArray.sort((a, b) => a - b));
  const [target, setTarget] = useState(initialTarget);
  const [inputValue, setInputValue] = useState('');
  const { t } = useI18n();

  const steps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    let left = 0;
    let right = array.length - 1;

    // Initial step
    result.push({
      id: 0,
      description: t.visualizations.twoPointers.initializing(array[left], right, array[right], target),
      highlights: [left, right],
      pointers: { left, right },
      metadata: { 
        currentSum: array[left] + array[right],
        target,
        status: 'searching'
      }
    });

    while (left < right) {
      const currentSum = array[left] + array[right];
      
      if (currentSum === target) {
        result.push({
          id: result.length,
          description: t.visualizations.twoPointers.found(array[left], array[right], currentSum, target, left, right),
          highlights: [left, right],
          pointers: { left, right },
          metadata: { 
            currentSum,
            target,
            status: 'found',
            result: [left, right]
          }
        });
        break;
      } else if (currentSum < target) {
        result.push({
          id: result.length,
          description: t.visualizations.twoPointers.tooSmallDetail(array[left], array[right], currentSum, target),
          highlights: [left, right],
          pointers: { left, right },
          metadata: { 
            currentSum,
            target,
            status: 'too_small',
            nextAction: 'move_left'
          }
        });
        left++;
        
        if (left < right) {
          result.push({
            id: result.length,
            description: t.visualizations.twoPointers.leftMoved(left, array[left], array[right], array[left] + array[right]),
            highlights: [left, right],
            pointers: { left, right },
            metadata: { 
              currentSum: array[left] + array[right],
              target,
              status: 'searching'
            }
          });
        }
      } else {
        result.push({
          id: result.length,
          description: t.visualizations.twoPointers.tooLargeDetail(array[left], array[right], currentSum, target),
          highlights: [left, right],
          pointers: { left, right },
          metadata: { 
            currentSum,
            target,
            status: 'too_large',
            nextAction: 'move_right'
          }
        });
        right--;
        
        if (left < right) {
          result.push({
            id: result.length,
            description: t.visualizations.twoPointers.rightMoved(right, array[right], array[left], array[left] + array[right]),
            highlights: [left, right],
            pointers: { left, right },
            metadata: { 
              currentSum: array[left] + array[right],
              target,
              status: 'searching'
            }
          });
        }
      }
    }

    // If no solution found
    if (left >= right && result[result.length - 1].metadata?.status !== 'found') {
      result.push({
        id: result.length,
        description: t.visualizations.twoPointers.notFound(target),
        highlights: [],
        pointers: { left, right },
        metadata: { 
          currentSum: 0,
          target,
          status: 'not_found'
        }
      });
    }

    return result;
  }, [array, target, t]);

  const handleArrayChange = () => {
    if (inputValue.trim()) {
      const newArray = inputValue.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
      if (newArray.length > 0) {
        setArray(newArray.sort((a, b) => a - b));
        setInputValue('');
      }
    }
  };

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 20) + 1)
      .sort((a, b) => a - b);
    setArray(newArray);
    setTarget(Math.floor(Math.random() * 30) + 5);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="array-input">{t.visualizations.twoPointers.sortedArray}:</Label>
          <div className="flex gap-2">
            <Input
              id="array-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ex: 1,2,3,4,6,8,9"
              onKeyDown={(e) => e.key === 'Enter' && handleArrayChange()}
            />
            <Button onClick={handleArrayChange} variant="outline" size="sm">
              {t.visualizations.common.apply}
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="target-input">{t.visualizations.common.targetValue}</Label>
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
          <Button onClick={generateRandomArray} variant="outline" className="w-full">
            {t.visualizations.common.generateRandom}
          </Button>
        </div>
      </div>

      <BaseVisualization
        title={t.visualizations.twoPointers.title}
        description={t.visualizations.twoPointers.description}
        data={array}
        steps={steps}
        speed={1200}
      >
        {(currentStep, isPlaying) => (
          <div className="w-full space-y-6">
            {/* Array Visualization */}
            <div className="flex flex-wrap justify-center gap-2">
              {array.map((value, index) => {
                const isHighlighted = currentStep.highlights.includes(index);
                const isLeftPointer = currentStep.pointers?.left === index;
                const isRightPointer = currentStep.pointers?.right === index;
                
                let elementClassName = '';
                if (currentStep.metadata?.status === 'found' && isHighlighted) {
                  elementClassName = 'bg-green-200 border-green-500 text-green-800 shadow-lg transform scale-105';
                } else if (isHighlighted) {
                  if (currentStep.metadata?.status === 'too_small') {
                    elementClassName = 'bg-orange-200 border-orange-500 text-orange-800 shadow-lg';
                  } else if (currentStep.metadata?.status === 'too_large') {
                    elementClassName = 'bg-red-200 border-red-500 text-red-800 shadow-lg';
                  } else {
                    elementClassName = 'bg-blue-200 border-blue-500 text-blue-800 shadow-lg';
                  }
                }
                
                return (
                  <ArrayElement
                    key={index}
                    value={value}
                    index={index}
                    isHighlighted={isHighlighted}
                    isPointer={isLeftPointer || isRightPointer}
                    pointerLabel={isLeftPointer ? 'L' : isRightPointer ? 'R' : ''}
                    className={elementClassName}
                  />
                );
              })}
            </div>

            {/* Calculation Display */}
            {currentStep.metadata && currentStep.pointers && (
              <div className="flex justify-center">
                <div className={`p-4 rounded-lg border-2 ${
                  currentStep.metadata.status === 'found' 
                    ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                    : currentStep.metadata.status === 'too_small'
                    ? 'bg-orange-100 border-orange-500 dark:bg-orange-900/30 dark:border-orange-700'
                    : currentStep.metadata.status === 'too_large'
                    ? 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-700'
                    : 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-700'
                }`}>
                  <div className="text-center">
                    <div className="text-lg font-bold">
                      {array[currentStep.pointers.left]} + {array[currentStep.pointers.right]} = {currentStep.metadata.currentSum}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {t.visualizations.twoPointers.target}: {currentStep.metadata.target}
                    </div>
                    {currentStep.metadata.status === 'found' && (
                      <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">
                        {t.visualizations.twoPointers.solutionFound}
                      </div>
                    )}
                    {currentStep.metadata.status === 'not_found' && (
                      <div className="text-sm font-medium text-red-600 dark:text-red-400 mt-2">
                        {t.visualizations.twoPointers.noSolutionFound}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Status Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400">{t.visualizations.twoPointers.pointerPositions}</div>
                <div className="text-lg font-bold text-purple-800 dark:text-purple-200">
                  L: {currentStep.pointers?.left} | R: {currentStep.pointers?.right}
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{t.visualizations.common.status}</div>
                <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {currentStep.metadata?.status === 'found' && t.visualizations.common.found}
                  {currentStep.metadata?.status === 'too_small' && t.visualizations.twoPointers.tooSmall}
                  {currentStep.metadata?.status === 'too_large' && t.visualizations.twoPointers.tooLarge}
                  {currentStep.metadata?.status === 'searching' && t.visualizations.common.searching}
                  {currentStep.metadata?.status === 'not_found' && t.visualizations.twoPointers.notFoundStatus}
                </div>
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
