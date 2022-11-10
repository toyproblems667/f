/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
 *
 *
 *
 * @function longestPalindrome
 * @param {String} string
 * @return {String}
*/
const longestPalindrome = function (string) {
    const str = string.split('')
  for(var i=0; i<str.length; i++){
    const longestWord= str[0]
     if(str[i].length > longestWord.length) {
         longestWord = str[i]
     }
    }
    return longestWord
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = longestPalindrome;
// // // // // // // // // //
