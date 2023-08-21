let maxtrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (const row of maxtrix) {
//   console.log("Row strats");
//   for (const element of row) {
//     console.log(element);
//   }

//   console.log("Row ends");
// }

parentLoop:
for (let i = 0; i < maxtrix.length; i++) {
  console.log("Row strats");
  for (let j = 0; j < maxtrix[i].length; j++) {
    if (j == 1) {
      console.log("Break");
      break parentLoop;
    }
    console.log(i, j, maxtrix[i][j]);
  }
  console.log("Row ends");
}
