import { TreeNode, insert } from './binary'

export const binaryTree = () => {
  let tree = new TreeNode(100)

  tree = insert(tree, 10)
  tree = insert(tree, 20)
  tree = insert(tree, 300)
  tree = insert(tree, 101)
  tree = insert(tree, -1)
  tree = insert(tree, 80)
  tree = insert(tree, 200)
  tree = insert(tree, 201)
  tree = insert(tree, 115)

  return tree
}
