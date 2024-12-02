// Exercicio 01 - funcao

function HelloWorld() {
  console.log("Hello World!");
}

HelloWorld();

// Exercicio 02 - funcao com parametro

function Info(idade) {
  console.log(`Você tem ${idade} anos.`);
}

Info(21);

// Exercicio 03 - funcao

function Soma(a, b) {
  return a + b;
}

console.log(Soma(2, 7));

// Exercicio 04 - funcao numero aleatorio

function NumeroAleatorio(valorMax) {
  if (valorMax < 0) {
    console.log("Valor máximo não pode ser negativo.");
    return;
  } else {
    return Math.trunc(Math.random() * valorMax);
  }
}

console.log(NumeroAleatorio(353));

// Exercicio 05 - funcao auto escola

function AutoEscola(fichaLimpa = true, idade) {
  if (idade >= 18 && fichaLimpa === true) {
    return "Você tem os requisitos para começar as aulas";
  } else {
    return "Você não tem os requisitos para começar as aulas";
  }
}

console.log(AutoEscola(false, 18));
console.log(AutoEscola(true, 23));

// Exercicio 06 - funcao tipo de dados

function TipoDado(dado) {
  if (typeof dado === "string") {
    return "O dado é uma string";
  } else if (typeof dado === "number") {
    return "O dado é um número";
  } else if (typeof dado === "boolean") {
    return "O dado é um boolean";
  } else {
    return `O dado é do tipo ${typeof dado}`;
  }
}

console.log(TipoDado("Alo"));

console.log(TipoDado(2));

console.log(TipoDado(true));

console.log(TipoDado(Object));

const a = new Array(1, 2, 4, 5);

// Exercicio 07 - funcao numero negativo

function numNegativo(num) {
  if (num > 1) {
    console.log("Essa função só permite números negativos");
    return;
  } else {
    return Math.abs(num);
  }
}

console.log(numNegativo(5));
console.log(numNegativo(-25));

// Exercicio 08 - funcao limite de texto

function LimiteTexto(texto) {
  if (texto.length <= 10) {
    console.log(`Esse é o seu texto: ${texto}`);
  } else {
    console.log("Você ultrapassou o limite de 10 caracteres...");
  }
}

LimiteTexto("Esse é o meu texto está certo?");

LimiteTexto("TextoMenor");

// Exercicio 09 - funcao potencia

function Potencia(base, expoente) {
  return Math.pow(base, expoente);
  // outra forma base ** expoente
}

console.log(Potencia(2, 3));

console.log(Potencia(3, 4));

// Exercicio 10 - funcao loop

function Loop(num) {
  for (let i = num; i > 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

console.log(Loop(100));

// Exercicio 11 - palindromo

function isPalindrome(word) {
  let inverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    inverseWord += word[i];
  }

  if (inverseWord === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("pedra"));

//

function calculateAverage(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma / arr.length;
}

let media = [2, 5, 6, 12, 51];

console.log(calculateAverage(media));
