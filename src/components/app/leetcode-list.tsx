'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ExternalLink, Clock, MemoryStick } from 'lucide-react';
import { LeetCodeProblem, LeetCodeDifficulty } from '@/lib/types/leetcode';
import { leetcodeProblems, getAllCategories } from '@/lib/leetcode-problems';
import { useI18n } from '@/lib/i18n';

interface LeetCodeListProps {
  onSelectProblem: (problem: LeetCodeProblem) => void;
}

const difficultyColors: Record<LeetCodeDifficulty, string> = {
  Easy: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  Hard: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
};

export function LeetCodeList({ onSelectProblem }: LeetCodeListProps) {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => getAllCategories(), []);

  const filteredProblems = useMemo(() => {
    let filtered = leetcodeProblems;

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (problem) =>
          problem.title.toLowerCase().includes(lowerQuery) ||
          problem.number.toString().includes(lowerQuery) ||
          problem.category.some((cat) => cat.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((problem) => problem.difficulty === selectedDifficulty);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((problem) => problem.category.includes(selectedCategory));
    }

    return filtered;
  }, [searchQuery, selectedDifficulty, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>{t.leetcode?.filters || 'Filters'}</CardTitle>
          <CardDescription>{t.leetcode?.filtersDescription || 'Filter problems by difficulty, category or search'}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t.leetcode?.searchPlaceholder || 'Search by title, number or category...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder={t.leetcode?.difficulty || 'Difficulty'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.leetcode?.allDifficulties || 'All Difficulties'}</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder={t.leetcode?.category || 'Category'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.leetcode?.allCategories || 'All Categories'}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {(searchQuery || selectedDifficulty !== 'all' || selectedCategory !== 'all') && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty('all');
                setSelectedCategory('all');
              }}
            >
              {t.leetcode?.clearFilters || 'Clear Filters'}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {t.leetcode?.showingResults || 'Showing'} {filteredProblems.length} {t.leetcode?.problems || 'problems'}
          </p>
        </div>

        {filteredProblems.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground">{t.leetcode?.noProblems || 'No problems found'}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {filteredProblems.map((problem) => (
              <Card
                key={problem.id}
                className="cursor-pointer transition-colors hover:bg-muted/50"
                onClick={() => onSelectProblem(problem)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono text-muted-foreground">#{problem.number}</span>
                        <Badge className={difficultyColors[problem.difficulty]}>{problem.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-lg">{problem.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {problem.category.map((cat) => (
                          <Badge key={cat} variant="secondary" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                      <a href={problem.leetcodeUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{problem.runtime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MemoryStick className="h-4 w-4" />
                      <span>{problem.memory}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
