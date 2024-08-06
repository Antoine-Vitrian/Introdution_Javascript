prompt = require("prompt-sync")();

let valortotal = parseFloat(prompt("Preço do produto: R$"));
let nparcelas = parseInt(prompt("N° de parcelas: "));
let valorparcela = parseFloat(console.log("Valor da parcela: R$" + valortotal/nparcelas));