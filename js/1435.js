let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Escreva um algoritmo que leia um inteiro N (0 ≤ N ≤ 100), correspondente a ordem de uma matriz M de inteiros, e construa a matriz de acordo com o exemplo abaixo.

// Entrada
// A entrada consiste de vários inteiros, um valor por linha, correspondentes as ordens das matrizes a serem construídas. O final da entrada é marcado por um valor de ordem igual a zero (0).

// Saída
// Para cada inteiro da entrada imprima a matriz correspondente, de acordo com o exemplo. Os valores das matrizes devem ser formatados em um campo de tamanho 3 justificados à direita e separados por espaço. Após o último caractere de cada linha da matriz não deve haver espaços em branco. Após a impressão de cada matriz deve ser deixada uma linha em branco.

let [N, vetor, matriz] = [parseInt(lines.shift()), [], []];

while (N !== 0) {
  matriz = new Array(N);
  for (let i = 0; i < N / 2; i++) {
    vetor = new Array(N);
    for (let j = 0; j < N / 2; j++) {
      const value = Math.min(i, j) + 1;
      vetor[j] = value < 10 ? ` ${value}` : `${value}`;
      vetor[N - 1 - j] = vetor[j];
    }
    matriz[i] = ` ${vetor.join("  ")}`;
    matriz[N - 1 - i] = matriz[i];
  }
  console.log(`${matriz.join("\n")}`);

  N = parseInt(lines.shift());
  console.log("");
}
