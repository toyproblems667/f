/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 *
 *    @function quicksort
 *    @param {Array<Number>} array
 *    @return {Array<Number>}
 */
var quicksort = function(array) {
let right = array.length-1;
let left = array[0];

let pivot = arr[Math.floor(right+left /2)]

    while (arr[left] < pivot) {
       left++
    };
    while (arr[right] > pivot) {
       right--
    };  
    let i = arr[left]
    arr[left] = arr[right]
    arr[right]= i 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = quicksort; // //
// // // // // // // // // /
