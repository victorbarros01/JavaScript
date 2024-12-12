# Resumo sobre Objetos e Classes

## Metodos em Objetos

**Descrição:**

Métodos são funções atribuídas como propriedades de um objeto.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João",
  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

pessoa.falar(); // Saída: Olá, meu nome é João
```

## Prototypes

**Descrição:**

Prototypes permitem a herança entre objetos. Cada objeto em JavaScript tem um protótipo.

**Exemplo:**

```javascript
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é ${this.nome}`);
};

const joao = new Pessoa("João");
joao.falar(); // Saída: Meu nome é João
```

## Classes

**Descrição:**

Classes são uma sintaxe mais clara para criar objetos e lidar com herança.

**Exemplo:**

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const joao = new Pessoa("João");

joao.falar(); // Saída: Meu nome é João
```

## Instância classe por função

**Descrição:**

Podemos instanciar classes usando funções.

**Exemplo:**

```javascript
function Carro(modelo) {
  this.modelo = modelo;
}

Carro.prototype.ligar = function () {
  console.log(`${this.modelo} está ligado.`);
};

const carro1 = new Carro("Fusca");

carro1.ligar(); // Saída: Fusca está ligado.
```

## Instância classe por new

**Descrição:**

O operador `new` cria uma nova instância de um objeto baseado em uma função ou classe.

**Exemplo:**

```javascript
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

const cachorro = new Animal("Cachorro");

console.log(cachorro.tipo); // Saída: Cachorro
```

## Métodos por prototype

**Descrição:**

Os métodos adicionados ao prototype ficam disponíveis para todas as instâncias.

**Exemplo:**

```javascript
function Produto(nome) {
  this.nome = nome;
}

Produto.prototype.mostrar = function () {
  console.log(`Produto: ${this.nome}`);
};

const p1 = new Produto("Caneta");

p1.mostrar(); // Saída: Produto: Caneta
```

## Override no Prototype

**Descrição:**

É possível sobrescrever métodos no protótipo.

**Exemplo:**

```javascript
Produto.prototype.mostrar = function () {
  console.log(`Item: ${this.nome}`);
};

p1.mostrar(); // Saída: Item: Caneta
```

## Symbol

**Descrição:**

Symbols são valores únicos que podem ser usados como identificadores.

**Exemplo:**

```javascript
const simbolo = Symbol("id");

const obj = {
  [simbolo]: 123,
};

console.log(obj[simbolo]); // Saída: 123
```

## Getters e Setters

**Descrição:**

Getters e Setters permitem controlar o acesso às propriedades.

**Exemplo:**

```javascript
class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }
}

const pessoa = new Pessoa("Maria");
console.log(pessoa.nome); // Saída: Maria

pessoa.nome = "Joana";
console.log(pessoa.nome); // Saída: Joana
```

## Herança

**Descrição:**

Herança permite que uma classe herde propriedades e métodos de outra.

**Exemplo:**

```javascript
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super("Cachorro");
    this.nome = nome;
  }
}

const rex = new Cachorro("Rex");
console.log(rex.tipo, rex.nome); // Saída: Cachorro Rex
```

## InstanceOf

**Descrição:**

`instanceof` verifica se um objeto pertence a uma classe.

**Exemplo:**

```javascript
console.log(rex instanceof Cachorro); // Saída: true
console.log(rex instanceof Animal); // Saída: true
```
