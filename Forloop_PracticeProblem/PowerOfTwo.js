  
//For promting message and taking input from console.
const prompt = require("prompt-sync")();

let base = prompt("Enter the base number : ");
let exponent = prompt("Enter the exponent number : ");

let baseNumber = +base;
let exponentNumber = +exponent;

for (let i = 0; i <exponentNumber; i++) {
  console.log(base + " to the power of " + i + " is " + Math.pow(baseNumber, i));
}