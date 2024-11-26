console.log(typeof 10);
console.log(10 * 2 + 5);
console.log(2 % 2);
console.log(Math.pow(3, 2)); // potência
console.log(Math.sqrt(25)); // raiz quadrada

//exercicio 1 - String

console.log("String " + '"string"' + `${"template literals " + (1 + 1)}`);

//exercicio 2 - Number

console.log(2, 4.5, 5 + 65);

//exercicio 3 - boolean

if (5 > 10) {
  console.log("5 é maior que 10");
} else if (5 < 10) {
  console.log("5 é menor que 10");
} else if (5 == 10) {
  console.log("5 é igual a 10");
} else if (5 != 10) {
  console.log("5 não é igual a 10");
}

//exercicio 4 - Operador Lógico

if (19 - 30 < 17 && 19 - 29 > 10) {
  console.log("Condição verdadeira 1");
}
if (19 - 30 < 17 || 19 - 29 > 10) {
  console.log("Condição verdadeira 2");
}
if (!19 - 30 < 17) {
  console.log("Condição verdadeira 3");
}

//exercicio 5 - NaN

console.log(100 * "assds");
