prompt = require("prompt-sync")();

let anoatual = new Date().getFullYear();
let nascimento = prompt("digite ano de nascimento: ");
let idade = parseInt(anoatual) - parseInt(nascimento)
console.log("Você tem " + idade);
