import { Projects } from "./projects";

export class Todos extends Projects {
  constructor(title, description, dueDate, priority) {
    super(title);
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
