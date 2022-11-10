/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  * @function deepEquals
  * @param {Object<any>} apple - first object to compare
  * @param {Object<any>} orange - second object to compare with the first object
 *  @return {boolean}
  */
var deepEquals = function(apple, orange) {
  if(JSON.stringify(apple) === JSON.stringify(orange)){
    return true
  }
  return false;
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = deepEquals;
// // // // // // // // // //