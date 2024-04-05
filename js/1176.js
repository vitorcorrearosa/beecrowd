let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Faça um programa que leia um valor e apresente o número de Fibonacci correspondente a este valor lido. Lembre que os 2 primeiros elementos da série de Fibonacci são 0 e 1 e cada próximo termo é a soma dos 2 anteriores a ele. Todos os valores de Fibonacci calculados neste problema devem caber em um inteiro de 64 bits sem sinal.

// Entrada
// A primeira linha da entrada contém um inteiro T, indicando o número de casos de teste. Cada caso de teste contém um único inteiro N (0 ≤ N ≤ 60), correspondente ao N-esimo termo da série de Fibonacci.

// Saída
// Para cada caso de teste da entrada, imprima a mensagem "Fib(N) = X", onde X é o N-ésimo termo da série de Fibonacci.

let [T, N, sequencia, num] = [lines.shift(), lines, [], 0];

for (let i = 0; i <= 90; i++) {
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

for (let j = 0; j < N.length; j++) {
  console.log(`Fib(${N[j]}) = ${sequencia[N[j]]}`);
}
