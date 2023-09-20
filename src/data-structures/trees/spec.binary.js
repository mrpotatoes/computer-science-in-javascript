/* eslint-disable no-unused-expressions */
import YAML from 'json-to-pretty-yaml'
import { TreeNode, insert, remove, contains, min, max, inorder, preorder, postorder, bfs } from './binary'
import * as fixtures from './_fixtures'

describe('[Data Structure] Binary Tree', () => {
  let tree = null

  beforeEach(() => { tree = fixtures.binaryTree() })
  afterEach(() => { tree = null })

  describe('insert(root, val)', () => {
    it('was inserted', () => {
      let newTree = JSON.parse(JSON.stringify(tree));

      // Assertions.
      newTree = insert(newTree, 404)

      expect(tree).not.toEqual(newTree)
      expect(newTree).toHaveProperty('right.right.val', 404)
    })
  })

  describe('remove(root, val)', () => {
    it('was removed', () => {
      // Prove it exists first
      expect(tree).toHaveProperty('right.val', 300)

      // Show it doesn't exist anymore
      expect(remove(tree, 300)).not.toHaveProperty('right.val', 300)
    })

    it('value does not exist to be removed', () => {
      expect(tree).toEqual(remove(tree, 321321321))
    })
  })

  describe('min() & max()', () => {
    it('min(root, val)', () => {
      // Assertions.
      expect(min(tree).val).toBe(-1)
    })
    it('max(root, val)', () => {
      // Assertions.
      expect(max(tree).val).toBe(300)
    })
  })

  describe('contains(root, val)', () => {
    it('contains', () => {
      expect(contains(tree, 10)).toBe(true)
    })

    it('contains', () => {
      expect(contains(tree, 15)).toBe(false)
    })
  })

  describe('Traversals', () => {
    it('inorder(TreeNode, [])', () => {
      expect(inorder(tree)).toEqual([ -1, 10, 20, 80, 100, 101, 115, 200, 201, 300 ])
    })

    it('preorder(TreeNode, [])', () => {
      expect(preorder(tree)).toEqual([ 100, 10, -1, 20, 80, 300, 101, 200, 115, 201 ])
    })

    it('postorder(TreeNode, [])', () => {
      expect(postorder(tree)).toEqual([ -1, 80, 20, 10, 115, 201, 200, 101, 300, 100 ])
    })

    it('bfs(TreeNode)', () => {
      expect(bfs(tree)).toEqual([ 100, 10, 300, -1, 20, 101, 80, 200, 115, 201 ])
    })
  })
})
