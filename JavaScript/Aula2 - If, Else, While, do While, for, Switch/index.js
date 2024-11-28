// Exercicio 01 - variaveis

const nome = "Victor";
let idade = "21";
let cnh = false;

console.log(typeof nome, typeof idade, typeof cnh);

// Exercicio 02 - if

if (idade >= 18) {
  console.log("Pode entrar na festa");
}

// Exercicio 03 - const

if (nome === "Victor") {
  console.log(` olá, ${nome}! Como vai seu dia?`);
}

// Exercicio 04 - Math.pow

const expoente = 2;
console.log(
  Math.pow(2, expoente),
  Math.pow(3, expoente),
  Math.pow(18, expoente)
);

// Exercicio 05 - problema 1 - if else

let velociadeAtual = 140;

if (velociadeAtual > 80) {
  console.log("Você está acima do limite de velocidade!");
} else {
  console.log("Você está dentro do limite de velocidade!");
}

// Exercicio 06 - problema 2 - if else

if (idade >= 18 && cnh == true) {
  console.log("Pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

//Exercicio 07 - loop While

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//Exercicio 08 - loop For

for (let i = 100; i >= 50; i--) {
  console.log(i);
}

// Exercicio 09 - loop For 2

for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(`Este número é par ${i}`);
  } else {
    console.log(`Este número é ímpar ${i}`);
  }
}

// Exercicio 10 - for loop 3

let num = 2;
let divisao = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisao++;
  }
}
if (divisao == 2) {
  console.log("Seu número é primo");
} else {
  console.log("Seu número não é primo");
}
