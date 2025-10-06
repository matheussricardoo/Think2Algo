'use client';

import { useState, useMemo } from 'react';
import { BaseVisualization, VisualizationStep } from './base-visualization';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/lib/i18n';

interface Node {
  id: string;
  x: number;
  y: number;
  connections: string[];
}

interface Graph {
  nodes: Node[];
  edges: Array<[string, string]>;
}

interface DFSVisualizationProps {
  initialGraph?: Graph;
}

const defaultGraph: Graph = {
  nodes: [
    { id: 'A', x: 150, y: 50, connections: ['B', 'C'] },
    { id: 'B', x: 50, y: 150, connections: ['A', 'D', 'E'] },
    { id: 'C', x: 250, y: 150, connections: ['A', 'F'] },
    { id: 'D', x: 50, y: 250, connections: ['B'] },
    { id: 'E', x: 150, y: 250, connections: ['B', 'F'] },
    { id: 'F', x: 250, y: 250, connections: ['C', 'E'] }
  ],
  edges: [
    ['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']
  ]
};

export function DFSVisualization({ initialGraph = defaultGraph }: DFSVisualizationProps) {
  const [graph, setGraph] = useState(initialGraph);
  const [startNode, setStartNode] = useState('A');
  const [targetNode, setTargetNode] = useState('F');
  const { t } = useI18n();

  const steps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    const visited = new Set<string>();
    const stack: string[] = [startNode];
    const parent: { [key: string]: string | null } = { [startNode]: null };
    const discoveryTime: { [key: string]: number } = {};
    const finishTime: { [key: string]: number } = {};
    let time = 0;
    let stepId = 0;

    // Helper function to convert node ID to index
    const getNodeIndex = (nodeId: string): number => {
      return graph.nodes.findIndex(n => n.id === nodeId);
    };

    // Initial step
    result.push({
      id: stepId++,
      description: t.visualizations.dfs.initializing(startNode),
      highlights: [getNodeIndex(startNode)],
      metadata: {
        stack: [...stack],
        visited: new Set(visited),
        currentNode: null,
        status: 'start',
        parent: { ...parent },
        discoveryTime: { ...discoveryTime },
        finishTime: { ...finishTime },
        time
      }
    });

    function dfsRecursive(node: string, depth: number): boolean {
      if (visited.has(node)) return false;

      visited.add(node);
      time++;
      discoveryTime[node] = time;

      result.push({
        id: stepId++,
        description: t.visualizations.dfs.visiting(node, time, depth),
        highlights: [getNodeIndex(node)],
        metadata: {
          stack: [...stack],
          visited: new Set(visited),
          currentNode: node,
          status: 'visiting',
          parent: { ...parent },
          discoveryTime: { ...discoveryTime },
          finishTime: { ...finishTime },
          time,
          depth
        }
      });

      // Check if target is found
      if (node === targetNode) {
        // Reconstruct path
        const path: string[] = [];
        let current: string | null = node;
        while (current !== null) {
          path.unshift(current);
          current = parent[current];
        }
        
        result.push({
          id: stepId++,
          description: t.visualizations.dfs.targetFound(targetNode, path),
          highlights: path.map(getNodeIndex),
          metadata: {
            stack: [...stack],
            visited: new Set(visited),
            currentNode: node,
            status: 'found',
            parent: { ...parent },
            discoveryTime: { ...discoveryTime },
            finishTime: { ...finishTime },
            time,
            depth,
            path
          }
        });
        return true;
      }

      // Explore neighbors
      const nodeObj = graph.nodes.find(n => n.id === node);
      if (nodeObj) {
        const unvisitedNeighbors = nodeObj.connections.filter(neighbor => !visited.has(neighbor));
        
        if (unvisitedNeighbors.length > 0) {
          result.push({
            id: stepId++,
            description: t.visualizations.dfs.exploringNeighborsDetail(node, unvisitedNeighbors),
            highlights: [getNodeIndex(node), ...unvisitedNeighbors.map(getNodeIndex)],
            metadata: {
              stack: [...stack, ...unvisitedNeighbors.reverse()],
              visited: new Set(visited),
              currentNode: node,
              status: 'exploring',
              parent: { ...parent },
              discoveryTime: { ...discoveryTime },
              finishTime: { ...finishTime },
              time,
              depth,
              newNeighbors: unvisitedNeighbors
            }
          });

          // Recursively explore each unvisited neighbor
          for (const neighbor of unvisitedNeighbors) {
            if (!visited.has(neighbor)) {
              parent[neighbor] = node;
              result.push({
                id: stepId++,
                description: t.visualizations.dfs.recursiveCall(neighbor, depth + 1),
                highlights: [getNodeIndex(neighbor)],
                metadata: {
                  stack: [...stack, neighbor],
                  visited: new Set(visited),
                  currentNode: neighbor,
                  status: 'recursive_call',
                  parent: { ...parent },
                  discoveryTime: { ...discoveryTime },
                  finishTime: { ...finishTime },
                  time,
                  depth: depth + 1
                }
              });
              
              if (dfsRecursive(neighbor, depth + 1)) {
                return true;
              }
            }
          }
        }
      }

      // Finishing node
      time++;
      finishTime[node] = time;
      
      result.push({
        id: stepId++,
        description: t.visualizations.dfs.finishing(node, time),
        highlights: [getNodeIndex(node)],
        metadata: {
          stack: [...stack],
          visited: new Set(visited),
          currentNode: node,
          status: 'finishing',
          parent: { ...parent },
          discoveryTime: { ...discoveryTime },
          finishTime: { ...finishTime },
          time,
          depth
        }
      });

      return false;
    }

    // Start DFS with initial setup
    result.push({
      id: stepId++,
      description: t.visualizations.dfs.starting(targetNode),
      highlights: [getNodeIndex(startNode)],
      metadata: {
        stack: [...stack],
        visited: new Set(visited),
        currentNode: null,
        status: 'initialize',
        parent: { ...parent },
        discoveryTime: { ...discoveryTime },
        finishTime: { ...finishTime },
        time
      }
    });

    // Execute DFS
    const found = dfsRecursive(startNode, 0);

    if (!found) {
      result.push({
        id: stepId++,
        description: t.visualizations.dfs.notFound(targetNode),
        highlights: [],
        metadata: {
          stack: [],
          visited: new Set(visited),
          currentNode: null,
          status: 'not_found',
          parent: { ...parent },
          discoveryTime: { ...discoveryTime },
          finishTime: { ...finishTime },
          time
        }
      });
    }

    result.push({
      id: stepId++,
      description: t.visualizations.dfs.completed(Array.from(visited)),
      highlights: Array.from(visited).map(getNodeIndex),
      metadata: {
        stack: [],
        visited: new Set(visited),
        currentNode: null,
        status: 'complete',
        parent: { ...parent },
        discoveryTime: { ...discoveryTime },
        finishTime: { ...finishTime },
        time
      }
    });

    return result;
  }, [graph, startNode, targetNode, t]);

  const generateNewGraph = () => {
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
    const newNodes: Node[] = nodes.map((id, index) => ({
      id,
      x: 50 + (index % 3) * 100,
      y: 50 + Math.floor(index / 3) * 100,
      connections: []
    }));

    // Generate random connections
    const edges: Array<[string, string]> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < 0.4) { // 40% chance of connection
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          newNodes[i].connections.push(nodeB);
          newNodes[j].connections.push(nodeA);
          edges.push([nodeA, nodeB]);
        }
      }
    }

    setGraph({ nodes: newNodes, edges });
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label>{t.visualizations.dfs.startNode}:</Label>
          <Select value={startNode} onValueChange={setStartNode}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {graph.nodes.map(node => (
                <SelectItem key={node.id} value={node.id}>{node.id}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>{t.visualizations.dfs.targetNode}:</Label>
          <Select value={targetNode} onValueChange={setTargetNode}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {graph.nodes.map(node => (
                <SelectItem key={node.id} value={node.id}>{node.id}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>{t.visualizations.common.actions}:</Label>
          <Button onClick={generateNewGraph} variant="outline" className="w-full">
            {t.visualizations.dfs.generateGraph}
          </Button>
        </div>

        <div className="space-y-2">
          <Label>{t.visualizations.dfs.useDefaultGraph}:</Label>
          <Button onClick={() => setGraph(defaultGraph)} variant="outline" className="w-full">
            {t.visualizations.dfs.resetGraph}
          </Button>
        </div>
      </div>

      <BaseVisualization
        title={t.visualizations.dfs.title}
        description={t.visualizations.dfs.description}
        data={graph.nodes.map((_, index) => index)}
        steps={steps}
        speed={1500}
      >
        {(currentStep, isPlaying) => (
          <div className="w-full space-y-6">
            {/* Graph Visualization */}
            <div className="relative bg-white dark:bg-gray-900 border rounded-lg" style={{ height: '400px' }}>
              <svg width="100%" height="100%" viewBox="0 0 350 350">
                {/* Edges */}
                {graph.edges.map(([nodeA, nodeB], index) => {
                  const nodeAObj = graph.nodes.find(n => n.id === nodeA)!;
                  const nodeBObj = graph.nodes.find(n => n.id === nodeB)!;
                  const nodeAIndex = graph.nodes.findIndex(n => n.id === nodeA);
                  const nodeBIndex = graph.nodes.findIndex(n => n.id === nodeB);
                  const isHighlighted = currentStep.highlights.includes(nodeAIndex) && currentStep.highlights.includes(nodeBIndex);
                  
                  return (
                    <line
                      key={index}
                      x1={nodeAObj.x}
                      y1={nodeAObj.y}
                      x2={nodeBObj.x}
                      y2={nodeBObj.y}
                      stroke={isHighlighted ? '#3b82f6' : '#94a3b8'}
                      strokeWidth={isHighlighted ? '3' : '2'}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Nodes */}
                {graph.nodes.map((node, index) => {
                  const isHighlighted = currentStep.highlights.includes(index);
                  const isVisited = currentStep.metadata?.visited?.has(node.id);
                  const isCurrent = currentStep.metadata?.currentNode === node.id;
                  const isInPath = currentStep.metadata?.path?.includes(node.id);
                  
                  let fillColor = '#f1f5f9';
                  let strokeColor = '#64748b';
                  let textColor = '#1e293b';
                  
                  if (isInPath) {
                    fillColor = '#22c55e';
                    strokeColor = '#16a34a';
                    textColor = '#ffffff';
                  } else if (isCurrent) {
                    fillColor = '#3b82f6';
                    strokeColor = '#2563eb';
                    textColor = '#ffffff';
                  } else if (isHighlighted) {
                    fillColor = '#fbbf24';
                    strokeColor = '#f59e0b';
                    textColor = '#1e293b';
                  } else if (isVisited) {
                    fillColor = '#a78bfa';
                    strokeColor = '#8b5cf6';
                    textColor = '#ffffff';
                  }
                  
                  return (
                    <g key={node.id}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="20"
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <text
                        x={node.x}
                        y={node.y}
                        textAnchor="middle"
                        dy="0.35em"
                        className="font-bold text-sm transition-all duration-300"
                        fill={textColor}
                      >
                        {node.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-200 border border-gray-500 rounded-full"></div>
                  <span>{t.visualizations.dfs.unvisited}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-200 border border-pink-500 rounded-full"></div>
                  <span>{t.visualizations.dfs.exploring}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-400 border border-yellow-500 rounded-full"></div>
                  <span>{t.visualizations.dfs.current}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 border border-blue-600 rounded-full"></div>
                  <span>{t.visualizations.dfs.visited}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 border border-green-600 rounded-full"></div>
                  <span>{t.visualizations.dfs.path}</span>
                </div>
              </div>
            </div>

            {/* Discovery and Finish Times */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.dfs.discoveryTimes}</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(currentStep.metadata?.discoveryTime || {}).map(([node, discTime]) => (
                      <div key={node} className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                        <span className="font-medium">{String(node)}</span>: <span className="text-green-600">{String(discTime)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.dfs.finishTimes}</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(currentStep.metadata?.finishTime || {}).map(([node, finTime]) => (
                      <div key={node} className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                        <span className="font-medium">{String(node)}</span>: <span className="text-green-600">{String(finTime)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Complexity Information */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                {t.visualizations.dfs.complexityInfo}
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-300">
                {t.visualizations.dfs.complexityNote}
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
