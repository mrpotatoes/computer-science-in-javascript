/**
 * It hurts me to say it but the BST is most likely best written with a class 🙄
 */
export class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * Insert a new node and return the modified BST.
 *
 * @param {TreeNode} root The root node we will be using. Typically the parent
 * @param {int} val The value to insert into the tree
 * @returns The tree
 */
export const insert = (root, val) => {
  // Tree doesn't exist. Create it.
  if (root == null) {
    return new TreeNode(val)
  }

  // The insert is pretty simple. It is a recursive function to add values to
  // the tree. We want values less than the parent node to go to the left and
  // greater to the right.
  if (val > root.val) {
    root.right = insert(root.right, val)
  } else if (val < root.val) {
    root.left = insert(root.left, val)
  }

  return root
}

/**
 * Return the minimum value node of the BST.
 *
 * Follow the right path until we find the node with max value
 *
 * @param {TreeNode} root The root node we will be using. Typically the parent
 * @returns The tree
 */
export const min = (root) => {
  let curr = root

  while (curr != null && curr.left != null) {
    curr = curr.left
  }

  return curr
}

/**
 * Return the maximum value node of the BST.
 *
 * It's the same as min(). Just follow the right path until we find the node
 * with max value
 *
 * @param {TreeNode} root The root node we will be using. Typically the parent
 * @returns The tree
 */
export const max = (root) => {
  let curr = root

  while (curr != null && curr.right != null) {
    curr = curr.right
  }

  return curr
}

/**
 * Remove a node recursively and return the root of the BST.
 *
 * There are 3 cases that we need to handle which we'll go into detail.
 * Note: The first two cases can be merged
 *
 * 0. First thing's first.
 *    If no tree then we do not do anything. We just return the tree/null and
 *    early bail.
 *
 * 1. Delete a node with 0 children
 *    If node has no children we will delete the current node and set it's
 *    parent child pointer (left or right) to null.
 * 2. Delete a node with 1 child
 *    Now, if the node has 1 child we'll delete the current node and set the the
 *    parent's child pointer (left or right) to the existing child
 * 3. Delete a node with 2 children
 *    Lastly we need to handle the case where there are multiple children
 *    attached to the current node. This one is a bit more tricky.
 *
 *    We need to delete the node in such a fashion where we maintain the
 *    properties of a BST. It needs to stay sorted.
 *
 *    Inorder successor is needed only when the right child is not empty. In
 *    this particular case, the inorder successor can be obtained by finding the
 *    minimum value in the right child of the node.
 *
 *    The inorder successor is the left-most node on the right subtree of the
 *    current node. Or it's the smallest value within the current tree/node.
 *
 * @param {TreeNode} root The root node we will be using. Typically the parent
 * @param {int} val The value to search
 * @returns The tree
 */
export const remove = (root, val) => {
  // There is no tree so no changes.
  if (root == null) {
    return root
  }

  // The first if and it's related elseif are like the binary search as we will
  // need to compare the value to the current node's value.
  if (val > root.val) {
    root.right = remove(root.right, val)
  } else if (val < root.val) {
    root.left = remove(root.left, val)
  } else {
    if (root.left == null) {
      return root.right
    } else if (root.right == null) {
      return root.left
    } else {
      let minNode = min(root.right)
      root.val = minNode.val
      root.right = remove(root.right, minNode.val)
    }
  }

  return root
}

/**
 * Determine if a value exists within the tree
 *
 * @param {TreeNode} root The root node we will be using. Typically the parent
 * @param {int} val The value to search
 * @returns The tree
 */
export const contains = (root, val) => {
  // Not found.
  if (root === null) {
    return false
  }

  // Most of the code is going to be similar. If you look at the insert this is
  // almost the exact same.
  //
  // First condition is if the value is greater then we'll go right If less then
  // go left. Otherwise we've found the data and can return true.
  return (val > root.val)
    ? contains(root.right, val)
    : (val < root.val)
      ? contains(root.left, val)
      : true
}

/**
 * Get all the values out of the tree in inorder.
 *
 * inorder() focuses on left then right. The function will visit in this order:
 *    1. Left path
 *    2. Parent path
 *    3. Right path
 *
 * The result is a sorted array (i'm returning an array here)
 *
 * @param {TreeNode} root
 * @returns []
 */
export const inorder = (root, arr = []) => {
  if (root === null) {
    return arr
  }

  inorder(root.left, arr)
  arr.push(root.val)
  inorder(root.right, arr)

  return arr
}

/**
 * Get all the values out of the tree in preorder.
 *
 * @param {TreeNode} root
 * @returns []
 */
export const preorder = (root, arr = []) => {
  if (root == null) {
    return arr
  }

  arr.push(root.val)
  preorder(root.left, arr)
  preorder(root.right, arr)

  return arr
}

/**
 * Get all the values out of the tree in postorder.
 *
 * @param {TreeNode} root
 * @returns []
 */
export const postorder = (root, arr = []) => {
  if (root == null) {
    return arr
  }

  postorder(root.left, arr)
  postorder(root.right, arr)
  arr.push(root.val)

  return arr
}

/**
 * The breadth first search algorithm visits every node on a given level before moving down.
 *
 * It's actually pretty simple since it's just an iterative algo. We visit
 * whatever root node is passed in and if a left & right exist (in that order)
 * it will push that item onto the queue to be processed next.
 *
 * The reason that the TreeNode object is pushed to the queue and not the value
 * is because we will only have a scalar value to work with and wouldn't be able
 * to go further down to the next level of the tree.
 *
 * @param {TreeNode} root The tree to run through.
 * @returns int[]
 */
export const bfs = (root) => {
  const queue = []
  const result = []
  queue.push(root)

  while (queue.length > 0) {
    const node = queue.shift()
    result.push(node.val)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }

  return result
}
