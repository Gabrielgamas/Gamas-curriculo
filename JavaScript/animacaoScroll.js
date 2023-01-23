const elementosAnimacao = document.querySelectorAll("[data-anime]");
const classeAnimacao = "animacao";

function animacaoScroll() {
  const topo = window.pageYOffset + (window.innerHeight * 3) / 4;
  elementosAnimacao.forEach(function (e) {
    if (topo > e.offsetTop) {
      e.classList.add(classeAnimacao);
      console.log("foi");
    } else {
      e.classList.remove(classeAnimacao);
    }
  });
}

animacaoScroll();
if (elementosAnimacao.length) {
  window.addEventListener("scroll", function () {
    animacaoScroll();
  });
}
