// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\


/**
 * 1-Define a function called myTrueFun that returns true whenever its called.
 * @return {boolean}
 */
function myTrueFun(){
return true;
}



/**
 * 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
 * @param {any} input
 * @return {boolean}
 */
function color(input) {
if(input='string'){
	return true;
		return false;
	}
}

/**
 * 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
 * @param {number} number
 * @return {boolean}
 */
function isPrime(number) {
	if(number/number===1 && number/1===number){
		return true;
			} 
				return false;
			}



/**
 * 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
 * @param {number} x
 * @param {number} y
 */
function sameValue(x, y) {
if(x===y){
	return true;
	}return false; 
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.myTrueFun = myTrueFun; //
module.exports.color = color; //
module.exports.isPrime = isPrime; //
module.exports.sameValue = sameValue; //
// // // // // // // // // // // // // // //