let time = document.getElementById("time");
let startStopBtn = document.getElementById("start-stop");

let min = 0,
  sec = 0,
  msec = 0;

let printFormattedTime = () => {
  time.innerHTML = `${formatNum(min)} : ${formatNum(sec)} : ${formatNum(msec)}`;
};

function formatNum(num) {
  return num < 10 ? "0" + num.toString() : num.toString();
}

// TO keep track of timer state
let isRunning = false;

function handleToggleTimer() {
  let timerInterval;
  clearInterval(timerInterval);

  if (isRunning) {
    isRunning = false;
    console.log("Stopped");
  } else {
    timerInterval = setInterval(() => {
      ++msec;
      if (msec > 99) {
        (msec = 0), ++sec;
      }
      if (sec > 59) {
        (msec = 0), (sec = 0), ++min;
      }
      printFormattedTime();
    }, 10);
    console.log("Stopped");
    isRunning = true;
  }
}
