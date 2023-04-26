import Graph from './graph'
import { Vertex as GraphVertex, Edge as GraphEdge } from './base'

describe('[Data Structure] Graph', () => {
  it.skip('should add vertices to graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')

    graph.addVertex(vertexA).addVertex(vertexB)

    expect(graph.toString()).to.equal('A,B')
    expect(graph.getVertexByKey(vertexA.getKey())).to.equal(vertexA)
    expect(graph.getVertexByKey(vertexB.getKey())).to.equal(vertexB)
  })

  it.skip('should add edges to undirected graph', () => {
    const graph = new Graph()

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const edgeAB = new GraphEdge(vertexA, vertexB)

    graph.addEdge(edgeAB)

    expect(graph.getAllVertices().length).to.equal(2)
    expect(graph.getAllVertices()[0]).to.equal(vertexA)
    expect(graph.getAllVertices()[1]).to.equal(vertexB)

    const graphVertexA = graph.getVertexByKey(vertexA.getKey())
    const graphVertexB = graph.getVertexByKey(vertexB.getKey())

    expect(graph.toString()).to.equal('A,B')
    // expect(graphVertexA).to.equalDefined()
    // expect(graphVertexB).to.equalDefined()

    expect(graph.getVertexByKey('not existing')).to.be.an('undefined')

    expect(graphVertexA.getNeighbors().length).to.equal(1)
    expect(graphVertexA.getNeighbors()[0]).to.equal(vertexB)
    expect(graphVertexA.getNeighbors()[0]).to.equal(graphVertexB)

    expect(graphVertexB.getNeighbors().length).to.equal(1)
    expect(graphVertexB.getNeighbors()[0]).to.equal(vertexA)
    expect(graphVertexB.getNeighbors()[0]).to.equal(graphVertexA)
  })

  it.skip('should add edges to directed graph', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')

    const edgeAB = new GraphEdge(vertexA, vertexB)

    graph.addEdge(edgeAB)

    const graphVertexA = graph.getVertexByKey(vertexA.getKey())
    const graphVertexB = graph.getVertexByKey(vertexB.getKey())

    expect(graph.toString()).to.equal('A,B')
    // expect(graphVertexA).to.equalDefined()
    // expect(graphVertexB).to.equalDefined()

    expect(graphVertexA.getNeighbors().length).to.equal(1)
    expect(graphVertexA.getNeighbors()[0]).to.equal(vertexB)
    expect(graphVertexA.getNeighbors()[0]).to.equal(graphVertexB)

    expect(graphVertexB.getNeighbors().length).to.equal(0)
  })

  it.skip('should find edge by vertices in undirected graph', () => {
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

    expect(graphEdgeAC).to.be.null
    expect(graphEdgeCA).to.be.null
    expect(graphEdgeAB).to.equal(edgeAB)
    expect(graphEdgeBA).to.equal(edgeAB)
    expect(graphEdgeAB.weight).to.equal(10)
  })

  it.skip('should find edge by vertices in directed graph', () => {
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

    expect(graphEdgeAC).to.be.null
    expect(graphEdgeCA).to.be.null
    expect(graphEdgeBA).to.be.null
    expect(graphEdgeAB).to.equal(edgeAB)
    expect(graphEdgeAB.weight).to.equal(10)
  })

  it.skip('should return vertex neighbors', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeAC = new GraphEdge(vertexA, vertexC)

    graph.addEdge(edgeAB).addEdge(edgeAC)

    const neighbors = graph.getNeighbors(vertexA)

    expect(neighbors.length).to.equal(2)
    expect(neighbors[0]).to.equal(vertexB)
    expect(neighbors[1]).to.equal(vertexC)
  })

  it.skip('should throw an error when trying to add edge twice', () => {
    const addSameEdgeTwice = () => {
      const graph = new Graph(true)

      const vertexA = new GraphVertex('A')
      const vertexB = new GraphVertex('B')
      const edgeAB = new GraphEdge(vertexA, vertexB)

      graph.addEdge(edgeAB).addEdge(edgeAB)
    }

    expect(addSameEdgeTwice).to.throw()
  })

  it.skip('should return the list of all added edges', () => {
    const graph = new Graph(true)

    const vertexA = new GraphVertex('A')
    const vertexB = new GraphVertex('B')
    const vertexC = new GraphVertex('C')

    const edgeAB = new GraphEdge(vertexA, vertexB)
    const edgeBC = new GraphEdge(vertexB, vertexC)

    graph.addEdge(edgeAB).addEdge(edgeBC)

    const edges = graph.getAllEdges()

    expect(edges.length).to.equal(2)
    expect(edges[0]).to.equal(edgeAB)
    expect(edges[1]).to.equal(edgeBC)
  })

  it.skip('should calculate total graph weight for default graph', () => {
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

    expect(graph.getWeight()).to.equal(0)
  })

  it.skip('should calculate total graph weight for weighted graph', () => {
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

    expect(graph.getWeight()).to.equal(10)
  })

  it.skip('should be possible to delete edges from graph', () => {
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

    expect(graph.getAllEdges().length).to.equal(3)

    graph.deleteEdge(edgeAB)

    expect(graph.getAllEdges().length).to.equal(2)
    expect(graph.getAllEdges()[0].getKey()).to.equal(edgeBC.getKey())
    expect(graph.getAllEdges()[1].getKey()).to.equal(edgeAC.getKey())
  })

  it.skip('should should throw an error when trying to delete not existing edge', () => {
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

    expect(deleteNotExistingEdge).to.throw()
  })

  it.skip('should be possible to reverse graph', () => {
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

    expect(graph.toString()).to.equal('A,B,C,D')
    expect(graph.getAllEdges().length).to.equal(3)
    expect(graph.getNeighbors(vertexA).length).to.equal(2)
    expect(graph.getNeighbors(vertexA)[0].getKey()).to.equal(vertexB.getKey())
    expect(graph.getNeighbors(vertexA)[1].getKey()).to.equal(vertexC.getKey())
    expect(graph.getNeighbors(vertexB).length).to.equal(0)
    expect(graph.getNeighbors(vertexC).length).to.equal(1)
    expect(graph.getNeighbors(vertexC)[0].getKey()).to.equal(vertexD.getKey())
    expect(graph.getNeighbors(vertexD).length).to.equal(0)

    graph.reverse()

    expect(graph.toString()).to.equal('A,B,C,D')
    expect(graph.getAllEdges().length).to.equal(3)
    expect(graph.getNeighbors(vertexA).length).to.equal(0)
    expect(graph.getNeighbors(vertexB).length).to.equal(1)
    expect(graph.getNeighbors(vertexB)[0].getKey()).to.equal(vertexA.getKey())
    expect(graph.getNeighbors(vertexC).length).to.equal(1)
    expect(graph.getNeighbors(vertexC)[0].getKey()).to.equal(vertexA.getKey())
    expect(graph.getNeighbors(vertexD).length).to.equal(1)
    expect(graph.getNeighbors(vertexD)[0].getKey()).to.equal(vertexC.getKey())
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

  it.skip('should generate adjacency matrix for undirected graph', () => {
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
    expect(adjacencyMatrix).to.deep.equal([
      [Infinity, 0, Infinity, Infinity],
      [0, Infinity, 0, 0],
      [Infinity, 0, Infinity, 0],
      [Infinity, 0, 0, Infinity],
    ])
  })

  it.skip('should generate adjacency matrix for directed graph', () => {
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
    expect(adjacencyMatrix).to.deep.equal([
      [Infinity, 2, Infinity, Infinity],
      [Infinity, Infinity, 1, 7],
      [Infinity, Infinity, Infinity, 5],
      [Infinity, Infinity, Infinity, Infinity],
    ])
  })
})
