'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Pause, RotateCcw, SkipForward, SkipBack } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

export interface VisualizationStep {
  id: number;
  description: string;
  highlights: number[];
  pointers?: { [key: string]: number };
  metadata?: any;
}

interface BaseVisualizationProps {
  title: string;
  description: string;
  data: number[];
  steps: VisualizationStep[];
  children: (currentStep: VisualizationStep, isPlaying: boolean) => React.ReactNode;
  speed?: number;
  onReset?: () => void;
}

export function BaseVisualization({ 
  title, 
  description, 
  data, 
  steps, 
  children, 
  speed = 1000,
  onReset
}: BaseVisualizationProps) {
  const { t } = useI18n();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentStep = steps[currentStepIndex] || steps[0];

  useEffect(() => {
    if (isPlaying && currentStepIndex < steps.length - 1) {
      intervalRef.current = setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentStepIndex, steps.length, speed]);

  const handlePlay = () => {
    if (currentStepIndex >= steps.length - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
    onReset?.();
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Visualization Area */}
        <div className="bg-muted/30 p-4 sm:p-6 rounded-lg min-h-[300px] flex items-center justify-center">
          {children(currentStep, isPlaying)}
        </div>

        {/* Step Description */}
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm sm:text-base font-medium text-blue-800 dark:text-blue-200">
            <span className="font-bold">{t.visualizations.controls.step} {currentStepIndex + 1}/{steps.length}:</span> {currentStep.description}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
              className="w-10 h-10 p-0"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button
              onClick={handlePlay}
              disabled={currentStepIndex >= steps.length - 1 && !isPlaying}
              className="w-12 h-10"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentStepIndex >= steps.length - 1}
              className="w-10 h-10 p-0"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            {t.visualizations.controls.reset}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Utility component for array visualization
export function ArrayElement({ 
  value, 
  index, 
  isHighlighted = false, 
  isPointer = false,
  pointerLabel = '',
  className = '' 
}: {
  value: number;
  index: number;
  isHighlighted?: boolean;
  isPointer?: boolean;
  pointerLabel?: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Pointer Label */}
      {isPointer && (
        <div className="text-xs font-bold text-primary">
          {pointerLabel}
        </div>
      )}
      
      {/* Array Element */}
      <div
        className={cn(
          'w-12 h-12 sm:w-14 sm:h-14 border-2 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 text-gray-900',
          isHighlighted ? 'bg-yellow-200 border-yellow-500' : 'bg-white border-gray-300',
          isPointer && 'ring-2 ring-primary ring-offset-2',
          className
        )}
      >
        {value}
      </div>
      
      {/* Index */}
      <div className="text-xs text-muted-foreground">
        {index}
      </div>
    </div>
  );
}
