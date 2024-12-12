# Resumo sobre Expressões Regulares em JavaScript

## Conjutos

**Descrição:**

Conjuntos em regex são definidos por colchetes `[]` e especificam um grupo de caracteres possíveis para uma correspondência.

**Exemplo:**

```javascript
const regex = /[0-9]/g;

console.log(regex.test("1025222")); // Saída: true
```

## Caracteres Especiais

| Regex | Significado                                  | Exemplo |
| ----- | -------------------------------------------- | ------- |
| `\s`  | Qualquer espaço em branco                    | `^\s`   |
| `\S`  | Qualquer caractere que NÃO seja espaço       | `\S$`   |
| `\d`  | Qualquer dígito (0-9)                        | `\d+`   |
| `\D`  | Qualquer caractere que NÃO seja dígito       | `^\D`   |
| `\w`  | Qualquer caractere alfanumérico ou \_        | `\w$`   |
| `\W`  | Qualquer caractere que NÃO seja alfanumérico | `\W+`   |

**Descrição:**

Caracteres especiais como `\d` (dígitos), `\w` (caracteres alfanuméricos) e `\s` (espaços) facilitam
correspondências específicas.<br>
`\D:` não dígitos, `\W:` não alfanuméricos, `\S:` não espaços

**Exemplo:**

```javascript
const regex = /\d+/g;

console.log("123 abc 456".match(regex)); // Saída: ['123', '456']
```

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions">Mais sobre!</a>

## Operador \b

**Descrição:**

O operador `\b` pesquisa correspondência em uma fronteira de caracteres.

**Exemplo:**

```javascript
const moo = /\bmoo/;

console.log(moo.test("moon")); // retorna true por encontrar moo em moon
```

## Operador Not

**Descrição:**

O operador not `^` usado dentro de conjuntos exclui os caracteres especificados.<br>
Nesta situação, `[^a-z]` corresponde a qualquer coisa que não seja uma letra minúscula.

**Exemplo:**

```javascript
const regex = /[^aeiou]/g;

console.log("batata".match(regex)); // Saída: ['b', 't', 't']
```

## Operador Plus

**Descrição:**

O operador `+` corresponde a uma ou mais ocorrências do padrão anterior ao operador.

**Exemplo:**

```javascript
const regex = /a+/g;

console.log("baaaatata".match(regex)); // Saída: ['aaa', 'a', 'a']
```

## Operador Question

**Descrição:**

O operador `?` torna o padrão anterior ao operador opcional, permitindo zero ou uma ocorrência.

**Exemplo:**

```javascript
const regex = /colou?r/g;

console.log("color colour".match(regex)); // Saída: ['color', 'colour']
```

## Operador de Precisão

**Descrição:**

O operador `{min, max}` define o número exato ou intervalo de repetições do padrão.

**Exemplo:**

```javascript
const regex = /a{2,3}/g;

console.log("a aa aaa aaaa".match(regex)); // Saída: ['aa', 'aaa']
```

## Método exec

**Descrição:**

O método `exec` retorna detalhes da correspondência, incluindo o índice de início.

**Exemplo:**

```javascript
const regex = /\d+/g;

const result = regex.exec("123 abc 456");
console.log(result); // Saída: ['123']
```

## Método match

**Descrição:**

O método `match` retorna todas as correspondências de uma string em um array.

**Exemplo:**

```javascript
const regex = /\w+/g;

console.log("batata doce".match(regex)); // Saída: ['batata', 'doce']
```

## Choice Pattern

**Descrição:**

O operador `|` permite corresponder alternativas.

**Exemplo:**

```javascript
const regex = /batata|doce/g;

console.log("batata doce".match(regex)); // Saída: ['batata', 'doce']
```

## Bônus

**Validar Domínios**

Regex para validar domínios de site:

```javascript
const regex = /^(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

console.log(regex.test("www.google.com")); // Saída: true
console.log(regex.test("facebook.com")); // Saída: true
```

**Validar Emails**

Regex para validar emails:

```javascript
const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

console.log(regex.test("email@example.com")); // Saída: true
```

**Validar Datas**

Regex para validar datas no formato dd/mm/yyyy:

```javascript
const regex = /^([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/\d{4}$/;

console.log(regex.test("10/12/2024")); // Saída: true
```
