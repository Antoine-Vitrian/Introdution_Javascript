prompt = require("prompt-sync")();

let Celsius = parseFloat(prompt("Digite a temperatura em °C: "));
let Farenheit = parseFloat(Celsius*9/5+32);
console.log( + Celsius + "°C  é equivalente a " + Farenheit + "°F");