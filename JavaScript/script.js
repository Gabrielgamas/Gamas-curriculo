const menuCor = document.querySelector(".cabecalho__fixo");

function alterarCor() {
  menuCor.classList.toggle("ativo", scrollY > 50);
}

window.addEventListener("scroll", alterarCor);
