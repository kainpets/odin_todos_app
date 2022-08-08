class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  addTodos() {
    const todo = new Todos(this.title, this.description, this.dueDate, this.priority)
    UI.renderTodos(todo);
  }
}

class UI {
  static renderTodos(todos) {
    const tableRow = document.querySelector(".insert-task");

    todos.forEach(todo => {
      tableRow.innerHTML += `
      <tr>
      <td>${todo.title}</td>
      <td>${todo.description}</td>
      <td>${todo.dueDate}</td>
      <td>${todo.priority}</td>
      </tr>
      `
    })

  }
}

const createTodoButton = document.querySelector(".create-task");
createTodoButton.addEventListener("click", () => {
  Todos.addTodos()
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