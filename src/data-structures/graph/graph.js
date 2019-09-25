export default class Graph {
  /**
   *
   */
  constructor (isDirected = false) {
    this.vertices = {}
    this.edges = {}
    this.isDirected = isDirected
  }

  /**
   * @param {GraphVertex} newVertex
   */
  addVertex (newVertex) {
    this.vertices[newVertex.getKey()] = newVertex

    return this
  }

  /**
   *
   */
  getVertexByKey (vertexKey) {
    return this.vertices[vertexKey]
  }

  /**
   *
   */
  getNeighbors (vertex) {
    return vertex.getNeighbors()
  }

  /**
   *
   */
  getAllVertices = () => (Object.values(this.vertices))

  /**
   *
   */
  getAllEdges = () => (Object.values(this.edges))

  /**
   *
   */
  addEdge (edge) {
    // Try to find and end start vertices.
    let startVertex = this.getVertexByKey(edge.startVertex.getKey())
    let endVertex = this.getVertexByKey(edge.endVertex.getKey())

    // Insert start vertex if it wasn't inserted.
    if (!startVertex) {
      this.addVertex(edge.startVertex)
      startVertex = this.getVertexByKey(edge.startVertex.getKey())
    }

    // Insert end vertex if it wasn't inserted.
    if (!endVertex) {
      this.addVertex(edge.endVertex)
      endVertex = this.getVertexByKey(edge.endVertex.getKey())
    }

    // Check if edge has been already added.
    if (this.edges[edge.getKey()]) {
      throw new Error('Edge has already been added before')
    } else {
      this.edges[edge.getKey()] = edge
    }

    // Add edge to the vertices.
    if (this.isDirected) {
      // If graph IS directed then add the edge only to start vertex.
      startVertex.addEdge(edge)
    } else {
      // If graph ISN'T directed then add the edge to both vertices.
      startVertex.addEdge(edge)
      endVertex.addEdge(edge)
    }

    return this
  }

  /**
   *
   */
  deleteEdge (edge) {
    // Delete edge from the list of edges.
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()]
    } else {
      throw new Error('Edge not found in graph')
    }

    // Try to find and end start vertices and delete edge from them.
    const startVertex = this.getVertexByKey(edge.startVertex.getKey())
    const endVertex = this.getVertexByKey(edge.endVertex.getKey())

    startVertex.deleteEdge(edge)
    endVertex.deleteEdge(edge)
  }

  /**
   *
   */
  findEdge (startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey())

    if (!vertex) {
      return null
    }

    return vertex.findEdge(endVertex)
  }

  /**
   *
   */
  getWeight () {
    return this.getAllEdges().reduce((weight, graphEdge) => weight + graphEdge.weight, 0)
  }

  /**
   * Reverse all the edges in directed graph.
   */
  reverse () {
    /** @param {GraphEdge} edge */
    this.getAllEdges().forEach((edge) => {
      // Delete straight edge from graph and from vertices.
      this.deleteEdge(edge)

      // Reverse the edge.
      edge.reverse()

      // Add reversed edge back to the graph and its vertices.
      this.addEdge(edge)
    })

    return this
  }

  /**
   *
   */
  getVerticesIndices () {
    const verticesIndices = {}
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index
    })

    return verticesIndices
  }

  /**
   *
   */
  getAdjacencyMatrix () {
    const vertices = this.getAllVertices()
    const verticesIndices = this.getVerticesIndices()

    // Init matrix with infinities meaning that there is no ways of
    // getting from one vertex to another yet.
    const adjacencyMatrix = Array(vertices.length).fill(null).map(() => Array(vertices.length).fill(Infinity))

    // Fill the columns.
    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()]
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight
      })
    })

    return adjacencyMatrix
  }

  /**
   *
   */
  toString () {
    return Object.keys(this.vertices).toString()
  }
}
