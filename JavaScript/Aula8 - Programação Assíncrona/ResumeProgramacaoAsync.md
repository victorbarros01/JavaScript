# Resumo sobre programação assíncrona em JavaScript

## Callbacks

**Descrição:**

- Uma função callback é uma função passada como argumento para
  outra função e executada após a conclusão desta.
- Amplamente usada antes da introdução das Promises e
  async/await.
- Problemas comuns incluem o "callback hell" devido ao
  aninhamento excessivo.

**Exemplo:**

```javascript
function processarDados(dados, callback) {
  setTimeout(() => {
    const resultado = dados.toUpperCase();

    callback(resultado);
  }, 1000);
}

processarDados("texto", (resultado) => {
  console.log("Resultado:", resultado);
});
```

## Utilização de Callbacks

**Descrição:**

- Usada para operações assíncronas como leitura de arquivos,
  requisições HTTP e timers.
- Geralmente utilizada em bibliotecas ou APIs.

**Exemplo:**

```javascript
const fs = require("fs");

fs.readFile("arquivo.txt", "utf8", (err, dados) => {
  if (err) {
    console.error("Erro ao ler arquivo:", err);
  } else {
    console.log("Conteúdo:", dados);
  }
});
```

## Promises

**Descrição:**

- Introduzidas para lidar com operações assíncronas de forma mais
  legível.
- Uma Promise pode estar em um dos três estados: pendente,
  resolvida ou rejeitada.

**Exemplo:**

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true;

  setTimeout(() => {
    sucesso ? resolve("Concluído com sucesso!") : reject("Ocorreu um erro.");
  }, 1000);
});

minhaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.error(erro));
```

## Promises Catch

**Descrição:**

- Usado para tratar erros ou rejeições de uma Promise.
- Similar a um bloco `try-catch`.

**Exemplo:**

```javascript
const promessaErro = new Promise((resolve, reject) => {
  reject("Erro simulado");
});

promessaErro
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.error("Capturado:", erro));
```

## Promises Resolve e Reject

**Descrição:**

- `Promise.resolve(valor)` cria uma Promise resolvida imediatamente.
- `Promise.reject(erro)` cria uma Promise rejeitada imediatamente.

**Exemplo:**

```javascript
Promise.resolve("Valor imediato").then(console.log);
Promise.reject("Erro imediato").catch(console.error);
```

## Promises All

**Descrição:**

- Permite executar várias Promises simultaneamente e aguarda todas
  serem resolvidas ou uma ser rejeitada.

**Exemplo:**

```javascript
const p1 = Promise.resolve("Primeira");

const p2 = Promise.resolve("Segunda");

const p3 = Promise.resolve("Terceira");

Promise.all([p1, p2, p3])
  .then((resultados) => console.log("Resultados:", resultados))
  .catch((erro) => console.error("Erro:", erro));
```

## Funções Assíncronas

**Descrição:**

- Uma função declarada com `async` retorna automaticamente uma
  Promise.

**Exemplo:**

```javascript
async function obterDados() {
  return "Dados obtidos";
}

obterDados().then(console.log);
```

## Await

**Descrição:**

- Usado dentro de funções `async` para pausar a execução até que
  uma Promise seja resolvida.

**Exemplo:**

```javascript
async function processar() {
  const resultado = await Promise.resolve("Finalizado");

  console.log(resultado);
}

processar();
```

## Generators

**Descrição:**

- Funções que são Generators precisam ter sua `*` na frentre de sua declaração, `function*`.
- Funções que podem ser pausadas e retomadas usando `yield`.
- Não são Promises, mas podem ser combinados com elas para
  operações assíncronas.

**Exemplo:**

```javascript
function* gerador() {
  yield "Primeiro passo";
  yield "Segundo passo";
  return "Fim";
}

const gen = gerador();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

## Alguns outros conceitos importantes

### Event Loop

**Descrição:**

- Responsável por gerenciar a execução de código, coleta de eventos
  e tarefas assíncronas em JavaScript.

**Exemplo:**

```javascript
console.log("Início");

setTimeout(() => console.log("Assíncrono"), 0);

console.log("Fim");
```

### Async Iterators

**Descrição:**

- Combina ídia de iteradores com operações assíncronas.

**Exemplo:**

```javascript
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

(async () => {
  for await (const valor of asyncGenerator()) {
    console.log(valor);
  }
})();
```

## Alguns outros exemplos

**Callbacks**

```javascript
// Usando apenas SetTimeout

console.log(1);

setTimeout(function () {
  console.log(3);
}, 2000);

console.log(2);

// Por mais que o timeout esteja entre as duas execuções ele só vai ser instaciado após sua chamada que é de 2000ms(2s).
```

**Promises**

```javascript
let promessa = Promise.resolve(3);

promise.then((value) => {
  console.log(`Sua promessa está resolvida com ${value}.`);
});
// Saída: Sua promessa está resolvida com 3.
```

**Funções Assíncronas**

```javascript
async function somar(a, b) {
  return a + b;
}
// Função retorna promise além do retorno estabelecido

somar(5, 2).then((value) => {
  console.log(value);
});

// Saída: 7
```

**Await**

```javascript
function somarComDelay(a, b, c) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b + c);
    }, 4000);
  });
}
// Nesta função é gerada uma promise que fica como pendente até a chamada da function dentro de setTimeOut.

async function somar(a, b, c, d) {
  let x = somarComDelay(a, b, c);
  let y = d;

  return (await x) + y;
}
// Nesta função o retorno é fazer a soma de x + y, porém, o await só permite isso acontecer depois da promise da função somarComDelay ser resolvida

somar(2, 2, 2, 2).then((value) => console.log(value));

// Saída: 8
```

**Generators**

```javascript
function* gerarId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

let geraId = gerarId();

console.log(geraId.next().value);
// Saída: 0
console.log(geraId.next().value);
// Saída: 1

// Toda vez que chamada a função com a outra função next() a função gerarId() vai acrementar um novo valor para id; sem que esse valor se repita
```
