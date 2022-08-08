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

function renderTodos() {
  const tableRow = document.querySelector(".insert-task");
  tableRow.innerHTML = `
  <th>${myTodos[0].title}</th>
  <td>${myTodos[0].description}</td>
  <td>${myTodos[0].dueDate}</td>
  <td>${myTodos[0].priority}</td>
  <th>${myTodos[1].title}</th>
  <td>${myTodos[1].description}</td>
  <td>${myTodos[1].dueDate}</td>
  <td>${myTodos[1].priority}</td>
  `
}

renderTodos()