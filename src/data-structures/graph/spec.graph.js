import Graph from './graph'
import { Vertex as GraphVertex, Edge as GraphEdge } from './base'

describe('[Data Structure] Graph', () => {
  it('should add vertices to graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')

    graph.addVertex(vertexA).addVertex(vertexB)

    expect(graph.toString()).toEqual('A,B')
    expect(graph.getVertexByKey(vertexA.getKey())).toEqual(vertexA)
    expect(graph.getVertexByKey(vertexB.getKey())).toEqual(vertexB)
  })

  it('should add edges to undirected graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const edgeAB = new GraphEdge(vertexA, vertexB)

    graph.addEdge(edgeAB)

    expect(graph.getAllVertices().length).toEqual(2)
    expect(graph.getAllVertices()[0]).toEqual(vertexA)
    expect(graph.getAllVertices()[1]).toEqual(vertexB)

    const graphVertexA = graph.getVertexByKey(vertexA.getKey())
    const graphVertexB = graph.getVertexByKey(vertexB.getKey())

    expect(graph.toString()).toEqual('A,B')
    // expect(graphVertexA).toEqualDefined()
    // expect(graphVertexB).toEqualDefined()

    expect(graph.getVertexByKey('not existing')).toBeUndefined()

    expect(graphVertexA.getNeighbors().length).toEqual(1)
    expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB)
    expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB)

    expect(graphVertexB.getNeighbors().length).toEqual(1)
    expect(graphVertexB.getNeighbors()[0]).toEqual(vertexA)
    expect(graphVertexB.getNeighbors()[0]).toEqual(graphVertexA)
  })

  it('should add edges to directed graph', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const edgeAB = new GraphEdge(vertexA, vertexB)

    graph.addEdge(edgeAB)

    const graphVertexA = graph.getVertexByKey(vertexA.getKey())
    const graphVertexB = graph.getVertexByKey(vertexB.getKey())

    expect(graph.toString()).toEqual('A,B')
    expect(graphVertexA.getNeighbors().length).toEqual(1)
    expect(graphVertexB.getNeighbors().length).toEqual(0)
    expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB)
    expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB)
  })

  it('should find edge by vertices in undirected graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const edgeAB = new GraphEdge(vertexA, vertexB, 10)

    graph.addEdge(edgeAB)

    const graphEdgeAB = graph.findEdge(vertexA, vertexB)
    const graphEdgeBA = graph.findEdge(vertexB, vertexA)
    const graphEdgeAC = graph.findEdge(vertexA, vertexC)
    const graphEdgeCA = graph.findEdge(vertexC, vertexA)

    expect(graphEdgeAC).toBeNull()
    expect(graphEdgeCA).toBeNull()
    expect(graphEdgeAB).toEqual(edgeAB)
    expect(graphEdgeBA).toEqual(edgeAB)
    expect(graphEdgeAB.weight).toEqual(10)
  })

  it('should find edge by vertices in directed graph', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')

    const edgeAB = new GraphEdge(vertexA, vertexB, 10)

    graph.addEdge(edgeAB)

    const graphEdgeAB = graph.findEdge(vertexA, vertexB)
    const graphEdgeBA = graph.findEdge(vertexB, vertexA)
    const graphEdgeAC = graph.findEdge(vertexA, vertexC)
    const graphEdgeCA = graph.findEdge(vertexC, vertexA)

    expect(graphEdgeAC).toBeNull()
    expect(graphEdgeCA).toBeNull()
    expect(graphEdgeBA).toBeNull()
    expect(graphEdgeAB).toEqual(edgeAB)
    expect(graphEdgeAB.weight).toEqual(10)
  })

  it('should return vertex neighbors', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeAC = new GraphEdge(vertexA, vertexC)

    graph.addEdge(edgeAB).addEdge(edgeAC)

    const neighbors = graph.getNeighbors(vertexA)

    expect(neighbors.length).toEqual(2)
    expect(neighbors[0]).toEqual(vertexB)
    expect(neighbors[1]).toEqual(vertexC)
  })

  it('should throw an error when trying to add edge twice', () => {
    const addSameEdgeTwice = () => {
      const graph = new Graph(true)
      const vertexA = new GraphVertex('A')
      const vertexB = new GraphVertex('B')
      const edgeAB = new GraphEdge(vertexA, vertexB)

      graph.addEdge(edgeAB).addEdge(edgeAB)
    }

    expect(addSameEdgeTwice).toThrow()
  })

  it('should return the list of all added edges', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeBC = new GraphEdge(vertexB, vertexC)

    graph.addEdge(edgeAB).addEdge(edgeBC)

    const edges = graph.getAllEdges()

    expect(edges.length).toEqual(2)
    expect(edges[0]).toEqual(edgeAB)
    expect(edges[1]).toEqual(edgeBC)
  })

  it('should calculate total graph weight for default graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const vertexD = new GraphVertex('D')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeBC = new GraphEdge(vertexB, vertexC)
    const edgeCD = new GraphEdge(vertexC, vertexD)
    const edgeAD = new GraphEdge(vertexA, vertexD)

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeAD)

    expect(graph.getWeight()).toEqual(0)
  })

  it('should calculate total graph weight for weighted graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const vertexD = new GraphVertex('D')

    const edgeAB = new GraphEdge(vertexA, vertexB, 1)
    const edgeBC = new GraphEdge(vertexB, vertexC, 2)
    const edgeCD = new GraphEdge(vertexC, vertexD, 3)
    const edgeAD = new GraphEdge(vertexA, vertexD, 4)

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeAD)

    expect(graph.getWeight()).toEqual(10)
  })

  it('should be possible to delete edges from graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeBC = new GraphEdge(vertexB, vertexC)
    const edgeAC = new GraphEdge(vertexA, vertexC)

    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeAC)

    expect(graph.getAllEdges().length).toEqual(3)

    graph.deleteEdge(edgeAB)

    expect(graph.getAllEdges().length).toEqual(2)
    expect(graph.getAllEdges()[0].getKey()).toEqual(edgeBC.getKey())
    expect(graph.getAllEdges()[1].getKey()).toEqual(edgeAC.getKey())
  })

  it('should should throw an error when trying to delete not existing edge', () => {
    function deleteNotExistingEdge () {
      const graph = new Graph()

      const vertexA = new GraphVertex('A')
      const vertexB = new GraphVertex('B')
      const vertexC = new GraphVertex('C')

      const edgeAB = new GraphEdge(vertexA, vertexB)
      const edgeBC = new GraphEdge(vertexB, vertexC)

      graph.addEdge(edgeAB)
      graph.deleteEdge(edgeBC)
    }

    expect(deleteNotExistingEdge).toThrow()
  })

  it('should be possible to reverse graph', () => {
    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const vertexD = new GraphVertex('D')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeAC = new GraphEdge(vertexA, vertexC)
    const edgeCD = new GraphEdge(vertexC, vertexD)

    const graph = new Graph(true)
    graph
      .addEdge(edgeAB)
      .addEdge(edgeAC)
      .addEdge(edgeCD)

    expect(graph.toString()).toEqual('A,B,C,D')
    expect(graph.getAllEdges().length).toEqual(3)
    expect(graph.getNeighbors(vertexA).length).toEqual(2)
    expect(graph.getNeighbors(vertexA)[0].getKey()).toEqual(vertexB.getKey())
    expect(graph.getNeighbors(vertexA)[1].getKey()).toEqual(vertexC.getKey())
    expect(graph.getNeighbors(vertexB).length).toEqual(0)
    expect(graph.getNeighbors(vertexC).length).toEqual(1)
    expect(graph.getNeighbors(vertexC)[0].getKey()).toEqual(vertexD.getKey())
    expect(graph.getNeighbors(vertexD).length).toEqual(0)

    graph.reverse()

    expect(graph.toString()).toEqual('A,B,C,D')
    expect(graph.getAllEdges().length).toEqual(3)
    expect(graph.getNeighbors(vertexA).length).toEqual(0)
    expect(graph.getNeighbors(vertexB).length).toEqual(1)
    expect(graph.getNeighbors(vertexB)[0].getKey()).toEqual(vertexA.getKey())
    expect(graph.getNeighbors(vertexC).length).toEqual(1)
    expect(graph.getNeighbors(vertexC)[0].getKey()).toEqual(vertexA.getKey())
    expect(graph.getNeighbors(vertexD).length).toEqual(1)
    expect(graph.getNeighbors(vertexD)[0].getKey()).toEqual(vertexC.getKey())
  })

  it('should return vertices indices', () => {
    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const vertexD = new GraphVertex('D')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeBC = new GraphEdge(vertexB, vertexC)
    const edgeCD = new GraphEdge(vertexC, vertexD)
    const edgeBD = new GraphEdge(vertexB, vertexD)

    const graph = new Graph()
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD)

    const verticesIndices = graph.getVerticesIndices()
    expect(verticesIndices).toEqual({
      A: 0,
      B: 1,
      C: 2,
      D: 3,
    })
  })

  it('should generate adjacency matrix for undirected graph', () => {
    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const vertexD = new GraphVertex('D')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeBC = new GraphEdge(vertexB, vertexC)
    const edgeCD = new GraphEdge(vertexC, vertexD)
    const edgeBD = new GraphEdge(vertexB, vertexD)

    const graph = new Graph()
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD)

    const adjacencyMatrix = graph.getAdjacencyMatrix()
    expect(adjacencyMatrix).toEqual([
      [Infinity, 0, Infinity, Infinity],
      [0, Infinity, 0, 0],
      [Infinity, 0, Infinity, 0],
      [Infinity, 0, 0, Infinity],
    ])
  })

  it('should generate adjacency matrix for directed graph', () => {
    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')
    const vertexD = new GraphVertex('D')

    const edgeAB = new GraphEdge(vertexA, vertexB, 2)
    const edgeBC = new GraphEdge(vertexB, vertexC, 1)
    const edgeCD = new GraphEdge(vertexC, vertexD, 5)
    const edgeBD = new GraphEdge(vertexB, vertexD, 7)

    const graph = new Graph(true)
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD)

    const adjacencyMatrix = graph.getAdjacencyMatrix()
    expect(adjacencyMatrix).toEqual([
      [Infinity, 2, Infinity, Infinity],
      [Infinity, Infinity, 1, 7],
      [Infinity, Infinity, Infinity, 5],
      [Infinity, Infinity, Infinity, Infinity],
    ])
  })
})
