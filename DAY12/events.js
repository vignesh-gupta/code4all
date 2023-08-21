
// function clickMe(btnNo) {
//   console.log("Clicked by btn No.", btnNo);
// }

// function blurred(btnNo) {
//   console.log("Blurred btn No.", btnNo);
// }

// function focused(btnNo) {
//   console.log("Focused btn No.", btnNo);
// }

// function contextCheck(){
//   console.log("Right Clicked");
// }

// function keyDown(){
//   console.log("Key Down");
// }

// function keyUp(){
//   console.log("Key Up");
// }

// function keyPress(){
//   console.log("Key Press");
// }

function textChange(e){
  document.getElementById("heading").innerHTML = "Text Changed";
}



let heading = document.getElementById("heading");
let btn = document.getElementById("textChangerBtn") 

// 1. Event Listener

// btn.addEventListener("click", textChange)


// 2. Event Handler

// btn.onclick = () => {
//   console.log("Clicked");
//   textChange()
//   document.title = "Text Changed"
// }

// 3. Event Object

// btn.onclick = (event) => { 
//   console.log(event);
//   textChange(event)

// }


