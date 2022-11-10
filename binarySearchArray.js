/**
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 *
 * @function binarySearchArray
 * @param {Array<Any>} array
 * @param {Array<Any>} target
 * @return {Number}
 */

const  binarySearchArray = function (array, target) {
    for(var i=0 ; i<array.length ; i++){
        if(array[i] === target){
            return i;
        }
    }
};

var binarySearch = function(array,target){
    var start = 0;
    var end = array.length-1;
    var middle = Math.floor((start+end) / 2)
    if(array[middle] === target){
        return middle; // i couldn't return the index
    }
    else if(array[middle] < target){
        array.slice(1,middle.length);
    }
else{
    array.slice(1,middle.length-1);
}
}
// everytime we don't find the target we are looking for we slice the side that it is useless until we reach the targeted number;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = binarySearchArray;
// // // // // // // // // //
