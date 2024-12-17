# Resumo sobre o funcionamento do JavaScript com o Navegador

## Acessando elementos/tags

**Descrição:**

Uma das formas de acessar os elementos/tags do html pelo javascript é acessando os `childNodes` do mesmo usando a lógica da árvore do DOM.

**Exemplo:**

```html
<script>
  console.log(document.body.childNodes);
  // Terá como retorno um objeto com as cada tag e "text" dentro do body e algumas informações deles informações.

  console.log(
    document.body.childNodes[3].childNodes[3].childNodes[3].textContent
  );
  // Saída: Item 2
</script>
<body>
  <div>
    <h1>Titulo para algo</h1>
    <p>conteúdo do texto</p>
  </div>

  <div>
    <h2>Lista qualquer</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</body>
```

## Encontrando elementos

**Descrição:**

No JavaScript existem algumas formas para se encontrar um elemento que está presente no html, algumas dessas formas são:

- `getElementsByTagName()` : Captura todos os elementos com aquela tag especificada em seu parâmetro e cria um array de objetos com os elementos trazidos desta busca.

- `getElementById()` : Captura o primeiro elemento com id especificado em seu parâmetro.

- `getElementsByClassName()` : Assim como **getElementsByTagName** essa forma captura os elementos e cria um array de objetos, porém, só captura elementos que forem `class` mencionados em seu parâmetro.

- `querySelector()` : Captura o primeiro elemento ao que se adequar as especificações do parâmetro, nesse formato as menções são feitas similares ao CSS.

- `querySelectorAll()` : Funciona como **querySelector** entretando captura todos os elementos que se adequarer as especificações.

**Exemplos:**

```html
<script>
  const tags = document.getElementsByTagName("li");
  tags[0].textContent = "Elemento 1";
  // O texto do primeiro elemento li passará a ser "Elemento 1".

  const id = document.getElementById("paragrafo");
  id.textContent = "Texto ainda maior";
  // O texto do elemento com o id paragrafo passará a ser "Texto ainda maior".

  const selector = document.querySelector(".div-group h1");
  selector.textContent = "Grande Título";
  // O texto do elemento h1 da classe "div-group" passará a ser "Grande Título".

  const selectorAll = document.querySelectorAll("div");
  selectorAll[0].innerHTML = "Começo";
  // Todo o conteúdo da primeira div será substituído por "Começo".

  const classe = document.getElementsByClassName("div-group");
  classe[1].innerHTML = "Fim";
  // Todo o conteúdo do segundo elemento com a classe "div-group" será substituído por "Fim".
</script>
<body>
  <div class="div-group">
    <h1>Titulo para algo</h1>
    <p id="paragrafo">conteúdo do texto</p>
  </div>

  <div class="div-group">
    <h2>Lista qualquer</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</body>
```

## Alterar o HTML

**Descrição:**

O JavaScript possui alguns métodos com a função de adicionar, remover ou clonar elementos.
Vamos ver alguns desses recursos:

- `createElement(tag)` : Este método cria um elemento novo, porém, esse elemento ainda não está presente no HTML.

- `offsetWidth/offsetHeight` : Este atributo verifica a largura e altura respectivamente, dos elementos.

- `clientWidth/clientHeight` : Assim como **offsetWidth/offsetHeight** verifica a largura e altura respectivamente dos elementos, mas descosidera as dimensões das **bordas**.

- `getBoundingClientRect()` : Este método verifica as posições de um elemento.

- `createTextNode(text)` : Este método é responsável por criar um novo nó de texto.

- `getAttribute(attribute)` : Este método pega o valor que está presente no atributo de um elemento.

- `setAttribute(attribute, value)` : Este método altera o valor que está presente no atributo de um elemento, caso esse atributo mencionando não exista no elemento ele adiociona como novo atributo.

- `insertBefore(tag, refElement)` : Este método insere um elemento antes do elemento de referência.

- `appendChild(tag)` : Neste método o elemento gerado no JS é adicionado no html, sempre após todos os elementos dentro do elemento pai. Nas suas regras é passado no parâmetro, apenas qual elemento precisa ser adicionado.

- `replaceChild(newTag, oldTag)` : Este método diferente dos anteriore repõe algum elemento do HTML. Como regra no primeiro parâmetro o elemento novo, no segundo parâmetro o antigo elemento que será substituído.

**Exemplos:**

#### createElement

```javascript
let span = document.createElement("span");
// Cria um novo elemento.

span.textContent = "Aviso importante!";
// Altera o texto de span para Aviso importante!.

let titulo = document.getElementById("titulo");
let paiTitulo = titulo.parentNode;

paiTitulo.appendChild(span);
```

#### Width/Height

```javascript
let texto = document.querySelector("p");

console.log(texto.offsetWidth, texto.offsetHeight);
// Tem como saída as dimensões de largura e altura respectivamente do elemento.

console.log(texto.clientWidth, texto.clientHeight);
// Tem como saída as dimensões de largura e altura respectivamente do elemento, sem considerar a borda "border".
```

#### getBoundingClientRect

```javascript
let texto = document.querySelector("p");

console.log(texto.getBoundingClientRect());
// Tem como saída todas as informações sobre a posição desse elemento sendo essas: eixos da posição, distâncias das direções(right, left, top, bottom), altura e largura do elemento.
```

#### createTextNode

```javascript
let span = document.createElement("span");

let titulo = document.getElementById("titulo");
let paiTitulo = titulo.parentNode;

paiTitulo.appendChild(span);

let novoTexto = document.createTextNode("Este é o novo texto");
// Cria um novo nó de texto.

span.appendChild(novoTexto);
// Insere o nó de texto "novoTexto" no elemento span.
```

#### get/setAttribute

```javascript
let a = document.createElement("a");

let titulo = document.getElementById("titulo");

a.textContent = "Novo link";

a.setAttribute("href", "#");
// Cria um novo atributo para "a" e coloca "#" como valor.

titulo.parentNode.appendChild(a);

a.setAttribute("href", "https://www.google.com");
// Substitui o valor de href para "https://www.google.com".

console.log(a.getAttribute("href"));
// Saída: https://www.google.com
```

#### insertBefore

```javascript
let a = document.createElement("a");

let titulo = document.getElementById("titulo");

let pai = titulo.parentNode;

a.textContent = "Novo link";

a.setAttribute("href", "#");

pai.insertBefore(a, pai.firstChild);
// Insere o elemento "a" antes do primeiro elemento de "pai".
```

#### appendChild

```javascript
let span = document.createElement("span");

let titulo = document.getElementById("titulo");
let paiTitulo = titulo.parentNode;

paiTitulo.appendChild(span);
// Adiciona "span" depois do último elemento de "paiTitulo".

let novoTexto = document.createTextNode("Este é o novo texto");

span.appendChild(novoTexto);
// Insere o nó de texto "novoTexto" no elemento span.
```

#### replaceChild

```javascript
let a = document.createElement("a");

let titulo = document.getElementById("titulo");

let pai = titulo.parentNode;

a.textContent = "Novo link";

a.setAttribute("href", "#");

pai.replaceChild(a, titulo);
// Substitui o elemento "titulo" para "a";
```
