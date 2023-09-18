/**
 * Matrix to Adjacency List
 */
export const m2AL = (matrix) => {

}

export const toAL = (nodes, edges) => {

}

export const graphFromEdges = (edges) => {

  // return edges.reduce((previous, current) => {
  //   const newGraph = {
  //     [current[1]]: 'asd',
  //     [current[0]]: '1',
  //   }

  //   console.log(previous[current[0]])

  //   return {
  //     ...previous,
  //     ...newGraph,
  //   }
  // }, {})
}

const objItem = (grf) => (k, v) => {
  const newgrf = { ...grf }
  // console.log(k, newgrf.hasOwnProperty(k))

  // console.log(newgrf)

  if (!(k in grf)) {
    newgrf[k] = []
  } else {
    newgrf[k].push(v)
  }

  const t = {
    ...((k in grf) ? [v] : grf[k].push(v))
  }

  return newgrf
}


export const graphFromEdgesALT = (edges) => {
  const graph = {}
  const objItem2 = objItem(graph)
  for ( let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) {
      graph[a] = []
    }

    if (!(b in graph)) {
      graph[b] = []
    }

    objItem2(a, b)
    // console.log(objItem2(b, a))
    // objItem2(b)
    // console.log('-------------------------------------------------')

    // graph[b].push(a)
    // graph[a].push(b)
  }

  return graph
}


// const trueCondition = true;
// const falseCondition = false;

// const obj = {
//   ...(trueCondition && { dogs: "woof" }),
//   ...(falseCondition && { cats: "meow" }),
// };

// // { dogs: 'woof' }

// const arr = [
//   ...(trueCondition ? ["dog"] : []),
//   ...(falseCondition ? ["cat"] : [])
// ];
