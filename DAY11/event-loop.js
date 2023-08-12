// Hack to simulate a sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// function timer(){
//   console.log("Hello World from setTimeout");
//  }
console.time("timer");
setTimeout(() => {
  console.log("Hello World from setTimeout");
  console.timeStamp("timer");
}, 3000);

setInterval(()=>{
  console.log("Hello World from setInterval");
  console.timeStamp("timer");

},2000)

console.log("Hello, world!");
sleep(5000);
console.log("Goodbye, world!");

console.timeStamp("timer");
