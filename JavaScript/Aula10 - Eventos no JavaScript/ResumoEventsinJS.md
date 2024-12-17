# Resumo sobre eventos no JavaScript

## Como criar um evento

**Descrição:**

Antes de tudo devemos iniciar um elemento novo para o JavaScript, após essa referência ser criada, vamos atrelar o evento a esse elemento passando um `addEventListener`. Com ambos atrelados, vamos indicar no listener qual o tipo de evento deve ser criado e criaremos uma nova função, que será chamada toda vez que o evento for invocado.

**Exemplo:**

`addEventListener(event, function);`

```javascript
let button = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("Clicou");
});
```

## Removendo eventos

**Descrição:**

Faz a remoção de um evento já criado anteriormente, porém, essa remoção tem um requisito a função que é passada no parâmetro na criação do novo evento precisar ser criada antes do evento.

**Exemplo:**

`removeEventListener(event, function);`

```javascript
let btn1 = document.querySelector("button");

function msg() {
  console.log("Clicou");
}

btn1.addEventListener("click", msg);

SetTimeout(btn1.removeEventListener("click", msg), 5000);
// Após 5 segundos o evento atrelado ao btn1 será removido.
```

## Objeto do evento

**Descrição:**
