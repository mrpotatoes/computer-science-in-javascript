console.clear()
console.log('SANDBOX')

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Insert a new node and return the root of the BST.
function insert(root, val) {
  if (root == null) {
    return new TreeNode(val);
  }

  if (val > root.val) {
    root.right = insert(root.right, val);
  } else if (val < root.val) {
    root.left = insert(root.left, val);
  }
  return root;
}

// Return the minimum value node of the BST.
function minValueNode(root) {
  let curr = root;
  while (curr != null && curr.left != null) {
    curr = curr.left;
  }
  return curr;
}

// Remove a node and return the root of the BST.
function remove(root, val) {
  if (root == null) {
    return null;
  }
  if (val > root.val) {
    root.right = remove(root.right, val);
  } else if (val < root.val) {
    root.left = remove(root.left, val);
  } else {
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    } else {
      let minNode = minValueNode(root.right);
      root.val = minNode.val;
      root.right = remove(root.right, minNode.val);
    }
  }
  return root;
}

let root = new TreeNode(100)

root = insert(root, 10)
root = insert(root, 20)
root = insert(root, 300)
root = insert(root, 101)
root = insert(root, -1)
root = insert(root, 80)
root = insert(root, 200)
root = insert(root, 201)
root = insert(root, 115)

// console.log(JSON.stringify(root, null, 2))
console.log(root)

// https://www.baeldung.com/java-print-binary-tree-diagram
// https://medium.com/javarevisited/how-to-print-nodes-of-a-binary-search-tree-in-sorted-order-8a4e52eb8856
//
// const traversePreOrder = (root) => {
//   if (!root) {
//     return '';
//   }
//
//   let sb = ''
//   sb = root.getValue()
//
//   right = "└──";
//   left = (root.getRight() != null) ? "├──" : "└──";
//
//   traverseNodes(sb, "", left, root.getLeft(), root.getRight() != null);
//   traverseNodes(sb, "", right, root.getRight(), false);
//
//   return sb.toString();
// }

// https://www.sahinarslan.tech/posts/deep-dive-into-data-structures-using-javascript-binary-search-tree
//
// class Node {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }
//
// class BinarySearchTree {
//   constructor() {
//     // initialize the root
//     this.root = null
//   }
//
//   // handles "insertion" with both variations: iterative and recursive
//   // "isRecursive" is an optional parameter, default handler is iterative
//   insert = (value, isRecursive) => {
//     if (!isRecursive) return this._insertIterative(value)
//     return this._insertRecursive(value)
//   }
//
//   // handles "find" with both variations: iterative and recursive
//   // "isRecursive" is an optional parameter, default handler is iterative
//   find(value, isRecursive) {
//     if (!isRecursive) return this._findIterative(value)
//     return this._findRecursive(value)
//   }
//
//   // handles "delete" with both variations: iterative and recursive
//   // "isRecursive" is an optional parameter, default handler is iterative
//   delete(value, isRecursive) {
//     if (!isRecursive) return this._deleteIterative(value)
//     return this._deleteRecursive(value)
//   }
//
//   // Iterative insertion
//   _insertIterative(value) {
//     // Create a new node with the value to be inserted
//     const newNode = new Node(value)

//     // If the tree is empty, make the new node as the root and early exit
//     if (this.root === null) {
//       return this.root = newNode
//     }

//     // Iterative insert method to be called if the root is not empty:
//     const iterativeInsert = (currentNode, value) => {
//       while (true) {
//         // If the value already exists in the tree,
//         // throw an error or silently fail:
//         if (value === currentNode.value) {
//           // OPTIONAL: replace the below line with return
//           // if you want it to throw an error on duplicates
//           // throw new Error("Duplicate value not allowed")
//           return
//         }

//         // Check if the input value is less than the current node's value
//         if (value < currentNode.value) {
//           // If the left child is null, insert the new node as the left child
//           if (currentNode.left === null) {
//             return currentNode.left = newNode
//           }
//           // If the left child is not null, move the current node to the left child
//           currentNode = currentNode.left
//         } else {
//           // Check if the input value is greater than
//           // or equal to the current node's value
//           if (currentNode.right === null) {
//             // If the right child is null, insert the new node as the right child
//             return currentNode.right = newNode
//           } else {
//             // If the right child is not null, move the current node to the right child
//             currentNode = currentNode.right
//           }
//         }
//       }
//     }

//     // Call the inner method with root node
//     // as the starting point, and value as target:
//     iterativeInsert(this.root, value)
//   }
//
//   // Recursive insertion
//   _insertRecursive(value) {
//     // Create a new node with the value to be inserted
//     const newNode = new Node(value)

