import { Todos } from "./modules/todos";
import {UI} from "./modules/UI";


const createTodoButton = document.querySelector("#create-todo");

createTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due-date");
  const priority = document.querySelector("#priority");
  console.log(title.value);
  const todo = new Todos(title.value, description.value, dueDate.value, priority.value)
  UI.renderTodos(todo);
})


const myTodos = [
  {
    title: "party",
    description: "welcome the guests",
    dueDate: "today",
    priority: "important",
  },
  {
    title: "cleaning",
    description: "clean the bathroom",
    dueDate: "before the party",
    priority: "regular",
  },
];