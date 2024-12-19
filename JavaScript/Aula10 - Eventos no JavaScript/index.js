let btn = document.querySelector("button");
let div = btn.parentNode;

btn.addEventListener("click", function (e) {
  alert("Hello World!");
  e.stopPropagation();
});

div.addEventListener("click", function (e) {
  alert(`Eu sou a ${div}`);
});

window.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    console.log("apertou a tecla Q");
  }
});
