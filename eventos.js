const botao = document.querySelector(".botao");

function mostrar(){
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
  console.log(texto);
}

botao.addEventListener("click", mostrar);
