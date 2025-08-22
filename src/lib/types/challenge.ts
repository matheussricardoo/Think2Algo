export interface Challenge {
  problem: string;
  solution: 'sliding-window' | 'two-pointers' | 'backtracking' | 'dynamic-programming' | 'bfs' | 'dfs' | 'heap' | 'binary-search';
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  input?: string;
  output?: string;
  explanation?: string;
  pythonSolution?: string;
}

export interface ChallengeWithExamples extends Challenge {
  input: string;
  output: string;
  explanation: string;
  pythonSolution: string;
}
