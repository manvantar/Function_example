/*This Method used to validate a Temparature within Freezing point
 * Boiling point of water
 * @param number is passed
 * @return true if 
*/
function validateTemparature(value, type) {
    if (type == 'celsius' || type == 'c' || type == 'C') {
        if (value >= 0 || value <= 100)
            return true;
    }
    if (type == 'farenheit' || type == 'f' || type == 'F') {
        value = (value - 32) * 5 / 9;
        return validateTemparature(value, 'c');
    }
    return false;
}
console.log(validateTemparature(30, 'celsius'));
console.log(validateTemparature(121, 'f'));
