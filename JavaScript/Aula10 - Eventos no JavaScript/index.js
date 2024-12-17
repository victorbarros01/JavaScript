console.log(document.body.childNodes);
console.log(typeof document.body.childNodes[1].childNodes[0]);
console.log(
  document.body.childNodes[3].childNodes[3].childNodes[3].textContent
);

let a = document.createElement("a");

let titulo = document.getElementById("titulo");

let pai = titulo.parentNode;

a.textContent = "Novo link";

a.setAttribute("href", "#");

pai.replaceChild(a, titulo);
