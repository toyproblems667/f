/**
 * Balanced Parenthesis
 * Given a string, return true if it contains balanced parentheses ().
 * isBalanced("(x + y) - (4)")	// true
 * isBalanced("(((10 ) ()) ((?)(:)))")	// true
 * isBalanced("(50)(")	// false
 * isBalanced("") //	true
 *
 * @function isBalanced
 * @param {String} str
 * @return {Boolean}
*/
const isBalanced = function (str) {
    var arrayOf = [];
    for(var i= 0 ; i<str.length ; i++){
        if(str[i] === '(' || str[i] === ')' ) {
            arrayOf.push(str[i])
            console.log(arrayOf);
        }
    }
    if(arrayOf.length % 2 === 0){
        return true
    }
    return false
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = isBalanced;
// // // // // // // // // //


