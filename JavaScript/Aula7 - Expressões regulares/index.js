// Exercicio 01 - regex

const maiuscula = /([A-Z]+)\S/;

console.log(maiuscula.test("twate"));

// Exercicio 02 -

const finalID = /\d+ID$/;

console.log(finalID.test("24333535ID"));
console.log(finalID.test("ID12312434145"));

// Exercicio 03 -

const verificarMarca = /Marca:\s(Nike|Puma|Adidas|Asics)/;

console.log(verificarMarca.test("Marca: Puma"));

console.log(verificarMarca.test("Marca: Prada"));

// Exercicio 04 - Ip

const camposIp = /(\b(0|[1-9]|[1-9][1-9]|1[1-9][1-9]|2[0-4][0-9]|25[0-6])\b)/
  .source;
const ipRegex = new RegExp(
  `${camposIp}\.${camposIp}\.${camposIp}\.${camposIp}`
);

console.log(ipRegex);

console.log(ipRegex.test("192.168.0.255"));

// Exercicio 05 -

// const verificarUsuario = /\b(\w|\w[_]|\w[-]){3,16}\b/;
const verificarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(verificarUsuario.test("user_name"));

console.log(verificarUsuario.test("UsuarioAsasd___1234"));
