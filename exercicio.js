function livro(nome, ano, autor) {
  const objeto = {
    nome: nome.toUpperCase(),
    totalAno: 2050 - ano,
    creditos: nome + " por " + autor,
  };

  return objeto;
}

const retornando = livro("Senhor dos Aneis", 1954, "J. R. R. Tolkien");

console.log(retornando);
