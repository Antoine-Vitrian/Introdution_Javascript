prompt = require("prompt-sync")();

let valorhora = parseFloat(prompt("Valor da hora: R$"));
let horastrabalhadas = parseInt(prompt("Horas trabalhadas p/dia: "));
let semanal = console.log("Salário semanal: R$" + (valorhora*horastrabalhadas*7));
let mensal = console.log("Salário mensal: R$" + (valorhora*horastrabalhadas*28));
