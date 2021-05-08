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

const prompt = require('prompt-sync')();
var number = parseInt(prompt('Please enter the number to check palindrome: '));
var result=validatePalindrome(number);
console.log(result);
