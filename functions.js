//   function addition(num1=0, num2=0) {   // function definition with parameter num
//     // function definition with parameter num
//     var sum = num1 + num2;
//     console.log("inside function", sum , num1 , num2);
//     return sum;  // return statement is optional
//   }
// //   console.log(addition(3, 4)); // function call with argument 3 ,4

// // Function can accept function as a parameter
//   function upperLevel(lowerLevel) {
//     console.log("inside upper level");
//     // console.log(lowerLevel);
//     lowerLevel();
//   }

//   function doSomething() {
//     console.log("inside Do something");
//   }
// //   upperLevel(doSomething);
//   upperLevel(function (){ addition(3) });
//   upperLevel(function (){ doSomething(3,4) });

//   // Function can return function
function returnFunction() {
  console.log("inside return function");
  return function () {
    console.log("inside returned function");
  };
}

var returnedFunction = returnFunction();

console.log(returnedFunction);
returnedFunction();
