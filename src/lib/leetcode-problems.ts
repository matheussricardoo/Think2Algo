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
    solvedDate: '2025-11-01',
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
  {
    id: 'count-unguarded-cells-in-the-grid',
    number: 2257,
    title: 'Count Unguarded Cells in the Grid',
    difficulty: 'Medium',
    category: ['Array', 'Matrix', 'Simulation'],
    leetcodeUrl: 'https://leetcode.com/problems/count-unguarded-cells-in-the-grid/',
    runtime: '439ms (Beats 46.94%)',
    memory: '39.30MB (Beats 56.12%)',
    solvedDate: '2025-11-02',
    description: {
      en: 'You are given two integers m and n representing a 0-indexed m x n grid. You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively. A guard can see every cell in the four cardinal directions (north, east, south, or west) starting from their position unless obstructed by a wall or another guard. A cell is guarded if there is at least one guard that can see it. Return the number of unoccupied cells that are not guarded.',
      pt: 'Você recebe dois inteiros m e n representando um grid m x n indexado em 0. Você também recebe dois arrays inteiros 2D guards e walls onde guards[i] = [rowi, coli] e walls[j] = [rowj, colj] representam as posições do i-ésimo guarda e da j-ésima parede, respectivamente. Um guarda pode ver todas as células nas quatro direções cardeais (norte, leste, sul ou oeste) a partir de sua posição, a menos que seja obstruído por uma parede ou outro guarda. Uma célula é vigiada se houver pelo menos um guarda que possa vê-la. Retorne o número de células desocupadas que não são vigiadas.',
    },
    examples: [
      {
        input: 'm = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]',
        output: '7',
        explanation: 'The guarded and unguarded cells are shown in red and green respectively in the above diagram. There are a total of 7 unguarded cells, so we return 7.',
      },
      {
        input: 'm = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]',
        output: '4',
        explanation: 'The unguarded cells are shown in green in the above diagram. There are a total of 4 unguarded cells, so we return 4.',
      },
    ],
    constraints: [
      '1 <= m, n <= 10^5',
      '2 <= m * n <= 10^5',
      '1 <= guards.length, walls.length <= 5 * 10^4',
      '2 <= guards.length + walls.length <= m * n',
      'guards[i].length == walls[j].length == 2',
      '0 <= rowi, rowj < m',
      '0 <= coli, colj < n',
      'All the positions in guards and walls are unique.',
    ],
    intuition: {
      en: `When first looking at this problem, a naive approach might be to iterate through each guard and simulate their line of sight in all four directions, marking cells as guarded until a wall or another guard is hit. However, this is inefficient because multiple guards might see the same cells, causing us to re-process them unnecessarily.

The key insight behind this solution is to reframe the problem. Instead of simulating vision from each guard, we can sweep across the entire grid and track the "guarded state". For example, to handle all horizontal vision, we can iterate through each row. Once we encounter a guard, we know every subsequent cell in that row is guarded until we hit a wall or another obstacle.

This suggests a state-based traversal. We can make four passes over the grid: one for each cardinal direction (left-to-right, right-to-left, top-to-bottom, and bottom-to-top). During each pass, we maintain a boolean state (\`isGuarded\`) that tells us if the current line of cells is under a guard's watch. This way, we mark all guarded cells efficiently in just a few full grid traversals.`,
      pt: `Ao analisar este problema, uma abordagem ingênua seria iterar por cada guarda e simular sua linha de visão nas quatro direções, marcando as células como vigiadas até que uma parede ou outro guarda seja encontrado. No entanto, isso é ineficiente porque vários guardas podem vigiar as mesmas células, fazendo com que as reprocessássemos desnecessariamente.

A percepção chave por trás desta solução é reformular o problema. Em vez de simular a visão a partir de cada guarda, podemos varrer todo o grid e rastrear o "estado de vigilância". Por exemplo, para lidar com toda a visão horizontal, podemos iterar por cada linha. Assim que encontrarmos um guarda, sabemos que cada célula subsequente naquela linha está vigiada até atingirmos uma parede ou outro obstáculo.

Isso sugere uma travessia baseada em estado. Podemos fazer quatro passagens pelo grid: uma para cada direção cardeal (esquerda-para-direita, direita-para-esquerda, cima-para-baixo e baixo-para-cima). Durante cada passagem, mantemos um estado booleano (\`isGuarded\`) que nos diz se a linha atual de células está sob o olhar de um guarda. Dessa forma, marcamos todas as células vigiadas de forma eficiente em apenas algumas travessias completas do grid.`,
    },
    approach: {
      en: `The algorithm uses an auxiliary grid to represent the state of each cell and performs four directional sweeps to mark all guarded cells.

1. Grid Initialization: Create an \`m x n\` grid and initialize all cells to \`0\` (Empty). We'll use integer codes for clarity: \`0\` for Empty, \`1\` for Guard, \`2\` for Wall, and \`3\` for Guarded.

2. Place Obstacles: Populate the grid by iterating through the \`guards\` and \`walls\` lists, placing \`1\`s and \`2\`s at their respective coordinates. These are the fixed elements that control the line of sight.

3. Mark Horizontally Guarded Cells (East and West):
    - Left-to-Right Pass: Iterate through each row from left to right (\`c\` from \`0\` to \`n-1\`). Maintain a state variable \`isGuarded\`.
        - If \`grid[r][c]\` is a Guard (\`1\`), set \`isGuarded = true\`.
        - If \`grid[r][c]\` is a Wall (\`2\`), set \`isGuarded = false\` (vision is blocked).
        - If \`isGuarded\` is true and \`grid[r][c]\` is an empty cell (\`0\`), update it to Guarded (\`3\`).
    - Right-to-Left Pass: Repeat the same logic for each row, but iterate from right to left (\`c\` from \`n-1\` to \`0\`). This correctly marks cells seen by guards looking west.

4. Mark Vertically Guarded Cells (South and North):
    - Top-to-Bottom Pass: Iterate through each column from top to bottom (\`r\` from \`0\` to \`m-1\`). Use the same \`isGuarded\` state logic to mark cells seen by guards looking south.
    - Bottom-to-Top Pass: Repeat for each column, but iterate from bottom to top (\`r\` from \`m-1\` to \`0\`) to handle guards looking north.

5. Count Unguarded Cells: After all four passes, the grid is fully marked. Traverse the grid one final time and count the number of cells that are still \`0\`. These are the cells that are empty and not seen by any guard. Return this count.`,
      pt: `O algoritmo usa um grid auxiliar para representar o estado de cada célula e realiza quatro varreduras direcionais para marcar todas as células vigiadas.

1. Inicialização do Grid: Crie um grid \`m x n\` e inicialize todas as células como \`0\` (Vazio). Usaremos códigos inteiros para clareza: \`0\` para Vazio, \`1\` para Guarda, \`2\` para Parede e \`3\` para Vigiado.

2. Posicionar Obstáculos: Preencha o grid iterando pelas listas \`guards\` e \`walls\`, posicionando \`1\`s e \`2\`s em suas respectivas coordenadas. Estes são os elementos fixos que controlam a linha de visão.

3. Marcar Células Vigiadas Horizontalmente (Leste e Oeste):
    - Passagem da Esquerda para a Direita: Itere por cada linha da esquerda para a direita (\`c\` de \`0\` a \`n-1\`). Mantenha uma variável de estado \`isGuarded\`.
        - Se \`grid[r][c]\` for um Guarda (\`1\`), defina \`isGuarded = true\`.
        - Se \`grid[r][c]\` for uma Parede (\`2\`), defina \`isGuarded = false\` (visão bloqueada).
        - Se \`isGuarded\` for verdadeiro e \`grid[r][c]\` for uma célula vazia (\`0\`), atualize-a para Vigiada (\`3\`).
    - Passagem da Direita para a Esquerda: Repita a mesma lógica para cada linha, mas iterando da direita para a esquerda (\`c\` de \`n-1\` a \`0\`). Isso marca corretamente as células vistas por guardas olhando para o oeste.

4. Marcar Células Vigiadas Verticalmente (Sul e Norte):
    - Passagem de Cima para Baixo: Itere por cada coluna de cima para baixo (\`r\` de \`0\` a \`m-1\`). Use a mesma lógica de estado \`isGuarded\` para marcar as células vistas por guardas olhando para o sul.
    - Passagem de Baixo para Cima: Repita para cada coluna, mas iterando de baixo para cima (\`r\` de \`m-1\` a \`0\`) para lidar com guardas olhando para o norte.

5. Contar Células Não Vigiadas: Após as quatro passagens, o grid está totalmente marcado. Percorra o grid uma última vez e conte o número de células que ainda são \`0\`. Estas são as células que estão vazias e não são vistas por nenhum guarda. Retorne essa contagem.`,
    },
    complexity: {
      time: 'O(m × n)',
      space: 'O(m × n)',
      explanation: {
        en: 'The algorithm is dominated by the grid traversals. We initialize the grid (O(m × n)), place guards and walls (O(G+W), where G and W are the number of guards and walls, which is less than m × n), and then perform four full sweeps of the grid, each taking O(m × n) time. The final count also takes O(m × n). Therefore, the total time complexity is linear in the size of the grid. We use an auxiliary grid of size m x n to store the state of each cell. This is the dominant factor in space usage.',
        pt: 'O algoritmo é dominado pelas travessias do grid. Inicializamos o grid (O(m × n)), posicionamos guardas e paredes (O(G+W), onde G e W são os números de guardas e paredes, que é menor que m × n), e então realizamos quatro varreduras completas do grid, cada uma levando tempo O(m × n). A contagem final também leva O(m × n). Portanto, a complexidade de tempo total é linear em relação ao tamanho do grid. Usamos um grid auxiliar de tamanho m x n para armazenar o estado de cada célula. Este é o fator dominante no uso de espaço.',
      },
    },
    code: [
      {
        language: 'python',
        content: `from typing import List

# State Codes:
# 0 = Empty
# 1 = Guard
# 2 = Wall
# 3 = Guarded

class Solution:
    def countUnguarded(self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        # Step 1: Initialize grid with 0s (Empty)
        grid = [[0] * n for _ in range(m)]

        # Step 2: Place guards (1) and walls (2)
        for r, c in guards:
            grid[r][c] = 1
        for r, c in walls:
            grid[r][c] = 2
        
        # Step 3: Mark Horizontally Guarded Cells
        for r in range(m):
            # Left-to-Right Pass (Eastward vision)
            isGuarded = False
            for c in range(n):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3
            
            # Right-to-Left Pass (Westward vision)
            isGuarded = False
            for c in range(n - 1, -1, -1):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3
            
        # Step 4: Mark Vertically Guarded Cells
        for c in range(n):
            # Top-to-Bottom Pass (Southward vision)
            isGuarded = False
            for r in range(m):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3

            # Bottom-to-Top Pass (Northward vision)
            isGuarded = False
            for r in range(m - 1, -1, -1):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3
                
        # Step 5: Count remaining empty (0) cells
        count = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 0:
                    count += 1
            
        return count`,
        contentPt: `from typing import List

# Códigos de Estado:
# 0 = Vazio
# 1 = Guarda
# 2 = Parede
# 3 = Vigiado

class Solution:
    def countUnguarded(self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        # Passo 1: Inicializa o grid com 0s (Vazio)
        grid = [[0] * n for _ in range(m)]

        # Passo 2: Posiciona guardas (1) e paredes (2)
        for r, c in guards:
            grid[r][c] = 1
        for r, c in walls:
            grid[r][c] = 2
        
        # Passo 3: Marca as Células Vigiadas Horizontalmente
        for r in range(m):
            # Passagem da Esquerda para a Direita (visão para o Leste)
            isGuarded = False
            for c in range(n):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3
            
            # Passagem da Direita para a Esquerda (visão para o Oeste)
            isGuarded = False
            for c in range(n - 1, -1, -1):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3
            
        # Passo 4: Marca as Células Vigiadas Verticalmente
        for c in range(n):
            # Passagem de Cima para Baixo (visão para o Sul)
            isGuarded = False
            for r in range(m):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3

            # Passagem de Baixo para Cima (visão para o Norte)
            isGuarded = False
            for r in range(m - 1, -1, -1):
                if grid[r][c] in (1, 2):
                    isGuarded = (grid[r][c] == 1)
                elif isGuarded and grid[r][c] == 0:
                    grid[r][c] = 3
                
        # Passo 5: Conta as células vazias (0) restantes
        count = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 0:
                    count += 1
            
        return count`,
      },
    ],
  },
  {
    id: 'minimum-time-to-make-rope-colorful',
    number: 1578,
    title: 'Minimum Time to Make Rope Colorful',
    difficulty: 'Medium',
    category: ['Array', 'Greedy'],
    leetcodeUrl: 'https://leetcode.com/problems/minimum-time-to-make-rope-colorful/',
    runtime: '135ms (Beats 40.30%)',
    memory: '26.50MB (Beats 18.82%)',
    solvedDate: '2025-11-03',
    description: {
      en: 'Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon. Alice wants the rope to be colorful. She does not want two consecutive balloons of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (cost) that Bob needs to remove the ith balloon from the rope. Return the minimum time Bob needs to make the rope colorful.',
      pt: 'Alice tem n balões arranjados em uma corda. Você recebe uma string indexada em 0 chamada colors onde colors[i] é a cor do i-ésimo balão. Alice quer que a corda seja colorida. Ela não quer dois balões consecutivos da mesma cor, então ela pede ajuda a Bob. Bob pode remover alguns balões da corda para torná-la colorida. Você recebe um array de inteiros indexado em 0 chamado neededTime onde neededTime[i] é o tempo (custo) que Bob precisa para remover o i-ésimo balão da corda. Retorne o tempo mínimo que Bob precisa para tornar a corda colorida.',
    },
    examples: [
      {
        input: 'colors = "abaac", neededTime = [1,2,3,4,5]',
        output: '3',
        explanation: 'Bob will remove the balloon at position 2, with a time cost of 3.',
      },
      {
        input: 'colors = "abc", neededTime = [1,2,3]',
        output: '0',
        explanation: 'The rope is already colorful. Bob does not need to remove any balloons.',
      },
      {
        input: 'colors = "aabaa", neededTime = [1,2,3,4,5]',
        output: '2',
        explanation: 'Bob will remove the balloon at position 0 and the balloon at position 1, with a total time cost of 1 + 2 = 2.',
      },
    ],
    constraints: [
      'n == colors.length == neededTime.length',
      '1 <= n <= 10^5',
      '1 <= neededTime[i] <= 10^4',
      'colors contains only lowercase English letters.',
    ],
    intuition: {
      en: `This problem involves removing balloons to ensure no two consecutive balloons have the same color, minimizing the total removal time. The key insight is that for each group of consecutive balloons of the same color, we need to keep only one balloon (the one with the highest removal time) and remove all others in that group. This greedy approach ensures we minimize the cost because we always preserve the most expensive balloon in each group, which would be the most costly to remove if we had to.`,
      pt: `Este problema envolve remover balões para garantir que nenhum dois balões consecutivos tenham a mesma cor, minimizando o tempo total de remoção. A percepção chave é que para cada grupo de balões consecutivos da mesma cor, precisamos manter apenas um balão (aquele com o maior tempo de remoção) e remover todos os outros nesse grupo. Esta abordagem gananciosa garante que minimizamos o custo porque sempre preservamos o balão mais caro em cada grupo, que seria o mais custoso de remover se tivéssemos que.`,
    },
    approach: {
      en: `We use a single-pass greedy algorithm to solve this problem efficiently.

1. Initialize variables: \`total_time = 0\` to accumulate the removal cost, and \`max_cost_in_group = neededTime[0]\` to track the maximum cost in the current group of consecutive same-colored balloons.

2. Iterate through the balloons starting from the second one (index 1):
   - If the current balloon has the same color as the previous one, it's part of the same group.
     - Add the minimum of the current balloon's cost and the max cost in the group to total_time.
     - Update max_cost_in_group to the maximum of its current value and the current balloon's cost.
   - If the colors differ, start a new group by setting max_cost_in_group to the current balloon's cost.

3. Return the total_time, which represents the minimum cost to make the rope colorful.

This approach ensures that in each group of consecutive same-colored balloons, we keep the one with the highest removal cost and remove the others, minimizing the total removal time.`,
      pt: `Usamos um algoritmo ganancioso de passagem única para resolver este problema de forma eficiente.

1. Inicialize variáveis: \`total_time = 0\` para acumular o custo de remoção, e \`max_cost_in_group = neededTime[0]\` para rastrear o custo máximo no grupo atual de balões consecutivos da mesma cor.

2. Itere pelos balões começando do segundo (índice 1):
   - Se o balão atual tiver a mesma cor que o anterior, faz parte do mesmo grupo.
     - Adicione o mínimo do custo do balão atual e o custo máximo no grupo ao total_time.
     - Atualize max_cost_in_group para o máximo de seu valor atual e o custo do balão atual.
   - Se as cores diferirem, inicie um novo grupo definindo max_cost_in_group para o custo do balão atual.

3. Retorne o total_time, que representa o custo mínimo para tornar a corda colorida.

Esta abordagem garante que em cada grupo de balões consecutivos da mesma cor, mantemos aquele com o maior custo de remoção e removemos os outros, minimizando o tempo total de remoção.`,
    },
    complexity: {
      time: 'O(n)',
      space: 'O(1)',
      explanation: {
        en: 'We iterate through the array once, performing constant-time operations for each element. This gives us linear time complexity. We use only a few variables, so space complexity is constant.',
        pt: 'Iteramos pelo array uma vez, realizando operações de tempo constante para cada elemento. Isso nos dá complexidade de tempo linear. Usamos apenas algumas variáveis, então a complexidade de espaço é constante.',
      },
    },
    code: [
      {
        language: 'python',
        content: `from typing import List

class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        total_time = 0
        max_cost_in_group = neededTime[0]
        
        for i in range(1, len(colors)):
            if colors[i] == colors[i-1]:
                # Conflito encontrado. Adiciona o mais barato ao tempo total.
                total_time += min(max_cost_in_group, neededTime[i])
                # O "sobrevivente" para a próxima comparação é o mais caro.
                max_cost_in_group = max(max_cost_in_group, neededTime[i])
            else:
                # Novo grupo começa. Reseta o custo máximo para este novo grupo.
                max_cost_in_group = neededTime[i]
                
        return total_time`,
        contentPt: `from typing import List

class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        total_time = 0
        max_cost_in_group = neededTime[0]
        
        for i in range(1, len(colors)):
            if colors[i] == colors[i-1]:
                # Conflito encontrado. Adiciona o mais barato ao tempo total.
                total_time += min(max_cost_in_group, neededTime[i])
                # O "sobrevivente" para a próxima comparação é o mais caro.
                max_cost_in_group = max(max_cost_in_group, neededTime[i])
            else:
                # Novo grupo começa. Reseta o custo máximo para este novo grupo.
                max_cost_in_group = neededTime[i]
                
        return total_time`,
      },
    ],
  },
  {
    id: 'find-x-sum-of-all-k-long-subarrays-i',
    number: 3318,
    title: 'Find X-Sum of All K-Long Subarrays I',
    difficulty: 'Easy',
    category: ['Array', 'Hash Table', 'Sliding Window'],
    leetcodeUrl: 'https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/',
    runtime: '23ms (Beats 74.29%)',
    memory: '17.82MB (Beats 59.90%)',
    solvedDate: '2025-11-04',
    description: {
      en: 'You are given an array nums of n integers and two integers k and x. For each contiguous subarray of length k, compute its x-sum: keep only the occurrences of the top x most frequent elements (tie-breaker: larger value wins) and sum the remaining elements. Return the list of x-sums for every k-length window.',
      pt: 'Você recebe um array nums de n inteiros e dois inteiros k e x. Para cada subarray contíguo de tamanho k, calcule sua x-soma: mantenha apenas as ocorrências dos x elementos mais frequentes (em caso de empate, o elemento de maior valor vence) e some os elementos restantes. Retorne a lista de x-somas para todas as janelas de tamanho k.',
    },
    examples: [
      {
        input: 'nums = [1,1,2,2,3,4,2,3], k = 6, x = 2',
        output: '[6,10,12]',
        explanation: 'For [1,1,2,2,3,4] -> keep 1 and 2 -> sum=6; [1,2,2,3,4,2] -> keep 2 and 4 (4 beats 3 on tie) -> sum=10; [2,2,3,4,2,3] -> keep 2 and 3 -> sum=12.',
      },
      {
        input: 'nums = [3,8,7,8,7,5], k = 2, x = 2',
        output: '[11,15,15,15,12]',
        explanation: 'When k == x the x-sum is the sum of the window itself.',
      },
    ],
    constraints: [
      '1 <= n == nums.length <= 50',
      '1 <= nums[i] <= 50',
      '1 <= x <= k <= nums.length',
    ],
    intuition: {
      en: `Compute the x-sum for a single window by counting frequencies, ranking by (frequency, value) and summing elements that belong to the top x distinct values. Because n <= 50, it's fine to do this from scratch for every window (brute-force sliding windows).`,
      pt: `Calcule a x-soma para uma janela contando frequências, ordenando por (frequência, valor) e somando apenas os elementos que pertencem aos x valores distintos mais frequentes. Como n <= 50, é aceitável recalcular para cada janela (força bruta).`,
    },
    approach: {
      en: `For each window: count frequencies with Counter, if distinct <= x return sum(window). Otherwise, build list of (freq, value), sort descending (freq then value), take top x values into a set, then sum only elements in the set. Slide the window by extracting subarray each time (n is small).`,
      pt: `Para cada janela: conte frequências com Counter, se o número de distintos <= x retorne sum(window). Caso contrário, crie lista (freq, valor), ordene decrescentemente (freq depois valor), pegue os x valores principais em um set e some apenas os elementos presentes no set. Deslize a janela extraindo o subarray a cada iteração (n é pequeno).`,
    },
    complexity: {
      time: 'O((n-k+1) * k log k) — aceitável para n <= 50',
      space: 'O(k)',
      explanation: {
        en: 'Each window does counting (O(k)) and sorting up to k distinct elements (O(k log k)). There are O(n) windows so total is O((n-k+1)*k log k).',
        pt: 'Cada janela faz contagem (O(k)) e ordenação de até k distintos (O(k log k)). Há O(n) janelas então o total é O((n-k+1)*k log k).',
      },
    },
    code: [
      {
        language: 'python',
        content: `from collections import Counter
from typing import List

class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        def calculate_x_sum(window, x_val):
            counts = Counter(window)
            if len(counts) <= x_val:
                return sum(window)

            freq_list = [(cnt, val) for val, cnt in counts.items()]
            # sort by frequency desc, then value desc
            freq_list.sort(reverse=True)

            top_x = set(val for _, val in freq_list[:x_val])
            total = 0
            for v in window:
                if v in top_x:
                    total += v
            return total

        n = len(nums)
        ans = []
        for i in range(n - k + 1):
            window = nums[i:i+k]
            ans.append(calculate_x_sum(window, x))
        return ans`,
        contentPt: `from collections import Counter
from typing import List

class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        def calculate_x_sum(window, x_val):
            counts = Counter(window)
            if len(counts) <= x_val:
                return sum(window)

            freq_list = [(cnt, val) for val, cnt in counts.items()]
            # ordena por frequência desc, depois valor desc
            freq_list.sort(reverse=True)

            top_x = set(val for _, val in freq_list[:x_val])
            total = 0
            for v in window:
                if v in top_x:
                    total += v
            return total

        n = len(nums)
        ans = []
        for i in range(n - k + 1):
            window = nums[i:i+k]
            ans.append(calculate_x_sum(window, x))
        return ans`,
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