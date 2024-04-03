let input = require("fs").readFileSync(0, "utf8");
let lines = input.split("\n");

// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

let nome = lines.shift();
let salario = parseFloat(lines.shift());
let montante = parseFloat(lines.shift());

salario += montante * 0.15;

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);
