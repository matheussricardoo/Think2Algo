'use client';
import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { algorithms, Algorithm } from '@/lib/algorithms';
import { RefreshCw, Lightbulb, X, Code, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n.tsx';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { CodeBlock } from './code-block';

type Challenge = {
  problem: string;
  solution: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil' | 'Easy' | 'Medium' | 'Hard';
  input?: string;
  output?: string;
  explanation?: string;
  pythonSolution?: string;
};

const difficultyVariantMap = {
  Fácil: 'default',
  Médio: 'secondary',
  Difícil: 'destructive',
  Easy: 'default',
  Medium: 'secondary',
  Hard: 'destructive',
};

type ChallengesWorkspaceProps = {
  algorithmFilter: string | null;
  onClearFilter: () => void;
}

export function ChallengesWorkspace({ algorithmFilter, onClearFilter }: ChallengesWorkspaceProps) {
  const { t, challenges: localizedChallenges } = useI18n();
  const [challengeIndex, setChallengeIndex] = useState<number | null>(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [flashcardState, setFlashcardState] = useState<'unanswered' | 'correct' | 'incorrect'>('unanswered');
  const [showSolution, setShowSolution] = useState(false);
  const { toast } = useToast();
  const labels = t.challengeLabels;

  const filteredChallenges = useMemo(() => {
    if (!algorithmFilter) {
      return localizedChallenges;
    }
    return localizedChallenges.filter(c => c.solution === algorithmFilter);
  }, [algorithmFilter, localizedChallenges]);


  const currentChallenge = useMemo(() => {
    if (challengeIndex === null || !filteredChallenges || filteredChallenges.length === 0) {
      return null;
    }
    return filteredChallenges[challengeIndex];
  }, [challengeIndex, filteredChallenges]);

  const selectRandomChallenge = () => {
    if (filteredChallenges && filteredChallenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredChallenges.length);
      setChallengeIndex(randomIndex);
    } else {
      setChallengeIndex(null);
    }
  };

  useEffect(() => {
    selectRandomChallenge();
  }, [algorithmFilter, t.language]);


  const handleNextChallenge = () => {
    setSelectedAlgorithm(null);
    setFlashcardState('unanswered');
    setShowSolution(false);
    selectRandomChallenge();
  };

  const checkAnswer = () => {
    if (!selectedAlgorithm || !currentChallenge) {
      toast({
        title: labels.selectOptionTitle,
        description: labels.selectOptionDesc,
        variant: 'destructive',
      });
      return;
    }

    if (selectedAlgorithm === currentChallenge.solution) {
      setFlashcardState('correct');
      toast({
        title: labels.correctTitle,
        description: labels.correctDesc,
        variant: 'default',
        className: 'bg-green-700 text-white border-green-800',
      });
    } else {
      setFlashcardState('incorrect');
      toast({
        title: labels.incorrectTitle,
        description: labels.incorrectDesc,
        variant: 'destructive',
      });
    }
  };

  const getSolutionName = (solutionId?: string) => {
    const id = solutionId || currentChallenge?.solution;
    if (!id) return 'Unknown';
    return t.algorithms[id as Algorithm['id']]?.name || 'Unknown';
  };

  const getSolutionHint = () => {
    if (!currentChallenge) return 'No hint available.';
    return t.algorithms[currentChallenge.solution as Algorithm['id']]?.whenToUse || 'No hint available.';
  };
  
  const difficulty = currentChallenge?.difficulty;
  const difficultyVariant = difficulty ? difficultyVariantMap[difficulty] as 'default' | 'secondary' | 'destructive' | undefined : undefined;

  return (
    <div className="flex h-full flex-col p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl w-full">
        <div className="mb-6 md:mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className='text-center md:text-left'>
            <h1 className="text-2xl md:text-3xl font-bold">{labels.title}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">{labels.learningTip}</p>
          </div>
           {filteredChallenges.length > 0 && (
            <Button onClick={handleNextChallenge} variant="outline" className="shrink-0">
              <RefreshCw className="mr-2 h-4 w-4" />
              {labels.nextChallenge}
            </Button>
          )}
        </div>
        
         {algorithmFilter && (
           <Alert className="mb-6 relative">
              <AlertTitle>{labels.showingChallengesFor.replace('{algorithm}', getSolutionName(algorithmFilter))}</AlertTitle>
              <AlertDescription>
                  {labels.showingChallengesForDescription}
              </AlertDescription>
               <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={onClearFilter}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">{labels.clearFilter}</span>
                </Button>
            </Alert>
        )}

        {!currentChallenge && (
           <Card className="mb-8 min-h-[200px] shadow-lg flex items-center justify-center">
              <CardContent className='pt-6'>
                <p className="text-lg text-muted-foreground">{labels.noChallengesFound}</p>
              </CardContent>
            </Card>
        )}


        {currentChallenge && (
        <>
        <Card className="mb-8 min-h-[150px] md:min-h-[200px] shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className='text-base md:text-xl'>{labels.problem}</CardTitle>
              {difficulty && <Badge variant={difficultyVariant}>{difficulty}</Badge>}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm md:text-lg text-muted-foreground">{currentChallenge.problem}</p>
            
            {currentChallenge.input && currentChallenge.output && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-blue-400">{labels.inputExample}</h4>
                  <code className="text-xs md:text-sm font-mono break-all">{currentChallenge.input}</code>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-green-400">{labels.outputExample}</h4>
                  <code className="text-xs md:text-sm font-mono break-all">{currentChallenge.output}</code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="mb-4 text-center text-lg md:text-xl font-semibold">{labels.whichAlgorithm}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {algorithms.map((algo) => (
              <Button
                key={algo.id}
                variant={selectedAlgorithm === algo.id ? 'default' : 'outline'}
                onClick={() => flashcardState === 'unanswered' && setSelectedAlgorithm(algo.id)}
                className={cn('h-auto justify-start gap-2 md:gap-3 py-3 text-left text-sm', {
                  'cursor-not-allowed': flashcardState !== 'unanswered',
                })}
              >
                <algo.icon className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                <span className="flex-1 whitespace-normal">{t.algorithms[algo.id].name}</span>
              </Button>
            ))}
          </div>
        </div>

        {flashcardState === 'unanswered' && (
          <div className="text-center">
            <Button onClick={checkAnswer} size="lg">
              {labels.checkAnswer}
            </Button>
          </div>
        )}

        {flashcardState === 'correct' && (
          <Card className="border-green-600 bg-green-900/30 mb-6">
            <CardHeader>
              <CardTitle className="text-green-400">{labels.correctExclamation}</CardTitle>
            </CardHeader>
            <CardContent className="text-green-200 space-y-4">
              <p
                dangerouslySetInnerHTML={{
                  __html: labels.correctSolution.replace('{solution}', `<strong>${getSolutionName()}</strong>`),
                }}
              ></p>
              
              {currentChallenge.explanation && (
                <div className="bg-green-900/30 p-3 rounded-lg border border-green-600/30">
                  <h4 className="font-semibold text-green-300 mb-2">{labels.solutionExplanation}</h4>
                  <p className="text-green-200 text-sm">{currentChallenge.explanation}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="gap-3">
              <Button onClick={handleNextChallenge}>{labels.nextChallenge}</Button>
              {currentChallenge.pythonSolution && (
                <Button 
                  onClick={() => setShowSolution(!showSolution)} 
                  variant="outline"
                  className="border-green-600 text-green-400 hover:bg-green-900/50"
                >
                  {showSolution ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                  {showSolution ? labels.hideSolution : labels.showSolution}
                </Button>
              )}
            </CardFooter>
          </Card>
        )}

        {flashcardState === 'correct' && showSolution && currentChallenge.pythonSolution && (
          <Card className="border-green-600/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Code className="h-5 w-5" />
                Solução em Python
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock language="python" code={currentChallenge.pythonSolution} />
            </CardContent>
          </Card>
        )}

        {flashcardState === 'incorrect' && (
          <Card className="border-red-600 bg-red-900/30 mb-6">
            <CardHeader>
              <CardTitle className="text-red-400">{labels.incorrectExclamation}</CardTitle>
            </CardHeader>
            <CardContent className="text-red-200 space-y-4">
              <p
                dangerouslySetInnerHTML={{
                  __html: labels.incorrectSolution.replace('{solution}', `<strong>${getSolutionName()}</strong>`),
                }}
              ></p>
              <div className="mt-4 flex items-start gap-2 rounded-md border border-amber-500/50 bg-amber-900/20 p-3 text-sm">
                <Lightbulb className="h-5 w-5 shrink-0 text-amber-400" />
                <div>
                  <h4 className="font-semibold text-amber-300">{labels.hint}</h4>
                  <p className="text-amber-400">{getSolutionHint()}</p>
                </div>
              </div>
              
              {currentChallenge.explanation && (
                <div className="bg-red-900/30 p-3 rounded-lg border border-red-600/30">
                  <h4 className="font-semibold text-red-300 mb-2">{labels.solutionExplanation}</h4>
                  <p className="text-red-200 text-sm">{currentChallenge.explanation}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="gap-3">
              <Button onClick={() => setFlashcardState('unanswered')}>{labels.tryAgain}</Button>
              <Button onClick={handleNextChallenge} variant="secondary">
                {labels.nextChallenge}
              </Button>
              {currentChallenge.pythonSolution && (
                <Button 
                  onClick={() => setShowSolution(!showSolution)} 
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900/50"
                >
                  {showSolution ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                  {showSolution ? labels.hideSolution : labels.showSolution}
                </Button>
              )}
            </CardFooter>
          </Card>
        )}

        {flashcardState === 'incorrect' && showSolution && currentChallenge.pythonSolution && (
          <Card className="border-red-600/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <Code className="h-5 w-5" />
                Solução em Python
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock language="python" code={currentChallenge.pythonSolution} />
            </CardContent>
          </Card>
        )}
        </>
        )}
      </div>
    </div>
  );
}
