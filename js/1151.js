let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 46).

// Saída
// Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.

let [N, sequencia, num] = [parseInt(lines), [], 0];

for (let i = 0; i <= N; i++) {
  if (num === 0) {
    sequencia.push(num);
    num++;
  } else if (num < 2) {
    sequencia.push(num);
    num += sequencia[i - 1];
  } else {
    sequencia.push(num);
    num += sequencia[i - 1];
  }
}

console.log(sequencia.join(" ")); // transforma o array em string, subistituindo a virgula por um espaço em branco.
