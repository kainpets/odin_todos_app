class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static addTodos(todo) {
    UI.renderTodos(todo);
  }
}

class UI {
  static renderTodos(todos) {
    const tableRow = document.querySelector(".insert-task");

    tableRow.innerHTML += `
    <tr>
    <td>${todos.title}</td>
    <td>${todos.description}</td>
    <td>${todos.dueDate}</td>
    <td>${todos.priority}</td>
    </tr>
    `
  }
}

const createTodoButton = document.querySelector("#create-todo");

createTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due-date");
  const priority = document.querySelector("#priority");
  console.log(title.value);
  const todo = new Todos(title.value, description.value, dueDate.value, priority.value)
  Todos.addTodos(todo)
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