// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************



/**
 * 1- Using recursion Write a JavaScript function called (greatestCommonDivisor) to find the greatest common divisor (gcd) of two positive numbers.
 * Take into account handling when one of the inputs is not a number
 *
 * @param {number} num1
 * @param {number} num2
 * @return {boolean|number}
 */
function greatestCommonDivisor(num1, num2){
	var gcd=''
for(i=1;i<num1.length && i<num2.length; i++){
	if(! num2){
		return num1;
	}
	return gcd(num2,num1%num2)

};
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************




/**
 * 2-Write a function called (sum) that accepts two numbers as parameters, and sum them together but without summing them together directly
 * you can only add one at each summation, you'll need to use recursion in this.
 *
 *
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function sum(x,y){
	function callFor(x){
		x+1
	}
	return callFor(x)+y-1
	





// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.greatestCommonDivisor = greatestCommonDivisor; //
module.exports.sum = sum; //
// // // // // // // // // /
