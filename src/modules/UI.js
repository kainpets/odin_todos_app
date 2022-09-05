export class UI {
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
