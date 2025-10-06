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

interface BFSVisualizationProps {
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

export function BFSVisualization({ initialGraph = defaultGraph }: BFSVisualizationProps) {
  const [graph, setGraph] = useState(initialGraph);
  const [startNode, setStartNode] = useState('A');
  const [targetNode, setTargetNode] = useState('F');
  const { t } = useI18n();

  const steps = useMemo((): VisualizationStep[] => {
    const result: VisualizationStep[] = [];
    const visited = new Set<string>();
    const queue: string[] = [startNode];
    const parent: { [key: string]: string } = {};
    const distances: { [key: string]: number } = { [startNode]: 0 };
    let stepId = 0;

    // Helper function to convert node ID to index
    const getNodeIndex = (nodeId: string): number => {
      return graph.nodes.findIndex(n => n.id === nodeId);
    };

    // Initial step
    result.push({
      id: stepId++,
      description: t.visualizations.bfs.initializing(startNode),
      highlights: [getNodeIndex(startNode)],
      metadata: {
        queue: [...queue],
        visited: new Set(visited),
        currentNode: null,
        status: 'start',
        distances: { ...distances },
        parent: { ...parent }
      }
    });

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      
      if (visited.has(currentNode)) continue;
      
      visited.add(currentNode);
      
      result.push({
        id: stepId++,
        description: t.visualizations.bfs.visiting(currentNode, distances[currentNode]),
        highlights: [getNodeIndex(currentNode)],
        metadata: {
          queue: [...queue],
          visited: new Set(visited),
          currentNode,
          status: 'visiting',
          distances: { ...distances },
          parent: { ...parent }
        }
      });

      // Check if we found the target
      if (currentNode === targetNode) {
        // Build path
        const path = [];
        let node = targetNode;
        while (node) {
          path.unshift(node);
          node = parent[node];
        }
        
        result.push({
          id: stepId++,
          description: t.visualizations.bfs.targetFound(targetNode, path),
          highlights: path.map(getNodeIndex),
          metadata: {
            queue: [...queue],
            visited: new Set(visited),
            currentNode,
            status: 'found',
            distances: { ...distances },
            parent: { ...parent },
            path
          }
        });
        break;
      }

      // Explore neighbors
      const nodeObj = graph.nodes.find(n => n.id === currentNode);
      if (nodeObj) {
        const unvisitedNeighbors = nodeObj.connections.filter(neighbor => !visited.has(neighbor) && !queue.includes(neighbor));
        
        if (unvisitedNeighbors.length > 0) {
          unvisitedNeighbors.forEach(neighbor => {
            queue.push(neighbor);
            if (!(neighbor in distances)) {
              distances[neighbor] = distances[currentNode] + 1;
              parent[neighbor] = currentNode;
            }
          });
          
          result.push({
            id: stepId++,
            description: t.visualizations.bfs.exploringNeighborsDetail(currentNode, unvisitedNeighbors),
            highlights: [getNodeIndex(currentNode), ...unvisitedNeighbors.map(getNodeIndex)],
            metadata: {
              queue: [...queue],
              visited: new Set(visited),
              currentNode,
              status: 'exploring',
              distances: { ...distances },
              parent: { ...parent },
              newNeighbors: unvisitedNeighbors
            }
          });
        } else {
          result.push({
            id: stepId++,
            description: t.visualizations.bfs.noNeighbors(currentNode),
            highlights: [getNodeIndex(currentNode)],
            metadata: {
              queue: [...queue],
              visited: new Set(visited),
              currentNode,
              status: 'no_neighbors',
              distances: { ...distances },
              parent: { ...parent }
            }
          });
        }
      }

      if (queue.length > 0) {
        result.push({
          id: stepId++,
          description: t.visualizations.bfs.queueUpdate(queue, queue[0]),
          highlights: queue.map(getNodeIndex),
          metadata: {
            queue: [...queue],
            visited: new Set(visited),
            currentNode: null,
            status: 'queue_update',
            distances: { ...distances },
            parent: { ...parent }
          }
        });
      }
    }

    if (!visited.has(targetNode)) {
      result.push({
        id: stepId++,
        description: t.visualizations.bfs.notFound(targetNode, startNode),
        highlights: [getNodeIndex(startNode)],
        metadata: {
          queue: [],
          visited: new Set(visited),
          currentNode: null,
          status: 'not_found',
          distances: { ...distances },
          parent: { ...parent }
        }
      });
    }

    result.push({
      id: stepId++,
      description: t.visualizations.bfs.completed(Array.from(visited)),
      highlights: Array.from(visited).map(getNodeIndex),
      metadata: {
        queue: [],
        visited: new Set(visited),
        currentNode: null,
        status: 'complete',
        distances: { ...distances },
        parent: { ...parent }
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
          <Label>{t.visualizations.bfs.startNode}</Label>
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
          <Label>{t.visualizations.bfs.targetNodeLabel}:</Label>
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
            {t.visualizations.bfs.generateGraph}
          </Button>
        </div>

        <div className="space-y-2">
          <Label>{t.visualizations.bfs.useDefaultGraph}:</Label>
          <Button onClick={() => setGraph(defaultGraph)} variant="outline" className="w-full">
            {t.visualizations.bfs.resetGraph}
          </Button>
        </div>
      </div>

      <BaseVisualization
        title={t.visualizations.bfs.title}
        description={t.visualizations.bfs.description}
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
                  const isPath = currentStep.metadata?.path?.includes(nodeA) && currentStep.metadata?.path?.includes(nodeB);
                  
                  return (
                    <line
                      key={index}
                      x1={nodeAObj.x}
                      y1={nodeAObj.y}
                      x2={nodeBObj.x}
                      y2={nodeBObj.y}
                      stroke={isPath ? '#10b981' : isHighlighted ? '#3b82f6' : '#d1d5db'}
                      strokeWidth={isPath ? 3 : isHighlighted ? 2 : 1}
                      className="transition-all duration-300"
                    />
                  );
                })}
                
                {/* Nodes */}
                {graph.nodes.map((node, nodeIndex) => {
                  const isVisited = currentStep.metadata?.visited?.has(node.id);
                  const isInQueue = currentStep.metadata?.queue?.includes(node.id);
                  const isCurrent = currentStep.metadata?.currentNode === node.id;
                  const isHighlighted = currentStep.highlights.includes(nodeIndex);
                  const isInPath = currentStep.metadata?.path?.includes(node.id);
                  const distance = currentStep.metadata?.distances?.[node.id];
                  
                  let fillColor = '#f3f4f6'; // default
                  let strokeColor = '#d1d5db';
                  let textColor = '#374151';
                  
                  if (isInPath) {
                    fillColor = '#dcfce7';
                    strokeColor = '#10b981';
                    textColor = '#065f46';
                  } else if (isCurrent) {
                    fillColor = '#fef3c7';
                    strokeColor = '#f59e0b';
                    textColor = '#92400e';
                  } else if (isVisited) {
                    fillColor = '#dbeafe';
                    strokeColor = '#3b82f6';
                    textColor = '#1e40af';
                  } else if (isInQueue) {
                    fillColor = '#fce7f3';
                    strokeColor = '#ec4899';
                    textColor = '#be185d';
                  }
                  
                  return (
                    <g key={node.id}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={20}
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={isHighlighted ? 3 : 2}
                        className="transition-all duration-300"
                      />
                      <text
                        x={node.x}
                        y={node.y + 5}
                        textAnchor="middle"
                        className="font-bold text-sm"
                        fill={textColor}
                      >
                        {node.id}
                      </text>
                      {distance !== undefined && (
                        <text
                          x={node.x}
                          y={node.y - 30}
                          textAnchor="middle"
                          className="text-xs font-medium"
                          fill="#6b7280"
                        >
                          d:{distance}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded-full"></div>
                <span>{t.visualizations.bfs.unvisited}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-pink-100 border border-pink-500 rounded-full"></div>
                <span>{t.visualizations.bfs.inQueue}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-100 border border-yellow-500 rounded-full"></div>
                <span>{t.visualizations.bfs.current}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-100 border border-blue-500 rounded-full"></div>
                <span>{t.visualizations.bfs.visited}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border border-green-500 rounded-full"></div>
                <span>{t.visualizations.bfs.path}</span>
              </div>
            </div>

            {/* BFS State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.bfs.queueLabel}</div>
                  <div className="text-lg font-mono">
                    [{currentStep.metadata?.queue?.join(', ') || ''}]
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">{t.visualizations.bfs.visitedLabel}</div>
                  <div className="text-lg font-mono">
                    [{Array.from(currentStep.metadata?.visited || []).join(', ')}]
                  </div>
                </div>
              </Card>
            </div>

            {/* Current Distance Information */}
            {currentStep.metadata?.distances && Object.keys(currentStep.metadata.distances).length > 0 && (
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t.visualizations.bfs.distancesFrom} {startNode}</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {Object.entries(currentStep.metadata.distances).map(([node, distance]) => (
                      <div key={node} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                        {node}: {String(distance)}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Status Display */}
            <div className="flex justify-center">
              <div className={`p-4 rounded-lg border-2 ${
                currentStep.metadata?.status === 'found' 
                  ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-700'
                  : currentStep.metadata?.status === 'not_found'
                  ? 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-700'
                  : currentStep.metadata?.status === 'complete'
                  ? 'bg-purple-100 border-purple-500 dark:bg-purple-900/30 dark:border-purple-700'
                  : 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-700'
              }`}>
                <div className="text-center">
                  <div className="font-bold text-lg">
                    {currentStep.metadata?.status === 'found' && t.visualizations.bfs.statusPathFound}
                    {currentStep.metadata?.status === 'not_found' && t.visualizations.bfs.statusTargetUnreachable}
                    {currentStep.metadata?.status === 'complete' && t.visualizations.bfs.statusComplete}
                    {currentStep.metadata?.status === 'visiting' && t.visualizations.bfs.statusVisiting}
                    {currentStep.metadata?.status === 'exploring' && t.visualizations.bfs.statusExploring}
                    {currentStep.metadata?.status === 'start' && t.visualizations.bfs.statusStarting}
                  </div>
                  {currentStep.metadata?.path && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {t.visualizations.bfs.pathLabel}: {currentStep.metadata.path.join(' → ')}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Algorithm Info */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="text-center">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Complexity: O(V + E) where V = vertices, E = edges
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                  {t.visualizations.bfs.guaranteesShortestPath}
                </div>
              </div>
            </div>
          </div>
        )}
      </BaseVisualization>
    </div>
  );
}
