import { Component } from "@angular/core";

class Todo {
  private static id: number = 0;

  private _id: number;

  constructor(private _text: string, private _completed: boolean = false) {
    this._id = ++Todo.id;
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public set completed(completed: boolean) {
    this._completed = completed;
  }

  public get id(): number {
    return this._id;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private _todos: Todo[] = [
    new Todo("Learn Angular"),
    new Todo("Understand TS"),
  ];

  private _text = "";
  private _completed = false;
  private _textError = "";

  public get todos(): Todo[] {
    return this._todos;
  }

  private addTodo(todo: Todo): void {
    this._todos.push(todo);
  }

  public toggleTodo(todoId: number): void {
    const todo: Todo | undefined = this.todos.find(
      (t: Todo) => t.id === todoId
    );
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  public deleteTodo(todoId: number): void {
    this._todos = this.todos.filter((t: Todo) => t.id !== todoId);
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public set completed(completed: boolean) {
    this._completed = completed;
  }

  public toggleCompleted(): void {
    this.completed = !this.completed;
  }

  public get textError(): string {
    return this._textError;
  }

  public set textError(textError: string) {
    this._textError = textError;
  }

  public onSubmit(ev: Event): void {
    ev.preventDefault();

    if (this.text.length === 0) {
      this.textError = "You must add text.";
    } else {
      this.addTodo(new Todo(this.text, this.completed));
      this.text = "";
      this.completed = false;
      this.textError = "";
    }
  }
}
