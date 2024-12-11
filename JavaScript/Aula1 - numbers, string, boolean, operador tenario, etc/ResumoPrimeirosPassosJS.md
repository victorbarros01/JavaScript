# Resumo dos tipos básicos do JavaScript

## Strings

**Descrição:**

Strings representam textos e são declaradas com aspas simples (' '), duplas (" "), ou crase (\` \`) para template literals.

**Declaração:**

```javascript
// Com aspas simples ou duplas

let saudacao = "Olá, mundo!";
let mensagem = "Bem-vindo ao JavaScript";
```

```javascript
// Template literal (para incluir variáveis ou expressões)

let nome = "Carlos";
let mensagemPersonalizada = `Olá, ${nome}!`;
```

**Exemplos de operações**

- Concatenar strings:

```javascript
let fullName = "John" + " " + "Doe";
```

- Acessar caracteres:

```javascript
let char = "saudacao";
char[0]; // 's'
```

- Comprimento da string:

```javascript
let tamanho = saudacao.length; // Retorna o número de caracteres
```

## Numbers

**Descrição:**

Em JavaScript, Number representa números inteiros ou decimais, podendo ser positivos ou
negativos.

**Declaração:**

```javascript
let idade = 25; // Número inteiro
let temperatura = 36.6; // Número decimal (float)
```

**Exemplos de operações**

- Operações matemáticas:

```javascript
let soma = 10 + 5;
```

- Conversão para inteiro:

```javascript
let inteiro = parseInt("10");
```

- Conversão para decimal:

```javascript
let decimal = parseFloat("10.5");
```

## Booleans

**Descrição:**

Booleanos (true ou false) representam valores de verdade e são usados em comparações e
condições lógicas.

**Declaração:**

```javascript
let estaLogado = true;
let podeEntrar = false;
```

**Exemplos de operações:**

- Comparações:

```javascript
let idade = 18;
let maiorDeIdade = idade >= 18; // true
```

- Operadores Lógicos:

```javascript
// && (E):
true && false; // false
// || (OU):
true || false; // true
// ! (NÃO):
!true; // false
```

## Operador Ternário

**Descrição:**

O operador ternário `(condição ? valorSeVerdadeiro : valorSeFalso)` é uma forma simplificada de
escrever uma estrutura if...else.

**Declaração**

```javascript
let idade = 20;
let podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // "Pode beber" se idade for 18 ou mais
```

**Uso comum:**

- Ideal para retornar valores com base em uma condição em uma única linha.
