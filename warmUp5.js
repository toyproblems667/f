/**
 * 1
 *  Write a function named greaterNum that:
 *   - takes 2 arguments, both numbers.
 *   - returns which number is the greater (higher) number.
 *  ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
 *
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
function greaterNum(x, y) {
	if(x<y){
		return 'the' + " " + 'greater' + " "  + 'number' + " " + 'of' + " " + x + " " + 'and' + " " + y + " " + 'is' + " " + y
 	}
   if(x>y){
   	return 'the' + " " + 'greater' + " "  + 'number' + " " + 'of' + " " + x + " " + 'and' + " " + y + " " + 'is' + " " + x
   }
}


/**
 * 2) Write a function named isEven using  for loop that
 * -  iterate from x to y.
 * -  return array contain the even values,
 * ex:  isEven(1,10) => [2,4,6,8,10]
 *
 * @param {number} x
 * @param {number} y
 * @return {Array<number>} result
 */
function isEven(x, y) {
	var EvenNum=[]
	for(var i=0;x<y;i=i+2){
		EvenNum= EvenNum[i]/2===0 + EvenNum 
		return EvenNum
	}

}




/**
 *  3 write a function named sum that
 *  - Use a while loop to add up the numbers from x to y.
 *  ex sum(1,5) => 15
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function sum(x, y) {
var sumOf=0
var i=0
while(x<y){
	i++
	sumOf=sumOf+sumOf[i]
	return sumOf

	

}
}



/**
 *
 * 4) Write a function named factorial that
 * -  Use Recursion to calculate the factorial of a number
 * -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
 * - 5! = 5*4*3*2*1 = 120
 * ex : factorial(5) => 120
 *
 * @param {number} n
 * @return {number}
 */
function factorial(n) {
	if(n>=0){
		return 
	}
	}



/**
 * 5) write a function named decimals
 * the function will format a number up to specified decimal places
 * the function will return a string
 * if the parameters not a number return false
 * ex :
 *      decimals(2100, 'a') ==> false
 *      decimals('a', 5) ==> false
 *      decimals(2.100212, 2) ==> '2.10'
 *      decimals(2.100212, 3) ==> '2.100'
 *      decimals(2100, 2) ==> '2100.00'
 *
 * @param {number} number
 * @param {number} decimalPlaces
 * @return {string|boolean}
 */
function decimals(number, decimalPlaces) {

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.greaterNum = greaterNum; //
module.exports.isEven = isEven; //
module.exports.sum = sum; //
module.exports.factorial = factorial; //
module.exports.decimals = decimals; //
// // // // // // // // // // // // // // //
