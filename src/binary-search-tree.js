const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {

//    root() {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }

//    add(/* data */) {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }

//    has(/* data */) {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }

//    find(/* data */) {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }

//    remove(/* data */) {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }

//    min() {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }

//    max() {
//       throw new NotImplementedError('Not implemented');
//       // remove line with error and write your code here
//    }
// }

class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
 

   add(value) {
      this.root = addWithin(this.root, value);

      function addWithin(node, value) {
         if (!node) {
            return new Node(value);
         }

         if (node.value === value) {
            return node;
         }

         if (value < node.value) {
            node.left = addWithin(node.left, value);
         } else {
            node.right = addWithin(node.right, value);
         }

         return node;
      }
   }

   has(value) {
      return searchWithin(this.root, value);

      function searchWithin(node, value) {
         if (!node) {
            return false;
         }

         if (node.value === value) {
            return true;
         }

         return value < node.value ?
            searchWithin(node.left, value) :
            searchWithin(node.right, value);
      }
   }

   remove(value) {
      this.root = removeNode(this.root, value);

      function removeNode(node, value) {
         if (!node) {
            return null;
         }

         if (value < node.value) {
            node.left = removeNode(node.left, value);
            return node;
         } else if (node.value < value) {
            node.right = removeNode(node.right, value);
            return node;
         } else {
            // equal - should remove this item
            if (!node.left && !node.right) {
               // put null instead of item
               return null;
            }

            if (!node.left) {
               // set right child instead of item
               node = node.right;
               return node;
            }

            if (!node.right) {
               // set left child instead of item
               node = node.left;
               return node;
            }

            // both children exists for this item
            let minFromRight = node.right;
            while (minFromRight.left) {
               minFromRight = minFromRight.left;
            }
            node.value = minFromRight.value;

            node.right = removeNode(node.right, minFromRight.value);

            return node;
         }
      }
   }

   min() {
      if (!this.root) {
         return;
      }

      let node = this.root;
      while (node.left) {
         node = node.left;
      }

      return node.value;
   }

   max() {
      if (!this.root) {
         return;
      }

      let node = this.root;
      while (node.right) {
         node = node.right;
      }

      return node.value;
   }

   leftTraverse(cb) {
      doLeft(this.root, cb);

      function doLeft(node, cb) {
         if (node) {
            doLeft(node.left, cb);
            cb(node.value);
            doLeft(node.right, cb);
         }
      }
   }

   rightTraverse(cb) {
      doRight(this.root, cb);

      function doRight(node, cb) {
         if (node) {
            doRight(node.right, cb);
            cb(node.value);
            doRight(node.left, cb);
         }
      }
   }
   
}

module.exports = {
   BinarySearchTree
};