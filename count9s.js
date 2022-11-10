// It's 9 time!

// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

// Note: n will always be a postive integer.

// number9(8) //should return 0
// number9(9) //should return 1
// number9(10) //should return 1
// number9(98) //should return 18
// number9(100) //should return 20


var count9 = function(num) {
        if (n < 8) {
          return 0
        };
        if (n === 9) {
          return 1
        };
        if (n > 10) {
          let str = ''
          for (let i = 9; i <= n; i++) {
            str += String(i)
          }
          return str.match(/[9]/g).length
        } 
}

