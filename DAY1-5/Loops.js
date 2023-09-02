var num = 0;
num += 2; //Shrt hand operator for "num = num + 2;"

console.log(num);

// for loop

for (var index = 0; index < 10; index++) {
  // Code Goes here
  console.log(index);
}

console.log("2's Table with while loop");
var index = 11;
while (index <= 10) {
  console.log(2 * index);
  index++;
}

// Print the table of 2 with do while loop
console.log("2's Table with do while loop");
var index2 = 11;
do {
  console.log(2 * index2);
  index2++;
} while (index2 <= 10);
