/**
 * If the direction we plan to go is a 1 we will ignore that section
 *
 * I created this because I wanted this check to be "type safe"
 * @param {[]} grid
 * @returns boolean
 */
export const isInvalidPath = (grid) => (r, c) => (
  // Make sure we can even access
  grid[r] !== undefined && grid[r][c] !== undefined
    // Can access, return if next cell is a 1
    ? grid[r][c] === 1
    // Whatever, wouldn't have worked anyway. FALSE!!!
    : false
)

/**
 * The number of all valid paths from top-left to bottom-right
 *
 * @param {[]} grid
 *
 * @returns The cumulative result of all paths
 */
export const validPaths = (grid) => {
  const ROWS = grid.length
  const COLS = grid[0].length

  const helper = (r, c, visited) => {
    // Predicates for bounds checking
    const isDirectionValid = isInvalidPath(grid)
    const wasVisited = visited.has(`${r}-${c}`)
    const isRowOutofBounds = r === ROWS
    const isColOutofBounds = c === COLS
    const isInvalidCell = Math.min(r, c) < 0
    const isOutOfBounds = isInvalidCell || isRowOutofBounds || isColOutofBounds

    // Check if bounds are valid
    if (isOutOfBounds || wasVisited || isDirectionValid(r, c)) {
      return 0
    }

    // Made it to the end of the path, woo hoo!
    if (r === ROWS - 1 && c === COLS - 1) {
      return 1
    }

    // Add our visited items before recursively checking the next path
    visited.add(`${r}-${c}`)

    let count = 0
    count += helper(r + 1, c, visited) // Up
    count += helper(r - 1, c, visited) // Down
    count += helper(r, c + 1, visited) // Right
    count += helper(r, c - 1, visited) // Left

    // Now remove as we don't need to track this visited cell
    visited.delete(`${r}-${c}`)
    return count
  }

  // Our starting point is top-left. We could easily change this but would be a lot more effort 😬
  return helper(0, 0, new Set(), ROWS, COLS, grid)
}
