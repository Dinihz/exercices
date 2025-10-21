# Capítulo 6: Vetores (Arrays)

# Strings e datas

## Percorrer os caracteres de uma string

- charAt(): retorna o caractere de uma posição da palavra.
- length: retorna o tamanho (numero de caracteres) da string.

const cidade = "Neves"
cidade.charAt(-1) // N
cidade.charAt(0) // e
cidade.charAt(1) // v

## Converter para letras maiusculas ou minusculas

- toUpperCase():
- toLowerCase():

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

| Método      | Ação                     | Posição  | Observação                         |
| :---------- | :----------------------- | :------- | :--------------------------------- |
| `push()`    | Adiciona                 | Final    |                                    |
| `unshift()` | Adiciona                 | Início   | Desloca os demais elementos.       |
| `pop()`     | Remove                   | Final    |                                    |
| `shift()`   | Remove                   | Início   | Desloca os demais elementos.       |
| `splice()`  | Altera, Insere ou Remove | Qualquer | **Modifica** o vetor original.     |
| `slice()`   | Obtém uma "fatia"        | Qualquer | **Não modifica** o vetor original. |

- **`length`**: Propriedade que retorna o número de elementos do vetor.

## Exibição e Conversão

Os métodos abaixo convertem o conteúdo do vetor para uma string:

- **`toString()`**: Converte o vetor em string.
- **`join()`**: Converte o vetor em string, permitindo especificar um separador.

---

## Iteração (Percorrendo Vetores)

### Laço `for...of`

Sintaxe simplificada para percorrer cada **elemento** de um vetor.
**Exemplo:** for (const cidade of cidades) { console.log(cidade) }

### Método `forEach()`

Método que chama uma função para manipular cada elemento do vetor.

> **Cuidado:** O `forEach()` **não permite interrupções** no laço (`break` e `continue`).

## Localizando Conteúdo

| Método          | Função                                 | Resultado se não encontrado |
| :-------------- | :------------------------------------- | :-------------------------- |
| `indexOf()`     | Busca a partir do **início** do vetor. | Retorna `-1`.               |
| `lastIndexOf()` | Busca a partir do **final** do vetor.  | Retorna `-1`.               |
| `includes()`    | Verifica a existência do conteúdo.     | Retorna `false`.            |

---

## Métodos Funcionais: Map, Filter e Reduce

Estes métodos criam **novos vetores** ou um **valor único** sem modificar o vetor original.

### `map()`

- **Função:** Cria um **novo vetor** com o resultado do processamento (transformação) realizado sobre cada elemento.
- **Exemplo:** const dobro = numeros.map(num => num \* 2)

### `filter()`

- **Função:** Cria um **novo vetor** contendo apenas os elementos do vetor original que satisfazem uma condição (`true`).
- **Exemplo:** const pares = numeros.filter(num => num % 2 === 0)

### `reduce()`

- **Função:** Útil para obter **valores cumulativos** ou concatenados (soma, por exemplo).
- **Sintaxe:** O primeiro parâmetro (acumulador) acumula os valores, o segundo é o elemento atual.
- **Exemplo:** const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
- O `0` final é o valor inicial do acumulador.

---

## Vetores de Objetos e Desestruturação

### Vetores de Objetos

Vetor que armazena uma lista de objetos, cada um com seus atributos.
**Exemplo:** for (const carro of carros) { console.log(`${carro.modelo} - R$: ${carro.preco}`) }

### Desestruturação e Operador Rest/Spread

Permitem atribuir valores a variáveis obtendo elementos de vetores de forma concisa.

- **Operador Rest (`...`)**: Cria um **novo vetor** com os elementos **restantes**.
- **Operador Spread (`...`)**: Usado para **espalhar** os elementos de um array ou objeto.
  **Exemplo:** const [primeiro, segundo, ...resto] = ["a", "b", "c", "d"]

---

## Classificando Itens (`sort()`)

- **`sort()`**: Classifica os itens de um vetor em ordem **alfabética crescente**.
- **`reverse()`**: Usado junto com `sort()` para inverter a ordem, resultando em classificação **decrescente**.
- **Detalhe Importante:** Por padrão, o `sort()` trata os dados como **strings**, mesmo que o conteúdo seja numérico.
