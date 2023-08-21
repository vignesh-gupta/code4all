let arr = [1, 2, 43, 34, 5, 6, 13, 8, 9];
console.log(arr);

// console.log("ForEach method");
// let test = arr.forEach(function (num , index, wholeArr ){
//   console.log(num, index, wholeArr);
// });
// console.log(test);

// (function (num) {
//   console.log(num);
// })(4);
// console.log("Map method");
// let test2 = arr.map(function (num, index, wholeArr) {
//   console.log(num, index, wholeArr);
//   return num;
// });
// console.log("End of Map method");

// console.log(test2);

// console.log("Filter method");
// let test3 = arr.filter(function (num, index, wholeArr) {
//   // console.log(num, index, wholeArr);
//   return ((typeof num) !== "string");
// });
// console.log("End of Filter method");
// console.log("Output ",test3);

console.log("Reduce method");
let test4 = arr.reduce(function (accumulator , num ) {
  // console.log(num, index, wholeArr);
  console.log("acc", accumulator , "num", num);
  return  accumulator + num;
}, 100);

console.log("End of Reduce method");

console.log("Output ",test4);