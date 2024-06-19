/*
Define a function isValidSubStr that takes in two string parameters. The
function should return a string of "VALID" if the second string is part of the
first string regardless of the casing of the characters. Otherwise it should
return "INVALID".
*/

// Your code here 
/*
SUMMARY: write a function that takes two strings and will return a string of "Valid" if the second string is part of the first string. reguardless of character case. Otherwise it should return invalid.
1. write a function called "isValidSubStr"
2. it needs to take 2 string parameters
3. there needs to be an expression or function to evaluate if str2 is contained in str1.
4. it needs to ignore the character case
5. if str2 is in str1 then return a string of "VALID"
6. Otherwise return a string of "INVALID"
*/

function isValidSubStr(str1, str2) {
    let str1Cap = str1.toUpperCase();
    let str2Cap = str2.toUpperCase();
    
    if (str1Cap.includes(str2Cap)) {
        return "VALID";
    } else {
        return "INVALID";
    }s
}

console.log(isValidSubStr("JOY", "joy"));                     // => 'VALID'
console.log(isValidSubStr("The cat jumped!", "he cat jump")); // => 'VALID'
console.log(isValidSubStr("Time to program", "time"));      // => 'VALID'
console.log(isValidSubStr("happy", "happiness"));             // => 'INVALID'
console.log(isValidSubStr("Chewy", "cheW"));                     // => 'VALID'
console.log(isValidSubStr("Gummie BEARS", "gUm")); // => 'VALID'
console.log(isValidSubStr("Sandwich Thief", "sanD"));      // => 'VALID'
console.log(isValidSubStr("I'm FiNe!", "inE"));             // => 'INVALID'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isValidSubStr;
