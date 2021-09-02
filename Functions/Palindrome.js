// function to check if the two numbers are Palindromes

const prompt = require('prompt-sync')();
function isPalindrome(number1, number2) {

    let reversedNumber = 0;
    let reverseNumber1 = 0;
    let temp1=number1;
    let temp2=number2;

    while (number1 > 0) {
        let remainder = number1 % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number1 = Math.floor(number1 / 10);
    }

    while (number2 > 0) {
        let remainder = number2 % 10;
        reverseNumber1 = reverseNumber1 * 10 + remainder;
        number2 = Math.floor(number2 / 10);
    }
     
    if (reversedNumber == temp1 && reverseNumber1==temp2) 
        return true;
    else
        return false;
}

let numberOne = Number(prompt("Enter first number : "));
let numberTwo = Number(prompt("Enter second number : "));

if (isPalindrome(numberOne, numberTwo))
    console.log("Two numbers are Palindromes");
else
    console.log("Two numbers are not Palindromes");