function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

// para tratar um erro usar a função catch

falarDepoisDe(5, 'Batatinha')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
