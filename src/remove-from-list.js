const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function ListNode(x) {
   this.value = x;
   this.next = null
}

function removeKFromList(l, k) {
   // create node
   let node = new ListNode();
   // assign node.next to the beginning of the given linked list.
   node.next = l;

   // start iterating through the linked list
   let current = node;
   // while there is still a node
   while (current.next) {
      // if the value of the node equals to given K
      if (current.next.value === k) {
         // remove it from the list by hopping from the one node to the next node
         current.next = current.next.next
      } else {
         // move from one node to the next.
         current = current.next;
      }
   }
   //return the linked list
   return node.next;
}

// All changes are in the part below:

function arrayToList(arr) {
   return arr.reduceRight((next, val) =>
      Object.assign(new ListNode(val), { next })
      , null);
}

function listToArray(list) {
   const arr = [];
   for (let node = list; node; node = node.next) {
      arr.push(node.value);
   }
   return arr;
}

const list = arrayToList([3, 1, 2, 3, 4, 5]);
const shorter = removeKFromList(list, 3);
const result = listToArray(shorter);



module.exports = {
  removeKFromList
};
