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
