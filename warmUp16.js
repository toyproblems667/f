// - create a data model to represent your classmates
// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.
// - create an array to hold the classmates that you created.
// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
// - calculate the number of male friends that your class have by writing a function called nbOfMale.
// - Write a function searchMates that, given a query and an array of Mates,
//   searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function makeClassmate (name,gender,number,average,pins)
return {
	name: name;
	gender: gender;
	number: number;
	average: average;
	pins: rpins
}
var classmate1=makeClassmate('aziz','M', 7, 19, 'red')
var classmate2=makeClassmate('khawla','W', 6, 17, 'blue')
var classmate3=makeClassmate('hsin', 'M', 10 , 18 , 'yellow')

var classmates= [classmate1,classmate2,classmate3]

function displayFriend(classmate){
	return classmate.name + ' is the number ' + classmate.number + ' have an average of ' + classmate.average + ' and got a ' + classmate.pins
 + ' pin '
}

function addFriend(mate){
	 return classmates.push(mate)
}
function nbOfMale(classmates){
	var arr= []
     for (var i=0; i<classmates.length;i++){
     	if(classmates.gender=== 'M'){
     		return arr.push(classmates.name)
     	}
     }
}

function searchMates(query,classmates){
	for (var i=0; i<classmates.length; i++){
		  var Math.floor(Math.random() * Math.floor(19));
		  if

	}
}