// Question 1
// Using Closure, write a function passwordProtect that,
// when called, only invokes func when the matching password is supplied as the first argument.
// When the matching password is supplied, any additional arguments should be passed to func
// and the return value of func should be returned from the created function.
// If the password does not match, func is not invoked and nothing is returned.
var myFunc = function(a, b) {
    console.log('my func ran');
    return a + b;
  };
  var protectedMyFunc = passwordProtect(myFunc, 'p@ssw0rd');
  protectedMyFunc('password', 1, 2); // nothing logged, nothing returned
  protectedMyFunc('p@ssw0rd', 1, 2); // logs 'my func ran', returns 3
  protectedMyFunc('p@ssw0rd', 13, 5); // logs 'my func ran', returns 18

  
  // Question 2
  // Create a storyWriter function that returns an object with two methods.
  // One method, addWords adds a word to your story and returns the story while the other one,
  // erase, resets the story back to an empty string. Here is an implementation:
  var farmLoveStory = storyWriter();
  farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
  farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
  var storyOfMyLife = storyWriter();
  storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
  storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
  storyOfMyLife.erase(); // ''


  function passwordProtect(protected){
     var protectedMyFunc = passwordProtect(myFunc, 'p@ssw0rd')

     var myFunc = function(a,b){
      if(b === 'p@ssw0rd'){
        return ' my Func ran ' + ',' +  passwordProtect(a+b)

      }
      return 'undefined'
     }


     
  }