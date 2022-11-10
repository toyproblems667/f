/**
 * 1 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 * followed by a number starting from zero(solve it using while loop).
 * example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */
function reverseStr(str){
	var counter=0 
	while(var i=0; i<str.length ; i++){
		counter= counter+1

	}
return counter+str


}


/**
 * 2 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */
function sameLength(array) {
	for(var i=0; i<array.length;i++){
		if(array[i].length=== array[i].length ){


		}
		return array 
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.reverseStr = reverseStr; //
module.exports.sameLength = sameLength; //
// // // // // // // // // /