// let valInput = document.getElementById("valInput");
// let valOutput = document.getElementById("valOutput");

// document.getElementById("doubleBtn").addEventListener("click", function () {
//   valOutput.value = parseInt(valInput.value) * 2;
// });

// document.getElementById("resetBtn").addEventListener("click", function () {
//   valInput.value = "";
//   valOutput.value = "";
// });

// let btns = document.querySelectorAll('.btn')
// btns.forEach((btn,i) =>{
//   btn.addEventListener('click', function(e){
//     console.log("Btn clicked" , i+1);
//   })
// })

function printTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let time = hour + ":" + minute + ":" + second;
  console.log(time);
}

setInterval(printTime, 10000)
printTime()

