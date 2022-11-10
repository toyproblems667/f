/**
 * Military Time
 * Given a string that represents time in hours and minutes, convert the string to military time.
 * Examples:
 * toMilitary("3:00pm") // "15:00"
 * toMilitary("9:15am") // "09:15"
 * toMilitary("12:00am") // "00:00"
 * toMilitary("04:00") // "04:00"
 *
 * @function toMilitary
 * @param {string} time time in hours and minutes
 * @return {string} time in military representation
 */

var MilitaryTime = time => {
    const split = time.split('');
    console.log(split);
    const hours = split[0];
    if(hours === "12"){
        hours = "00";
    }
    for(var i=0 ; i<time.length ; i++){
        if(time[i] === 'a' || time[i] === 'm' || time[i] === "p"){
            time[i].slice(1)
        }
    }

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = toMilitary;
// // // // // // // // // //