import { LeetCodeProblem } from './types/leetcode';

export const leetcodeProblems: LeetCodeProblem[] = [
  {
    id: 'delete-nodes-from-linked-list',
    number: 3217,
    title: 'Delete Nodes From Linked List Present in Array',
    difficulty: 'Medium',
    category: ['Linked List', 'Hash Table', 'Array'],
    leetcodeUrl: 'https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/',
    runtime: '54ms (Beats 76.74%)',
    memory: '58.14 MB (Beats 87.44%)',
    solvedDate: '2024-11-02',
    description: {
      en: 'You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.',
      pt: 'Você recebe um array de inteiros nums e o head de uma lista ligada. Retorne o head da lista ligada modificada após remover todos os nós da lista ligada que possuem um valor que existe em nums.',
    },
    examples: [
      {
        input: 'nums = [1,2,3], head = [1,2,3,4,5]',
        output: '[4,5]',
        explanation: 'Remove the nodes with values 1, 2, and 3.',
      },
      {
        input: 'nums = [1], head = [1,2,1,2,1,2]',
        output: '[2,2,2]',
        explanation: 'Remove the nodes with value 1.',
      },
      {
        input: 'nums = [5], head = [1,2,3,4]',
        output: '[1,2,3,4]',
        explanation: 'No node has value 5.',
      },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^5',
      'All elements in nums are unique.',
      'The number of nodes in the given list is in the range [1, 10^5].',
      '1 <= Node.val <= 10^5',
      'The input is generated such that there is at least one node in the linked list that has a value not present in nums.',
    ],
    intuition: {
      en: `When I read this problem, my first thought is that for every node in the linked list, I need to check if its value exists in the \`nums\` array. A naive approach would be to iterate through \`nums\` for each node, but with up to 10^5 elements in both, this would be too slow (O(N*M)).

This immediately signals the need for a faster way to check for existence in \`nums\`. The perfect data structure for this is a hash set, which provides O(1) average time complexity for lookups. So, the first key insight is to convert \`nums\` into a set.

The second challenge is modifying a linked list, which can have tricky edge cases, especially when the \`head\` node itself needs to be removed. To handle this gracefully, the sentinel (or dummy) node pattern is ideal. By creating a temporary node that points to the head, we ensure that every node we might delete has a valid, non-null predecessor, which simplifies the deletion logic immensely.`,
      pt: `Ao ler este problema, meu primeiro pensamento é que para cada nó na lista ligada, preciso verificar se seu valor existe no array \`nums\`. Uma abordagem ingênua seria iterar por \`nums\` para cada nó, mas com até 10^5 elementos em ambos, isso seria lento demais (O(N*M)).

Isso imediatamente sinaliza a necessidade de uma forma mais rápida de verificar a existência em \`nums\`. A estrutura de dados perfeita para isso é um hash set, que fornece complexidade de tempo média de O(1) para buscas. Portanto, a primeira percepção chave é converter \`nums\` em um \`set\`.

O segundo desafio é modificar uma lista ligada, que pode ter casos de borda complicados, especialmente quando o próprio nó \`head\` precisa ser removido. Para lidar com isso de forma elegante, o padrão de nó sentinela (ou "dummy") é ideal. Ao criar um nó temporário que aponta para o \`head\`, garantimos que todo nó que possamos excluir tenha um predecessor válido e não nulo, o que simplifica imensamente a lógica de exclusão.`,
    },
    approach: {
      en: `The algorithm uses a hash set for efficient lookups and a sentinel node with a two-pointer technique to traverse and modify the linked list in a single pass.

1. Create a Hash Set: Convert the input list \`nums\` into a set (\`num_set\`). This allows us to check if a node's value should be removed in O(1) average time.

2. Initialize Sentinel Node: Create a \`sentinel\` node (e.g., \`ListNode(0)\`) and set its \`next\` pointer to the original \`head\` of the list. This sentinel acts as a fixed anchor and a placeholder for the node before the real head.

3. Initialize Pointers: We use two pointers:
    - \`previous\`: Starts at the \`sentinel\` node. It will always point to the last known node that is part of the modified list.
    - \`current\`: Starts at the original \`head\`. It is the node we are currently inspecting.

4. Traverse the List: Iterate through the linked list using the \`current\` pointer until it becomes \`None\`.

5. Check and Modify: In each iteration:
    - If \`current.val\` is found in \`num_set\`, it means we need to delete this node. We do this by "skipping" it: \`previous.next = current.next\`. Critically, we do NOT advance the \`previous\` pointer in this case, because the next node (\`current.next\`) might also need to be deleted.
    - If \`current.val\` is NOT in \`num_set\`, it's a node we want to keep. We update \`previous\` to point to \`current\` (\`previous = current\`), as it is now the last known "good" node.

6. Advance \`current\`: In every iteration, regardless of whether a node was kept or deleted, we advance \`current\` to \`current.next\` to continue the traversal.

7. Return New Head: After the loop finishes, the \`sentinel.next\` pointer will point to the head of the fully modified list. We return \`sentinel.next\`.`,
      pt: `O algoritmo usa um hash set para buscas eficientes e um nó sentinela com uma técnica de dois ponteiros para percorrer e modificar a lista ligada em uma única passagem.

1. Criar um Hash Set: Converta a lista de entrada \`nums\` em um \`set\` (\`num_set\`). Isso nos permite verificar se o valor de um nó deve ser removido em tempo médio O(1).

2. Inicializar Nó Sentinela: Crie um nó \`sentinel\` (ex: \`ListNode(0)\`) e defina seu ponteiro \`next\` para o \`head\` original da lista. Este sentinela atua como uma âncora fixa e um marcador para o nó antes do verdadeiro \`head\`.

3. Inicializar Ponteiros: Usamos dois ponteiros:
    - \`previous\`: Começa no nó \`sentinel\`. Ele sempre apontará para o último nó conhecido que faz parte da lista modificada.
    - \`current\`: Começa no \`head\` original. É o nó que estamos inspecionando no momento.

4. Percorrer a Lista: Itere pela lista ligada usando o ponteiro \`current\` até que ele se torne \`None\`.

5. Verificar e Modificar: Em cada iteração:
    - Se \`current.val\` for encontrado em \`num_set\`, significa que precisamos excluir este nó. Fazemos isso "pulando-o": \`previous.next = current.next\`. Crucialmente, NÃO avançamos o ponteiro \`previous\` neste caso, porque o próximo nó (\`current.next\`) também pode precisar ser excluído.
    - Se \`current.val\` NÃO estiver em \`num_set\`, é um nó que queremos manter. Atualizamos \`previous\` para apontar para \`current\` (\`previous = current\`), pois ele agora é o último "nó bom" conhecido.

6. Avançar \`current\`: Em todas as iterações, independentemente de um nó ter sido mantido ou excluído, avançamos \`current\` para \`current.next\` para continuar a travessia.

7. Retornar o Novo Head: Após o término do loop, o ponteiro \`sentinel.next\` apontará para o \`head\` da lista totalmente modificada. Retornamos \`sentinel.next\`.`,
    },
    complexity: {
      time: 'O(N + M)',
      space: 'O(M)',
      explanation: {
        en: 'Where N is the number of nodes in the linked list and M is the number of elements in nums. It takes O(M) to build the hash set and O(N) to traverse the linked list. Each lookup in the set is O(1) on average. We use a hash set to store the M elements from nums, which requires O(M) auxiliary space.',
        pt: 'Onde N é o número de nós na lista ligada e M é o número de elementos em nums. Leva O(M) para construir o hash set e O(N) para percorrer a lista ligada. Cada busca no set é O(1) em média. Usamos um hash set para armazenar os M elementos de nums, o que requer O(M) de espaço auxiliar.',
      },
    },
    code: [
      {
        language: 'python',
        content: `from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        # Step 1: Convert nums to a set for O(1) average time lookups.
        num_set = set(nums)

        # Step 2: Create a sentinel node to simplify head-node deletion.
        # The new list will start at sentinel.next.
        sentinel = ListNode(0)
        sentinel.next = head

        # Step 3: Initialize pointers. 'previous' tracks the last valid node.
        previous = sentinel
        current = head

        # Step 4: Traverse the entire linked list.
        while current:
            if current.val in num_set:
                # This node should be deleted.
                # Skip it by linking the previous node to the current node's next.
                previous.next = current.next
            else:
                # This node is kept.
                # Advance 'previous' to this current node.
                previous = current
            
            # Step 6: Always advance 'current' to the next node.
            current = current.next
        
        # Step 7: The sentinel's next points to the new head of the modified list.
        return sentinel.next`,
        contentPt: `from typing import List, Optional

# Definição para lista ligada simples.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        # Passo 1: Converte nums em um set para buscas O(1) em tempo médio.
        num_set = set(nums)

        # Passo 2: Cria um nó sentinela para simplificar a exclusão do nó head.
        # A nova lista começará em sentinel.next.
        sentinel = ListNode(0)
        sentinel.next = head

        # Passo 3: Inicializa ponteiros. 'previous' rastreia o último nó válido.
        previous = sentinel
        current = head

        # Passo 4: Percorre toda a lista ligada.
        while current:
            if current.val in num_set:
                # Este nó deve ser excluído.
                # Pula-o conectando o nó anterior ao próximo nó do nó atual.
                previous.next = current.next
            else:
                # Este nó é mantido.
                # Avança 'previous' para este nó atual.
                previous = current
            
            # Passo 6: Sempre avança 'current' para o próximo nó.
            current = current.next
        
        # Passo 7: O next do sentinel aponta para o head da lista totalmente modificada.
        return sentinel.next`,
      },
    ],
  },
];

export const getLeetCodeProblemById = (id: string): LeetCodeProblem | undefined => {
  return leetcodeProblems.find((problem) => problem.id === id);
};

export const getLeetCodeProblemsByDifficulty = (difficulty: string): LeetCodeProblem[] => {
  return leetcodeProblems.filter((problem) => problem.difficulty === difficulty);
};

export const getLeetCodeProblemsByCategory = (category: string): LeetCodeProblem[] => {
  return leetcodeProblems.filter((problem) => problem.category.includes(category));
};

export const searchLeetCodeProblems = (query: string): LeetCodeProblem[] => {
  const lowerQuery = query.toLowerCase();
  return leetcodeProblems.filter(
    (problem) =>
      problem.title.toLowerCase().includes(lowerQuery) ||
      problem.number.toString().includes(lowerQuery) ||
      problem.category.some((cat) => cat.toLowerCase().includes(lowerQuery))
  );
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  leetcodeProblems.forEach((problem) => {
    problem.category.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories).sort();
};
