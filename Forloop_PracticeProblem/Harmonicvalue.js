  
//For promting message and taking input from console.
const prompt = require("prompt-sync")();

let userNumber = prompt("Enter number to find harmonic value : ");
let number = +userNumber;

let harmonic = 0;

for (let i = 0; i <= number; i++) {
  harmonic += 1 / i;
  console.log("\nHarmonic " + i + ": " + harmonic);
}