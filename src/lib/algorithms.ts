import type { LucideIcon } from 'lucide-react';
import {
  RectangleHorizontal,
  GitCompareArrows,
  Milestone,
  Combine,
  Network,
  GitBranch,
  PieChart,
  Search,
} from 'lucide-react';

// This file defines the CORE, non-translatable properties of each algorithm.
// The actual text content (name, description, etc.) is in the i18n files.

export type BigO = {
  time: {
    best: string;
    average: string;
    worst: string;
  };
  space: {
    worst: string;
  };
};

export type Algorithm = {
  id: 'sliding-window' | 'two-pointers' | 'backtracking' | 'dynamic-programming' | 'bfs' | 'dfs' | 'heap' | 'binary-search';
  icon: LucideIcon;
  bigO: BigO;
  codeTemplates: {
    python: string;
    javascript: string;
  };
};

export const algorithms: Algorithm[] = [
  {
    id: 'sliding-window',
    icon: RectangleHorizontal,
    bigO: {
      time: { best: 'O(n)', average: 'O(n)', worst: 'O(n)' },
      space: { worst: 'O(1) or O(k)' },
    },
    codeTemplates: {
      python: `def sliding_window(arr, k):
    # Implementation details
    max_sum = 0
    window_sum = sum(arr[:k])
    max_sum = window_sum

    for i in range(len(arr) - k):
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)

    return max_sum`,
      javascript: `function slidingWindow(arr, k) {
  // Implementation details
  let maxSum = 0;
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  maxSum = windowSum;

  for (let i = 0; i < arr.length - k; i++) {
    windowSum = windowSum - arr[i] + arr[i + k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}`,
    },
  },
  {
    id: 'two-pointers',
    icon: GitCompareArrows,
     bigO: {
      time: { best: 'O(n)', average: 'O(n)', worst: 'O(n log n)' },
      space: { worst: 'O(1) or O(n)' },
    },
    codeTemplates: {
      python: `def two_pointers(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None`,
      javascript: `function twoPointers(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}`,
    },
  },
  {
    id: 'backtracking',
    icon: Milestone,
    bigO: {
      time: { best: 'O(N!)', average: 'O(N!)', worst: 'O(2^N * N)' },
      space: { worst: 'O(N)' },
    },
    codeTemplates: {
      python: `def backtrack(result, temp_list, nums):
    result.append(list(temp_list))
    for i in range(len(nums)):
        # recursive call
        backtrack(result, temp_list + [nums[i]], nums[i+1:])

def subsets(nums):
    result = []
    backtrack(result, [], sorted(nums))
    return result`,
      javascript: `function subsets(nums) {
  const result = [];
  function backtrack(tempList, start) {
    result.push([...tempList]);
    for (let i = start; i < nums.length; i++) {
      tempList.push(nums[i]);
      backtrack(tempList, i + 1);
      tempList.pop();
    }
  }
  backtrack([], 0);
  return result;
}`,
    },
  },
  {
    id: 'dynamic-programming',
    icon: Combine,
    bigO: {
      time: { best: 'O(n)', average: 'O(n*m)', worst: 'O(n*m)' },
      space: { worst: 'O(n*m)' },
    },
    codeTemplates: {
      python: `def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]`,
      javascript: `function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}`,
    },
  },
  {
    id: 'bfs',
    icon: Network,
    bigO: {
      time: { best: 'O(V+E)', average: 'O(V+E)', worst: 'O(V+E)' },
      space: { worst: 'O(V)' },
    },
    codeTemplates: {
      python: `from collections import deque

def bfs(graph, start_node):
    visited = set()
    queue = deque([start_node])
    visited.add(start_node)

    while queue:
        node = queue.popleft()
        print(node)  # Process node
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
      javascript: `function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node); // Process node
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`,
    },
  },
  {
    id: 'dfs',
    icon: GitBranch,
    bigO: {
      time: { best: 'O(V+E)', average: 'O(V+E)', worst: 'O(V+E)' },
      space: { worst: 'O(V)' },
    },
    codeTemplates: {
      python: `def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    print(node)  # Process node
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
      javascript: `function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  console.log(node); // Process node
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`,
    },
  },
  {
    id: 'heap',
    icon: PieChart,
    bigO: {
      time: { best: 'O(n log k)', average: 'O(n log k)', worst: 'O(n log k)' },
      space: { worst: 'O(k)' },
    },
    codeTemplates: {
      python: `import heapq

def find_k_largest(nums, k):
    return heapq.nlargest(k, nums)

def find_k_smallest(nums, k):
    return heapq.nsmallest(k, nums)`,
      javascript: `// JavaScript doesn't have a built-in heap.
// A library like 'collections-js' or a custom implementation is needed.
class MinHeap {
  constructor() {
    this.heap = [];
  }
  // ... implementation for insert, extractMin, etc.
}
`,
    },
  },
  {
    id: 'binary-search',
    icon: Search,
    bigO: {
      time: { best: 'O(1)', average: 'O(log n)', worst: 'O(log n)' },
      space: { worst: 'O(1)' },
    },
    codeTemplates: {
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
      javascript: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`,
    },
  },
];
