import { Task } from "../model/Task.js";

const taskOperation = {
  tasks: [],
  addTask: (taskObject) => {
    const id = Math.floor(Math.random() * 1000);
    const task = new Task(
      id,
      taskObject.name,
      taskObject.description,
      taskObject.date,
      taskObject.priority,
      taskObject.color
    );

    
    this.tasks.push(task);
  },
  deleteTask: () => {},
  editTask: () => {},

  getTaskById: () => {},

  getTasks: () => {},
};
