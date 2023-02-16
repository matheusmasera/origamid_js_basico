const botao = document.querySelector(".botao");
const total = document.querySelector("div");

console.log(botao);

if (botao) {
  
  function somaBotao() {
    const somaDiv = total;
    const adicionar = Number(somaDiv.innerHTML) + 1;
    somaDiv.innerText = adicionar;

    if (somaDiv.innerHTML >= 10) {
      somaDiv.innerHTML = "pare";
    }
  }
  somaBotao();
}

botao.addEventListener("click", somaBotao);
