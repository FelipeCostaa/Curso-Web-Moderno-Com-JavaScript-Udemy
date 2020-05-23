const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function (p) { // no filter o array retornado é do mesmo tamanho ou menor, nunca maior
//   return p.preco > 2400

// if (p.fragil == false) {
//   return produtos
// }
// }))

// retornar apenas produtos frageis
// e produtos maiores que R$500

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
