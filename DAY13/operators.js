let a = 1,
  b = 2,
  c = 3;

// Ternary Operator
if (a < 3) {
  console.log("a is less than 3");
}
let ternaryTest = a < 3 ? "a is less than 3" : "a is greater than 3";

console.log(ternaryTest);
// And Operator

if (a < 3 && b < 3 && c < 3) {
  console.log("All are less than 3");
} else {
  console.log("All are not less than 3");
}

let andTest =
  a < 3 && b < 3 && c < 3 ? "All are less than 3" : "All are not less than 3";
console.log(andTest);

// Or Operator
if (a < 3 || b < 3 || c < 3) {
  console.log("At least one is less than 3");
} else {
  console.log("All are greater than 3");
}

let orTest =
  a < 3 || b < 3 || c < 3
    ? "At least one is less than 3"
    : "All are greater than 3";
console.log(orTest);


// Not Operator
if (!(a < 3)) {
  console.log("a is not less than 3");
} else {
  console.log("a is less than 3");
}

let notTest = !(a < 3) ? "a is not less than 3" : "a is less than 3";
console.log(notTest);


// Nullish Coalescing Operator
a = null;

c = a ?? b;
console.log({ a, b, c });
