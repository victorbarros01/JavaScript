# Resumo de funções de Arrays e Objetos do JavaScript

## Mutability

**Descrição:**

Refere-se à capacidade de um objeto ser alterado após sua criação. Arrays e objetos são mutáveis por natureza.

**Exemplo:**

```javascript
const obj = { a: 1 };
obj.a = 2; // Mutável: obj é alterado
console.log(obj);
```

## push e pop

**Descrição:**

push adiciona elementos ao final do array, enquanto pop remove o último elemento.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
```

## shift e unshift

shift remove o primeiro elemento do array, enquanto unshift adiciona elementos no início.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
```

## splice

**Descrição:**

O método splice() é utilizado para adicionar, remover ou substituir elementos em um array.

**Exemplo e Sintaxe:**

_array.splice(índice, quantos, item1, item2, ...);_

```javascript
//Removendo elementos:
const array = [1, 2, 3, 4];
const removidos = array.splice(1, 2);
console.log(array); // Saída: [1, 4]
console.log(removidos); // Saída: [2, 3]

//Adicionando elementos:
const newArray = [1, 4];
newArray.splice(1, 0, 2, 3);
console.log(newArray); // Saída: [1, 2, 3, 4]

//Substituindo elementos:
const array = [1, 2, 3, 4];
array.splice(1, 2, "a", "b");
console.log(array); // Saída: [1, 'a', 'b', 4]
```

[Mais sobre](!https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## indexOf e lastIndexOf

**Descrição:**

indexOf retorna o índice da primeira ocorrência de um valor, enquanto lastIndexOf retorna o índice da última ocorrência.

**Exemplo:**

```javascript
const arr = [1, 2, 3, 2];
arr.indexOf(2); // 1
arr.lastIndexOf(2); // 3
```

## slice

**Descrição:**

Cria uma cópia rasa de uma parte do array sem modificá-lo.

**Exemplo:**

```javascript
const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3); // [2, 3]
```

## forEach

**Descrição:**

Executa uma função em cada elemento do array, mas não retorna nada.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
arr.forEach((num) => console.log(num));
```

## reverse

**Descrição:**

Inverte a ordem dos elementos no array.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

## includes

**Descrição:**

Verifica se um valor está presente no array e retorna true ou false.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
arr.includes(2); // true
```

## trim

**Descrição:**

Remove espaços em branco do início e do fim de uma string.

**Exemplo:**

```javascript
const str = " hello ";
console.log(str.trim()); // 'hello'
```

## join

**Descrição:**

Une todos os elementos de um array em uma string.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
console.log(arr.join("-")); // '1-2-3'
```

## padStart

**Descrição:**

Preenche o início da string com caracteres até atingir o comprimento desejado.

**Exemplo:**

```javascript
const str = "5";
console.log(str.padStart(3, "0")); // '005'
```

## repeat

**Descrição:**

Repete a string o número especificado de vezes.

**Exemplo:**

```javascript
const str = "abc";
console.log(str.repeat(3)); // 'abcabcabc'
```

## Rest Operator

**Descrição:**

Coleta os valores restantes em um array ou objeto.

**Exemplo:**

```javascript
const [a, b, ...rest] = [1, 2, 3, 4];
console.log(rest); // [3, 4]
```

## split

**Descrição:**

Divide uma string em partes com base em um delimitador e retorna um array.

**Exemplo:**

```javascript
const str = "a,b,c";
const arr = str.split(","); // ['a', 'b', 'c']
```
