/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
this.storage = []
this.top = 0;
  // add an item to the top of the stack
  this.push = function(item) {
    this.storage[this.top] = item;
    this.top = this.top + 1
  };

  // remove an item from the top of the stack
  this.pop = function() {
    this.top = this.top - 1;
   var x = this.storage.pop();
   return x;
  };

  // return the number of items in the stack
  this.size = function() {
    return this.top;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
       this.inbox.push(item)
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    if(this.inbox.length === 0 || this.outbox.length === 0){
      return 'Queue is empty';
    }
      var x = this.inbox.pop();
      this.outbox.push(x);
      return this.outbox.pop()
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    if(this.inbox.length === 0){
      return this.outbox;
    }
    return this.inbox
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = Queue; // //
// // // // // // // // // /
