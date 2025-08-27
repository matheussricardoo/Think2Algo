export interface Solution {
  title: string;
  explanation: string;
  code: string;
}

export interface Challenge {
  problem: string;
  solution: 'sliding-window' | 'two-pointers' | 'backtracking' | 'dynamic-programming' | 'bfs' | 'dfs' | 'heap' | 'binary-search';
  difficulty: 'Fácil' | 'Médio' | 'Difícil' | 'Easy' | 'Medium' | 'Hard';
  input?: string;
  output?: string;
  solutions: Solution[];
}
