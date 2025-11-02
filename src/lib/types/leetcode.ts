export type LeetCodeDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface LeetCodeProblem {
  id: string;
  number: number;
  title: string;
  difficulty: LeetCodeDifficulty;
  category: string[];
  leetcodeUrl: string;
  runtime: string;
  memory: string;
  description: {
    en: string;
    pt: string;
  };
  intuition: {
    en: string;
    pt: string;
  };
  approach: {
    en: string;
    pt: string;
  };
  complexity: {
    time: string;
    space: string;
    explanation: {
      en: string;
      pt: string;
    };
  };
  code: {
    language: string;
    content: string;
    contentPt?: string;
  }[];
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  solvedDate: string;
}
