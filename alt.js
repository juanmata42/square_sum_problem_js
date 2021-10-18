function square_sums_row(n) {
  //adjacent object builder
  function adjObjBuild(n) {
    const possibleSquares = getPossSquares(n);
    const adj = [];
    for (let i = 0; i < n + 1; i++) {
      adj[i] = [];
      for (let j = 0; j < possibleSquares.length; j++) {
        if (possibleSquares[j] > i) {
          const dif = possibleSquares[j] - i;
          if (dif <= n) {
            adj[i].push(dif);
          } else {
            break;
          }
        }
      }
    }
    return adj;
  }
  // get possible squares
  function getPossSquares(n) {
    const maxSum = n * 2 - 1;
    let square = 4;
    let i = 3;
    const possibleSquares = [];
    while (square <= maxSum) {
      possibleSquares.push(square);
      square = i * i;
      i++;
    }
    return possibleSquares;
  }
  // Build  the graph object
  const adj = adjObjBuild(n);

  // Deep copy the object before making any changes
  const adjCopy = JSON.parse(JSON.stringify(adj));

  // Create empty path
  const solution = [];

  // Recursively complete the path
  function getSolution(nowCandidates) {
    if (solution.length === n) {
      return solution;
    }
    // Sort the candidate vertices to start with the ones with less adjacent vert
    nowCandidates = nowCandidates.sort((a, b) => {
      return adjCopy[a].length - adjCopy[b].length;
    });
    for (const candidate of nowCandidates) {
      // Add the candidate to the paths
      solution.push(candidate);

      // and delete it from the object
      for (const candidateAdjacent of adj[candidate]) {
        adjCopy[candidateAdjacent] = adjCopy[candidateAdjacent].filter(
          (t) => t !== candidate
        );
      }
      if (getSolution(adjCopy[candidate])) {
        return solution;
      }
      // If not solution was found, delete the element from the path
      solution.pop();

      // and add it back to the object
      for (const candidateAdjacent of adj[candidate]) {
        adjCopy[candidateAdjacent].push(candidate);
      }
    }
    return false;
  }

  const endSolution = getSolution(Array.from(Array(n).keys()).slice(1));
  // The elements of the path can't be strings
  return endSolution;
}

let t = new Date().getTime();
let res = square_sums_row(15);
let t2 = new Date().getTime();
console.log(res, ((t2 - t) / 1000).toFixed(4) + 's');
