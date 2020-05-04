// 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3) {
    return 'Equilatero'
  }
  if (lado1 == lado2 || lado3 == lado1 || lado2 == lado3) {
    return 'Isosceles'
  }
  else {
    return 'Escaleno'
  }
}

console.log(triangulo(4, 4, 4));
console.log(triangulo(2, 3, 3));
console.log(triangulo(2, 3, 4));
