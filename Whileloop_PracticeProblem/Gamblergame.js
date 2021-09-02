let balance = 100;
let BET = 1;
let winCount = 0;
let loseCount = 0;
let flag = true;
while (flag) {
  let gameResult = Math.floor(Math.random() * 2);
  if (gameResult == 1) {
    balance = balance + BET;
    winCount++;
  } else if (gameResult == 0) {
    balance = balance - BET;
    loseCount++;
  }
  if (balance == 0 || balance == 200) {
    flag = false;
  }
}
console.log("Balance    : " + balance);
console.log("Total Won  : " + winCount);
console.log("Total Lose : " + loseCount);