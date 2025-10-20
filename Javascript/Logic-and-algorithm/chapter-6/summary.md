# Capítulo 6: Vetores (Arrays)

## Conceito e Declaração
**Vetores** ou **Arrays** são estruturas que permitem armazenar uma **lista de dados** (um conjunto de valores) na memória principal do computador, acessíveis por um índice.

- **Variável Comum:** Armazena apenas um valor por vez, perdendo o valor anterior em nova atribuição.
- **Vetor:** Armazena um conjunto de dados e permite acessar cada um pelo seu **índice** (começando em 0).

**Exemplos de Declaração:**
const produtos = []
const produtos = new Array()
const produtos = ["Arroz", "Feijão", "Iogurte"]

> **Observação:** Vetores declarados com `const` podem ter o valor de seus elementos alterado, pois `const` protege a referência ao vetor, e não seu conteúdo interno.

## Inclusão e Exclusão de Itens

| Método | Ação | Posição | Observação |
| :--- | :--- | :--- | :--- |
| `push()` | Adiciona | Final | |
| `unshift()` | Adiciona | Início | Desloca os demais elementos. |
| `pop()` | Remove | Final | |
| `shift()` | Remove | Início | Desloca os demais elementos. |
| `splice()` | Altera, Insere ou Remove | Qualquer | **Modifica** o vetor original. |
| `slice()` | Obtém uma "fatia" | Qualquer | **Não modifica** o vetor original. |

- **`length`**: Propriedade que retorna o número de elementos do vetor.

## Exibição e Conversão
Os métodos abaixo convertem o conteúdo do vetor para uma string:

- **`toString()`**: Converte o vetor em string.
- **`join()`**: Converte o vetor em string, permitindo especificar um separador.

## Iteração (Percorrendo Vetores)

### Laço `for...of`
Sintaxe simplificada para percorrer cada **elemento** de um vetor.

**Exemplo:**
for (const cidade of cidades) {
    console.log(cidade)
}
// A cada interação, a variável `cidade` recebe o elemento do vetor `cidades`.

### Método `forEach()`
Método mais amplo que chama uma função para manipular cada elemento do vetor.

**Exemplo:**
cidades.forEach((cidade , i) => {
    console.log(`${i + 1} Cidade: ${cidade}`)
})

> **Cuidado:** O `forEach()` **não permite interrupções** no laço, ou seja, não se pode usar os comandos `break` e `continue` dentro dele.

## Localizando Conteúdo

| Método | Função | Resultado se não encontrado |
| :--- | :--- | :--- |
| `indexOf()` | Busca a partir do **início** do vetor. | Retorna `-1`. |
| `lastIndexOf()` | Busca a partir do **final** do vetor. | Retorna `-1`. |
| `includes()` | Verifica a existência do conteúdo. | Retorna `false`. |

## Vetores de Objetos
É comum ter vetores que contenham uma lista de objetos, cada um com seus próprios atributos.

**Exemplo:**
const carros = []
carros.push({modelo: "Punto", preco: 49500})
carros.push({modelo: "X1", preco: 39800})
for (const carro of carros) {
    console.log(`${carro.modelo} - R$: ${carro.preco}`)
}

## Desestruturação e Operador Rest/Spread
Permitem atribuir valores a variáveis obtendo elementos de vetores ou objetos de forma concisa.

- **Operador Rest (`...`)**: Cria um **novo vetor** com os elementos **restantes**.
- **Operador Spread (`...`)**: Pode ser usado para **espalhar** os elementos de um array ou objeto em outro contexto (como um novo array ou em argumentos de função).

**Exemplo (Desestruturação de Array):**
const [primeiro, segundo, ...resto] = ["a", "b", "c", "d"]
// `primeiro` = "a", `segundo` = "b", `resto` = ["c", "d"]
