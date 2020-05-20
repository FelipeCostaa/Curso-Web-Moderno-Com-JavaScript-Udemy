const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // a função de callback vai receber dois parametros, o primeiro é o
  console.log(`${indice + 1}- ${nome}`) // proprio elemento e o segundo é o indice do elemento que está sendo executado
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados);

// outra maneira de fazer
aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}- ${nome}`)
  console.log(array)
})
