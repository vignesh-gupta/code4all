let time = document.getElementById("time");

let min = 0,
  sec = 0,
  msec = 0;

let printFormattedTime = () => {
  time.innerHTML = `${formatNum(min)} : ${formatNum(sec)} : ${formatNum(msec)}`;
};

// TO keep track of interval key
let timerInterval;

document.getElementById("start-btn").addEventListener('click', () => {

  // avoid BUG#1 -> Speed up and never stop on double click of start
  // Clear interval if any exist to 
  clearInterval(timerInterval) 


  timerInterval =  setInterval(() => {
    ++msec;
    if (msec > 99) {
      (msec = 0), ++sec;
    }
    if (sec > 59) {
      (msec = 0), (sec = 0), ++min;
    }
    printFormattedTime();
  }, 10);
});

document.getElementById("stop-btn").addEventListener('click' , ()=>{
  clearInterval(timerInterval)
})

document.getElementById("reset-btn").addEventListener('click', ()=>{
  clearInterval(timerInterval)
  min = 0,
  sec = 0,
  msec = 0;

  // BUG#2 -> Numbers are not updating on click of reset
  // TO update the screen
  printFormattedTime()
})

function formatNum(num) {
  return num < 10 ? "0" + num.toString() : num.toString();
}
