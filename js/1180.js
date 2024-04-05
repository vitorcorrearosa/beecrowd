let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Faça um programa que leia um valor N. Este N será o tamanho de um vetor X[N]. A seguir, leia cada um dos valores de X, encontre o menor elemento deste vetor e a sua posição dentro do vetor, mostrando esta informação.

// Entrada
// A primeira linha de entrada contem um único inteiro N (1 < N < 1000), indicando o número de elementos que deverão ser lidos em seguida para o vetor X[N] de inteiros. A segunda linha contém cada um dos N valores, separados por um espaço. Vale lembrar que nenhuma entrada haverá números repetidos.

// Saída
// A primeira linha apresenta a mensagem “Menor valor:” seguida de um espaço e do menor valor lido na entrada. A segunda linha apresenta a mensagem “Posicao:” seguido de um espaço e da posição do vetor na qual se encontra o menor valor lido, lembrando que o vetor inicia na posição zero.

let [N, X, menorValor, posicao] = [lines.shift(), lines, Infinity, 0];

X = X[0].split(" ").map(Number);

X.forEach((element, index) => {
  element < menorValor
    ? ((menorValor = element), (posicao = index))
    : menorValor;
});

console.log(`Menor Valor: ${menorValor}
Posicao: ${posicao}`);

// outra solução muito boa

// const entrada = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
// entrada.shift();
// const x = entrada[0].split(' ').map(x => Number(x));

// console.log(`Menor valor: ${Math.min(...x)}`);
// console.log(`Posicao: ${x.indexOf(Math.min(...x))}`);
