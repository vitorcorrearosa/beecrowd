let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.

// Entrada
// O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.

// Saída
// Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, inclusive ambos se for o caso.

let [X, Y, valores, soma, condicao] = [
  parseInt(lines.shift()),
  parseInt(lines.shift()),
  [],
  0,
  () => (X % 13 !== 0 ? valores.push(X) : valores), // armazenando a condição em uma variavel para não repetir código
];

if (X < Y) {
  for (X; X <= Y; X++) {
    condicao();
  }
} else if (X > Y) {
  for (X; X >= Y; X--) {
    condicao();
  }
}

for (i = 0; i < valores.length; i++) {
  soma += valores[i];
}

console.log(soma);
