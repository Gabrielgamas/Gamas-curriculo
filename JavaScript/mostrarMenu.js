const menuImg = document.querySelector(".cabecalho__img");
const menuTxt = document.querySelector(".cabecalho__menu");

menuImg.addEventListener("click", () => {
  menuTxt.classList.toggle("mostrarMenu");
  console.log(menuTxt);
});
