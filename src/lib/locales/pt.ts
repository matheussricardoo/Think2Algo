
import type { Challenge } from '../types/challenge';

export const pt = {
  sidebar: {
    title: 'Think2Algo',
    theory: 'Teoria',
    algorithms: 'Algoritmos',
    challenges: 'Desafios',
    bigO: 'Notação Big O',
    mikeFramework: 'Framework MIKE',
  },
  workspace: {
    selectAlgorithm: 'Selecione um algoritmo para ver os detalhes.',
  },
  mikeFramework: {
    title: 'O Framework MIKE para Resolução de Problemas',
    description: 'O framework MIKE é um modelo mental para abordar e resolver problemas de algoritmos de forma sistemática, especialmente em um contexto de entrevista. Ele garante que você cubra todos os passos necessários, desde a compreensão do problema até a verificação da sua solução. O nome é um acrônimo para Match, Implement, Know, e Explain.',
    match: {
      title: 'M: Match (Corresponder)',
      description: 'O primeiro e mais crucial passo. Seu objetivo é corresponder o problema ao padrão algorítmico correto. É isso que o Think2Algo ajuda você a praticar.',
      steps: [
        {
          title: 'Ouça e Esclareça',
          description: 'Ouça ativamente o problema. Faça perguntas de esclarecimento para entender as restrições (ex: "O array está ordenado?", "Quais são os limites para o tamanho da entrada?", "Posso modificar a entrada?").'
        },
        {
          title: 'Identifique Palavras-chave e Sinais',
          description: 'Procure por sinais reveladores. "Caminho mais curto em um grafo não ponderado" -> BFS. "Todas as combinações/permutações" -> Backtracking. "Array ordenado" -> Busca Binária ou Dois Ponteiros.'
        },
        {
          title: 'Considere Estruturas de Dados',
          description: 'Qual estrutura de dados se encaixa no problema? Você precisa de buscas rápidas (Hash Map), ordenação (Heap), ou comportamento LIFO/FIFO (Pilha/Fila)?'
        }
      ]
    },
    implement: {
      title: 'I: Implement (Implementar)',
      description: 'Quando você tiver um plano claro, comece a codificar. O objetivo aqui é escrever um código limpo, correto e legível.',
      steps: [
        {
          title: 'Comece com uma Ideia de Força Bruta',
          description: 'Não há problema em pensar primeiro em uma solução de força bruta. Você pode mencioná-la ao entrevistador e depois discutir como otimizá-la. Isso mostra que você pode resolver o problema, mesmo que de forma ineficiente a princípio.'
        },
        {
          title: 'Codifique a Solução Otimizada',
          description: 'Traduza o algoritmo escolhido para código. Use nomes de variáveis significativos e funções auxiliares para manter seu código organizado.'
        },
        {
          title: 'Teste com Casos de Borda',
          description: 'Enquanto codifica, pense nos casos de borda: arrays vazios, entradas com um único elemento, números grandes, etc. Lide com eles de forma elegante.'
        }
      ]
    },
    know: {
      title: 'K: Know (Conhecer)',
      description: 'Este passo é sobre saber o "porquê" por trás do seu código. Você precisa entender seu desempenho e trade-offs.',
      steps: [
        {
          title: 'Analise a Complexidade de Tempo',
          description: 'Determine a complexidade de tempo Big O da sua solução. Explique-a com base nos loops, recursões e operações de estrutura de dados em seu código.'
        },
        {
          title: 'Analise a Complexidade de Espaço',
          description: 'Determine a complexidade de espaço Big O. Leve em conta qualquer espaço extra usado por suas estruturas de dados ou pela pilha de chamadas de recursão.'
        },
        {
          title: 'Discuta os Trade-offs',
          description: 'Por que sua solução é boa? Poderia ser melhor? Por exemplo, "Minha solução usa espaço O(n) para um hash map para alcançar tempo O(n), o que é mais rápido que a abordagem baseada em ordenação, que tem espaço O(1) e tempo O(n log n)."'
        }
      ]
    },
    explain: {
      title: 'E: Explain (Explicar)',
      description: 'A comunicação é fundamental. Você deve ser capaz de explicar claramente seu processo de pensamento e sua solução.',
      steps: [
        {
          title: 'Verbalize Seus Pensamentos',
          description: 'Fale sobre sua lógica enquanto está correspondendo e implementando. Explique por que você está fazendo certas escolhas.'
        },
        {
          title: 'Percorra um Exemplo',
          description: 'Depois de escrever o código, trace manualmente um exemplo de entrada simples através da sua lógica para mostrar que funciona. Esta é uma ótima maneira de pegar bugs e provar a correção.'
        },
        {
          title: 'Resuma a Solução',
          description: 'Conclua resumindo a abordagem, sua complexidade e por que é uma solução eficaz para o problema.'
        }
      ]
    }
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
    solutionExplanation: 'Explicação',
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
        example: 'Encontre o primeiro número em um array ordenado que seja maior ou igual a Y.'
    }
  },
  challenges: [
    {
      problem: 'Dado um array de inteiros `nums`, retorne `true` se qualquer valor aparecer pelo menos duas vezes no array, e retorne `false` se cada elemento for distinto.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [1,2,3,1]',
      output: 'true',
      solutions: [
        {
          title: 'Solução Otimizada (Hash Set)',
          explanation: "A abordagem otimizada usa um hash set devido à sua complexidade de tempo média de O(1) para inserções e buscas. Ao iterar pelo array uma vez, alcançamos uma complexidade de tempo geral de O(n). Isso é significativamente mais rápido do que ordenar. A contrapartida é a complexidade de espaço de O(n) para armazenar os elementos no conjunto, mas isso geralmente é aceitável pelo ganho de desempenho.",
          code: `def containsDuplicate(nums):
    # Cria um hash set vazio. Buscas e inserções são O(1) em média.
    hashset = set()
    
    # Itera através de cada número na lista de entrada.
    for n in nums:
        # Se o número já está no hash set, encontramos uma duplicata.
        if n in hashset:
            return True
        # Se não, adiciona ao conjunto para futuras verificações.
        hashset.add(n)
        
    # Se o loop terminar sem encontrar duplicatas, retorna False.
    return False`
        },
        {
          title: 'Solução Força Bruta (Ordenação)',
          explanation: "Uma abordagem comum de força bruta é ordenar o array primeiro. A ordenação leva tempo O(n log n). Após a ordenação, podemos fazer uma única passagem (O(n)) para verificar se há elementos adjacentes idênticos. A complexidade de tempo total é dominada pela ordenação, tornando-a O(n log n). Embora essa abordagem tenha uma melhor complexidade de espaço de O(1) (se a ordenação for in-place), ela é menos eficiente em tempo do que o método do hash set para entradas grandes.",
          code: `def containsDuplicate_bruteforce(nums):
    # Ordena o array. Isso coloca todos os elementos idênticos um ao lado do outro.
    # A complexidade de tempo para este passo é O(n log n).
    nums.sort()
    
    # Itera pelo array ordenado até o penúltimo elemento.
    # Este loop executa n-1 vezes, então é O(n).
    for i in range(len(nums) - 1):
        # Compara o elemento atual com o próximo.
        if nums[i] == nums[i+1]:
            # Se forem iguais, existe uma duplicata.
            return True
            
    # Se o loop terminar, nenhuma duplicata foi encontrada.
    return False`
        }
      ]
    },
    {
      problem: 'Dado um array ordenado de inteiros distintos e um valor alvo, retorne o índice se o alvo for encontrado. Se não, retorne o índice onde ele estaria se fosse inserido em ordem.',
      solution: 'binary-search',
      difficulty: 'Fácil',
      input: 'nums = [1,3,5,6], target = 5',
      output: '2',
      solutions: [{
        title: 'Solução Otimizada (Busca Binária)',
        explanation: "Como o array está ordenado, a Busca Binária é o algoritmo ideal. Ele alcança uma complexidade de tempo de O(log n) ao dividir repetidamente o intervalo de busca pela metade. Uma varredura linear de força bruta (verificando cada elemento um por um) levaria tempo O(n), o que é muito menos eficiente para grandes conjuntos de dados. A abordagem de busca binária encontra elegantemente o elemento ou seu ponto de inserção correto.",
        code: `def searchInsert(nums, target):
    # Inicializa dois ponteiros, left e right, no início e no fim do array.
    left, right = 0, len(nums) - 1
    
    # Faz o loop enquanto o espaço de busca for válido (ponteiro esquerdo não passou o direito).
    while left <= right:
        # Calcula o índice do meio para evitar um possível overflow.
        mid = left + (right - left) // 2
        
        # Se o elemento do meio é o alvo, o encontramos.
        if nums[mid] == target:
            return mid
        # Se o elemento do meio é menor que o alvo, o alvo deve estar na metade direita.
        elif nums[mid] < target:
            left = mid + 1
        # Se o elemento do meio é maior, o alvo deve estar na metade esquerda.
        else:
            right = mid - 1
            
    # Se o loop terminar, o alvo não foi encontrado.
    # 'left' está agora no índice de inserção correto.
    return left`
      }]
    },
    {
      problem: 'Dada uma string `s`, encontre o comprimento da maior substring sem caracteres repetidos.',
      solution: 'sliding-window',
      difficulty: 'Médio',
      input: 's = "abcabcbb"',
      output: '3',
      solutions: [{
        title: 'Solução Otimizada (Janela Deslizante)',
        explanation: "Este é um problema clássico de 'Janela Deslizante'. Usamos dois ponteiros (esquerda e direita) para definir uma 'janela' e um hash set para armazenar os caracteres atualmente nessa janela. Expandimos a janela movendo o ponteiro direito. Se encontrarmos um caractere que já está em nosso conjunto, encolhemos a janela pela esquerda até que a duplicata seja removida. Isso garante que iteramos pela string apenas uma vez, resultando em uma complexidade de tempo ótima de O(n).",
        code: `def lengthOfLongestSubstring(s):
    # Conjunto para armazenar caracteres na janela atual para buscas O(1).
    charSet = set()
    # Ponteiro esquerdo da janela.
    l = 0
    # Variável para armazenar o comprimento máximo encontrado.
    res = 0

    # Itera pela string com o ponteiro direito.
    for r in range(len(s)):
        # Verifica se o caractere no ponteiro direito já está no conjunto (uma duplicata).
        while s[r] in charSet:
            # Se estiver, remove o caractere no ponteiro esquerdo do conjunto.
            charSet.remove(s[l])
            # E desliza o ponteiro esquerdo para a direita, encolhendo a janela.
            l += 1
        # Adiciona o novo caractere do ponteiro direito ao conjunto.
        charSet.add(s[r])
        # Atualiza o resultado com o comprimento máximo da janela válida atual.
        res = max(res, r - l + 1)
    return res`
      }]
    },
    {
      problem: 'Você recebe uma lista de preços de ações onde `prices[i]` é o preço em um determinado dia. Encontre o lucro máximo que você pode obter comprando em um dia e vendendo em um dia posterior.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'prices = [7,1,5,3,6,4]',
      output: '5 (Compre a 1, Venda a 6)',
      solutions: [{
        title: 'Solução Otimizada (Dois Ponteiros)',
        explanation: "Este problema pode ser resolvido eficientemente usando uma abordagem de 'Dois Ponteiros' em uma única passagem (O(n)). Usamos um ponteiro 'esquerdo' para a compra e um 'direito' para a venda. Iteramos o ponteiro 'direito' pelos preços e, se encontrarmos um preço mais baixo que o nosso preço de compra atual, movemos nosso ponteiro de 'compra' para este novo mínimo. Caso contrário, calculamos o lucro potencial e mantemos o controle do lucro máximo encontrado. Uma abordagem de força bruta O(n²), verificando todos os pares possíveis de dias de compra/venda, seria muito lenta para grandes entradas.",
        code: `def maxProfit(prices):
    # Inicializa um ponteiro esquerdo para a compra e um direito para a venda.
    # Começa com o esquerdo no dia 0 e o direito no dia 1.
    l, r = 0, 1 
    # Inicializa o lucro máximo como 0.
    maxP = 0

    # Itera enquanto o ponteiro direito estiver dentro dos limites do array.
    while r < len(prices):
        # Verifica se uma transação lucrativa é possível (preço de compra < preço de venda).
        if prices[l] < prices[r]:
            # Calcula o lucro atual.
            profit = prices[r] - prices[l]
            # Atualiza o lucro máximo encontrado até agora.
            maxP = max(maxP, profit)
        else:
            # Se o preço de venda não for maior que o preço de compra, este é um novo mínimo.
            # Devemos mover nosso ponteiro de compra para cá, pois comprar neste preço mais baixo
            # é sempre melhor.
            l = r
        # Move o ponteiro de venda para o próximo dia.
        r += 1
    
    return maxP`
      }]
    },
    {
      problem: 'Gere todas as combinações válidas de `n` pares de parênteses.',
      solution: 'backtracking',
      difficulty: 'Médio',
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      solutions: [
        {
          title: 'Solução Otimizada (Backtracking)',
          explanation: "Este é um problema clássico de Backtracking. Construímos a string recursivamente, adicionando '(' ou ')' a cada passo. Para garantir que a combinação seja sempre válida, seguimos duas regras: 1) Só podemos adicionar um ')' se tivermos mais parênteses abertos do que fechados. 2) Só podemos adicionar um '(' se ainda não usamos todos os `n` parênteses abertos. Essa poda de caminhos inválidos é o que torna o backtracking eficiente. Exploramos todas as combinações válidas sem gerar as inválidas.",
          code: `def generateParenthesis(n):
    # Pilha para construir a combinação atual.
    stack = []
    # Lista para armazenar todos os resultados válidos.
    res = []

    def backtrack(openN, closedN):
        # Caso base: se usamos todos os parênteses abertos e fechados,
        # temos uma combinação válida.
        if openN == closedN == n:
            res.append("".join(stack))
            return

        # Condição 1: Podemos adicionar um parêntese de abertura se não atingimos o máximo (n).
        if openN < n:
            stack.append("(")
            # Chamada recursiva com mais um parêntese de abertura usado.
            backtrack(openN + 1, closedN)
            # Backtrack: remove o parêntese para explorar outras possibilidades.
            stack.pop()
        
        # Condição 2: Podemos adicionar um parêntese de fechamento apenas se for menor que os de abertura usados.
        # Isso garante que a combinação permaneça válida.
        if closedN < openN:
            stack.append(")")
            # Chamada recursiva com mais um parêntese de fechamento usado.
            backtrack(openN, closedN + 1)
            # Backtrack.
            stack.pop()

    # Inicia o processo de backtracking.
    backtrack(0, 0)
    return res`
        }
      ]
    },
    {
      problem: 'Dada uma grade 2D de `1`s (terra) e `0`s (água), conte o número de ilhas.',
      solution: 'dfs',
      difficulty: 'Médio',
      input: 'grid = [["1","1","0"], ["1","1","0"], ["0","0","1"]]',
      output: '2',
      solutions: [
        {
          title: 'Solução Otimizada (DFS)',
          explanation: 'Este problema é um caso de uso clássico para algoritmos de travessia de grafos como DFS ou BFS. A grade pode ser vista como um grafo onde células de terra adjacentes estão conectadas. Iteramos por cada célula da grade. Se uma célula contém um `1`, incrementamos nossa contagem de ilhas e então iniciamos um DFS a partir daquela célula para encontrar todas as partes conectadas da ilha. A chave é marcar as células visitadas (por exemplo, mudando `1` para `0` ou usando um conjunto `visited` separado) para garantir que não contemos a mesma ilha duas vezes.',
          code: `def numIslands(grid):
    # Se a grade estiver vazia, não há ilhas.
    if not grid:
        return 0

    # Obtém as dimensões da grade.
    rows, cols = len(grid), len(grid[0])
    # Inicializa a contagem de ilhas.
    islands = 0

    # A função auxiliar dfs explora e "afunda" uma ilha.
    def dfs(r, c):
        # Verifica os limites ou se a célula é água ou já foi visitada.
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        
        # Marca a célula atual como visitada, mudando-a para '0' (afundando-a).
        grid[r][c] = '0'
        
        # Chama recursivamente o dfs em todas as 4 células adjacentes.
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    # Itera por cada célula na grade.
    for r in range(rows):
        for c in range(cols):
            # Se encontrarmos um '1', é o começo de uma nova ilha não visitada.
            if grid[r][c] == '1':
                # Incrementa a contagem de ilhas.
                islands += 1
                # Inicia o DFS para encontrar e afundar todas as partes desta ilha.
                dfs(r, c)
    
    return islands`
        }
      ]
    },
    {
      problem: 'Dada uma árvore binária, encontre o caminho mais curto da raiz até qualquer nó folha. Retorne o número de nós nesse caminho.',
      solution: 'bfs',
      difficulty: 'Fácil',
      input: 'Uma estrutura de árvore binária',
      output: 'A profundidade mínima (ex: 2)',
      solutions: [
        {
          title: 'Solução Otimizada (BFS)',
          explanation: 'BFS é o algoritmo perfeito para encontrar o caminho mais curto em um grafo não ponderado, o que inclui uma árvore binária. Ele explora a árvore nível por nível. A primeira vez que encontramos um nó folha (um nó sem filhos), encontramos o caminho mais curto, porque estamos explorando camada por camada a partir da raiz. Uma abordagem DFS também funcionaria, mas teria que explorar cada caminho até o final para determinar qual é o mais curto, tornando-a menos eficiente para este problema específico.',
          code: `from collections import deque

# Definição para um nó de árvore binária.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def minDepth(root):
    # Se a raiz for nula, a profundidade é 0.
    if not root:
        return 0

    # Inicializa uma fila para BFS com o nó raiz e sua profundidade (1).
    q = deque([(root, 1)])

    # Processa a fila até que esteja vazia.
    while q:
        # Retira o próximo nó e sua profundidade atual da fila.
        node, depth = q.popleft()

        # Verifica se é um nó folha (sem filho à esquerda e sem à direita).
        if not node.left and not node.right:
            # Como o BFS explora nível por nível, a primeira folha que encontramos
            # nos dá a profundidade mínima.
            return depth
        
        # Se não for uma folha, adiciona seus filhos à fila para o próximo nível.
        if node.left:
            q.append((node.left, depth + 1))
        if node.right:
            q.append((node.right, depth + 1))
`
        }
      ]
    },
    {
      problem: 'Você está subindo uma escada. Leva `n` degraus para chegar ao topo. A cada vez, você pode subir 1 ou 2 degraus. De quantas maneiras distintas você pode chegar ao topo?',
      solution: 'dynamic-programming',
      difficulty: 'Fácil',
      input: 'n = 3',
      output: '3 (1+1+1, 1+2, 2+1)',
      solutions: [
        {
          title: 'Solução Otimizada (Programação Dinâmica)',
          explanation: 'Este é um problema clássico de PD que exibe o padrão da sequência de Fibonacci. O número de maneiras de alcançar o degrau `n` é a soma das maneiras de alcançar o degrau `n-1` (dando um passo) e as maneiras de alcançar o degrau `n-2` (dando dois passos). Uma solução recursiva ingênua seria muito lenta (O(2^n)) devido à recomputação dos mesmos subproblemas. A PD com uma abordagem bottom-up resolve isso em tempo O(n) e espaço O(1), mantendo apenas o controle dos dois últimos resultados.',
          code: `def climbStairs(n):
    # Precisamos apenas armazenar os resultados dos dois degraus anteriores.
    # Inicialize 'one' para o degrau anterior ao atual, e 'two' para dois degraus antes.
    # Para n=1, há 1 maneira. Para n=2, há 2 maneiras. Podemos construir a partir daí.
    # Vamos usar um caso base de duas variáveis representando os dois últimos degraus.
    one, two = 1, 1

    # Itera de 0 até n-1.
    for i in range(n - 1):
        # O novo 'one' (ex: maneiras de chegar ao degrau i) é a soma dos dois anteriores.
        # Antes de atualizar 'one', guardamos seu valor antigo em 'temp'.
        temp = one
        one = one + two
        # O novo 'two' se torna o antigo 'one'.
        two = temp

    # 'one' conterá o número total de maneiras para n degraus.
    return one`
        },
        {
          title: 'Solução Recursiva (Força Bruta)',
          explanation: "A solução mais intuitiva é uma recursão direta. Para chegar ao degrau 'n', poderíamos ter vindo de 'n-1' ou 'n-2'. Então, simplesmente somamos os resultados de `climbStairs(n-1)` e `climbStairs(n-2)`. Embora correta, essa abordagem tem uma complexidade de tempo exponencial de O(2^n) porque recalcula os mesmos valores muitas vezes (por exemplo, `climbStairs(3)` é calculado repetidamente). Isso será muito lento para valores maiores de `n`.",
          code: `def climbStairs_recursive(n):
    # Casos base para a recursão
    if n == 1:
        return 1
    if n == 2:
        return 2

    # Passo recursivo: soma das maneiras de chegar aos dois degraus anteriores.
    # Isso levará a muitos cálculos repetidos.
    return climbStairs_recursive(n-1) + climbStairs_recursive(n-2)
`
        }
      ]
    },
    {
      problem: 'Encontre o K-ésimo maior elemento em um array não ordenado. Note que é o K-ésimo maior elemento na ordem ordenada, não o K-ésimo elemento distinto.',
      solution: 'heap',
      difficulty: 'Médio',
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      solutions: [
        {
          title: 'Solução Otimizada (Min-Heap)',
          explanation: 'A palavra-chave "K-ésimo maior" é um forte sinal para um heap. Podemos manter um min-heap de tamanho `k`. Iteramos pelo array: se o heap tiver menos de `k` elementos, adicionamos o elemento atual. Se o heap estiver cheio e o elemento atual for maior que o menor elemento no heap (a raiz), retiramos a raiz e inserimos o elemento atual. Após a iteração, a raiz do heap é o K-ésimo maior elemento. Isso resulta em uma complexidade de tempo de O(n log k), que é muito melhor do que ordenar o array inteiro (O(n log n)).',
          code: `import heapq

def findKthLargest(nums, k):
    # Inicializa um min-heap vazio.
    # O heapq do Python é um min-heap por padrão.
    heap = []
    
    # Itera por cada número no array.
    for num in nums:
        # Insere o número atual no heap.
        heapq.heappush(heap, num)
        
        # Se o tamanho do heap exceder k, significa que temos mais de k elementos.
        # O menor deles no heap não é necessário.
        if len(heap) > k:
            # Remove o menor elemento (a raiz do min-heap).
            heapq.heappop(heap)
            
    # Após o loop, o heap contém os k maiores elementos,
    # com o K-ésimo maior na raiz (pois é o menor entre os top k).
    return heap[0]`
        },
        {
          title: 'Solução Força Bruta (Ordenação)',
          explanation: 'A maneira mais simples de resolver isso com força bruta é ordenar o array inteiro e então pegar o elemento no índice correto. Isso é fácil de escrever, mas menos eficiente. A complexidade de tempo é dominada pela ordenação, que é O(n log n). Para `n` muito grande e `k` pequeno, a solução com heap é significativamente mais rápida.',
          code: `def findKthLargest_bruteforce(nums, k):
    # Ordena o array em ordem ascendente. Isso leva tempo O(n log n).
    nums.sort()
    
    # O K-ésimo maior elemento estará no índice len(nums) - k.
    # Por exemplo, em [1,2,3,4,5,6] e k=2, o 2º maior é 5.
    # len=6, k=2. Índice é 6-2=4. nums[4] é 5.
    return nums[len(nums) - k]`
        }
      ]
    },
    {
      problem: 'Dado um array de inteiros `nums` e um inteiro `target`, retorne os índices dos dois números que somam `target`.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0, 1]',
      solutions: [
        {
          title: 'Solução Otimizada (Hash Map)',
          explanation: 'Esta é uma leve variação. Enquanto "Dois Ponteiros" funciona para um array ordenado, a solução mais comum e otimizada para um array não ordenado é usar um Hash Map (Dicionário em Python). Iteramos pelo array uma vez. Para cada elemento, calculamos o `complemento` necessário (`target - numero_atual`). Em seguida, verificamos se esse `complemento` já está em nosso mapa. Se estiver, encontramos nosso par. Se não, adicionamos o número atual e seu índice ao mapa. Isso alcança uma complexidade de tempo de O(n) com espaço de O(n).',
          code: `def twoSum(nums, target):
    # Cria um hash map para armazenar pares de número -> índice.
    prevMap = {} # val -> index

    # Itera pelo array com índice e valor.
    for i, n in enumerate(nums):
        # Calcula o complemento necessário para alcançar o alvo.
        diff = target - n
        # Verifica se o complemento existe em nosso mapa.
        if diff in prevMap:
            # Se existir, encontramos nosso par. Retorna o índice armazenado e o índice atual.
            return [prevMap[diff], i]
        # Se o complemento não for encontrado, adiciona o número atual e seu índice ao mapa
        # para futuras verificações.
        prevMap[n] = i
    # Retorna nada se nenhuma solução for encontrada (embora o problema garanta uma).
    return`
        },
        {
          title: 'Solução Força Bruta (Loops Aninhados)',
          explanation: 'A abordagem de força bruta é verificar cada par possível de números no array. Podemos fazer isso com dois loops aninhados. O loop externo escolhe um elemento, e o interno verifica todos os elementos subsequentes para ver se a soma deles é igual ao alvo. Isso é simples de entender, mas ineficiente, com uma complexidade de tempo de O(n²), que será muito lenta para arrays de entrada grandes.',
          code: `def twoSum_bruteforce(nums):
    # Obtém o número total de elementos.
    n = len(nums)
    # O loop externo itera do primeiro ao penúltimo elemento.
    for i in range(n):
        # O loop interno itera do elemento após i até o último.
        for j in range(i + 1, n):
            # Verifica se o par soma o alvo.
            if nums[i] + nums[j] == target:
                # Se sim, retorna seus índices.
                return [i, j]
    return [] # Não deve ser alcançado com base na descrição do problema
`
        }
      ]
    },
    {
      problem: 'Dada uma string `s` contendo apenas os caracteres `(`, `)`, `{`, `}`, `[` e `]`, determine se a string de entrada é válida. Uma string de entrada é válida se os colchetes abertos forem fechados pelo mesmo tipo de colchetes e na ordem correta.',
      solution: 'dfs',
      difficulty: 'Fácil',
      input: 's = "()[]{}"',
      output: 'true',
      solutions: [
        {
          title: 'Solução Otimizada (Pilha)',
          explanation: 'Este é um problema clássico para a estrutura de dados Pilha. Uma pilha segue o princípio Último a Entrar, Primeiro a Sair (LIFO), que combina perfeitamente com como os colchetes devem ser fechados. Quando vemos um colchete de abertura, o empurramos para a pilha. Quando vemos um colchete de fechamento, verificamos se a pilha está vazia ou se o topo da pilha é o colchete de abertura correspondente. Se for, desempilhamos. Se não, a string é inválida. Uma string válida resultará em uma pilha vazia no final.',
          code: `def isValid(s):
    # Uma pilha para rastrear os colchetes de abertura.
    stack = []
    # Um hash map para encontrar facilmente o colchete de abertura correspondente a um de fechamento.
    closeToOpen = {")": "(", "]": "[", "}": "{"}

    # Itera por cada caractere na string.
    for c in s:
        # Se o caractere for um colchete de fechamento.
        if c in closeToOpen:
            # Verifica se a pilha não está vazia E se o elemento do topo é o colchete de abertura correspondente.
            if stack and stack[-1] == closeToOpen[c]:
                # Se sim, temos um par válido, desempilha.
                stack.pop()
            else:
                # Caso contrário, os colchetes não estão combinados corretamente.
                return False
        # Se o caractere for um colchete de abertura.
        else:
            # Empurra para a pilha.
            stack.append(c)

    # Após o loop, se a pilha estiver vazia, todos os colchetes foram combinados.
    # Caso contrário, há colchetes de abertura não fechados.
    return True if not stack else False`
        }
      ]
    },
    {
      problem: 'Dada uma string `s`, determine se ela é um palíndromo, considerando apenas caracteres alfanuméricos e ignorando o caso.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      solutions: [
        {
          title: 'Solução Otimizada (Dois Ponteiros)',
          explanation: 'A técnica de Dois Ponteiros é perfeita para isso. Colocamos um ponteiro no início (esquerda) e um no final (direita) da string. Movemo-los em direção ao centro, pulando quaisquer caracteres não alfanuméricos. A cada passo, comparamos os caracteres (após converter para minúsculas). Se eles não corresponderem em algum momento, não é um palíndromo. Se os ponteiros se cruzarem, significa que todos os caracteres foram combinados com sucesso.',
          code: `def isPalindrome(s):
    # Inicializa os ponteiros esquerdo e direito.
    l, r = 0, len(s) - 1

    # Faz o loop até que os ponteiros se encontrem ou se cruzem.
    while l < r:
        # Move o ponteiro esquerdo para frente se não for um caractere alfanumérico.
        while l < r and not s[l].isalnum():
            l += 1
        # Move o ponteiro direito para trás se não for um caractere alfanumérico.
        while r > l and not s[r].isalnum():
            r -= 1
        
        # Compara os caracteres (sem diferenciar maiúsculas de minúsculas).
        if s[l].lower() != s[r].lower():
            # Se não corresponderem, não é um palíndromo.
            return False
        
        # Move os ponteiros para dentro para a próxima comparação.
        l += 1
        r -= 1
        
    # Se o loop terminar, a string é um palíndromo.
    return True`
        },
        {
          title: 'Solução Força Bruta (Construir e Reverter)',
          explanation: 'Uma abordagem mais simples é primeiro construir uma nova string contendo apenas os caracteres alfanuméricos da string original, convertidos para minúsculas. Então, você pode simplesmente comparar esta nova string com sua reversa. Embora fácil de escrever, esta solução requer espaço extra O(n) para criar a nova string e sua cópia invertida.',
          code: `def isPalindrome_bruteforce(s):
    # Cria uma nova string apenas com caracteres alfanuméricos.
    new_string = ""
    for char in s:
        if char.isalnum():
            new_string += char.lower()
    
    # Compara a nova string com sua reversa.
    return new_string == new_string[::-1]`
        }
      ]
    },
    {
      problem: 'Dadas duas árvores binárias, `p` e `q`, escreva uma função para verificar se elas são iguais. Duas árvores binárias são consideradas iguais se forem estruturalmente idênticas e os nós tiverem o mesmo valor.',
      solution: 'dfs',
      difficulty: 'Fácil',
      input: 'Duas árvores binárias idênticas',
      output: 'true',
      solutions: [
        {
          title: 'Solução Otimizada (DFS Recursiva)',
          explanation: 'Este problema é um ajuste natural para uma Busca em Profundidade (DFS) recursiva. Definimos uma função que compara dois nós. Os casos base são a chave: 1) Se ambos os nós forem nulos, eles são iguais. 2) Se um for nulo, mas o outro não, ou se seus valores diferirem, eles não são iguais. 3) Se passarem nessas verificações, chamamos recursivamente a função em seus filhos à esquerda e à direita. Ambas as chamadas recursivas devem retornar verdadeiro para que as árvores sejam idênticas.',
          code: `# Definição para um nó de árvore binária.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def isSameTree(p, q):
    # Se ambos os nós são nulos, eles são idênticos nesta posição.
    if not p and not q:
        return True
    # Se um é nulo mas o outro não, ou seus valores são diferentes, eles não são idênticos.
    if not p or not q or p.val != q.val:
        return False
        
    # Verifica recursivamente as subárvores à esquerda E as subárvores à direita.
    # Ambos devem ser verdadeiros para que a árvore inteira seja a mesma.
    return (isSameTree(p.left, q.left) and
            isSameTree(p.right, q.right))`
        }
      ]
    },
    {
      problem: 'Dada a `raiz` de uma árvore binária, retorne a travessia em ordem de nível de seus nós\' valores. (ou seja, da esquerda para a direita, nível por nível).',
      solution: 'bfs',
      difficulty: 'Médio',
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[9,20],[15,7]]',
      solutions: [
        {
          title: 'Solução Otimizada (BFS com Fila)',
          explanation: 'A frase "nível por nível" é uma grande dica para usar a Busca em Largura (BFS). BFS naturalmente explora uma árvore camada por camada. Usamos uma fila para rastrear os nós a serem visitados. Em cada iteração do nosso loop principal, processamos todos os nós atualmente na fila (o que constitui um nível completo). Adicionamos seus valores a uma lista temporária para aquele nível e adicionamos seus filhos à fila para a próxima iteração. Isso continua até que a fila esteja vazia.',
          code: `from collections import deque

# Definição para um nó de árvore binária.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def levelOrder(root):
    # A lista final de níveis.
    res = []
    # Uma fila para conter os nós para BFS, inicializada com a raiz.
    q = deque([root] if root else [])

    # Faz o loop enquanto houver nós a serem processados.
    while q:
        # Uma lista para armazenar os valores dos nós para o nível atual.
        level = []
        # Processa todos os nós do nível atual.
        # O número de nós é o comprimento da fila no início do loop.
        for i in range(len(q)):
            # Retira um nó da frente da fila.
            node = q.popleft()
            # Adiciona seu valor à lista de nível.
            level.append(node.val)
            # Adiciona seus filhos à fila para o próximo nível, se eles existirem.
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        
        # Se o nível tiver nós, adiciona-o à lista de resultados.
        if level:
            res.append(level)
            
    return res`
        }
      ]
    },
    {
      problem: 'Dado um array `nums` de `n` inteiros, encontre todos os trios únicos no array que somam zero.',
      solution: 'two-pointers',
      difficulty: 'Médio',
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      solutions: [
        {
          title: 'Solução Otimizada (Ordenar + Dois Ponteiros)',
          explanation: 'Para evitar a complexidade O(n³) de um loop triplo de força bruta, primeiro ordenamos o array (O(n log n)). Em seguida, iteramos pelo array com um único loop, fixando um número `a`. Para o resto do array, usamos a técnica de Dois Ponteiros para encontrar um par `b` e `c` que some `-a`. Os ponteiros esquerdo e direito se movem um em direção ao outro para encontrar a soma alvo. Também devemos adicionar lógica para pular números duplicados para garantir que os trios sejam únicos.',
          code: `def threeSum(nums):
    res = []
    # Ordenar é a chave para usar a abordagem de dois ponteiros e lidar com duplicatas.
    nums.sort()

    # Itera pelo array, fixando o primeiro elemento 'a'.
    for i, a in enumerate(nums):
        # Pula inteiros positivos para 'a', já que a soma não pode ser zero.
        if a > 0:
            break
        # Pula valores duplicados para 'a'.
        if i > 0 and a == nums[i-1]:
            continue
            
        # Usa dois ponteiros para o resto do array.
        l, r = i + 1, len(nums) - 1
        while l < r:
            threeSum = a + nums[l] + nums[r]
            # Se a soma for muito grande, move o ponteiro direito para a esquerda.
            if threeSum > 0:
                r -= 1
            # Se a soma for muito pequena, move o ponteiro esquerdo para a direita.
            elif threeSum < 0:
                l += 1
            # Se encontrarmos um trio.
            else:
                res.append([a, nums[l], nums[r]])
                # Move o ponteiro esquerdo e pula suas duplicatas.
                l += 1
                r -= 1
                while l < r and nums[l] == nums[l-1]:
                    l += 1
    return res`
        }
      ]
    },
    {
      problem: 'Dado um array de `n` números distintos `nums` contendo números no intervalo `[0, n]`, retorne o único número no intervalo que está faltando no array.',
      solution: 'two-pointers', // Example of using math/summation, often grouped with array tricks.
      difficulty: 'Fácil',
      input: 'nums = [3,0,1]',
      output: '2',
      solutions: [
        {
          title: 'Solução Otimizada (Fórmula de Soma)',
          explanation: 'Este problema pode ser resolvido eficientemente usando matemática. A soma dos números de 0 a n pode ser calculada com a fórmula n * (n + 1) / 2. Podemos calcular essa soma esperada. Em seguida, calculamos a soma real dos números no array de entrada. A diferença entre a soma esperada e a soma real é precisamente o número que falta. Esta abordagem tem uma complexidade de tempo de O(n) para somar o array e uma complexidade de espaço de O(1).',
          code: `def missingNumber(nums):
    # O comprimento do array é 'n' porque um número está faltando.
    n = len(nums)
    # Calcula a soma esperada dos números de 0 a n.
    expected_sum = n * (n + 1) // 2
    # Calcula a soma real dos elementos no array.
    actual_sum = sum(nums)
    # A diferença é o número que falta.
    return expected_sum - actual_sum`
        },
        {
          title: 'Solução Baseada em Conjunto',
          explanation: 'Outra abordagem comum é usar um hash set. Primeiro, criamos um conjunto de todos os números de 0 a n. Em seguida, iteramos pelo array de entrada `nums` e removemos cada número do nosso conjunto. O único número que resta no conjunto no final é o número que falta. Esta abordagem também tem tempo O(n), mas requer espaço O(n) para o conjunto, tornando-a menos eficiente em espaço do que o método da soma.',
          code: `def missingNumber_set(nums):
    # Cria um conjunto de todos os números esperados de 0 a n.
    num_set = set(range(len(nums) + 1))
    
    # Remove cada número do array de entrada do conjunto.
    for num in nums:
        num_set.remove(num)
        
    # O único número restante no conjunto é o que falta.
    return num_set.pop()`
        }
      ]
    },
    {
      problem: 'Dado um inteiro `n`, retorne um array `ans` de comprimento `n + 1` tal que para cada `i` (0 <= i <= n), `ans[i]` seja o número de `1`s na representação binária de `i`.',
      solution: 'dynamic-programming',
      difficulty: 'Médio',
      input: 'n = 5',
      output: '[0,1,1,2,1,2]',
      solutions: [
        {
          title: 'Solução Otimizada (Programação Dinâmica)',
          explanation: 'Este problema tem uma solução de PD inteligente. Note o padrão: o número de 1s em `i` está relacionado ao número de 1s em um número menor. Especificamente, `contagem(i) = contagem(i / 2) + (i % 2)`. Podemos construir nosso array de resposta iterativamente. Para cada número `i`, `dp[i]` é a contagem de 1s. Podemos calcular isso olhando para `dp[i >> 1]` (que é `i` deslocado para a direita por um, equivalente a `i // 2`) e adicionando 1 se `i` for ímpar. Isso constrói a solução em tempo O(n).',
          code: `def countBits(n):
    # Inicializa um array DP (ou lista) de tamanho n+1 com zeros.
    dp = [0] * (n + 1)
    # offset rastreará a potência de 2 mais recente.
    offset = 1

    # Itera de 1 a n.
    for i in range(1, n + 1):
        # Se i for uma nova potência de 2, atualiza o offset.
        if offset * 2 == i:
            offset = i
        # O número de 1s em i é 1 + o número de 1s em (i - offset).
        # Exemplo: contagem(9) = 1 + contagem(9-8) = 1 + contagem(1) = 1 + 1 = 2.
        dp[i] = 1 + dp[i - offset]
    
    return dp`
        },
        {
          title: 'Solução Força Bruta',
          explanation: 'A maneira direta de força bruta é iterar de 0 a `n`. Para cada número `i`, podemos convertê-lo para sua representação binária e contar manualmente o número de \'1\'s. Embora funcione, converter para binário e contar pode ser menos eficiente do que a abordagem de PD, que reutiliza resultados anteriores de forma inteligente.',
          code: `def countBits_bruteforce(n):
    ans = []
    for i in range(n + 1):
        count = 0
        num_str = bin(i) # Obtém uma string binária como '0b101'
        for char in num_str:
            if char == '1':
                count += 1
        ans.append(count)
    return ans`
        }
      ]
    },
    {
      problem: 'Dada a cabeça de uma lista encadeada, inverta a lista e retorne a lista invertida.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'head = [1,2,3,4,5]',
      output: '[5,4,3,2,1]',
      solutions: [
        {
          title: 'Solução Otimizada (Iterativa com Dois Ponteiros)',
          explanation: 'A solução iterativa clássica usa dois ponteiros: `prev` e `curr`. `prev` é inicializado como nulo, e `curr` começa na cabeça. Iteramos pela lista e, para cada nó, fazemos três coisas: 1) Salvamos o próximo nó (`curr.next`). 2) Invertemos o ponteiro do nó atual para apontar para `prev`. 3) Movemos `prev` e `curr` um passo à frente. No final, `prev` será a nova cabeça da lista invertida. Isso é feito em tempo O(n) e espaço O(1).',
          code: `# Definição para lista simplesmente encadeada.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def reverseList(head):
    # Inicializa dois ponteiros.
    # prev começa como None, pois será a nova cauda.
    # curr começa na cabeça da lista original.
    prev, curr = None, head

    # Itera enquanto ainda houver nós para processar.
    while curr:
        # Armazena o próximo nó em uma variável temporária antes de sobrescrevermos curr.next.
        nxt = curr.next
        # Este é o passo de inversão: faz o nó atual apontar para trás, para prev.
        curr.next = prev
        # Move nossos ponteiros um passo à frente para a próxima iteração.
        prev = curr
        curr = nxt
    
    # Quando o loop termina, curr é None e prev é a nova cabeça.
    return prev`
        }
      ]
    },
    {
      problem: 'Projete uma classe para encontrar o `k`-ésimo maior elemento em um fluxo de números. Note que é o `k`-ésimo maior elemento na ordem ordenada, não o `k`-ésimo elemento distinto.',
      solution: 'heap',
      difficulty: 'Fácil',
      input: 'KthLargest(3, [4, 5, 8, 2]); add(3); add(5); add(10);',
      output: '4, 5, 5, 8',
      solutions: [
        {
          title: 'Solução Otimizada (Min-Heap)',
          explanation: 'Este problema foi projetado para um Min-Heap. A ideia central é sempre manter um min-heap de tamanho `k`. Quando inicializamos a classe, construímos este heap. Quando um novo elemento é adicionado, o empurramos para o heap. Se o tamanho do heap exceder `k`, retiramos o menor elemento. Isso garante que o heap sempre contenha os `k` maiores elementos do fluxo. O `k`-ésimo maior está, portanto, sempre na raiz do min-heap, que podemos acessar em tempo O(1). Adicionar um elemento é O(log k).',
          code: `import heapq

class KthLargest:
    def __init__(self, k, nums):
        # Armazena k e o min-heap.
        self.k = k
        self.minHeap = nums
        # Converte a lista inicial em um heap in-place.
        heapq.heapify(self.minHeap)
        # Continua retirando do heap até que ele tenha o tamanho k.
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    def add(self, val):
        # Adiciona o novo valor ao heap.
        heapq.heappush(self.minHeap, val)
        # Se o heap agora for maior que k, remove o menor elemento.
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        # A raiz do min-heap é o k-ésimo maior elemento.
        return self.minHeap[0]`
        }
      ]
    },
    {
      problem: 'Dado um array de strings `strs`, agrupe os anagramas. Você pode retornar a resposta em qualquer ordem.',
      solution: 'two-pointers', // A classic hash map problem, often categorized with array/string manipulation.
      difficulty: 'Médio',
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      solutions: [
        {
          title: 'Solução Otimizada (Hash Map com Chave Ordenada)',
          explanation: 'A sacada principal é que todos os anagramas se tornam a mesma palavra quando suas letras são ordenadas. Podemos usar essa versão ordenada como chave em um hash map. Iteramos pelo array de entrada. Para cada string, criamos sua versão ordenada e a usamos como chave. Em seguida, anexamos a string original à lista de valores para essa chave. Após iterar por todas as strings, os valores do hash map serão os anagramas agrupados. A complexidade de tempo é O(m * n log n), onde m é o número de strings e n é o comprimento da string mais longa.',
          code: `from collections import defaultdict

def groupAnagrams(strs):
    # Um defaultdict nos permite anexar a uma lista para uma nova chave sem verificar se ela existe.
    ans = defaultdict(list)

    # Itera por cada string na lista de entrada.
    for s in strs:
        # Ordena os caracteres da string e os junta para criar uma chave.
        # ex: "eat" -> ('a', 'e', 't')
        sorted_s = tuple(sorted(s))
        # Anexa a string original à lista associada a esta chave ordenada.
        ans[sorted_s].append(s)
    
    # Os valores do dicionário são os anagramas agrupados.
    return list(ans.values())`
        }
      ]
    },
    {
      problem: 'Dada uma matriz binária `m x n` preenchida com 0s e 1s, encontre o maior quadrado contendo apenas 1s e retorne sua área.',
      solution: 'dynamic-programming',
      difficulty: 'Médio',
      input: 'matrix = [["1","0","1","0"],["1","1","1","1"],["1","1","1","1"],["1","0","0","1"]]',
      output: '4',
      solutions: [
        {
          title: 'Solução Otimizada (Programação Dinâmica)',
          explanation: 'Este problema pode ser resolvido eficientemente com PD. Criamos uma tabela de PD (ou reutilizamos a matriz de entrada) do mesmo tamanho. `dp[i][j]` armazenará o comprimento do lado do maior quadrado de 1s cujo canto inferior direito está em `matrix[i][j]`. A relação de recorrência é: se `matrix[i][j]` for \'1\', então `dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])`. Isso significa que um quadrado de lado `s` só pode ser formado se as células à sua esquerda, topo e topo-esquerda também suportarem um quadrado de lado `s-1`. Mantemos o controle do comprimento máximo do lado encontrado e retornamos sua área.',
          code: `def maximalSquare(matrix):
    # Obtém as dimensões.
    ROWS, COLS = len(matrix), len(matrix[0])
    # Cria uma tabela de PD com um preenchimento de zeros para facilitar os cálculos.
    dp = [[0] * (COLS + 1) for _ in range(ROWS + 1)]
    max_side = 0

    # Itera pela matriz.
    for r in range(ROWS):
        for c in range(COLS):
            # Só nos importamos se a célula original for um '1'.
            if matrix[r][c] == "1":
                # O valor na tabela de PD é 1 + o mínimo de seus vizinhos de topo, esquerda e topo-esquerda.
                dp[r + 1][c + 1] = 1 + min(dp[r][c + 1],      # Topo
                                           dp[r + 1][c],      # Esquerda
                                           dp[r][c])          # Topo-esquerda
                # Mantém o controle do comprimento máximo do lado encontrado até agora.
                max_side = max(max_side, dp[r + 1][c + 1])
    
    # O resultado é a área do maior quadrado.
    return max_side * max_side`
        }
      ]
    },
    {
      problem: 'Dado `n` inteiros não negativos representando um mapa de elevação onde a largura de cada barra é 1, calcule quanta água pode ser retida após a chuva.',
      solution: 'two-pointers',
      difficulty: 'Difícil',
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      solutions: [
        {
          title: 'Solução Otimizada (Dois Ponteiros)',
          explanation: 'Este é um problema difícil clássico que tem uma solução elegante de tempo O(n) e espaço O(1) usando Dois Ponteiros. Usamos um ponteiro esquerdo e um direito, começando nas extremidades do array, e variáveis `left_max` e `right_max` para rastrear a altura máxima vista de cada lado. A quantidade de água retida em qualquer posição é determinada pela parede mais curta dos dois máximos (`min(left_max, right_max)`). Movemos o ponteiro correspondente à parede mais curta para dentro. Se `height[l] < height[r]`, sabemos que `left_max` é o fator limitante. Podemos calcular a água retida em `l` como `left_max - height[l]` e mover `l` para a direita. Fazemos o oposto se `right_max` for o limitador.',
          code: `def trap(height):
    # Não há barras suficientes para reter água.
    if not height: return 0

    # Inicializa os ponteiros em ambas as extremidades.
    l, r = 0, len(height) - 1
    # Rastreia a altura máxima vista da esquerda e da direita.
    leftMax, rightMax = height[l], height[r]
    # Água total retida.
    res = 0

    # Faz o loop até que os ponteiros se encontrem.
    while l < r:
        # Move o ponteiro da parede mais curta.
        if leftMax < rightMax:
            # Move o ponteiro esquerdo.
            l += 1
            # Atualiza a altura máxima esquerda.
            leftMax = max(leftMax, height[l])
            # A água retida nesta posição é a diferença
            # entre a parede mais curta (leftMax) e a altura da barra atual.
            res += leftMax - height[l]
        else:
            # Move o ponteiro direito.
            r -= 1
            # Atualiza a altura máxima direita.
            rightMax = max(rightMax, height[r])
            # Água retida é a diferença entre a parede mais curta (rightMax) e a barra atual.
            res += rightMax - height[r]
    return res`
        }
      ]
    },
    {
      problem: 'Mesclar duas listas encadeadas ordenadas e retorná-la como uma nova lista ordenada. A nova lista deve ser feita pela junção dos nós das duas primeiras listas.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      solutions: [
        {
          title: 'Solução Otimizada (Iterativa com Nó Dummy)',
          explanation: 'Este é um problema clássico de manipulação de listas. Podemos resolvê-lo iterativamente usando um nó dummy, que simplifica o código fornecendo um ponto de partida fixo para nossa nova lista. Usamos um ponteiro `tail` para construir a nova lista. Comparamos os nós de `list1` e `list2`. O menor é anexado a `tail`, e avançamos o ponteiro daquela lista. Continuamos até que uma lista se esgote, então simplesmente anexamos o restante da outra lista. O resultado final é `dummy.next`.',
          code: `# Definição para lista simplesmente encadeada.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeTwoLists(list1, list2):
    # Um nó dummy para atuar como uma cabeça de espaço reservado para a nova lista.
    dummy = ListNode()
    # 'tail' será nosso ponteiro para construir a nova lista.
    tail = dummy

    # Faz o loop enquanto ambas as listas tiverem nós.
    while list1 and list2:
        # Compara os valores dos nós.
        if list1.val < list2.val:
            # Se o nó de list1 for menor, anexa-o à cauda.
            tail.next = list1
            # Move o ponteiro de list1 para frente.
            list1 = list1.next
        else:
            # Caso contrário, anexa o nó de list2.
            tail.next = list2
            # Move o ponteiro de list2 para frente.
            list2 = list2.next
        # Sempre move o ponteiro da cauda para o nó recém-adicionado.
        tail = tail.next

    # Após o loop, uma das listas pode ainda ter nós.
    # Anexa a parte restante da lista que não estiver vazia.
    if list1:
        tail.next = list1
    elif list2:
        tail.next = list2
    
    # A lista mesclada começa no nó após nossa cabeça dummy.
    return dummy.next
`
        }
      ]
    },
    {
      problem: 'Dado um array de inteiros `nums`, mova todos os `0`s para o final, mantendo a ordem relativa dos elementos não-zero.',
      solution: 'two-pointers',
      difficulty: 'Fácil',
      input: 'nums = [0,1,0,3,12]',
      output: '[1,3,12,0,0]',
      solutions: [
        {
          title: 'Solução Otimizada (Dois Ponteiros)',
          explanation: 'Este problema pode ser resolvido in-place com tempo O(n) e espaço O(1) usando a abordagem de Dois Ponteiros. Usamos um ponteiro (`lastNonZeroFoundAt`) para rastrear a posição onde o próximo elemento não-zero deve ser colocado. Iteramos pelo array com outro ponteiro (`i`). Quando encontramos um elemento não-zero, o trocamos com o elemento na posição `lastNonZeroFoundAt` e então incrementamos `lastNonZeroFoundAt`. Isso segrega eficientemente os elementos não-zero para a frente, mantendo sua ordem.',
          code: `def moveZeroes(nums):
    # Este ponteiro marcará a posição para o próximo elemento não-zero.
    lastNonZeroFoundAt = 0
    
    # Itera pelo array com um ponteiro 'curr'.
    for curr in range(len(nums)):
        # Se o elemento atual não for zero...
        if nums[curr] != 0:
            # ...troca-o com o elemento na posição 'lastNonZeroFoundAt'.
            nums[lastNonZeroFoundAt], nums[curr] = nums[curr], nums[lastNonZeroFoundAt]
            # Incrementa a posição para o próximo elemento não-zero.
            lastNonZeroFoundAt += 1
`
        }
      ]
    },
    {
      problem: 'Você recebe uma string `s` e um inteiro `k`. Você pode escolher qualquer caractere da string e mudá-lo para qualquer outra letra maiúscula inglesa. Você pode realizar esta operação no máximo `k` vezes. Retorne o comprimento da maior substring contendo a mesma letra que você pode obter após realizar as operações acima.',
      solution: 'sliding-window',
      difficulty: 'Médio',
      input: 's = "ABAB", k = 2',
      output: '4',
      solutions: [
        {
          title: 'Solução Otimizada (Janela Deslizante)',
          explanation: 'Este é um problema desafiador, mas clássico, de Janela Deslizante. Usamos uma janela definida por ponteiros `left` e `right` e um mapa de frequência para contar caracteres dentro dessa janela. A condição chave é `(comprimento_janela - contagem_caractere_mais_frequente) <= k`. Isso verifica se o número de caracteres que precisamos substituir para tornar a janela inteira uniforme está dentro do nosso orçamento `k`. Se a condição for violada, encolhemos a janela pela esquerda. Caso contrário, a expandimos e atualizamos nosso comprimento máximo.',
          code: `def characterReplacement(s, k):
    # Um dicionário para armazenar a frequência dos caracteres na janela atual.
    count = {}
    # Variável para armazenar o comprimento máximo encontrado.
    res = 0
    # Ponteiro esquerdo da janela.
    l = 0
    # Rastreia a frequência do caractere mais comum na janela.
    maxf = 0

    # Itera pela string com o ponteiro direito.
    for r in range(len(s)):
        # Incrementa a contagem para o caractere no ponteiro direito.
        count[s[r]] = 1 + count.get(s[r], 0)
        # Atualiza a frequência máxima vista até agora na janela.
        maxf = max(maxf, count[s[r]])

        # A condição central: verifica se a janela é inválida.
        # O número de substituições necessárias é o comprimento da janela - frequência máxima.
        if (r - l + 1) - maxf > k:
            # Se inválida, encolhe a janela pela esquerda.
            # Decrementa a contagem do caractere no ponteiro esquerdo.
            count[s[l]] -= 1
            # Desliza o ponteiro esquerdo para a direita.
            l += 1
        
        # Atualiza o resultado com o comprimento máximo de uma janela válida.
        res = max(res, r - l + 1)
    return res`
        }
      ]
    },
    {
      problem: 'Dado um array de inteiros `nums`, encontre o subarray com a maior soma e retorne sua soma.',
      solution: 'dynamic-programming',
      difficulty: 'Médio',
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6 (do subarray [4,-1,2,1])',
      solutions: [
        {
          title: 'Solução Otimizada (Algoritmo de Kadane)',
          explanation: 'Este é um problema clássico resolvido pelo Algoritmo de Kadane, que é uma forma de programação dinâmica. Iteramos pelo array, mantendo o controle da `soma_atual` do subarray que termina na posição atual. Para cada elemento, temos duas escolhas: ou estender o subarray anterior adicionando o elemento atual, ou começar um novo subarray apenas com o elemento atual. Escolhemos o que for maior. Também mantemos um `max_global` para armazenar a soma máxima encontrada em qualquer ponto.',
          code: `def maxSubArray(nums):
    # Inicializa a soma máxima global com o primeiro elemento.
    maxSum = nums[0]
    # Inicializa a soma atual.
    curSum = 0

    # Itera através de cada número no array.
    for n in nums:
        # Se a soma atual se tornar negativa, é melhor começar um novo subarray.
        # Um prefixo negativo nunca ajudará a maximizar a soma.
        if curSum < 0:
            curSum = 0
        # Adiciona o número atual à soma atual.
        curSum += n
        # Atualiza a soma máxima global se a soma atual for maior.
        maxSum = max(maxSum, curSum)
    return maxSum`
        }
      ]
    },
    {
      problem: 'Dada uma `grade` `m x n` de caracteres `board` e uma string `word`, retorne `true` se `word` existir na grade. A palavra pode ser construída a partir de letras de células sequencialmente adjacentes, onde células adjacentes são vizinhas horizontal ou verticalmente. A mesma célula de letra não pode ser usada mais de uma vez.',
      solution: 'backtracking',
      difficulty: 'Médio',
      input: 'board = [["A","B","C"],["S","F","E"],["A","D","E"]], word = "SEE"',
      output: 'true',
      solutions: [
        {
          title: 'Solução Otimizada (Backtracking/DFS)',
          explanation: 'Este é um problema perfeito para Backtracking. Podemos pensar nele como um DFS na grade. Iteramos por cada célula para encontrar um ponto de partida potencial. Uma vez que encontramos uma correspondência para a primeira letra da palavra, iniciamos uma função DFS recursiva. Essa função verifica as quatro células adjacentes para a próxima letra. Para evitar reutilizar células, marcamos a célula atual como visitada (por exemplo, mudando seu valor temporariamente) antes das chamadas recursivas e depois a "desmarcamos" (este é o passo de "backtracking").',
          code: `def exist(board, word):
    # Obtém as dimensões da grade.
    ROWS, COLS = len(board), len(board[0])
    # Um conjunto para rastrear as células visitadas no caminho atual.
    path = set()

    # A função de backtracking recursiva.
    def dfs(r, c, i):
        # Caso base: Se encontramos todos os caracteres da palavra.
        if i == len(word):
            return True
        # Caso base: Se estamos fora dos limites, ou a célula não corresponde ao
        # caractere que estamos procurando, ou já visitamos esta célula.
        if (r < 0 or c < 0 or r >= ROWS or c >= COLS or
            word[i] != board[r][c] or (r, c) in path):
            return False

        # Marca a célula como visitada para o caminho atual.
        path.add((r, c))

        # Explora os vizinhos recursivamente.
        res = (dfs(r + 1, c, i + 1) or
               dfs(r - 1, c, i + 1) or
               dfs(r, c + 1, i + 1) or
               dfs(r, c - 1, i + 1))
        
        # Backtrack: Desmarca a célula para que possa ser usada em outros caminhos.
        path.remove((r, c))
        return res

    # Itera por cada célula para encontrar um ponto de partida potencial.
    for r in range(ROWS):
        for c in range(COLS):
            if dfs(r, c, 0):
                return True
    return False`
        }
      ]
    },
    {
      problem: 'Dado um array de `intervals` onde `intervals[i] = [start_i, end_i]`, mescle todos os intervalos sobrepostos e retorne um array dos intervalos não sobrepostos que cobrem todos os intervalos na entrada.',
      solution: 'two-pointers',
      difficulty: 'Médio',
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      solutions: [
        {
          title: 'Solução Otimizada (Ordenar + Mesclar)',
          explanation: 'A chave para este problema é ordenar os intervalos com base em seus tempos de início. Isso leva tempo O(n log n). Uma vez ordenado, podemos iterar pelos intervalos e mesclá-los em uma única passagem (O(n)). Inicializamos nosso resultado com o primeiro intervalo. Então, para cada intervalo subsequente, comparamos seu tempo de início com o tempo de término do último intervalo em nosso resultado. Se eles se sobrepõem, nós os mesclamos atualizando o tempo de término do último intervalo. Se não, simplesmente adicionamos o novo intervalo ao nosso resultado.',
          code: `def merge(intervals):
    # Ordena os intervalos com base em seu ponto de partida.
    intervals.sort(key=lambda i: i[0])
    
    # Inicializa a lista de saída com o primeiro intervalo.
    output = [intervals[0]]

    # Itera pelo resto dos intervalos.
    for start, end in intervals[1:]:
        # Obtém o ponto final do último intervalo na saída.
        lastEnd = output[-1][1]

        # Se o intervalo atual se sobrepõe com o último na saída...
        if start <= lastEnd:
            # ...mescla-os atualizando o ponto final do último intervalo
            # para ser o máximo dos dois pontos finais.
            output[-1][1] = max(lastEnd, end)
        else:
            # Se não houver sobreposição, apenas adiciona o novo intervalo à saída.
            output.append([start, end])
    return output`
        }
      ]
    },
    {
      problem: 'Dado um inteiro `n`, retorne o número de strings de comprimento `n` que consistem apenas em vogais (`a, e, i, o, u`) e são lexicograficamente ordenadas. Uma string `s` é lexicograficamente ordenada se para todos os `i` válidos, `s[i]` é o mesmo ou vem antes de `s[i+1]` no alfabeto.',
      solution: 'dynamic-programming',
      difficulty: 'Médio',
      input: 'n = 2',
      output: '15 (Ex: "aa", "ae", "ai", "ao", "au", "ee", "ei", ...)',
      solutions: [
        {
          title: 'Solução Otimizada (Programação Dinâmica)',
          explanation: 'Este é um problema de contagem que pode ser resolvido com DP. Seja `dp[i][j]` o número de strings de comprimento `i` terminando com a `j`-ésima vogal (0-indexed). Uma string de comprimento `i` terminando com, por exemplo, a vogal \'e\' pode ser formada adicionando um \'e\' a qualquer string de comprimento `i-1` que termine em \'a\' ou \'e\'. A relação de recorrência é: `dp[i][j] = dp[i-1][0] + ... + dp[i-1][j]`. Podemos otimizar o espaço para O(1) mantendo apenas a contagem da linha anterior.',
          code: `def countVowelStrings(n):
    # dp[j] irá armazenar o número de strings de um certo comprimento
    # que terminam com a j-ésima vogal.
    # Inicialmente, para comprimento 1, há 1 string para cada vogal.
    dp = [1] * 5
    
    # Itera para cada comprimento de 2 até n.
    for i in range(2, n + 1):
        # Itera pelas vogais de trás para frente para construir a próxima linha da DP.
        # dp[j] = dp[j] (terminando com a mesma vogal) + dp[j-1] (terminando com a vogal anterior).
        for j in range(3, -1, -1):
            dp[j] = dp[j] + dp[j+1]
            
    # A resposta final é a soma de todas as possibilidades.
    return sum(dp)`
        }
      ]
    },
    {
      problem: 'Dada uma `string` que representa uma expressão, implemente uma calculadora básica para avaliá-la. A expressão pode conter parênteses de abertura `(`, parênteses de fechamento `)`, o sinal de mais `+`, o sinal de menos `-`, inteiros não negativos e espaços.',
      solution: 'dfs',
      difficulty: 'Difícil',
      input: 's = "(1+(4+5+2)-3)+(6+8)"',
      output: '23',
      solutions: [
        {
          title: 'Solução Otimizada (Pilha)',
          explanation: 'Este problema é resolvido de forma elegante com uma pilha. Percorremos a string e mantemos um `resultado` e um `sinal`. Quando encontramos um número, o adicionamos ao `resultado` com base no `sinal` atual. Quando encontramos um `(`, empurramos o `resultado` e o `sinal` atuais para a pilha e redefinimos para uma nova sub-expressão. Quando encontramos um `)`, retiramos o `sinal` e o `resultado` da pilha e combinamos com o resultado da sub-expressão. Isso lida corretamente com a precedência dos parênteses.',
          code: `def calculate(s):
    stack = []
    operand = 0
    res = 0  # Para o resultado acumulado
    sign = 1  # 1 para +, -1 para -

    for ch in s:
        if ch.isdigit():
            operand = (operand * 10) + int(ch)
        elif ch == '+':
            res += sign * operand
            sign = 1
            operand = 0
        elif ch == '-':
            res += sign * operand
            sign = -1
            operand = 0
        elif ch == '(':
            # Empurramos o resultado e o sinal para a pilha, e começamos de novo
            stack.append(res)
            stack.append(sign)
            # Redefine o sinal e o resultado para a nova sub-expressão
            sign = 1
            res = 0
        elif ch == ')':
            res += sign * operand
            # Fim da sub-expressão, multiplica pelo sinal que a precedeu
            res *= stack.pop()  # stack.pop() é o sinal antes do parêntese
            # Adiciona ao resultado anterior que estava fora do parêntese
            res += stack.pop()  # stack.pop() é o resultado antes do parêntese
            operand = 0
    return res + sign * operand`
        }
      ]
    },
    {
      problem: 'Você recebe um array de inteiros `nums` e um inteiro `k`. Há uma janela deslizante de tamanho `k` que está se movendo da extremidade esquerda do array para a extremidade direita. Você só pode ver os `k` números na janela. A cada vez que a janela deslizante se move para a direita por uma posição, retorne o máximo na janela deslizante.',
      solution: 'sliding-window',
      difficulty: 'Difícil',
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[3,3,5,5,6,7]',
      solutions: [
        {
          title: 'Solução Otimizada (Deque)',
          explanation: 'Uma solução de força bruta seria O(n*k). A solução ótima usa uma Deque (fila de duas pontas) para alcançar O(n). A deque armazenará os *índices* dos elementos da janela atual. Ela é mantida de forma que os índices correspondam a valores em ordem decrescente. O primeiro elemento da deque é sempre o índice do máximo da janela atual. Ao deslizar a janela, removemos da frente da deque os índices que estão fora da nova janela. Em seguida, removemos da parte de trás da deque todos os índices cujos valores são menores que o novo elemento que está entrando na janela, antes de adicionar o novo índice. Isso garante que o máximo esteja sempre na frente.',
          code: `from collections import deque

def maxSlidingWindow(nums, k):
    output = []
    q = deque()  # A deque armazena ÍNDICES
    l = r = 0

    while r < len(nums):
        # Remove da parte de trás os índices de elementos menores que o atual.
        while q and nums[q[-1]] < nums[r]:
            q.pop()
        q.append(r)

        # Remove o índice da esquerda se estiver fora da janela.
        if l > q[0]:
            q.popleft()

        # Adiciona à saída assim que a janela estiver cheia.
        if (r + 1) >= k:
            output.append(nums[q[0]])
            l += 1
        r += 1
    
    return output`
        }
      ]
    }
  ]
};

    