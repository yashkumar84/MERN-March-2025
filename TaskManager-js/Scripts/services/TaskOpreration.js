import { Task } from "../model/Task.js";

export const taskOperation = {
  tasks: [],
  addTask(taskObject) {
    const id = Math.floor(Math.random() * 1000);
    const task = new Task(
      id,
      taskObject.name,
      taskObject.desc,
      taskObject.date,
      taskObject.Priority,
      taskObject.color
    );
    console.log(this.tasks);

    const exist = this.tasks.find(
      (t) =>
        t.id === task.id || t.name.toLowerCase() === task.name.toLowerCase()
    );
    if (exist) {
      console.log("Task Already Exist");
      return;
    }
    this.tasks.push(task);
  },
  deleteTask() {},
  editTask() {},

  getTaskById() {},

  getTasks() {},
};
