const { NotImplementedError } = require('../extensions/index.js');


//  Implement the Stack with a given interface via array.

//  @example
//   const stack = new Stack();

//  stack.push(1); // adds the element to the stack
//  stack.peek(); // returns the peek, but doesn't delete it, returns 1
//  stack.pop(); // returns the top element from stack and deletes it, returns 1
//  stack.pop(); // undefined
function Stack() {
   this.count = 0;
   this.storage = {};

   this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
   }

   this.pop = function () {
      if (this.count === 0) {
         return undefined;
      }
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
   }

   this.peek = function () {
      return this.storage[this.count - 1];
   }

   this.size = function () {
      return this.count;
   }
}

module.exports = {
   Stack
};
