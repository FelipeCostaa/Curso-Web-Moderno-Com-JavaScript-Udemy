// minha solução

function forEach2(aprovados) {
  for (let i = 0; i < aprovados.length; i++) {
    // console.log(i + 1, aprovados[i])
    console.log(`${i + 1}- ${aprovados[i]}`)
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

forEach2(aprovados)

// solução instrutor

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // a função de callback vai receber dois parametros, o primeiro é o
  console.log(`${indice + 1}- ${nome}`) // proprio elemento e o segundo é o indice do elemento que está sendo executado
})
