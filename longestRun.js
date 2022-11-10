/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 *
 * @function longestRun
 * @param {String} string
 * @return {Array<[Number, Number]>}
 */

var longestRun = function (string) {
  var arr = [];
  let Split = string.split('');
  for(var i = 0; i<Split.length ; i++){
    for(var j=Split.length-1 ; j > 0 ; j--){
      if(Split[i] === Split[j]){
      arr.push(i)
      arr.push(j)
      }
    }
   }
   return arr.slice(0,2)
    }
  

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
const randomString = function (len) {
  let text = '';
  let possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = longestRun;
// // // // // // // // // //