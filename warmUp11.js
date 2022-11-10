// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var arr1=[khawla,molka,houda]
var arr2=[aziz,mehdi,kamel,slim]
var arr3=[wajdi,ali,ilyes]


/**
 * 2-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */
function midElement(array) {
	str= ''
	


}


/**
 *
 * 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function multipleEvenIndexes(array) {
	 var arr=[]
	for(i=0;i<array.length;i++){
      if(array[i]%2 === 0 ){
      	arr.push(array[i]*2)

      }
      return arr
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.midElement = midElement; //
module.exports.multipleEvenIndexes = multipleEvenIndexes; //
// // // // // // // // // /