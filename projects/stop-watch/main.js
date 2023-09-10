let time = document.getElementById("time");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

let min = 0,
  sec = 0,
  msec = 0;

function formatNum(num) {
  return num < 10 ? "0" + num.toString() : num.toString();
}

let printFormattedTime = () => {
  time.innerHTML = `${formatNum(min)} : ${formatNum(sec)} : ${formatNum(msec)}`;
};

// TO keep track of interval key
let timerInterval;

startBtn.addEventListener("click", () => {
  // avoid BUG#1 -> Speed up and never stop on double click of start
  // Clear interval if any exist to
  clearInterval(timerInterval);

  // Hide Start btn
  startBtn.classList.add("btn-hidden");

  // Show stop btn
  stopBtn.classList.remove("btn-hidden");

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

  console.log(timerInterval);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);

  // Hide stop btn
  stopBtn.classList.add("btn-hidden");

  // Show start btn
  startBtn.classList.remove("btn-hidden");
});

document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(timerInterval);

  (min = 0), (sec = 0), (msec = 0);

  // BUG#2 -> Numbers are not updating on click of reset
  // TO update the screen
  printFormattedTime();

  // Hide stop btn
  stopBtn.classList.add("btn-hidden");

  // Show start btn
  startBtn.classList.remove("btn-hidden");

  document.getElementById("laps-list").innerHTML = "";
});

// FEATURE#1 - Add lapping feature.

document.getElementById("lap-btn").addEventListener("click", () => {
  if (min === 0 && sec === 0 && msec === 0) return;

  let captureTime = `${formatNum(min)} : ${formatNum(sec)} : ${formatNum(
    msec
  )}`;
  console.log(captureTime);

  let lapEle = document.createElement("li");
  lapEle.innerText = captureTime;

  document.getElementById("laps-list").appendChild(lapEle);
});
