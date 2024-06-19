/*
Define a function `isFive` that takes in a number parameter. It should return
a string of 'is five' if the number is equal to 5 and `null` if it is not.
*/

// Your code here 
// Summary: write a function that takes a number and returns a string "is five" fi the number is equal to 5 and "null" if it is not.
/*
1. Declare a function called "isFive"
2. it needs to take number parameter
3. it needs to evaluate if the number is 5 exactly
4. it needs to return "is five" if the number given is a 5
5. it needs to return null otherwise
*/

function isFive(num) {
    if (num === 5){
        return "is five";
    } else {
        return null;
    }
}
 console.log (isFive(4));
 console.log (isFive(5));
 console.log (isFive("Hamburger"));

// console.log(isFive(5));      // => 'is five'
// console.log(isFive(13));     // => null
// console.log(isFive("apple")) // => null




/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isFive;
