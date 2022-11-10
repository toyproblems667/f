/**
 * You're given an array every number between 1 and 100,000, except one integer
 * is missing. The numbers are not guaranteed to be consecutive, either! Write a
 * function to detect which number is missing.
 *
 * Extra credit: Refactor your solution to take O(n) time.
 */

var findMissingNumber = function(array) {
  let sorted = array.sort()
  let n = array.length
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++){
      total -= array[i];
    }  
    return total;
}
  // Your code here


/**
 * Here's a helpful array with every number between 1 and 100000, excluding one
 * random number.
 */
var testArray = _.shuffle(_.range(100000)).slice(1);
