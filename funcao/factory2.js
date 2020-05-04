function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('Notebook', 6666.66))
console.log(criarProduto('iPad', 1234.12))
