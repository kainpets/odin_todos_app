
class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // renderTodos() {

  // }
}

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
function renderTodos() {
  const tableRow = document.querySelector(".insert-task");

  myTodos.forEach(todo => {
    console.log(todo);
    tableRow.innerHTML += `
    <tr>
    <th>${todo.title}</th>
    <td>${todo.description}</td>
    <td>${todo.dueDate}</td>
    <td>${todo.priority}</td>
    </tr>
    `

  })
}

renderTodos()