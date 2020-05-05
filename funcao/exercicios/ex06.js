// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e
// tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o
// regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  simples = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
  console.log(`R$ ${simples.toFixed(2).toString()}`)
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  composto = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
  console.log(`R$ ${composto.toFixed(2).toString()}`)
}

jurosSimples(100, 0.1, 2)
jurosCompostos(100, 0.1, 2)
