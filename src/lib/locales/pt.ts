
export const pt = {
  sidebar: {
    title: 'Think2Algo',
    theory: 'Teoria',
    algorithms: 'Algoritmos',
    challenges: 'Desafios',
    bigO: 'Notação Big O',
  },
  workspace: {
    selectAlgorithm: 'Selecione um algoritmo para ver os detalhes.',
  },
  bigO: {
    title: 'Entendendo a Notação Big O',
    description: 'A notação Big O é como programadores falam sobre a eficiência de algoritmos. Ela mede o pior caso de tempo ou espaço que um algoritmo leva para ser concluído em relação ao tamanho de sua entrada (n). Em termos simples, descreve como o desempenho de um algoritmo escala à medida que os dados de entrada crescem.',
    importanceTitle: 'Por que é Importante?',
    importanceDescription: 'Conhecer o Big O ajuda você a escolher o algoritmo certo para o trabalho. Um algoritmo que funciona bem para uma entrada pequena pode se tornar inutilizavelmente lento com uma entrada grande. Entender o Big O ajuda a evitar gargalos de desempenho e a escrever código mais rápido e escalável.',
    complexities: {
      title: 'Complexidades Comuns',
      exampleLabel: 'Exemplo:',
      constant: {
        name: 'O(1) — Tempo Constante',
        description: 'O algoritmo leva a mesma quantidade de tempo, independentemente do tamanho da entrada. Este é o ideal.',
        example: 'Acessar um elemento em um array pelo seu índice (ex: `meu_array[5]`).',
      },
      logarithmic: {
        name: 'O(log n) — Tempo Logarítmico',
        description: 'O tempo que leva aumenta com o tamanho da entrada, mas o faz muito lentamente. Isso acontece quando o tamanho do problema é reduzido pela metade a cada passo.',
        example: 'Busca Binária em um array ordenado.',
      },
      linear: {
        name: 'O(n) — Tempo Linear',
        description: 'O tempo de execução é diretamente proporcional ao tamanho da entrada (n). Se você dobrar a entrada, o tempo de execução dobra aproximadamente.',
        example: 'Iterar por todos os elementos de uma lista ou array.',
      },
      loglinear: {
        name: 'O(n log n) — Tempo Log-Linear',
        description: 'Esta é uma complexidade comum para algoritmos de ordenação eficientes. É um pouco mais lento que o linear, mas ainda muito performático para grandes conjuntos de dados.',
        example: 'Algoritmos de ordenação eficientes como Merge Sort ou Quick Sort.',
      },
      quadratic: {
        name: 'O(n²) — Tempo Quadrático',
        description: 'O tempo de execução é proporcional ao quadrado do tamanho da entrada. Isso se torna lento muito rapidamente à medida que n cresce.',
        example: 'Loops aninhados, onde você compara cada elemento de uma lista com todos os outros elementos (ex: encontrar todos os pares em uma lista).',
      },
      exponential: {
        name: 'O(2^n) — Tempo Exponencial',
        description: 'O tempo de execução dobra para cada novo elemento no conjunto de entrada. Esses algoritmos são extremamente lentos e práticos apenas para tamanhos de entrada muito pequenos.',
        example: 'Resolver problemas com soluções recursivas de força bruta, como encontrar todos os subconjuntos de um conjunto (backtracking).',
      },
    },
  },
  algorithmDetails: {
    whenToUse: 'Quando Usar',
    keywords: 'Palavras-chave e Sinais',
    typicalProblem: 'Problema Típico',
    codeTemplates: 'Modelos de Código',
    codeTemplatesDescription: 'Modelos básicos em Python e JavaScript para você começar.',
    bigO: 'Notação Big O',
    bigODescription: 'As características de desempenho deste algoritmo.',
    timeComplexity: 'Complexidade de Tempo',
    spaceComplexity: 'Complexidade de Espaço',
    best: 'Melhor',
    average: 'Médio',
    worst: 'Pior',
    practiceThisAlgorithm: 'Praticar este algoritmo',
  },
  codeBlock: {
    copied: 'Copiado para a área de transferência!',
    copiedSuccess: 'O código {language} foi copiado.',
    copyCode: 'Copiar código',
  },
  challengeLabels: {
    title: 'Desafios de Algoritmo',
    learningTip: 'Para aprender ainda melhor, além de praticar com os desafios de flashcard, é bom anotar os exercícios, o algoritmo correto e construir a solução em um caderno para aprender e fixar o conhecimento.',
    nextChallenge: 'Próximo Desafio',
    problem: 'Problema',
    inputExample: 'Exemplo de Entrada',
    outputExample: 'Saída Esperada',
    whichAlgorithm: 'Qual algoritmo é mais adequado?',
    checkAnswer: 'Verificar Resposta',
    showSolution: 'Ver Solução em Python',
    hideSolution: 'Ocultar Solução',
    solutionExplanation: 'Explicação da Solução',
    selectOptionTitle: 'Selecione uma opção',
    selectOptionDesc: 'Você precisa escolher um algoritmo antes de verificar a resposta.',
    correctTitle: 'Correto!',
    correctDesc: 'Ótimo trabalho!',
    incorrectTitle: 'Incorreto!',
    incorrectDesc: 'Tente novamente. Dica: Pense nas palavras-chave do problema.',
    correctExclamation: '🎉 Correto! 🎉',
    correctSolution: 'O algoritmo correto é {solution}. Bom trabalho!',
    incorrectExclamation: 'Quase lá!',
    incorrectSolution: 'A resposta correta é {solution}. Não se preocupe, continue tentando!',
    hint: 'Dica',
    tryAgain: 'Tentar Novamente',
    loading: 'Carregando desafios...',
    showingChallengesFor: 'Mostrando desafios para: {algorithm}',
    showingChallengesForDescription: 'Pratique com problemas específicos para este algoritmo para dominá-lo.',
    clearFilter: 'Limpar filtro e ver todos os desafios',
    noChallengesFound: 'Nenhum desafio encontrado para este filtro.',
  },
  algorithms: {
    'sliding-window': {
        name: 'Janela Deslizante',
        whenToUse: 'O problema envolve uma estrutura de dados linear (array, lista, string) e pede para encontrar uma subseção contígua (subarray ou substring) que seja ótima de alguma forma (a mais longa, a mais curta, soma máxima, etc.).',
        keywords: ['subarray contíguo', 'substring', 'comprimento mais longo/curto', 'soma máxima/mínima', 'contém k elementos distintos'],
        example: 'Dado um array de inteiros, encontre a soma máxima de qualquer subarray contíguo de tamanho k.'
    },
    'two-pointers': {
        name: 'Dois Ponteiros',
        whenToUse: 'O problema envolve um array ordenado (ou que pode ser ordenado) e busca um par ou trio de elementos que satisfaçam uma condição. Frequentemente, um ponteiro começa no início e outro no final, movendo-se um em direção ao outro.',
        keywords: ['array ordenado', 'encontrar um par/trio', 'soma alvo', 'remover duplicatas', 'palíndromo'],
        example: 'Em um array ordenado, encontre dois números que somam um valor alvo X.'
    },
    'backtracking': {
        name: 'Backtracking',
        whenToUse: 'O problema pede para encontrar todas as soluções possíveis ou uma única solução que satisfaça restrições complexas, construindo a resposta passo a passo. Se uma escolha leva a um beco sem saída, você "volta atrás" (backtrack) e tenta outra. É uma Busca em Profundidade (DFS) estruturada.',
        keywords: ['encontrar todas as combinações', 'permutações', 'subconjuntos', 'caminhos possíveis', 'quebra-cabeça', 'Sudoku', 'labirinto'],
        example: 'Dado um conjunto de números, encontre todos os subconjuntos únicos.'
    },
    'dynamic-programming': {
        name: 'Programação Dinâmica (PD)',
        whenToUse: 'É um problema de otimização (encontrar o máximo/mínimo) ou um problema de contagem (contar o número de maneiras) onde a solução para um problema maior pode ser construída a partir das soluções de subproblemas menores e sobrepostos.',
        keywords: ['número de maneiras de...', 'caminho de custo mínimo/máximo', 'valor máximo/mínimo obtenível', 'lucro máximo'],
        example: 'Problema da Mochila: Dados itens com pesos e valores, qual é o valor máximo que pode caber em uma mochila de capacidade W?'
    },
    'bfs': {
        name: 'Busca em Largura (BFS)',
        whenToUse: 'O problema envolve grafos ou matrizes e pede o caminho mais curto de um ponto a outro, assumindo que todos os passos têm o mesmo custo. O BFS explora a vizinhança em "camadas".',
        keywords: ['caminho mais curto', 'menor número de passos', 'níveis de uma árvore', 'grafo não ponderado', 'labirinto'],
        example: 'Em uma matriz com paredes, encontre o menor número de passos para ir do canto superior esquerdo ao canto inferior direito.'
    },
    'dfs': {
        name: 'Busca em Profundidade (DFS)',
        whenToUse: 'O problema envolve grafos ou matrizes e pede para explorar caminhos até o fim, verificar se um caminho existe ou encontrar componentes conectados. Não garante o caminho mais curto.',
        keywords: ['encontrar um caminho (qualquer)', 'verificar se o caminho existe', 'componentes conectados', 'ciclos em um grafo', 'contar ilhas'],
        example: 'Dada uma matriz de 1s (terra) e 0s (água), conte o número de ilhas.'
    },
    'heap': {
        name: 'Fila de Prioridade (Heap)',
        whenToUse: 'O problema pede para encontrar ou manter o controle dos "top K" elementos (K maiores ou K menores) de uma coleção de dados.',
        keywords: ['k-ésimo maior/menor elemento', 'top k', 'mediana de um fluxo', 'agendar tarefas'],
        example: 'Encontre os 10 tweets mais curtidos de um feed em tempo real.'
    },
    'binary-search': {
        name: 'Busca Binária',
        whenToUse: 'O problema envolve encontrar um item em um array ordenado. De forma mais avançada, pode ser usado em problemas de otimização onde você pode "adivinhar" uma resposta e verificar se é válida, e o espaço de busca das respostas é monotônico.',
        keywords: ['array ordenado', 'encontrar índice de', 'o menor/maior valor X tal que...'],
        example: 'Encontre o primeiro número em um array ordenado que seja maior ou equal a Y.'
    }
  },
  challenges: [
    // Fácil
    { 
      problem: 'Dado um array ordenado de inteiros distintos e um valor alvo, retorne o índice se o alvo for encontrado. Se não, retorne o índice onde ele estaria se fosse inserido em ordem.',
      solution: 'binary-search',
      difficulty: 'Fácil',
      input: 'nums = [1,3,5,6], target = 5',
      output: '2',
      explanation: 'Usamos busca binária para encontrar o alvo ou sua posição de inserção em O(log n). Comparamos o alvo com o elemento do meio e ajustamos os ponteiros `left`/`right` conforme necessário.',
      pythonSolution: `def searchInsert(nums, target):
    """
    Problema: Dado um array ordenado e um alvo, encontre o índice do alvo.
    Se não encontrado, retorne o índice onde seria inserido.
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
    
    # Se o loop terminar, 'left' é o ponto de inserção
    return left`
    },
    { 
      problem: 'Dado um array de inteiros `nums`, calcule o índice pivô deste array. O índice pivô é o índice onde a soma de todos os números estritamente à esquerda do índice é igual à soma de todos os números estritamente à direita do índice.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [1,7,3,6,5,6]',
      output: '3',
      explanation: 'Calculamos a soma total primeiro. Depois, iteramos pelo array mantendo uma soma da esquerda. O pivô é onde `soma_esquerda == soma_total - soma_esquerda - nums[i]`.',
      pythonSolution: `def pivotIndex(nums):
    """
    Problema: Encontrar o índice pivô onde a soma dos números à esquerda
    é igual à soma dos números à direita.
    """
    total_sum = sum(nums)
    left_sum = 0
    
    for i in range(len(nums)):
        # A soma direita é a soma total - soma esquerda - elemento atual
        right_sum = total_sum - left_sum - nums[i]
        if left_sum == right_sum:
            return i
        left_sum += nums[i]
    
    return -1`
    },
    { 
      problem: 'Dada uma string, encontre o comprimento da substring mais longa sem caracteres repetidos.',
      solution: 'sliding-window',
      difficulty: 'Médio',
      input: 's = "abcabcbb"',
      output: '3',
      explanation: 'Usamos uma janela deslizante com dois ponteiros. Expandimos a janela adicionando caracteres únicos e a contraímos quando encontramos um duplicado. Mantemos o controle do comprimento máximo.',
      pythonSolution: `def lengthOfLongestSubstring(s):
    """
    Problema: Encontrar o comprimento da substring mais longa sem caracteres repetidos.
    """
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        # Se o caractere já está no conjunto,
        # encolha a janela pela esquerda até que ele seja removido.
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        # Adiciona o novo caractere ao conjunto
        char_set.add(s[right])
        # Atualiza o comprimento máximo encontrado
        max_length = max(max_length, right - left + 1)
    
    return max_length`
    },
    { 
      problem: 'Você recebe uma string `s`. O custo de deletar um único caractere é dado. Retorne o custo mínimo para tornar todos os caracteres em `s` únicos.',
      solution: 'heap',
      difficulty: 'Fácil',
      input: 's = "aab", costs = [1,2,3]',
      output: '2',
      explanation: 'Usamos uma heap (fila de prioridade) para rastrear os custos de caracteres duplicados. Para cada grupo de caracteres idênticos, removemos todos, exceto o de maior custo.',
      pythonSolution: `import heapq
from collections import defaultdict

def minCostToMakeUnique(s, costs):
    """
    Problema: Dada uma string e custos para deletar caracteres, encontre o custo
    mínimo para tornar todos os caracteres únicos.
    """
    char_costs = defaultdict(list)
    
    # Agrupa os custos por caractere
    for i, char in enumerate(s):
        heapq.heappush(char_costs[char], costs[i])
    
    total_cost = 0
    
    # Para cada grupo de caracteres duplicados, some os custos de todos,
    # exceto o mais caro, para manter.
    for char, cost_list in char_costs.items():
        while len(cost_list) > 1:
            total_cost += heapq.heappop(cost_list)
    
    return total_cost`
    },
    { 
      problem: 'Dada uma árvore binária, encontre sua profundidade máxima. A profundidade máxima é o número de nós ao longo do caminho mais longo do nó raiz até a folha mais distante.',
      solution: 'dfs',
      difficulty: 'Fácil',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '3',
      explanation: 'Usamos DFS recursivo. A profundidade máxima é 1 + o máximo das profundidades das subárvores esquerda e direita. O caso base é um nó nulo, que tem profundidade 0.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    """
    Problema: Encontrar a profundidade máxima de uma árvore binária.
    """
    # Caso base: se o nó é nulo, sua profundidade é 0.
    if not root:
        return 0
    
    # Encontra recursivamente a profundidade das subárvores esquerda e direita.
    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)
    
    # A profundidade da árvore é 1 (para o nó atual) + o máximo das duas subárvores.
    return 1 + max(left_depth, right_depth)`
    },
    { 
      problem: 'Dadas duas strings `s` e `t`, retorne `true` se `t` for um anagrama de `s`, e `false` caso contrário.',
      solution: 'sliding-window',
      difficulty: 'Fácil',
      input: 's = "anagram", t = "nagaram"',
      output: 'true',
      explanation: 'Podemos usar várias abordagens: ordenar ambas as strings, contar as frequências dos caracteres ou usar uma janela deslizante. Contar é a mais eficiente.',
      pythonSolution: `from collections import Counter

def isAnagram(s, t):
    """
    Determinar se t é anagrama de s.
    """
    # Anagramas devem ter mesmo comprimento
    if len(s) != len(t):
        return False
    
    # Contar frequência dos caracteres
    return Counter(s) == Counter(t)`
    },
    { 
      problem: 'Escreva uma função para encontrar o prefixo comum mais longo entre um array de strings.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'strs = ["flower","flow","flight"]',
      output: '"fl"',
      explanation: 'Comparamos a primeira string caractere por caractere com todas as outras. Paramos quando encontramos uma divergência ou chegamos ao final de qualquer string.',
      pythonSolution: `def longestCommonPrefix(strs):
    """
    Problema: Encontrar o prefixo comum mais longo em um array de strings.
    """
    if not strs:
        return ""
    
    # Itera através dos caracteres da primeira string.
    for i, char in enumerate(strs[0]):
        # Compara este caractere com a mesma posição em todas as outras strings.
        for other_str in strs[1:]:
            # Se a outra string é mais curta ou o caractere não corresponde,
            # encontramos o fim do prefixo comum.
            if i >= len(other_str) or other_str[i] != char:
                return strs[0][:i]
    
    # Se o loop terminar, a primeira string inteira é o prefixo comum.
    return strs[0]`
    },
    { 
      problem: 'Dada a `root` de uma árvore binária, verifique se ela é um espelho de si mesma (ou seja, simétrica em relação ao seu centro).',
      solution: 'dfs',
      difficulty: 'Fácil',
      input: 'root = [1,2,2,3,4,4,3]',
      output: 'true',
      explanation: 'Usamos DFS recursivo para comparar a subárvore esquerda com a direita. Verificamos se `left.val == right.val` e se `left.left` é um espelho de `right.right`.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSymmetric(root):
    """
    Problema: Verificar se uma árvore binária é simétrica em relação ao seu centro.
    """
    if not root:
        return True
    
    # Função auxiliar para verificar se duas subárvores são espelhos.
    def isMirror(left_node, right_node):
        if not left_node and not right_node:
            return True
        if not left_node or not right_node or left_node.val != right_node.val:
            return False
        
        # Verifica se as subárvores externas são espelhos (left.left vs right.right)
        # e as subárvores internas são espelhos (left.right vs right.left).
        return (isMirror(left_node.left, right_node.right) and 
                isMirror(left_node.right, right_node.left))
    
    return isMirror(root.left, root.right)`
    },
    { 
      problem: 'Você está subindo uma escada. Leva `n` degraus para chegar ao topo. Cada vez você pode subir 1 ou 2 degraus. De quantas maneiras distintas você pode subir até o topo?',
      solution: 'dynamic-programming',
      difficulty: 'Fácil',
      input: 'n = 3',
      output: '3',
      explanation: 'Este é um problema clássico de Fibonacci! Para chegar ao degrau n, podemos vir do degrau n-1 (subindo 1) ou n-2 (subindo 2). Então f(n) = f(n-1) + f(n-2).',
      pythonSolution: `def climbStairs(n):
    """
    Problema: Encontrar o número de maneiras distintas de subir uma escada de n degraus,
    dando 1 ou 2 passos de cada vez.
    """
    if n <= 2:
        return n
    
    # Só precisamos armazenar os dois últimos resultados.
    # prev2 armazena as maneiras de chegar ao degrau i-2
    # prev1 armazena as maneiras de chegar ao degrau i-1
    prev2, prev1 = 1, 2
    
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
        
    return prev1`
    },
    { 
      problem: 'Dado um array de inteiros `nums`, retorne `true` se qualquer valor aparecer pelo menos duas vezes no array, e retorne `false` se cada elemento for distinto.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [1,2,3,1]',
      output: 'true',
      explanation: 'Podemos usar um `set` para rastrear os elementos vistos, ou ordenar o array e usar dois ponteiros para verificar elementos adjacentes duplicados.',
      pythonSolution: `def containsDuplicate(nums):
    """
    Problema: Verificar se um array contém valores duplicados.
    """
    # A maneira mais eficiente é usar um conjunto (set).
    # Se o comprimento do conjunto é diferente do comprimento da lista,
    # significa que alguns elementos foram removidos, portanto, havia duplicatas.
    return len(nums) != len(set(nums))`
    },
    { 
      problem: 'Mescle duas listas ligadas ordenadas e retorne-a como uma nova lista ordenada.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      explanation: 'Usamos dois ponteiros, um para cada lista. Comparamos os valores atuais e adicionamos o menor à nova lista, avançando apenas esse ponteiro.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    """
    Problema: Mesclar duas listas ligadas ordenadas em uma única lista ordenada.
    """
    # Um nó dummy ajuda a simplificar o código, fornecendo um ponto de partida.
    dummy_head = ListNode()
    current = dummy_head
    
    p1, p2 = list1, list2
    
    # Itera enquanto ambas as listas têm nós.
    while p1 and p2:
        if p1.val <= p2.val:
            current.next = p1
            p1 = p1.next
        else:
            current.next = p2
            p2 = p2.next
        current = current.next
        
    # Anexa a parte restante da lista que não está vazia.
    current.next = p1 or p2
    
    return dummy_head.next`
    },
    { 
      problem: 'Dado um array não vazio de inteiros `nums`, cada elemento aparece duas vezes, exceto um. Encontre esse único.',
      solution: 'backtracking',
      difficulty: 'Fácil',
      input: 'nums = [2,2,1]',
      output: '1',
      explanation: 'Truque matemático: XOR de um número com ele mesmo é 0, e XOR com 0 não altera o valor. Ao fazer XOR de todos os elementos, os pares se anulam.',
      pythonSolution: `def singleNumber(nums):
    """
    Problema: Em um array onde cada elemento aparece duas vezes, exceto um,
    encontre esse elemento único.
    """
    # O operador bitwise XOR tem a propriedade de que A ^ A = 0 e A ^ 0 = A.
    # Ao fazer XOR de todos os números, os pares se cancelam, restando apenas o número único.
    result = 0
    for num in nums:
        result ^= num
    return result`
    },
    { 
      problem: 'Dado um inteiro `n`, retorne `true` se for uma potência de dois. Caso contrário, retorne `false`.',
      solution: 'binary-search',
      difficulty: 'Fácil',
      input: 'n = 16',
      output: 'true',
      explanation: 'Truque de bits: uma potência de 2 tem apenas um bit `1`. Então, `n & (n-1) == 0`. Também podemos usar divisão repetida ou logaritmos.',
      pythonSolution: `def isPowerOfTwo(n):
    """
    Problema: Verificar se um inteiro é uma potência de dois.
    """
    # Uma potência de dois em binário é um 1 seguido por todos os 0s (ex: 16 é 10000).
    # Subtrair 1 inverte todos os bits até aquele 1 (ex: 15 é 01111).
    # O AND bitwise desses dois números será 0.
    # Também precisamos verificar se n é positivo.
    return n > 0 and (n & (n - 1)) == 0`
    },
    { 
      problem: 'Reverta uma lista ligada individualmente.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'head = [1,2,3,4,5]',
      output: '[5,4,3,2,1]',
      explanation: 'Usamos três ponteiros: `prev`, `current` e `next`. Iterativamente, mudamos a direção dos ponteiros `next`, mantendo o controle do próximo nó.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    """
    Problema: Reverter uma lista ligada individualmente.
    """
    prev_node = None
    current_node = head
    
    while current_node:
        # Armazena o próximo nó antes de sobrescrever o ponteiro.
        next_node = current_node.next
        # Inverte o ponteiro do nó atual.
        current_node.next = prev_node
        # Move os ponteiros um passo à frente.
        prev_node = current_node
        current_node = next_node
        
    # No final, prev_node será a nova cabeça.
    return prev_node`
    },
    { 
      problem: 'Dada a `root` de uma árvore binária, inverta a árvore e retorne sua raiz.',
      solution: 'dfs',
      difficulty: 'Fácil',
      input: 'root = [4,2,7,1,3,6,9]',
      output: '[4,7,2,9,6,3,1]',
      explanation: 'Para inverter, trocamos recursivamente os filhos esquerdo e direito de cada nó. Podemos usar DFS recursivo ou iterativo com uma fila.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root):
    """
    Problema: Inverter uma árvore binária.
    """
    # Caso base para a recursão.
    if not root:
        return None
    
    # Troca os filhos esquerdo e direito.
    root.left, root.right = root.right, root.left
    
    # Inverte recursivamente as subárvores esquerda e direita.
    invertTree(root.left)
    invertTree(root.right)
    
    return root`
    },
    { 
      problem: 'Escreva uma função que receba a representação binária de um inteiro sem sinal e retorne o número de bits \'1\' que ele possui (também conhecido como peso de Hamming).',
      solution: 'sliding-window',
      difficulty: 'Fácil',
      input: 'n = 11 (binário: 1011)',
      output: '3',
      explanation: 'Podemos usar manipulação de bits, converter para uma string binária ou usar a função embutida. A abordagem de deslocamento de bits é mais eficiente.',
      pythonSolution: `def hammingWeight(n):
    """
    Problema: Contar o número de bits '1' na representação binária de um inteiro.
    """
    count = 0
    while n:
        # Esta operação (n & n-1) remove inteligentemente o bit '1' mais à direita.
        # O loop é executado exatamente o número de vezes que há bits '1'.
        n &= n - 1
        count += 1
    return count`
    },
    { 
      problem: 'Dada uma string `s` que consiste em palavras e espaços, retorne o comprimento da última palavra na string.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 's = "Hello World"',
      output: '5',
      explanation: 'Podemos percorrer de trás para frente ou dividir a string em palavras. A abordagem de dois ponteiros é mais eficiente em termos de espaço.',
      pythonSolution: `def lengthOfLastWord(s):
    """
    Problema: Encontrar o comprimento da última palavra em uma string.
    """
    # .strip() remove espaços no início/fim.
    # .split() cria uma lista de palavras.
    # [-1] pega a última palavra da lista.
    words = s.strip().split()
    return len(words[-1]) if words else 0`
    },
    { 
      problem: 'Dada uma árvore binária, determine se ela é uma árvore de busca binária (BST) válida.',
      solution: 'dfs',
      difficulty: 'Fácil',
      input: 'root = [2,1,3]',
      output: 'true',
      explanation: 'Em uma BST, todos os nós da subárvore esquerda devem ser menores que o nó atual, e todos da direita, maiores. Usamos DFS com limites min/max.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    """
    Problema: Determinar se uma árvore binária é uma Árvore de Busca Binária (BST) válida.
    """
    def validate(node, low, high):
        # Uma árvore vazia é uma BST válida.
        if not node:
            return True
        
        # O valor do nó atual deve estar dentro do intervalo válido.
        if not (low < node.val < high):
            return False
        
        # Valida recursivamente as subárvores esquerda e direita,
        # atualizando os limites apropriadamente.
        return (validate(node.left, low, node.val) and
                validate(node.right, node.val, high))
    
    # Começa com um intervalo infinito.
    return validate(root, float('-inf'), float('inf'))`
    },
    { 
      problem: 'Dado um array de inteiros `nums` e um inteiro `target`, retorne os índices dos dois números que somam `target`.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Podemos usar um hashmap para armazenar valores já vistos ou ordenar e usar dois ponteiros. O hashmap é O(n), enquanto dois ponteiros após a ordenação é O(n log n).',
      pythonSolution: `def twoSum(nums, target):
    """
    Problema: Dado um array de inteiros, encontre os índices de dois números
    que somam a um alvo específico.
    """
    # Usa um hash map para armazenar os números vistos e seus índices.
    num_to_index = {}
    
    for i, num in enumerate(nums):
        # Calcula o complemento necessário para atingir o alvo.
        complement = target - num
        # Se o complemento está no nosso mapa, encontramos uma solução.
        if complement in num_to_index:
            return [num_to_index[complement], i]
        # Caso contrário, armazena o número atual e seu índice.
        num_to_index[num] = i
    
    return []`
    },
    { 
      problem: 'Dada uma string `s` contendo apenas os caracteres `(`, `)`, `{`, `}`, `[` e `]`, determine se a string de entrada é válida.',
      solution: 'backtracking',
      difficulty: 'Fácil',
      input: 's = "()[]{}"',
      output: 'true',
      explanation: 'Usamos uma pilha. Para cada colchete de abertura, empilhamos. Para cada colchete de fechamento, verificamos se ele corresponde ao topo da pilha. No final, a pilha deve estar vazia.',
      pythonSolution: `def isValid(s):
    """
    Problema: Verificar se uma string de colchetes é válida (bem formada).
    """
    # Um mapa de fechamento para abertura de colchetes.
    mapping = {')': '(', '}': '{', ']': '['}
    # Uma pilha para rastrear os colchetes de abertura.
    stack = []
    
    for char in s:
        # Se for um colchete de fechamento...
        if char in mapping:
            # A pilha não deve estar vazia, e o topo deve ser o colchete de abertura correspondente.
            if not stack or stack.pop() != mapping[char]:
                return False
        # Se for um colchete de abertura, empilhe-o.
        else:
            stack.append(char)
    
    # Se a pilha estiver vazia no final, todos os colchetes foram correspondidos.
    return not stack`
    },
    { 
      problem: 'Implemente uma fila primeiro a entrar, primeiro a sair (FIFO) usando apenas duas pilhas.',
      solution: 'heap',
      difficulty: 'Fácil',
      input: 'operations = ["MyQueue", "push", "push", "peek", "pop", "empty"]',
      output: '[null, null, null, 1, 1, false]',
      explanation: 'Usamos duas pilhas: uma para entrada e outra para saída. Quando precisamos de `pop`/`peek`, transferimos elementos da pilha de entrada para a de saída.',
      pythonSolution: `class MyQueue:
    """
    Problema: Implementar uma fila FIFO usando duas pilhas LIFO.
    """
    def __init__(self):
        self.stack_in = []
        self.stack_out = []
    
    def push(self, x):
        # Todos os pushes vão para a pilha de entrada.
        self.stack_in.append(x)
    
    def _transfer_if_needed(self):
        # Se a pilha de saída estiver vazia, transfere todos os elementos
        # da pilha de entrada. Isso inverte a ordem deles, alcançando o FIFO.
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
      problem: 'Dado um array ordenado `nums`, remova as duplicatas no local de modo que cada elemento apareça apenas uma vez e retorne o novo comprimento.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [1,1,2]',
      output: '2 (nums = [1,2,_])',
      explanation: 'Usamos dois ponteiros: um `slow` para a posição de escrita e um `fast` para a leitura. Quando encontramos um elemento diferente, o copiamos para a posição `slow`.',
      pythonSolution: `def removeDuplicates(nums):
    """
    Problema: Remover duplicatas de um array ordenado no local.
    """
    if not nums:
        return 0
    
    # 'write_index' aponta para a posição onde o próximo elemento único deve ser colocado.
    write_index = 1
    
    for read_index in range(1, len(nums)):
        # Se encontrarmos um elemento que é diferente do anterior...
        if nums[read_index] != nums[read_index - 1]:
            # ...o colocamos na posição 'write_index'.
            nums[write_index] = nums[read_index]
            write_index += 1
    
    return write_index`
    },
    { 
      problem: 'Dado um inteiro `x`, retorne `true` se `x` for um palíndromo, e `false` caso contrário.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'x = 121',
      output: 'true',
      explanation: 'Podemos converter para uma string e usar dois ponteiros, ou reverter matematicamente metade do número. A abordagem matemática é mais eficiente em termos de espaço.',
      pythonSolution: `def isPalindrome(x):
    """
    Problema: Verificar se um inteiro é um palíndromo sem convertê-lo para string.
    """
    # Números negativos e números terminados em 0 (mas não o próprio 0) não são palíndromos.
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
    
    reversed_half = 0
    # Inverte a segunda metade do número.
    while x > reversed_half:
        reversed_half = reversed_half * 10 + x % 10
        x //= 10
        
    # Para números de comprimento ímpar, o dígito do meio não importa (x == reversed_half // 10).
    # Para números de comprimento par, as duas metades devem ser iguais.
    return x == reversed_half or x == reversed_half // 10`
    },
    { 
      problem: 'Dada a `root` de uma árvore binária, retorne a travessia em ordem de nível de seus nós\' valores. (ou seja, da esquerda para a direita, nível por nível).',
      solution: 'bfs',
      difficulty: 'Fácil',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[9,20],[15,7]]',
      explanation: 'BFS usando uma fila. Processamos nó por nó, nível por nível. Usamos um loop para processar todos os nós do nível atual antes de passar para o próximo.',
      pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root):
    """
    Problema: Realizar uma travessia em ordem de nível de uma árvore binária.
    """
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        # Obtém o número de nós no nível atual.
        level_size = len(queue)
        current_level = []
        
        # Processa todos os nós no nível atual.
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            
            # Adiciona os filhos à fila para o próximo nível.
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result`
    },
    { 
      problem: 'Dado um array `nums`, escreva uma função para mover todos os 0s para o final, mantendo a ordem relativa dos elementos não-zero.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [0,1,0,3,12]',
      output: '[1,3,12,0,0]',
      explanation: 'Usamos dois ponteiros: um para escrever elementos não-zero e outro para ler. Depois, preenchemos o resto com zeros.',
      pythonSolution: `def moveZeroes(nums):
    """
    Problema: Mover todos os zeros para o final de um array, mantendo
    a ordem relativa dos outros elementos.
    """
    # 'write_index' é a posição para o próximo elemento não-zero.
    write_index = 0
    
    # Primeira passagem: move todos os elementos não-zero para a frente.
    for read_index in range(len(nums)):
        if nums[read_index] != 0:
            nums[write_index] = nums[read_index]
            write_index += 1
            
    # Segunda passagem: preenche o resto do array com zeros.
    for i in range(write_index, len(nums)):
        nums[i] = 0`
    },
    { 
      problem: 'Encontre o k-ésimo maior elemento em um array não ordenado.',
      solution: 'heap',
      difficulty: 'Fácil',
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      explanation: 'Podemos usar uma min-heap de tamanho k, ordenação ou quickselect. A heap mantém os k maiores elementos, com o k-ésimo maior no topo.',
      pythonSolution: `import heapq

def findKthLargest(nums, k):
    """
    Problema: Encontrar o k-ésimo maior elemento em um array não ordenado.
    """
    # Uma min-heap é perfeita para isso. Mantemos uma heap de tamanho k.
    # Quando um novo número chega, se ele for maior que o menor
    # na heap, substituímos o menor.
    heap = []
    
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
            
    # A raiz da heap é o k-ésimo maior elemento.
    return heap[0]`
    },
    { 
      problem: 'Dada uma string, encontre o primeiro caractere não repetido nela e retorne seu índice. Se não existir, retorne -1.',
      solution: 'sliding-window',
      difficulty: 'Fácil',
      input: 's = "leetcode"',
      output: '0',
      explanation: 'Fazemos duas passagens: a primeira conta a frequência de cada caractere, a segunda encontra o primeiro caractere com frequência 1.',
      pythonSolution: `from collections import Counter

def firstUniqChar(s):
    """
    Problema: Encontrar o primeiro caractere não repetido em uma string e retornar seu índice.
    """
    # Primeiro, conta a frequência de todos os caracteres.
    char_count = Counter(s)
    
    # Segundo, itera através da string para encontrar o primeiro
    # caractere com uma contagem de 1.
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
            
    return -1`
    },
    { problem: 'Dada uma árvore binária e uma soma, determine se a árvore tem um caminho da raiz à folha tal que a soma de todos os valores ao longo do caminho seja igual à soma dada.', solution: 'dfs', difficulty: 'Fácil',
      input: 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22',
      output: 'true',
      explanation: 'O caminho 5->4->11->2 tem a soma 22. Usamos DFS, subtraindo o valor do nó da soma em cada nível. Em uma folha, verificamos se a soma restante é zero.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def hasPathSum(root, targetSum):
    """
    Problema: Verificar se existe um caminho da raiz à folha com uma determinada soma em uma árvore binária.
    """
    if not root:
        return False
    
    # Se for um nó folha, verifica se o seu valor é igual à soma restante.
    is_leaf = not root.left and not root.right
    if is_leaf:
        return targetSum == root.val
    
    # Verifica recursivamente as subárvores esquerda e direita com a soma atualizada.
    return (hasPathSum(root.left, targetSum - root.val) or
            hasPathSum(root.right, targetSum - root.val))`
    },
    { problem: 'Você recebe as cabeças de duas listas ligadas ordenadas `list1` e `list2`. Mescle as duas listas em uma lista ordenada.', solution: 'two-pointers', difficulty: 'Fácil',
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      explanation: 'Usamos dois ponteiros, um para cada lista. Criamos uma nova lista e, a cada passo, anexamos o menor dos dois nós de list1 e list2, e então avançamos o ponteiro correspondente.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    """
    Problema: Mesclar duas listas ligadas ordenadas em uma única lista ordenada.
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
        
    # Anexa o restante da lista não vazia.
    tail.next = list1 or list2
    
    return dummy.next`
    },
    { problem: 'Dado um array de `n` inteiros, onde `n` > 1, `nums`, retorne um array `output` tal que `output[i]` seja igual ao produto de todos os elementos de `nums` exceto `nums[i]`.', solution: 'dynamic-programming', difficulty: 'Fácil',
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'Podemos resolver isso em tempo O(n) e espaço O(1) (excluindo o array de saída). Fazemos duas passagens. A primeira passagem calcula o produto de todos os elementos à esquerda de cada índice. A segunda passagem multiplica isso pelo produto de todos os elementos à direita.',
      pythonSolution: `def productExceptSelf(nums):
    """
    Problema: Dado um array, retorne um novo array onde cada elemento é o
    produto de todos os outros elementos do array original.
    """
    n = len(nums)
    answer = [1] * n
    
    # Primeira passagem: calcula os produtos à esquerda e armazena no array de resposta.
    left_product = 1
    for i in range(n):
        answer[i] = left_product
        left_product *= nums[i]
        
    # Segunda passagem: calcula os produtos à direita e multiplica com o resultado.
    right_product = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= right_product
        right_product *= nums[i]
        
    return answer`
    },
    { problem: 'Determine se um inteiro é um palíndromo. Um inteiro é um palíndromo quando lê o mesmo de trás para frente.', solution: 'two-pointers', difficulty: 'Fácil',
      input: 'x = 121',
      output: 'true',
      explanation: 'A maneira mais simples é converter o inteiro para uma string. Em seguida, podemos usar dois ponteiros, um no início e um no final, movendo-se em direção ao centro e verificando se os caracteres correspondem.',
      pythonSolution: `def isPalindrome(x):
    """
    Problema: Verificar se um inteiro é um palíndromo.
    """
    # Números negativos não podem ser palíndromos.
    if x < 0:
        return False
    
    # Converte para string e verifica se é igual ao seu reverso.
    s = str(x)
    return s == s[::-1]`
    },
    // Médio
    { 
      problem: 'Gere todas as combinações válidas de parênteses para um dado número de pares.',
      solution: 'backtracking',
      difficulty: 'Médio',
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      explanation: 'Usamos backtracking para gerar todas as combinações. Mantemos o controle de parênteses abertos e fechados. Só adicionamos "(" se ainda tivermos pares disponíveis, e ")" se houver mais abertos do que fechados.',
      pythonSolution: `def generateParenthesis(n):
    """
    Problema: Gerar todas as combinações de parênteses bem formados para n pares.
    """
    result = []
    
    def backtrack(current_string, open_count, close_count):
        # Caso base: a string está completa.
        if len(current_string) == 2 * n:
            result.append(current_string)
            return
        
        # Podemos adicionar um parêntese de abertura se não usamos todos os n pares.
        if open_count < n:
            backtrack(current_string + "(", open_count + 1, close_count)
        
        # Podemos adicionar um parêntese de fechamento se não invalidar a sequência.
        if close_count < open_count:
            backtrack(current_string + ")", open_count, close_count)
    
    backtrack("", 0, 0)
    return result`
    },
    { 
      problem: 'Dado um grid binário `m x n` `grid` que representa um mapa de `1`s (terra) e `0`s (água), retorne o número de ilhas.',
      solution: 'dfs',
      difficulty: 'Médio',
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: '3',
      explanation: 'Para cada célula "1" não visitada, realizamos um DFS para marcar toda a ilha conectada. Cada DFS iniciado conta como uma ilha.',
      pythonSolution: `def numIslands(grid):
    """
    Problema: Contar o número de ilhas em um grid 2D de '1's (terra) e '0's (água).
    """
    if not grid or not grid[0]:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    def dfs(r, c):
        # Verifica limites e se é água ou já visitado.
        if (r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1'):
            return
        
        # Marca a célula como visitada, alterando seu valor.
        grid[r][c] = '#'
        
        # Explora todas as 4 direções.
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    # Itera por cada célula do grid.
    for r in range(rows):
        for c in range(cols):
            # Se encontrarmos um novo pedaço de terra, é uma nova ilha.
            if grid[r][c] == '1':
                dfs(r, c)
                islands += 1
    
    return islands`
    },
    { 
      problem: 'Você está em uma grade 2D e precisa encontrar o caminho mais curto de um ponto de partida a um ponto de chegada, evitando obstáculos.',
      solution: 'bfs',
      difficulty: 'Médio',
      input: 'grid = [[0,0,0],[1,1,0],[0,0,0]], start = [0,0], end = [2,2]',
      output: '4',
      explanation: 'O BFS explora em camadas, garantindo o caminho mais curto. Usamos uma fila para processar posições e um conjunto de `visited` para evitar ciclos. Retornamos a distância quando chegamos ao destino.',
      pythonSolution: `from collections import deque

def shortestPath(grid, start, end):
    """
    Problema: Encontrar o caminho mais curto em um grid de um ponto inicial a um final.
    """
    rows, cols = len(grid), len(grid[0])
    # A fila armazena (linha, coluna, distância).
    queue = deque([(start[0], start[1], 0)])
    visited = {(start[0], start[1])}
    
    directions = [(-1,0), (1,0), (0,-1), (0,1)]
    
    while queue:
        row, col, dist = queue.popleft()
        
        if [row, col] == end:
            return dist
        
        for dr, dc in directions:
            new_row, new_col = row + dr, col + dc
            
            # Verifica se a nova posição é válida e não visitada.
            if (0 <= new_row < rows and 0 <= new_col < cols and 
                grid[new_row][new_col] == 0 and 
                (new_row, new_col) not in visited):
                
                visited.add((new_row, new_col))
                queue.append((new_row, new_col, dist + 1))
    
    return -1 # Caminho não encontrado`
    },
    { 
      problem: 'Dado um array de inteiros, encontre o subarray com a maior soma e retorne sua soma.',
      solution: 'dynamic-programming',
      difficulty: 'Médio',
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'Algoritmo de Kadane: usamos programação dinâmica para rastrear a soma máxima que termina na posição atual. Se a soma atual se tornar negativa, a resetamos para 0.',
      pythonSolution: `def maxSubArray(nums):
    """
    Problema: Encontrar o subarray contíguo com a maior soma.
    """
    # Algoritmo de Kadane
    max_so_far = nums[0]
    current_max = nums[0]
    
    for i in range(1, len(nums)):
        # Para cada elemento, decidimos:
        # 1. Começar um novo subarray aqui (nums[i])
        # 2. Estender o subarray existente (current_max + nums[i])
        current_max = max(nums[i], current_max + nums[i])
        # Atualiza a soma máxima geral encontrada até agora.
        max_so_far = max(max_so_far, current_max)
    
    return max_so_far`
    },
    { 
      problem: 'Dado um array de strings, agrupe os anagramas. Você pode retornar a resposta em qualquer ordem.',
      solution: 'sliding-window',
      difficulty: 'Médio',
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      explanation: 'Agrupamos por uma chave: ou strings ordenadas ou contagem de caracteres. Palavras com a mesma chave são anagramas.',
      pythonSolution: `from collections import defaultdict

def groupAnagrams(strs):
    """
    Agrupar anagramas de uma lista.
    """
    # Usar string ordenada como chave
    groups = defaultdict(list)
    
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    
    return list(groups.values())`
    },
    { 
      problem: 'Dada uma lista ligada, retorne o nó onde o ciclo começa. Se não houver ciclo, retorne nulo.',
      solution: 'two-pointers',
      difficulty: 'Médio',
      input: 'head = [3,2,0,-4], pos = 1',
      output: 'nó no índice 1',
      explanation: 'Algoritmo de Floyd: use dois ponteiros (lento e rápido) para detectar um ciclo. Em seguida, use matemática para encontrar o início do ciclo.',
      pythonSolution: `class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def detectCycle(head):
    """
    Problema: Encontrar o nó onde um ciclo começa em uma lista ligada.
    """
    slow = fast = head
    
    # Fase 1: Detectar se existe um ciclo.
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            # Ciclo detectado.
            # Fase 2: Encontrar o início do ciclo.
            # Reseta um ponteiro para a cabeça e move ambos um passo de cada vez.
            # Eles se encontrarão no início do ciclo.
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow
            
    # Nenhum ciclo encontrado.
    return None`
    },
    { 
      problem: 'Você recebe um array de inteiros `coins` representando moedas de diferentes denominações e um inteiro `amount` representando uma quantia total de dinheiro. Retorne o menor número de moedas que você precisa para compor essa quantia.',
      solution: 'dynamic-programming',
      difficulty: 'Médio',
      input: 'coins = [1,3,4], amount = 6',
      output: '2',
      explanation: 'DP bottom-up: para cada quantia `i`, tentamos cada moeda e pegamos o mínimo de `dp[i-coin] + 1`. Inicializamos `dp[0] = 0` e o resto como infinito.',
      pythonSolution: `def coinChange(coins, amount):
    """
    Problema: Encontrar o menor número de moedas para formar uma determinada quantia.
    """
    # dp[i] armazenará o número mínimo de moedas para a quantia i.
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0 # Caso base: 0 moedas para a quantia 0.
    
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                # O número de moedas para a quantia 'i' é o mínimo entre
                # seu valor atual e 1 + as moedas para 'i - coin'.
                dp[i] = min(dp[i], 1 + dp[i - coin])
    
    return dp[amount] if dp[amount] != float('inf') else -1`
    },
    { 
      problem: 'Dada uma string `s`, encontre a substring palíndroma mais longa em `s`.',
      solution: 'two-pointers',
      difficulty: 'Médio',
      input: 's = "babad"',
      output: '"bab"',
      explanation: 'Expandimos em torno de cada centro possível (caractere único e entre caracteres). Para cada centro, expandimos enquanto os caracteres forem iguais.',
      pythonSolution: `def longestPalindrome(s):
    """
    Problema: Encontrar a substring palíndroma mais longa em uma string.
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
        # Palíndromos de comprimento ímpar (centro é um único caractere)
        expand_around_center(i, i)
        # Palíndromos de comprimento par (centro está entre dois caracteres)
        expand_around_center(i, i + 1)
        
    return res`
    },
    { 
      problem: 'Dado um array de `n` inteiros positivos e um inteiro positivo `s`, encontre o comprimento mínimo de um subarray contíguo cuja soma seja ≥ `s`. Se não houver, retorne 0.',
      solution: 'sliding-window',
      difficulty: 'Médio',
      input: 'target = 7, nums = [2,3,1,2,4,3]',
      output: '2',
      explanation: 'Usamos uma janela deslizante: expandimos a janela até a soma ser ≥ `target`, depois encolhemos do início enquanto a condição se mantiver.',
      pythonSolution: `def minSubArrayLen(target, nums):
    """
    Problema: Encontrar o comprimento mínimo de um subarray com soma >= alvo.
    """
    left, total = 0, 0
    min_len = float('inf')

    for right in range(len(nums)):
        total += nums[right]
        # Assim que a soma for >= alvo, tente encolher a janela pela esquerda.
        while total >= target:
            min_len = min(min_len, right - left + 1)
            total -= nums[left]
            left += 1
    
    return 0 if min_len == float('inf') else min_len`
    },
    { 
      problem: 'Dado um conjunto de inteiros distintos, `nums`, retorne todos os subconjuntos possíveis (o conjunto de potência).',
      solution: 'backtracking',
      difficulty: 'Médio',
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
      explanation: 'Usamos backtracking para explorar todas as possibilidades: para cada elemento, decidimos se o incluímos no subconjunto atual ou não.',
      pythonSolution: `def subsets(nums):
    """
    Problema: Encontrar todos os subconjuntos possíveis (o conjunto de potência) de um dado conjunto de inteiros.
    """
    res = []
    subset = []

    def dfs(i):
        # Caso base: se consideramos todos os números.
        if i >= len(nums):
            res.append(subset.copy())
            return
        
        # Decisão 1: Incluir nums[i] no subconjunto.
        subset.append(nums[i])
        dfs(i + 1)

        # Decisão 2: NÃO incluir nums[i] no subconjunto (backtrack).
        subset.pop()
        dfs(i + 1)
    
    dfs(0)
    return res`
    },
    { problem: 'Implemente um iterador sobre uma árvore de busca binária (BST). Seu iterador será inicializado com o nó raiz de uma BST.', solution: 'dfs', difficulty: 'Médio',
      input: 'Comandos = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext"] em uma árvore [7, 3, 15, null, null, 9, 20]',
      output: '[null, 3, 7, true, 9, true, 15, true, 20, false]',
      explanation: 'Podemos realizar uma travessia in-order da BST e armazenar os valores dos nós em uma lista. O iterador então simplesmente percorre essa lista.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BSTIterator:
    """
    Problema: Implementar um iterador para uma travessia in-order de uma BST.
    """
    def __init__(self, root: TreeNode):
        # A pilha armazenará nós para simular a recursão de uma travessia in-order.
        self.stack = []
        self._push_all_left(root)

    def _push_all_left(self, node):
        # Auxiliar para empilhar todos os filhos esquerdos de um nó.
        while node:
            self.stack.append(node)
            node = node.left

    def next(self) -> int:
        # O topo da pilha é o próximo menor elemento.
        next_node = self.stack.pop()
        # Antes de retornar, devemos empilhar todos os filhos esquerdos do seu filho direito.
        if next_node.right:
            self._push_all_left(next_node.right)
        return next_node.val

    def hasNext(self) -> bool:
        # O iterador tem um próximo elemento se a pilha não estiver vazia.
        return len(self.stack) > 0`
    },
    { 
      problem: 'Dada uma grade 2D de caracteres e uma palavra, encontre se a palavra existe na grade. A palavra pode ser construída a partir de letras de células sequencialmente adjacentes, onde células "adjacentes" são vizinhas horizontal ou verticalmente.',
      solution: 'backtracking',
      difficulty: 'Médio',
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
      output: 'true',
      explanation: 'Usamos DFS/backtracking: para cada célula, tentamos formar a palavra, marcando células visitadas e desmarcando-as ao retroceder.',
      pythonSolution: `def exist(board, word):
    """
    Problema: Encontrar se uma palavra existe em um grid de caracteres.
    """
    ROWS, COLS = len(board), len(board[0])
    path = set()

    def dfs(r, c, i):
        # Caso base: encontramos todos os caracteres da palavra.
        if i == len(word):
            return True
        # Caso base: fora dos limites, caractere errado ou já visitado.
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or
            word[i] != board[r][c] or (r, c) in path):
            return False

        path.add((r,c))
        # Explora todas as 4 direções.
        res = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or
               dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
        # Backtrack: remove a célula do caminho atual.
        path.remove((r, c))
        return res

    for r in range(ROWS):
        for c in range(COLS):
            if dfs(r, c, 0): return True
    return False`
    },
    { problem: 'Encontre o k-ésimo menor elemento em uma Árvore de Busca Binária.', solution: 'heap', difficulty: 'Médio',
      input: 'root = [3,1,4,null,2], k = 1',
      output: '1',
      explanation: 'Uma travessia in-order de uma BST visita os nós em ordem crescente. Podemos realizar uma travessia in-order e parar assim que tivermos visitado k nós.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthSmallest(root, k):
    """
    Problema: Encontrar o k-ésimo menor elemento em uma BST.
    """
    # Uma travessia in-order iterativa é eficiente.
    stack = []
    
    while True:
        # Vá o mais à esquerda possível.
        while root:
            stack.append(root)
            root = root.left
        # Remove o nó adicionado mais recentemente (o menor).
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        # Move para a subárvore direita para encontrar o próximo menor.
        root = root.right`
    },
    { problem: 'Dada uma árvore binária, preencha cada ponteiro `next` para apontar para o seu próximo nó à direita. Se não houver próximo nó à direita, o ponteiro `next` deve ser definido como `NULL`.', solution: 'bfs', difficulty: 'Médio',
      input: 'root = [1,2,3,4,5,6,7]',
      output: 'Uma árvore onde cada nó aponta para o seu irmão à direita.',
      explanation: 'Podemos usar BFS para percorrer a árvore nível por nível. Para cada nível, iteramos através dos nós e definimos o ponteiro `next` do nó atual para o próximo nó na fila.',
      pythonSolution: `from collections import deque

class Node:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

def connect(root: 'Node') -> 'Node':
    """
    Problema: Preencher o ponteiro 'next' para cada nó em uma árvore binária.
    """
    if not root:
        return None
    
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        for i in range(level_size):
            node = queue.popleft()
            
            # Se não for o último nó do nível, define seu ponteiro next.
            if i < level_size - 1:
                node.next = queue[0]
                
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return root`
    },
    { problem: 'Dada uma string contendo dígitos de 2 a 9 inclusive, retorne todas as combinações de letras possíveis que o número poderia representar.', solution: 'backtracking', difficulty: 'Médio',
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      explanation: 'Usamos backtracking. Construímos uma combinação caractere por caractere. Para cada dígito, iteramos através de suas letras possíveis e fazemos uma chamada recursiva para o próximo dígito.',
      pythonSolution: `def letterCombinations(digits):
    """
    Problema: Encontrar todas as combinações de letras possíveis de uma string de número de telefone.
    """
    if not digits:
        return []
        
    phone_map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }
    
    def backtrack(index, path):
        # Caso base: temos uma combinação completa.
        if index == len(digits):
            combinations.append("".join(path))
            return
        
        # Itera através das letras para o dígito atual.
        possible_letters = phone_map[digits[index]]
        for letter in possible_letters:
            path.append(letter)
            backtrack(index + 1, path)
            path.pop() # Backtrack
            
    combinations = []
    backtrack(0, [])
    return combinations`
    },
    { problem: 'Você recebe um array de inteiros. Uma subsequência deste array é considerada uma matriz de montanha válida se for primeiro crescente e depois decrescente.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'nums = [2,1,1,5,6,2,3,1]',
      output: '5 (de [1,5,6,3,1])',
      explanation: 'Podemos usar dois arrays de DP. `up[i]` armazena o comprimento da subsequência crescente mais longa terminando em `i`. `down[i]` armazena o comprimento da subsequência decrescente mais longa começando em `i`. A resposta é o máximo de `up[i] + down[i] - 1`.',
      pythonSolution: `def longestMountain(nums):
    """
    Problema: Encontrar o comprimento do subarray de montanha mais longo.
    """
    n = len(nums)
    if n < 3:
        return 0
        
    # up[i] = comprimento da encosta crescente terminando em i
    up = [0] * n
    # down[i] = comprimento da encosta decrescente começando em i
    down = [0] * n
    
    for i in range(1, n):
        if nums[i] > nums[i-1]:
            up[i] = up[i-1] + 1
            
    for i in range(n-2, -1, -1):
        if nums[i] > nums[i+1]:
            down[i] = down[i+1] + 1
            
    max_len = 0
    # Uma montanha deve ter tanto uma encosta para cima quanto para baixo.
    for i in range(n):
        if up[i] > 0 and down[i] > 0:
            max_len = max(max_len, up[i] + down[i] + 1)
            
    return max_len`
    },
    { problem: 'Dado um array não ordenado de inteiros, encontre o comprimento da sequência de elementos consecutivos mais longa.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'nums = [100,4,200,1,3,2]',
      output: '4 (de [1,2,3,4])',
      explanation: 'Podemos converter o array para um conjunto para buscas O(1). Então, para cada número, verificamos se ele é o início de uma sequência (ou seja, `num-1` não está no conjunto). Se for, contamos o quão longa é a sequência.',
      pythonSolution: `def longestConsecutive(nums):
    """
    Problema: Encontrar o comprimento da sequência de elementos consecutivos mais longa.
    """
    num_set = set(nums)
    longest_streak = 0
    
    for num in num_set:
        # Verifica se é o início de uma sequência.
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1
            
            # Conta o comprimento da sequência.
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1
                
            longest_streak = max(longest_streak, current_streak)
            
    return longest_streak`
    },
    { 
      problem: 'Dado `n` pares de parênteses, escreva uma função para gerar todas as combinações de parênteses bem formados.',
      solution: 'backtracking',
      difficulty: 'Médio',
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      explanation: 'Usamos backtracking: adicionamos "(" se `open < n`, adicionamos ")" se `close < open`. Isso garante que nunca teremos mais ")" do que "(" em qualquer ponto.',
      pythonSolution: `def generateParenthesis(n):
    """
    Problema: Gerar todas as combinações de parênteses bem formados.
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
    { problem: 'Dada uma árvore binária, encontre o ancestral comum mais baixo (LCA) de dois nós dados na árvore.', solution: 'dfs', difficulty: 'Médio',
      input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
      output: '3',
      explanation: 'Realizamos uma DFS recursiva. Se o nó atual é um de `p` ou `q`, nós o retornamos. Em seguida, verificamos as subárvores esquerda e direita. Se ambas retornarem um valor não nulo, o nó atual é o LCA. Caso contrário, retornamos o valor não nulo da subárvore esquerda ou direita.',
      pythonSolution: `class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root, p, q):
    """
    Problema: Encontrar o Ancestral Comum Mais Baixo (LCA) de dois nós em uma árvore binária.
    """
    # Caso base: se a raiz é nula ou um dos nós, ela é o LCA.
    if not root or root == p or root == q:
        return root
        
    # Recorre nas subárvores esquerda e direita.
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    # Se ambas as subárvores retornarem um nó, a raiz atual é o LCA.
    if left and right:
        return root
    
    # Caso contrário, o LCA está na subárvore que retornou um nó.
    return left or right`
    },
    { problem: 'Dado um array ordenado de inteiros `nums` e um inteiro `target`, procure `target` em `nums`. Se `target` existir, retorne seu índice. Caso contrário, retorne -1.', solution: 'binary-search', difficulty: 'Médio',
      input: 'nums = [-1,0,3,5,9,12], target = 9',
      output: '4',
      explanation: 'Este é um problema clássico de busca binária. Mantemos ponteiros esquerdo e direito e verificamos repetidamente o elemento do meio. Se o elemento do meio for o alvo, retornamos seu índice. Se for menor, procuramos na metade direita; caso contrário, procuramos na metade esquerda.',
      pythonSolution: `def search(nums, target):
    """
    Problema: Procurar um alvo em um array ordenado.
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
    { problem: 'Dada uma coleção de números candidatos (`candidates`) e um número alvo (`target`), encontre todas as combinações únicas em `candidates` onde a soma dos números candidatos seja `target`.', solution: 'backtracking', difficulty: 'Médio',
      input: 'candidates = [2,3,6,7], target = 7',
      output: '[[2,2,3],[7]]',
      explanation: 'Usamos backtracking. Ordenamos os candidatos para lidar com duplicatas. Para cada número, temos duas escolhas: incluí-lo na combinação atual (e continuar a recursão) ou pulá-lo.',
      pythonSolution: `def combinationSum(candidates, target):
    """
    Problema: Encontrar todas as combinações únicas em um conjunto de candidatos que somam a um alvo.
    Os candidatos podem ser reutilizados.
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
            # Podemos reutilizar o mesmo elemento, então passamos 'i' e não 'i+1'.
            backtrack(i, combination, current_sum + candidates[i])
            combination.pop() # Backtrack
            
    backtrack(0, [], 0)
    return res`
    },
    { problem: 'Dada uma string não vazia `s` e um dicionário `wordDict` contendo uma lista de palavras não vazias, determine se `s` pode ser segmentado em uma sequência de uma ou mais palavras do dicionário separadas por espaço.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 's = "leetcode", wordDict = ["leet","code"]',
      output: 'true',
      explanation: 'Usamos programação dinâmica. Criamos um array DP onde `dp[i]` é verdadeiro se a substring `s[0...i-1]` pode ser segmentada. Para calcular `dp[i]`, verificamos se `dp[j]` é verdadeiro e a substring `s[j...i-1]` está no dicionário, para todo `j < i`.',
      pythonSolution: `def wordBreak(s, wordDict):
    """
    Problema: Verificar se uma string pode ser segmentada em uma sequência de palavras do dicionário.
    """
    word_set = set(wordDict)
    # dp[i] é True se s[:i] pode ser segmentado.
    dp = [False] * (len(s) + 1)
    dp[0] = True # Caso base: string vazia
    
    for i in range(1, len(s) + 1):
        for j in range(i):
            # Verifica se o prefixo s[:j] é válido e o sufixo s[j:i] está no dicionário.
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
                
    return dp[len(s)]`
    },
    { problem: 'Dada uma lista ligada, rotacione a lista para a direita em `k` lugares.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'head = [1,2,3,4,5], k = 2',
      output: '[4,5,1,2,3]',
      explanation: 'Podemos primeiro encontrar o comprimento da lista e conectar a cauda à cabeça para formar um ciclo. Em seguida, encontramos a nova cauda, que está na posição `comprimento - k - 1`, e quebramos o ciclo.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rotateRight(head, k):
    """
    Problema: Rotacionar uma lista ligada para a direita em k posições.
    """
    if not head or not head.next or k == 0:
        return head
        
    # 1. Encontra o comprimento e o último nó.
    last_node = head
    length = 1
    while last_node.next:
        last_node = last_node.next
        length += 1
        
    # 2. Ajusta k.
    k = k % length
    if k == 0:
        return head
        
    # 3. Forma um ciclo.
    last_node.next = head
    
    # 4. Encontra a nova cauda (nó antes da nova cabeça).
    new_tail = head
    for _ in range(length - k - 1):
        new_tail = new_tail.next
        
    # 5. Quebra o ciclo.
    new_head = new_tail.next
    new_tail.next = None
    
    return new_head`
    },
    { problem: 'Dado um array com `n` objetos coloridos de vermelho, branco ou azul, ordene-os no local para que objetos da mesma cor fiquem adjacentes, com as cores na ordem vermelho, branco e azul.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'nums = [2,0,2,1,1,0] (0=vermelho, 1=branco, 2=azul)',
      output: '[0,0,1,1,2,2]',
      explanation: 'Este é o problema da Bandeira Nacional Holandesa. Usamos três ponteiros: `low`, `mid` e `high`. Iteramos com `mid`. Se `nums[mid]` for 0, trocamos com `nums[low]` e incrementamos ambos. Se for 1, apenas incrementamos `mid`. Se for 2, trocamos com `nums[high]` e decrementamos `high`.',
      pythonSolution: `def sortColors(nums):
    """
    Problema: Ordenar um array de 0s, 1s e 2s no local (Problema da Bandeira Holandesa).
    """
    low, mid, high = 0, 0, len(nums) - 1
    
    while mid <= high:
        if nums[mid] == 0: # Vermelho
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1: # Branco
            mid += 1
        else: # Azul
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1`
    },
    { problem: 'Dada uma grade `m x n` preenchida com números não negativos, encontre um caminho do canto superior esquerdo ao canto inferior direito, que minimize a soma de todos os números ao longo de seu caminho.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7 (caminho 1→3→1→1→1)',
      explanation: 'Usamos programação dinâmica. Seja `dp[i][j]` a soma mínima do caminho para alcançar a célula `(i,j)`. A relação de recorrência é `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`. Podemos otimizar isso para usar espaço extra O(1) modificando a grade no local.',
      pythonSolution: `def minPathSum(grid):
    """
    Problema: Encontrar a soma mínima do caminho do canto superior esquerdo ao canto inferior direito em um grid.
    """
    rows, cols = len(grid), len(grid[0])
    
    # Atualiza a primeira linha (só pode vir da esquerda).
    for j in range(1, cols):
        grid[0][j] += grid[0][j-1]
        
    # Atualiza a primeira coluna (só pode vir de cima).
    for i in range(1, rows):
        grid[i][0] += grid[i-1][0]
        
    # Atualiza o resto do grid.
    for i in range(1, rows):
        for j in range(1, cols):
            grid[i][j] += min(grid[i-1][j], grid[i][j-1])
            
    return grid[-1][-1]`
    },
    { problem: 'Você recebe uma `grid` `m x n` onde `grid[i][j]` é `0` (representando água) ou `1` (representando terra). Uma ilha é um grupo de `1`s conectado 4-direcionalmente (horizontal ou vertical). Você pode assumir que todas as quatro bordas da grade estão cercadas por água. A área de uma ilha é o número de células com valor `1` na ilha. Retorne a área máxima de uma ilha em `grid`. Se não houver ilha, retorne `0`.', solution: 'dfs', difficulty: 'Médio',
      input: 'grid = [[0,0,1,0,...],[...],[...]]',
      output: '6',
      explanation: 'Iteramos através da grade. Quando encontramos um `1`, iniciamos uma DFS para explorar toda a ilha. A função DFS contará o número de células na ilha atual e as marcará como visitadas (por exemplo, mudando-as para `0`). Mantemos um registro da área máxima encontrada.',
      pythonSolution: `def maxAreaOfIsland(grid):
    """
    Problema: Encontrar a área máxima de uma ilha em um grid.
    """
    rows, cols = len(grid), len(grid[0])
    max_area = 0
    
    def dfs(r, c):
        if not (0 <= r < rows and 0 <= c < cols and grid[r][c] == 1):
            return 0
        
        # Marca como visitado.
        grid[r][c] = 0
        
        # Retorna 1 (para a célula atual) + área dos vizinhos.
        return (1 + dfs(r+1, c) + dfs(r-1, c) +
                    dfs(r, c+1) + dfs(r, c-1))
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                max_area = max(max_area, dfs(r, c))
                
    return max_area`
    },
    { 
      problem: 'Dada uma lista de inteiros não negativos representando as elevações de um mapa onde a largura de cada barra é 1, calcule quanta água ele pode reter após a chuva.',
      solution: 'two-pointers',
      difficulty: 'Médio',
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'Usamos dois ponteiros: a água que pode ser retida em cada posição é determinada pelo menor entre as alturas máximas à esquerda e à direita.',
      pythonSolution: `def trap(height):
    """
    Problema: Calcular a quantidade de água da chuva que pode ser retida entre as barras.
    """
    if not height: return 0
    l, r = 0, len(height) - 1
    leftMax, rightMax = height[l], height[r]
    res = 0

    while l < r:
        # Move o ponteiro com a altura máxima menor.
        if leftMax < rightMax:
            l += 1
            leftMax = max(leftMax, height[l])
            # A água retida em 'l' é determinada pela parede mais baixa (leftMax).
            res += leftMax - height[l]
        else:
            r -= 1
            rightMax = max(rightMax, height[r])
            # A água retida em 'r' é determinada pela parede mais baixa (rightMax).
            res += rightMax - height[r]
    return res`
    },
    { problem: 'Dada uma árvore binária, retorne a travessia em ziguezague de ordem de nível de seus nós\' valores. (ou seja, da esquerda para a direita, depois da direita para a esquerda para o próximo nível e alternar).', solution: 'bfs', difficulty: 'Médio',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[20,9],[15,7]]',
      explanation: 'Usamos BFS com uma fila. Mantemos um registro do nível atual. Para cada nível, decidimos a direção da travessia. Se for da esquerda para a direita, anexamos os nós à lista de nível normalmente. Se for da direita para a esquerda, anexamos ao início da lista.',
      pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzagLevelOrder(root):
    """
    Problema: Realizar uma travessia em ordem de nível em ziguezague de uma árvore binária.
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
    { problem: 'Dada uma string, determine se ela é um palíndromo válido, considerando apenas caracteres alfanuméricos e ignorando maiúsculas e minúsculas.', solution: 'two-pointers', difficulty: 'Médio',
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      explanation: 'Usamos dois ponteiros, um no início e um no final. Movemos os ponteiros para dentro, pulando caracteres não alfanuméricos. A cada passo, comparamos os caracteres (após converter para minúsculas). Se não corresponderem, não é um palíndromo.',
      pythonSolution: `def isPalindrome(s):
    """
    Problema: Verificar se uma string é um palíndromo, considerando apenas caracteres alfanuméricos.
    """
    left, right = 0, len(s) - 1
    
    while left < right:
        # Pula caracteres não alfanuméricos.
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
            
        # Compara caracteres (ignorando maiúsculas/minúsculas).
        if s[left].lower() != s[right].lower():
            return False
            
        left += 1
        right -= 1
        
    return True`
    },
    { problem: 'Dado um array de inteiros where 1 ≤ a[i] ≤ n (n = tamanho do array), alguns elementos aparecem duas vezes e outros uma vez. Encontre todos os elementos de [1, n] inclusive que não aparecem neste array.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[5,6]',
      explanation: 'Podemos usar o próprio array como um mapa de hash. Iteramos pelo array. Para cada número `num`, vamos ao índice `abs(num) - 1` e marcamos o elemento nesse índice como negativo. Em uma segunda passagem, encontramos todos os índices `i` para os quais `nums[i]` ainda é positivo. Estes correspondem aos números ausentes `i+1`.',
      pythonSolution: `def findDisappearedNumbers(nums):
    """
    Problema: Encontrar todos os números que estão faltando em um array contendo números de 1 a n.
    """
    # Usa o próprio array como um hash set.
    # O sinal do número em um índice indica se o número correspondente a esse índice foi visto.
    for num in nums:
        index = abs(num) - 1
        if nums[index] > 0:
            nums[index] = -nums[index]
            
    # Os índices dos números que ainda são positivos correspondem aos números ausentes.
    result = []
    for i in range(len(nums)):
        if nums[i] > 0:
            result.append(i + 1)
            
    return result`
    },
    { problem: 'Dada uma árvore binária, retorne a visão do lado direito dela. (os nós que você pode ver do lado direito).', solution: 'bfs', difficulty: 'Médio',
      input: 'root = [1,2,3,null,5,null,4]',
      output: '[1,3,4]',
      explanation: 'Podemos usar BFS para percorrer a árvore nível por nível. Para cada nível, o último nó que encontramos é o visível do lado direito. Adicionamos este nó à nossa lista de resultados.',
      pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root):
    """
    Problema: Obter a visão do lado direito de uma árvore binária.
    """
    if not root:
        return []
    
    queue = deque([root])
    result = []
    
    while queue:
        level_size = len(queue)
        for i in range(level_size):
            node = queue.popleft()
            
            # O último nó de cada nível é o que é visto do lado direito.
            if i == level_size - 1:
                result.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return result`
    },
    { problem: 'Dado um conjunto de intervalos, mescle todos os intervalos sobrepostos.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation: 'Primeiro, ordenamos os intervalos com base em seus tempos de início. Em seguida, iteramos através dos intervalos ordenados. Mantemos um registro do último intervalo mesclado. Se o intervalo atual se sobrepõe ao último, nós os mesclamos atualizando o final do último intervalo. Caso contrário, adicionamos o intervalo atual ao nosso resultado.',
      pythonSolution: `def merge(intervals):
    """
    Problema: Mesclar todos os intervalos sobrepostos.
    """
    if not intervals:
        return []
        
    # Ordena os intervalos pelo seu tempo de início.
    intervals.sort(key=lambda x: x[0])
    
    merged = [intervals[0]]
    for current in intervals[1:]:
        last = merged[-1]
        # Se o intervalo atual se sobrepõe ao último na lista mesclada...
        if current[0] <= last[1]:
            # ...mescla-os estendendo o final do último intervalo.
            last[1] = max(last[1], current[1])
        else:
            # Caso contrário, adiciona o novo intervalo.
            merged.append(current)
            
    return merged`
    },
    { problem: 'Dada uma string `s`, particione `s` de modo que cada substring da partição seja um palíndromo. Retorne todas as partições palíndromas possíveis de `s`.', solution: 'backtracking', difficulty: 'Médio',
      input: 's = "aab"',
      output: '[["a","a","b"],["aa","b"]]',
      explanation: 'Usamos backtracking. Iteramos através de todos os prefixos possíveis da string. Se um prefixo é um palíndromo, nós o adicionamos à nossa partição atual e fazemos uma chamada recursiva para o resto da string. Após o retorno da chamada, fazemos o backtrack removendo o prefixo.',
      pythonSolution: `def partition(s):
    """
    Problema: Encontrar todas as partições palíndromas possíveis de uma string.
    """
    res = []
    part = []

    def is_palindrome(sub):
        return sub == sub[::-1]

    def backtrack(i):
        # Caso base: particionamos a string inteira.
        if i >= len(s):
            res.append(list(part))
            return
            
        # Explora todas as partições possíveis a partir do índice i.
        for j in range(i, len(s)):
            if is_palindrome(s[i:j+1]):
                part.append(s[i:j+1])
                backtrack(j + 1)
                part.pop() # Backtrack
    
    backtrack(0)
    return res`
    },
    { problem: 'Projete uma estrutura de dados que suporte adicionar novas palavras e encontrar se uma string corresponde a qualquer string adicionada anteriormente.', solution: 'dfs', difficulty: 'Médio',
      input: 'comandos = ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\nentradas = [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]',
      output: '[null,null,null,null,false,true,true,true]',
      explanation: 'Podemos usar uma Trie (árvore de prefixo) para armazenar as palavras. Para a função de busca, se encontrarmos um caractere `.`, precisamos realizar uma DFS para verificar todos os caracteres possíveis naquela posição.',
      pythonSolution: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class WordDictionary:
    """
    Problema: Projetar uma estrutura de dados para adicionar palavras e pesquisar com curingas ('.').
    """
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        # Inserção padrão em Trie.
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word: str) -> bool:
        # Usa DFS para pesquisar, para lidar com o curinga '.'.
        def dfs(start_index, node):
            for i in range(start_index, len(word)):
                char = word[i]
                if char == '.':
                    # Se for um curinga, pesquisa recursivamente todos os filhos.
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
    { problem: 'Dada uma lista de temperaturas diárias `T`, retorne uma lista tal que, para cada dia na entrada, diga quantos dias você teria que esperar até uma temperatura mais quente. Se não houver um dia futuro para o qual isso seja possível, coloque 0 em vez disso.', solution: 'heap',
      difficulty: 'Médio',
      input: 'T = [73, 74, 75, 71, 69, 72, 76, 73]',
      output: '[1, 1, 4, 2, 1, 1, 0, 0]',
      explanation: 'Podemos usar uma pilha monotônica. Iteramos através das temperaturas. Se a temperatura atual for mais quente que a temperatura no topo da pilha, encontramos o próximo dia mais quente para o dia no topo da pilha. Retiramos da pilha e calculamos a diferença de dias.',
      pythonSolution: `def dailyTemperatures(T):
    """
    Problema: Para cada dia, encontre o número de dias até uma temperatura mais quente.
    """
    res = [0] * len(T)
    # A pilha armazenará índices de dias em ordem decrescente de temperatura.
    stack = []
    
    for i, temp in enumerate(T):
        # Enquanto a pilha não estiver vazia e o dia atual for mais quente
        # que o dia no topo da pilha...
        while stack and T[stack[-1]] < temp:
            # ...encontramos o próximo dia mais quente para o dia no topo da pilha.
            prev_index = stack.pop()
            res[prev_index] = i - prev_index
        stack.append(i)
        
    return res`
    },
    { problem: 'Dado um array de inteiros `nums`, há uma janela deslizante de tamanho `k` que está se movendo da extrema esquerda do array para a extrema direita. Você só pode ver os `k` números na janela. Cada vez que a janela deslizante se move para a direita em uma posição. Retorne a janela deslizante máxima.', solution: 'sliding-window', difficulty: 'Médio',
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[3,3,5,5,6,7]',
      explanation: 'Podemos usar uma deque (fila de duas pontas) para manter o controle dos índices dos elementos na janela atual, em ordem decrescente de seus valores. A frente da deque sempre será o índice do elemento máximo na janela.',
      pythonSolution: `from collections import deque

def maxSlidingWindow(nums, k):
    """
    Problema: Encontrar o valor máximo em uma janela deslizante de tamanho k à medida que ela se move pelo array.
    """
    res = []
    # A deque armazena índices de elementos na janela atual.
    # É mantida em ordem decrescente dos valores dos elementos.
    q = deque()
    
    for i, num in enumerate(nums):
        # Remove elementos da esquerda que não estão mais na janela.
        if q and q[0] == i - k:
            q.popleft()
            
        # Remove elementos da direita que são menores que o elemento atual.
        while q and nums[q[-1]] < num:
            q.pop()
            
        q.append(i)
        
        # Adiciona o elemento máximo (que está na frente da deque) ao resultado.
        if i >= k - 1:
            res.append(nums[q[0]])
            
    return res`
    },
    { problem: 'Um robô está localizado no canto superior esquerdo de uma grade `m x n`. O robô só pode se mover para baixo ou para a direita em qualquer ponto no tempo. O robô está tentando chegar ao canto inferior direito da grade. Quantos caminhos únicos possíveis existem?', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'm = 3, n = 7',
      output: '28',
      explanation: 'Usamos programação dinâmica. Seja `dp[i][j]` o número de caminhos únicos para alcançar a célula `(i,j)`. A relação de recorrência é `dp[i][j] = dp[i-1][j] + dp[i][j-1]`. Podemos otimizar isso para usar espaço extra O(n).',
      pythonSolution: `def uniquePaths(m, n):
    """
    Problema: Encontrar o número de caminhos únicos para um robô ir do
    canto superior esquerdo para o canto inferior direito de um grid, movendo-se apenas para a direita ou para baixo.
    """
    # Isso pode ser resolvido com DP, mas também com combinatória.
    # Movimentos totais = (m-1) para baixo + (n-1) para a direita = m + n - 2
    # Precisamos escolher quais desses movimentos são para 'baixo'.
    # A resposta é (m+n-2) escolha (m-1).
    import math
    return math.comb(m + n - 2, m - 1)`
    },
    { problem: 'Dado um tabuleiro `m x n` e uma palavra, encontre se a palavra existe na grade. A palavra pode ser construída a partir de letras de células sequencialmente adjacentes, onde "adjacentes" são vizinhas horizontal ou verticalmente. A mesma célula de letra não pode ser usada mais de uma vez.', solution: 'backtracking', difficulty: 'Médio',
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
      output: 'true',
      explanation: 'Usamos DFS com backtracking. Iniciamos uma busca a partir de cada célula. Se uma célula corresponde à letra atual da palavra, a marcamos como visitada e buscamos recursivamente em seus vizinhos pela próxima letra. Se a busca falhar, fazemos o backtrack desmarcando a célula.',
      pythonSolution: `def exist(board, word):
    """
    Problema: Encontrar se uma palavra pode ser formada por células adjacentes em um grid.
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
    { problem: 'Dada a raiz de uma árvore binária, determine se ela é uma árvore de busca binária válida.', solution: 'dfs', difficulty: 'Médio',
      input: 'root = [5,1,4,null,null,3,6]',
      output: 'false',
      explanation: 'Uma BST é válida se, para cada nó, todos os valores em sua subárvore esquerda forem menores e todos os valores em sua subárvore direita forem maiores. Podemos realizar uma DFS recursiva, passando o intervalo válido (mínimo e máximo) para cada nó.',
      pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    """
    Problema: Determinar se uma árvore binária é uma Árvore de Busca Binária (BST) válida.
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
    { problem: 'Dado um fluxo de inteiros e um tamanho de janela, calcule a média móvel de todos os inteiros na janela deslizante.', solution: 'sliding-window', difficulty: 'Médio',
      input: 'comandos = ["MovingAverage", "next", "next", "next", "next"], entradas = [[3], [1], [10], [3], [5]]',
      output: '[null, 1.0, 5.5, 4.66667, 6.0]',
      explanation: 'Podemos usar uma fila para armazenar os números na janela atual. Quando um novo número chega, o adicionamos à fila e à nossa soma contínua. Se o tamanho da janela for excedido, removemos o número mais antigo da fila e o subtraímos da soma.',
      pythonSolution: `from collections import deque

class MovingAverage:
    """
    Problema: Calcular a média móvel de um fluxo de números.
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
    { problem: 'Dada uma lista de palavras, escreva um programa que retorne todas as palavras concatenadas na lista de palavras dada.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]',
      output: '["catsdogcats","dogcatsdog","ratcatdogcat"]',
      explanation: 'Podemos usar programação dinâmica com um conjunto de palavras para buscas rápidas. Para cada palavra, verificamos se ela pode ser formada pela concatenação de outras palavras do conjunto. Usamos um array DP onde `dp[i]` é verdadeiro se o prefixo de comprimento `i` puder ser formado.',
      pythonSolution: `def findAllConcatenatedWordsInADict(words):
    """
    Problema: Encontrar todas as palavras em um dicionário que são concatenações de outras palavras.
    """
    word_set = set(words)
    res = []
    
    for word in words:
        if not word:
            continue
            
        # dp[i] é True se word[:i] é uma palavra concatenada.
        dp = [False] * (len(word) + 1)
        dp[0] = True
        
        for i in range(1, len(word) + 1):
            for j in range(i):
                # Verificamos se word[j:i] é uma palavra válida E word[:j] pode ser formada.
                # A condição (i-j != len(word)) garante que não comparemos a palavra consigo mesma.
                if dp[j] and word[j:i] in word_set and (i-j != len(word) or j != 0):
                    dp[i] = True
                    break
        
        if dp[-1]:
            res.append(word)
            
    return res`
    },
    { problem: 'Dada uma árvore binária, serialize-a para uma string e desserialize-a de volta para a árvore.', solution: 'dfs', difficulty: 'Médio',
      input: 'root = [1,2,3,null,null,4,5]',
      output: 'A mesma árvore, após serialização e desserialização.',
      explanation: 'Podemos usar uma travessia pré-ordem (DFS) para serializar a árvore. Representamos nós nulos com um marcador especial (por exemplo, "#"). Para desserializar, lemos os valores na mesma ordem e construímos a árvore recursivamente.',
      pythonSolution: `class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:
    """
    Problema: Serializar e desserializar uma árvore binária.
    """
    def serialize(self, root):
        res = []
        # Travessia pré-ordem (DFS).
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
    { problem: 'Dado um array de inteiros com todos os números positivos e sem duplicatas, encontre o número de combinações possíveis que somam um alvo inteiro positivo.', solution: 'backtracking', difficulty: 'Médio',
      input: 'nums = [1,2,3], target = 4',
      output: '7 (combinações: (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (1,3), (3,1), (2,2))',
      explanation: 'Isso pode ser resolvido com backtracking ou programação dinâmica. Com DP, `dp[i]` representa o número de combinações que somam `i`. Para cada `i`, podemos formá-lo adicionando qualquer `num` de `nums` a uma combinação que soma `i - num`.',
      pythonSolution: `def combinationSum4(nums, target):
    """
    Problema: Encontrar o número de combinações que somam a um alvo.
    (A ordem importa, então as permutações são contadas).
    """
    # dp[i] = número de maneiras de formar a soma i.
    dp = {0: 1}
    
    for i in range(1, target + 1):
        dp[i] = 0
        for num in nums:
            # Adiciona o número de maneiras de formar o restante.
            dp[i] += dp.get(i - num, 0)
            
    return dp.get(target, 0)`
    },
    { problem: 'Dado um array de `n` inteiros `nums`, existem elementos `a`, `b`, `c` em `nums` tais que `a + b + c = 0`? Encontre todos os trios únicos no array que dão a soma de zero.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'Primeiro ordenamos o array. Em seguida, iteramos pelo array com um ponteiro `i`. Para cada `i`, usamos outros dois ponteiros, `left` e `right`, para encontrar um par que some `-nums[i]`. Precisamos ter cuidado para pular trios duplicados.',
      pythonSolution: `def threeSum(nums):
    """
    Problema: Encontrar todos os trios únicos em um array que somam zero.
    """
    nums.sort()
    res = []
    
    for i, a in enumerate(nums):
        # Pula valores duplicados para o primeiro elemento 'a'.
        if i > 0 and a == nums[i-1]:
            continue
            
        # Usa dois ponteiros para o resto do array.
        l, r = i + 1, len(nums) - 1
        while l < r:
            three_sum = a + nums[l] + nums[r]
            if three_sum > 0:
                r -= 1
            elif three_sum < 0:
                l += 1
            else:
                res.append([a, nums[l], nums[r]])
                # Move o ponteiro esquerdo e pula suas duplicatas.
                l += 1
                while nums[l] == nums[l-1] and l < r:
                    l += 1
                    
    return res`
    },
    { problem: 'Pesquisar uma Matriz 2D. Escreva um algoritmo eficiente que procura um valor em uma matriz `m x n`. Esta matriz tem as seguintes propriedades: Os inteiros em cada linha são ordenados da esquerda para a direita. O primeiro inteiro de cada linha é maior que o último inteiro da linha anterior.', solution: 'binary-search', difficulty: 'Médio',
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
      output: 'true',
      explanation: 'A matriz pode ser tratada como um único array ordenado de tamanho `m*n`. Podemos realizar uma busca binária neste array virtual. Para converter um índice 1D `mid` para coordenadas 2D, usamos `row = mid // n` e `col = mid % n`.',
      pythonSolution: `def searchMatrix(matrix, target):
    """
    Problema: Procurar um alvo em uma matriz 2D ordenada.
    """
    if not matrix or not matrix[0]:
        return False
        
    rows, cols = len(matrix), len(matrix[0])
    # Trata a matriz como um array achatado e ordenado.
    left, right = 0, rows * cols - 1
    
    while left <= right:
        mid_index = (left + right) // 2
        # Converte o índice 1D de volta para 2D.
        mid_value = matrix[mid_index // cols][mid_index % cols]
        
        if mid_value == target:
            return True
        elif mid_value < target:
            left = mid_index + 1
        else:
            right = mid_index - 1
            
    return False`
    },
    { problem: 'Dada uma lista ligada, remova o n-ésimo nó do final da lista e retorne sua cabeça.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'head = [1,2,3,4,5], n = 2',
      output: '[1,2,3,5]',
      explanation: 'Usamos dois ponteiros, `fast` e `slow`. Primeiro movemos o ponteiro `fast` `n` passos à frente. Em seguida, movemos ambos os ponteiros um passo de cada vez até que `fast` alcance o final da lista. Neste ponto, `slow` estará no nó imediatamente anterior ao que deve ser removido.',
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    """
    Problema: Remover o n-ésimo nó do final de uma lista ligada.
    """
    # Usa um nó dummy para lidar com casos extremos, como a remoção da cabeça.
    dummy = ListNode(0, head)
    fast = slow = dummy
    
    # Move o ponteiro rápido n+1 passos à frente.
    for _ in range(n + 1):
        fast = fast.next
        
    # Move ambos os ponteiros até que o rápido alcance o final.
    while fast:
        fast = fast.next
        slow = slow.next
        
    # 'slow' agora está no nó anterior ao que deve ser removido.
    slow.next = slow.next.next
    
    return dummy.next`
    },
    { problem: 'Dada uma coleção de inteiros distintos, retorne todas as permutações possíveis.', solution: 'backtracking', difficulty: 'Médio',
      input: 'nums = [1,2,3]',
      output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
      explanation: 'Usamos backtracking. Construímos uma permutação número por número. Para cada posição, tentamos colocar qualquer número que ainda não tenha sido usado. Usamos um conjunto `visited` ou mecanismo semelhante para rastrear os números usados.',
      pythonSolution: `def permute(nums):
    """
    Problema: Encontrar todas as permutações possíveis de uma lista de números.
    """
    res = []
    
    def backtrack(path, used_mask):
        if len(path) == len(nums):
            res.append(list(path))
            return
            
        for i in range(len(nums)):
            # Verifica se o número no índice i foi usado.
            if not (used_mask & (1 << i)):
                path.append(nums[i])
                # Marca o número como usado.
                backtrack(path, used_mask | (1 << i))
                path.pop() # Backtrack
    
    backtrack([], 0)
    return res`
    },
    { problem: 'Dado um array não vazio de inteiros, retorne os `k` elementos mais frequentes.', solution: 'heap', difficulty: 'Médio',
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: 'Primeiro, contamos a frequência de cada número usando um mapa de hash. Em seguida, podemos usar uma min-heap de tamanho `k` para encontrar os `k` elementos mais frequentes. Uma alternativa é usar bucket sort, onde o índice do balde é a frequência.',
      pythonSolution: `import heapq
from collections import Counter

def topKFrequent(nums, k):
    """
    Problema: Encontrar os k elementos mais frequentes em um array.
    """
    # Conta as frequências de cada número.
    count = Counter(nums)
    # heapq.nlargest encontra os k maiores itens de um iterável.
    # Usamos a contagem como chave para comparação.
    return heapq.nlargest(k, count.keys(), key=count.get)`
    },
    { problem: 'Você recebe uma lista de `jobs`. Cada trabalho tem um `start time`, `end time` e `profit`. Encontre o lucro máximo que você pode obter agendando os trabalhos de forma que não haja sobreposição de dois trabalhos.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
      output: '120 (escolhendo os trabalhos 1 e 4, com lucros 50+70)',
      explanation: 'Ordenamos os trabalhos pelos seus tempos de término. Usamos um array DP onde `dp[i]` é o lucro máximo no tempo `i`. Para cada trabalho, encontramos o lucro máximo que poderíamos ter feito antes de ele começar e adicionamos o lucro do trabalho atual.',
      pythonSolution: `def jobScheduling(startTime, endTime, profit):
    """
    Problema: Encontrar o lucro máximo de um conjunto de trabalhos com tempos de início/fim,
    onde nenhum dos dois trabalhos se sobrepõe.
    """
    jobs = sorted(zip(startTime, endTime, profit), key=lambda v: v[1])
    # dp armazena tuplas de (tempo_final, lucro_maximo_ate_este_tempo).
    dp = [(0, 0)]
    
    for s, e, p in jobs:
        # Encontra o último trabalho que termina antes do atual começar.
        import bisect
        i = bisect.bisect_right(dp, (s, float('inf'))) - 1
        
        profit_with_current_job = dp[i][1] + p
        
        # Se este novo lucro for melhor que o último lucro máximo, adicione-o à nossa tabela DP.
        if profit_with_current_job > dp[-1][1]:
            dp.append((e, profit_with_current_job))
            
    return dp[-1][1]`
    },
    { problem: 'Encontre a mediana de dois arrays ordenados.', solution: 'binary-search', difficulty: 'Médio',
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.0',
      explanation: 'Este é um problema complexo que pode ser resolvido com busca binária em tempo O(log(m+n)). A ideia é particionar ambos os arrays em duas metades tal que todos os elementos das partições esquerdas sejam menores que todos os elementos das partições direitas, e o número total de elementos nas metades esquerdas seja igual (ou um a mais) que o número total nas metades direitas.',
      pythonSolution: `def findMedianSortedArrays(nums1, nums2):
    """
    Problema: Encontrar a mediana de dois arrays ordenados eficientemente.
    """
    A, B = nums1, nums2
    total = len(A) + len(B)
    half = total // 2

    # Garante que A seja o menor array para otimizar a busca binária
    if len(B) < len(A):
        A, B = B, A

    l, r = 0, len(A) - 1
    while True:
        i = (l + r) // 2  # Índice de partição do A
        j = half - i - 2  # Índice de partição do B

        Aleft = A[i] if i >= 0 else float("-inf")
        Aright = A[i + 1] if (i + 1) < len(A) else float("inf")
        Bleft = B[j] if j >= 0 else float("-inf")
        Bright = B[j + 1] if (j + 1) < len(B) else float("inf")

        # Verifica se encontramos a partição correta.
        if Aleft <= Bright and Bleft <= Aright:
            if total % 2: # Comprimento total ímpar
                return min(Aright, Bright)
            # Comprimento total par
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            r = i - 1
        else:
            l = i + 1`
    },
    { problem: 'Dado um array de inteiros, encontre o comprimento da subsequência crescente mais longa.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'nums = [10,9,2,5,3,7,101,18]',
      output: '4 (de [2,3,7,101])',
      explanation: 'Um problema clássico de PD. Seja `dp[i]` o comprimento da SIC terminando no índice `i`. Então, `dp[i] = 1 + max(dp[j])` para todo `j < i` onde `nums[j] < nums[i]`. Uma solução mais eficiente O(n log n) envolve manter uma lista ordenada da menor cauda de todas as subsequências crescentes.',
      pythonSolution: `def lengthOfLIS(nums):
    """
    Problema: Encontrar o comprimento da subsequência crescente mais longa.
    """
    # Esta solução O(n log n) mantém uma lista ordenada 'tails'.
    # 'tails[i]' é a menor cauda de todas as subsequências crescentes de comprimento i+1.
    tails = []
    for num in nums:
        import bisect
        # Encontra a posição onde 'num' pode ser inserido para manter a ordem.
        i = bisect.bisect_left(tails, num)
        if i == len(tails):
            # 'num' é maior que todas as caudas existentes, então estende a LIS.
            tails.append(num)
        else:
            # 'num' pode substituir uma cauda existente para formar uma LIS potencialmente melhor.
            tails[i] = num
    return len(tails)`
    },
    { problem: 'Dado `n`, gere todas as BST\'s (árvores de busca binária) estruturalmente únicas que armazenam valores 1...n.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'n = 3',
      output: '5 (o número de estruturas BST únicas)',
      explanation: 'Este é um problema de PD relacionado aos números de Catalan. Seja `G(n)` o número de BSTs únicas para `n` nós. Para construir uma BST, podemos escolher qualquer número `i` de 1 a `n` como raiz. Então, haverá `i-1` nós na subárvore esquerda e `n-i` nós na direita. O número total de árvores é a soma sobre todos os `i` de `G(i-1) * G(n-i)`.',
      pythonSolution: `def numTrees(n):
    """
    Problema: Encontrar o número de BSTs estruturalmente únicas para n nós com valores de 1 a n.
    """
    # This is the n-th Catalan number.
    # G(n) = sum_{i=1 to n} G(i-1) * G(n-i)
    dp = [0] * (n + 1)
    dp[0] = 1 # Caso base: uma BST para 0 nós (a árvore vazia)
    
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
    Problema: Validar se uma sequência de inteiros representa uma codificação UTF-8 válida.
    """
    num_bytes = 0
    for num in data:
        # Se não estamos no meio de um caractere multi-byte.
        if num_bytes == 0:
            if (num >> 5) == 0b110: # Caractere de 2 bytes
                num_bytes = 1
            elif (num >> 4) == 0b1110: # Caractere de 3 bytes
                num_bytes = 2
            elif (num >> 3) == 0b11110: # Caractere de 4 bytes
                num_bytes = 3
            # Se é um caractere de 1 byte, o bit mais significativo deve ser 0.
            elif (num >> 7):
                return False
        # Se estamos esperando um byte de continuação.
        else:
            # Deve começar com '10'.
            if (num >> 6) != 0b10:
                return False
            num_bytes -= 1
            
    # We must not be in the middle of a character at the end.
    return num_bytes == 0`
    },
    { problem: 'Clone um grafo. Cada nó no grafo contém um val (int) e uma lista (List[Node]) de seus vizinhos.', solution: 'bfs', difficulty: 'Médio',
      input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
      output: 'Uma cópia profunda do grafo.',
      explanation: 'Podemos usar BFS ou DFS. Usamos um hash map para armazenar o mapeamento dos nós originais para seus clones. Isso previne ficarmos presos em ciclos e garante que cada nó seja clonado apenas uma vez. Iteramos pelos nós do grafo original e para cada nó, criamos um clone e então clonamos seus vizinhos.',
      pythonSolution: `class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node: 'Node') -> 'Node':
    """
    Problema: Criar uma cópia profunda de um grafo.
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
    { problem: 'Dada uma matriz `m x n`, se um elemento for 0, defina toda a sua linha e coluna como 0.', solution: 'two-pointers', difficulty: 'Médio',
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
      explanation: 'Podemos usar a primeira linha e primeira coluna da matriz como marcadores. Iteramos pela matriz. Se encontrarmos um zero em `(i,j)`, marcamos `matrix[i][0]` e `matrix[0][j]` como zero. Usamos variáveis separadas para rastrear se a primeira linha/coluna em si precisam ser zeradas. Em uma segunda passada, usamos esses marcadores para definir os elementos como zero.',
      pythonSolution: `def setZeroes(matrix):
    """
    Problema: Se um elemento em uma matriz for 0, defina toda a sua linha e coluna como 0 no local.
    """
    rows, cols = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(cols))
    first_col_zero = any(matrix[i][0] == 0 for i in range(rows))
    
    # Usa a primeira linha e coluna como marcadores
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
                
    # Define zeros baseado nos marcadores
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
    { problem: 'Produto do Array Exceto Próprio. Dado um array `nums` de `n` inteiros onde `n > 1`, retorne um array `output` tal que `output[i]` seja igual ao produto de todos os elementos de `nums` exceto `nums[i]`.', solution: 'dynamic-programming', difficulty: 'Médio',
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'Podemos conseguir isso em tempo O(n) e espaço extra O(1). Fazemos duas passadas. Na primeira passada, construímos o array resultado onde `res[i]` contém o produto de todos os elementos à esquerda de `i`. Na segunda passada, iteramos da direita para a esquerda, multiplicando `res[i]` pelo produto de todos os elementos à direita de `i`.',
      pythonSolution: `def productExceptSelf(nums):
    """
    Problema: Calcular o produto de todos os elementos em um array exceto próprio.
    """
    n = len(nums)
    res = [1] * n
    
    # Primeira passada: calcular produtos de prefixo
    prefix = 1
    for i in range(n):
        res[i] = prefix
        prefix *= nums[i]
        
    # Segunda passada: calcular produtos de sufixo e multiplicar
    postfix = 1
    for i in range(n - 1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
        
    return res`
    },
    { problem: 'Cronograma de Curso. Há um total de `n` cursos que você deve fazer, rotulados de 0 a n-1. Alguns cursos podem ter pré-requisitos, por exemplo, para fazer o curso 0 você deve primeiro fazer o curso 1, que é expresso como um par: [0,1]. Dado o número total de cursos e uma lista de pares de pré-requisitos, é possível para você terminar todos os cursos?', solution: 'dfs', difficulty: 'Médio',
      input: 'numCourses = 2, prerequisites = [[1,0]]',
      output: 'true',
      explanation: 'Este é um problema de detecção de ciclos em um grafo direcionado. Podemos usar DFS. Construímos uma representação de lista de adjacência do grafo. Mantemos um conjunto visitado para cada caminho DFS. Se encontrarmos um nó que já está em nosso caminho atual, encontramos um ciclo.',
      pythonSolution: `def canFinish(numCourses, prerequisites):
    """
    Problema: Determinar se todos os cursos podem ser finalizados dada uma lista de pré-requisitos.
    Isso é equivalente a detectar um ciclo em um grafo direcionado.
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
        # Otimização: uma vez validado um curso, não precisamos verificá-lo novamente.
        adj[crs] = []
        return True
        
    # Verifica cada curso caso o grafo não seja totalmente conectado.
    for crs in range(numCourses):
        if not dfs(crs):
            return False
    return True`
    },
    // Difícil
    { problem: 'Dado um array de inteiros não-negativos representando a altura das barras do histograma onde a largura de cada barra é 1, encontre a área do maior retângulo no histograma.', solution: 'two-pointers', difficulty: 'Difícil',
      input: 'heights = [2,1,5,6,2,3]',
      output: '10 (do retângulo de altura 5 abrangendo 2 barras)',
      explanation: 'Podemos usar uma pilha monotônica. Iteramos pelas alturas. Se a altura atual for menor que a altura no topo da pilha, podemos calcular a área para o retângulo com a altura no topo da pilha. Removemos da pilha até que essa condição não seja mais verdadeira.',
      pythonSolution: `def largestRectangleArea(heights):
    """
    Problema: Encontrar a maior área de retângulo em um histograma.
    """
    max_area = 0
    # Pilha armazena tuplas de (índice, altura)
    stack = []
    
    for i, h in enumerate(heights):
        start = i
        # Quando encontramos uma barra menor que a do topo da pilha,
        # podemos calcular a área da barra removida
        while stack and stack[-1][1] > h:
            index, height = stack.pop()
            max_area = max(max_area, height * (i - index))
            start = index
        stack.append((start, h))
        
    # Para barras restantes na pilha, seu retângulo se estende até o fim
    for i, h in stack:
        max_area = max(max_area, h * (len(heights) - i))
        
    return max_area`
    },
    { problem: 'Dados dois arrays ordenados `nums1` e `nums2` de tamanho `m` e `n` respectivamente, encontre a mediana dos dois arrays ordenados. A complexidade de tempo total deve ser O(log(m+n)).', solution: 'binary-search', difficulty: 'Difícil',
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '2.5',
      explanation: 'A ideia central é encontrar uma partição em ambos os arrays tal que todos os elementos das partições esquerdas sejam menores que todos os elementos das partições direitas. Podemos fazer busca binária pela partição correta no array menor, o que então determina a partição no array maior.',
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
    { problem: 'Implemente um verificador de expressão regular com suporte para `.` e `*`.', solution: 'dynamic-programming', difficulty: 'Difícil',
      input: 's = "aab", p = "c*a*b"',
      output: 'true',
      explanation: 'Usamos programação dinâmica com uma tabela DP 2D. `dp[i][j]` é verdadeiro se os primeiros `i` caracteres de `s` correspondem aos primeiros `j` caracteres de `p`. Lidamos com três casos para `p[j-1]`: é um caractere normal, é `.`, ou é `*`. O caso `*` é complexo pois pode corresponder a zero ou mais do elemento precedente.',
      pythonSolution: `def isMatch(s: str, p: str) -> bool:
    """
    Problema: Implementar um verificador de regex suportando '.' e '*'.
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
    { problem: 'Dados `n` inteiros não-negativos representando um mapa de elevação onde a largura de cada barra é 1, calcule quanta água pode ser coletada depois da chuva.', solution: 'two-pointers', difficulty: 'Difícil',
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'Usamos dois ponteiros, `left` e `right`, e mantemos o controle da altura máxima vista até agora de ambos os lados (`left_max`, `right_max`). A cada passo, movemos o ponteiro correspondente à menor altura máxima. A água coletada naquela posição é a diferença entre a altura máxima e a altura atual.',
      pythonSolution: `def trap(height: list[int]) -> int:
    """
    Problema: Calcular quanta água pode ser coletada depois da chuva.
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
    { problem: 'Mescle `k` listas ligadas ordenadas e retorne como uma lista ordenada. Analise e descreva sua complexidade.', solution: 'heap', difficulty: 'Difícil',
      input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
      output: '[1,1,2,3,4,4,5,6]',
      explanation: 'Usamos um min-heap para manter o controle do menor elemento entre todas as listas. Inicializamos o heap com o primeiro nó de cada lista. Então, repetidamente extraímos o nó mínimo do heap, o adicionamos à nossa lista de resultado, e inserimos o próximo nó da mesma lista no heap.',
      pythonSolution: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists: list[ListNode]) -> ListNode:
    """
    Problema: Mesclar k listas ligadas ordenadas em uma.
    """
    # Usa uma min-heap para obter eficientemente o menor nó.
    # A heap armazena tuplas de (valor, índice_lista, nó).
    # O índice_lista é um desempate para lidar com nós de mesmo valor.
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
    { problem: 'Dada uma string `s` e um dicionário de strings `wordDict`, adicione espaços em `s` para construir uma sentença onde cada palavra é uma palavra válida do dicionário. Retorne todas as sentenças possíveis.', solution: 'backtracking', difficulty: 'Difícil',
      input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
      output: '["cats and dog", "cat sand dog"]',
      explanation: 'Usamos backtracking com memoização. Definimos uma função recursiva que encontra todas as sentenças válidas para um sufixo de `s`. Para cada prefixo do sufixo que é uma palavra válida, fazemos uma chamada recursiva para o resto do sufixo e combinamos os resultados.',
      pythonSolution: `def wordBreak(s: str, wordDict: list[str]) -> list[str]:
    """
    Problema: Encontrar todas as maneiras de quebrar uma string em sequência de palavras do dicionário.
    """
    word_set = set(wordDict)
    # Memoização para armazenar resultados de substrings já processadas
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
                # Obtém todas as sentenças válidas para o resto da string
                for rest in backtrack(sub[i:]):
                    res.append(prefix + (" " if rest else "") + rest)
                    
        memo[sub] = res
        return res
        
    return backtrack(s)`
    },
    { problem: 'O quebra-cabeça das N-Rainhas é o problema de colocar `n` rainhas em um tabuleiro `n x n` tal que nenhuma rainha ataque outra. Dado um inteiro `n`, retorne todas as soluções distintas para o quebra-cabeça das N-Rainhas.', solution: 'backtracking', difficulty: 'Difícil',
      input: 'n = 4',
      output: '[ [".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."] ]',
      explanation: 'Usamos backtracking. Tentamos colocar uma rainha em cada linha, uma por vez. Para cada linha, iteramos por todas as colunas. Se colocar uma rainha em `(row, col)` for seguro (ou seja, não atacada por nenhuma rainha anterior), a colocamos e fazemos uma chamada recursiva para a próxima linha. Usamos conjuntos para rastrear colunas e diagonais ocupadas.',
      pythonSolution: `def solveNQueens(n: int) -> list[list[str]]:
    """
    Problema: Colocar n rainhas em um tabuleiro n x n para que nenhuma rainha ataque outra.
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
    { problem: 'Dado um array de inteiros, encontre a soma máxima de um subarray com a restrição de que o subarray deve ter tamanho de pelo menos 1.', solution: 'dynamic-programming', difficulty: 'Difícil',
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'Este é o algoritmo de Kadane. Mantemos duas variáveis: `max_so_far` e `current_max`. Iteramos pelo array. `current_max` é o máximo do elemento atual ou o elemento atual mais `current_max`. `max_so_far` é atualizado a cada passo.',
      pythonSolution: `def maxSubArray(nums: list[int]) -> int:
    """
    Problema: Encontrar o subarray contíguo com a maior soma.
    """
    max_so_far = nums[0]
    current_max = nums[0]
    
    for num in nums[1:]:
        current_max = max(num, current_max + num)
        max_so_far = max(max_so_far, current_max)
        
    return max_so_far`
    },
    { problem: 'Existem dois arrays ordenados `nums1` e `nums2` de tamanho `m` e `n` respectivamente. Encontre a mediana dos dois arrays ordenados.', solution: 'binary-search', difficulty: 'Difícil',
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.0',
      explanation: 'Este é um problema complexo que pode ser resolvido com busca binária em tempo O(log(m+n)). A ideia é particionar ambos os arrays em duas metades tal que todos os elementos das partições esquerdas sejam menores que todos os elementos das partições direitas, e o número total de elementos nas metades esquerdas seja igual (ou um a mais) que o número total nas metades direitas.',
      pythonSolution: `def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:
    """
    Problema: Encontrar a mediana de dois arrays ordenados.
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
    { problem: 'Você recebe uma lista de `points` representando coordenadas inteiras de alguns pontos em um plano 2D, onde `points[i] = [xi, yi]`. O custo de conectar dois pontos `(xi, yi)` e `(xj, yj)` é a distância manhattan entre eles: `|xi - xj| + |yi - yj|`. Retorne o custo mínimo para fazer todos os pontos conectados. Todos os pontos estão conectados se há exatamente um caminho simples entre quaisquer dois pontos.', solution: 'dfs', difficulty: 'Difícil',
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'Este é um problema de Árvore Geradora Mínima (MST). Podemos usar o algoritmo de Prim ou o algoritmo de Kruskal. Para Prim, começamos com um ponto arbitrário, e a cada passo, adicionamos a aresta mais barata que conecta um ponto na MST a um ponto fora da MST. Um min-heap é usado para encontrar eficientemente a aresta mais barata.',
      pythonSolution: `import heapq

def minCostConnectPoints(points: list[list[int]]) -> int:
    """
    Problema: Encontrar o custo mínimo para conectar todos os pontos, onde o custo é a
    distância Manhattan. Este é um problema de Árvore Geradora Mínima (MST).
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
