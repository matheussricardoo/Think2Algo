// This file is being deprecated in favor of storing the challenge content
// inside the i18n locale files (e.g., src/lib/locales/en.ts).
// The logic in challenges-workspace.tsx has been updated to pull from the i18n context.
// This file can be removed in a future cleanup.

export const challenges = [
  {
    problem:
      'You have a list of stock prices for each day and need to find the maximum profit you can make by buying on one day and selling on a later day.',
    solution: 'two-pointers',
  },
  {
    problem: 'Given a string, find the length of the longest substring without repeating characters.',
    solution: 'sliding-window',
  },
  {
    problem:
      'You are on a 2D grid and need to find the shortest path from a starting point to an ending point, avoiding obstacles.',
    solution: 'bfs',
  },
  {
    problem: 'Generate all valid combinations of parentheses for a given number of pairs.',
    solution: 'backtracking',
  },
  {
    problem:
      'Calculate the nth Fibonacci number. The solution should be efficient and avoid recalculating the same values.',
    solution: 'dynamic-programming',
  },
  {
    problem: 'Given a list of islands (represented by "1"s) and water (represented by "0"s), count the total number of distinct islands.',
    solution: 'dfs',
  },
  {
    problem: 'In a social media feed, you need to find the "k" most popular items (e.g., most liked) in real-time.',
    solution: 'heap',
  },
  {
    problem: 'In a huge, sorted dictionary, how would you find a word as efficiently as possible?',
    solution: 'binary-search',
  }
];
