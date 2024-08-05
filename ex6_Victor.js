prompt = require("prompt-sync")();

let nome = prompt("Nome do produto: ");
let preco = parseFloat(prompt("Preço do produto: "));
let quant = parseFloat(prompt("Quantidade: "));
let desconto = parseFloat(prompt("Desconto: "));
let descontodecimal = parseFloat(1-(desconto/100));
let precototal = parseFloat(preco*quant);
let precodesconto = parseFloat(precototal*parseFloat(descontodecimal));
console.log("O preço total é de R$" + precototal + ", porém com seu desconto de " + parseFloat(desconto) + "% sua compra ficará por R$" + precodesconto );