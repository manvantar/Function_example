/*This Method used to validate a numbe Palindrome or not
 * @param number is passed
 * @return true if 
*/
function validatePalindrome(number) {
    var tempNumber = number;
    var newNumber = 0;
    while (number > 0) {
        remainder = parseInt(number % 10);
        newNumber = newNumber * 10 + remainder;
        number = parseInt(number / 10);
    }
    if (tempNumber == newNumber) {
        return true;
    }
    return false;
}

/*This Method used to validate a numbe Prime or not
 * @param number is passed
 * @return true if 
*/
function isPrime(number) {
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
const prompt = require('prompt-sync')();
var number = parseInt(prompt('Please enter the number to check palindrome: '));
var isPalindrome = validatePalindrome(number);
if (isPalindrome == true)
    console.log("Its a palindrom")
else
    console.log("Its not a palindrom")
if (isPalindrome == true) {
    var isPrime = isPrime(number);
    if (isPrime == true)
        console.log("Its a prime");
    else
        console.log("Its not a prime")
}