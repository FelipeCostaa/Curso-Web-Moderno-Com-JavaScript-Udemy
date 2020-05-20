const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elementos no inicio do array
console.log(pilotos)

// splice pode adicionar ou remover elementos no array
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicinar
console.log(pilotos)

pilotos.splice(3, 1) // remove 'massa' do array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
