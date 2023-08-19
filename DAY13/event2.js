let eventSpan = document.querySelector("#eventSpan");
let eventPara = document.querySelector("#eventPara");
let eventDiv = document.querySelector("#eventDiv");

function onClickHandle(ele, phase = "bubble") {
  alert(`${ele} clicked and captured in ${phase} phase`);

  console.log("hello1");
  console.log("hello2");
  console.log("hello3");
}

eventDiv.addEventListener("click", () => onClickHandle("div"));
eventDiv.addEventListener("click", () => onClickHandle("div", "capture"), true);
eventPara.addEventListener("click", () => onClickHandle("p"));
eventPara.addEventListener("click", () => onClickHandle("p", "capture"), true);
eventSpan.addEventListener("click", () => onClickHandle("span"));
eventSpan.addEventListener("click", () => onClickHandle("span", "capture"), true);
