// 08) ​ Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo,
// ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota o
// novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma
// lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la
// irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu
// seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior
// pontuação aconteceu no sétimo jogo.)

let pontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
// let pontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function jogos(pontuacoes) {
  let piorJogo = 1
  let quebraDeRecords = 0
  let maiorDesempenho = 0
  let menorDesempenho = 9999
  let pontos = pontuacoes.split(", ") // deixara apenas os numeros
  let vetor = [maiorDesempenho, menorDesempenho]

  for (let i = 0; i < pontos.length; i++) {
    // console.log(pontos[i])
    if (pontos[i] > maiorDesempenho) {
      maiorDesempenho = pontos[i]
      quebraDeRecords++
    }
    else if (pontos[i] < menorDesempenho) {
      menorDesempenho = pontos[i]
      piorJogo = i + 1
    }
  }
  // console.log(quebraDeRecords, piorJogo)
  return [quebraDeRecords, piorJogo]
}

console.log(jogos(pontuacoes))
