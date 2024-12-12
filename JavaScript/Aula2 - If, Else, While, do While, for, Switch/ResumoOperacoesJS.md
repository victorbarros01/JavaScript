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

## break

**Descrição:**

- Usado para interromper um laço ou um bloco de código imediatamente.
- Comum em estruturas como for, while ou switch.
- Após encontrar um break, o fluxo do programa salta para fora do laço ou bloco

**Sintaxe e exemplo:**

_break;_

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Interrompe o laço quando i for igual a 5.
  }
  console.log("Valor de i é: " + i);
}

// Saída 0,1,2,3,4
```

## continue

**Descrição:**

- Usado para pular a iteração atual de um laço e passar para a próxima.
- Comum em loops como for e while.

**Sintaxe e exemplo:**

_continue;_

```javascript
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    continue; //Pula todos os números pares
  }

  console.log("Os ímpares da solução são: " + i);
}

// Saída 1,3,5,7,9,11,13,15,17,19
```

<br>

**Bônus**

Principais diferenças entre break e continue.

- break interrompe o laço ou bloco por completo.
- continue apenas pula a iteração atual e segue para a próxima.
