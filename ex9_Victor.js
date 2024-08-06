prompt = require("prompt-sync")();

let valortotal = parseFloat(prompt("Preço do produto: R$"));
let nparcelas = parseInt(prompt("N° de parcelas: "));
let juros = parseFloat((prompt("Juros: ")) + ("%"));
let calculojuros = parseFloat(juros/100);
let precofinal = parseFloat(valortotal*((1+calculojuros)**nparcelas));
let arredondado = Math.round(precofinal*100)/100;
console.log("Preço com juros: R$" + arredondado);
let valorparcela = parseFloat(arredondado/nparcelas);
let valorparcelaarrendodado = Math.round(valorparcela*100)/100;
console.log("Valor da parcela: R$" + valorparcelaarrendodado);