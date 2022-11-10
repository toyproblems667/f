/**
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 * @function Array.prototype.isSubsetOf
 * @param {Array} arr - superset array
 * @this {Array} - subset array
 * @return {Boolean} - is subset ?
*/
Array.prototype.isSubsetOf = function (arr1,arr2) {
  console.log(arr1.every(elem => arr2.includes(elem)));
  // your code here
};


Array.prototype.isSubsetOf = function(arr1,arr2){
  for(var i=0 ; i< arr1.length ; i++){
    if(arr2.includes(arr1[i])){
      return true; 
    }
    return false;
  }
}
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/