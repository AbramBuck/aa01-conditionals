/*
Define a function oddNumOnly that takes in a number parameter and returns the
number if it is odd and returns null otherwise.
*/

// Your code here 

//Summary: write a function that takes in a number and returns if the number is odd. Otherwise return null
/**
 1. Declare a function called "oddNumOnly"
 2. it needs to take a number parameter
 3. it needs to check if the number is odd
 4. it needs to return the number if it is odd
 5. it needs to return null if it isn't odd 
 */

function oddNumOnly(numToCheck) {
    let checkIfOdd = numToCheck % 2;
    if (checkIfOdd !== 0 ) {
        return numToCheck;
    } else {  
        return null;
    }
}

 console.log(oddNumOnly(2));   // => null
 console.log(oddNumOnly(5));   // => 5
 console.log(oddNumOnly(-17)); // => -17
 console.log(oddNumOnly(0));   // => null
 console.log(oddNumOnly(3));    // => 3
 console.log(oddNumOnly(4));  // => null
 console.log(oddNumOnly(6));  // => null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddNumOnly;
