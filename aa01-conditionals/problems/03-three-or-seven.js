/*Define a function threeOrSeven that takes in a number parameter and returns
3 if the number is divisible by 3, 7 if the number is divisible by 7, and
21 if the number is divisible by both 3 and 7. Otherwise the function should
return the original number.
*/

// Your code here 
/*SUMMARY: write a function that takes in a number and returns 3 if the number is divisible by 3, 
returns 7 if the number is divisible by 7, returns 21 if the number is divisible by 3 and 7,
otherwise it just returns the original number.

1. declare a function named "threeOrSeven"
2. it needs to take in a number parameter
3. there needs to be an expression that checks if the number is divisibile by 3
4. If it is then it needs to return 3
5. there needs to be an expression that checks if the number is divisibile by 7
6. If it is then it needs to return 7
7. there needs to be an expression that checks if the number is divisibile by both 3 and 7
8. If it is then it needs to return 21
9. there needs to be an expression that checks if the number is divisible by any of the previous 3 expressions and if not return the original number 
 */

function threeOrSeven(numToCheck) {
    //if it is a interger it is divisible if it is a decimal fraction it is not
    if (numToCheck % 3 === 0 && numToCheck % 7 === 0 ) {
        return 21;
    } else if ( numToCheck % 7 === 0 ) {
        return 7;
    } else if ( numToCheck % 3 === 0 ) {
        return 3;
    } else {
        return numToCheck;
    }
}

/* Failed Attempt

    if (Number.isInteger(numToCheck / 3)) {
        return 3;
        console.log("It is divisible by 3."); 
    } else if (Number.isInteger(numToCheck / 7)) {
        return 7;
        console.log("It is divisible by 7."); 
    } else if (Number.isInteger(numToCheck / 3) && Number.isInteger(numToCheck / 7)) {
        return 21;
        console.log("It is divisible by 3 & 7. :)"); 
    } else {
        return numToCheck;
        console.log("it isn't divisible by 3 or 7. :(")
    }
}
*/

console.log(threeOrSeven(3));   // => 3
console.log(threeOrSeven(15));  // => 3
console.log(threeOrSeven(7));   // => 7
console.log(threeOrSeven(14));  // => 7
console.log(threeOrSeven(21));  // => 21
console.log(threeOrSeven(-42)); // => 21
console.log(threeOrSeven(100)); // => 100
console.log(threeOrSeven(0));   // => 0
console.log(threeOrSeven(-20)); // => -20
console.log(threeOrSeven(-21));  // => -21


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeOrSeven;
