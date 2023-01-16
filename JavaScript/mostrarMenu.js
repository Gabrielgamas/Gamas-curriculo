const menuImg = document.querySelector(".cabecalho__img");
const menuTxt = document.querySelector(".cabecalho__menu");
const todoOProjeto = document.querySelectorAll("section");
console.log(todoOProjeto);
menuImg.addEventListener("click", () => {
  menuTxt.classList.toggle("mostrarMenu");
  console.log(menuTxt);
});

for (const todos of todoOProjeto) {
  todos.addEventListener("click", () => {
    if (menuTxt.classList.contains("mostrarMenu")) {
      menuTxt.classList.remove("mostrarMenu");
    }
  });
}
