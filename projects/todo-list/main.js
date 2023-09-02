let taskInput = document.getElementById("add-task-input"); // input tag
let taskSubmitBtn = document.getElementById("add-task-btn"); // btn tag
let taskList = document.getElementById("task-list"); // ul tag

// Check if localstorage has some values put them into task list
taskList.innerHTML = localStorage.getItem("tasks");

// If any task is added from localstorage, add a event
document.querySelectorAll("li.tasks").forEach((taskEle) => {
  taskEle.addEventListener("click", () => toggleDone(taskEle));
});

taskSubmitBtn.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("Please provide some input");
    return;
  }

  // Creating a li tag for our new Task (Bring up a plate for food)
  let taskElement = document.createElement("li");

  // (Put the food on the plate)
  taskElement.innerText = taskInput.value;

  // To add a event on the newly added task
  taskElement.classList.add("tasks");
  taskElement.onclick = () => toggleDone(taskElement)

  // (Put the plate on the table)
  taskList.appendChild(taskElement);

  console.log(taskList.innerHTML);

  localStorage.setItem("tasks", taskList.innerHTML);
  taskInput.value = "";
});

function toggleDone(taskEle) {
  taskEle.classList.toggle("done");
  localStorage.setItem("tasks", taskList.innerHTML);
}
