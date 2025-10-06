'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/lib/i18n';

type HeapOperation = 'insert' | 'extractMax' | 'heapify';
type HeapType = 'max' | 'min';

interface HeapVisualizationProps {
  initialHeap?: number[];
  initialType?: HeapType;
}

export function HeapVisualization({ 
  initialHeap = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1],
  initialType = 'max' 
}: HeapVisualizationProps) {
  const [heap, setHeap] = useState(initialHeap);
  const [heapType, setHeapType] = useState<HeapType>(initialType);
  const [operation, setOperation] = useState<HeapOperation>('insert');
  const [insertValue, setInsertValue] = useState(15);
  const [inputArray, setInputArray] = useState('');
  const { t } = useI18n();

  const steps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    let workingHeap = [...heap];
    let stepId = 0;

    const isMaxHeap = heapType === 'max';
    const compare = (a: number, b: number) => isMaxHeap ? a > b : a < b;
    const heapTypeName = isMaxHeap ? 'Max-Heap' : 'Min-Heap';

    const swap = (arr: number[], i: number, j: number) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    const getParent = (i: number) => Math.floor((i - 1) / 2);
    const getLeftChild = (i: number) => 2 * i + 1;
    const getRightChild = (i: number) => 2 * i + 2;

    const heapifyUp = (arr: number[], index: number): VisualizationStep[] => {
      const steps: VisualizationStep[] = [];
      let current = index;

      while (current > 0) {
        const parent = getParent(current);
        
        steps.push({
          id: stepId++,
          description: t.visualizations.heap.comparingWithParent(arr[current], current, arr[parent], parent),
          highlights: [current, parent],
          metadata: {
            heap: [...arr],
            operation: 'heapify_up',
            current,
            parent,
            comparing: [arr[current], arr[parent]],
            heapType
          }
        });

        if (compare(arr[current], arr[parent])) {
          swap(arr, current, parent);
          steps.push({
            id: stepId++,
            description: `${heapTypeName} property violated! Swapping ${arr[parent]} with ${arr[current]}.`,
            highlights: [current, parent],
            metadata: {
              heap: [...arr],
              operation: 'swap',
              swapped: [current, parent],
              heapType
            }
          });
          current = parent;
        } else {
          steps.push({
            id: stepId++,
            description: `${heapTypeName} property satisfied. Heapify-up completed.`,
            highlights: [current],
            metadata: {
              heap: [...arr],
              operation: 'heapify_up_complete',
              heapType
            }
          });
          break;
        }
      }

      return steps;
    };

    const heapifyDown = (arr: number[], index: number, size: number = arr.length): VisualizationStep[] => {
      const steps: VisualizationStep[] = [];
      let current = index;

      while (true) {
        const left = getLeftChild(current);
        const right = getRightChild(current);
        let target = current;

        steps.push({
          id: stepId++,
          description: t.visualizations.heap.checkingChildren(arr[current], current, left < size ? arr[left].toString() : 'N/A', right < size ? arr[right].toString() : 'N/A'),
          highlights: [current, ...(left < size ? [left] : []), ...(right < size ? [right] : [])],
          metadata: {
            heap: [...arr],
            operation: 'checking_children',
            current,
            leftChild: left < size ? left : null,
            rightChild: right < size ? right : null,
            heapType
          }
        });

        if (left < size && compare(arr[left], arr[target])) {
          target = left;
        }
        if (right < size && compare(arr[right], arr[target])) {
          target = right;
        }

        if (target !== current) {
          steps.push({
            id: stepId++,
            description: `${heapTypeName} property violated! Swapping ${arr[current]} with ${arr[target]}.`,
            highlights: [current, target],
            metadata: {
              heap: [...arr],
              operation: 'swap',
              swapped: [current, target],
              heapType
            }
          });
          
          swap(arr, current, target);
          current = target;
        } else {
          steps.push({
            id: stepId++,
            description: `${heapTypeName} property satisfied. Heapify-down completed.`,
            highlights: [current],
            metadata: {
              heap: [...arr],
              operation: 'heapify_down_complete',
              heapType
            }
          });
          break;
        }
      }

      return steps;
    };

    result.push({
      id: stepId++,
      description: t.visualizations.heap.startingOperation(operation, heapTypeName, workingHeap.join(', ')),
      highlights: [],
      metadata: {
        heap: [...workingHeap],
        operation: 'start',
        heapType
      }
    });

    if (operation === 'insert') {
      // Insert operation
      workingHeap.push(insertValue);
      
      result.push({
        id: stepId++,
        description: t.visualizations.heap.insertingValue(insertValue, workingHeap.length - 1),
        highlights: [workingHeap.length - 1],
        metadata: {
          heap: [...workingHeap],
          operation: 'insert',
          insertedValue: insertValue,
          insertedIndex: workingHeap.length - 1,
          heapType
        }
      });

      result.push(...heapifyUp(workingHeap, workingHeap.length - 1));

    } else if (operation === 'extractMax') {
      if (workingHeap.length === 0) {
        result.push({
          id: stepId++,
          description: t.visualizations.heap.heapEmpty(),
          highlights: [],
          metadata: {
            heap: [...workingHeap],
            operation: 'error',
            heapType
          }
        });
      } else {
        const maxElement = workingHeap[0];
        
        result.push({
          id: stepId++,
          description: t.visualizations.heap.extractingElement(maxElement, isMaxHeap),
          highlights: [0, workingHeap.length - 1],
          metadata: {
            heap: [...workingHeap],
            operation: 'extract_prep',
            extractedValue: maxElement,
            heapType
          }
        });

        // Move last element to root
        workingHeap[0] = workingHeap[workingHeap.length - 1];
        workingHeap.pop();

        if (workingHeap.length > 0) {
          result.push({
            id: stepId++,
            description: t.visualizations.heap.newElementAtRoot(workingHeap[0]),
            highlights: [0],
            metadata: {
              heap: [...workingHeap],
              operation: 'extract_heapify_prep',
              extractedValue: maxElement,
              heapType
            }
          });

          result.push(...heapifyDown(workingHeap, 0));
        }

        result.push({
          id: stepId++,
          description: t.visualizations.heap.extractionCompleted(maxElement, workingHeap.join(', ')),
          highlights: [],
          metadata: {
            heap: [...workingHeap],
            operation: 'extract_complete',
            extractedValue: maxElement,
            heapType
          }
        });
      }

    } else if (operation === 'heapify') {
      // Build heap from array
      result.push({
        id: stepId++,
        description: t.visualizations.heap.buildingHeap(heapTypeName),
        highlights: [],
        metadata: {
          heap: [...workingHeap],
          operation: 'heapify_start',
          heapType
        }
      });

      const lastNonLeaf = Math.floor(workingHeap.length / 2) - 1;
      
      for (let i = lastNonLeaf; i >= 0; i--) {
        result.push({
          id: stepId++,
          description: t.visualizations.heap.heapifyingFrom(i, workingHeap[i]),
          highlights: [i],
          metadata: {
            heap: [...workingHeap],
            operation: 'heapify_step',
            currentIndex: i,
            heapType
          }
        });

        result.push(...heapifyDown(workingHeap, i));
      }

      result.push({
        id: stepId++,
        description: `${heapTypeName} built successfully! Result: [${workingHeap.join(', ')}].`,
        highlights: [],
        metadata: {
          heap: [...workingHeap],
          operation: 'heapify_complete',
          heapType
        }
      });
    }

    return result;
  }, [heap, heapType, operation, insertValue, t]);

  const handleArrayChange = () => {
    if (inputArray.trim()) {
      const newHeap = inputArray.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
      if (newHeap.length > 0) {
        setHeap(newHeap);
        setInputArray('');
      }
    }
  };

  const generateRandomHeap = () => {
    const size = Math.floor(Math.random() * 6) + 5; // 5-10 elements
    const newHeap = Array.from({ length: size }, () => Math.floor(Math.random() * 20) + 1);
    setHeap(newHeap);
  };

  const renderHeapTree = (currentHeap: number[], highlights: number[]) => {
    if (currentHeap.length === 0) return null;

    const getNodePosition = (index: number, level: number, position: number, maxWidth: number) => {
      const levelWidth = Math.pow(2, level);
      const x = (position * 2 + 1) * (maxWidth / (levelWidth * 2)) + 50;
      const y = level * 60 + 50;
      return { x, y };
    };

    const maxLevel = Math.floor(Math.log2(currentHeap.length)) + 1;
    const svgWidth = Math.max(400, 100 * Math.pow(2, maxLevel - 1));
    const svgHeight = maxLevel * 60 + 100;

    const nodes = currentHeap.map((value, index) => {
      const level = Math.floor(Math.log2(index + 1));
      const positionInLevel = index - (Math.pow(2, level) - 1);
      const { x, y } = getNodePosition(index, level, positionInLevel, svgWidth - 100);
      
      return { index, value, x, y, level };
    });

    const edges = [];
    for (let i = 0; i < currentHeap.length; i++) {
      const leftChild = 2 * i + 1;
      const rightChild = 2 * i + 2;
      
      if (leftChild < currentHeap.length) {
        edges.push([i, leftChild]);
      }
      if (rightChild < currentHeap.length) {
        edges.push([i, rightChild]);
      }
    }

    return (
      <div className="flex justify-center">
        <svg width={svgWidth} height={svgHeight} className="border rounded">
          {/* Edges */}
          {edges.map(([parent, child]) => {
            const parentNode = nodes[parent];
            const childNode = nodes[child];
            return (
              <line
                key={`${parent}-${child}`}
                x1={parentNode.x}
                y1={parentNode.y}
                x2={childNode.x}
                y2={childNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            );
          })}
          
          {/* Nodes */}
          {nodes.map(({ index, value, x, y }) => {
            const isHighlighted = highlights.includes(index);
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill={isHighlighted ? '#fef3c7' : '#f3f4f6'}
                  stroke={isHighlighted ? '#f59e0b' : '#d1d5db'}
                  strokeWidth={isHighlighted ? 3 : 2}
                  className="transition-all duration-300"
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  className="font-bold text-sm"
                  fill="#374151"
                >
                  {value}
                </text>
                <text
                  x={x}
                  y={y - 30}
                  textAnchor="middle"
                  className="text-xs text-gray-500"
                >
                  {index}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label>{t.visualizations.heap.heapType}:</Label>
          <Select value={heapType} onValueChange={(value: HeapType) => setHeapType(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="max">{t.visualizations.heap.maxHeap}</SelectItem>
              <SelectItem value="min">{t.visualizations.heap.minHeap}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>{t.visualizations.heap.operation}:</Label>
          <Select value={operation} onValueChange={(value: HeapOperation) => setOperation(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="insert">{t.visualizations.heap.insert}</SelectItem>
              <SelectItem value="extractMax">{t.visualizations.heap.extract} {heapType === 'max' ? t.visualizations.heap.maximum : t.visualizations.heap.minimum}</SelectItem>
              <SelectItem value="heapify">{t.visualizations.heap.heapify}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {operation === 'insert' && (
          <div className="space-y-2">
            <Label>{t.visualizations.heap.valueToInsert}:</Label>
            <Input
              type="number"
              value={insertValue}
              onChange={(e) => setInsertValue(parseInt(e.target.value) || 0)}
            />
          </div>
        )}
        
        <div className="space-y-2">
          <Label>{t.visualizations.heap.customArray}:</Label>
          <div className="flex gap-2">
            <Input
              value={inputArray}
              onChange={(e) => setInputArray(e.target.value)}
              placeholder="Ex: 1,2,3,4,5"
              onKeyDown={(e) => e.key === 'Enter' && handleArrayChange()}
            />
            <Button onClick={handleArrayChange} variant="outline" size="sm">
              OK
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>{t.visualizations.common.generate}:</Label>
          <Button onClick={generateRandomHeap} variant="outline" className="w-full">
            {t.visualizations.heap.generateHeap}
          </Button>
        </div>
      </div>

      <BaseVisualization
        title={t.visualizations.heap.title + ` - ${heapType === 'max' ? t.visualizations.heap.maxHeap : t.visualizations.heap.minHeap}`}
        description={t.visualizations.heap.description}
        data={heap}
        steps={steps}
        speed={1500}
      >
        {(currentStep, isPlaying) => (
          <div className="w-full space-y-6">
            {/* Heap Tree Visualization */}
            <Card className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Heap Binary Tree</h3>
                <div className="text-sm text-muted-foreground">
                  Property: Each node is {heapType === 'max' ? 'greater than or equal to' : 'less than or equal to'} its children
                </div>
              </div>
              {renderHeapTree(currentStep.metadata?.heap || [], currentStep.highlights)}
            </Card>

            {/* Array Representation */}
            <Card className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">{t.visualizations.heap.arrayRepresentation}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {(currentStep.metadata?.heap || []).map((value: number, index: number) => {
                  const isHighlighted = currentStep.highlights.includes(index);
                  
                  return (
                    <div
                      key={index}
                      className={`p-3 border rounded text-center min-w-[60px] transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-yellow-200 border-yellow-500 font-bold shadow-lg transform scale-110'
                          : 'bg-gray-100 border-gray-300'
                      }`}
                    >
                      <div className="text-xs text-muted-foreground">{index}</div>
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Heap Properties */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.heap.currentOperation}</div>
                  <div className="text-lg font-bold text-blue-600">
                    {currentStep.metadata?.operation === 'insert' && t.visualizations.heap.insertion}
                    {currentStep.metadata?.operation === 'extract_prep' && t.visualizations.heap.preparingExtraction}
                    {currentStep.metadata?.operation === 'extract_complete' && t.visualizations.heap.extractionComplete}
                    {currentStep.metadata?.operation === 'heapify_up' && t.visualizations.heap.heapifyUp}
                    {currentStep.metadata?.operation === 'heapify_down' && t.visualizations.heap.heapifyDown}
                    {currentStep.metadata?.operation === 'swap' && t.visualizations.heap.swap}
                    {currentStep.metadata?.operation === 'start' && t.visualizations.heap.start}
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.heap.heapSize}</div>
                  <div className="text-lg font-bold text-purple-600">
                    {currentStep.metadata?.heap?.length || 0}
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{heapType === 'max' ? t.visualizations.heap.maxElement : t.visualizations.heap.minElement}</div>
                  <div className="text-lg font-bold text-green-600">
                    {currentStep.metadata?.heap?.[0] || 'N/A'}
                  </div>
                </div>
              </Card>
            </div>

            {/* Operation Details */}
            {currentStep.metadata && (
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.heap.operationDetails}</div>
                  <div className="text-sm">
                    {currentStep.metadata.insertedValue !== undefined && (
                      <div>{t.visualizations.heap.insertedValue}: <span className="font-bold">{currentStep.metadata.insertedValue}</span></div>
                    )}
                    {currentStep.metadata.extractedValue !== undefined && (
                      <div>{t.visualizations.heap.extractedValue}: <span className="font-bold">{currentStep.metadata.extractedValue}</span></div>
                    )}
                    {currentStep.metadata.comparing && (
                      <div>{t.visualizations.heap.comparing}: <span className="font-bold">{currentStep.metadata.comparing.join(' vs ')}</span></div>
                    )}
                    {currentStep.metadata.swapped && (
                      <div>{t.visualizations.heap.swappedIndices}: <span className="font-bold">{currentStep.metadata.swapped.join(' e ')}</span></div>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {/* Status Display */}
            <div className="flex justify-center">
              <div className={`p-4 rounded-lg border-2 ${
                currentStep.metadata?.operation === 'extract_complete' || currentStep.metadata?.operation === 'heapify_complete'
                  ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                  : currentStep.metadata?.operation === 'swap'
                  ? 'bg-orange-100 border-orange-500 dark:bg-orange-900/30 dark:border-orange-700'
                  : currentStep.metadata?.operation === 'error'
                  ? 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-700'
                  : 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-700'
              }`}>
                <div className="text-center">
                  <div className="font-bold text-lg">
                    {currentStep.metadata?.operation === 'extract_complete' && t.visualizations.heap.extractionComplete}
                    {currentStep.metadata?.operation === 'heapify_complete' && t.visualizations.heap.heapifyComplete}
                    {currentStep.metadata?.operation === 'swap' && t.visualizations.heap.elementsSwapped}
                    {currentStep.metadata?.operation === 'insert' && t.visualizations.heap.insertingElement}
                    {currentStep.metadata?.operation === 'heapify_up' && t.visualizations.heap.movingUp}
                    {currentStep.metadata?.operation === 'heapify_down' && t.visualizations.heap.movingDown}
                    {currentStep.metadata?.operation === 'start' && t.visualizations.heap.start}
                    {currentStep.metadata?.operation === 'error' && t.visualizations.heap.operationError}
                  </div>
                </div>
              </div>
            </div>

            {/* Complexity Information */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="text-center">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  {t.visualizations.heap.complexities}
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                  {t.visualizations.heap.idealForPriorityQueues}
                </div>
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
