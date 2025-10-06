'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, ArrayElement, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useI18n } from '@/lib/i18n';

interface BinarySearchVisualizationProps {
  initialArray?: number[];
  initialTarget?: number;
}

export function BinarySearchVisualization({ 
  initialArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
  initialTarget = 11
}: BinarySearchVisualizationProps) {
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
      description: t.visualizations.binarySearch.initializing(array.length, target, right),
      highlights: [],
      pointers: { left, right },
      metadata: { 
        target,
        status: 'searching',
        searchSpace: array.length
      }
    });

    let iteration = 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = array[mid];
      
      result.push({
        id: iteration,
        description: t.visualizations.binarySearch.iteration(iteration, left, right, mid, midValue),
        highlights: [mid],
        pointers: { left, right, mid },
        metadata: { 
          target,
          midValue,
          status: 'checking',
          searchSpace: right - left + 1,
          iteration
        }
      });

      if (midValue === target) {
        result.push({
          id: iteration + 0.5,
          description: t.visualizations.binarySearch.targetFound(midValue, target, mid),
          highlights: [mid],
          pointers: { left, right, mid },
          metadata: { 
            target,
            midValue,
            status: 'found',
            foundIndex: mid,
            iteration
          }
        });
        break;
      } else if (midValue < target) {
        result.push({
          id: iteration + 0.3,
          description: t.visualizations.binarySearch.targetInRightHalf(midValue, target, mid + 1),
          highlights: [mid],
          pointers: { left, right, mid },
          metadata: { 
            target,
            midValue,
            status: 'go_right',
            searchSpace: right - left + 1,
            iteration
          }
        });
        left = mid + 1;
      } else {
        result.push({
          id: iteration + 0.3,
          description: t.visualizations.binarySearch.targetInLeftHalf(midValue, target, mid - 1),
          highlights: [mid],
          pointers: { left, right, mid },
          metadata: { 
            target,
            midValue,
            status: 'go_left',
            searchSpace: right - left + 1,
            iteration
          }
        });
        right = mid - 1;
      }

      if (left <= right) {
        result.push({
          id: iteration + 0.7,
          description: t.visualizations.binarySearch.newSearchSpace(left, right, right - left + 1),
          highlights: Array.from({ length: right - left + 1 }, (_, i) => left + i),
          pointers: { left, right },
          metadata: { 
            target,
            status: 'searching',
            searchSpace: right - left + 1,
            iteration
          }
        });
      }
      
      iteration++;
    }

    // If not found
    if (left > right && result[result.length - 1].metadata?.status !== 'found') {
      result.push({
        id: iteration,
        description: t.visualizations.binarySearch.targetNotFound(left, right, target),
        highlights: [],
        pointers: { left: left - 1, right: right + 1 },
        metadata: { 
          target,
          status: 'not_found',
          iteration
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
    const size = 10;
    const newArray = Array.from({ length: size }, (_, i) => (i + 1) * 2 + Math.floor(Math.random() * 2));
    setArray(newArray.sort((a, b) => a - b));
    setTarget(newArray[Math.floor(Math.random() * newArray.length)]);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="array-input">{t.visualizations.binarySearch.sortedArray}:</Label>
          <div className="flex gap-2">
            <Input
              id="array-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ex: 1,3,5,7,9,11"
              onKeyDown={(e) => e.key === 'Enter' && handleArrayChange()}
            />
            <Button onClick={handleArrayChange} variant="outline" size="sm">
              {t.visualizations.common.apply}
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="target-input">{t.visualizations.common.target}:</Label>
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
        title={t.visualizations.binarySearch.title}
        description={t.visualizations.binarySearch.description}
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
                const isMidPointer = currentStep.pointers?.mid === index;
                
                let elementClassName = '';
                let pointerLabel = '';
                
                if (isMidPointer) {
                  if (currentStep.metadata?.status === 'found') {
                    elementClassName = 'bg-green-200 border-green-500 text-green-800 shadow-lg transform scale-110';
                  } else if (currentStep.metadata?.status === 'go_left') {
                    elementClassName = 'bg-red-200 border-red-500 text-red-800 shadow-lg';
                  } else if (currentStep.metadata?.status === 'go_right') {
                    elementClassName = 'bg-orange-200 border-orange-500 text-orange-800 shadow-lg';
                  } else {
                    elementClassName = 'bg-blue-200 border-blue-500 text-blue-800 shadow-lg';
                  }
                  pointerLabel = 'M';
                } else if (isHighlighted) {
                  elementClassName = 'bg-purple-100 border-purple-300 text-purple-800';
                }
                
                if (isLeftPointer && !isMidPointer) pointerLabel = 'L';
                if (isRightPointer && !isMidPointer) pointerLabel = 'R';
                
                return (
                  <ArrayElement
                    key={index}
                    value={value}
                    index={index}
                    isHighlighted={isHighlighted || isMidPointer}
                    isPointer={isLeftPointer || isRightPointer || isMidPointer}
                    pointerLabel={pointerLabel}
                    className={elementClassName}
                  />
                );
              })}
            </div>

            {/* Search Information */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Left</div>
                <div className="text-xl font-bold text-blue-800 dark:text-blue-200">
                  {currentStep.pointers?.left ?? '-'}
                </div>
              </div>
              
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400">Mid</div>
                <div className="text-xl font-bold text-purple-800 dark:text-purple-200">
                  {currentStep.pointers?.mid ?? '-'}
                </div>
              </div>
              
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                <div className="text-sm font-medium text-orange-600 dark:text-orange-400">Right</div>
                <div className="text-xl font-bold text-orange-800 dark:text-orange-200">
                  {currentStep.pointers?.right ?? '-'}
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{t.visualizations.binarySearch.searchSpaceLabel}</div>
                <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {currentStep.metadata?.searchSpace ?? 0}
                </div>
              </div>
            </div>

            {/* Comparison Display */}
            {currentStep.metadata && currentStep.pointers?.mid !== undefined && (
              <div className="flex justify-center">
                <div className={`p-4 rounded-lg border-2 ${
                  currentStep.metadata.status === 'found' 
                    ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                    : currentStep.metadata.status === 'go_left'
                    ? 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-700'
                    : currentStep.metadata.status === 'go_right'
                    ? 'bg-orange-100 border-orange-500 dark:bg-orange-900/30 dark:border-orange-700'
                    : 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-700'
                }`}>
                  <div className="text-center">
                    <div className="text-lg font-bold">
                      {currentStep.metadata.midValue} {
                        currentStep.metadata.status === 'found' ? '==' :
                        currentStep.metadata.status === 'go_right' ? '<' : '>'
                      } {currentStep.metadata.target}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {t.visualizations.binarySearch.comparisonLabel} ({currentStep.pointers.mid})
                    </div>
                    {currentStep.metadata.status === 'found' && (
                      <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">
                        {t.visualizations.binarySearch.elementFound}
                      </div>
                    )}
                    {currentStep.metadata.status === 'not_found' && (
                      <div className="text-sm font-medium text-red-600 dark:text-red-400 mt-2">
                        {t.visualizations.binarySearch.elementNotFound}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Complexity Information */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="text-center">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Complexity: O(log n) - Iteration {currentStep.metadata?.iteration || 1}
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                  {t.visualizations.binarySearch.maxIterations
                    .replace('{max}', Math.ceil(Math.log2(array.length)).toString())
                    .replace('{size}', array.length.toString())}
                </div>
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
