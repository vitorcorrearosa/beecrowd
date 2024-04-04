let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um valor inteiro N.

// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

let segundos = parseInt(lines.shift());
let horas = parseInt(segundos / 3600);

segundos %= 3600;

let minutos = parseInt(segundos / 60);

segundos %= 60;

console.log(`${horas}:${minutos}:${segundos}`);
