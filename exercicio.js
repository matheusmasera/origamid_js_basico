function livro() {
  const nome = "Senhor dos Anéis".toUpperCase();
  const ano = 1954;
  const anosLancamento = 2050 - ano;
  const autor = "J. R. R. Tolkien";
  const creditos = nome + " por " + autor;

  return {
    nome,
    ano,
    anosLancamento,
    autor,
    creditos,
  };
}

console.log(livro().creditos);
