prompt = require("prompt-sync")();

const idade = prompt("Qual sua idade?");

if(idade>17 && idade<69) {
    console.log("Você tem que votar")
} else if(idade<16) {
    console.log("Você não pode votar")
} else if(idade>15 && idade<18 || idade>70) {
    console.log("Vot opcional");
}
