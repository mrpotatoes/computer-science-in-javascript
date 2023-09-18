import * as transforms from './utils/transforms'

/**
 * incidence matrix
 *    - Rows => Vertices/Nodes
 *    - Cols => Edges
 *
 * Therefore
 *    `1` if vertex belongs to edge
 *    `0` if otherweise
 */

const fixtures = {
  matricies: {
    // View graph-example.png
    incidence: [
      //      a, b, c, d, e,
      /* 1 */[1, 0, 0, 1, 0],
      /* 2 */[1, 1, 0, 0, 1],
      /* 3 */[0, 1, 1, 0, 0],
      /* 4 */[0, 0, 1, 1, 1],
    ],
  },
  edges: {
    undirected1: [
      ['i', 'j'],
      ['k', 'i'],
      ['m', 'k'],
      ['k', 'l'],
      ['o', 'n'],
    ]
  }
}

describe('[Data Structure] Graph.Utils', () => {
  // it.skip('SOMETHING HERE BRUV', () => {
  //   console.log(transforms.toAL(
  //     ['a', 'b', 'c', 'd', 'e', 'f'],
  //     []
  //   ))
  //
  //   // expect(graph.toString()).toEqual('A,B')
  // })

  it.skip('graphFromEdges()', () => {
    const graph = transforms.graphFromEdges(
      [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n'],
      ]
    )

    // console.log('\n')
    // console.log('-------------------------------------------------')
    // console.log('-------------------------------------------------')
    // console.log('-------------------------------------------------')
    // console.log(graph)

    // expect(graph.toString()).toEqual('A,B')
  })

  it.skip('description', () => {
    console.log(transforms.objItem())
  })

  it('graphFromEdgesALT()', () => {
    const graph = transforms.graphFromEdgesALT(
      [
        ['i', 'j'],
        ['k', 'i'],
        // ['m', 'k'],
        // ['k', 'l'],
        // ['o', 'n'],
      ]
    )

    // console.log('\n')
    // console.log('-------------------------------------------------')
    // console.log('-------------------------------------------------')
    // console.log('-------------------------------------------------')
    // console.log(graph)

    // expect(graph.toString()).toEqual('A,B')
  })
})
