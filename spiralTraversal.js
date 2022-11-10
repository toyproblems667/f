/**
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

 *    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 *
 * @function spiralTraversal
 * @param {Array<String>} matrix
 * @return {Array}
 */

const spiralTraversal = function(matrix) {
let result = [];
let arr1= matrix[0]
for(var i=0 ; i<arr1.length; i++){
  result.push(arr1[i])
}
let arr2= matrix[1]
let arr3= matrix[2]
for(var i=arr2.length ; i=0; i--){
  result.push(i)
}
for(var i=0 ; i<arr3.length; i++){
  result.push(arr3[i])
}
return result
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = spiralTraversal;
// // // // // // // // // //
