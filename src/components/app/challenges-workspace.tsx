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
        <div className="mb-6 md:mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className='text-center sm:text-left'>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{labels.title}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">{labels.learningTip}</p>
          </div>
           {filteredChallenges.length > 0 && (
            <Button onClick={handleNextChallenge} variant="outline" className="shrink-0 w-full sm:w-auto">
              <RefreshCw className="mr-2 h-4 w-4" />
              {labels.nextChallenge}
            </Button>
          )}
        </div>
        
         {algorithmFilter && (
           <Alert className="mb-6 relative">
              <AlertTitle className="text-sm sm:text-base pr-8">{labels.showingChallengesFor.replace('{algorithm}', getSolutionName(algorithmFilter))}</AlertTitle>
              <AlertDescription className="text-xs sm:text-sm">
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
              <CardContent className='pt-6 text-center'>
                <p className="text-base sm:text-lg text-muted-foreground">{labels.noChallengesFound}</p>
              </CardContent>
            </Card>
        )}


        {currentChallenge && (
        <>
        <Card className="mb-8 min-h-[150px] md:min-h-[200px] shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <CardTitle className='text-base sm:text-lg md:text-xl'>{labels.problem}</CardTitle>
              {difficulty && <Badge variant={difficultyVariant} className="w-fit">{difficulty}</Badge>}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">{currentChallenge.problem}</p>
            
            {currentChallenge.input && currentChallenge.output && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-blue-400">{labels.inputExample}</h4>
                  <code className="text-xs sm:text-sm font-mono break-all block overflow-x-auto">{currentChallenge.input}</code>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-green-400">{labels.outputExample}</h4>
                  <code className="text-xs sm:text-sm font-mono break-all block overflow-x-auto">{currentChallenge.output}</code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="mb-4 text-center text-base sm:text-lg md:text-xl font-semibold">{labels.whichAlgorithm}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {algorithms.map((algo) => (
              <Button
                key={algo.id}
                variant={selectedAlgorithm === algo.id ? 'default' : 'outline'}
                onClick={() => flashcardState === 'unanswered' && setSelectedAlgorithm(algo.id)}
                className={cn('h-auto justify-start gap-2 md:gap-3 py-3 px-2 md:px-3 text-left text-xs sm:text-sm md:text-sm min-h-[44px]', {
                  'cursor-not-allowed': flashcardState !== 'unanswered',
                })}
              >
                <algo.icon className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                <span className="flex-1 whitespace-normal leading-tight">{t.algorithms[algo.id].name}</span>
              </Button>
            ))}
          </div>
        </div>

        {flashcardState === 'unanswered' && (
          <div className="text-center mb-6">
            <Button onClick={checkAnswer} size="lg" className="w-full sm:w-auto min-w-[200px]">
              {labels.checkAnswer}
            </Button>
          </div>
        )}

        {flashcardState === 'correct' && (
          <Card className="border-green-600 bg-green-900/30 mb-6">
            <CardHeader>
              <CardTitle className="text-green-400 text-base sm:text-lg md:text-xl">{labels.correctExclamation}</CardTitle>
            </CardHeader>
            <CardContent className="text-green-200 space-y-4 overflow-hidden">
              <div className="overflow-hidden">
                <p
                  className="text-sm sm:text-base md:text-base break-words word-wrap-break-word"
                  style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                  dangerouslySetInnerHTML={{
                    __html: labels.correctSolution.replace('{solution}', `<strong>${getSolutionName()}</strong>`),
                  }}
                ></p>
              </div>
              
              {currentChallenge.explanation && (
                <div className="bg-green-900/30 p-3 sm:p-4 rounded-lg border border-green-600/30 overflow-hidden">
                  <h4 className="font-semibold text-green-300 mb-2 text-sm sm:text-base break-words">{labels.solutionExplanation}</h4>
                  <div className="text-green-200 text-xs sm:text-sm leading-relaxed overflow-hidden">
                    <p className="break-words word-wrap-break-word hyphens-auto" style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}>
                      {currentChallenge.explanation}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button onClick={handleNextChallenge} className="w-full">{labels.nextChallenge}</Button>
              {currentChallenge.pythonSolution && (
                <Button 
                  onClick={() => setShowSolution(!showSolution)} 
                  variant="outline"
                  className="w-full border-green-600 text-green-400 hover:bg-green-900/50 text-xs sm:text-sm"
                >
                  {showSolution ? <EyeOff className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> : <Eye className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />}
                  <span className="hidden sm:inline">{showSolution ? labels.hideSolution : labels.showSolution}</span>
                  <span className="sm:hidden">{showSolution ? 'Ocultar' : 'Ver Código'}</span>
                </Button>
              )}
            </CardFooter>
          </Card>
        )}

        {flashcardState === 'correct' && showSolution && currentChallenge.pythonSolution && (
          <Card className="border-green-600/50 mb-6 overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-400 text-sm sm:text-base md:text-lg">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">Solução em Python</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden">
              <div className="w-full">
                <CodeBlock language="python" code={currentChallenge.pythonSolution} />
              </div>
            </CardContent>
          </Card>
        )}

        {flashcardState === 'incorrect' && (
          <Card className="border-red-600 bg-red-900/30 mb-6">
            <CardHeader>
              <CardTitle className="text-red-400 text-base sm:text-lg md:text-xl">{labels.incorrectExclamation}</CardTitle>
            </CardHeader>
            <CardContent className="text-red-200 space-y-4 overflow-hidden">
              <div className="overflow-hidden">
                <p
                  className="text-sm sm:text-base break-words word-wrap-break-word"
                  style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                  dangerouslySetInnerHTML={{
                    __html: labels.incorrectSolution.replace('{solution}', `<strong>${getSolutionName()}</strong>`),
                  }}
                ></p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 rounded-md border border-amber-500/50 bg-amber-900/20 p-3 overflow-hidden">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-amber-400 mt-0.5" />
                <div className="min-w-0 flex-1 overflow-hidden">
                  <h4 className="font-semibold text-amber-300 text-sm sm:text-base break-words">{labels.hint}</h4>
                  <div className="text-amber-400 text-xs sm:text-sm overflow-hidden">
                    <p className="break-words word-wrap-break-word hyphens-auto" style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}>
                      {getSolutionHint()}
                    </p>
                  </div>
                </div>
              </div>
              
              {currentChallenge.explanation && (
                <div className="bg-red-900/30 p-3 sm:p-4 rounded-lg border border-red-600/30 overflow-hidden">
                  <h4 className="font-semibold text-red-300 mb-2 text-sm sm:text-base break-words">{labels.solutionExplanation}</h4>
                  <div className="text-red-200 text-xs sm:text-sm leading-relaxed overflow-hidden">
                    <p className="break-words word-wrap-break-word hyphens-auto" style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}>
                      {currentChallenge.explanation}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button onClick={() => setFlashcardState('unanswered')} className="w-full sm:w-auto">{labels.tryAgain}</Button>
                <Button onClick={handleNextChallenge} variant="secondary" className="w-full sm:w-auto">
                  {labels.nextChallenge}
                </Button>
              </div>
              {currentChallenge.pythonSolution && (
                <Button 
                  onClick={() => setShowSolution(!showSolution)} 
                  variant="outline"
                  className="w-full border-red-600 text-red-400 hover:bg-red-900/50 text-xs sm:text-sm"
                >
                  {showSolution ? <EyeOff className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> : <Eye className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />}
                  <span className="hidden sm:inline">{showSolution ? labels.hideSolution : labels.showSolution}</span>
                  <span className="sm:hidden">{showSolution ? 'Ocultar' : 'Ver Código'}</span>
                </Button>
              )}
            </CardFooter>
          </Card>
        )}

        {flashcardState === 'incorrect' && showSolution && currentChallenge.pythonSolution && (
          <Card className="border-red-600/50 mb-6 overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-400 text-sm sm:text-base md:text-lg">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">Solução em Python</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden">
              <div className="w-full">
                <CodeBlock language="python" code={currentChallenge.pythonSolution} />
              </div>
            </CardContent>
          </Card>
        )}
        </>
        )}
      </div>
    </div>
  );
}
