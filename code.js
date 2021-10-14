// create list of squares where max is the biggest square that can be found adding last number or last-1, last-2... etc
// find squares additions for each number
// return false if more than 3 have only 1 connection
// pick one side, start building. burn nums used
// if multiple paths availables, always go to number with less paths. record decision
// if get to pathend before actual end, start again in last node with multiple path decision. Repeat this last one untill end.

function square_sums_row(n) {
  const possibleSquaresList = [
    1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289,
    324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024,
    1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936,
    2025, 2116, 2209, 2304, 2401, 2500, 2601,
  ];
  const squaresList = [];
  for (let i = 0; possibleSquaresList[i] <= n; i++) {
    squaresList.push(possibleSquaresList[i]);
  }
}
