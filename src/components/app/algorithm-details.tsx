'use client';

import type { Algorithm } from '@/lib/algorithms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from './code-block';
import { Lightbulb, ListChecks, TestTube2, Timer, Database, BrainCircuit } from 'lucide-react';
import { useI18n } from '@/lib/i18n.tsx';
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <algorithm.icon className="h-7 w-7 text-primary" />
            {localizedAlgorithm.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 font-semibold">
              <Lightbulb className="h-5 w-5 text-primary" />
              {t.algorithmDetails.whenToUse}
            </h3>
            <p className="text-muted-foreground">{localizedAlgorithm.whenToUse}</p>
          </div>
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 font-semibold">
              <ListChecks className="h-5 w-5 text-primary" />
              {t.algorithmDetails.keywords}
            </h3>
            <div className="flex flex-wrap gap-2">
              {localizedAlgorithm.keywords.map((keyword: string) => (
                <Badge key={keyword} variant="secondary">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
             <h3 className="flex items-center gap-2 font-semibold">
              <TestTube2 className="h-5 w-5 text-primary" />
              {t.algorithmDetails.typicalProblem}
            </h3>
            <p className="font-mono text-sm text-muted-foreground bg-muted p-3 rounded-md">
              {localizedAlgorithm.example}
            </p>
          </div>
          <div className='pt-4'>
            <Button onClick={() => onPractice(algorithm.id)}>
                <BrainCircuit className="mr-2 h-4 w-4" />
                {t.algorithmDetails.practiceThisAlgorithm}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>{t.algorithmDetails.bigO}</CardTitle>
           <CardDescription>
            {t.algorithmDetails.bigODescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-2">
                <Timer className="h-5 w-5 text-primary" />
                {t.algorithmDetails.timeComplexity}
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="font-medium">{t.algorithmDetails.best}</p>
                    <p className="font-mono text-lg text-primary">{bigO.time.best}</p>
                </div>
                <div>
                    <p className="font-medium">{t.algorithmDetails.average}</p>
                    <p className="font-mono text-lg text-primary">{bigO.time.average}</p>
                </div>
                <div>
                    <p className="font-medium">{t.algorithmDetails.worst}</p>
                    <p className="font-mono text-lg text-primary">{bigO.time.worst}</p>
                </div>
            </div>
          </div>
           <div>
            <h3 className="flex items-center gap-2 font-semibold mb-2">
                <Database className="h-5 w-5 text-primary" />
                {t.algorithmDetails.spaceComplexity}
            </h3>
             <div className="grid grid-cols-3 gap-4 text-center">
                <div className="col-start-2">
                    <p className="font-medium">{t.algorithmDetails.worst}</p>
                    <p className="font-mono text-lg text-primary">{bigO.space.worst}</p>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
         <CardHeader>
          <CardTitle>{t.algorithmDetails.codeTemplates}</CardTitle>
          <CardDescription>
            {t.algorithmDetails.codeTemplatesDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Tabs defaultValue="javascript">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript">
              <CodeBlock language="javascript" code={algorithm.codeTemplates.javascript} />
            </TabsContent>
            <TabsContent value="python">
              <CodeBlock language="python" code={algorithm.codeTemplates.python} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