//     // if the tree is empty, insert the new node as the root and early exit
//     if (this.root === null) {
//       return this.root = newNode
//     }
//
//     // Recursive insert method to be called if the root is not empty:
//     const recursiveInsert = (currentNode, value) => {
//       // If the value already exists in the tree, throw an error or silently fail:
//       if (value === currentNode.value) {
//         // OPTIONAL: replace the below line with return
//         // if you want it to throw an error on duplicates
//         // throw new Error("Duplicate value not allowed")
//         return
//       }
//
//       // if the value is greater than the current node's value, go right
//       if (value > currentNode.value) {
//         // if there is no right child, insert the new node here
//         if (currentNode.right === null) {
//           currentNode.right = newNode
//           return
//         } else {
//           // otherwise, recursively call insert on the right child
//           recursiveInsert(currentNode.right, value)
//         }
//       } else {
//         // if the value is less than the current node's value, go left
//         if (currentNode.left === null) {
//           currentNode.left = newNode
//           return
//         } else {
//           // otherwise, recursively call insert on the left child
//           recursiveInsert(currentNode.left, value)
//         }
//       }
//     }
//
//     // Call the inner method with root node
//     // as the starting point, and value as target:
//     recursiveInsert(this.root, value)
//   }
//
//   // Iterative search
//   _findIterative(value, currentNode = this.root) {
//     // Start at the root of the tree (or a passed in node)
//     while (currentNode) {
//       // Check if the current node's value is equal to the search value
//       if (currentNode.value === value) {
//         return currentNode.value; // If found, return the value
//       }
//       // If the search value is less than the current node's value,
//       // move to the left child
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else {
//         // If the search value is greater than the current node's value,
//         // move to the right child
//         currentNode = currentNode.right;
//       }
//     }
//     // If the value is not found, return null
//     return console.log('Given value not found in the tree:', value)
//   }
//
//   // Recursive search
//   _findRecursive(value, currentNode = this.root) {
//     // base case: if current node is null, value is not in the tree
//     if (currentNode === null) {
//       return console.log('Given value not found in the tree:', value)
//     }

//     // if current node value is equal to the given value, return value
//     if (currentNode.value === value) {
//       return currentNode.value
//     }

//     // if given value is less than current node value, search left subtree
//     if (value < currentNode.value) {
//       return this._findRecursive(value, currentNode.left)
//     }

//     // if given value is greater than current node value, search right subtree
//     if (value > currentNode.value) {
//       return this._findRecursive(value, currentNode.right)
//     }
//   }
//
//   // Iterative delete
//   _deleteIterative(value) {
//     // Start at the root
//     let currentNode = this.root
//     // At this point parentNode is null, since root has no parent
//     let parentNode = null

//     // STEP 1 - Find the targetNode and it's parentNode to be deleted:
//     while (currentNode !== null && currentNode.value !== value) {
//       /*
//       Here, the currentNode is set as the parentNode
//       before moving to the left or right child node
//       depending on the value being searched for.
//       This is so that the parentNode variable always
//       holds the parent of the currentNode.

//       When the loop exits, the currentNode variable holds the target node
//       that needs to be deleted and "parentNode" variable holds its parent.
//       */
//       parentNode = currentNode

//       // if the value is less than the current node's value, move to the left child
//       if (value < currentNode.value) {
//         currentNode = currentNode.left
//         // if the value is greater than the current node's value, move to the right child
//       } else {
//         currentNode = currentNode.right
//       }
//     }

//     // STEP 2 - If the currentNode is null, the value was not found in the tree
//     if (currentNode === null) {
//       console.log('Given value not found in the tree:', value)
//       return
//     }

//     // STEP 3 - Handle the 3 deletion cases:
//     // leaf node (node with 0 children),
//     // node with 1 children, node with 2 children

//     // CASE 1: LEAF NODE
//     // If the current node has no children, it is a leaf node.
//     if (currentNode.left === null && currentNode.right === null) {
//       /*
//       In this case, if the parent node is null
//       (which means the current node is the root),
//       the root is set to null.
//       */
//       if (parentNode === null) {
//         this.root = null
//       } else {
//         /*
//         If the parent node is not null, the left or right reference
//         of the parent node is set to null, depending on
//         if the current node is the left or right child of the parent node.
//         */
//         if (parentNode.left === currentNode) {
//           parentNode.left = null
//         } else {
//           parentNode.right = null
//         }
//       }
//     }

//     // CASE 2: NODE WITH SINGLE CHILD
//     // If the current node has 1 children at the left or right side

//     // ONLY HAS CHILDREN AT RIGHT SIDE, LEFT IS NULL
//     else if (currentNode.left === null) {
//       /*
//       In this case, if the parent node is null
//       (which means the current node is the root),
//       the root is set to the current node's right child.
//       */
//       if (parentNode === null) {
//         this.root = currentNode.right
//       } else {
//         /*
//         If the parent node is not null, the left or right
//         reference of the parent node is set to
//         the current node's right child, depending on
//         if the current node is the left or right child of the parent node.
//         */
//         if (parentNode.left === currentNode) {
//           parentNode.left = currentNode.right
//         } else {
//           parentNode.right = currentNode.right
//         }
//       }
//       // ONLY HAS CHILDREN AT LEFT SIDE, RIGHT IS NULL
//       /*
//       Same as the above block of code, but the children at the opposite side
//       */
//     } else if (currentNode.right === null) {
//       if (parentNode === null) {
//         this.root = currentNode.left
//       } else {
//         if (parentNode.left === currentNode) {
//           parentNode.left = currentNode.left
//         } else {
//           parentNode.right = currentNode.left
//         }
//       }
//     }

//     // CASE 3: NODE WITH TWO CHILDREN
//     // If the current node has 2 children (left & right)
//     else {
//       /*
//       If the current node has two children,
//       we need to find the in-order successor of the current node.

//       You can go 2 ways to find the inorder successor: either smallest value
//       in right subtree, or largest element in left subtree. In this method
//       we will use the first: finding the smallest value in right subtree.

//       The in-order successor is the node with the smallest value
//       that is greater than the current node's value.

//       We start by initializing the inorderSuccessor variable to the
//       current node's right child and inorderSuccessorParent to the current node.

//       Then, we iterate through the right child's left subtree
//       until we find the node with the smallest value.
//       */
//       let inorderSuccessor = currentNode.right
//       let inorderSuccessorParent = currentNode

//       while (inorderSuccessor.left !== null) {
//         inorderSuccessorParent = inorderSuccessor
//         inorderSuccessor = inorderSuccessor.left
//       }

//       currentNode.value = inorderSuccessor.value
//       /*
//       Once we find the in-order successor,
//       we replace the current node's value with the in-order successor's value.

//       Then, we remove the in-order successor from the tree
//       by setting its parent's left or right pointer to its right child.
//       (since the in-order successor is guaranteed to have
//       no left children, we can simply remove it by linking
//       its parent to its right child).

//       Finally, the method returns and the tree is updated with
//       the desired value removed and its in-order successor taking its place.
//       */
//       if (inorderSuccessorParent === currentNode) {
//         inorderSuccessorParent.right = inorderSuccessor.right
//       } else {
//         inorderSuccessorParent.left = inorderSuccessor.right
//       }
//     }
//   }
//
//   // Recursive delete
//   _deleteRecursive(value) {
//     // Recursive delete method to be called
//     const recursiveDelete = (currentNode, value) => {
//       // Base case: if the node is null, the value is not in the tree
//       if (currentNode === null) {
//         console.log('Given value not found in the tree:', value)
//         return
//       }
//       // if the value is less than the node's value,
//       // then it lies in left subtree
//       if (value < currentNode.value) {
//         currentNode.left = recursiveDelete(currentNode.left, value)
//       }
//       // if the value is more than the node's value,
//       // then it lies in right subtree
//       else if (value > currentNode.value) {
//         currentNode.right = recursiveDelete(currentNode.right, value)
//       }
//       // if value is same as node's value, then this is the node
//       // to be deleted
//       else {
//         // node with only one child or no child
//         if (currentNode.left === null) {
//           return currentNode.right
//         } else if (currentNode.right === null) {
//           return currentNode.left
//         }

//         // node with two children
//         // get the inorder successor (smallest in the right subtree)
//         let inorderSuccessor = currentNode.right
//         while (inorderSuccessor.left !== null) {
//           inorderSuccessor = inorderSuccessor.left
//         }
//         // copy the inorder successor's content to this node
//         currentNode.value = inorderSuccessor.value

//         // delete the inorder successor
//         currentNode.right = recursiveDelete(currentNode.right, inorderSuccessor.value)
//       }
//       return currentNode
//     }

//     /*
//     And as usual, we always start the traversal from
//     the top of tree "this.root". recursiveDelete helper method
//     will return the complete updated tree after removal,
//     so we simply point the root to the updated tree:
//     */
//     this.root = recursiveDelete(this.root, value)
//   }
//
//   // Displays an array that will represent the tree
//   // in level-order, with each sub-array representing a level of the tree.
//   showAsLevelOrdered() {
//     // Create an empty array to store the traversed nodes
//     const temp = []
//     // Create an array to keep track of the current level of nodes
//     const queue = []

//     // If the tree has a root, add it to the queue
//     if (this.root) {
//       queue.push(this.root)
//     }

//     // Keep traversing the tree while there are nodes in the queue
//     while (queue.length) {
//       // Create an array to store the nodes of the current level
//       const subTemp = []
//       // Store the number of nodes in the current level
//       const len = queue.length

//       // Iterate through the current level of nodes
//       for (let i = 0; i < len; i += 1) {
//         // Dequeue the first node in the queue
//         const node = queue.shift()
//         // Push the node's value to the subTemp array
//         subTemp.push(node.value)
//         // If the node has a left child, add it to the queue
//         if (node.left) {
//           queue.push(node.left)
//         }
//         // If the node has a right child, add it to the queue
//         if (node.right) {
//           queue.push(node.right)
//         }
//       }

//       // Push the subTemp array to the temp array
//       temp.push(subTemp)
//     }
//     // Return the final temp array
//     return temp
//   }
// }

// const tr = new BinarySearchTree()
// tr.insert(10)
// tr.insert(30)
// tr.insert(5)
// tr.insert(18)
// tr.insert(100)

// console.log(tr.showAsLevelOrdered())

// console.log(JSON.stringify(tr, null, 2))
