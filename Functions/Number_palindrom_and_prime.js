//a.To Check number is prime or not
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter the number: "));



if(isPrime(number))
    console.log("Entered number is prime");
 else
    console.log("Entered number is not a prime")
//To check number is prime or not
function isPrime(number) {

    let flag=true;
    for(i = 2; i <= number - 1; i++)
    if (number % i == 0) {
        flag = false;
        break;
    }
      
    // Check and display alert message
if (flag == true)
   return true
else
    return false;

}

console.log("*************Palindrome or not*************************");
if(isPalindrome(number))
    console.log("Entered number is Palindrome");
else
    console.log("Entered number is not Palindrome");


function isPalindrome(chkPalnumber)
{
    let rem=0,rev=0,temp=0;
    temp=chkPalnumber;
    while(chkPalnumber>0)
    {
        rem=chkPalnumber%10;
        rev=rev*10+rem;
        chkPalnumber=Math.floor(chkPalnumber/10);
    }
   
    if(temp==rev)
     return true;
    else
      return false;
}


console.log("************Palindrome prime or not******************************");

if(isPalPrimeNumber(number))
   console.log("Enter number is Palindrome prime")
else
   console.log("Entered number is not a Palindrome prime");
//To check number is Palindrome prime or not
function isPalPrimeNumber(palNum){
    let temp=0,rem=0,i,count=0;
    let sum=0;
    
    //Store the number in temporary variable
    temp=palNum;
    for(i=1;i<=temp;i++){
        if(temp%i==0)
        {
          count++;//increment counter when the reminder is 0  
        }       
    }
    while(palNum > 0)  
    {  
        // get last digit of the number  
        rem = palNum%10;  
          
        // store the digit last digit  
        sum = sum*10+rem;   
          
        // extract all digit except the last  
        palNum =  Math.floor(palNum / 10);  
        
    }  

      //check whether the number is palindrome and Prime or not  
      if(temp == sum && count == 2)  
         return true;  
       else  
         return false;  
      
    
}