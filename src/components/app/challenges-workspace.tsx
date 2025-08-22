'use client';
import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { algorithms, Algorithm } from '@/lib/algorithms';
import { RefreshCw, Lightbulb, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n.tsx';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

type Challenge = {
  problem: string;
  solution: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil' | 'Easy' | 'Medium' | 'Hard';
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
    <div className="flex h-full flex-col p-4 md:p-8">
      <div className="mx-auto max-w-4xl w-full">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className='text-center md:text-left'>
            <h1 className="text-3xl font-bold">{labels.title}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">{labels.learningTip}</p>
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
        <Card className="mb-8 min-h-[200px] shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{labels.problem}</CardTitle>
              {difficulty && <Badge variant={difficultyVariant}>{difficulty}</Badge>}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">{currentChallenge.problem}</p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="mb-4 text-center text-xl font-semibold">{labels.whichAlgorithm}</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {algorithms.map((algo) => (
              <Button
                key={algo.id}
                variant={selectedAlgorithm === algo.id ? 'default' : 'outline'}
                onClick={() => flashcardState === 'unanswered' && setSelectedAlgorithm(algo.id)}
                className={cn('h-auto justify-start gap-3 py-3 text-left', {
                  'cursor-not-allowed': flashcardState !== 'unanswered',
                })}
              >
                <algo.icon className="h-5 w-5 shrink-0" />
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
          <Card className="border-green-600 bg-green-900/30">
            <CardHeader>
              <CardTitle className="text-green-400">{labels.correctExclamation}</CardTitle>
            </CardHeader>
            <CardContent className="text-green-200">
              <p
                dangerouslySetInnerHTML={{
                  __html: labels.correctSolution.replace('{solution}', `<strong>${getSolutionName()}</strong>`),
                }}
              ></p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNextChallenge}>{labels.nextChallenge}</Button>
            </CardFooter>
          </Card>
        )}

        {flashcardState === 'incorrect' && (
          <Card className="border-red-600 bg-red-900/30">
            <CardHeader>
              <CardTitle className="text-red-400">{labels.incorrectExclamation}</CardTitle>
            </CardHeader>
            <CardContent className="text-red-200">
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
            </CardContent>
            <CardFooter className="gap-4">
              <Button onClick={() => setFlashcardState('unanswered')}>{labels.tryAgain}</Button>
              <Button onClick={handleNextChallenge} variant="secondary">
                {labels.nextChallenge}
              </Button>
            </CardFooter>
          </Card>
        )}
        </>
        )}
      </div>
    </div>
  );
}
