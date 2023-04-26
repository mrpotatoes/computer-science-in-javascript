/* eslint-disable no-unused-expressions */
import TreeDS from './tree'
import { fullFixture, removedCtoFixture, removedCfoFixture } from './fixture.tree'

describe('[Data Structure] Tree', () => {
  it('TreeDS() root should be null', () => {
    const tree = new TreeDS()

    // Assertions.
    expect(tree.root).toBeNull()
  })

  it('Should not be able to remove from an empty tree.', () => {
    const tree = new TreeDS()

    // Assertions.
    expect(tree.remove('nothing here')).toEqual(tree)
  })

  it('add(1...2) and should not be able to reset root node', () => {
    const tree = new TreeDS()
    tree.add('thing')

    // Assertions.
    expect(tree.add.bind(tree, 'another')).toThrow('Root node is already assigned')
  })

  it('add(1...8) compare tree', () => {
    const tree = new TreeDS()
    tree.add('ceo')
    tree.add('cto', 'ceo')
    tree.add('cfo', 'ceo')
    tree.add('cmo', 'ceo')
    tree.add('dev1', 'cto')
    tree.add('dev2', 'cto')
    tree.add('dev3', 'cto')
    tree.add('accountant', 'cfo')

    // Assertions.
    expect(tree.getTree()).toEqual(fullFixture)
  })

  it('add(1...8) remove(cto), remove(cfo), remove(ceo), ', () => {
    const tree = new TreeDS()
    tree.add('ceo')
    tree.add('cto', 'ceo')
    tree.add('cfo', 'ceo')
    tree.add('cmo', 'ceo')
    tree.add('dev1', 'cto')
    tree.add('dev2', 'cto')
    tree.add('dev3', 'cto')
    tree.add('accountant', 'cfo')

    // Assertions.
    expect(tree.remove('cto').getTree()).toEqual(removedCtoFixture)
    expect(tree.remove('cfo').getTree()).toEqual(removedCfoFixture)
    expect(tree.remove('ceo').getTree()).toBeNull()
  })

  it('add(1...8) remove(ceo), ', () => {
    const tree = new TreeDS()
    tree.add('ceo')
    tree.add('cto', 'ceo')
    tree.add('cfo', 'ceo')
    tree.add('cmo', 'ceo')
    tree.add('dev1', 'cto')
    tree.add('dev2', 'cto')
    tree.add('dev3', 'cto')
    tree.add('accountant', 'cfo')

    // Assertions.
    // @todo I would need to get confirmation but I think that since this destroys the
    // reference to the root it should be garbage colleted later.
    expect(tree.remove('ceo').getTree()).toBeNull()
  })

  it('add(1...8) remove(ceo), ', () => { })

  it('add(1...8) contains(ceo), ', () => { })

  it('add(1...8) findBFS(ceo), ', () => { })

  it('add(1...8) preOrder(ceo), ', () => { })

  it('add(1...8) postOrder(ceo), ', () => { })

  it('add(1...8) traverseDFS(ceo), ', () => { })

  it('add(1...8) traverseBFS(ceo), ', () => { })

  it('add(1...8) getTree(ceo), ', () => { })
})

// const tree = new Tree()
// tree.add('ceo')
// tree.add('cto', 'ceo')
// tree.add('dev1', 'cto')
// tree.add('dev2', 'cto')
// tree.add('dev3', 'cto')
// tree.add('cfo', 'ceo')
// tree.add('accountant', 'cfo')
// tree.add('cmo', 'ceo')
// tree.print()
//    => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
// tree.printByLevel()
//    => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
// console.log('tree contains dev1 is true:', tree.contains('dev1'))
//    => true
// console.log('tree contains dev4 is false:', tree.contains('dev4'))
//    => false
// console.log('--- BFS')
// tree.traverseBFS((node) => { console.log(node.data) })
//    => ceo cto cfo cmo dev1 dev2 dev3 accountant
// console.log('--- DFS preOrder')
// tree.traverseDFS((node) => { console.log(node.data) }, 'preOrder')
//    => ceo cto dev1 dev2 dev3 cfo accountant cmo
// console.log('--- DFS postOrder')
// tree.traverseDFS((node) => { console.log(node.data) }, 'postOrder')
//    => dev1 dev2 dev3 cto accountant cfo cmo ceo
// tree.remove('cmo')
// tree.print() // => ceo | cto cfo | dev1 dev2 dev3 accountant
// tree.remove('cfo')
// tree.print() // => ceo | cto | dev1 dev2 dev3
