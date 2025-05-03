import { taskOperation } from "../services/TaskOpreration.js";

window.addEventListener("load", bindEvents);

let addButton;
function bindEvents() {
  addButton = document
    .getElementById("addTask")
    .addEventListener("click", addTask);
}

function addTask(e) {
  e.preventDefault();
  let taskObject = {};
  const ids = ["name", "desc", "date", "Priority", "color"];
  for (let id of ids) {
    taskObject[id] = document.getElementById(id).value;
  }
  taskOperation.addTask(taskObject);
  printTasks();
}

function printTasks() {
  const taskDiv = document.getElementById("tasks");
  taskDiv.innerHTML = "";
  taskOperation.tasks.map((task) => printSingleTask(task, taskDiv));
}

function deleteTask() {
  console.log("Delete Function called");
}

function printSingleTask(task, taskDiv) {
  const card = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${task.name}</h5>
    <p class="card-text">${task.description}</p>
    <p class="card-text">${task.priority}</p>
    <p class="card-text">${task.date}</p>
    <div class"bg-primary">${task.color}</div>
    <a href="#" class="btn btn-primary" onclick="${deleteTask}">Delete</a>
  </div>
</div>`;

  taskDiv.innerHTML += card;
}
