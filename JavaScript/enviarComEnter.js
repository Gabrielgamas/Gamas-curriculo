document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const botaoEnviar = document.querySelector(".formulario__botao");
    botaoEnviar.click();
    console.log("enviou");
  }
});
