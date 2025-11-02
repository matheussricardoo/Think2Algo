'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, ArrowLeft, Clock, MemoryStick, Calendar } from 'lucide-react';
import { LeetCodeProblem, LeetCodeDifficulty } from '@/lib/types/leetcode';
import { useI18n } from '@/lib/i18n';
import { CodeBlock } from './code-block';

interface LeetCodeDetailsProps {
  problem: LeetCodeProblem;
  onBack: () => void;
}

const difficultyColors: Record<LeetCodeDifficulty, string> = {
  Easy: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  Hard: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
};

export function LeetCodeDetails({ problem, onBack }: LeetCodeDetailsProps) {
  const { language, t } = useI18n();

  const description = language === 'pt' ? problem.description.pt : problem.description.en;
  const intuition = language === 'pt' ? problem.intuition.pt : problem.intuition.en;
  const approach = language === 'pt' ? problem.approach.pt : problem.approach.en;
  const complexityExplanation = language === 'pt' ? problem.complexity.explanation.pt : problem.complexity.explanation.en;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-muted-foreground">#{problem.number}</span>
            <Badge className={difficultyColors[problem.difficulty]}>{problem.difficulty}</Badge>
          </div>
          <h1 className="text-3xl font-bold">{problem.title}</h1>
          <div className="flex flex-wrap gap-2">
            {problem.category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{t.leetcode?.runtime || 'Runtime'}: {problem.runtime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MemoryStick className="h-4 w-4" />
              <span>{t.leetcode?.memory || 'Memory'}: {problem.memory}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{t.leetcode?.solved || 'Solved'}: {new Date(problem.solvedDate).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}</span>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href={problem.leetcodeUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t.leetcode?.viewOnLeetcode || 'View on LeetCode'}
            </a>
          </Button>
        </div>
      </div>

      <Separator />

      {/* Content */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">{t.leetcode?.description || 'Description'}</TabsTrigger>
          <TabsTrigger value="solution">{t.leetcode?.solution || 'Solution'}</TabsTrigger>
          <TabsTrigger value="code">{t.leetcode?.code || 'Code'}</TabsTrigger>
          <TabsTrigger value="complexity">{t.leetcode?.complexity || 'Complexity'}</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.leetcode?.problemDescription || 'Problem Description'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{description}</p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t.leetcode?.examples || 'Examples'}</h3>
                {problem.examples.map((example, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">
                        {t.leetcode?.example || 'Example'} {index + 1}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <span className="font-semibold">{t.leetcode?.input || 'Input'}: </span>
                        <code className="rounded bg-muted px-2 py-1">{example.input}</code>
                      </div>
                      <div>
                        <span className="font-semibold">{t.leetcode?.output || 'Output'}: </span>
                        <code className="rounded bg-muted px-2 py-1">{example.output}</code>
                      </div>
                      {example.explanation && (
                        <div>
                          <span className="font-semibold">{t.leetcode?.explanation || 'Explanation'}: </span>
                          <span className="text-muted-foreground">{example.explanation}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{t.leetcode?.constraints || 'Constraints'}</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="solution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.leetcode?.intuition || 'Intuition'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {intuition.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.leetcode?.approach || 'Approach'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {approach.split('\n').map((line, index) => (
                  <p key={index} className="text-muted-foreground whitespace-pre-wrap">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          {problem.code.map((codeSnippet, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t.leetcode?.implementationIn || 'Implementation in'} {codeSnippet.language}</span>
                  <Badge variant="outline">{codeSnippet.language}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock 
                  code={language === 'pt' && codeSnippet.contentPt ? codeSnippet.contentPt : codeSnippet.content} 
                  language={codeSnippet.language} 
                />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="complexity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.leetcode?.timeComplexity || 'Time Complexity'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <code className="rounded bg-muted px-3 py-2 text-lg font-mono">{problem.complexity.time}</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.leetcode?.spaceComplexity || 'Space Complexity'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <code className="rounded bg-muted px-3 py-2 text-lg font-mono">{problem.complexity.space}</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.leetcode?.complexityAnalysis || 'Complexity Analysis'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-wrap">{complexityExplanation}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
