// create Array of squares where max is the biggest square that can be found adding last number or last-1, last-2... etc
// find squares additions for each number
// return false if more than 3 have only 1 connection or if any number has 0 connections
// pick one side, start building. burn nums used
// if multiple paths availables, always go to number with less paths. record decision
// if get to pathend before actual end, start again in last node with multiple path decision. Repeat this last one untill end.

function square_sums_row(n) {
  const possibleSquaresArray = [
    1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289,
    324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024,
    1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936,
    2025, 2116, 2209, 2304, 2401, 2500, 2601,
  ];
  const squaresArray = [];
  for (let i = 0; possibleSquaresArray[i] <= n * 2; i++) {
    squaresArray.push(possibleSquaresArray[i]);
  }
  let mainArray = [...Array(n + 1).keys()];
  mainArray.splice(0, 1);
  let nodeTree = {};
  for (let i = 0; i < mainArray.length - 1; i++) {
    let num = mainArray[i];
    let arrRest = [...mainArray];
    arrRest.splice(i, 1);
    let numNodesArray = [];
    for (let j = 0; j < arrRest.length; j++) {
      let otherNum = arrRest[j];
      if (squaresArray.includes(num + otherNum)) {
        numNodesArray.push(otherNum);
      }
    }
    nodeTree[num] = numNodesArray;
  }
  console.log(nodeTree);
}
square_sums_row(15);
