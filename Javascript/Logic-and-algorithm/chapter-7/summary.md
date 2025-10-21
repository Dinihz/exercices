# Capítulo 7: Strings e Datas

## Percorrer os caracteres de uma string

- charAt(): retorna o caractere de uma posição da palavra.
- length: ela retorna o tamanho (numero de caracteres ) da string.

const cidade = "Neves"
cidade.charAt(-1) // N
cidade.charAt(0) // e
cidade.charAt(1) // v

## Converter para letras maiusculas ou minusculas

- toUpperCase():
- toLowerCase():

## Cópia de Caracteres e Remoção de Espaços

### Métodos de Cópia

Utilizados para obter uma "cópia" (sub-string) de uma parte da string original.

- **`substr(posInicial, numCaracteres)`**: Copia uma parte da string a partir da `posInicial` e pelo `numCaracteres` especificado.
- **`substring()` e `slice()`**: Métodos alternativos para obter sub-strings.

**Exemplo:**
const palavra = "saladas"
const copia1 = palavra.substr(2) // "ladas"
const copia2 = palavra.substr(2, 4) // "lada" (A partir da posição 2, copia 4 caracteres)

### Métodos de Remoção de Espaços

- **`trim()`**: Remove todos os espaços extras do início e do fim da string.
- **`trimStart()`**: Remove apenas os espaços no começo da string.
- **`trimEnd()`**: Remove apenas os espaços no final da string.

---

## Localizar Conteúdo na String

| Método          | Função                                                                      | Resultado se não encontrado |
| :-------------- | :-------------------------------------------------------------------------- | :-------------------------- |
| `indexOf()`     | Pesquisa a partir do **início** da string.                                  | Retorna `-1`.               |
| `lastIndexOf()` | Pesquisa a partir do **final** da string (direita para a esquerda).         | Retorna `-1`.               |
| `includes()`    | Retorna `true` ou `false` de acordo com a existência ou não dos caracteres. | Retorna `false`.            |

> Os métodos `indexOf()` e `lastIndexOf()` retornam a posição da **primeira ocorrência** do caractere ou conjunto de caracteres pesquisado.

**Exemplo:**
const palavra = "saladas"
const posicao1 = palavra.indexOf("a") // 1
const posicao2 = palavra.lastIndexOf("a") // 5
const posicao3 = palavra.includes("d") // true

---

## Manipulação e Conversão de Strings

### Dividir a String (`split()`)

- **Função:** Converte a string em elementos de vetor (Array) a cada ocorrência de um determinado caractere (o delimitador).

**Exemplo:**
const sabores = "calabresa, 4 queijos, atum, frango"
const partes = sabores.split(",") // partes é um vetor com 4 elementos

### Substituição de Caracteres (`replace()`)

- **Função:** Substitui um caractere (ou conjunto de caracteres) pesquisado por outro na string.

**Exemplo:**
const novaStr = str.replace(caracterePesquisado, novoCaractere)

### Validar Senhas com `match()` (Expressões Regulares)

- **Função:** Utilizado para verificar a existência de padrões específicos em uma string (como letras maiúsculas, minúsculas, números e símbolos).

**Sintaxe Básica:** `const vetor = palavra.match(/[A-Z]/g)`

- `palavra.match(...)`: Tenta encontrar um ou mais padrões na string.
- `[A-Z]`: Define o padrão de busca (neste caso, qualquer letra maiúscula de 'A' a 'Z').
- `/g` (Global): Indica que a busca deve encontrar **todas** as ocorrências do padrão na string, e não apenas a primeira.

---

## Manipulação de Datas (`Date`)

As datas em JavaScript são armazenadas internamente como um valor numérico (milissegundos desde 1º de janeiro de 1970).

**Criação de Data:**
const hoje = new Date()

### Métodos de Obtenção (Getters)

- **`getDate()`**: Obtém o dia do mês (1-31).
- **`getMonth()`**: Obtém o mês (0-11, onde 0 é Janeiro e 11 é Dezembro).
- **`getFullYear()`**: Obtém o ano com quatro dígitos.
