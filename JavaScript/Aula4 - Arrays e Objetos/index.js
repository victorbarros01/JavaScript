// Exercicio 01 - Array

const numeros = [12, 14, 124, 212, 125];

console.log(numeros[0], numeros[2], numeros[3]);

// Exercicio 02 - Array

const nomes = ["Victor", "Jorge", "Maria", "Pedro", "Matheus"];
const valores = [12, 14, 124, 212];

console.log(valores, nomes);

// Exercicio 03 - Objeto

const onibus = {
  rodas: 8,
  passageiros: 40,
  portas: 2,
};

console.log(onibus);

// Exercicio 04 - Objeto adicionar e remover item

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus);

// Exercicio 05 - Array verificar a existencia do item

if (nomes.includes("Victor") == true) {
  console.log("Nome encontrado");
} else {
  console.log("Nome não encontrado");
}

//Exercicio 06 - Array.length

function NumeroElementos(elemento) {
  if (elemento.length < 5) {
    console.log("Poucos elementos");
  } else {
    console.log("Muitos elementos");
  }
}

NumeroElementos(valores);

// Exercicio 07 - Array Loop

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// Exercicio 08 - JSON

// const objJson = {
//   "nome": "Victor",
//   "idade": 21,
//   "brasileiro": true
// };

// console.log(objJson);

// Exercicio 09 - string for Array

const frase = "O rato roeu a roupa do rei de Roma";

const arrFrase = frase.split(" ");

for (let i = 0; i < arrFrase.length; i++) {
  console.log(arrFrase[i]);
}

// Exercicio 10 - Calculadora 2 valores, 3 operações

const calculadora = {
  soma: function (a, b) {
    return a + b;
  },
  divisao: function (a, b) {
    return a / b;
  },
  multiplicacao: function (a, b) {
    return a * b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
};

console.log(calculadora.soma(2, 5));

console.log(calculadora.divisao(2, 5));

console.log(calculadora.multiplicacao(2, 5));

console.log(calculadora.subtracao(2, 5));

//

// function a(...arr) {
//   let set = new Set(...arr);
//   let soma;
//   let result = 0;
//   set.forEach(function (sets) {
//     soma = sets;
//     result += soma;
//     console.log(sets);
//   });
//   console.log(result);
// }

function a(...arr) {
  let set = new Set(...arr);
  let value = Object.keys(set).map((sets) => set[sets.entries()]);
  console.log(set.entries());
  console.log(value);
}
const b = [1, 2, 3, 4, 5, 5, 2, 1, 4, 3];
a(b);
