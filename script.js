const opcao1Button = document.getElementById("opcao1");
const opcao2Button = document.getElementById("opcao2");
const resultadoTexto = document.getElementById("resultado");

opcao1Button.addEventListener("click", () => {
  resultadoTexto.textContent = "Você segue o caminho esquerdo e encontra um rio mágico!";
});

opcao2Button.addEventListener("click", () => {
  resultadoTexto.textContent = "Você segue o caminho direito e descobre uma caverna escura!";
});

  