import { Todos } from "./modules/todos";
import {UI} from "./modules/UI";


createNewTask();


function createNewTask() {
  const todoBtn = document.querySelector("#create-todo");
  todoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#due-date");
    const priority = document.querySelector("#priority");
    console.log(title.value);
    const todo = new Todos(title.value, description.value, dueDate.value, priority.value)
    UI.renderTodos(todo);
  })

}
