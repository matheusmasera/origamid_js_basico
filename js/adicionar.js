const botao = document.querySelector(".botao");
const total = document.querySelector("div");

function somaBotao() {
  const somaDiv = total;
  const adicionar = Number(somaDiv.innerText) + 1;
  if (adicionar < 10) {
    somaDiv.innerText = adicionar;
  } else {
    console.log("não é possível mais adicionar");
  }
}

if (botao) {
  botao.addEventListener("click", somaBotao);
}
