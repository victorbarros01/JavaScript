# Resumo de instruções de lógica em JavaScript

## if (Condicional Simples)

**Descrição:**

Usado para executar um bloco de código apenas se uma condição for verdadeira.
Se a condição for falsa, o bloco é ignorado.

**Sintaxe e exemplo:**

_if (condição){ <br>
// Código executado se a condição for verdadeira<br>
}_

```javascript
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade!");
}
```

## else if (Condicional Alternativa)

**Descrição:**

Usado após um if para verificar outra condição caso a primeira seja falsa.
Permite múltiplos caminhos.

**Sintaxe e exemplo:**

_if (condição1){<br>
// Código se condição1 for verdadeira<br>
} else if (condição2){<br>
// Código se condição2 for verdadeira<br>
}_

```javascript
let nota = 75;
if (nota >= 90) {
  console.log("Nota A");
} else if (nota >= 70) {
  console.log("Nota B");
}
```

## while (Laço de repetição)

**Descrição:**

Executa um bloco de código repetidamente enquanto a condição for verdadeira.

**Sintaxe e exemplo:**

_while (condição){<br>
// Código executado enquanto a condição for verdadeira<br>
}_

```javascript
let contador = 0;
while (contador < 5) {
  console.log("Contador:", contador);
  contador++;
}
```

## do while (Laço de Repetição Garantida)

**Descrição:**

Executa o bloco de código ao menos uma vez, depois verifica a condição para continuar.

**Sintaxe e exemplo:**

_do {<br>
// Código executado pelo menos uma vez<br>
} while (condição);_

```javascript
let numero = 0;
do {
  console.log("Número atual:", numero);
  numero++;
} while (numero < 3);
```

## for (Laço de repetição controlado)

**Descrição:**

Laço com uma estrutura fixa (início, condição, incremento). Ideal para laços com número definido
de repetições.

**Sintaxe e exemplo:**

_for (inicialização; condição; incremento) {<br>
// Código executado a cada iteração<br>
}_

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Valor de i:", i);
}
```

## switch (Seleção Múltipla)

**Descrição:**

Usado para testar uma variável contra vários valores. Substitui múltiplos if/else de forma mais organizada.

**Sintaxe e exemplo:**

_switch (expressão) { <br><p>
case valor1:<br>
// Código para valor1<br>
break;<br><p>
case valor2:<br>
// Código para valor2<br>
break;<br><p>
default:<br>
// Código padrão<br>
}_

```javascript
let fruta = "maçã";

switch (fruta) {
  case "banana":
    console.log("É uma banana.");
    break;

  case "maçã":
    console.log("É uma maçã.");
    break;

  default:
    console.log("Fruta desconhecida.");
}
```
