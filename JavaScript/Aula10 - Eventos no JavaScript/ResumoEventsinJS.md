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

Quando criamos eventos, temos a opção de utilizar um argumento, que é chamado de objeto do evento. Ele contém algumas propriedades que podem ser utilizadas ao nosso favor e para ser iniciado basta passa-lo como parâmetro na função do evento.

**Exemplo:**

```javascript
let btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  console.log(e);
  // Como saída irá exibir várias informações sobre o recurso de input usado para executar o evento por exemplo o botão esquerdo do mouse.
});
```

## Propagação

**Descrição:**

A propagação é um problema que pode ocorrer nos eventos relacionado a forma na qual é definido o evento ou em algumas situações um elemento chamar o outro por questões de hierarquia.<br>
Para resolver esse problema e minimizar esse tipo de ocorrido, o JavaScript possui uma função que executa esse evento mas evita que essa propragração aconteça, `stopPropagation`.

**Exemplo:**

```html
<script>
  let btn = document.querySelector("button");
  let div = btn.parentNode;

  btn.addEventListener("click", function (e) {
    alert("Hello World!");
    e.stopPropagation();
  });

  div.addEventListener("click", function (e) {
    alert(`Eu sou a ${div}`);
  });
</script>
  <body>
    <div>
      <button>botão</button>
    </div>
  </body>
</html>
```

## Prevent Default

**Descrição:**

Basicamente essa função do objeto de evento, cancela a ação pré-definida que já existe no elemento se o mesmo possuir.

**Exemplo:**

```javascript
let a = document.querySelector("a");

a.addEventListener("click", function (e) {
  a.preventDefault();
  // Cancelou o evento padrão de "a" que é inicialmente seguir para o próximo url definido no "href".

  alert("Você não mudará para outro link.");
});
```

## Eventos de tecla

**Descrição:**

No JavaScript também é possível vincular um evento a uma tecla, mas diferente da forma antes vista de como iniciar um evento nesse caso atrelamos o evento a `window`, pois não temos um elemento exato para o qual atrelar.

**Exemplo:**

```javascript
window.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    console.log("apertou a tecla Q");
  }
});
// Neste exemplo, sempre que clicar ou a tecla "q" estiver pressionada, dará a saída "apertou a tecla Q".

window.addEventListener("keyup", function (e) {
  if (e.key == "t") {
    console.log("apertou a tecla T");
  }
});
// Neste exemplo, sempre que clicar e soltar a tecla "t", dará a saída "apertou a tecla T".
```

##
