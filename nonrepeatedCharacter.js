/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
var firstNonRepeatedCharacter = function (string) {
    for(var i=0 ; i<string.length; i++){
    if(string.indexOf(string[i]) === i && string.indexOf(string[i],i+1) === -1){
      console.log(string[i])
    return string[i]
    }
    }
    return '';
    }
  // TODO: your solution here




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
  module.exports = firstNonRepeatedCharacter;
// // // // // // // // // //