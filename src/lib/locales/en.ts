
import type { Challenge } from '../types/challenge';

export const en = {
  sidebar: {
    title: 'Think2Algo',
    theory: 'Theory',
    algorithms: 'Algorithms',
    challenges: 'Challenges',
    bigO: 'Big O Notation',
    mikeFramework: 'MIKE Framework',
  },
  workspace: {
    selectAlgorithm: 'Select an algorithm to see the details.',
  },
  mikeFramework: {
    title: 'The MIKE Framework for Problem Solving',
    description: 'The MIKE framework is a mental model to systematically approach and solve algorithmic problems, especially in an interview context. It ensures you cover all the necessary steps, from understanding the problem to verifying your solution. It stands for Match, Implement, Know, and Explain.',
    match: {
      title: 'M: Match',
      description: 'The first and most crucial step. Your goal is to match the problem to the correct algorithmic pattern. This is what Think2Algo helps you practice.',
      steps: [
        {
          title: 'Listen and Clarify',
          description: 'Actively listen to the problem. Ask clarifying questions to understand constraints (e.g., "Is the array sorted?", "What are the limits on the input size?", "Can I modify the input?").'
        },
        {
          title: 'Identify Keywords and Signals',
          description: 'Look for tell-tale signs. "Shortest path in an unweighted graph" -> BFS. "All combinations/permutations" -> Backtracking. "Sorted array" -> Binary Search or Two Pointers.'
        },
        {
          title: 'Consider Data Structures',
          description: 'Which data structure fits the problem? Do you need fast lookups (Hash Map), ordering (Heap), or LIFO/FIFO behavior (Stack/Queue)?'
        }
      ]
    },
    implement: {
      title: 'I: Implement',
      description: 'Once you have a clear plan, you start coding. The goal here is to write clean, correct, and readable code.',
      steps: [
        {
          title: 'Start with a Brute-Force Idea',
          description: 'It\'s okay to first think of a brute-force solution. You can state it to the interviewer and then discuss how to optimize it. This shows you can solve the problem, even if inefficiently at first.'
        },
        {
          title: 'Code the Optimized Solution',
          description: 'Translate your chosen algorithm into code. Use meaningful variable names and helper functions to keep your code organized.'
        },
        {
          title: 'Test with Edge Cases',
          description: 'As you code, think about edge cases: empty arrays, single-element inputs, large numbers, etc. Handle them gracefully.'
        }
      ]
    },
    know: {
      title: 'K: Know',
      description: 'This step is about knowing the "why" behind your code. You need to understand its performance and trade-offs.',
      steps: [
        {
          title: 'Analyze Time Complexity',
          description: 'Determine the Big O time complexity of your solution. Explain it based on the loops, recursions, and data structure operations in your code.'
        },
        {
          title: 'Analyze Space Complexity',
          description: 'Determine the Big O space complexity. Account for any extra space used by your data structures or recursion call stack.'
        },
        {
          title: 'Discuss Trade-offs',
          description: 'Why is your solution good? Could it be better? For example, "My solution uses O(n) space for a hash map to achieve O(n) time, which is faster than the O(1) space, O(n log n) time sorting-based approach."'
        }
      ]
    },
    explain: {
      title: 'E: Explain',
      description: 'Communication is key. You must be able to clearly explain your thought process and solution.',
      steps: [
        {
          title: 'Verbalize Your Thoughts',
          description: 'Talk through your logic as you are matching and implementing. Explain why you are making certain choices.'
        },
        {
          title: 'Walk Through an Example',
          description: 'After writing the code, manually trace a simple example input through your logic to show it works. This is a great way to catch bugs and prove correctness.'
        },
        {
          title: 'Summarize the Solution',
          description: 'Conclude by summarizing the approach, its complexity, and why it is an effective solution to the problem.'
        }
      ]
    }
  },
  bigO: {
    title: 'Understanding Big O Notation',
    description: 'Big O notation is how programmers talk about the efficiency of algorithms. It measures the worst-case time or space an algorithm takes to complete relative to the size of its input (n). In simpler terms, it describes how the performance of an algorithm scales as the input data grows.',
    importanceTitle: 'Why is it Important?',
    importanceDescription: 'Knowing the Big O helps you choose the right algorithm for the job. An algorithm that works fine for a small input might become unusably slow with a large input. Understanding Big O helps you avoid performance bottlenecks and write faster, more scalable code.',
    complexities: {
      title: 'Common Complexities',
      exampleLabel: 'Example:',
      constant: {
        name: 'O(1) — Constant Time',
        description: 'The algorithm takes the same amount of time, regardless of the input size. This is the ideal.',
        example: 'Accessing an element in an array by its index (e.g., `my_array[5]`).',
      },
      logarithmic: {
        name: 'O(log n) — Logarithmic Time',
        description: 'The time it takes increases with the input size, but it does so very slowly. This happens when the problem size is halved at each step.',
        example: 'Binary Search in a sorted array.',
      },
      linear: {
        name: 'O(n) — Linear Time',
        description: 'The runtime is directly proportional to the input size (n). If you double the input, the runtime roughly doubles.',
        example: 'Iterating through all elements in a list or array.',
      },
      loglinear: {
        name: 'O(n log n) — Log-Linear Time',
        description: 'This is a common complexity for efficient sorting algorithms. It\'s slightly slower than linear but still very performant for large datasets.',
        example: 'Efficient sorting algorithms like Merge Sort or Quick Sort.',
      },
      quadratic: {
        name: 'O(n²) — Quadratic Time',
        description: 'The runtime is proportional to the square of the input size. This becomes slow very quickly as n grows.',
        example: 'Nested loops, where you compare every element of a list to every other element (e.g., finding all pairs in a list).',
      },
      exponential: {
        name: 'O(2^n) — Exponential Time',
        description: 'The runtime doubles for each new element in the input set. These algorithms are extremely slow and only practical for very small input sizes.',
        example: 'Solving problems with brute-force recursive solutions, like finding all subsets of a set (backtracking).',
      },
    },
  },
  algorithmDetails: {
    whenToUse: 'When to Use It',
    keywords: 'Keywords & Signals',
    typicalProblem: 'Typical Problem',
    codeTemplates: 'Code Templates',
    codeTemplatesDescription: 'Basic templates in Python and JavaScript to get you started.',
    visualization: 'Visualization',
    visualizationInDevelopment: 'Visualization in development for this algorithm',
    bigO: 'Big O Notation',
    bigODescription: 'The performance characteristics of this algorithm.',
    timeComplexity: 'Time Complexity',
    spaceComplexity: 'Space Complexity',
    best: 'Best',
    average: 'Average',
    worst: 'Worst',
    practiceThisAlgorithm: 'Practice this algorithm',
  },
  codeBlock: {
    copied: 'Copied to clipboard!',
    copiedSuccess: 'The {language} code has been copied.',
    copyCode: 'Copy code',
  },
  challengeLabels: {
    title: 'Algorithm Challenges',
    learningTip: 'To learn even better, besides practicing with flashcard challenges, it\'s good to write down the exercises, the correct algorithm, and build the solution in a notebook to learn and retain the knowledge.',
    nextChallenge: 'Next Challenge',
    problem: 'Problem',
    inputExample: 'Input Example',
    outputExample: 'Expected Output',
    whichAlgorithm: 'Which algorithm is most suitable?',
    checkAnswer: 'Check Answer',
    solutionExplanation: 'Explanation',
    selectOptionTitle: 'Select an option',
    selectOptionDesc: 'You need to choose an algorithm before checking the answer.',
    correctTitle: 'Correct!',
    correctDesc: 'Great job!',
    incorrectTitle: 'Incorrect!',
    incorrectDesc: 'Try again. Hint: Think about the keywords in the problem.',
    correctExclamation: '🎉 Correct! 🎉',
    correctSolution: 'The correct algorithm is {solution}. Good job!',
    incorrectExclamation: 'Almost there!',
    incorrectSolution: "The correct answer is {solution}. Don't worry, keep trying!",
    hint: 'Hint',
    tryAgain: 'Try Again',
    loading: 'Loading challenges...',
    showingChallengesFor: 'Showing challenges for: {algorithm}',
    showingChallengesForDescription: 'Practice with problems specifically for this algorithm to master it.',
    clearFilter: 'Clear filter and see all challenges',
    noChallengesFound: 'No challenges found for this filter.',
  },
  algorithms: {
    'sliding-window': {
        name: 'Sliding Window',
        whenToUse: 'The problem involves a linear data structure (array, list, string) and asks to find a contiguous sub-section (subarray or substring) that is optimal in some way (longest, shortest, max sum, etc.).',
        keywords: ['contiguous subarray', 'substring', 'longest/shortest length', 'max/min sum', 'contains k distinct elements'],
        example: 'Given an array of integers, find the maximum sum of any contiguous subarray of size k.'
    },
    'two-pointers': {
        name: 'Two Pointers',
        whenToUse: 'The problem involves a sorted array (or one that can be sorted) and seeks a pair or triplet of elements that satisfy a condition. Often, one pointer starts at the beginning and one at the end, moving towards each other.',
        keywords: ['sorted array', 'find a pair/triplet', 'target sum', 'remove duplicates', 'palindrome'],
        example: 'In a sorted array, find two numbers that sum up to a target value X.'
    },
    'backtracking': {
        name: 'Backtracking',
        whenToUse: 'The problem asks to find all possible solutions or a single solution that satisfies complex constraints by building the answer step-by-step. If a choice leads to a dead end, you "go back" (backtrack) and try another. It\'s a structured Depth-First Search (DFS).',
        keywords: ['find all combinations', 'permutations', 'subsets', 'possible paths', 'puzzle', 'Sudoku', 'maze'],
        example: 'Given a set of numbers, find all unique subsets.'
    },
    'dynamic-programming': {
        name: 'Dynamic Programming (DP)',
        whenToUse: "It's an optimization problem (find the max/min) or a counting problem (count the number of ways) where the solution to a larger problem can be built from the solutions of smaller, overlapping subproblems.",
        keywords: ['number of ways to...', 'min/max cost path', 'max/min value obtainable', 'maximum profit'],
        example: 'Knapsack Problem: Given items with weights and values, what is the maximum value that can fit in a knapsack of capacity W?'
    },
    'bfs': {
        name: 'Breadth-First Search (BFS)',
        whenToUse: 'The problem involves graphs or matrices and asks for the shortest path from one point to another, assuming all steps have the same cost. BFS explores the neighborhood in "layers".',
        keywords: ['shortest path', 'fewest number of steps', 'levels of a tree', 'unweighted graph', 'maze'],
        example: 'In a matrix with walls, find the shortest number of steps to get from the top-left to the bottom-right corner.'
    },
    'dfs': {
        name: 'Depth-First Search (DFS)',
        whenToUse: 'The problem involves graphs or matrices and asks to explore paths to their end, check if a path exists, or find connected components. It does not guarantee the shortest path.',
        keywords: ['find a path (any)', 'check if path exists', 'connected components', 'cycles in a graph', 'count islands'],
        example: 'Given a matrix of 1s (land) and 0s (water), count the number of islands.'
    },
    'heap': {
        name: 'Priority Queue (Heap)',
        whenToUse: 'The problem asks to find or keep track of the "top K" elements (largest K or smallest K) from a collection of data.',
        keywords: ['k-th largest/smallest element', 'top k', 'median of a stream', 'schedule tasks'],
        example: 'Find the 10 most liked tweets from a real-time feed.'
    },
    'binary-search': {
        name: 'Binary Search',
        whenToUse: "The problem involves finding an item in a sorted array. More advanced, it can be used on optimization problems where you can \"guess\" an answer and check if it's valid, and the search space of answers is monotonic.",
        keywords: ['sorted array', 'find index of', 'the smallest/largest value X such that...'],
        example: 'Find the first number in a sorted array that is greater than or equal to Y.'
    }
  },
  challenges: [
    {
      problem: 'Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [1,2,3,1]',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Hash Set)',
          explanation: "The optimal approach uses a hash set for its O(1) average time complexity for insertions and lookups. By iterating through the array once, we achieve an overall time complexity of O(n). This is significantly faster than sorting. The trade-off is the O(n) space complexity to store the elements in the set, but this is usually acceptable for the performance gain.",
          code: `def containsDuplicate(nums):
    # Create an empty hash set. Lookups and insertions are O(1) on average.
    hashset = set()
    
    # Iterate through each number in the input list.
    for n in nums:
        # If the number is already in the hash set, we've found a duplicate.
        if n in hashset:
            return True
        # If not, add it to the set for future checks.
        hashset.add(n)
        
    # If the loop completes without finding duplicates, return False.
    return False`
        },
        {
          title: 'Brute Force Solution (Sorting)',
          explanation: "A common brute-force approach is to sort the array first. Sorting takes O(n log n) time. After sorting, we can make a single pass (O(n)) to check for any adjacent elements that are identical. The total time complexity is dominated by the sort, making it O(n log n). While this approach has a better space complexity of O(1) (if sorting in-place), it is less time-efficient than the hash set method for large inputs.",
          code: `def containsDuplicate_bruteforce(nums):
    # Sort the array. This brings all identical elements next to each other.
    # Time complexity for this step is O(n log n).
    nums.sort()
    
    # Iterate through the sorted array up to the second-to-last element.
    # This loop runs n-1 times, so it's O(n).
    for i in range(len(nums) - 1):
        # Compare the current element with the next one.
        if nums[i] == nums[i+1]:
            # If they are the same, a duplicate exists.
            return True
            
    # If the loop finishes, no duplicates were found.
    return False`
        }
      ]
    },
    {
      problem: 'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
      solution: 'binary-search',
      difficulty: 'Easy',
      input: 'nums = [1,3,5,6], target = 5',
      output: '2',
      solutions: [{
        title: 'Optimized Solution (Binary Search)',
        explanation: "Because the array is sorted, Binary Search is the ideal algorithm. It achieves O(log n) time complexity by repeatedly halving the search interval. A brute-force linear scan (checking each element one-by-one) would take O(n) time, which is far less efficient for large datasets. The binary search approach elegantly finds either the element or its correct insertion point.",
        code: `def searchInsert(nums, target):
    # Initialize two pointers, left and right, at the start and end of the array.
    left, right = 0, len(nums) - 1
    
    # Loop as long as the search space is valid (left pointer is not past the right).
    while left <= right:
        # Calculate the middle index to avoid potential overflow.
        mid = left + (right - left) // 2
        
        # If the middle element is the target, we've found it.
        if nums[mid] == target:
            return mid
        # If the middle element is less than the target, the target must be in the right half.
        elif nums[mid] < target:
            left = mid + 1
        # If the middle element is greater, the target must be in the left half.
        else:
            right = mid - 1
    
    # If the loop ends, the target wasn't found. 
    # 'left' is now at the correct insertion index.
    return left`
      }]
    },
    {
      problem: 'Given a string `s`, find the length of the longest substring without repeating characters.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 's = "abcabcbb"',
      output: '3',
      solutions: [{
        title: 'Optimized Solution (Sliding Window)',
        explanation: "This is a classic 'Sliding Window' problem. We use two pointers (left and right) to define a 'window' and a hash set to store characters currently in that window. We expand the window by moving the right pointer. If we find a character that's already in our set, we shrink the window from the left until the duplicate is removed. This ensures we only iterate through the string once, giving an optimal time complexity of O(n).",
        code: `def lengthOfLongestSubstring(s):
    # Set to store characters in the current window for O(1) lookups.
    charSet = set()
    # Left pointer of the window.
    l = 0
    # Variable to store the maximum length found.
    res = 0

    # Iterate through the string with the right pointer.
    for r in range(len(s)):
        # Check if the character at the right pointer is already in the set (a duplicate).
        while s[r] in charSet:
            # If it is, remove the character at the left pointer from the set.
            charSet.remove(s[l])
            # And slide the left pointer to the right, shrinking the window.
            l += 1
        # Add the new character from the right pointer to the set.
        charSet.add(s[r])
        # Update the result with the maximum length of the current valid window.
        res = max(res, r - l + 1)
    return res`
      }]
    },
    {
      problem: 'You are given a list of stock prices where `prices[i]` is the price on a given day. Find the maximum profit you can achieve by buying on one day and selling on a later day.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'prices = [7,1,5,3,6,4]',
      output: '5 (Buy at 1, Sell at 6)',
      solutions: [{
        title: 'Optimized Solution (Two Pointers)',
        explanation: "This problem can be efficiently solved using a 'Two Pointers' approach in a single pass (O(n)). We use a 'left' pointer for buying and a 'right' pointer for selling. We iterate the 'right' pointer through the prices, and if we find a price lower than our current buy price, we move our 'buy' pointer to this new low. Otherwise, we calculate the potential profit and keep track of the maximum profit found. A brute-force O(n²) approach, checking every possible pair of buy/sell days, would be too slow for large inputs.",
        code: `def maxProfit(prices):
    # Initialize a left pointer for buying and a right pointer for selling.
    # Start with left at day 0 and right at day 1.
    l, r = 0, 1 
    # Initialize max profit to 0.
    maxP = 0

    # Iterate while the right pointer is within the bounds of the array.
    while r < len(prices):
        # Check if a profitable transaction is possible (buy price < sell price).
        if prices[l] < prices[r]:
            # Calculate the current profit.
            profit = prices[r] - prices[l]
            # Update the maximum profit found so far.
            maxP = max(maxP, profit)
        else:
            # If the sell price is not higher than the buy price, it's a new minimum.
            # We should move our buy pointer here, as buying at this lower price
            # is always better.
            l = r
        # Move the sell pointer to the next day.
        r += 1
    
    return maxP`
      }]
    },
    {
      problem: 'Generate all valid combinations of `n` pairs of parentheses.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      solutions: [
        {
          title: 'Optimized Solution (Backtracking)',
          explanation: "This is a classic Backtracking problem. We build the string recursively, adding either '(' or ')' at each step. To ensure the combination is always valid, we follow two rules: 1) We can only add a ')' if we have more open parentheses than closed ones. 2) We can only add a '(' if we haven't used all `n` open parentheses. This pruning of invalid paths is what makes backtracking efficient. We explore all valid combinations without generating invalid ones.",
          code: `def generateParenthesis(n):
    # Stack to build the current combination.
    stack = []
    # List to store all valid results.
    res = []

    def backtrack(openN, closedN):
        # Base case: if we have used all open and closed parentheses,
        # we have a valid combination.
        if openN == closedN == n:
            res.append("".join(stack))
            return

        # Condition 1: We can add an open parenthesis if we haven't reached the max (n).
        if openN < n:
            stack.append("(")
            # Recurse with one more open parenthesis used.
            backtrack(openN + 1, closedN)
            # Backtrack: pop the parenthesis to explore other possibilities.
            stack.pop()
        
        # Condition 2: We can add a closing parenthesis only if it's less than the open ones used.
        # This ensures the combination remains valid.
        if closedN < openN:
            stack.append(")")
            # Recurse with one more closed parenthesis used.
            backtrack(openN, closedN + 1)
            # Backtrack.
            stack.pop()

    # Start the backtracking process.
    backtrack(0, 0)
    return res`
        }
      ]
    },
    {
      problem: 'Given a 2D grid of `1`s (land) and `0`s (water), count the number of islands.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'grid = [["1","1","0"], ["1","1","0"], ["0","0","1"]]',
      output: '2',
      solutions: [
        {
          title: 'Optimized Solution (DFS)',
          explanation: 'This problem is a classic use case for graph traversal algorithms like DFS or BFS. The grid can be seen as a graph where adjacent land cells are connected. We iterate through each cell of the grid. If a cell contains a `1`, we increment our island count and then start a DFS from that cell to find all connected parts of the island. The key is to mark visited cells (e.g., by changing `1` to `0` or using a separate `visited` set) to ensure we don\'t count the same island twice.',
          code: `def numIslands(grid):
    # If the grid is empty, there are no islands.
    if not grid:
        return 0

    # Get the dimensions of the grid.
    rows, cols = len(grid), len(grid[0])
    # Initialize island count.
    islands = 0

    # The dfs helper function explores and "sinks" an island.
    def dfs(r, c):
        # Check for boundaries or if the cell is water or already visited.
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        
        # Mark the current cell as visited by changing it to '0' (sinking it).
        grid[r][c] = '0'
        
        # Recursively call dfs on all 4 adjacent cells.
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    # Iterate through every cell in the grid.
    for r in range(rows):
        for c in range(cols):
            # If we find a '1', it's the start of a new, unvisited island.
            if grid[r][c] == '1':
                # Increment the island count.
                islands += 1
                # Start DFS to find and sink all parts of this island.
                dfs(r, c)
    
    return islands`
        }
      ]
    },
    {
      problem: 'Given a binary tree, find the shortest path from the root to any leaf node. Return the number of nodes in that path.',
      solution: 'bfs',
      difficulty: 'Easy',
      input: 'A binary tree structure',
      output: 'The minimum depth (e.g., 2)',
      solutions: [
        {
          title: 'Optimized Solution (BFS)',
          explanation: 'BFS is the perfect algorithm for finding the shortest path in an unweighted graph, which includes a binary tree. It explores the tree level by level. The first time we encounter a leaf node (a node with no children), we have found the shortest path because we are exploring layer by layer from the root. A DFS approach would also work, but it would have to explore every single path to the end to determine which one is the shortest, making it less efficient for this specific problem.',
          code: `from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def minDepth(root):
    # If the root is null, the depth is 0.
    if not root:
        return 0

    # Initialize a queue for BFS with the root node and its depth (1).
    q = deque([(root, 1)])

    # Process the queue until it's empty.
    while q:
        # Dequeue the next node and its current depth.
        node, depth = q.popleft()

        # Check if it's a leaf node (no left and no right child).
        if not node.left and not node.right:
            # Since BFS explores level by level, the first leaf we find
            # gives us the minimum depth.
            return depth
        
        # If not a leaf, add its children to the queue for the next level.
        if node.left:
            q.append((node.left, depth + 1))
        if node.right:
            q.append((node.right, depth + 1))
`
        }
      ]
    },
    {
      problem: 'You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
      solution: 'dynamic-programming',
      difficulty: 'Easy',
      input: 'n = 3',
      output: '3 (1+1+1, 1+2, 2+1)',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This is a classic DP problem that exhibits the Fibonacci sequence pattern. The number of ways to reach step `n` is the sum of ways to reach step `n-1` (and taking one step) and ways to reach step `n-2` (and taking two steps). A naive recursive solution would be very slow (O(2^n)) due to recomputing the same subproblems. DP with a bottom-up approach solves this in O(n) time and O(1) space by only keeping track of the last two results.',
          code: `def climbStairs(n):
    # We only need to store the results for the previous two steps.
    # Initialize 'one' for the step before the current one, and 'two' for two steps before.
    # For n=1, there's 1 way. For n=2, there are 2 ways. We can build from there.
    # Let's use a base case of two variables representing the last two steps.
    one, two = 1, 1

    # Iterate from 0 up to n-1.
    for i in range(n - 1):
        # The new 'one' (e.g., ways to get to step i) is the sum of the previous two.
        # Before updating 'one', we store its old value in 'temp'.
        temp = one
        one = one + two
        # The new 'two' becomes the old 'one'.
        two = temp

    # 'one' will hold the total number of ways for n steps.
    return one`
        },
        {
          title: 'Recursive Solution (Brute Force)',
          explanation: "The most intuitive solution is a direct recursion. To get to step 'n', we could have come from 'n-1' or 'n-2'. So, we just sum the results of `climbStairs(n-1)` and `climbStairs(n-2)`. While correct, this approach has an exponential time complexity of O(2^n) because it re-calculates the same values many times (e.g., `climbStairs(3)` is calculated repeatedly). This will be too slow for larger `n`.",
          code: `def climbStairs_recursive(n):
    # Base cases for the recursion
    if n == 1:
        return 1
    if n == 2:
        return 2

    # Recursive step: sum of ways to get to the previous two steps.
    # This will lead to many repeated calculations.
    return climbStairs_recursive(n-1) + climbStairs_recursive(n-2)
`
        }
      ]
    },
    {
      problem: 'Find the Kth largest element in an unsorted array. Note that it is the Kth largest element in the sorted order, not the Kth distinct element.',
      solution: 'heap',
      difficulty: 'Medium',
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      solutions: [
        {
          title: 'Optimized Solution (Min-Heap)',
          explanation: 'The keyword "Kth largest" is a strong signal for a heap. We can maintain a min-heap of size `k`. We iterate through the array: if the heap has fewer than `k` elements, we add the current element. If the heap is full and the current element is larger than the smallest element in the heap (the root), we pop the root and push the current element. After iterating, the root of the heap is the Kth largest element. This gives an O(n log k) time complexity, which is much better than sorting the whole array (O(n log n)).',
          code: `import heapq

def findKthLargest(nums, k):
    # Initialize an empty min-heap.
    # Python's heapq is a min-heap by default.
    heap = []
    
    # Iterate through each number in the array.
    for num in nums:
        # Push the current number onto the heap.
        heapq.heappush(heap, num)
        
        # If the heap size exceeds k, it means we have more than k elements.
        # The smallest one in the heap is not needed.
        if len(heap) > k:
            # Remove the smallest element (the root of the min-heap).
            heapq.heappop(heap)
            
    # After the loop, the heap contains the k largest elements,
    # with the Kth largest at the root (since it's the smallest among the top k).
    return heap[0]`
        },
        {
          title: 'Brute Force Solution (Sorting)',
          explanation: 'The simplest brute-force way to solve this is to sort the entire array and then pick the element at the correct index. This is easy to write but less efficient. The time complexity is dominated by the sort, which is O(n log n). For very large `n` and small `k`, the heap solution is significantly faster.',
          code: `def findKthLargest_bruteforce(nums, k):
    # Sort the array in ascending order. This takes O(n log n) time.
    nums.sort()
    
    # The Kth largest element will be at index len(nums) - k.
    # For example, in [1,2,3,4,5,6] and k=2, the 2nd largest is 5.
    # len=6, k=2. Index is 6-2=4. nums[4] is 5.
    return nums[len(nums) - k]`
        }
      ]
    },
    {
      problem: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0, 1]',
      solutions: [
        {
          title: 'Optimized Solution (Hash Map)',
          explanation: 'This is a slight variation. While "Two Pointers" works for a sorted array, the most common and optimal solution for an unsorted array is using a Hash Map (Dictionary in Python). We iterate through the array once. For each element, we calculate the needed `complement` (`target - current_number`). We then check if this `complement` is already in our map. If it is, we found our pair. If not, we add the current number and its index to the map. This achieves a time complexity of O(n) with O(n) space.',
          code: `def twoSum(nums, target):
    # Create a hash map to store number -> index pairs.
    prevMap = {} # val -> index

    # Iterate through the array with both index and value.
    for i, n in enumerate(nums):
        # Calculate the complement needed to reach the target.
        diff = target - n
        # Check if the complement exists in our map.
        if diff in prevMap:
            # If it exists, we've found our pair. Return the stored index and current index.
            return [prevMap[diff], i]
        # If the complement is not found, add the current number and its index to the map
        # for future checks.
        prevMap[n] = i
    # Return nothing if no solution is found (though the problem guarantees one).
    return`
        },
        {
          title: 'Brute Force Solution (Nested Loops)',
          explanation: 'The brute-force approach is to check every possible pair of numbers in the array. We can do this with two nested loops. The outer loop picks an element, and the inner loop checks all subsequent elements to see if their sum equals the target. This is simple to understand but inefficient, with a time complexity of O(n²) which will be very slow for large input arrays.',
          code: `def twoSum_bruteforce(nums):
    # Get the total number of elements.
    n = len(nums)
    # The outer loop iterates from the first element to the second-to-last.
    for i in range(n):
        # The inner loop iterates from the element after i to the last one.
        for j in range(i + 1, n):
            # Check if the pair sums up to the target.
            if nums[i] + nums[j] == target:
                # If so, return their indices.
                return [i, j]
    return [] # Should not be reached based on problem description
`
        }
      ]
    },
    {
      problem: 'Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.',
      solution: 'dfs', // Note: Stack is the data structure, often taught with DFS concepts.
      difficulty: 'Easy',
      input: 's = "()[]{}"',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Stack)',
          explanation: 'This is a classic problem for the Stack data structure. A stack follows a Last-In-First-Out (LIFO) principle, which perfectly matches how brackets should be closed. When we see an opening bracket, we push it onto the stack. When we see a closing bracket, we check if the stack is empty or if the top of the stack is the corresponding opening bracket. If it is, we pop the stack. If not, the string is invalid. A valid string will result in an empty stack at the end.',
          code: `def isValid(s):
    # A stack to keep track of opening brackets.
    stack = []
    # A hash map to easily find the matching opening bracket for a closing one.
    closeToOpen = {")": "(", "]": "[", "}": "{"}

    # Iterate through each character in the string.
    for c in s:
        # If the character is a closing bracket.
        if c in closeToOpen:
            # Check if stack is not empty AND the top element is the matching opening bracket.
            if stack and stack[-1] == closeToOpen[c]:
                # If so, we have a valid pair, pop from the stack.
                stack.pop()
            else:
                # Otherwise, the brackets are not matched correctly.
                return False
        # If the character is an opening bracket.
        else:
            # Push it onto the stack.
            stack.append(c)

    # After the loop, if the stack is empty, all brackets were matched.
    # Otherwise, there are unclosed opening brackets.
    return True if not stack else False`
        }
      ]
    },
    {
      problem: 'Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Two Pointers)',
          explanation: 'The Two Pointers technique is perfect for this. We place one pointer at the start (left) and one at the end (right) of the string. We move them towards the center, skipping any non-alphanumeric characters. At each step, we compare the characters (after converting to lowercase). If they ever don\'t match, it\'s not a palindrome. If the pointers cross, it means all characters have been successfully matched.',
          code: `def isPalindrome(s):
    # Initialize left and right pointers.
    l, r = 0, len(s) - 1

    # Loop until the pointers meet or cross.
    while l < r:
        # Move the left pointer forward if it's not an alphanumeric character.
        while l < r and not s[l].isalnum():
            l += 1
        # Move the right pointer backward if it's not an alphanumeric character.
        while r > l and not s[r].isalnum():
            r -= 1
        
        # Compare the characters (case-insensitive).
        if s[l].lower() != s[r].lower():
            # If they don't match, it's not a palindrome.
            return False
        
        # Move pointers inward for the next comparison.
        l += 1
        r += 1
        
    # If the loop completes, the string is a palindrome.
    return True`
        },
        {
          title: 'Brute Force Solution (Build and Reverse)',
          explanation: 'A simpler approach is to first build a new string containing only the alphanumeric characters from the original string, converted to lowercase. Then, you can simply compare this new string with its reverse. While easy to write, this solution requires O(n) extra space to create the new string and its reversed copy.',
          code: `def isPalindrome_bruteforce(s):
    # Create a new string with only alphanumeric chars.
    new_string = ""
    for char in s:
        if char.isalnum():
            new_string += char.lower()
    
    # Compare the new string with its reverse.
    return new_string == new_string[::-1]`
        }
      ]
    },
    {
      problem: 'You are given two binary trees, `p` and `q`. Write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
      solution: 'dfs',
      difficulty: 'Easy',
      input: 'Two identical binary trees',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Recursive DFS)',
          explanation: 'This problem is a natural fit for a recursive Depth-First Search (DFS). We define a function that compares two nodes. The base cases are key: 1) If both nodes are null, they are the same. 2) If one is null but the other isn\'t, or if their values differ, they are not the same. 3) If they pass these checks, we recursively call the function on their left children and their right children. Both recursive calls must return true for the trees to be identical.',
          code: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def isSameTree(p, q):
    # If both nodes are null, they are identical at this position.
    if not p and not q:
        return True
    # If one is null but not the other, or their values are different, they are not identical.
    if not p or not q or p.val != q.val:
        return False
        
    # Recursively check the left subtrees AND the right subtrees.
    # Both must be true for the entire tree to be the same.
    return (isSameTree(p.left, q.left) and
            isSameTree(p.right, q.right))`
        }
      ]
    },
    {
      problem: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
      solution: 'bfs',
      difficulty: 'Medium',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[9,20],[15,7]]',
      solutions: [
        {
          title: 'Optimized Solution (BFS with Queue)',
          explanation: 'The phrase "level by level" is a massive hint to use Breadth-First Search (BFS). BFS naturally explores a tree layer by layer. We use a queue to keep track of the nodes to visit. In each iteration of our main loop, we process all nodes currently in the queue (which constitutes one full level). We add their values to a temporary list for that level, and add their children to the queue for the next iteration. This continues until the queue is empty.',
          code: `from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def levelOrder(root):
    # The final list of levels.
    res = []
    # A queue to hold nodes for BFS, initialized with the root.
    q = deque([root] if root else [])

    # Loop as long as there are nodes to process.
    while q:
        # A list to store node values for the current level.
        level = []
        # Process all nodes for the current level.
        # The number of nodes is the length of the queue at the start of the loop.
        for i in range(len(q)):
            # Pop a node from the front of the queue.
            node = q.popleft()
            # Add its value to the level list.
            level.append(node.val)
            # Add its children to the queue for the next level, if they exist.
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        
        # If the level has nodes, add it to the result list.
        if level:
            res.append(level)
            
    return res`
        }
      ]
    },
    {
      problem: 'Given an array `nums` of `n` integers, find all unique triplets in the array which gives the sum of zero.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      solutions: [
        {
          title: 'Optimized Solution (Sort + Two Pointers)',
          explanation: 'To avoid the O(n³) complexity of a brute-force triple-loop, we first sort the array (O(n log n)). Then, we iterate through the array with a single loop, fixing one number `a`. For the rest of the array, we use the Two Pointers technique to find a pair `b` and `c` that sums to `-a`. The left and right pointers move towards each other to find the target sum. We must also add logic to skip duplicate numbers to ensure the triplets are unique.',
          code: `def threeSum(nums):
    res = []
    # Sorting is key to using the two-pointer approach and handling duplicates.
    nums.sort()

    # Iterate through the array, fixing the first element 'a'.
    for i, a in enumerate(nums):
        # Skip positive integers for 'a', as the sum can't be zero.
        if a > 0:
            break
        # Skip duplicate values for 'a'.
        if i > 0 and a == nums[i-1]:
            continue
            
        # Use two pointers for the rest of the array.
        l, r = i + 1, len(nums) - 1
        while l < r:
            threeSum = a + nums[l] + nums[r]
            # If the sum is too big, move the right pointer left.
            if threeSum > 0:
                r -= 1
            # If the sum is too small, move the left pointer right.
            elif threeSum < 0:
                l += 1
            # If we found a triplet.
            else:
                res.append([a, nums[l], nums[r]])
                # Move the left pointer and skip its duplicates.
                l += 1
                r -= 1
                while l < r and nums[l] == nums[l-1]:
                    l += 1
    return res`
        }
      ]
    },
    {
      problem: 'Given an array of `n` distinct numbers `nums` containing numbers in the range `[0, n]`, return the only number in the range that is missing from the array.',
      solution: 'two-pointers', // Example of using math/summation, often grouped with array tricks.
      difficulty: 'Easy',
      input: 'nums = [3,0,1]',
      output: '2',
      solutions: [
        {
          title: 'Optimized Solution (Summation Formula)',
          explanation: 'This problem can be solved efficiently using math. The sum of numbers from 0 to n can be calculated with the formula n * (n + 1) / 2. We can calculate this expected sum. Then, we calculate the actual sum of the numbers in the input array. The difference between the expected sum and the actual sum is precisely the missing number. This approach has a time complexity of O(n) to sum the array and a space complexity of O(1).',
          code: `def missingNumber(nums):
    # The length of the array is 'n' because one number is missing.
    n = len(nums)
    # Calculate the expected sum of numbers from 0 to n.
    expected_sum = n * (n + 1) // 2
    # Calculate the actual sum of the elements in the array.
    actual_sum = sum(nums)
    # The difference is the missing number.
    return expected_sum - actual_sum`
        },
        {
          title: 'Set-based Solution',
          explanation: 'Another common approach is to use a hash set. First, we create a set of all numbers from 0 to n. Then, we iterate through the input `nums` array and remove each number from our set. The single number remaining in the set at the end is the missing number. This approach is also O(n) time, but it requires O(n) space for the set, making it less space-efficient than the summation method.',
          code: `def missingNumber_set(nums):
    # Create a set of all expected numbers from 0 to n.
    num_set = set(range(len(nums) + 1))
    
    # Remove each number from the input array from the set.
    for num in nums:
        num_set.remove(num)
        
    # The only remaining number in the set is the missing one.
    return num_set.pop()`
        }
      ]
    },
    {
      problem: 'Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (0 <= i <= n), `ans[i]` is the number of `1`\'s in the binary representation of `i`.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'n = 5',
      output: '[0,1,1,2,1,2]',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This problem has a clever DP solution. Notice the pattern: the number of 1s in `i` is related to the number of 1s in a smaller number. Specifically, `count(i) = count(i / 2) + (i % 2)`. We can build our answer array iteratively. For each number `i`, `dp[i]` is the count of 1s. We can calculate this by looking at `dp[i >> 1]` (which is `i` shifted right by one, equivalent to `i // 2`) and adding 1 if `i` is odd. This builds the solution in O(n) time.',
          code: `def countBits(n):
    # Initialize a DP array (or list) of size n+1 with zeros.
    dp = [0] * (n + 1)
    # offset will track the most recent power of 2.
    offset = 1

    # Iterate from 1 to n.
    for i in range(1, n + 1):
        # If i is a new power of 2, update the offset.
        if offset * 2 == i:
            offset = i
        # The number of 1s in i is 1 + the number of 1s in (i - offset).
        # Example: count(9) = 1 + count(9-8) = 1 + count(1) = 1 + 1 = 2.
        dp[i] = 1 + dp[i - offset]
    
    return dp`
        },
        {
          title: 'Brute Force Solution',
          explanation: 'The straightforward brute-force way is to iterate from 0 to `n`. For each number `i`, we can convert it to its binary representation and manually count the number of \'1\'s. While this works, converting to binary and counting can be less efficient than the DP approach, which cleverly reuses previous results.',
          code: `def countBits_bruteforce(n):
    ans = []
    for i in range(n + 1):
        count = 0
        num_str = bin(i) # Get binary string like '0b101'
        for char in num_str:
            if char == '1':
                count += 1
        ans.append(count)
    return ans`
        }
      ]
    },
    {
      problem: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'head = [1,2,3,4,5]',
      output: '[5,4,3,2,1]',
      solutions: [
        {
          title: 'Optimized Solution (Iterative with Two Pointers)',
          explanation: 'The classic iterative solution uses two pointers: `prev` and `curr`. `prev` is initialized to null, and `curr` starts at the head. We iterate through the list, and for each node, we do three things: 1) Save the next node (`curr.next`). 2) Reverse the current node\'s pointer to point to `prev`. 3) Move `prev` and `curr` one step forward. At the end, `prev` will be the new head of the reversed list. This is done in O(n) time and O(1) space.',
          code: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def reverseList(head):
    # Initialize two pointers.
    # prev starts as None, as it will be the new tail.
    # curr starts at the head of the original list.
    prev, curr = None, head

    # Iterate while there are still nodes to process.
    while curr:
        # Store the next node in a temporary variable before we overwrite curr.next.
        nxt = curr.next
        # This is the reversal step: make the current node point backwards to prev.
        curr.next = prev
        # Move our pointers one step forward for the next iteration.
        prev = curr
        curr = nxt
    
    # When the loop ends, curr is None and prev is the new head.
    return prev`
        }
      ]
    },
    {
      problem: 'Design a class to find the `k`th largest element in a stream of numbers. Note that it is the `k`th largest element in the sorted order, not the `k`th distinct element.',
      solution: 'heap',
      difficulty: 'Easy',
      input: 'KthLargest(3, [4, 5, 8, 2]); add(3); add(5); add(10);',
      output: '4, 5, 5, 8',
      solutions: [
        {
          title: 'Optimized Solution (Min-Heap)',
          explanation: 'This problem is designed for a Min-Heap. The core idea is to always maintain a min-heap of size `k`. When we initialize the class, we build this heap. When a new element is added, we push it to the heap. If the heap size then exceeds `k`, we pop the smallest element. This ensures the heap always contains the `k` largest elements from the stream. The `k`th largest is therefore always at the root of the min-heap, which we can access in O(1) time. Adding an element is O(log k).',
          code: `import heapq

class KthLargest:
    def __init__(self, k, nums):
        # Store k and the min-heap.
        self.k = k
        self.minHeap = nums
        # Convert the initial list into a heap in-place.
        heapq.heapify(self.minHeap)
        # Keep popping from the heap until it is of size k.
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    def add(self, val):
        # Add the new value to the heap.
        heapq.heappush(self.minHeap, val)
        # If the heap is now larger than k, remove the smallest element.
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        # The root of the min-heap is the kth largest element.
        return self.minHeap[0]`
        }
      ]
    },
    {
      problem: 'Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.',
      solution: 'two-pointers', // A classic hash map problem, often categorized with array/string manipulation.
      difficulty: 'Medium',
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      solutions: [
        {
          title: 'Optimized Solution (Hash Map with Sorted Key)',
          explanation: 'The key insight is that all anagrams become the same word when their letters are sorted. We can use this sorted version as a key in a hash map. We iterate through the input array. For each string, we create its sorted version and use it as a key. We then append the original string to the list of values for that key. After iterating through all strings, the values of the hash map will be the grouped anagrams. The time complexity is O(m * n log n) where m is the number of strings and n is the length of the longest string.',
          code: `from collections import defaultdict

def groupAnagrams(strs):
    # A defaultdict allows us to append to a list for a new key without checking if it exists.
    ans = defaultdict(list)

    # Iterate through each string in the input list.
    for s in strs:
        # Sort the characters of the string and join them to create a key.
        # e.g., "eat" -> ('a', 'e', 't')
        sorted_s = tuple(sorted(s))
        # Append the original string to the list associated with this sorted key.
        ans[sorted_s].append(s)
    
    # The values of the dictionary are the grouped anagrams.
    return list(ans.values())`
        }
      ]
    },
    {
      problem: 'Given an `m x n` binary matrix filled with 0\'s and 1\'s, find the largest square containing only 1\'s and return its area.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'matrix = [["1","0","1","0"],["1","1","1","1"],["1","1","1","1"],["1","0","0","1"]]',
      output: '4',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This problem can be solved efficiently with DP. We create a DP table (or reuse the input matrix) of the same size. `dp[i][j]` will store the side length of the largest square of 1s whose bottom-right corner is at `matrix[i][j]`. The recurrence relation is: if `matrix[i][j]` is \'1\', then `dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])`. This means a square of side `s` can only be formed if the cells to its left, top, and top-left also support a square of side `s-1`. We keep track of the maximum side length found and return its area.',
          code: `def maximalSquare(matrix):
    # Get dimensions.
    ROWS, COLS = len(matrix), len(matrix[0])
    # Create a DP table with a padding of zeros for easier calculations.
    dp = [[0] * (COLS + 1) for _ in range(ROWS + 1)]
    max_side = 0

    # Iterate through the matrix.
    for r in range(ROWS):
        for c in range(COLS):
            # We only care if the original cell is a '1'.
            if matrix[r][c] == "1":
                # The value in the DP table is 1 + the minimum of its top, left, and top-left neighbors.
                dp[r + 1][c + 1] = 1 + min(dp[r][c + 1],      # Top
                                           dp[r + 1][c],      # Left
                                           dp[r][c])          # Top-left
                # Keep track of the maximum side length found so far.
                max_side = max(max_side, dp[r + 1][c + 1])
    
    # The result is the area of the largest square.
    return max_side * max_side`
        }
      ]
    },
    {
      problem: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
      solution: 'two-pointers',
      difficulty: 'Hard',
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      solutions: [
        {
          title: 'Optimized Solution (Two Pointers)',
          explanation: 'This is a classic hard problem that has an elegant O(n) time, O(1) space solution using Two Pointers. We use a left and a right pointer, starting at the ends of the array, and `left_max` and `right_max` variables to track the max height seen from each side. The amount of water trapped at any position is determined by the shorter of the two max walls (`min(left_max, right_max)`). We move the pointer corresponding to the shorter wall inward. If `height[l] < height[r]`, we know `left_max` is the limiting factor. We can calculate trapped water at `l` as `left_max - height[l]` and move `l` right. We do the opposite if `right_max` is the limiter.',
          code: `def trap(height):
    # Not enough bars to trap water.
    if not height: return 0

    # Initialize pointers at both ends.
    l, r = 0, len(height) - 1
    # Track max height seen from left and right.
    leftMax, rightMax = height[l], height[r]
    # Total trapped water.
    res = 0

    # Loop until pointers meet.
    while l < r:
        # Move the pointer of the shorter wall.
        if leftMax < rightMax:
            # Move left pointer.
            l += 1
            # Update left max height.
            leftMax = max(leftMax, height[l])
            # The water trapped at this position is the difference
            # between the shorter wall (leftMax) and the current bar height.
            res += leftMax - height[l]
        else:
            # Move right pointer.
            r -= 1
            # Update right max height.
            rightMax = max(rightMax, height[r])
            # Water trapped is difference between shorter wall (rightMax) and current bar.
            res += rightMax - height[r]
    return res`
        }
      ]
    },
    {
      problem: 'Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      solutions: [
        {
          title: 'Optimized Solution (Iterative with Dummy Node)',
          explanation: 'This is a classic list manipulation problem. We can solve it iteratively using a dummy node, which simplifies the code by providing a fixed starting point for our new list. We use a `tail` pointer to build the new list. We compare the nodes from `list1` and `list2`. Whichever is smaller gets appended to `tail`, and we advance that list\'s pointer. We continue until one list is exhausted, then simply append the remainder of the other list. The final result is `dummy.next`.',
          code: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeTwoLists(list1, list2):
    # A dummy node to act as a placeholder head for the new list.
    dummy = ListNode()
    # 'tail' will be our pointer to build the new list.
    tail = dummy

    # Loop as long as both lists have nodes.
    while list1 and list2:
        # Compare the values of the nodes.
        if list1.val < list2.val:
            # If list1's node is smaller, append it to the tail.
            tail.next = list1
            # Move list1's pointer forward.
            list1 = list1.next
        else:
            # Otherwise, append list2's node.
            tail.next = list2
            # Move list2's pointer forward.
            list2 = list2.next
        # Always move the tail pointer to the newly added node.
        tail = tail.next

    # After the loop, one of the lists might still have nodes.
    # Append the remaining part of whichever list is not empty.
    if list1:
        tail.next = list1
    elif list2:
        tail.next = list2
    
    # The merged list starts at the node after our dummy head.
    return dummy.next
`
        }
      ]
    },
    {
      problem: 'Given an array of integers `nums`, move all `0`\'s to the end of it while maintaining the relative order of the non-zero elements.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [0,1,0,3,12]',
      output: '[1,3,12,0,0]',
      solutions: [
        {
          title: 'Optimized Solution (Two Pointers)',
          explanation: 'This problem can be solved in-place with O(n) time and O(1) space using a Two Pointers approach. We use one pointer (`lastNonZeroFoundAt`) to keep track of the position where the next non-zero element should be placed. We iterate through the array with another pointer (`i`). When we find a non-zero element, we swap it with the element at the `lastNonZeroFoundAt` index and then increment `lastNonZeroFoundAt`. This efficiently segregates the non-zero elements to the front while maintaining their order.',
          code: `def moveZeroes(nums):
    # This pointer will mark the position for the next non-zero element.
    lastNonZeroFoundAt = 0
    
    # Iterate through the array with a 'curr' pointer.
    for curr in range(len(nums)):
        # If the current element is not zero...
        if nums[curr] != 0:
            # ...swap it with the element at the 'lastNonZeroFoundAt' position.
            nums[lastNonZeroFoundAt], nums[curr] = nums[curr], nums[lastNonZeroFoundAt]
            # Increment the position for the next non-zero element.
            lastNonZeroFoundAt += 1
`
        }
      ]
    },
    {
      problem: 'You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times. Return the length of the longest substring containing the same letter you can get after performing the above operations.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 's = "ABAB", k = 2',
      output: '4',
      solutions: [
        {
          title: 'Optimized Solution (Sliding Window)',
          explanation: 'This is a challenging but classic Sliding Window problem. We use a window defined by `left` and `right` pointers and a frequency map to count characters within that window. The key condition is `(window_length - most_frequent_char_count) <= k`. This checks if the number of characters we need to replace to make the whole window uniform is within our budget `k`. If the condition is violated, we shrink the window from the left. Otherwise, we expand it and update our max length.',
          code: `def characterReplacement(s, k):
    # A dictionary to store the frequency of characters in the current window.
    count = {}
    # Variable to store the max length found.
    res = 0
    # Left pointer of the window.
    l = 0
    # Track the frequency of the most common character in the window.
    maxf = 0

    # Iterate through the string with the right pointer.
    for r in range(len(s)):
        # Increment the count for the character at the right pointer.
        count[s[r]] = 1 + count.get(s[r], 0)
        # Update the max frequency seen so far in the window.
        maxf = max(maxf, count[s[r]])

        # The core condition: check if the window is invalid.
        # The number of replacements needed is window length - max frequency.
        if (r - l + 1) - maxf > k:
            # If invalid, shrink the window from the left.
            # Decrement the count of the character at the left pointer.
            count[s[l]] -= 1
            # Slide the left pointer to the right.
            l += 1
        
        # Update the result with the max length of a valid window.
        res = max(res, r - l + 1)
    return res`
        }
      ]
    },
    {
      problem: 'Given an array of integers `nums`, find the subarray with the largest sum, and return its sum.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6 (from subarray [4,-1,2,1])',
      solutions: [
        {
          title: 'Optimized Solution (Kadane\'s Algorithm)',
          explanation: 'This is a classic problem solved by Kadane\'s Algorithm, which is a form of dynamic programming. We iterate through the array, keeping track of the `current_sum` of the subarray ending at the current position. For each element, we have two choices: either extend the previous subarray by adding the current element, or start a new subarray with just the current element. We choose whichever is larger. We also keep a `global_max` to store the maximum sum found at any point.',
          code: `def maxSubArray(nums):
    # Initialize the global maximum sum with the first element.
    maxSum = nums[0]
    # Initialize the current sum.
    curSum = 0

    # Iterate through each number in the array.
    for n in nums:
        # If the current sum becomes negative, it's better to start a new subarray.
        # A negative prefix will never help maximize the sum.
        if curSum < 0:
            curSum = 0
        # Add the current number to the current sum.
        curSum += n
        # Update the global maximum sum if the current sum is greater.
        maxSum = max(maxSum, curSum)
    return maxSum`
        }
      ]
    },
    {
      problem: 'Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'board = [["A","B","C"],["S","F","E"],["A","D","E"]], word = "SEE"',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Backtracking/DFS)',
          explanation: 'This is a perfect problem for Backtracking. We can think of it as a DFS on the grid. We iterate through every cell to find a potential starting point. Once we find a match for the first letter of the word, we start a recursive DFS function. This function checks the four adjacent cells for the next letter. To avoid reusing cells, we mark the current cell as visited (e.g., by changing its value temporarily) before the recursive calls and then "un-mark" it after (this is the "backtracking" step).',
          code: `def exist(board, word):
    # Get grid dimensions.
    ROWS, COLS = len(board), len(board[0])
    # A set to keep track of visited cells in the current path.
    path = set()

    # The recursive backtracking function.
    def dfs(r, c, i):
        # Base case: If we have found all characters in the word.
        if i == len(word):
            return True
        # Base case: If we are out of bounds, or the cell doesn't match the
        # character we're looking for, or we've already visited this cell.
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or
            word[i] != board[r][c] or (r, c) in path):
            return False

        # Mark the cell as visited for the current path.
        path.add((r, c))

        # Explore neighbors recursively.
        res = (dfs(r + 1, c, i + 1) or
               dfs(r - 1, c, i + 1) or
               dfs(r, c + 1, i + 1) or
               dfs(r, c - 1, i + 1))
        
        # Backtrack: Un-mark the cell so it can be used in other paths.
        path.remove((r, c))
        return res

    # Iterate through every cell to find a potential starting point.
    for r in range(ROWS):
        for c in range(COLS):
            if dfs(r, c, 0):
                return True
    return False`
        }
      ]
    },
    {
      problem: 'Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      solutions: [
        {
          title: 'Optimized Solution (Sort + Merge)',
          explanation: 'The key to this problem is to sort the intervals based on their start times. This takes O(n log n) time. Once sorted, we can iterate through the intervals and merge them in a single pass (O(n)). We initialize our result with the first interval. Then, for each subsequent interval, we compare its start time with the end time of the last interval in our result. If they overlap, we merge them by updating the end time of the last interval. If they don\'t overlap, we simply add the new interval to our result.',
          code: `def merge(intervals):
    # Sort the intervals based on their starting point.
    intervals.sort(key=lambda i: i[0])
    
    # Initialize the output list with the first interval.
    output = [intervals[0]]

    # Iterate through the rest of the intervals.
    for start, end in intervals[1:]:
        # Get the end point of the last interval in the output.
        lastEnd = output[-1][1]

        # If the current interval overlaps with the last one in the output...
        if start <= lastEnd:
            # ...merge them by updating the end point of the last interval
            # to be the maximum of the two end points.
            output[-1][1] = max(lastEnd, end)
        else:
            # If there is no overlap, just add the new interval to the output.
            output.append([start, end])
    return output`
        }
      ]
    },
    {
      problem: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.',
      solution: 'heap',
      difficulty: 'Medium',
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      solutions: [
        {
          title: 'Optimized Solution (Bucket Sort)',
          explanation: 'While a Heap (Priority Queue) provides a good O(n log k) solution, this problem has an even more efficient linear time solution using Bucket Sort. First, we count the frequency of each number in O(n) time. Then, we create "buckets" (an array of lists) where the index represents a frequency. We place each number into the bucket corresponding to its frequency. Finally, we iterate through the buckets from highest frequency to lowest and collect the first `k` elements.',
          code: `def topKFrequent(nums, k):
    # 1. Count the frequency of each number.
    count = {}
    for n in nums:
        count[n] = 1 + count.get(n, 0)
    
    # 2. Create frequency buckets. The index is the count.
    # The size is len(nums) + 1 because a number can appear at most n times.
    freq = [[] for i in range(len(nums) + 1)]
    
    # 3. Populate the buckets.
    for n, c in count.items():
        freq[c].append(n)
        
    # 4. Collect the result from the buckets, starting from the end (highest frequency).
    res = []
    for i in range(len(freq) - 1, 0, -1):
        for n in freq[i]:
            res.append(n)
            if len(res) == k:
                return res`
        },
        {
          title: 'Heap-based Solution',
          explanation: 'A more common and very effective solution uses a Min-Heap. First, count the frequency of all numbers using a hash map (O(n)). Then, iterate through the hash map and push `(frequency, number)` pairs into a min-heap. If the heap size exceeds `k`, pop the element with the smallest frequency. At the end, the heap will contain the `k` most frequent elements. The time complexity is O(n log k), which is very good, but not quite as optimal as the O(n) bucket sort.',
          code: `import heapq

def topKFrequent_heap(nums, k):
    # 1. Count frequencies.
    count = {}
    for n in nums:
        count[n] = 1 + count.get(n, 0)

    # 2. Use a min-heap to find the top k elements.
    # We push tuples of (frequency, number).
    min_heap = []
    for num, freq in count.items():
        heapq.heappush(min_heap, (freq, num))
        # If heap size is over k, pop the one with the smallest frequency.
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    
    # 3. Extract the numbers from the heap.
    res = [num for freq, num in min_heap]
    return res`
        }
      ]
    },
    {
      problem: 'Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 's = "aab"',
      output: '[["a","a","b"],["aa","b"]]',
      solutions: [
        {
          title: 'Optimized Solution (Backtracking)',
          explanation: 'This problem asks for "all possible" partitions, which is a strong signal for backtracking. We write a recursive DFS function that takes the starting index. From that index, we iterate forward, checking if the substring `s[start:i+1]` is a palindrome. If it is, we add it to our current path and recursively call the DFS on the rest of the string (`i+1`). After the recursive call returns, we "backtrack" by removing the substring from our path to explore other possibilities (e.g., longer palindromic substrings).',
          code: `def partition(s):
    res = []
    part = []

    # The recursive backtracking function.
    def dfs(i):
        # Base case: If we've reached the end of the string, we have a valid partition.
        if i >= len(s):
            res.append(part.copy())
            return
        
        # Explore all possible substrings starting from index i.
        for j in range(i, len(s)):
            # Check if the substring s[i:j+1] is a palindrome.
            if isPali(s, i, j):
                # If it is, add it to our current partition.
                part.append(s[i:j+1])
                # Recursively call dfs on the rest of the string.
                dfs(j + 1)
                # Backtrack: remove the substring to explore other partitions.
                part.pop()
    
    # Start the process from the beginning of the string.
    dfs(0)
    return res

# Helper function to check for palindromes.
def isPali(s, l, r):
    while l < r:
        if s[l] != s[r]:
            return False
        l, r = l + 1, r - 1
    return True
`
        }
      ]
    },
    {
      problem: 'Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'numbers = [2,7,11,15], target = 9',
      output: '[1,2]',
      solutions: [
        {
          title: 'Optimized Solution (Two Pointers)',
          explanation: 'The input array is sorted, which is a huge hint to use the Two Pointers technique. We initialize a left pointer at the start and a right pointer at the end of the array. We then sum the values at these pointers. If the sum is less than the target, we need a larger sum, so we move the left pointer right. If the sum is greater than the target, we need a smaller sum, so we move the right pointer left. We continue until we find the target. This guarantees a solution in O(n) time and O(1) space.',
          code: `def twoSumII(numbers, target):
    # Initialize pointers at the beginning and end of the array.
    l, r = 0, len(numbers) - 1

    # Loop until the pointers cross.
    while l < r:
        # Calculate the sum of the values at the two pointers.
        curSum = numbers[l] + numbers[r]

        # If the sum is greater than the target, we need to decrease it.
        # Move the right pointer to a smaller value.
        if curSum > target:
            r -= 1
        # If the sum is less than the target, we need to increase it.
        # Move the left pointer to a larger value.
        elif curSum < target:
            l += 1
        # If the sum is equal to the target, we've found our solution.
        else:
            # Return the 1-indexed positions.
            return [l + 1, r + 1]
`
        }
      ]
    },
    {
      problem: 'Given an integer array `nums` of unique elements, return all the possible subsets (the power set).',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
      solutions: [
        {
          title: 'Optimized Solution (Backtracking/DFS)',
          explanation: 'Finding "all possible subsets" is a quintessential backtracking problem. We can think of it as making a decision for each number: either include it in the current subset or do not. A DFS-based approach models this perfectly. We have a recursive function `dfs(i)` which generates subsets from `nums[i:]`. For each element `nums[i]`, we first add it to our current subset and recurse (`dfs(i+1)`), then we backtrack by removing it and recurse again (`dfs(i+1)`) to generate subsets without `nums[i]`.',
          code: `def subsets(nums):
    res = []
    subset = []

    # The recursive DFS function takes the index of the element to consider.
    def dfs(i):
        # Base case: If we have considered all elements, we have a valid subset.
        if i >= len(nums):
            res.append(subset.copy())
            return

        # Decision to include nums[i]
        subset.append(nums[i])
        # Explore further with this decision.
        dfs(i + 1)
        # Backtrack: remove the element to explore the other path.
        subset.pop()

        # Decision NOT to include nums[i]
        # Explore further with this decision.
        dfs(i + 1)
    
    # Start the process from the first element (index 0).
    dfs(0)
    return res`
        }
      ]
    },
    {
      problem: 'Given an array of `intervals` where `intervals[i] = [start, end]`, and a `newInterval` = `[newStart, newEnd]`, insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start` and `intervals` still does not have any overlapping intervals.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
      output: '[[1,5],[6,9]]',
      solutions: [
        {
          title: 'Optimized Solution (Linear Scan)',
          explanation: 'This can be solved efficiently in a single O(n) pass without a full sort. We iterate through the existing intervals and build a new result list. We add all intervals that end before the `newInterval` starts. Then, we merge the `newInterval` with all subsequent overlapping intervals. Finally, we add the remaining intervals that start after the merged interval ends. This avoids a full sort if the initial list is already sorted, which it is in this problem.',
          code: `def insert(intervals, newInterval):
    res = []

    # Iterate through each interval in the list.
    for i in range(len(intervals)):
        # If the new interval should be inserted before the current one without overlap.
        if newInterval[1] < intervals[i][0]:
            res.append(newInterval)
            # Append the rest of the intervals and return.
            return res + intervals[i:]
        # If the current interval comes before the new one without overlap.
        elif newInterval[0] > intervals[i][1]:
            res.append(intervals[i])
        # If there is an overlap.
        else:
            # Merge the current interval with the new interval.
            newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]
    
    # Append the (possibly merged) new interval at the end.
    res.append(newInterval)
    
    return res
`
        }
      ]
    },
    {
      problem: 'You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`-th line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'height = [1,8,6,2,5,4,8,3,7]',
      output: '49',
      solutions: [
        {
          title: 'Optimized Solution (Two Pointers)',
          explanation: 'A brute-force O(n²) solution checking all pairs is too slow. The optimal O(n) solution uses the Two Pointers technique. We start with a pointer at each end (`left`, `right`). The area is limited by the shorter of the two lines (`min(height[l], height[r])`). To potentially find a larger area, we must move the pointer of the shorter line inward. Moving the taller line\'s pointer inward can never increase the area, as the width decreases and the height is still limited by the shorter line.',
          code: `def maxArea(height):
    # Initialize result and pointers.
    res = 0
    l, r = 0, len(height) - 1

    # Loop until pointers meet.
    while l < r:
        # Calculate area: width * min_height.
        area = (r - l) * min(height[l], height[r])
        # Update result with the max area found.
        res = max(res, area)

        # Move the pointer of the shorter line inward.
        # This is because moving the taller line's pointer can't increase the area.
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    
    return res`
        },
        {
          title: 'Brute Force Solution (Nested Loops)',
          explanation: 'The straightforward approach is to check every possible pair of vertical lines and calculate the area for each pair, keeping track of the maximum area found. This requires two nested loops, leading to an O(n²) time complexity, which will be too slow for large input arrays.',
          code: `def maxArea_bruteforce(height):
    max_area = 0
    n = len(height)
    # Outer loop for the first line.
    for i in range(n):
        # Inner loop for the second line.
        for j in range(i + 1, n):
            # Calculate the height of the container (limited by the shorter line).
            h = min(height[i], height[j])
            # Calculate the width.
            w = j - i
            # Update the maximum area.
            max_area = max(max_area, h * w)
    return max_area`
        }
      ]
    },
    {
      problem: 'Given a string `s`, return the longest palindromic substring in `s`.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 's = "babad"',
      output: '"bab" ("aba" is also a valid answer)',
      solutions: [
        {
          title: 'Optimized Solution (Expand From Center)',
          explanation: 'While DP is a valid approach, a more intuitive and equally performant O(n²) solution is "Expand From Center". We iterate through each character of the string and treat it as a potential center of a palindrome. We need to handle two cases for the center: a single character (for odd-length palindromes like "racecar") and a pair of characters (for even-length palindromes like "aabbaa"). For each center, we expand outwards with two pointers as long as the characters match, keeping track of the longest palindrome found.',
          code: `def longestPalindrome(s):
    res = ""
    resLen = 0

    # Iterate through every character as a potential center.
    for i in range(len(s)):
        # Odd length palindromes (center is one character).
        l, r = i, i
        while l >= 0 and r < len(s) and s[l] == s[r]:
            # If we've found a new longest palindrome, update result.
            if (r - l + 1) > resLen:
                res = s[l:r+1]
                resLen = r - l + 1
            # Expand from the center.
            l -= 1
            r += 1

        # Even length palindromes (center is between two characters).
        l, r = i, i + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            # If we've found a new longest palindrome, update result.
            if (r - l + 1) > resLen:
                res = s[l:r+1]
                resLen = r - l + 1
            # Expand from the center.
            l -= 1
            r += 1
    return res`
        }
      ]
    },
    {
      problem: 'Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. A mapping of digits to letters (just like on the telephone buttons) is given.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      solutions: [
        {
          title: 'Optimized Solution (Backtracking)',
          explanation: 'This problem requires generating "all possible" combinations, making it a classic fit for backtracking. We create a recursive function that builds the combination string step-by-step. The function takes an index representing the current digit we are processing. We loop through all possible letters for that digit. For each letter, we add it to our current path and recursively call the function for the next digit. After the call returns, we backtrack by removing the letter, allowing us to explore other combinations.',
          code: `def letterCombinations(digits):
    res = []
    # Mapping of digits to letters.
    digitToChar = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", 
                   "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}

    def backtrack(i, curStr):
        # Base case: if our current string's length matches the digits' length,
        # we have a full combination.
        if len(curStr) == len(digits):
            res.append(curStr)
            return
        
        # For the current digit (digits[i]), iterate through its possible letters.
        for c in digitToChar[digits[i]]:
            # Recurse, adding the new character and advancing the index.
            backtrack(i + 1, curStr + c)

    # Start the backtracking process if there are digits to process.
    if digits:
        backtrack(0, "")

    return res`
        }
      ]
    },
    {
      problem: 'Given a `m x n` `board` containing \'X\' and \'O\', capture all regions that are 4-directionally surrounded by \'X\'. A region is captured by flipping all \'O\'s into \'X\'s in that surrounded region.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'board = [["X","X","X"],["X","O","X"],["X","X","X"]]',
      output: '[["X","X","X"],["X","X","X"],["X","X","X"]]',
      solutions: [
        {
          title: 'Optimized Solution (Border DFS)',
          explanation: 'Instead of finding surrounded regions, it\'s much easier to find the un-surrounded regions and protect them. An \'O\' region is un-surrounded if it touches any of the four borders of the grid. We can run a DFS or BFS starting from every \'O\' on the border. During the traversal, we mark these border-connected \'O\'s (and any \'O\'s connected to them) with a temporary marker (e.g., \'T\'). After this first pass, we iterate through the entire grid again. Any cell that is still an \'O\' must be surrounded, so we flip it to \'X\'. Any cell marked \'T\' is an un-surrounded region, so we flip it back to \'O\'.',
          code: `def solve(board):
    # Get grid dimensions.
    ROWS, COLS = len(board), len(board[0])

    # The recursive DFS function to capture un-surrounded regions.
    def capture(r, c):
        # Base case: check for out of bounds or if it's not an 'O'.
        if (r < 0 or c < 0 or r == ROWS or c == COLS or
            board[r][c] != "O"):
            return
        
        # Mark the cell as temporary to protect it.
        board[r][c] = "T"
        # Recursively call on neighbors.
        capture(r + 1, c)
        capture(r - 1, c)
        capture(r, c + 1)
        capture(r, c - 1)

    # 1. (DFS) Capture un-surrounded regions starting from the border 'O's.
    for r in range(ROWS):
        for c in range(COLS):
            # Check if the cell is on a border and is an 'O'.
            if (board[r][c] == "O" and
                (r in [0, ROWS - 1] or c in [0, COLS - 1])):
                capture(r, c)
    
    # 2. Flip remaining 'O's to 'X's and 'T's back to 'O's.
    for r in range(ROWS):
        for c in range(COLS):
            if board[r][c] == "O":
                board[r][c] = "X" # Capture surrounded regions.
            elif board[r][c] == "T":
                board[r][c] = "O" # Un-capture the un-surrounded regions.
`
        }
      ]
    },
    {
      problem: 'Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 's = "leetcode", wordDict = ["leet","code"]',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This problem is a perfect fit for 1D Dynamic Programming. We create a DP array, `dp`, of size `len(s) + 1`. `dp[i]` will be `true` if the substring `s[:i]` can be segmented. The base case is `dp[0] = true` (an empty string can be segmented). We then iterate through the string from `i = 1 to len(s)`. For each `i`, we check all possible split points `j` before it. If `dp[j]` is `true` AND the substring `s[j:i]` is in our word dictionary, then we know `s[:i]` can be segmented, so we set `dp[i] = true` and break to the next `i`. The final answer is `dp[len(s)]`.',
          code: `def wordBreak(s, wordDict):
    # DP array where dp[i] is true if s[:i] can be segmented.
    dp = [False] * (len(s) + 1)
    # Base case: an empty string can be segmented.
    dp[0] = True
    
    # Convert wordDict to a set for O(1) lookups.
    word_set = set(wordDict)

    # Iterate through the string to fill the DP table.
    for i in range(1, len(s) + 1):
        # Check all possible previous split points.
        for j in range(i):
            # If the prefix s[:j] is valid AND the suffix s[j:i] is in the dictionary...
            if dp[j] and s[j:i] in word_set:
                # ...then the prefix s[:i] is also valid.
                dp[i] = True
                # No need to check other split points for this i.
                break
    
    # The final element of the DP table tells us if the whole string is valid.
    return dp[len(s)]`
        }
      ]
    },
    {
      problem: 'Given an integer `n`, return the number of structurally unique binary search trees (BSTs) which has exactly `n` nodes of unique values from 1 to `n`.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'n = 3',
      output: '5',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This is a mathematical DP problem. The number of unique BSTs for `n` nodes is the `n`-th Catalan number. Let `numTrees[i]` be the number of unique BSTs with `i` nodes. If we pick `j` as the root, then there are `j-1` nodes in the left subtree and `i-j` nodes in the right subtree. The total number of trees with `j` as the root is `numTrees[j-1] * numTrees[i-j]`. We sum this up for all possible roots `j` from 1 to `i`. This gives us `numTrees[i]`. We can build this DP table from `0` to `n`.',
          code: `def numTrees(n):
    # numTrees[i] will store the number of unique BSTs for i nodes.
    # We initialize with base cases.
    # numTrees[0] = 1 (one empty tree)
    # numTrees[1] = 1 (one tree with a single node)
    numTrees = [1] * (n + 1)

    # Fill the DP table from 2 to n.
    for nodes in range(2, n + 1):
        total = 0
        # Iterate through all possible root nodes (1 to nodes).
        for root in range(1, nodes + 1):
            # Number of nodes in the left and right subtrees.
            left = root - 1
            right = nodes - root
            # The number of unique trees is the product of the possibilities on each side.
            total += numTrees[left] * numTrees[right]
        # Store the result for the current number of nodes.
        numTrees[nodes] = total
    
    return numTrees[n]
`
        }
      ]
    },
    {
      problem: 'Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`. In other words, return `true` if one of `s1`\'s permutations is a substring of `s2`.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 's1 = "ab", s2 = "eidbaooo"',
      output: 'true (s2 contains "ba")',
      solutions: [
        {
          title: 'Optimized Solution (Sliding Window with Frequency Map)',
          explanation: 'This is a perfect use case for the Sliding Window pattern. We need to find if any substring in `s2` of length `len(s1)` is a permutation of `s1`. A permutation has the exact same character counts. So, we first create a frequency map (an array of 26 integers) for `s1`. Then we create a window of the same size in `s2` and its frequency map. We slide this window one character at a time across `s2`, updating the window\'s frequency map in O(1) time (by adding the new character and removing the old one). In each step, we compare the window\'s frequency map with `s1`\'s map. If they match, we found a permutation.',
          code: `def checkInclusion(s1, s2):
    # If s1 is longer than s2, a permutation is impossible.
    if len(s1) > len(s2): return False

    # Create frequency maps for s1 and the initial window in s2.
    s1Count, s2Count = [0] * 26, [0] * 26
    for i in range(len(s1)):
        s1Count[ord(s1[i]) - ord('a')] += 1
        s2Count[ord(s2[i]) - ord('a')] += 1

    # Check the initial window.
    matches = 0
    for i in range(26):
        matches += (1 if s1Count[i] == s2Count[i] else 0)
    
    # Slide the window across s2.
    l = 0
    for r in range(len(s1), len(s2)):
        if matches == 26: return True
        
        # Add the new character (r) to the window.
        index = ord(s2[r]) - ord('a')
        s2Count[index] += 1
        if s1Count[index] == s2Count[index]:
            matches += 1
        elif s1Count[index] + 1 == s2Count[index]:
            matches -= 1
        
        # Remove the old character (l) from the window.
        index = ord(s2[l]) - ord('a')
        s2Count[index] -= 1
        if s1Count[index] == s2Count[index]:
            matches += 1
        elif s1Count[index] - 1 == s2Count[index]:
            matches -= 1
        # Move the left pointer.
        l += 1
        
    return matches == 26
`
        }
      ]
    },
    {
      problem: 'Given an array of `n` integers `nums`, where `n > 1`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`. Solve it without division and in O(n) time.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      solutions: [
        {
          title: 'Optimized Solution (Prefix & Postfix Products)',
          explanation: 'This problem has a clever O(n) time and O(1) space (excluding the result array) solution. The product of all elements except `nums[i]` is equivalent to `(product of all elements to the left of i) * (product of all elements to the right of i)`. We can calculate this in two passes. In the first pass, we iterate from left to right, and for each position `i`, `result[i]` will store the product of all elements to its left. In the second pass, we iterate from right to left, multiplying `result[i]` by the running product of elements to its right.',
          code: `def productExceptSelf(nums):
    # Initialize the result array with 1s.
    res = [1] * (len(nums))

    # First pass: Calculate prefix products.
    # At the end of this loop, res[i] will contain the product of all numbers to the left of i.
    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
        
    # Second pass: Calculate postfix products and multiply with prefixes.
    # At the end, we will have multiplied the prefix product by the postfix product.
    postfix = 1
    for i in range(len(nums) -1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
        
    return res`
        }
      ]
    },
    {
      problem: 'Given a `m x n` integer matrix, if an element is 0, set its entire row and column to 0\'s. Do this in-place.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
      solutions: [
        {
          title: 'Optimized Solution (O(1) Space)',
          explanation: 'A naive solution using extra O(m+n) space would be to have two sets to store the rows and columns to be zeroed. The optimal O(1) space solution cleverly uses the first row and first column of the matrix itself as storage. We first check if the original first row/column needs to be zeroed. Then, we iterate through the rest of the matrix (`[1:, 1:]`). If `matrix[r][c]` is 0, we set `matrix[0][c] = 0` and `matrix[r][0] = 0`. After this, we iterate through the matrix again, zeroing out row `r` if `matrix[r][0] == 0` and column `c` if `matrix[0][c] == 0`. Finally, we use our initial flags to zero out the first row/column if needed.',
          code: `def setZeroes(matrix):
    # Get dimensions
    ROWS, COLS = len(matrix), len(matrix[0])
    # Flag to check if the first row needs to be zeroed.
    rowZero = False

    # 1. Determine which rows and columns need to be zeroed.
    # We use the first row and column as markers.
    for r in range(ROWS):
        for c in range(COLS):
            if matrix[r][c] == 0:
                # Mark the corresponding first column cell.
                matrix[0][c] = 0
                # Mark the corresponding first row cell, unless it's the very first cell.
                if r > 0:
                    matrix[r][0] = 0
                else:
                    # If it's the first row, set the flag.
                    rowZero = True
    
    # 2. Zero out the marked rows and columns (excluding the first row/col).
    for r in range(1, ROWS):
        for c in range(1, COLS):
            if matrix[0][c] == 0 or matrix[r][0] == 0:
                matrix[r][c] = 0

    # 3. Zero out the first column if needed.
    if matrix[0][0] == 0:
        for r in range(ROWS):
            matrix[r][0] = 0
    
    # 4. Zero out the first row if needed (using the flag).
    if rowZero:
        for c in range(COLS):
            matrix[0][c] = 0
`
        }
      ]
    },
    {
      problem: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in the tree that has both `p` and `q` as descendants.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'A binary tree, and two nodes p and q',
      output: 'The LCA node',
      solutions: [
        {
          title: 'Optimized Solution (Recursive DFS)',
          explanation: 'This problem has a very elegant recursive DFS solution. We define a function that searches for `p` or `q` starting from a given `root`. The base cases are: if the root is null or if the root itself is `p` or `q`, we return the root. Otherwise, we recursively search in the left and right subtrees. If the recursive calls on both the left and right children return non-null values, it means `p` and `q` were found in different subtrees, so the current `root` is the LCA. If only one of them returns a non-null value, we propagate that value up the call stack.',
          code: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def lowestCommonAncestor(root, p, q):
    # Base case for the recursion.
    # If we reach a null node, or find p or q, we return the current node.
    if not root or root == p or root == q:
        return root
    
    # Recursively search in the left and right subtrees.
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # If both left and right are non-null, it means p and q were found
    # in different subtrees of the current 'root'. So, this 'root' is the LCA.
    if left and right:
        return root
    
    # If only one of them is non-null, it means both p and q are in that
    # subtree. So, we return that non-null value, which is either the
    # actual LCA from a lower level, or one of p/q itself.
    return left or right`
        }
      ]
    },
    {
      problem: 'Given a `m x n` 2D binary grid `grid` which represents a map of `1`s (land) and `0`s (water), return the number of enclaves. An enclave is an island that cannot walk off the boundary of the grid in any of the four directions.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]',
      output: '3',
      solutions: [
        {
          title: 'Optimized Solution (Border DFS)',
          explanation: 'This is similar to the "Surrounded Regions" problem. It\'s easier to find all the land cells that *can* reach the border and subtract them from the total number of land cells. We iterate through the cells on the border of the grid. If we find a land cell (a `1`), we start a DFS or BFS from there to find all connected land cells. We mark these border-connected cells as visited (e.g., by changing them to 0). After this process, any `1`s remaining in the grid must be part of an enclave, so we just count them.',
          code: `def numEnclaves(grid):
    ROWS, COLS = len(grid), len(grid[0])
    
    # DFS function to mark all land cells connected to the border.
    def dfs(r, c):
        # Check boundaries and if it's not a land cell.
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or grid[r][c] != 1):
            return
        
        # Mark the cell as visited by turning it to water.
        grid[r][c] = 0
        
        # Recurse on neighbors.
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    # 1. Mark all land cells connected to the border.
    for r in range(ROWS):
        for c in range(COLS):
            # Check if the cell is on a border and is land.
            if grid[r][c] == 1 and (r == 0 or c == 0 or r == ROWS - 1 or c == COLS - 1):
                dfs(r, c)
    
    # 2. Count the remaining land cells (the enclaves).
    count = 0
    for r in range(ROWS):
        for c in range(COLS):
            if grid[r][c] == 1:
                count += 1
    
    return count`
        }
      ]
    },
    {
      problem: 'Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 's = "leetcode", wordDict = ["leet","code"]',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This problem is a perfect fit for 1D Dynamic Programming. We create a DP array, `dp`, of size `len(s) + 1`. `dp[i]` will be `true` if the substring `s[:i]` can be segmented. The base case is `dp[0] = true` (an empty string can be segmented). We then iterate through the string from `i = 1 to len(s)`. For each `i`, we check all possible split points `j` before it. If `dp[j]` is `true` AND the substring `s[j:i]` is in our word dictionary, then we know `s[:i]` can be segmented, so we set `dp[i] = true` and break to the next `i`. The final answer is `dp[len(s)]`.',
          code: `def wordBreak(s, wordDict):
    # DP array where dp[i] is true if s[:i] can be segmented.
    dp = [False] * (len(s) + 1)
    # Base case: an empty string can be segmented.
    dp[0] = True
    
    # Convert wordDict to a set for O(1) lookups.
    word_set = set(wordDict)

    # Iterate through the string to fill the DP table.
    for i in range(1, len(s) + 1):
        # Check all possible previous split points.
        for j in range(i):
            # If the prefix s[:j] is valid AND the suffix s[j:i] is in the dictionary...
            if dp[j] and s[j:i] in word_set:
                # ...then the prefix s[:i] is also valid.
                dp[i] = True
                # No need to check other split points for this i.
                break
    
    # The final element of the DP table tells us if the whole string is valid.
    return dp[len(s)]`
        }
      ]
    },
    {
      problem: 'Given an integer `n`, return the number of structurally unique binary search trees (BSTs) which has exactly `n` nodes of unique values from 1 to `n`.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'n = 3',
      output: '5',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This is a mathematical DP problem. The number of unique BSTs for `n` nodes is the `n`-th Catalan number. Let `numTrees[i]` be the number of unique BSTs with `i` nodes. If we pick `j` as the root, then there are `j-1` nodes in the left subtree and `i-j` nodes in the right subtree. The total number of trees with `j` as the root is `numTrees[j-1] * numTrees[i-j]`. We sum this up for all possible roots `j` from 1 to `i`. This gives us `numTrees[i]`. We can build this DP table from `0` to `n`.',
          code: `def numTrees(n):
    # numTrees[i] will store the number of unique BSTs for i nodes.
    # We initialize with base cases.
    # numTrees[0] = 1 (one empty tree)
    # numTrees[1] = 1 (one tree with a single node)
    numTrees = [1] * (n + 1)

    # Fill the DP table from 2 to n.
    for nodes in range(2, n + 1):
        total = 0
        # Iterate through all possible root nodes (1 to nodes).
        for root in range(1, nodes + 1):
            # Number of nodes in the left and right subtrees.
            left = root - 1
            right = nodes - root
            # The number of unique trees is the product of the possibilities on each side.
            total += numTrees[left] * numTrees[right]
        # Store the result for the current number of nodes.
        numTrees[nodes] = total
    
    return numTrees[n]
`
        }
      ]
    },
    {
      problem: 'Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`. In other words, return `true` if one of `s1`\'s permutations is a substring of `s2`.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 's1 = "ab", s2 = "eidbaooo"',
      output: 'true (s2 contains "ba")',
      solutions: [
        {
          title: 'Optimized Solution (Sliding Window with Frequency Map)',
          explanation: 'This is a perfect use case for the Sliding Window pattern. We need to find if any substring in `s2` of length `len(s1)` is a permutation of `s1`. A permutation has the exact same character counts. So, we first create a frequency map (an array of 26 integers) for `s1`. Then we create a window of the same size in `s2` and its frequency map. We slide this window one character at a time across `s2`, updating the window\'s frequency map in O(1) time (by adding the new character and removing the old one). In each step, we compare the window\'s frequency map with `s1`\'s map. If they match, we found a permutation.',
          code: `def checkInclusion(s1, s2):
    # If s1 is longer than s2, a permutation is impossible.
    if len(s1) > len(s2): return False

    # Create frequency maps for s1 and the initial window in s2.
    s1Count, s2Count = [0] * 26, [0] * 26
    for i in range(len(s1)):
        s1Count[ord(s1[i]) - ord('a')] += 1
        s2Count[ord(s2[i]) - ord('a')] += 1

    # Check the initial window.
    matches = 0
    for i in range(26):
        matches += (1 if s1Count[i] == s2Count[i] else 0)
    
    # Slide the window across s2.
    l = 0
    for r in range(len(s1), len(s2)):
        if matches == 26: return True
        
        # Add the new character (r) to the window.
        index = ord(s2[r]) - ord('a')
        s2Count[index] += 1
        if s1Count[index] == s2Count[index]:
            matches += 1
        elif s1Count[index] + 1 == s2Count[index]:
            matches -= 1
        
        # Remove the old character (l) from the window.
        index = ord(s2[l]) - ord('a')
        s2Count[index] -= 1
        if s1Count[index] == s2Count[index]:
            matches += 1
        elif s1Count[index] - 1 == s2Count[index]:
            matches -= 1
        # Move the left pointer.
        l += 1
        
    return matches == 26
`
        }
      ]
    },
    {
      problem: 'Given an array of `n` integers `nums`, where `n > 1`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`. Solve it without division and in O(n) time.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      solutions: [
        {
          title: 'Optimized Solution (Prefix & Postfix Products)',
          explanation: 'This problem has a clever O(n) time and O(1) space (excluding the result array) solution. The product of all elements except `nums[i]` is equivalent to `(product of all elements to the left of i) * (product of all elements to the right of i)`. We can calculate this in two passes. In the first pass, we iterate from left to right, and for each position `i`, `result[i]` will store the product of all elements to its left. In the second pass, we iterate from right to left, multiplying `result[i]` by the running product of elements to its right.',
          code: `def productExceptSelf(nums):
    # Initialize the result array with 1s.
    res = [1] * (len(nums))

    # First pass: Calculate prefix products.
    # At the end of this loop, res[i] will contain the product of all numbers to the left of i.
    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
        
    # Second pass: Calculate postfix products and multiply with prefixes.
    # At the end, we will have multiplied the prefix product by the postfix product.
    postfix = 1
    for i in range(len(nums) -1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
        
    return res`
        }
      ]
    },
    {
      problem: 'Given a `m x n` integer matrix, if an element is 0, set its entire row and column to 0\'s. Do this in-place.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
      solutions: [
        {
          title: 'Optimized Solution (O(1) Space)',
          explanation: 'A naive solution using extra O(m+n) space would be to have two sets to store the rows and columns to be zeroed. The optimal O(1) space solution cleverly uses the first row and first column of the matrix itself as storage. We first check if the original first row/column needs to be zeroed. Then, we iterate through the rest of the matrix (`[1:, 1:]`). If `matrix[r][c]` is 0, we set `matrix[0][c] = 0` and `matrix[r][0] = 0`. After this, we iterate through the matrix again, zeroing out row `r` if `matrix[r][0] == 0` and column `c` if `matrix[0][c] == 0`. Finally, we use our initial flags to zero out the first row/column if needed.',
          code: `def setZeroes(matrix):
    # Get dimensions
    ROWS, COLS = len(matrix), len(matrix[0])
    # Flag to check if the first row needs to be zeroed.
    rowZero = False

    # 1. Determine which rows and columns need to be zeroed.
    # We use the first row and column as markers.
    for r in range(ROWS):
        for c in range(COLS):
            if matrix[r][c] == 0:
                # Mark the corresponding first column cell.
                matrix[0][c] = 0
                # Mark the corresponding first row cell, unless it's the very first cell.
                if r > 0:
                    matrix[r][0] = 0
                else:
                    # If it's the first row, set the flag.
                    rowZero = True
    
    # 2. Zero out the marked rows and columns (excluding the first row/col).
    for r in range(1, ROWS):
        for c in range(1, COLS):
            if matrix[0][c] == 0 or matrix[r][0] == 0:
                matrix[r][c] = 0

    # 3. Zero out the first column if needed.
    if matrix[0][0] == 0:
        for r in range(ROWS):
            matrix[r][0] = 0
    
    # 4. Zero out the first row if needed (using the flag).
    if rowZero:
        for c in range(COLS):
            matrix[0][c] = 0
`
        }
      ]
    },
    {
      problem: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in the tree that has both `p` and `q` as descendants.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'A binary tree, and two nodes p and q',
      output: 'The LCA node',
      solutions: [
        {
          title: 'Optimized Solution (Recursive DFS)',
          explanation: 'This problem has a very elegant recursive DFS solution. We define a function that searches for `p` or `q` starting from a given `root`. The base cases are: if the root is null or if the root itself is `p` or `q`, we return the root. Otherwise, we recursively search in the left and right subtrees. If the recursive calls on both the left and right children return non-null values, it means `p` and `q` were found in different subtrees, so the current `root` is the LCA. If only one of them returns a non-null value, we propagate that value up the call stack.',
          code: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def lowestCommonAncestor(root, p, q):
    # Base case for the recursion.
    # If we reach a null node, or find p or q, we return the current node.
    if not root or root == p or root == q:
        return root
    
    # Recursively search in the left and right subtrees.
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # If both left and right are non-null, it means p and q were found
    # in different subtrees of the current 'root'. So, this 'root' is the LCA.
    if left and right:
        return root
    
    # If only one of them is non-null, it means both p and q are in that
    # subtree. So, we return that non-null value, which is either the
    # actual LCA from a lower level, or one of p/q itself.
    return left or right`
        }
      ]
    },
    {
      problem: 'Given a `m x n` 2D binary grid `grid` which represents a map of `1`s (land) and `0`s (water), return the number of enclaves. An enclave is an island that cannot walk off the boundary of the grid in any of the four directions.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]',
      output: '3',
      solutions: [
        {
          title: 'Optimized Solution (Border DFS)',
          explanation: 'This is similar to the "Surrounded Regions" problem. It\'s easier to find all the land cells that *can* reach the border and subtract them from the total number of land cells. We iterate through the cells on the border of the grid. If we find a land cell (a `1`), we start a DFS or BFS from there to find all connected land cells. We mark these border-connected cells as visited (e.g., by changing them to 0). After this process, any `1`s remaining in the grid must be part of an enclave, so we just count them.',
          code: `def numEnclaves(grid):
    ROWS, COLS = len(grid), len(grid[0])
    
    # DFS function to mark all land cells connected to the border.
    def dfs(r, c):
        # Check boundaries and if it's not a land cell.
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or grid[r][c] != 1):
            return
        
        # Mark the cell as visited by turning it to water.
        grid[r][c] = 0
        
        # Recurse on neighbors.
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    # 1. Mark all land cells connected to the border.
    for r in range(ROWS):
        for c in range(COLS):
            # Check if the cell is on a border and is land.
            if grid[r][c] == 1 and (r == 0 or c == 0 or r == ROWS - 1 or c == COLS - 1):
                dfs(r, c)
    
    # 2. Count the remaining land cells (the enclaves).
    count = 0
    for r in range(ROWS):
        for c in range(COLS):
            if grid[r][c] == 1:
                count += 1
    
    return count`
        }
      ]
    },
    {
      problem: 'Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.',
      solution: 'binary-search',
      difficulty: 'Easy',
      input: 'n = 16',
      output: 'true',
      solutions: [
        {
          title: 'Optimized Solution (Bit Manipulation)',
          explanation: 'This problem has a very clever O(1) bit manipulation solution. A number that is a power of two in binary has exactly one `1` bit (e.g., 8 is `1000`, 16 is `10000`). If we take such a number `n` and subtract 1, we get a number where all bits after the original `1` become `1`s (e.g., n=8 (`1000`), n-1=7 (`0111`)). When we perform a bitwise AND between `n` and `n-1`, the result will be 0 if and only if `n` is a power of two. We must also check that `n > 0`.',
          code: `def isPowerOfTwo(n):
    # A power of two must be a positive number.
    if n <= 0:
        return False
    # A power of two has exactly one '1' bit in its binary representation.
    # The bitwise AND of n and (n-1) will be 0 if this is the case.
    # Example: n=8 (1000), n-1=7 (0111). 1000 & 0111 = 0000.
    # Example: n=6 (0110), n-1=5 (0101). 0110 & 0101 = 0100.
    return (n & (n - 1)) == 0`
        },
        {
          title: 'Iterative Solution',
          explanation: 'A more straightforward iterative approach involves repeatedly dividing the number by 2 as long as it is even. If the number is a power of two, this process will eventually result in 1. If at any point we encounter an odd number greater than 1, it\'s not a power of two. We must handle the base cases of n=0 and n=1.',
          code: `def isPowerOfTwo_iterative(n):
    # Powers of two must be positive.
    if n <= 0:
        return False
    # Keep dividing by 2.
    while n % 2 == 0:
        n //= 2
    # If the process ends at 1, it was a power of two.
    return n == 1`
        }
      ]
    },
    {
      problem: 'The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given `n`, return the value of Tn.',
      solution: 'dynamic-programming',
      difficulty: 'Easy',
      input: 'n = 4',
      output: '4',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'Similar to Fibonacci, this problem has optimal substructure and overlapping subproblems, making it ideal for DP. A naive recursive solution would be very slow (O(3^n)). The optimized bottom-up DP approach calculates the sequence iteratively, storing only the last three values. This achieves a linear time complexity of O(n) and constant space complexity O(1).',
          code: `def tribonacci(n):
    # Base cases provided by the problem.
    if n == 0:
        return 0
    if n == 1 or n == 2:
        return 1
    
    # Initialize the first three values.
    # 'a' is T(i-3), 'b' is T(i-2), 'c' is T(i-1).
    a, b, c = 0, 1, 1
    
    # Iterate from 3 up to n.
    for _ in range(3, n + 1):
        # Calculate the next Tribonacci number.
        next_val = a + b + c
        # Update the three pointers for the next iteration.
        a = b
        b = c
        c = next_val
        
    # 'c' will hold the value for T(n).
    return c`
        }
      ]
    },
    {
      problem: 'Given a `m x n` binary matrix `mat`, find the distance of the nearest 0 for each cell. The distance between two adjacent cells is 1.',
      solution: 'bfs',
      difficulty: 'Medium',
      input: 'mat = [[0,0,0],[0,1,0],[1,1,1]]',
      output: '[[0,0,0],[0,1,0],[1,2,1]]',
      solutions: [
        {
          title: 'Optimized Solution (Multi-source BFS)',
          explanation: 'The problem asks for the "shortest distance", which is a strong signal for BFS. A naive approach of running a separate BFS from every `1` cell would be too slow. The optimal solution is a "multi-source" BFS. We initialize the queue with the locations of all `0` cells at once. These are our sources, and their distance is 0. We then perform a single BFS traversal. As we visit neighbors of the cells in the queue, we know we are finding their shortest path back to a `0`, so we update their distance and add them to the queue. This finds all shortest paths in a single O(m*n) pass.',
          code: `from collections import deque

def updateMatrix(mat):
    ROWS, COLS = len(mat), len(mat[0])
    q = deque()
    # Initialize the result matrix and the queue.
    for r in range(ROWS):
        for c in range(COLS):
            if mat[r][c] == 0:
                # Add all '0' cells to the queue as sources.
                q.append((r, c))
            else:
                # Mark '1' cells to be updated.
                mat[r][c] = -1 
    
    # Perform multi-source BFS.
    while q:
        r, c = q.popleft()
        
        # Check all 4 neighbors.
        for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:
            nr, nc = r + dr, c + dc
            
            # If the neighbor is in bounds and has not been visited yet...
            if 0 <= nr < ROWS and 0 <= nc < COLS and mat[nr][nc] == -1:
                # ...update its distance and add it to the queue.
                mat[nr][nc] = mat[r][c] + 1
                q.append((nr, nc))
                
    return mat`
        }
      ]
    },
    {
      problem: 'Given a `m x n` `grid` of characters, return the number of valid paths from the top-left cell `(0,0)` to the bottom-right `(m-1, n-1)`. You can only move down or right.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'm = 3, n = 7',
      output: '28',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This is a classic DP problem. The number of paths to reach cell `(r, c)` is the sum of the number of paths to reach the cell above it `(r-1, c)` and the cell to its left `(r, c-1)`. We can use a DP table to store these values. A space-optimized version uses only a single row (or array) for the DP table. We know there is only 1 way to reach any cell in the first row. We can then calculate the paths for the next row based on the values in the current row.',
          code: `def uniquePaths(m, n):
    # Initialize a DP row with 1s, as there's one way to reach each cell in the first row.
    row = [1] * n

    # Iterate through the remaining rows.
    for i in range(m - 1):
        # Create a new row, starting with 1 (one way to reach the first column).
        newRow = [1] * n
        # Iterate through the columns to fill the new row.
        for j in range(n - 2, -1, -1):
            # DP relation: paths[r][c] = paths[r-1][c] + paths[r][c-1]
            # Here: newRow[j] = newRow[j+1] (right) + row[j] (top)
            # We iterate backwards to use the newRow values from the current row calculation.
            newRow[j] = newRow[j+1] + row[j]
        # Update the main DP row.
        row = newRow
    
    # The last element of the last row is the answer.
    return row[0]`
        }
      ]
    },
    {
      problem: 'Find the minimum path sum from the top-left to the bottom-right of a `m x n` `grid` containing non-negative integers. You can only move either down or right at any point in time.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7 (path 1→3→1→1→1)',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming, In-place)',
          explanation: 'This is a DP problem where we want to find an optimal path. The minimum path sum to reach cell `(r, c)` is `grid[r][c] + min(sum to reach (r-1, c), sum to reach (r, c-1))`. We can solve this efficiently by using the grid itself as our DP table to achieve O(1) extra space. We iterate through the grid, updating `grid[r][c]` with this minimum sum. The first row and first column are handled as edge cases. The final answer will be in the bottom-right cell.',
          code: `def minPathSum(grid):
    ROWS, COLS = len(grid), len(grid[0])

    # Iterate through the grid to fill it as a DP table.
    for r in range(ROWS):
        for c in range(COLS):
            # Skip the starting cell.
            if r == 0 and c == 0:
                continue
            
            # Calculate the minimum path sum from top and left.
            # Use float('inf') for out-of-bounds cells.
            top_sum = grid[r-1][c] if r > 0 else float('inf')
            left_sum = grid[r][c-1] if c > 0 else float('inf')
            
            # Update the current cell with the minimum path sum to reach it.
            grid[r][c] = grid[r][c] + min(top_sum, left_sum)
            
    # The bottom-right cell contains the final answer.
    return grid[ROWS-1][COLS-1]`
        }
      ]
    },
    {
      problem: 'Given a `word`, `word_a`, and `word_b`, return the shortest distance between `word_a` and `word_b` in the list of words.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'words = ["the", "quick", "brown", "fox", "jumps"], word_a = "the", word_b = "fox"',
      output: '3',
      solutions: [
        {
          title: 'Optimized Solution (Two Pointers)',
          explanation: 'This problem can be efficiently solved in a single pass (O(n)) using two pointers. We iterate through the list of words. We use two variables, `p1` and `p2`, to store the most recent index of `word_a` and `word_b` respectively. Whenever we find either word, we update its corresponding pointer. If both pointers have been updated (i.e., are not at their initial -1 value), we calculate the distance `abs(p1 - p2)` and update our minimum result.',
          code: `def shortestDistance(words, word_a, word_b):
    # Initialize pointers to -1 to indicate the words haven't been found yet.
    p1 = -1
    p2 = -1
    # Initialize min_distance to infinity.
    min_dist = float('inf')

    # Iterate through the list of words with their indices.
    for i, word in enumerate(words):
        # If the current word matches word_a, update its pointer.
        if word == word_a:
            p1 = i
        # If it matches word_b, update its pointer.
        elif word == word_b:
            p2 = i

        # If both words have been found at least once...
        if p1 != -1 and p2 != -1:
            # ...calculate the distance and update the minimum.
            min_dist = min(min_dist, abs(p1 - p2))
            
    return min_dist`
        }
      ]
    },
    {
      problem: 'Given an array of `n` integers `nums`, find the length of the longest increasing subsequence.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'nums = [10,9,2,5,3,7,101,18]',
      output: '4 (The LIS is [2,3,7,101])',
      solutions: [
        {
          title: 'Optimized Solution (DP with Binary Search)',
          explanation: 'The standard DP solution is O(n²). However, a more clever approach achieves O(n log n). We maintain a special array (often called `tails` or `sub`) which stores the smallest tail of all increasing subsequences with length `i+1` at `sub[i]`. When we process a new number `x`, we find the smallest tail in `sub` that is greater than or equal to `x`. We can do this with binary search. We then replace that tail with `x`. This keeps the `sub` array sorted, allowing for the O(log n) search. The length of this `sub` array at the end is the length of the LIS.',
          code: `import bisect

def lengthOfLIS(nums):
    # This list will store the smallest tail of all increasing subsequences.
    sub = []
    
    # Iterate through each number in the input array.
    for num in nums:
        # Find the insertion point of num in sub to maintain sorted order.
        # bisect_left finds an insertion point which comes before (to the left of)
        # any existing entries of num in sub.
        i = bisect.bisect_left(sub, num)
        
        # If num is greater than all elements in sub, it extends the LIS.
        # So we append it.
        if i == len(sub):
            sub.append(num)
        # Otherwise, num can replace an existing element to potentially form
        # a new, shorter subsequence with a smaller tail.
        else:
            sub[i] = num
            
    # The length of this 'sub' list is the length of the LIS.
    return len(sub)`
        },
        {
          title: 'Standard DP Solution',
          explanation: 'A more straightforward DP approach uses an array `dp` of the same size as `nums`, where `dp[i]` stores the length of the longest increasing subsequence that ends at `nums[i]`. To calculate `dp[i]`, we look at all previous elements `nums[j]` (where `j < i`). If `nums[i] > nums[j]`, it means we can potentially extend the subsequence ending at `j`. So, `dp[i] = max(dp[i], 1 + dp[j])`. This requires nested loops, resulting in an O(n²) time complexity.',
          code: `def lengthOfLIS_dp(nums):
    # DP array initialized to 1, as each element is an LIS of length 1.
    dp = [1] * len(nums)
    
    # Iterate from the end of the array backwards.
    for i in range(len(nums) - 1, -1, -1):
        # Check all subsequent elements.
        for j in range(i + 1, len(nums)):
            # If the subsequent element is larger...
            if nums[i] < nums[j]:
                # ...we can potentially extend the subsequence ending at i.
                dp[i] = max(dp[i], 1 + dp[j])
                
    # The answer is the maximum value in our DP table.
    return max(dp)`
        }
      ]
    },
    {
      problem: 'Given a `m x n` grid, where each cell has a cost, find a path from top-left to bottom-right that minimizes the sum of all numbers along its path. You can only move right or down.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7 (Path: 1 -> 3 -> 1 -> 1 -> 1)',
      solutions: [
        {
          title: 'Optimized Solution (DP, In-place)',
          explanation: 'This is a classic DP problem. The minimum path sum to reach cell `(r, c)` is the cost of the cell itself plus the minimum of the path sums from the cell above `(r-1, c)` and the cell to the left `(r, c-1)`. We can solve this efficiently and with O(1) extra space by modifying the input grid to serve as our DP table. We iterate through the grid, updating each cell `grid[r][c]` with this minimum path sum. The first row and column are base cases. The final answer will be stored in the bottom-right cell of the grid after the iteration is complete.',
          code: `def minPathSum(grid):
    ROWS, COLS = len(grid), len(grid[0])

    # Fill the first row (can only come from the left).
    for c in range(1, COLS):
        grid[0][c] += grid[0][c-1]
    
    # Fill the first column (can only come from the top).
    for r in range(1, ROWS):
        grid[r][0] += grid[r-1][0]

    # Fill the rest of the DP table.
    for r in range(1, ROWS):
        for c in range(1, COLS):
            # The value of a cell is its own cost plus the minimum of the paths from top or left.
            grid[r][c] += min(grid[r-1][c], grid[r][c-1])
            
    # The bottom-right cell contains the final answer.
    return grid[ROWS-1][COLS-1]`
        }
      ]
    },
    {
      problem: 'Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.',
      solution: 'binary-search',
      difficulty: 'Easy',
      input: 'nums = [4,1,2,1,2]',
      output: '4',
      solutions: [
        {
          title: 'Optimized Solution (Bit Manipulation - XOR)',
          explanation: 'This problem has a beautiful and highly efficient solution using the XOR bitwise operator. The XOR operation has two key properties: `x ^ x = 0` and `x ^ 0 = x`. This means that if we XOR a number with itself, it cancels out to zero. If we XOR all the numbers in the array together, all the numbers that appear twice will cancel each other out, leaving only the single number that appeared once. This gives an O(n) time and O(1) space solution.',
          code: `def singleNumber(nums):
    # Initialize a result variable to 0.
    res = 0
    # Iterate through all numbers in the list.
    for n in nums:
        # XOR the current number with the result.
        # Duplicate numbers will cancel each other out.
        res = n ^ res
    # The remaining value in 'res' is the single number.
    return res`
        },
        {
          title: 'Hash Map Solution',
          explanation: 'A more straightforward approach is to use a hash map (or dictionary) to count the frequency of each number. We iterate through the array, populating the map. Then, we iterate through the map to find the number with a count of 1. This solution also works in O(n) time but requires O(n) space for the hash map, making it less space-efficient than the XOR solution.',
          code: `def singleNumber_map(nums):
    # Create a dictionary to store counts.
    counts = {}
    # Count the frequency of each number.
    for n in nums:
        counts[n] = counts.get(n, 0) + 1
    
    # Find the number with a frequency of 1.
    for n, count in counts.items():
        if count == 1:
            return n`
        }
      ]
    },
    {
      problem: 'Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums1 = [1,2,2,1], nums2 = [2,2]',
      output: '[2]',
      solutions: [
        {
          title: 'Optimized Solution (Two Sets)',
          explanation: 'The most efficient way to solve this is by using hash sets. We can convert both input arrays into sets. This automatically handles duplicates and provides O(1) average time for lookups. Then, we can simply use the built-in set intersection operation (the `&` operator in Python) to find the common elements. This gives a time complexity of O(n + m) where n and m are the lengths of the arrays.',
          code: `def intersection(nums1, nums2):
    # Convert both lists to sets to get unique elements.
    set1 = set(nums1)
    set2 = set(nums2)
    
    # Return the intersection of the two sets, converted back to a list.
    # The '&' operator performs the intersection.
    return list(set1 & set2)`
        },
        {
          title: 'Two Pointers Solution',
          explanation: 'If the arrays were sorted, a Two Pointers approach would be very efficient (O(n+m) time, O(1) space). However, since they are not, we must first sort them, which takes O(n log n + m log m). After sorting, we can use two pointers, one for each array, and advance them based on whether the elements are equal, smaller, or larger. While this works, the set-based solution is generally preferred for unsorted input due to its simpler implementation and often better average-case performance.',
          code: `def intersection_two_pointers(nums1, nums2):
    # Sort both arrays first.
    nums1.sort()
    nums2.sort()
    
    # Initialize pointers and result list.
    p1, p2 = 0, 0
    res = []
    
    # Loop while both pointers are in bounds.
    while p1 < len(nums1) and p2 < len(nums2):
        if nums1[p1] < nums2[p2]:
            p1 += 1
        elif nums2[p2] < nums1[p1]:
            p2 += 1
        else: # They are equal
            # Add to result if it's not already there.
            if not res or res[-1] != nums1[p1]:
                res.append(nums1[p1])
            p1 += 1
            p2 += 1
    return res`
        }
      ]
    },
    {
      problem: 'Given the `head` of a linked list, return `true` if it has a cycle in it, otherwise return `false`.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'A linked list structure, possibly with a cycle',
      output: 'true or false',
      solutions: [
        {
          title: 'Optimized Solution (Floyd\'s Tortoise and Hare)',
          explanation: 'This is a classic problem solved with the "Tortoise and Hare" algorithm, a form of Two Pointers. We use a `slow` pointer that moves one step at a time and a `fast` pointer that moves two steps at a time. If there is a cycle, the `fast` pointer will eventually lap the `slow` pointer, and they will meet. If there is no cycle, the `fast` pointer (or `fast.next`) will reach the end of the list (null). This provides an O(n) time and O(1) space solution.',
          code: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def hasCycle(head):
    # Initialize slow and fast pointers at the head.
    slow, fast = head, head

    # Loop as long as the fast pointer and its next node are not null.
    # This prevents errors when moving the fast pointer two steps.
    while fast and fast.next:
        # Move slow pointer one step.
        slow = slow.next
        # Move fast pointer two steps.
        fast = fast.next.next
        
        # If the pointers meet, a cycle is detected.
        if slow == fast:
            return True
    
    # If the loop finishes, the fast pointer reached the end, so no cycle.
    return False`
        }
      ]
    },
    {
      problem: 'Given a `m x n` `grid`, find a path from the top-left to the bottom-right which minimizes the sum of all numbers along its path. You may only move down or right.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7 (via path 1-3-1-1-1)',
      solutions: [
        {
          title: 'Optimized Solution (DP In-Place)',
          explanation: 'This is a classic DP problem. The key insight is that the minimum cost to reach any cell `(r, c)` is its own value plus the minimum of the costs to reach the cell above it `(r-1, c)` or the cell to its left `(r, c-1)`. We can use the grid itself as our DP table to save space (O(1) extra space). We iterate through the grid, updating each cell with this minimum path sum. The final answer will be the value in the bottom-right cell.',
          code: `def minPathSum_inplace(grid):
    ROWS, COLS = len(grid), len(grid[0])
    
    # Iterate through the entire grid.
    for r in range(ROWS):
        for c in range(COLS):
            # The starting cell has no parents, so skip it.
            if r == 0 and c == 0:
                continue
            # For the first row, can only come from the left.
            elif r == 0:
                grid[r][c] += grid[r][c-1]
            # For the first column, can only come from the top.
            elif c == 0:
                grid[r][c] += grid[r-1][c]
            # For all other cells, take the minimum of the path from top or left.
            else:
                grid[r][c] += min(grid[r-1][c], grid[r][c-1])
    
    # The value at the bottom-right is the minimum path sum.
    return grid[ROWS-1][COLS-1]`
        }
      ]
    },
    {
      problem: 'Given an array of `n` integers `nums` and a `target`, find the number of pairs of indices `(i, j)` with `i < j` such that `nums[i] + nums[j]` is less than `target`.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'nums = [2, 7, 11, 15], target = 20',
      output: '3 (Pairs are (2,7), (2,11), (2,15))',
      solutions: [
        {
          title: 'Optimized Solution (Sort + Two Pointers)',
          explanation: 'A brute-force O(n²) solution would be too slow. The optimal approach is to first sort the array (O(n log n)). Then, use Two Pointers, `left` starting at 0 and `right` at the end. If `nums[left] + nums[right] < target`, it means that `nums[left]` can be paired with `nums[right]` and all elements between `left` and `right`. The number of such pairs is `right - left`. We then increment `left` to find more pairs. If the sum is not less than the target, we decrement `right` to try a smaller sum. This pass is O(n), making the total time O(n log n).',
          code: `def countPairs(nums, target):
    # Sorting is essential for the two-pointer approach.
    nums.sort()
    
    # Initialize count and pointers.
    count = 0
    left, right = 0, len(nums) - 1
    
    # Loop until pointers meet.
    while left < right:
        # If the sum is less than the target.
        if nums[left] + nums[right] < target:
            # All elements from left+1 to right can be paired with nums[left].
            # The number of such pairs is right - left.
            count += right - left
            # Move the left pointer to find new pairs.
            left += 1
        else:
            # If the sum is too large, move the right pointer to a smaller value.
            right -= 1
            
    return count`
        }
      ]
    },
    {
      problem: 'Given a `m x n` matrix, return all elements of the matrix in spiral order.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[1,2,3,6,9,8,7,4,5]',
      solutions: [
        {
          title: 'Optimized Solution (Four Pointers)',
          explanation: 'This problem can be solved by simulating the spiral traversal. We use four pointers to represent the boundaries of the current layer we are processing: `left`, `right`, `top`, and `bottom`. We traverse the top row from left to right, then the right column from top to bottom, and so on. After each traversal, we shrink the corresponding boundary (e.g., increment `top` after traversing the top row). We continue this process in a loop as long as `left <= right` and `top <= bottom`.',
          code: `def spiralOrder(matrix):
    res = []
    # Initialize boundary pointers.
    left, right = 0, len(matrix[0])
    top, bottom = 0, len(matrix)

    # Loop until the boundaries cross.
    while left < right and top < bottom:
        # Get every element in the top row.
        for i in range(left, right):
            res.append(matrix[top][i])
        top += 1

        # Get every element in the right column.
        for i in range(top, bottom):
            res.append(matrix[i][right - 1])
        right -= 1

        # Check if boundaries crossed before proceeding.
        if not (left < right and top < bottom):
            break

        # Get every element in the bottom row (in reverse).
        for i in range(right - 1, left - 1, -1):
            res.append(matrix[bottom - 1][i])
        bottom -= 1

        # Get every element in the left column (in reverse).
        for i in range(bottom - 1, top - 1, -1):
            res.append(matrix[i][left])
        left += 1
        
    return res`
        }
      ]
    },
    {
      problem: 'Given an array of integers `nums`, find the number of longest increasing subsequences.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'nums = [1,3,5,4,7]',
      output: '2 (LIS are [1,3,4,7] and [1,3,5,7])',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This is a more advanced DP problem. We need two DP arrays: `length[i]` stores the length of the LIS ending at `nums[i]`, and `count[i]` stores the number of such subsequences. We iterate through `nums` with index `i`. For each `i`, we iterate through all previous indices `j`. If `nums[i] > nums[j]`, we can extend the LIS ending at `j`. If `1 + length[j]` gives us a new, longer LIS at `i`, we update `length[i]` and copy `count[j]`. If it gives us an LIS of the same length, we add `count[j]` to `count[i]`. Finally, we sum the counts for all indices `i` where `length[i]` equals the overall max length found.',
          code: `def findNumberOfLIS(nums):
    # DP arrays: length[i] = length of LIS ending at i,
    # count[i] = number of LIS ending at i.
    dp = {} # (index -> [length, count])
    lenLIS = 0  # Length of the overall LIS
    res = 0     # Count of the overall LIS

    # Iterate backwards through the array.
    for i in range(len(nums) - 1, -1, -1):
        maxLen, maxCnt = 1, 1 # LIS for just the element itself
        
        # Check all subsequent elements.
        for j in range(i + 1, len(nums)):
            if nums[j] > nums[i]:
                # Get the length and count of the LIS ending at j.
                l, c = dp[j]
                # If we found a longer subsequence...
                if l + 1 > maxLen:
                    maxLen = l + 1
                    maxCnt = c
                # If we found another subsequence of the same max length...
                elif l + 1 == maxLen:
                    maxCnt += c
        
        # Update overall LIS length and result count.
        if maxLen > lenLIS:
            lenLIS = maxLen
            res = maxCnt
        elif maxLen == lenLIS:
            res += maxCnt
        
        # Store the results for the current index.
        dp[i] = [maxLen, maxCnt]
        
    return res`
        }
      ]
    },
    {
      problem: 'Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You may only move down or right.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7 (Path is 1->3->1->1->1)',
      solutions: [
        {
          title: 'Optimized Solution (DP, In-place)',
          explanation: 'This problem is a classic application of dynamic programming. The core idea is that the minimum cost to reach any cell `(r, c)` is its own value plus the minimum of the costs to reach the cells immediately above it `(r-1, c)` and to its left `(r, c-1)`. We can use the grid itself as our DP table to achieve an O(1) space solution. We iterate through the grid, updating each cell with this calculated minimum sum. The value in the bottom-right cell after the loops complete will be the overall minimum path sum.',
          code: `def minPathSum(grid):
    ROWS, COLS = len(grid), len(grid[0])
    
    # Iterate through the grid, updating it in-place.
    for r in range(ROWS):
        for c in range(COLS):
            # Skip the starting cell.
            if r == 0 and c == 0:
                continue
            
            # Get the cost from the top and left cells. Use infinity for out-of-bounds.
            top_cost = grid[r-1][c] if r > 0 else float('inf')
            left_cost = grid[r][c-1] if c > 0 else float('inf')
            
            # Add the minimum of the two costs to the current cell's value.
            grid[r][c] += min(top_cost, left_cost)
            
    # The bottom-right cell will contain the total minimum path sum.
    return grid[ROWS-1][COLS-1]`
        }
      ]
    },
    {
      problem: 'Given a string representing a Roman numeral, convert it to an integer.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 's = "MCMXCIV"',
      output: '1994',
      solutions: [
        {
          title: 'Optimized Solution (Right-to-Left Pass)',
          explanation: 'The trick to Roman numerals is the subtraction rule (e.g., IV = 4, IX = 9). A clever way to handle this is to process the string from right to left. We keep a running total. For each numeral, we check if its value is less than the value of the numeral to its right (which we just processed). If it is, we subtract its value from the total. Otherwise, we add its value. This correctly handles all cases in a single O(n) pass.',
          code: `def romanToInt(s):
    # Map Roman numerals to their integer values.
    roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    
    # Initialize the result with the value of the last numeral.
    res = roman_map[s[-1]]
    
    # Iterate from the second-to-last character to the first.
    for i in range(len(s) - 2, -1, -1):
        # If the current numeral is smaller than the one to its right, subtract it.
        if roman_map[s[i]] < roman_map[s[i+1]]:
            res -= roman_map[s[i]]
        # Otherwise, add it.
        else:
            res += roman_map[s[i]]
            
    return res`
        }
      ]
    },
    {
      problem: 'Given an array `nums` of `n` integers, are there elements `a`, `b`, `c`, and `d` in `nums` such that `a + b + c + d = target`? Find all unique quadruplets in the array which gives the sum of `target`.',
      solution: 'two-pointers',
      difficulty: 'Hard',
      input: 'nums = [1,0,-1,0,-2,2], target = 0',
      output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
      solutions: [
        {
          title: 'Optimized Solution (Sort + Two Pointers)',
          explanation: 'This problem is an extension of 3Sum. A brute-force O(n⁴) approach is too slow. We can optimize by sorting the array first (O(n log n)). Then, we use two nested loops to fix the first two numbers (`a` and `b`). For the remaining part of the array, the problem reduces to 2Sum, which we can solve efficiently in O(n) time using the Two Pointers technique. The overall complexity becomes O(n³). We must add careful checks to skip duplicate numbers to ensure the quadruplets in the result are unique.',
          code: `def fourSum(nums, target):
    # Sort the array to enable the two-pointer approach.
    nums.sort()
    res, quad = [], []

    def kSum(k, start, target):
        # Base case: if we need to find 2 numbers.
        if k == 2:
            l, r = start, len(nums) - 1
            while l < r:
                if nums[l] + nums[r] < target:
                    l += 1
                elif nums[l] + nums[r] > target:
                    r -= 1
                else: # Found a pair
                    res.append(quad + [nums[l], nums[r]])
                    l += 1
                    # Skip duplicates for the left pointer.
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
            return
        
        # Recursive case for k > 2.
        for i in range(start, len(nums) - k + 1):
            # Skip duplicates for the current number.
            if i > start and nums[i] == nums[i - 1]:
                continue
            
            quad.append(nums[i])
            # Recurse to find k-1 numbers in the rest of the array.
            kSum(k - 1, i + 1, target - nums[i])
            # Backtrack.
            quad.pop()

    kSum(4, 0, target)
    return res`
        }
      ]
    },
    {
      problem: 'Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new head.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'head = [1,2,6,3,4,5,6], val = 6',
      output: '[1,2,3,4,5]',
      solutions: [
        {
          title: 'Optimized Solution (Dummy Node)',
          explanation: 'Handling deletions at the head of a list can be tricky. A common technique is to use a "dummy" or "sentinel" node that points to the actual head. This simplifies the logic because every node we might delete (including the original head) has a valid previous node. We use two pointers, `prev` (starting at the dummy) and `curr` (starting at the head). We iterate through the list. If `curr.val` equals the target `val`, we bypass it by setting `prev.next = curr.next`. Otherwise, we just advance `prev`. `curr` is always advanced.',
          code: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def removeElements(head, val):
    # Create a dummy node that points to the head.
    dummy = ListNode(next=head)
    
    # Initialize pointers. prev starts at the dummy, curr at the real head.
    prev, curr = dummy, head
    
    # Iterate through the list.
    while curr:
        # Store the next node before potentially modifying pointers.
        nxt = curr.next
        
        # If the current node's value matches the target...
        if curr.val == val:
            # ...bypass it by linking the previous node to the next node.
            prev.next = nxt
        else:
            # ...otherwise, just move the prev pointer forward.
            prev = curr
            
        # Always move the current pointer forward.
        curr = nxt
        
    # The list starting from dummy.next is the result.
    return dummy.next`
        }
      ]
    },
    {
      problem: 'You are given an integer array `cost` where `cost[i]` is the cost of `i`-th step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.',
      solution: 'dynamic-programming',
      difficulty: 'Easy',
      input: 'cost = [10, 15, 20]',
      output: '15 (Start at index 1, pay 15, and climb two steps to the top)',
      solutions: [
        {
          title: 'Optimized Solution (Dynamic Programming)',
          explanation: 'This is a classic DP problem. The minimum cost to reach step `i` is `cost[i]` plus the minimum of the costs to reach step `i-1` and `i-2`. We can solve this with O(1) space by iterating from the end of the array backwards. For each step `i`, we update its cost to be its original cost plus the minimum cost of the next one or two steps. The final answer will be the minimum of the costs calculated for the first two steps, as we can start from either.',
          code: `def minCostClimbingStairs(cost):
    # Start from the third-to-last step and iterate backwards.
    # The last two steps don't need changes as they can reach the top directly.
    for i in range(len(cost) - 3, -1, -1):
        # Update the cost of the current step to be its original cost plus the
        # minimum cost to proceed from here (either taking one or two steps).
        cost[i] += min(cost[i+1], cost[i+2])
        
    # The result is the minimum of starting at step 0 or step 1.
    return min(cost[0], cost[1])`
        }
      ]
    },
    {
      problem: 'Given a `n x n` `matrix` where all numbers are distinct, find the minimum element in each row.',
      solution: 'binary-search',
      difficulty: 'Easy',
      input: 'matrix = [[3,2,1],[6,5,4],[9,8,7]]',
      output: '[1,4,7]',
      solutions: [
        {
          title: 'Optimized Solution (Linear Scan)',
          explanation: 'Since the problem does not state that the rows or columns are sorted, we cannot use binary search or other optimized search algorithms. The only way to guarantee finding the minimum element in each row is to perform a linear scan of that row. We iterate through each row, find its minimum element, and add it to our result list. The time complexity is O(n*m), where n is the number of rows and m is the number of columns, as we must visit every cell.',
          code: `def findMinInRows(matrix):
    # List to store the minimum of each row.
    min_elements = []
    
    # Iterate through each row in the matrix.
    for row in matrix:
        # Find the minimum element in the current row and append it.
        # The min() function performs a linear scan.
        min_elements.append(min(row))
        
    return min_elements`
        }
      ]
    },
    {
      problem: 'Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values. Design a data structure that supports adding numbers from a data stream and finding the median of all elements so far.',
      solution: 'heap',
      difficulty: 'Hard',
      input: 'addNum(1), addNum(2), findMedian(), addNum(3), findMedian()',
      output: '1.5, 2.0',
      solutions: [
        {
          title: 'Optimized Solution (Two Heaps)',
          explanation: 'This is the canonical problem for the Two Heaps pattern. We maintain two heaps: a max-heap (`small`) to store the smaller half of the numbers and a min-heap (`large`) to store the larger half. We keep the heaps balanced (or nearly balanced). When adding a number, we push it to one heap and then move the top element to the other to maintain order. We ensure the `small` heap is never smaller than the `large` heap. To find the median, if the heap sizes are unequal, the median is the top of the `small` heap. If they are equal, it\'s the average of the tops of both heaps.',
          code: `import heapq

class MedianFinder:
    def __init__(self):
        # Two heaps: one max-heap for the smaller half, one min-heap for the larger half.
        # Python's heapq is a min-heap, so we negate values for the max-heap.
        self.small = []  # Max-heap
        self.large = []  # Min-heap

    def addNum(self, num):
        # Add to the max-heap first.
        heapq.heappush(self.small, -1 * num)

        # Ensure every number in small heap is <= every number in large heap.
        if (self.small and self.large and
                (-1 * self.small[0]) > self.large[0]):
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        
        # Balance the heaps (small heap can be at most 1 larger than large).
        if len(self.small) > len(self.large) + 1:
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -1 * val)

    def findMedian(self):
        # If small heap has more elements, its top is the median.
        if len(self.small) > len(self.large):
            return -1 * self.small[0]
        
        # If sizes are equal, the median is the average of the two tops.
        return (-1 * self.small[0] + self.large[0]) / 2.0
`
        }
      ]
    }
  ],
  visualizations: {
    title: 'Algorithm Visualization',
    description: 'Interactive step-by-step demonstration',
    controls: {
      play: 'Play',
      pause: 'Pause',
      reset: 'Reset',
      step: 'Step',
      previous: 'Previous',
      next: 'Next',
      speed: 'Speed'
    },
    common: {
      of: 'of',
      complexity: 'Complexity',
      status: 'Status',
      value: 'Value',
      array: 'Array',
      target: 'Target',
      actions: 'Actions',
      generate: 'Generate Random Example',
      apply: 'Apply',
      complete: 'Complete',
      found: 'Found',
      notFound: 'Not Found',
      start: 'Start',
      searching: 'Searching',
      visited: 'Visited',
      current: 'Current',
      distance: 'Distance',
      path: 'Path',
      match: 'Match',
      calculating: 'Calculating',
      result: 'Result',
      // UI Labels
      arrayCommaSeparated: 'Array (comma separated):',
      windowSize: 'Window Size:',
      targetValue: 'Target Value:',
      generateRandom: 'Generate Random Example',
      randomArray: 'Random Array',
      customArray: 'Custom Array'
    },
    slidingWindow: {
      title: 'Sliding Window',
      description: 'Finds the maximum sum subarray of a given size using a sliding window technique.',
      windowSize: 'Window Size',
      maxSum: 'Maximum Sum',
      currentSum: 'Current Sum',
      windowPosition: 'Window Position',
      maxPosition: 'Max Position',
      // Dynamic descriptions
      initializing: (windowSize: number) => 
        `Initializing window of size ${windowSize}. Calculating initial sum.`,
      windowTooLarge: 'Window size is larger than the array',
      slidingWindow: (removed: number, removedPos: number, added: number, addedPos: number, currentSum: number) => 
        `Sliding window: removing ${removed} (position ${removedPos}), adding ${added} (position ${addedPos}). Current sum: ${currentSum}`,
      completed: (maxSum: number, maxStart: number) => 
        `Completed! The maximum sum found is ${maxSum}, in the window starting at position ${maxStart}.`,
    },
    twoPointers: {
      title: 'Two Pointers',
      description: 'Finds pairs in a sorted array that sum to a target value using convergent pointers.',
      sortedArray: 'Sorted Array',
      left: 'Left',
      right: 'Right',
      sum: 'Sum',
      comparison: 'Comparison',
      pointerPositions: 'Pointer Positions',
      tooSmall: 'Too Small',
      tooLarge: 'Too Large',
      solutionFound: 'Solution found!',
      noSolutionFound: 'No solution found',
      target: 'Target',
      // Dynamic descriptions
      initializing: (leftVal: number, rightPos: number, rightVal: number, target: number) => 
        `Initializing pointers: left at position 0 (${leftVal}) and right at position ${rightPos} (${rightVal}). Looking for sum = ${target}.`,
      found: (leftVal: number, rightVal: number, sum: number, target: number, leftPos: number, rightPos: number) => 
        `Found! ${leftVal} + ${rightVal} = ${sum} = ${target}. Indices are [${leftPos}, ${rightPos}].`,
      tooSmallDetail: (leftVal: number, rightVal: number, sum: number, target: number) => 
        `${leftVal} + ${rightVal} = ${sum} < ${target}. Sum too small, moving left pointer right.`,
      tooLargeDetail: (leftVal: number, rightVal: number, sum: number, target: number) => 
        `${leftVal} + ${rightVal} = ${sum} > ${target}. Sum too large, moving right pointer left.`,
      leftMoved: (leftPos: number, leftVal: number, rightVal: number, newSum: number) => 
        `Left pointer moved to position ${leftPos} (${leftVal}). New sum: ${leftVal} + ${rightVal} = ${newSum}.`,
      rightMoved: (rightPos: number, rightVal: number, leftVal: number, newSum: number) => 
        `Right pointer moved to position ${rightPos} (${rightVal}). New sum: ${leftVal} + ${rightVal} = ${newSum}.`,
      notFound: (target: number) => 
        `No solution found. Pointers crossed without finding a sum equal to ${target}.`,
      notFoundStatus: 'Not Found'
    },
    binarySearch: {
      title: 'Binary Search',
      description: 'Finds an element in a sorted array by repeatedly dividing the search space in half.',
      sortedArray: 'Sorted Array',
      left: 'Left',
      mid: 'Mid',
      right: 'Right',
      searchSpace: 'Search Space',
      comparison: 'Comparison at middle position',
      iterations: 'iterations for array of size',
      maximum: 'Maximum of',
      maxIterations: 'Maximum of {max} iterations for array of size {size}',
      // Dynamic descriptions
      initializing: (arrayLength: number, target: number, right: number) => 
        `Initializing binary search. Sorted array of ${arrayLength} elements. Looking for ${target}. Left=0, Right=${right}.`,
      iteration: (iteration: number, left: number, right: number, mid: number, midValue: number) => 
        `Iteration ${iteration}: Calculating mid = (${left} + ${right}) / 2 = ${mid}. Value at mid: ${midValue}.`,
      targetFound: (midValue: number, target: number, mid: number) => 
        `Target found! ${midValue} == ${target}. Element is at position ${mid}.`,
      targetInRightHalf: (midValue: number, target: number, newLeft: number) => 
        `${midValue} < ${target}. Target is in right half. Updating left = ${newLeft}.`,
      targetInLeftHalf: (midValue: number, target: number, newRight: number) => 
        `${midValue} > ${target}. Target is in left half. Updating right = ${newRight}.`,
      newSearchSpace: (left: number, right: number, size: number) => 
        `New search space: [${left}, ${right}]. Size: ${size} elements.`,
      targetNotFound: (left: number, right: number, target: number) => 
        `Target not found. Left (${left}) > Right (${right}). Element ${target} is not in the array.`,
      binarySearchTitle: 'Binary Search',
      searchSpaceLabel: 'Search Space',
      comparisonLabel: 'Comparison at middle position',
      elementFound: 'Element found!',
      elementNotFound: 'Element not found'
    },
    backtracking: {
      title: 'Backtracking - Subset Sum',
      description: 'Finds all subsets that sum to a target value using backtracking search.',
      availableNumbers: 'Available Numbers',
      targetSum: 'Target Sum',
      currentPath: 'Current Path',
      currentSum: 'Current Sum',
      decisionTree: 'Decision Tree',
      level: 'Tree Level',
      included: 'Included',
      considering: 'Considering',
      exploring: 'Exploring',
      solutions: 'solution(s) found',
      backtrack: 'Backtracking',
      addNumber: 'Adding Number',
      skipNumber: 'Skipping Number',
      solutionFound: 'Solution Found',
      pathRejected: 'Path Rejected',
      searchComplete: 'Search Complete',
      startSearch: 'Starting Search',
      solutionCount: (count: number) => `${count} solution(s) found`,
      complexityInfo: 'Complexity: O(2^n) - Explores all possible combinations',
      pruningNote: 'Backtracking allows pruning the search tree when conditions are violated',
      // Dynamic descriptions
      currentState: (path: string, sum: number, index: number) => 
        `Current state: path=[${path}], sum=${sum}, index=${index}`,
      solutionFoundDetail: (path: string, sum: number) => 
        `Solution found! [${path}] = ${sum}`,
      tryingInclude: (num: number, newSum: number) => 
        `Trying to include ${num}. New sum would be: ${newSum}`,
      addingNumber: (num: number) => 
        `Adding ${num} to path. Exploring recursively...`,
      backtrackingRemove: (num: number) => 
        `Backtracking: removing ${num} from path. Returning to explore other options.`,
      skippingNumber: (num: number) => 
        `Skipping ${num}. Exploring next number...`,
      startingSearch: (target: number, numbers: string) => 
        `Starting search for subsets that sum to ${target} using numbers [${numbers}]`,
      searchCompleted: (count: number, solutions: string) => 
        `Search completed! Found ${count} solution(s): ${solutions}`,
    },
    bfs: {
      title: 'BFS - Breadth-First Search',
      description: 'Explores the graph level by level, visiting all nodes at the same distance before going further.',
      startNode: 'Start Node',
      targetNode: 'Target Node',
      generateGraph: 'Generate Random Graph',
      resetGraph: 'Reset Graph',
      useDefaultGraph: 'Use Default Graph',
      queue: 'Queue (FIFO)',
      distances: 'Distances from',
      unvisited: 'Unvisited',
      inQueue: 'In Queue',
      pathFound: 'Path Found',
      targetUnreachable: 'Target Unreachable',
      bfsComplete: 'BFS Complete',
      visitingNode: 'Visiting Node',
      exploringNeighbors: 'Exploring Neighbors',
      startingBfs: 'Starting BFS',
      guaranteesShortestPath: 'BFS guarantees the shortest path in unweighted graphs',
      statusPathFound: 'Path found!',
      statusTargetUnreachable: 'Target unreachable',
      statusComplete: 'BFS Complete',
      statusVisiting: 'Visiting node',
      statusExploring: 'Exploring neighbors',
      statusStarting: 'Starting BFS',
      pathLabel: 'Path',
      // Legend labels
      visited: 'Visited',
      path: 'Path',
      queueLabel: 'Queue (FIFO)',
      visitedLabel: 'Visited',
      current: 'Current',
      distancesFrom: 'Distances from',
      targetNodeLabel: 'Target Node',
      // Dynamic descriptions
      initializing: (startNode: string) => 
        `Starting BFS from node ${startNode}. Adding ${startNode} to queue.`,
      visiting: (currentNode: string, distance: number) => 
        `Removing ${currentNode} from queue and marking as visited. Distance: ${distance}.`,
      targetFound: (targetNode: string, path: string[]) => 
        `Target ${targetNode} found! Path: ${path.join(' → ')}`,
      exploringNeighborsDetail: (currentNode: string, neighbors: string[]) => 
        `Exploring neighbors of ${currentNode}: [${neighbors.join(', ')}]. Adding to queue.`,
      noNeighbors: (currentNode: string) => 
        `Node ${currentNode} has no unvisited neighbors.`,
      queueUpdate: (queue: string[], next: string) => 
        `Current queue: [${queue.join(', ')}]. Next: ${next}.`,
      notFound: (targetNode: string, startNode: string) => 
        `Target ${targetNode} is not reachable from ${startNode}.`,
      completed: (visited: string[]) => 
        `BFS completed. Nodes visited: [${visited.join(', ')}]`
    },
    dfs: {
      title: 'DFS - Depth-First Search',
      description: 'Explores the graph in depth, following a path to the end before backtracking.',
      startNode: 'Start Node',
      targetNode: 'Target Node',
      generateGraph: 'Generate Random Graph',
      resetGraph: 'Reset Graph',
      useDefaultGraph: 'Use Default Graph',
      recursionStack: 'Recursion Stack',
      depth: 'Depth',
      discoveryFinishTimes: 'Discovery/Finish Times',
      discoveryTime: 'Discovery time',
      finishTime: 'Finish time',
      pathFound: 'Path Found',
      targetUnreachable: 'Target Unreachable',
      dfsComplete: 'DFS Complete',
      visitingNode: 'Visiting Node',
      exploringNeighbors: 'Exploring Neighbors',
      backtracking: 'Backtracking',
      finishingNode: 'Finishing Node',
      startingDfs: 'Starting DFS',
      usesLessMemory: 'DFS uses less memory than BFS, but doesn\'t guarantee shortest path',
      // Legend labels
      unvisited: 'Unvisited',
      exploring: 'Exploring',
      current: 'Current',
      visited: 'Visited',
      path: 'Path',
      discoveryTimes: 'Discovery Times',
      finishTimes: 'Finish Times',
      complexityInfo: 'Complexity: O(V + E) - Explores all vertices and edges',
      complexityNote: 'DFS uses less memory than BFS, but doesn\'t guarantee shortest path',
      // Dynamic descriptions
      initializing: (startNode: string) => 
        `Starting DFS from node ${startNode}. Adding ${startNode} to stack.`,
      visiting: (node: string, time: number, depth: number) => 
        `Visiting node ${node}. Discovery time: ${time}. Depth: ${depth}.`,
      targetFound: (targetNode: string, path: string[]) => 
        `Target ${targetNode} found! Path: [${path.join(' → ')}]`,
      exploringNeighborsDetail: (node: string, neighbors: string[]) => 
        `Exploring neighbors of ${node}: [${neighbors.join(', ')}]. Recursing in depth.`,
      recursiveCall: (neighbor: string, depth: number) => 
        `Making recursive call to node ${neighbor} (depth ${depth}).`,
      finishing: (node: string, time: number) => 
        `Finishing processing node ${node}. Finish time: ${time}.`,
      starting: (targetNode: string) => 
        `Starting depth-first search. Looking for node ${targetNode}.`,
      notFound: (targetNode: string) => 
        `Target ${targetNode} was not found. Search completed.`,
      completed: (visited: string[]) => 
        `DFS completed. Nodes visited: [${visited.join(', ')}]`
    },
    dynamicProgramming: {
      title: 'Dynamic Programming',
      description: 'Solves complex problems by dividing them into smaller subproblems and storing results.',
      problem: 'Problem',
      fibonacci: 'Fibonacci',
      knapsack: 'Knapsack',
      lcs: 'LCS',
      capacity: 'Capacity',
      string1: 'String 1',
      string2: 'String 2',
      memoizationTable: 'Memoization Table',
      callStack: 'Call Stack',
      availableItems: 'Available Items',
      dpTable: 'DP Table',
      weight: 'Weight',
      value: 'Value',
      maxValue: 'Maximum Value',
      selectedItems: 'Selected Items',
      lcsFound: 'LCS Found',
      lcsLength: 'LCS Length',
      lcsString: 'LCS',
      length: 'Length',
      cacheHit: 'Cache Hit',
      match: 'Match',
      calculating: 'Calculating',
      comparing: 'Comparing',
      checking: 'Checking',
      found: 'Found',
      avoiding: 'Avoiding recalculation',
      notInMemo: 'Not in memo',
      stored: 'Stored in memo',
      finalMemo: 'Final memo contains',
      calculatedValues: 'calculated values',
      itemDoesntFit: 'Item doesn\'t fit',
      copying: 'Copying previous value',
      memoizationVsBruteForce: 'Fibonacci: O(n) with memoization vs O(2^n) without',
      knapsackComplexity: 'Knapsack: O(nW) where n=items, W=capacity',
      lcsComplexity: 'LCS: O(mn) where m,n are string lengths',
      dividesProblems: 'Dynamic Programming: Divides problems into subproblems and reuses solutions',
      // Dynamic descriptions
      fibonacciStart: (n: number) => `Calculating Fibonacci(${n}) using dynamic programming with memoization.`,
      fibonacciCalling: (n: number) => `Calling fib(${n}). Checking if it's in memo...`,
      fibonacciFoundInMemo: (n: number, value: number) => `fib(${n}) found in memo: ${value}. Avoiding recalculation!`,
      fibonacciBaseCase: (n: number) => `Base case: fib(${n}) = ${n}. Storing in memo.`,
      fibonacciNotInMemo: (n: number) => `fib(${n}) not in memo. Calculating fib(${n-1}) + fib(${n-2})...`,
      fibonacciCalculated: (n: number, result1: number, result2: number, value: number) => `fib(${n}) = fib(${n-1}) + fib(${n-2}) = ${result1} + ${result2} = ${value}. Stored in memo.`,
      fibonacciFinal: (n: number, result: number, memoSize: number) => `Fibonacci(${n}) = ${result}. Final memo contains ${memoSize} calculated values.`,
      knapsackStart: (capacity: number, n: number) => `Solving knapsack problem: capacity=${capacity}, ${n} items. Creating DP table[${n+1}][${capacity+1}].`,
      knapsackConsidering: (i: number, w: number, weight: number, value: number) => `DP[${i}][${w}]: Considering item ${i} (weight=${weight}, value=${value}) with capacity ${w}.`,
      knapsackItemFits: (takeItem: number, skipItem: number, chosen: number) => `Item fits! Comparing: take item (${takeItem}) vs. skip item (${skipItem}). Choosing ${chosen}.`,
      knapsackItemDoesntFit: (weight: number, capacity: number, value: number) => `Item doesn't fit (weight ${weight} > capacity ${capacity}). Copying previous value: ${value}.`,
      knapsackFinalResult: (maxValue: number, items: string[]) => `Maximum value: ${maxValue}. Selected items: [${items.join(', ')}].`,
      lcsStart: (str1: string, str2: string, m: number, n: number) => `Finding LCS of "${str1}" and "${str2}". Creating DP table[${m+1}][${n+1}].`,
      lcsComparing: (i: number, j: number, char1: string, char2: string) => `DP[${i}][${j}]: Comparing "${char1}" and "${char2}".`,
      lcsMatch: (i: number, j: number, value: number) => `Characters match! DP[${i}][${j}] = DP[${i-1}][${j-1}] + 1 = ${value}.`,
      lcsDifferent: (i: number, j: number, value: number) => `Characters different. DP[${i}][${j}] = max(DP[${i-1}][${j}], DP[${i}][${j-1}]) = ${value}.`,
      lcsFinal: (lcs: string, length: number) => `LCS found: "${lcs}" (length: ${length}).`,
    },
    heap: {
      title: 'Heap',
      description: 'Complete binary tree data structure where each node satisfies the heap property.',
      heapType: 'Heap Type',
      maxHeap: 'Max-Heap',
      minHeap: 'Min-Heap',
      operation: 'Operation',
      insert: 'Insert',
      extract: 'Extract',
      heapify: 'Heapify Array',
      valueToInsert: 'Value to Insert',
      customArray: 'Custom Array',
      generateHeap: 'Random Heap',
      binaryTree: 'Binary Tree',
      property: 'Property: Each node is',
      greaterOrEqual: 'greater or equal',
      lessOrEqual: 'less or equal',
      toChildren: 'to its children',
      arrayRepresentation: 'Array Representation',
      currentOperation: 'Current Operation',
      heapSize: 'Heap Size',
      minimum: 'Minimum',
      maximum: 'Maximum',
      insertion: 'Insertion',
      preparingExtraction: 'Preparing Extraction',
      extractionComplete: 'Extraction Complete',
      heapifyComplete: 'Heapify Complete',
      heapifyUp: 'Heapify Up',
      heapifyDown: 'Heapify Down',
      swap: 'Swap',
      start: 'Starting Operation',
      elementsSwapped: 'Elements Swapped',
      insertingElement: 'Inserting Element',
      movingUp: 'Moving Up Tree',
      movingDown: 'Moving Down Tree',
      operationError: 'Operation Error',
      insertExtractComplexity: 'Insert/Extract O(log n), Heapify O(n), Access min/max O(1)',
      idealForPriorityQueues: 'Heaps are ideal for priority queues and algorithms like Heap Sort',
      maxElement: 'Maximum Element',
      minElement: 'Minimum Element',
      operationDetails: 'Operation Details',
      insertedValue: 'Inserted value',
      extractedValue: 'Extracted value',
      comparing: 'Comparing',
      swappedIndices: 'Swapped: indices',
      complexities: 'Complexities',
      // Dynamic descriptions
      comparingWithParent: (current: number, currentIdx: number, parent: number, parentIdx: number) => 
        `Comparing ${current} (index ${currentIdx}) with parent ${parent} (index ${parentIdx}).`,
      checkingChildren: (current: number, currentIdx: number, left: string, right: string) => 
        `Checking children of ${current} (index ${currentIdx}). Left: ${left}, Right: ${right}.`,
      startingOperation: (operation: string, heapType: string, heap: string) => 
        `Starting ${operation} operation on ${heapType}. Initial state: [${heap}].`,
      insertingValue: (value: number, index: number) => 
        `Inserting ${value} at end of heap. New position: index ${index}.`,
      heapEmpty: () => 
        `Heap empty! Cannot extract element.`,
      extractingElement: (element: number, isMax: boolean) => 
        `Extracting ${isMax ? 'maximum' : 'minimum'} element: ${element}. Moving last element to root.`,
      newElementAtRoot: (value: number) => 
        `New element at root: ${value}. Running heapify-down to restore property.`,
      extractionCompleted: (element: number, heap: string) => 
        `Extraction completed. Element ${element} was removed. Final heap: [${heap}].`,
      buildingHeap: (heapType: string) => 
        `Building ${heapType} from array. Starting from last non-leaf node.`,
      heapifyingFrom: (index: number, value: number) => 
        `Running heapify-down from index ${index} (value: ${value}).`,
    }
  }
};

    
    