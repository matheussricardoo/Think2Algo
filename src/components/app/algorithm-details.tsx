'use client';

import type { Algorithm } from '@/lib/algorithms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CodeBlock } from './code-block';
import { Lightbulb, ListChecks, TestTube2, Timer, Database, BrainCircuit } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Button } from '../ui/button';

type AlgorithmDetailsProps = {
  algorithm: Algorithm;
  onPractice: (algorithmId: string) => void;
};

export function AlgorithmDetails({ algorithm, onPractice }: AlgorithmDetailsProps) {
  const { t } = useI18n();
  const localizedAlgorithm = t.algorithms[algorithm.id];
  const bigO = algorithm.bigO;

  return (
    <ScrollArea className="h-full p-4 md:p-6">
      <div className="space-y-6 w-full max-w-4xl mx-auto min-w-0">
      <Card className="overflow-hidden">
        <CardHeader className="overflow-hidden">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl break-words min-w-0">
            <algorithm.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary flex-shrink-0" />
            <span className="truncate">{localizedAlgorithm.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 overflow-hidden">
          <p className="text-sm sm:text-base break-words leading-relaxed">
            {localizedAlgorithm.description}
          </p>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-base sm:text-lg">
              <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              {t.algorithmDetails.whenToUse}
            </h3>
            <p className="text-sm sm:text-base break-words leading-relaxed">
              {localizedAlgorithm.whenToUse}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-base sm:text-lg">
              <ListChecks className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              {t.algorithmDetails.keywords}
            </h3>
            <div className="flex flex-wrap gap-2">
              {localizedAlgorithm.keywords.map((keyword: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs sm:text-sm break-words">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-base sm:text-lg">
              <TestTube2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              {t.algorithmDetails.typicalProblem}
            </h3>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg overflow-hidden">
              <p className="text-sm sm:text-base break-words leading-relaxed font-mono">
                {localizedAlgorithm.example}
              </p>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <Button onClick={() => onPractice(algorithm.id)} className="w-full sm:w-auto text-sm">
                <BrainCircuit className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">{t.algorithmDetails.practiceThisAlgorithm}</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="overflow-hidden">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl break-words">
            <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            {t.algorithmDetails.bigO}
          </CardTitle>
           <CardDescription className="text-sm break-words">
            {t.algorithmDetails.bigODescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className='space-y-3 sm:space-y-4'>
              <h3 className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                  <Timer className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  {t.algorithmDetails.timeComplexity}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-muted/50 p-2 sm:p-3 rounded-lg overflow-hidden">
                    <p className="font-medium text-xs sm:text-sm break-words">{t.algorithmDetails.best}</p>
                    <p className="font-mono text-sm sm:text-lg text-primary break-all">{bigO.time.best}</p>
                </div>
                <div className="bg-muted/50 p-2 sm:p-3 rounded-lg overflow-hidden">
                    <p className="font-medium text-xs sm:text-sm break-words">{t.algorithmDetails.average}</p>
                    <p className="font-mono text-sm sm:text-lg text-primary break-all">{bigO.time.average}</p>
                </div>
                <div className="bg-muted/50 p-2 sm:p-3 rounded-lg overflow-hidden">
                    <p className="font-medium text-xs sm:text-sm break-words">{t.algorithmDetails.worst}</p>
                    <p className="font-mono text-sm sm:text-lg text-primary break-all">{bigO.time.worst}</p>
                </div>
              </div>
            </div>
            <div className='space-y-3 sm:space-y-4'>
              <h3 className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  {t.algorithmDetails.spaceComplexity}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                  <div className="bg-muted/50 p-2 sm:p-3 rounded-lg overflow-hidden">
                      <p className="font-medium text-xs sm:text-sm break-words">{t.algorithmDetails.worst}</p>
                      <p className="font-mono text-sm sm:text-lg text-primary break-all">{bigO.space.worst}</p>
                  </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="overflow-hidden">
          <CardTitle className="text-lg sm:text-xl break-words">{t.algorithmDetails.codeTemplates}</CardTitle>
          <CardDescription className="text-sm break-words">
            {t.algorithmDetails.codeTemplatesDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
           <Tabs defaultValue="javascript" className="w-full overflow-hidden">
            <TabsList className="grid w-full grid-cols-2 mb-2 sm:mb-4 h-8 sm:h-10">
              <TabsTrigger value="javascript" className="text-xs sm:text-sm px-2 sm:px-3">JavaScript</TabsTrigger>
              <TabsTrigger value="python" className="text-xs sm:text-sm px-2 sm:px-3">Python</TabsTrigger>
            </TabsList>
            <div className="overflow-hidden w-full">
              <TabsContent value="javascript" className="w-full overflow-hidden">
                <CodeBlock language="javascript" code={algorithm.codeTemplates.javascript} />
              </TabsContent>
              <TabsContent value="python" className="w-full overflow-hidden">
                <CodeBlock language="python" code={algorithm.codeTemplates.python} />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      </div>
    </ScrollArea>
  );
}
