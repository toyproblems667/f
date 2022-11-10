/**
 * Alphabet Inventory
 * Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.
 * alphaCount("aBc", "aabbccdd") // "a:2,b:2,c:2"
 * alphaCount("x", "Racer X is my friend") //	"x:1"
 * alphaCount("123", "o hai") // "no matches"
 *
 * @function alphaCount
 * @param {String} alphabet
 * @param {String} text
 * @return {String}
 *
*/
var alphaCount = (alphabet, text) => {
    var count = 0;
    var obj = {};
    var place;
    for (var i = 0; i < text.length; i++) {
        place = text.charAt(i)
         obj[place]= count
        if (!count) {
            count = 1
        }
       count++
    }

    return obj
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = alphaCount;
// // // // // // // // // //