
export const en = {
  sidebar: {
    title: 'Think2Algo',
    theory: 'Theory',
    algorithms: 'Algorithms',
    challenges: 'Challenges',
    bigO: 'Big O Notation',
  },
  workspace: {
    selectAlgorithm: 'Select an algorithm to see the details.',
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
    showSolution: 'Show Python Solution',
    hideSolution: 'Hide Solution',
    solutionExplanation: 'Solution Explanation',
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
    // Easy
    {
      problem: 'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
      solution: 'binary-search',
      difficulty: 'Easy',
      input: 'nums = [1,3,5,6], target = 5',
      output: '2',
      explanation: 'We use binary search to find the target or its insertion position in O(log n). We compare the target with the middle element and adjust the left/right pointers as needed.',
      pythonSolution: `def searchInsert(nums, target):
    """
    Problem: Given a sorted array and a target, find the index of the target.
    If the target is not found, return the index where it would be inserted.
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    # If the loop finishes, 'left' is the insertion point
    return left`
    },
    {
      problem: 'Given an array of integers `nums`, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index\'s right.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [1,7,3,6,5,6]',
      output: '3',
      explanation: 'We calculate the total sum first. Then we iterate through the array maintaining a left sum. The pivot is where left_sum == total_sum - left_sum - nums[i].',
      pythonSolution: `def pivotIndex(nums):
    """
    Problem: Find the pivot index where the sum of numbers to the left
    equals the sum of numbers to the right.
    """
    total_sum = sum(nums)
    left_sum = 0
    
    for i in range(len(nums)):
        # The right sum is total_sum - left_sum - current element
        right_sum = total_sum - left_sum - nums[i]
        if left_sum == right_sum:
            return i
        left_sum += nums[i]
    
    return -1`
    },
    {
      problem: 'Given a string, find the length of the longest substring without repeating characters.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 's = "abcabcbb"',
      output: '3',
      explanation: 'We use a sliding window with two pointers. We expand the window by adding unique characters and shrink it when we find a duplicate. We keep track of the maximum length.',
      pythonSolution: `def lengthOfLongestSubstring(s):
    """
    Problem: Find the length of the longest substring without repeating characters.
    """
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        # If the character is already in the set,
        # shrink the window from the left until it's gone.
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        # Add the new character to the set
        char_set.add(s[right])
        # Update the maximum length found
        max_length = max(max_length, right - left + 1)
    
    return max_length`
    },
    {
      problem: 'You are given a string `s`. The cost of deleting a single character is given. Return the minimum cost to make all characters in `s` unique.',
      solution: 'heap',
      difficulty: 'Easy',
      input: 's = "aab", costs = [1,2,3]',
      output: '2',
      explanation: 'We use a heap (priority queue) to keep track of the costs of duplicate characters. For each group of identical characters, we remove all but the one with the highest cost.',
      pythonSolution: `import heapq
from collections import defaultdict

def minCostToMakeUnique(s, costs):
    """
    Problem: Given a string and costs to delete chars, find the minimum cost
    to make all characters unique.
    """
    char_costs = defaultdict(list)
    
    # Group costs by character
    for i, char in enumerate(s):
        heapq.heappush(char_costs[char], costs[i])
    
    total_cost = 0
    
    # For each group of duplicate characters, sum up the costs of all
    # but the most expensive one to keep.
    for char, cost_list in char_costs.items():
        while len(cost_list) > 1:
            total_cost += heapq.heappop(cost_list)
    
    return total_cost`
    },
    {
      problem: 'Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
      solution: 'dfs',
      difficulty: 'Easy',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '3',
      explanation: 'We use recursive DFS. The max depth is 1 + the maximum of the left and right subtrees\' depths. The base case is a null node, which has a depth of 0.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    """
    Problem: Find the maximum depth of a binary tree.
    """
    # Base case: if the node is null, its depth is 0.
    if not root:
        return 0
    
    # Recursively find the depth of the left and right subtrees.
    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)
    
    # The depth of the tree is 1 (for the current node) + the max of the two subtrees.
    return 1 + max(left_depth, right_depth)`
    },
    {
      problem: 'Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.',
      solution: 'sliding-window',
      difficulty: 'Easy',
      input: 's = "anagram", t = "nagaram"',
      output: 'true',
      explanation: 'We can use several approaches: sorting both strings, counting character frequencies, or using a sliding window. Counting is the most efficient.',
      pythonSolution: `from collections import Counter

def isAnagram(s, t):
    """
    Problem: Determine if string t is an anagram of string s.
    """
    # Anagrams must have the same length.
    if len(s) != len(t):
        return False
    
    # Anagrams must have the same frequency of each character.
    # The Counter object creates a hash map of character frequencies.
    return Counter(s) == Counter(t)`
    },
    {
      problem: 'Write a function to find the longest common prefix string amongst an array of strings.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'strs = ["flower","flow","flight"]',
      output: '"fl"',
      explanation: 'We compare the first string character by character with all other strings. We stop when we find a mismatch or reach the end of any string.',
      pythonSolution: `def longestCommonPrefix(strs):
    """
    Problem: Find the longest common prefix among an array of strings.
    """
    if not strs:
        return ""
    
    # Iterate through the characters of the first string.
    for i, char in enumerate(strs[0]):
        # Compare this character with the same position in all other strings.
        for other_str in strs[1:]:
            # If the other string is shorter or the character doesn't match,
            # we have found the end of the common prefix.
            if i >= len(other_str) or other_str[i] != char:
                return strs[0][:i]
    
    # If the loop completes, the entire first string is the common prefix.
    return strs[0]`
    },
    {
      problem: 'Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
      solution: 'dfs',
      difficulty: 'Easy',
      input: 'root = [1,2,2,3,4,4,3]',
      output: 'true',
      explanation: 'We use recursive DFS to compare the left subtree with the right one. We check if left.val == right.val and if left.left is a mirror of right.right.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSymmetric(root):
    """
    Problem: Check if a binary tree is symmetric around its center.
    """
    if not root:
        return True
    
    # Helper function to check if two subtrees are mirrors.
    def isMirror(left_node, right_node):
        if not left_node and not right_node:
            return True
        if not left_node or not right_node or left_node.val != right_node.val:
            return False
        
        # Check that the outer subtrees are mirrors (left.left vs right.right)
        # and the inner subtrees are mirrors (left.right vs right.left).
        return (isMirror(left_node.left, right_node.right) and 
                isMirror(left_node.right, right_node.left))
    
    return isMirror(root.left, root.right)`
    },
    {
      problem: 'You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
      solution: 'dynamic-programming',
      difficulty: 'Easy',
      input: 'n = 3',
      output: '3',
      explanation: 'This is a classic Fibonacci problem! To reach step n, we can come from step n-1 (by climbing 1) or n-2 (by climbing 2). So, f(n) = f(n-1) + f(n-2).',
      pythonSolution: `def climbStairs(n):
    """
    Problem: Find the number of distinct ways to climb a staircase of n steps,
    taking 1 or 2 steps at a time.
    """
    if n <= 2:
        return n
    
    # We only need to store the last two results.
    # prev2 stores ways to reach step i-2
    # prev1 stores ways to reach step i-1
    prev2, prev1 = 1, 2
    
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
        
    return prev1`
    },
    {
      problem: 'Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [1,2,3,1]',
      output: 'true',
      explanation: 'We can use a set to keep track of seen elements, or sort the array and use two pointers to check for adjacent duplicate elements.',
      pythonSolution: `def containsDuplicate(nums):
    """
    Problem: Check if an array contains any duplicate values.
    """
    # The most efficient way is to use a set.
    # If the length of the set is different from the length of the list,
    # it means some elements were removed, so there were duplicates.
    return len(nums) != len(set(nums))`
    },
    {
      problem: 'Merge two sorted linked lists and return it as a new sorted list.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      explanation: 'We use two pointers, one for each list. We compare the current values and add the smaller one to the new list, advancing only that pointer.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    """
    Problem: Merge two sorted linked lists into one sorted list.
    """
    # A dummy node helps simplify the code by providing a starting point.
    dummy_head = ListNode()
    current = dummy_head
    
    p1, p2 = list1, list2
    
    # Iterate while both lists have nodes.
    while p1 and p2:
        if p1.val <= p2.val:
            current.next = p1
            p1 = p1.next
        else:
            current.next = p2
            p2 = p2.next
        current = current.next
        
    # Append the remaining part of whichever list is not empty.
    current.next = p1 or p2
    
    return dummy_head.next`
    },
    {
      problem: 'Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.',
      solution: 'backtracking',
      difficulty: 'Easy',
      input: 'nums = [2,2,1]',
      output: '1',
      explanation: 'Math trick: XORing a number with itself is 0, and XORing with 0 doesn\'t change the value. By XORing all elements, duplicates cancel out.',
      pythonSolution: `def singleNumber(nums):
    """
    Problem: In an array where every element appears twice except one, find that single one.
    """
    # The XOR bitwise operator has the property that A ^ A = 0 and A ^ 0 = A.
    # By XORing all numbers, the pairs cancel out, leaving only the single number.
    result = 0
    for num in nums:
        result ^= num
    return result`
    },
    {
      problem: 'Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.',
      solution: 'binary-search',
      difficulty: 'Easy',
      input: 'n = 16',
      output: 'true',
      explanation: 'Bit trick: a power of 2 has only one bit set to 1. So, n & (n-1) == 0. We can also use repeated division or logarithms.',
      pythonSolution: `def isPowerOfTwo(n):
    """
    Problem: Check if an integer is a power of two.
    """
    # A power of two in binary is a 1 followed by all 0s (e.g., 16 is 10000).
    # Subtracting 1 flips all bits up to that 1 (e.g., 15 is 01111).
    # The bitwise AND of these two numbers will be 0.
    # We also need to check if n is positive.
    return n > 0 and (n & (n - 1)) == 0`
    },
    {
      problem: 'Reverse a singly linked list.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'head = [1,2,3,4,5]',
      output: '[5,4,3,2,1]',
      explanation: 'We use three pointers: prev, current, and next. We iteratively change the direction of the next pointers, keeping track of the next node.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    """
    Problem: Reverse a singly linked list.
    """
    prev_node = None
    current_node = head
    
    while current_node:
        # Store the next node before we overwrite the pointer.
        next_node = current_node.next
        # Reverse the pointer of the current node.
        current_node.next = prev_node
        # Move pointers one step forward.
        prev_node = current_node
        current_node = next_node
        
    # At the end, prev_node will be the new head.
    return prev_node`
    },
    {
      problem: 'Given the `root` of a binary tree, invert the tree, and return its root.',
      solution: 'dfs',
      difficulty: 'Easy',
      input: 'root = [4,2,7,1,3,6,9]',
      output: '[4,7,2,9,6,3,1]',
      explanation: 'To invert, we recursively swap the left and right children of each node. We can use recursive DFS or iterative with a queue.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root):
    """
    Problem: Invert a binary tree.
    """
    # Base case for the recursion.
    if not root:
        return None
    
    # Swap the left and right children.
    root.left, root.right = root.right, root.left
    
    # Recursively invert the left and right subtrees.
    invertTree(root.left)
    invertTree(root.right)
    
    return root`
    },
    {
      problem: 'Write a function that takes the binary representation of an unsigned integer and returns the number of \'1\' bits it has (also known as the Hamming weight).',
      solution: 'sliding-window',
      difficulty: 'Easy',
      input: 'n = 11 (binary: 1011)',
      output: '3',
      explanation: 'We can use bit manipulation, convert to a binary string, or use the built-in function. The bit shifting approach is more efficient.',
      pythonSolution: `def hammingWeight(n):
    """
    Problem: Count the number of '1' bits in the binary representation of an integer.
    """
    count = 0
    while n:
        # This operation (n & n-1) cleverly removes the rightmost '1' bit.
        # The loop runs exactly as many times as there are '1' bits.
        n &= n - 1
        count += 1
    return count`
    },
    {
      problem: 'Given a string `s` consisting of words and spaces, return the length of the last word in the string.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 's = "Hello World"',
      output: '5',
      explanation: 'We can iterate from the back, or split the string into words. The two-pointer approach is more space-efficient.',
      pythonSolution: `def lengthOfLastWord(s):
    """
    Problem: Find the length of the last word in a string.
    """
    # .strip() removes leading/trailing spaces.
    # .split() creates a list of words.
    # [-1] gets the last word from the list.
    words = s.strip().split()
    return len(words[-1]) if words else 0`
    },
    {
      problem: 'Given a binary tree, determine if it is a valid binary search tree (BST).',
      solution: 'dfs',
      difficulty: 'Easy',
      input: 'root = [2,1,3]',
      output: 'true',
      explanation: 'In a BST, all nodes in the left subtree must be smaller than the current node, and all in the right must be larger. We use DFS with min/max bounds.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    """
    Problem: Determine if a binary tree is a valid Binary Search Tree (BST).
    """
    def validate(node, low, high):
        # An empty tree is a valid BST.
        if not node:
            return True
        
        # The current node's value must be within the valid range.
        if not (low < node.val < high):
            return False
        
        # Recursively validate the left and right subtrees,
        # updating the bounds accordingly.
        return (validate(node.left, low, node.val) and
                validate(node.right, node.val, high))
    
    # Start with an infinite range.
    return validate(root, float('-inf'), float('inf'))`
    },
    {
      problem: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'We can use a hashmap to store values we\'ve seen, or sort and use two pointers. The hashmap is O(n), while two pointers after sorting is O(n log n).',
      pythonSolution: `def twoSum(nums, target):
    """
    Problem: Given an array of integers, find the indices of two numbers
    that add up to a specific target.
    """
    # Use a hash map to store seen numbers and their indices.
    num_to_index = {}
    
    for i, num in enumerate(nums):
        # Calculate the complement needed to reach the target.
        complement = target - num
        # If the complement is in our map, we've found a solution.
        if complement in num_to_index:
            return [num_to_index[complement], i]
        # Otherwise, store the current number and its index.
        num_to_index[num] = i
    
    return []`
    },
    {
      problem: 'Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.',
      solution: 'backtracking',
      difficulty: 'Easy',
      input: 's = "()[]{}"',
      output: 'true',
      explanation: 'We use a stack. For each opening bracket, we push it. For each closing bracket, we check if it matches the top of the stack. In the end, the stack should be empty.',
      pythonSolution: `def isValid(s):
    """
    Problem: Check if a string of brackets is valid (well-formed).
    """
    # A map of closing to opening brackets.
    mapping = {')': '(', '}': '{', ']': '['}
    # A stack to keep track of opening brackets.
    stack = []
    
    for char in s:
        # If it's a closing bracket...
        if char in mapping:
            # The stack must not be empty, and the top must be the matching opening bracket.
            if not stack or stack.pop() != mapping[char]:
                return False
        # If it's an opening bracket, push it onto the stack.
        else:
            stack.append(char)
    
    # If the stack is empty at the end, all brackets were matched.
    return not stack`
    },
    {
      problem: 'Implement a first in, first out (FIFO) queue using only two stacks.',
      solution: 'heap',
      difficulty: 'Easy',
      input: 'operations = ["MyQueue", "push", "push", "peek", "pop", "empty"]',
      output: '[null, null, null, 1, 1, false]',
      explanation: 'We use two stacks: one for input and one for output. When we need to pop/peek, we transfer elements from the input stack to the output stack.',
      pythonSolution: `class MyQueue:
    """
    Problem: Implement a FIFO queue using two LIFO stacks.
    """
    def __init__(self):
        self.stack_in = []
        self.stack_out = []
    
    def push(self, x):
        # All pushes go to the input stack.
        self.stack_in.append(x)
    
    def _transfer_if_needed(self):
        # If the output stack is empty, transfer all elements
        # from the input stack. This reverses their order, achieving FIFO.
        if not self.stack_out:
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())

    def pop(self):
        self._transfer_if_needed()
        return self.stack_out.pop()
    
    def peek(self):
        self._transfer_if_needed()
        return self.stack_out[-1]
    
    def empty(self):
        return not self.stack_in and not self.stack_out`
    },
    {
      problem: 'Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and returns the new length.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [1,1,2]',
      output: '2 (nums = [1,2,_])',
      explanation: 'We use two pointers: a slow pointer for the writing position and a fast pointer for reading. When we find a different element, we copy it to the slow pointer position.',
      pythonSolution: `def removeDuplicates(nums):
    """
    Problem: Remove duplicates from a sorted array in-place.
    """
    if not nums:
        return 0
    
    # 'write_index' points to the position where the next unique element should be placed.
    write_index = 1
    
    for read_index in range(1, len(nums)):
        # If we find an element that is different from the previous one...
        if nums[read_index] != nums[read_index - 1]:
            # ...we place it at the 'write_index' position.
            nums[write_index] = nums[read_index]
            write_index += 1
    
    return write_index`
    },
    {
      problem: 'Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'x = 121',
      output: 'true',
      explanation: 'We can convert to a string and use two pointers, or mathematically reverse half the number. The mathematical approach is more space-efficient.',
      pythonSolution: `def isPalindrome(x):
    """
    Problem: Check if an integer is a palindrome without converting to string.
    """
    # Negative numbers and numbers ending in 0 (but not 0 itself) are not palindromes.
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
    
    reversed_half = 0
    # Reverse the second half of the number.
    while x > reversed_half:
        reversed_half = reversed_half * 10 + x % 10
        x //= 10
        
    # For odd-length numbers, the middle digit doesn't matter (x == reversed_half // 10).
    # For even-length numbers, the two halves must be equal.
    return x == reversed_half or x == reversed_half // 10`
    },
    {
      problem: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
      solution: 'bfs',
      difficulty: 'Easy',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[9,20],[15,7]]',
      explanation: 'BFS using a queue. We process node by node, level by level. We use a loop to process all nodes of the current level before moving to the next.',
      pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root):
    """
    Problem: Perform a level order traversal of a binary tree.
    """
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        # Get the number of nodes at the current level.
        level_size = len(queue)
        current_level = []
        
        # Process all nodes at the current level.
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            
            # Add children to the queue for the next level.
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result`
    },
    {
      problem: 'Given an array `nums`, write a function to move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.',
      solution: 'two-pointers',
      difficulty: 'Easy',
      input: 'nums = [0,1,0,3,12]',
      output: '[1,3,12,0,0]',
      explanation: 'We use two pointers: one to write non-zero elements and another to read. Afterwards, we fill the rest with zeros.',
      pythonSolution: `def moveZeroes(nums):
    """
    Problem: Move all zeros to the end of an array while maintaining
    the relative order of other elements.
    """
    # 'write_index' is the position for the next non-zero element.
    write_index = 0
    
    # First pass: move all non-zero elements to the front.
    for read_index in range(len(nums)):
        if nums[read_index] != 0:
            nums[write_index] = nums[read_index]
            write_index += 1
            
    # Second pass: fill the rest of the array with zeros.
    for i in range(write_index, len(nums)):
        nums[i] = 0`
    },
    {
      problem: 'Find the kth largest element in an unsorted array.',
      solution: 'heap',
      difficulty: 'Easy',
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      explanation: 'We can use a min-heap of size k, sorting, or quickselect. The heap keeps the k largest elements, with the k-th largest at the top.',
      pythonSolution: `import heapq

def findKthLargest(nums, k):
    """
    Problem: Find the k-th largest element in an unsorted array.
    """
    # A min-heap is perfect for this. We keep a heap of size k.
    # When a new number comes, if it's larger than the smallest
    # in the heap, we replace the smallest.
    heap = []
    
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
            
    # The root of the heap is the k-th largest element.
    return heap[0]`
    },
    {
      problem: 'Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
      solution: 'sliding-window',
      difficulty: 'Easy',
      input: 's = "leetcode"',
      output: '0',
      explanation: 'We do two passes: the first one counts the frequency of each character, the second one finds the first character with a frequency of 1.',
      pythonSolution: `from collections import Counter

def firstUniqChar(s):
    """
    Problem: Find the first non-repeating character in a string and return its index.
    """
    # First, count the frequency of all characters.
    char_count = Counter(s)
    
    # Second, iterate through the string to find the first
    # character with a count of 1.
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
            
    return -1`
    },
    { problem: 'Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.', solution: 'dfs', difficulty: 'Easy',
      input: 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22',
      output: 'true',
      explanation: 'The path 5->4->11->2 has a sum of 22. We use DFS, subtracting the node value from the sum at each level. At a leaf, we check if the remaining sum is zero.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def hasPathSum(root, targetSum):
    """
    Problem: Check if a root-to-leaf path with a given sum exists in a binary tree.
    """
    if not root:
        return False
    
    # If it's a leaf node, check if its value equals the remaining sum.
    is_leaf = not root.left and not root.right
    if is_leaf:
        return targetSum == root.val
    
    # Recursively check the left and right subtrees with the updated sum.
    return (hasPathSum(root.left, targetSum - root.val) or
            hasPathSum(root.right, targetSum - root.val))`
    },
    { problem: 'You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list.', solution: 'two-pointers', difficulty: 'Easy',
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      explanation: 'We use two pointers, one for each list. We create a new list and, at each step, append the smaller of the two nodes from list1 and list2, then advance the corresponding pointer.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    """
    Problem: Merge two sorted linked lists into one sorted list.
    """
    dummy = ListNode()
    tail = dummy
    
    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next
        
    # Append the remainder of the non-empty list.
    tail.next = list1 or list2
    
    return dummy.next`
    },
    { problem: 'Given an array of `n` integers, where `n` > 1, `nums`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.', solution: 'dynamic-programming', difficulty: 'Easy',
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'We can solve this in O(n) time and O(1) space (excluding the output array). We make two passes. The first pass calculates the product of all elements to the left of each index. The second pass multiplies this by the product of all elements to the right.',
      pythonSolution: `def productExceptSelf(nums):
    """
    Problem: Given an array, return a new array where each element is the
    product of all other elements in the original array.
    """
    n = len(nums)
    answer = [1] * n
    
    # First pass: calculate left products and store in the answer array.
    left_product = 1
    for i in range(n):
        answer[i] = left_product
        left_product *= nums[i]
        
    # Second pass: calculate right products and multiply with the result.
    right_product = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= right_product
        right_product *= nums[i]
        
    return answer`
    },
    { problem: 'Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.', solution: 'two-pointers', difficulty: 'Easy',
      input: 'x = 121',
      output: 'true',
      explanation: 'The simplest way is to convert the integer to a string. Then, we can use two pointers, one at the beginning and one at the end, moving towards the center and checking if the characters match.',
      pythonSolution: `def isPalindrome(x):
    """
    Problem: Check if an integer is a palindrome.
    """
    # Negative numbers cannot be palindromes.
    if x < 0:
        return False
    
    # Convert to string and check if it's equal to its reverse.
    s = str(x)
    return s == s[::-1]`
    },
    // Medium
    {
      problem: 'Generate all valid combinations of parentheses for a given number of pairs.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      explanation: 'We use backtracking to generate all combinations. We keep track of open and closed parentheses. We only add "(" if we still have pairs available, and ")" if there are more open than closed.',
      pythonSolution: `def generateParenthesis(n):
    """
    Problem: Generate all combinations of well-formed parentheses for n pairs.
    """
    result = []
    
    def backtrack(current_string, open_count, close_count):
        # Base case: the string is complete.
        if len(current_string) == 2 * n:
            result.append(current_string)
            return
        
        # We can add an opening bracket if we haven't used all n pairs.
        if open_count < n:
            backtrack(current_string + "(", open_count + 1, close_count)
        
        # We can add a closing bracket if it doesn't invalidate the sequence.
        if close_count < open_count:
            backtrack(current_string + ")", open_count, close_count)
    
    backtrack("", 0, 0)
    return result`
    },
    {
      problem: 'Given a list of islands (represented by "1"s) and water (represented by "0"s), count the total number of distinct islands.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: '3',
      explanation: 'For each unvisited "1" cell, we perform a DFS to mark the entire connected island. Each initiated DFS counts as one island.',
      pythonSolution: `def numIslands(grid):
    """
    Problem: Count the number of islands in a 2D grid of '1's (land) and '0's (water).
    """
    if not grid or not grid[0]:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    def dfs(r, c):
        # Check boundaries and if it's water or already visited.
        if (r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1'):
            return
        
        # Mark the cell as visited by changing its value.
        grid[r][c] = '#'
        
        # Explore all 4 directions.
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    # Iterate through each cell of the grid.
    for r in range(rows):
        for c in range(cols):
            # If we find a new piece of land, it's a new island.
            if grid[r][c] == '1':
                dfs(r, c)
                islands += 1
    
    return islands`
    },
    {
      problem: 'You are on a 2D grid and need to find the shortest path from a starting point to an ending point, avoiding obstacles.',
      solution: 'bfs',
      difficulty: 'Medium',
      input: 'grid = [[0,0,0],[1,1,0],[0,0,0]], start = [0,0], end = [2,2]',
      output: '4',
      explanation: 'BFS explores in layers, guaranteeing the shortest path. We use a queue to process positions and a visited set to avoid cycles. We return the distance when we reach the destination.',
      pythonSolution: `from collections import deque

def shortestPath(grid, start, end):
    """
    Problem: Find the shortest path in a grid from a start to an end point.
    """
    rows, cols = len(grid), len(grid[0])
    # Queue stores (row, col, distance).
    queue = deque([(start[0], start[1], 0)])
    visited = {(start[0], start[1])}
    
    directions = [(-1,0), (1,0), (0,-1), (0,1)]
    
    while queue:
        row, col, dist = queue.popleft()
        
        if [row, col] == end:
            return dist
        
        for dr, dc in directions:
            new_row, new_col = row + dr, col + dc
            
            # Check if the new position is valid and unvisited.
            if (0 <= new_row < rows and 0 <= new_col < cols and 
                grid[new_row][new_col] == 0 and 
                (new_row, new_col) not in visited):
                
                visited.add((new_row, new_col))
                queue.append((new_row, new_col, dist + 1))
    
    return -1 # Path not found`
    },
    {
      problem: 'Given an array of integers, find the subarray with the largest sum, and return its sum.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'Kadane\'s Algorithm: we use dynamic programming to keep track of the maximum sum ending at the current position. If the current sum becomes negative, we reset it to 0.',
      pythonSolution: `def maxSubArray(nums):
    """
    Problem: Find the contiguous subarray with the largest sum.
    """
    # Kadane's Algorithm
    max_so_far = nums[0]
    current_max = nums[0]
    
    for i in range(1, len(nums)):
        # For each element, we decide:
        # 1. Start a new subarray here (nums[i])
        # 2. Extend the existing subarray (current_max + nums[i])
        current_max = max(nums[i], current_max + nums[i])
        # Update the overall maximum sum found so far.
        max_so_far = max(max_so_far, current_max)
    
    return max_so_far`
    },
    {
      problem: 'Given an array of strings, group the anagrams together. You can return the answer in any order.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      explanation: 'We group by a key: either sorted strings or character counts. Words with the same key are anagrams.',
      pythonSolution: `from collections import defaultdict

def groupAnagrams(strs):
    """
    Problem: Group anagrams together from a list of strings.
    """
    # Anagrams become identical when their characters are sorted.
    # We can use the sorted string as a key in a hash map.
    groups = defaultdict(list)
    
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    
    return list(groups.values())`
    },
    {
      problem: 'Given a linked list, return the node where the cycle begins. If there is no cycle, return null.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'head = [3,2,0,-4], pos = 1',
      output: 'node at index 1',
      explanation: 'Floyd\'s Algorithm: use two pointers (slow and fast) to detect a cycle. Then, use math to find the start of the cycle.',
      pythonSolution: `class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def detectCycle(head):
    """
    Problem: Find the node where a cycle begins in a linked list.
    """
    slow = fast = head
    
    # Phase 1: Detect if a cycle exists.
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            # Cycle detected.
            # Phase 2: Find the cycle's start.
            # Reset one pointer to the head and move both one step at a time.
            # They will meet at the cycle's start.
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow
            
    # No cycle found.
    return None`
    },
    {
      problem: 'Given an `m x n` 2D binary grid `grid` which represents a map of `1`s (land) and `0`s (water), return the number of islands.',
      solution: 'dfs',
      difficulty: 'Medium',
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: '3',
      explanation: 'For each unvisited "1" cell, we perform a DFS to mark the entire connected island. Each initiated DFS counts as one island.',
      pythonSolution: `def numIslands(grid):
    """
    Problem: Count the number of islands in a grid.
    """
    if not grid or not grid[0]: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        # Base cases for recursion: out of bounds or water.
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
            return
        # Mark as visited to avoid recounting.
        grid[r][c] = '#'
        # Explore neighbors.
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count`
    },
    {
      problem: 'You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount.',
      solution: 'dynamic-programming',
      difficulty: 'Medium',
      input: 'coins = [1,3,4], amount = 6',
      output: '2',
      explanation: 'Bottom-up DP: for each amount i, we try each coin and take the minimum of dp[i-coin] + 1. We initialize dp[0] = 0 and the rest to infinity.',
      pythonSolution: `def coinChange(coins, amount):
    """
    Problem: Find the fewest number of coins to make up a certain amount.
    """
    # dp[i] will be storing the minimum number of coins required for amount i.
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0 # Base case: 0 coins for amount 0.
    
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                # The number of coins for amount 'i' is the minimum of
                # its current value and 1 + the coins for 'i - coin'.
                dp[i] = min(dp[i], 1 + dp[i - coin])
    
    return dp[amount] if dp[amount] != float('inf') else -1`
    },
    {
      problem: 'Given a string `s`, find the longest palindromic substring in `s`.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 's = "babad"',
      output: '"bab"',
      explanation: 'We expand around each possible center (single character and between characters). For each center, we expand as long as the characters are equal.',
      pythonSolution: `def longestPalindrome(s):
    """
    Problem: Find the longest palindromic substring in a string.
    """
    res = ""
    resLen = 0

    def expand_around_center(l, r):
        nonlocal res, resLen
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if (r - l + 1) > resLen:
                res = s[l:r+1]
                resLen = r - l + 1
            l -= 1
            r += 1

    for i in range(len(s)):
        # Odd length palindromes (center is a single character)
        expand_around_center(i, i)
        # Even length palindromes (center is between two characters)
        expand_around_center(i, i + 1)
        
    return res`
    },
    {
      problem: 'Given an array of `n` positive integers and a positive integer `s`, find the minimal length of a contiguous subarray of which the sum ≥ `s`. If there isn\'t one, return 0 instead.',
      solution: 'sliding-window',
      difficulty: 'Medium',
      input: 'target = 7, nums = [2,3,1,2,4,3]',
      output: '2',
      explanation: 'We use a sliding window: expand the window until the sum ≥ target, then shrink from the beginning as long as the condition holds.',
      pythonSolution: `def minSubArrayLen(target, nums):
    """
    Problem: Find the minimal length of a subarray with a sum >= target.
    """
    left, total = 0, 0
    min_len = float('inf')

    for right in range(len(nums)):
        total += nums[right]
        # Once the sum is >= target, try to shrink the window from the left.
        while total >= target:
            min_len = min(min_len, right - left + 1)
            total -= nums[left]
            left += 1
    
    return 0 if min_len == float('inf') else min_len`
    },
    {
      problem: 'Given a set of distinct integers, `nums`, return all possible subsets (the power set).',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
      explanation: 'We use backtracking to explore all possibilities: for each element, we decide whether to include it in the current subset or not.',
      pythonSolution: `def subsets(nums):
    """
    Problem: Find all possible subsets (the power set) of a given set of integers.
    """
    res = []
    subset = []

    def dfs(i):
        # Base case: if we have considered all numbers.
        if i >= len(nums):
            res.append(subset.copy())
            return
        
        # Decision 1: Include nums[i] in the subset.
        subset.append(nums[i])
        dfs(i + 1)

        # Decision 2: Do NOT include nums[i] in the subset (backtrack).
        subset.pop()
        dfs(i + 1)
    
    dfs(0)
    return res`
    },
    { problem: 'Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.', solution: 'dfs', difficulty: 'Medium',
      input: 'commands = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext"] on tree [7, 3, 15, null, null, 9, 20]',
      output: '[null, 3, 7, true, 9, true, 15, true, 20, false]',
      explanation: 'We can perform an in-order traversal of the BST and store the node values in a list. The iterator then simply traverses this list.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BSTIterator:
    """
    Problem: Implement an iterator for an in-order traversal of a BST.
    """
    def __init__(self, root: TreeNode):
        # The stack will store nodes to simulate the recursion of an in-order traversal.
        self.stack = []
        self._push_all_left(root)

    def _push_all_left(self, node):
        # Helper to push all left children of a node onto the stack.
        while node:
            self.stack.append(node)
            node = node.left

    def next(self) -> int:
        # The top of the stack is the next smallest element.
        next_node = self.stack.pop()
        # Before returning, we must push all left children of its right child.
        if next_node.right:
            self._push_all_left(next_node.right)
        return next_node.val

    def hasNext(self) -> bool:
        # The iterator has a next element if the stack is not empty.
        return len(self.stack) > 0`
    },
    {
      problem: 'Given a 2D grid of characters and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
      output: 'true',
      explanation: 'We use DFS/backtracking: for each cell, we try to form the word, marking visited cells and unmarking them upon backtracking.',
      pythonSolution: `def exist(board, word):
    """
    Problem: Find if a word exists in a grid of characters.
    """
    ROWS, COLS = len(board), len(board[0])
    path = set()

    def dfs(r, c, i):
        # Base case: we have found all characters of the word.
        if i == len(word):
            return True
        # Base case: out of bounds, wrong character, or already visited.
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or
            word[i] != board[r][c] or (r, c) in path):
            return False

        path.add((r,c))
        # Explore all 4 directions.
        res = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or
               dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
        # Backtrack: remove the cell from the current path.
        path.remove((r, c))
        return res

    for r in range(ROWS):
        for c in range(COLS):
            if dfs(r, c, 0): return True
    return False`
    },
    { problem: 'Find the kth smallest element in a Binary Search Tree.', solution: 'heap', difficulty: 'Medium',
      input: 'root = [3,1,4,null,2], k = 1',
      output: '1',
      explanation: 'An in-order traversal of a BST visits nodes in ascending order. We can perform an in-order traversal and stop once we have visited k nodes.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthSmallest(root, k):
    """
    Problem: Find the k-th smallest element in a BST.
    """
    # An iterative in-order traversal is efficient.
    stack = []
    
    while True:
        # Go as far left as possible.
        while root:
            stack.append(root)
            root = root.left
        # Pop the most recently added node (the smallest).
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        # Move to the right subtree to find the next smallest.
        root = root.right`
    },
    { problem: 'Given a binary tree, populate each `next` pointer to point to its next right node. If there is no next right node, the `next` pointer should be set to `NULL`.', solution: 'bfs', difficulty: 'Medium',
      input: 'root = [1,2,3,4,5,6,7]',
      output: 'A tree where each node points to its right sibling.',
      explanation: 'We can use BFS to traverse the tree level by level. For each level, we iterate through the nodes and set the `next` pointer of the current node to the next node in the queue.',
      pythonSolution: `from collections import deque

class Node:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

def connect(root: 'Node') -> 'Node':
    """
    Problem: Populate the 'next' pointer for each node in a binary tree.
    """
    if not root:
        return None
    
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        for i in range(level_size):
            node = queue.popleft()
            
            # If it's not the last node of the level, set its next pointer.
            if i < level_size - 1:
                node.next = queue[0]
                
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return root`
    },
    { problem: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.', solution: 'backtracking', difficulty: 'Medium',
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      explanation: 'We use backtracking. We build a combination character by character. For each digit, we iterate through its possible letters and make a recursive call for the next digit.',
      pythonSolution: `def letterCombinations(digits):
    """
    Problem: Find all possible letter combinations from a phone number string.
    """
    if not digits:
        return []
        
    phone_map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }
    
    def backtrack(index, path):
        # Base case: we have a complete combination.
        if index == len(digits):
            combinations.append("".join(path))
            return
        
        # Iterate through the letters for the current digit.
        possible_letters = phone_map[digits[index]]
        for letter in possible_letters:
            path.append(letter)
            backtrack(index + 1, path)
            path.pop() # Backtrack
            
    combinations = []
    backtrack(0, [])
    return combinations`
    },
    { problem: 'You are given an array of integers. A subsequence of this array is considered a valid mountain array if it is first increasing, then decreasing.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'nums = [2,1,1,5,6,2,3,1]',
      output: '5 (from [1,5,6,3,1])',
      explanation: 'We can use two DP arrays. `up[i]` stores the length of the longest increasing subsequence ending at `i`. `down[i]` stores the length of the longest decreasing subsequence starting at `i`. The answer is the maximum of `up[i] + down[i] - 1`.',
      pythonSolution: `def longestMountain(nums):
    """
    Problem: Find the length of the longest mountain subarray.
    """
    n = len(nums)
    if n < 3:
        return 0
        
    # up[i] = length of increasing slope ending at i
    up = [0] * n
    # down[i] = length of decreasing slope starting at i
    down = [0] * n
    
    for i in range(1, n):
        if nums[i] > nums[i-1]:
            up[i] = up[i-1] + 1
            
    for i in range(n-2, -1, -1):
        if nums[i] > nums[i+1]:
            down[i] = down[i+1] + 1
            
    max_len = 0
    # A mountain must have both an up and a down slope.
    for i in range(n):
        if up[i] > 0 and down[i] > 0:
            max_len = max(max_len, up[i] + down[i] + 1)
            
    return max_len`
    },
    { problem: 'Given an unsorted array of integers, find the length of the longest consecutive elements sequence.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'nums = [100,4,200,1,3,2]',
      output: '4 (from [1,2,3,4])',
      explanation: 'We can convert the array to a set for O(1) lookups. Then, for each number, we check if it is the start of a sequence (i.e., `num-1` is not in the set). If it is, we count how long the sequence is.',
      pythonSolution: `def longestConsecutive(nums):
    """
    Problem: Find the length of the longest consecutive elements sequence.
    """
    num_set = set(nums)
    longest_streak = 0
    
    for num in num_set:
        # Check if it's the start of a sequence.
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1
            
            # Count the length of the sequence.
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1
                
            longest_streak = max(longest_streak, current_streak)
            
    return longest_streak`
    },
    {
      problem: 'Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
      solution: 'backtracking',
      difficulty: 'Medium',
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      explanation: 'We use backtracking: add "(" if open < n, add ")" if close < open. This ensures we never have more ")" than "(" at any point.',
      pythonSolution: `def generateParenthesis(n):
    """
    Problem: Generate all combinations of well-formed parentheses.
    """
    stack = []
    res = []

    def backtrack(openN, closedN):
        if openN == closedN == n:
            res.append("".join(stack))
            return

        if openN < n:
            stack.append("(")
            backtrack(openN + 1, closedN)
            stack.pop()
        
        if closedN < openN:
            stack.append(")")
            backtrack(openN, closedN + 1)
            stack.pop()

    backtrack(0, 0)
    return res`
    },
    { problem: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.', solution: 'dfs', difficulty: 'Medium',
      input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
      output: '3',
      explanation: 'We perform a recursive DFS. If the current node is one of p or q, we return it. We then check the left and right subtrees. If both return a non-null value, the current node is the LCA. Otherwise, we return the non-null value from the left or right subtree.',
      pythonSolution: `class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root, p, q):
    """
    Problem: Find the Lowest Common Ancestor (LCA) of two nodes in a binary tree.
    """
    # Base case: if root is null or one of the nodes, it is the LCA.
    if not root or root == p or root == q:
        return root
        
    # Recurse on left and right subtrees.
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    # If both subtrees return a node, the current root is the LCA.
    if left and right:
        return root
    
    # Otherwise, the LCA is in the subtree that returned a node.
    return left or right`
    },
    { problem: 'Given a sorted array of integers `nums` and an integer `target`, search for `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1.', solution: 'binary-search', difficulty: 'Medium',
      input: 'nums = [-1,0,3,5,9,12], target = 9',
      output: '4',
      explanation: 'This is a classic binary search problem. We maintain left and right pointers and repeatedly check the middle element. If the middle element is the target, we return its index. If it is smaller, we search the right half; otherwise, we search the left half.',
      pythonSolution: `def search(nums, target):
    """
    Problem: Search for a target in a sorted array.
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1`
    },
    { problem: 'Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.', solution: 'backtracking', difficulty: 'Medium',
      input: 'candidates = [2,3,6,7], target = 7',
      output: '[[2,2,3],[7]]',
      explanation: 'We use backtracking. We sort the candidates to handle duplicates. For each number, we have two choices: either include it in the current combination (and recurse) or skip it.',
      pythonSolution: `def combinationSum(candidates, target):
    """
    Problem: Find all unique combinations in a set of candidates that sum to a target.
    Candidates can be reused.
    """
    res = []
    
    def backtrack(start_index, combination, current_sum):
        if current_sum == target:
            res.append(list(combination))
            return
        if current_sum > target:
            return
        
        for i in range(start_index, len(candidates)):
            combination.append(candidates[i])
            # We can reuse the same element, so we pass 'i' not 'i+1'.
            backtrack(i, combination, current_sum + candidates[i])
            combination.pop() # Backtrack
            
    backtrack(0, [], 0)
    return res`
    },
    { problem: 'Given a non-empty string `s` and a dictionary `wordDict` containing a list of non-empty words, determine if `s` can be segmented into a space-separated sequence of one or more dictionary words.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 's = "leetcode", wordDict = ["leet","code"]',
      output: 'true',
      explanation: 'We use dynamic programming. We create a DP array where `dp[i]` is true if the substring `s[0...i-1]` can be segmented. To compute `dp[i]`, we check if `dp[j]` is true and the substring `s[j...i-1]` is in the dictionary, for all `j < i`.',
      pythonSolution: `def wordBreak(s, wordDict):
    """
    Problem: Check if a string can be segmented into a sequence of dictionary words.
    """
    word_set = set(wordDict)
    # dp[i] is True if s[:i] can be segmented.
    dp = [False] * (len(s) + 1)
    dp[0] = True # Base case: empty string
    
    for i in range(1, len(s) + 1):
        for j in range(i):
            # Check if the prefix s[:j] is valid and the suffix s[j:i] is in the dictionary.
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
                
    return dp[len(s)]`
    },
    { problem: 'Given a linked list, rotate the list to the right by `k` places.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'head = [1,2,3,4,5], k = 2',
      output: '[4,5,1,2,3]',
      explanation: 'We can first find the length of the list and connect the tail to the head to form a cycle. Then, we find the new tail, which is at position `length - k - 1`, and break the cycle.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rotateRight(head, k):
    """
    Problem: Rotate a linked list to the right by k places.
    """
    if not head or not head.next or k == 0:
        return head
        
    # 1. Find the length and the last node.
    last_node = head
    length = 1
    while last_node.next:
        last_node = last_node.next
        length += 1
        
    # 2. Adjust k.
    k = k % length
    if k == 0:
        return head
        
    # 3. Form a cycle.
    last_node.next = head
    
    # 4. Find the new tail (node before the new head).
    new_tail = head
    for _ in range(length - k - 1):
        new_tail = new_tail.next
        
    # 5. Break the cycle.
    new_head = new_tail.next
    new_tail.next = None
    
    return new_head`
    },
    { problem: 'Given an array with `n` objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'nums = [2,0,2,1,1,0] (0=red, 1=white, 2=blue)',
      output: '[0,0,1,1,2,2]',
      explanation: 'This is the Dutch National Flag problem. We use three pointers: `low`, `mid`, and `high`. We iterate with `mid`. If `nums[mid]` is 0, we swap it with `nums[low]` and increment both. If it is 1, we just increment `mid`. If it is 2, we swap it with `nums[high]` and decrement `high`.',
      pythonSolution: `def sortColors(nums):
    """
    Problem: Sort an array of 0s, 1s, and 2s in-place (Dutch National Flag problem).
    """
    low, mid, high = 0, 0, len(nums) - 1
    
    while mid <= high:
        if nums[mid] == 0: # Red
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1: # White
            mid += 1
        else: # Blue
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1`
    },
    { problem: 'Given a `m x n` grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7 (path 1→3→1→1→1)',
      explanation: 'We use dynamic programming. Let `dp[i][j]` be the minimum path sum to reach cell `(i,j)`. The recurrence relation is `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`. We can optimize this to use O(1) extra space by modifying the grid in-place.',
      pythonSolution: `def minPathSum(grid):
    """
    Problem: Find the minimum path sum from top-left to bottom-right in a grid.
    """
    rows, cols = len(grid), len(grid[0])
    
    # Update first row (can only come from the left).
    for j in range(1, cols):
        grid[0][j] += grid[0][j-1]
        
    # Update first column (can only come from above).
    for i in range(1, rows):
        grid[i][0] += grid[i-1][0]
        
    # Update the rest of the grid.
    for i in range(1, rows):
        for j in range(1, cols):
            grid[i][j] += min(grid[i-1][j], grid[i][j-1])
            
    return grid[-1][-1]`
    },
    { problem: 'You are given an `m x n` `grid` where `grid[i][j]` is either `0` (representing water) or `1` (representing land). An island is a group of `1`s connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water. The area of an island is the number of cells with a value `1` in the island. Return the maximum area of an island in `grid`. If there is no island, return `0`.', solution: 'dfs', difficulty: 'Medium',
      input: 'grid = [[0,0,1,0,0...],[...],[...]]',
      output: '6',
      explanation: 'We iterate through the grid. When we find a `1`, we start a DFS to explore the entire island. The DFS function will count the number of cells in the current island and mark them as visited (e.g., by changing them to `0`). We keep track of the maximum area found.',
      pythonSolution: `def maxAreaOfIsland(grid):
    """
    Problem: Find the maximum area of an island in a grid.
    """
    rows, cols = len(grid), len(grid[0])
    max_area = 0
    
    def dfs(r, c):
        if not (0 <= r < rows and 0 <= c < cols and grid[r][c] == 1):
            return 0
        
        # Mark as visited.
        grid[r][c] = 0
        
        # Return 1 (for the current cell) + area of neighbors.
        return (1 + dfs(r+1, c) + dfs(r-1, c) +
                    dfs(r, c+1) + dfs(r, c-1))
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                max_area = max(max_area, dfs(r, c))
                
    return max_area`
    },
    {
      problem: 'Given a list of non-negative integers representing the elevations of a map where the width of each bar is 1, compute how much water it can trap after raining.',
      solution: 'two-pointers',
      difficulty: 'Medium',
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'We use two pointers: the water that can be trapped at each position is determined by the smaller of the max heights to the left and right.',
      pythonSolution: `def trap(height):
    """
    Problem: Calculate the amount of rainwater that can be trapped between bars.
    """
    if not height: return 0
    l, r = 0, len(height) - 1
    leftMax, rightMax = height[l], height[r]
    res = 0

    while l < r:
        # Move the pointer with the smaller max height.
        if leftMax < rightMax:
            l += 1
            leftMax = max(leftMax, height[l])
            # Water trapped at 'l' is determined by the shorter wall (leftMax).
            res += leftMax - height[l]
        else:
            r -= 1
            rightMax = max(rightMax, height[r])
            # Water trapped at 'r' is determined by the shorter wall (rightMax).
            res += rightMax - height[r]
    return res`
    },
    { problem: 'Given a binary tree, return the zigzag level order traversal of its nodes\' values. (i.e., from left to right, then right to left for the next level and alternate between).', solution: 'bfs', difficulty: 'Medium',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[20,9],[15,7]]',
      explanation: 'We use BFS with a queue. We keep track of the current level. For each level, we decide the direction of traversal. If it is left-to-right, we append nodes to the level list normally. If it is right-to-left, we append to the beginning of the list.',
      pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzagLevelOrder(root):
    """
    Problem: Perform a zigzag level order traversal of a binary tree.
    """
    if not root:
        return []
    
    queue = deque([root])
    result = []
    left_to_right = True
    
    while queue:
        level_size = len(queue)
        current_level = deque()
        
        for _ in range(level_size):
            node = queue.popleft()
            
            if left_to_right:
                current_level.append(node.val)
            else:
                current_level.appendleft(node.val)
                
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
        result.append(list(current_level))
        left_to_right = not left_to_right
        
    return result`
    },
    { problem: 'Given a string, determine if it is a valid palindrome, considering only alphanumeric characters and ignoring cases.', solution: 'two-pointers', difficulty: 'Medium',
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      explanation: 'We use two pointers, one at the start and one at the end. We move the pointers inward, skipping non-alphanumeric characters. At each step, we compare the characters (after converting to lowercase). If they do not match, it is not a palindrome.',
      pythonSolution: `def isPalindrome(s):
    """
    Problem: Check if a string is a palindrome, considering only alphanumeric chars.
    """
    left, right = 0, len(s) - 1
    
    while left < right:
        # Skip non-alphanumeric characters.
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
            
        # Compare characters (case-insensitive).
        if s[left].lower() != s[right].lower():
            return False
            
        left += 1
        right -= 1
        
    return True`
    },
    { problem: 'Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements of [1, n] inclusive that do not appear in this array.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[5,6]',
      explanation: 'We can use the array itself as a hash map. We iterate through the array. For each number `num`, we go to the index `abs(num) - 1` and mark the element at that index as negative. In a second pass, we find all indices `i` for which `nums[i]` is still positive. These correspond to the missing numbers `i+1`.',
      pythonSolution: `def findDisappearedNumbers(nums):
    """
    Problem: Find all numbers that are missing from an array containing numbers from 1 to n.
    """
    # Use the array itself as a hash set.
    # The sign of the number at an index indicates if the number corresponding to that index has been seen.
    for num in nums:
        index = abs(num) - 1
        if nums[index] > 0:
            nums[index] = -nums[index]
            
    # The indices of the numbers that are still positive correspond to the missing numbers.
    result = []
    for i in range(len(nums)):
        if nums[i] > 0:
            result.append(i + 1)
            
    return result`
    },
    { problem: 'Given a binary tree, return the right side view of it. (the nodes you can see from the right).', solution: 'bfs', difficulty: 'Medium',
      input: 'root = [1,2,3,null,5,null,4]',
      output: '[1,3,4]',
      explanation: 'We can use BFS to traverse the tree level by level. For each level, the last node we encounter is the one visible from the right side. We add this node to our result list.',
      pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root):
    """
    Problem: Get the right side view of a binary tree.
    """
    if not root:
        return []
    
    queue = deque([root])
    result = []
    
    while queue:
        level_size = len(queue)
        for i in range(level_size):
            node = queue.popleft()
            
            # The last node of each level is the one seen from the right.
            if i == level_size - 1:
                result.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return result`
    },
    { problem: 'Given a set of intervals, merge all overlapping intervals.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation: 'First, we sort the intervals based on their start times. Then, we iterate through the sorted intervals. We keep track of the last merged interval. If the current interval overlaps with the last one, we merge them by updating the end of the last interval. Otherwise, we add the current interval to our result.',
      pythonSolution: `def merge(intervals):
    """
    Problem: Merge all overlapping intervals.
    """
    if not intervals:
        return []
        
    # Sort intervals by their start time.
    intervals.sort(key=lambda x: x[0])
    
    merged = [intervals[0]]
    for current in intervals[1:]:
        last = merged[-1]
        # If the current interval overlaps with the last one in the merged list...
        if current[0] <= last[1]:
            # ...merge them by extending the end of the last interval.
            last[1] = max(last[1], current[1])
        else:
            # Otherwise, add the new interval.
            merged.append(current)
            
    return merged`
    },
    { problem: 'Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.', solution: 'backtracking', difficulty: 'Medium',
      input: 's = "aab"',
      output: '[["a","a","b"],["aa","b"]]',
      explanation: 'We use backtracking. We iterate through all possible prefixes of the string. If a prefix is a palindrome, we add it to our current partition and make a recursive call for the rest of the string. After the call returns, we backtrack by removing the prefix.',
      pythonSolution: `def partition(s):
    """
    Problem: Find all possible palindrome partitions of a string.
    """
    res = []
    part = []

    def is_palindrome(sub):
        return sub == sub[::-1]

    def backtrack(i):
        # Base case: we've partitioned the entire string.
        if i >= len(s):
            res.append(list(part))
            return
            
        # Explore all possible partitions starting from index i.
        for j in range(i, len(s)):
            if is_palindrome(s[i:j+1]):
                part.append(s[i:j+1])
                backtrack(j + 1)
                part.pop() # Backtrack
    
    backtrack(0)
    return res`
    },
    { problem: 'Design a data structure that supports adding new words and finding if a string matches any previously added string.', solution: 'dfs', difficulty: 'Medium',
      input: 'commands = ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\ninputs = [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]',
      output: '[null,null,null,null,false,true,true,true]',
      explanation: 'We can use a Trie (prefix tree) to store the words. For the search function, if we encounter a `.` character, we need to perform a DFS to check all possible characters at that position.',
      pythonSolution: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class WordDictionary:
    """
    Problem: Design a data structure for adding words and searching with wildcards ('.').
    """
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        # Standard Trie insertion.
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word: str) -> bool:
        # Use DFS for searching, to handle the '.' wildcard.
        def dfs(start_index, node):
            for i in range(start_index, len(word)):
                char = word[i]
                if char == '.':
                    # If it's a wildcard, recursively search all children.
                    for child in node.children.values():
                        if dfs(i + 1, child):
                            return True
                    return False
                else:
                    if char not in node.children:
                        return False
                    node = node.children[char]
            return node.is_end_of_word
        
        return dfs(0, self.root)`
    },
    { problem: 'Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.', solution: 'heap',
      difficulty: 'Medium',
      input: 'T = [73, 74, 75, 71, 69, 72, 76, 73]',
      output: '[1, 1, 4, 2, 1, 1, 0, 0]',
      explanation: 'We can use a monotonic stack. We iterate through the temperatures. If the current temperature is warmer than the temperature at the top of the stack, we have found the next warmer day for the day at the top of the stack. We pop from the stack and calculate the difference in days.',
      pythonSolution: `def dailyTemperatures(T):
    """
    Problem: For each day, find the number of days until a warmer temperature.
    """
    res = [0] * len(T)
    # The stack will store indices of days in decreasing order of temperature.
    stack = []
    
    for i, temp in enumerate(T):
        # While the stack is not empty and the current day is warmer
        # than the day at the top of the stack...
        while stack and T[stack[-1]] < temp:
            # ...we've found the next warmer day for the day at the stack's top.
            prev_index = stack.pop()
            res[prev_index] = i - prev_index
        stack.append(i)
        
    return res`
    },
    { problem: 'Given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.', solution: 'sliding-window', difficulty: 'Medium',
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[3,3,5,5,6,7]',
      explanation: 'We can use a deque (double-ended queue) to keep track of the indices of the elements in the current window, in decreasing order of their values. The front of the deque will always be the index of the maximum element in the window.',
      pythonSolution: `from collections import deque

def maxSlidingWindow(nums, k):
    """
    Problem: Find the maximum value in a sliding window of size k as it moves across an array.
    """
    res = []
    # The deque stores indices of elements in the current window.
    # It is kept in decreasing order of the elements' values.
    q = deque()
    
    for i, num in enumerate(nums):
        # Remove elements from the left that are no longer in the window.
        if q and q[0] == i - k:
            q.popleft()
            
        # Remove elements from the right that are smaller than the current element.
        while q and nums[q[-1]] < num:
            q.pop()
            
        q.append(i)
        
        # Add the max element (which is at the front of the deque) to the result.
        if i >= k - 1:
            res.append(nums[q[0]])
            
    return res`
    },
    { problem: 'A robot is located at the top-left corner of a `m x n` grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'm = 3, n = 7',
      output: '28',
      explanation: 'We use dynamic programming. Let `dp[i][j]` be the number of unique paths to reach cell `(i,j)`. The recurrence relation is `dp[i][j] = dp[i-1][j] + dp[i][j-1]`. We can optimize this to use O(n) extra space.',
      pythonSolution: `def uniquePaths(m, n):
    """
    Problem: Find the number of unique paths for a robot to go from the
    top-left to the bottom-right of a grid, only moving right or down.
    """
    # This can be solved with DP, but also combinatorics.
    # Total moves = (m-1) down + (n-1) right = m + n - 2
    # We need to choose which of these moves are 'down' moves.
    # The answer is (m+n-2) choose (m-1).
    import math
    return math.comb(m + n - 2, m - 1)`
    },
    { problem: 'Given a `m x n` board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.', solution: 'backtracking', difficulty: 'Medium',
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
      output: 'true',
      explanation: 'We use DFS with backtracking. We start a search from each cell. If a cell matches the current letter of the word, we mark it as visited and recursively search its neighbors for the next letter. If the search fails, we backtrack by unmarking the cell.',
      pythonSolution: `def exist(board, word):
    """
    Problem: Find if a word can be formed by adjacent cells in a grid.
    """
    ROWS, COLS = len(board), len(board[0])
    path = set()

    def dfs(r, c, i):
        if i == len(word):
            return True
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or
            word[i] != board[r][c] or (r, c) in path):
            return False

        path.add((r,c))
        res = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or
               dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
        path.remove((r, c))
        return res

    for r in range(ROWS):
        for c in range(COLS):
            if dfs(r, c, 0): return True
    return False`
    },
    { problem: 'Given the root of a binary tree, determine if it is a valid binary search tree.', solution: 'dfs', difficulty: 'Medium',
      input: 'root = [5,1,4,null,null,3,6]',
      output: 'false',
      explanation: 'A BST is valid if, for every node, all values in its left subtree are smaller, and all values in its right subtree are larger. We can perform a recursive DFS, passing down the valid range (min and max) for each node.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    """
    Problem: Determine if a binary tree is a valid Binary Search Tree (BST).
    """
    def validate(node, low, high):
        if not node:
            return True
        if not (low < node.val < high):
            return False
        
        return (validate(node.left, low, node.val) and
                validate(node.right, node.val, high))
                
    return validate(root, float('-inf'), float('inf'))`
    },
    { problem: 'Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.', solution: 'sliding-window', difficulty: 'Medium',
      input: 'commands = ["MovingAverage", "next", "next", "next", "next"], inputs = [[3], [1], [10], [3], [5]]',
      output: '[null, 1.0, 5.5, 4.66667, 6.0]',
      explanation: 'We can use a queue to store the numbers in the current window. When a new number comes in, we add it to the queue and to our running sum. If the window size is exceeded, we remove the oldest number from the queue and subtract it from the sum.',
      pythonSolution: `from collections import deque

class MovingAverage:
    """
    Problem: Calculate the moving average of a stream of numbers.
    """
    def __init__(self, size: int):
        self.size = size
        self.queue = deque()
        self.sum = 0

    def next(self, val: int) -> float:
        if len(self.queue) == self.size:
            self.sum -= self.queue.popleft()
        
        self.queue.append(val)
        self.sum += val
        
        return self.sum / len(self.queue)`
    },
    { problem: 'Given a list of words, please write a program that returns all concatenated words in the given list of words.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]',
      output: '["catsdogcats","dogcatsdog","ratcatdogcat"]',
      explanation: 'We can use dynamic programming with a set of the words for fast lookups. For each word, we check if it can be formed by concatenating other words from the set. We use a DP array where `dp[i]` is true if the prefix of length `i` can be formed.',
      pythonSolution: `def findAllConcatenatedWordsInADict(words):
    """
    Problem: Find all words in a dictionary that are concatenations of other words.
    """
    word_set = set(words)
    res = []
    
    for word in words:
        if not word:
            continue
            
        # dp[i] is True if word[:i] is a concatenated word.
        dp = [False] * (len(word) + 1)
        dp[0] = True
        
        for i in range(1, len(word) + 1):
            for j in range(i):
                # We check if word[j:i] is a valid word AND word[:j] can be formed.
                # The condition (i-j != len(word)) ensures we don't match the word against itself.
                if dp[j] and word[j:i] in word_set and (i-j != len(word) or j != 0):
                    dp[i] = True
                    break
        
        if dp[-1]:
            res.append(word)
            
    return res`
    },
    { problem: 'Given a binary tree, serialize it to a string and deserialize it back to the tree.', solution: 'dfs', difficulty: 'Medium',
      input: 'root = [1,2,3,null,null,4,5]',
      output: 'The same tree, after serialization and deserialization.',
      explanation: 'We can use a pre-order traversal (DFS) to serialize the tree. We represent null nodes with a special marker (e.g., "#"). To deserialize, we read the values in the same order and recursively build the tree.',
      pythonSolution: `class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:
    """
    Problem: Serialize and deserialize a binary tree.
    """
    def serialize(self, root):
        res = []
        # Pre-order traversal (DFS).
        def dfs(node):
            if not node:
                res.append("N")
                return
            res.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ",".join(res)

    def deserialize(self, data):
        vals = data.split(',')
        self.i = 0
        def dfs():
            if vals[self.i] == "N":
                self.i += 1
                return None
            node = TreeNode(int(vals[self.i]))
            self.i += 1
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()`
    },
    { problem: 'Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.', solution: 'backtracking', difficulty: 'Medium',
      input: 'nums = [1,2,3], target = 4',
      output: '7 (combinations: (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (1,3), (3,1), (2,2))',
      explanation: 'This can be solved with backtracking or dynamic programming. With DP, `dp[i]` represents the number of combinations that sum to `i`. For each `i`, we can form it by adding any `num` from `nums` to a combination that sums to `i - num`.',
      pythonSolution: `def combinationSum4(nums, target):
    """
    Problem: Find the number of combinations that sum up to a target.
    (Order matters, so permutations are counted).
    """
    # dp[i] = number of ways to form sum i.
    dp = {0: 1}
    
    for i in range(1, target + 1):
        dp[i] = 0
        for num in nums:
            # Add the number of ways to form the remainder.
            dp[i] += dp.get(i - num, 0)
            
    return dp.get(target, 0)`
    },
    { problem: 'Given an array of `n` integers `nums`, are there elements `a`, `b`, `c` in `nums` such that `a + b + c = 0`? Find all unique triplets in the array which gives the sum of zero.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'We sort the array first. Then, we iterate through the array with one pointer `i`. For each `i`, we use two other pointers, `left` and `right`, to find a pair that sums to `-nums[i]`. We need to be careful to skip duplicate triplets.',
      pythonSolution: `def threeSum(nums):
    """
    Problem: Find all unique triplets in an array that sum to zero.
    """
    nums.sort()
    res = []
    
    for i, a in enumerate(nums):
        # Skip duplicate values for the first element 'a'.
        if i > 0 and a == nums[i-1]:
            continue
            
        # Use two pointers for the rest of the array.
        l, r = i + 1, len(nums) - 1
        while l < r:
            three_sum = a + nums[l] + nums[r]
            if three_sum > 0:
                r -= 1
            elif three_sum < 0:
                l += 1
            else:
                res.append([a, nums[l], nums[r]])
                # Move the left pointer and skip its duplicates.
                l += 1
                while nums[l] == nums[l-1] and l < r:
                    l += 1
                    
    return res`
    },
    { problem: 'Search a 2D Matrix. Write an efficient algorithm that searches for a value in an `m x n` matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.', solution: 'binary-search', difficulty: 'Medium',
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
      output: 'true',
      explanation: 'The matrix can be treated as a single sorted array of size `m*n`. We can perform a binary search on this virtual array. To convert a 1D index `mid` to 2D coordinates, we use `row = mid // n` and `col = mid % n`.',
      pythonSolution: `def searchMatrix(matrix, target):
    """
    Problem: Search for a target in a sorted 2D matrix.
    """
    if not matrix or not matrix[0]:
        return False
        
    rows, cols = len(matrix), len(matrix[0])
    # Treat the matrix as a flattened sorted array.
    left, right = 0, rows * cols - 1
    
    while left <= right:
        mid_index = (left + right) // 2
        # Convert 1D index back to 2D.
        mid_value = matrix[mid_index // cols][mid_index % cols]
        
        if mid_value == target:
            return True
        elif mid_value < target:
            left = mid_index + 1
        else:
            right = mid_index - 1
            
    return False`
    },
    { problem: 'Given a linked list, remove the n-th node from the end of the list and return its head.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'head = [1,2,3,4,5], n = 2',
      output: '[1,2,3,5]',
      explanation: 'We use two pointers, `fast` and `slow`. We first move the `fast` pointer `n` steps ahead. Then, we move both pointers one step at a time until `fast` reaches the end of the list. At this point, `slow` will be at the node just before the one to be removed.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    """
    Problem: Remove the n-th node from the end of a linked list.
    """
    # Use a dummy node to handle edge cases like removing the head.
    dummy = ListNode(0, head)
    fast = slow = dummy
    
    # Move the fast pointer n+1 steps ahead.
    for _ in range(n + 1):
        fast = fast.next
        
    # Move both pointers until fast reaches the end.
    while fast:
        fast = fast.next
        slow = slow.next
        
    # 'slow' is now at the node before the one to be removed.
    slow.next = slow.next.next
    
    return dummy.next`
    },
    { problem: 'Given a collection of distinct integers, return all possible permutations.', solution: 'backtracking', difficulty: 'Medium',
      input: 'nums = [1,2,3]',
      output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
      explanation: 'We use backtracking. We build a permutation number by number. For each position, we try to place any number that has not been used yet. We use a `visited` set or similar mechanism to keep track of used numbers.',
      pythonSolution: `def permute(nums):
    """
    Problem: Find all possible permutations of a list of numbers.
    """
    res = []
    
    def backtrack(path, used_mask):
        if len(path) == len(nums):
            res.append(list(path))
            return
            
        for i in range(len(nums)):
            # Check if the number at index i has been used.
            if not (used_mask & (1 << i)):
                path.append(nums[i])
                # Mark the number as used.
                backtrack(path, used_mask | (1 << i))
                path.pop() # Backtrack
    
    backtrack([], 0)
    return res`
    },
    { problem: 'Given a non-empty array of integers, return the `k` most frequent elements.', solution: 'heap', difficulty: 'Medium',
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: 'First, we count the frequency of each number using a hash map. Then, we can use a min-heap of size `k` to find the `k` most frequent elements. An alternative is to use bucket sort, where the index of the bucket is the frequency.',
      pythonSolution: `import heapq
from collections import Counter

def topKFrequent(nums, k):
    """
    Problem: Find the k most frequent elements in an array.
    """
    # Count frequencies of each number.
    count = Counter(nums)
    # heapq.nlargest finds the k largest items from an iterable.
    # We use the count as the key for comparison.
    return heapq.nlargest(k, count.keys(), key=count.get)`
    },
    { problem: 'You are given a list of `jobs`. Each job has a `start time`, `end time`, and `profit`. Find the maximum profit you can make by scheduling the jobs such that no two jobs overlap.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
      output: '120 (by choosing jobs 1 and 4, with profits 50+70)',
      explanation: 'We sort the jobs by their end times. We use a DP array where `dp[i]` is the maximum profit at time `i`. For each job, we find the maximum profit we could have made before it started, and add the current job\'s profit.',
      pythonSolution: `def jobScheduling(startTime, endTime, profit):
    """
    Problem: Find the maximum profit from a set of jobs with start/end times,
    where no two jobs overlap.
    """
    jobs = sorted(zip(startTime, endTime, profit), key=lambda v: v[1])
    # dp stores tuples of (end_time, max_profit_up_to_this_time).
    dp = [(0, 0)]
    
    for s, e, p in jobs:
        # Find the last job that finishes before the current one starts.
        import bisect
        i = bisect.bisect_right(dp, (s, float('inf'))) - 1
        
        profit_with_current_job = dp[i][1] + p
        
        # If this new profit is better than the last max profit, add it to our DP table.
        if profit_with_current_job > dp[-1][1]:
            dp.append((e, profit_with_current_job))
            
    return dp[-1][1]`
    },
    { problem: 'Find the median of two sorted arrays.', solution: 'binary-search', difficulty: 'Medium',
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.0',
      explanation: 'This is a complex problem that can be solved with binary search in O(log(m+n)) time. The idea is to partition both arrays into two halves such that all elements in the left halves are smaller than all elements in the right halves, and the total number of elements in the left halves is equal to (or one more than) the total number in the right halves.',
      pythonSolution: `def findMedianSortedArrays(nums1, nums2):
    """
    Problem: Find the median of two sorted arrays.
    """
    A, B = nums1, nums2
    total = len(nums1) + len(nums2)
    half = total // 2
    
    # Ensure A is the smaller array to optimize the binary search.
    if len(B) < len(A):
        A, B = B, A
        
    l, r = 0, len(A) - 1
    while True:
        i = (l + r) // 2 # Midpoint for A
        j = half - i - 2 # Corresponding midpoint for B
        
        Aleft = A[i] if i >= 0 else float("-infinity")
        Aright = A[i + 1] if (i + 1) < len(A) else float("infinity")
        Bleft = B[j] if j >= 0 else float("-infinity")
        Bright = B[j + 1] if (j + 1) < len(B) else float("infinity")
        
        # Check if we found the correct partition.
        if Aleft <= Bright and Bleft <= Aright:
            if total % 2: # Odd total length
                return min(Aright, Bright)
            # Even total length
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            r = i - 1
        else:
            l = i + 1`
    },
    { problem: 'Given an array of integers, find the length of the longest increasing subsequence.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'nums = [10,9,2,5,3,7,101,18]',
      output: '4 (from [2,3,7,101])',
      explanation: 'A classic DP problem. Let `dp[i]` be the length of the LIS ending at index `i`. Then, `dp[i] = 1 + max(dp[j])` for all `j < i` where `nums[j] < nums[i]`. A more efficient O(n log n) solution involves maintaining a sorted list of the smallest tail of all increasing subsequences.',
      pythonSolution: `def lengthOfLIS(nums):
    """
    Problem: Find the length of the longest increasing subsequence.
    """
    # This O(n log n) solution maintains a sorted list 'tails'.
    # 'tails[i]' is the smallest tail of all increasing subsequences of length i+1.
    tails = []
    for num in nums:
        import bisect
        # Find the position where 'num' can be inserted to maintain order.
        i = bisect.bisect_left(tails, num)
        if i == len(tails):
            # 'num' is larger than all existing tails, so it extends the LIS.
            tails.append(num)
        else:
            # 'num' can replace an existing tail to form a potentially better LIS.
            tails[i] = num
    return len(tails)`
    },
    { problem: 'Given `n`, generate all structurally unique BST\'s (binary search trees) that store values 1...n.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'n = 3',
      output: '5 (the number of unique BST structures)',
      explanation: 'This is a DP problem related to Catalan numbers. Let `G(n)` be the number of unique BSTs for `n` nodes. To construct a BST, we can choose any number `i` from 1 to `n` as the root. Then, there will be `i-1` nodes in the left subtree and `n-i` nodes in the right. The total number of trees is the sum over all `i` of `G(i-1) * G(n-i)`.',
      pythonSolution: `def numTrees(n):
    """
    Problem: Find the number of structurally unique BSTs for n nodes with values 1 to n.
    """
    # This is the n-th Catalan number.
    # G(n) = sum_{i=1 to n} G(i-1) * G(n-i)
    dp = [0] * (n + 1)
    dp[0] = 1 # Base case: one BST for 0 nodes (the empty tree).
    
    for i in range(1, n + 1): # Number of nodes
        for j in range(1, i + 1): # Root node
            # j-1 nodes on the left, i-j nodes on the right.
            dp[i] += dp[j - 1] * dp[i - j]
            
    return dp[n]`
    },
    { problem: 'Validate if a given string is a valid UTF-8 encoding.', solution: 'sliding-window', difficulty: 'Medium',
      input: 'data = [197, 130, 1]',
      output: 'true',
      explanation: 'We iterate through the data. For each byte, we check if it is a start of a new character. If it is, we determine how many continuation bytes (`10xxxxxx`) should follow. We then check if the subsequent bytes are valid continuation bytes.',
      pythonSolution: `def validUtf8(data):
    """
    Problem: Validate if a sequence of integers represents a valid UTF-8 encoding.
    """
    num_bytes = 0
    for num in data:
        # If we are not in the middle of a multi-byte character.
        if num_bytes == 0:
            if (num >> 5) == 0b110: # 2-byte character
                num_bytes = 1
            elif (num >> 4) == 0b1110: # 3-byte character
                num_bytes = 2
            elif (num >> 3) == 0b11110: # 4-byte character
                num_bytes = 3
            # If it's a 1-byte character, the most significant bit must be 0.
            elif (num >> 7):
                return False
        # If we are expecting a continuation byte.
        else:
            # It must start with '10'.
            if (num >> 6) != 0b10:
                return False
            num_bytes -= 1
            
    # We must not be in the middle of a character at the end.
    return num_bytes == 0`
    },
    { problem: 'Clone a graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.', solution: 'bfs', difficulty: 'Medium',
      input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
      output: 'A deep copy of the graph.',
      explanation: 'We can use either BFS or DFS. We use a hash map to store the mapping from original nodes to their clones. This prevents getting stuck in cycles and ensures each node is cloned only once. We iterate through the original graph\'s nodes and for each node, we create a clone and then clone its neighbors.',
      pythonSolution: `class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node: 'Node') -> 'Node':
    """
    Problem: Create a deep copy of a graph.
    """
    if not node:
        return None
        
    # Map from old nodes to new nodes to avoid re-cloning and handle cycles.
    old_to_new = {node: Node(node.val)}
    queue = [node]
    
    while queue:
        current = queue.pop(0)
        for neighbor in current.neighbors:
            if neighbor not in old_to_new:
                old_to_new[neighbor] = Node(neighbor.val)
                queue.append(neighbor)
            # Connect the cloned nodes.
            old_to_new[current].neighbors.append(old_to_new[neighbor])
            
    return old_to_new[node]`
    },
    { problem: 'Given a `m x n` matrix, if an element is 0, set its entire row and column to 0.', solution: 'two-pointers', difficulty: 'Medium',
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
      explanation: 'We can use the first row and first column of the matrix as markers. We iterate through the matrix. If we find a zero at `(i,j)`, we mark `matrix[i][0]` and `matrix[0][j]` as zero. We use separate variables to track if the first row/column themselves need to be zeroed. In a second pass, we use these markers to set the elements to zero.',
      pythonSolution: `def setZeroes(matrix):
    """
    Problem: If an element in a matrix is 0, set its entire row and column to 0 in-place.
    """
    rows, cols = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(cols))
    first_col_zero = any(matrix[i][0] == 0 for i in range(rows))
    
    # Use the first row and col as markers.
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
                
    # Set zeroes based on markers.
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
                
    # Set first row/col if needed.
    if first_row_zero:
        for j in range(cols):
            matrix[0][j] = 0
    if first_col_zero:
        for i in range(rows):
            matrix[i][0] = 0`
    },
    { problem: 'Product of Array Except Self. Given an array `nums` of `n` integers where `n > 1`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.', solution: 'dynamic-programming', difficulty: 'Medium',
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'We can achieve this in O(n) time and O(1) extra space. We make two passes. In the first pass, we build up the result array where `res[i]` contains the product of all elements to the left of `i`. In the second pass, we iterate from right to left, multiplying `res[i]` by the product of all elements to the right of `i`.',
      pythonSolution: `def productExceptSelf(nums):
    """
    Problem: Calculate the product of all elements in an array except self.
    """
    n = len(nums)
    res = [1] * n
    
    # First pass: calculate prefix products.
    prefix = 1
    for i in range(n):
        res[i] = prefix
        prefix *= nums[i]
        
    # Second pass: calculate postfix products and multiply.
    postfix = 1
    for i in range(n - 1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
        
    return res`
    },
    { problem: 'Course Schedule. There are a total of `n` courses you have to take, labeled from 0 to n-1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]. Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?', solution: 'dfs', difficulty: 'Medium',
      input: 'numCourses = 2, prerequisites = [[1,0]]',
      output: 'true',
      explanation: 'This is a cycle detection problem in a directed graph. We can use DFS. We build an adjacency list representation of the graph. We maintain a visited set for each DFS path. If we encounter a node that is already in our current path, we have found a cycle.',
      pythonSolution: `def canFinish(numCourses, prerequisites):
    """
    Problem: Determine if all courses can be finished given a list of prerequisites.
    This is equivalent to detecting a cycle in a directed graph.
    """
    adj = {i: [] for i in range(numCourses)}
    for crs, pre in prerequisites:
        adj[crs].append(pre)
        
    # Set to track nodes currently in the recursion stack for a given DFS path.
    visiting = set()
    
    def dfs(crs):
        if crs in visiting:
            return False # Cycle detected.
        if not adj[crs]:
            return True # No prerequisites, can be finished.
            
        visiting.add(crs)
        for pre in adj[crs]:
            if not dfs(pre):
                return False
        visiting.remove(crs)
        # Optimization: once we've validated a course, we don't need to check it again.
        adj[crs] = []
        return True
        
    # Check each course in case the graph is not fully connected.
    for crs in range(numCourses):
        if not dfs(crs):
            return False
    return True`
    },
    // Hard
    { problem: 'Given an array of non-negative integers representing the histogram\'s bar height where the width of each bar is 1, find the area of the largest rectangle in the histogram.', solution: 'two-pointers', difficulty: 'Hard',
      input: 'heights = [2,1,5,6,2,3]',
      output: '10 (from the rectangle of height 5 spanning 2 bars)',
      explanation: 'We can use a monotonic stack. We iterate through the heights. If the current height is smaller than the height at the top of the stack, we can calculate the area for the rectangle with the height at the top of the stack. We pop from the stack until this condition is no longer true.',
      pythonSolution: `def largestRectangleArea(heights):
    """
    Problem: Find the largest rectangle area in a histogram.
    """
    max_area = 0
    # Stack stores tuples of (index, height).
    stack = []
    
    for i, h in enumerate(heights):
        start = i
        # When we encounter a bar shorter than the one at the stack's top,
        # we can calculate the area of the popped bar.
        while stack and stack[-1][1] > h:
            index, height = stack.pop()
            max_area = max(max_area, height * (i - index))
            start = index
        stack.append((start, h))
        
    # For any remaining bars in the stack, their rectangle extends to the end.
    for i, h in stack:
        max_area = max(max_area, h * (len(heights) - i))
        
    return max_area`
    },
    { problem: 'Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, find the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).', solution: 'binary-search', difficulty: 'Hard',
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '2.5',
      explanation: 'The core idea is to find a partition in both arrays such that all elements in the left partitions are smaller than all elements in the right partitions. We can binary search for the correct partition in the smaller array, which then determines the partition in the larger array.',
      pythonSolution: `def findMedianSortedArrays(nums1, nums2):
    """
    Problem: Find the median of two sorted arrays efficiently.
    """
    A, B = nums1, nums2
    total = len(A) + len(B)
    half = total // 2

    if len(B) < len(A):
        A, B = B, A

    l, r = 0, len(A) - 1
    while True:
        i = (l + r) // 2  # A's partition index
        j = half - i - 2  # B's partition index

        Aleft = A[i] if i >= 0 else float("-inf")
        Aright = A[i + 1] if (i + 1) < len(A) else float("inf")
        Bleft = B[j] if j >= 0 else float("-inf")
        Bright = B[j + 1] if (j + 1) < len(B) else float("inf")

        if Aleft <= Bright and Bleft <= Aright:
            if total % 2:
                return min(Aright, Bright)
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            r = i - 1
        else:
            l = i + 1`
    },
    { problem: 'Implement a regular expression matcher with support for `.` and `*`.', solution: 'dynamic-programming', difficulty: 'Hard',
      input: 's = "aab", p = "c*a*b"',
      output: 'true',
      explanation: 'We use dynamic programming with a 2D DP table. `dp[i][j]` is true if the first `i` characters of `s` match the first `j` characters of `p`. We handle three cases for `p[j-1]`: it is a normal character, it is `.`, or it is `*`. The `*` case is complex as it can match zero or more of the preceding element.',
      pythonSolution: `def isMatch(s: str, p: str) -> bool:
    """
    Problem: Implement a regex matcher supporting '.' and '*'.
    """
    # DP with memoization (top-down)
    memo = {}

    def dp(i, j):
        if (i, j) in memo:
            return memo[(i, j)]
        if j == len(p):
            return i == len(s)

        first_match = i < len(s) and (p[j] == s[i] or p[j] == '.')
        
        if j + 1 < len(p) and p[j+1] == '*':
            # Two cases for '*':
            # 1. '*' matches zero occurrences of p[j].
            # 2. '*' matches one or more occurrences (if first_match is true).
            ans = dp(i, j + 2) or (first_match and dp(i + 1, j))
        else:
            ans = first_match and dp(i + 1, j + 1)
        
        memo[(i, j)] = ans
        return ans

    return dp(0, 0)`
    },
    { problem: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.', solution: 'two-pointers', difficulty: 'Hard',
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'We use two pointers, `left` and `right`, and keep track of the maximum height seen so far from both sides (`left_max`, `right_max`). At each step, we move the pointer corresponding to the smaller max height. The water trapped at that position is the difference between the max height and the current height.',
      pythonSolution: `def trap(height: list[int]) -> int:
    """
    Problem: Compute how much water can be trapped after raining.
    """
    if not height:
        return 0
    
    l, r = 0, len(height) - 1
    leftMax, rightMax = height[l], height[r]
    res = 0
    
    while l < r:
        if leftMax < rightMax:
            l += 1
            leftMax = max(leftMax, height[l])
            res += leftMax - height[l]
        else:
            r -= 1
            rightMax = max(rightMax, height[r])
            res += rightMax - height[r]
    return res`
    },
    { problem: 'Merge `k` sorted linked lists and return it as one sorted list. Analyze and describe its complexity.', solution: 'heap', difficulty: 'Hard',
      input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
      output: '[1,1,2,3,4,4,5,6]',
      explanation: 'We use a min-heap to keep track of the smallest element among all lists. We initialize the heap with the first node of each list. Then, we repeatedly extract the minimum node from the heap, add it to our result list, and insert the next node from the same list into the heap.',
      pythonSolution: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists: list[ListNode]) -> ListNode:
    """
    Problem: Merge k sorted linked lists into one.
    """
    # Use a min-heap to efficiently get the smallest node.
    # The heap stores tuples of (value, list_index, node).
    # The list_index is a tie-breaker to handle nodes with the same value.
    min_heap = []
    for i, l in enumerate(lists):
        if l:
            heapq.heappush(min_heap, (l.val, i, l))
            
    dummy = ListNode()
    tail = dummy
    
    while min_heap:
        val, i, node = heapq.heappop(min_heap)
        tail.next = node
        tail = tail.next
        if node.next:
            heapq.heappush(min_heap, (node.next.val, i, node.next))
            
    return dummy.next`
    },
    { problem: 'Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.', solution: 'backtracking', difficulty: 'Hard',
      input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
      output: '["cats and dog", "cat sand dog"]',
      explanation: 'We use backtracking with memoization. We define a recursive function that finds all valid sentences for a suffix of `s`. For each prefix of the suffix that is a valid word, we make a recursive call for the rest of the suffix and combine the results.',
      pythonSolution: `def wordBreak(s: str, wordDict: list[str]) -> list[str]:
    """
    Problem: Find all ways to break a string into a sequence of dictionary words.
    """
    word_set = set(wordDict)
    # Memoization to store results for substrings we've already processed.
    memo = {}
    
    def backtrack(sub):
        if sub in memo:
            return memo[sub]
        if not sub:
            return [""]
            
        res = []
        for i in range(1, len(sub) + 1):
            prefix = sub[:i]
            if prefix in word_set:
                # Get all valid sentences for the rest of the string.
                for rest in backtrack(sub[i:]):
                    res.append(prefix + (" " if rest else "") + rest)
                    
        memo[sub] = res
        return res
        
    return backtrack(s)`
    },
    { problem: 'The N-Queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the N-Queens puzzle.', solution: 'backtracking', difficulty: 'Hard',
      input: 'n = 4',
      output: '[ [".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."] ]',
      explanation: 'We use backtracking. We try to place a queen in each row, one by one. For each row, we iterate through all columns. If placing a queen at `(row, col)` is safe (i.e., not attacked by any previous queen), we place it and make a recursive call for the next row. We use sets to keep track of occupied columns and diagonals.',
      pythonSolution: `def solveNQueens(n: int) -> list[list[str]]:
    """
    Problem: Place n queens on an n x n chessboard so that no two queens attack each other.
    """
    col = set()
    pos_diag = set() # (row + col) is constant for these diagonals
    neg_diag = set() # (row - col) is constant for these diagonals
    
    res = []
    board = [["."] * n for _ in range(n)]
    
    def backtrack(r):
        if r == n:
            copy = ["".join(row) for row in board]
            res.append(copy)
            return
            
        for c in range(n):
            if c in col or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
                
            # Place the queen
            col.add(c)
            pos_diag.add(r + c)
            neg_diag.add(r - c)
            board[r][c] = "Q"
            
            backtrack(r + 1)
            
            # Backtrack
            col.remove(c)
            pos_diag.remove(r + c)
            neg_diag.remove(r - c)
            board[r][c] = "."
            
    backtrack(0)
    return res`
    },
    { problem: 'Given an array of integers, find the maximum sum of a subarray with the constraint that the subarray must be of size at least 1.', solution: 'dynamic-programming', difficulty: 'Hard',
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'This is Kadane\'s algorithm. We maintain two variables: `max_so_far` and `current_max`. We iterate through the array. `current_max` is the maximum of the current element or the current element plus `current_max`. `max_so_far` is updated at each step.',
      pythonSolution: `def maxSubArray(nums: list[int]) -> int:
    """
    Problem: Find the contiguous subarray with the largest sum.
    """
    max_so_far = nums[0]
    current_max = nums[0]
    
    for num in nums[1:]:
        current_max = max(num, current_max + num)
        max_so_far = max(max_so_far, current_max)
        
    return max_so_far`
    },
    { problem: 'There are two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively. Find the median of the two sorted arrays.', solution: 'binary-search', difficulty: 'Hard',
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.0',
      explanation: 'This is a complex problem that can be solved with binary search in O(log(m+n)) time. The idea is to partition both arrays into two halves such that all elements in the left partitions are smaller than all elements in the right partitions, and the total number of elements in the left halves is equal to (or one more than) the total number in the right halves.',
      pythonSolution: `def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:
    """
    Problem: Find the median of two sorted arrays.
    """
    A, B = nums1, nums2
    total = len(A) + len(B)
    half = total // 2

    if len(B) < len(A):
        A, B = B, A

    l, r = 0, len(A) - 1
    while True:
        i = (l + r) // 2
        j = half - i - 2

        Aleft = A[i] if i >= 0 else float("-inf")
        Aright = A[i + 1] if (i + 1) < len(A) else float("inf")
        Bleft = B[j] if j >= 0 else float("-inf")
        Bright = B[j + 1] if (j + 1) < len(B) else float("inf")

        if Aleft <= Bright and Bleft <= Aright:
            if total % 2:
                return min(Aright, Bright)
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            r = i - 1
        else:
            l = i + 1`
    },
    { problem: 'You are given a list of `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`. The cost of connecting two points `(xi, yi)` and `(xj, yj)` is the manhattan distance between them: `|xi - xj| + |yi - yj|`. Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.', solution: 'dfs', difficulty: 'Hard',
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'This is a Minimum Spanning Tree (MST) problem. We can use Prim\'s algorithm or Kruskal\'s algorithm. For Prim\'s, we start with an arbitrary point, and at each step, we add the cheapest edge that connects a point in the MST to a point outside the MST. A min-heap is used to efficiently find the cheapest edge.',
      pythonSolution: `import heapq

def minCostConnectPoints(points: list[list[int]]) -> int:
    """
    Problem: Find the minimum cost to connect all points, where cost is the
    Manhattan distance. This is a Minimum Spanning Tree (MST) problem.
    """
    n = len(points)
    adj = {i:[] for i in range(n)}
    for i in range(n):
        for j in range(i + 1, n):
            dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
            adj[i].append([dist, j])
            adj[j].append([dist, i])
            
    # Prim's Algorithm
    res = 0
    visit = set()
    min_heap = [[0, 0]] # [cost, point_index]
    
    while len(visit) < n:
        cost, i = heapq.heappop(min_heap)
        if i in visit:
            continue
        res += cost
        visit.add(i)
        for neighbor_cost, neighbor in adj[i]:
            if neighbor not in visit:
                heapq.heappush(min_heap, [neighbor_cost, neighbor])
    
    return res`
    }
  ]
};
