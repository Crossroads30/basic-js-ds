const { NotImplementedError } = require('../extensions/index.js');

class Stack {
   constructor() {
      this.items = [];
   }
   push(element) {
      // push element into the items
      this.items.push(element);
   }
   pop() {
      // return top most element in the stack
      // and removes it from the stack
      // Underflow if stack is empty
      if (this.items.length == 0)
         return "Underflow";
      return this.items.pop();
   }
   peek() {
      // return the top most element from the stack
      // but does'nt delete it.
      return this.items[this.items.length - 1];
   }
   isEmpty() {
      // return true if stack is empty
      return this.items.length == 0;
   }
   printStack() {
      var str = "";
      for (var i = 0; i < this.items.length; i++)
         str += this.items[i] + " ";
      return str;
   }
}
// let stack = new Stack
// console.log(stack.isEmpty());

// // returns Underflow
// console.log(stack.pop());


// // Adding element to the stack
// stack.push(10);
// stack.push(20);
// stack.push(30);

// // Printing the stack element
// // prints [10, 20, 30]
// console.log(stack.printStack());

// // returns 30
// console.log(stack.peek());

// // returns 30 and remove it from stack
// console.log(stack.pop());

// // returns [10, 20]
// console.log(stack.printStack());



module.exports = {
   Stack
};

