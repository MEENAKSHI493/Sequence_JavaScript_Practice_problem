//For promting message and taking input from console.
const prompt = require("prompt-sync")();
console.log("Imagine a number between 0 and 100");
low = 0;
high = 100;
while (low <= high) {
  mid = Math.trunc((low + high) / 2);
  console.log("Press '1' for YES and '0' for NO");
  let choice = parseInt(prompt(`Is ${mid} your magic number : `));

  if (choice == 1) {
    console.log(`${mid} is magic number`);
    break;
  } else {
    let ch = parseInt(prompt(`Is number greater than ${mid} : `));
    if (ch == 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
if (low > high) {
  console.log("Your number is not between 0 and 100");
}