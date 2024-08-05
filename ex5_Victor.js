prompt = require("prompt-sync")();

let nome = prompt("Nome do produto: ");
let preco = parseFloat(prompt("Preço do produto: "));
let quant = parseFloat(prompt("Quantidade: "));
let imposto = parseFloat(1.18);
let precototal = parseFloat(preco*quant*imposto);
console.log("O preço total é de R$" + precototal);