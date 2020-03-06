import { Component, Input } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent {
  @Input() text = "";
  @Input() completed = false;
  @Input() id = -1;

  @Input() toggleTodo: (todoId: number) => void = (todoId: number): void => {};
  @Input() deleteTodo: (todoId: number) => void = (todoId: number): void => {};

  constructor() {}
}
