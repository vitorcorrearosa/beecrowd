let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
// Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

// Entrada
// A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
// Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

// Saída
// Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.

let N = parseInt(lines.shift());
let In = 0;
let out = 0;

for (N; N > 0; N--) {
  let X = parseInt(lines.shift());
  let intervalo = X >= 10 && X <= 20;

  switch (intervalo) {
    case true:
      In++;
      break;
    case false:
      out++;
      break;
  }
}

console.log(`${In} in`);
console.log(`${out} out`);
