import { Component, Input } from "@angular/core";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent {
  @Input() createTodo: (text: string, completed: boolean) => void = (
    text: string,
    completed: boolean
  ) => {};

  private _text = "";
  private _completed = false;
  private _textError = "";

  constructor() {}

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public toggleCompleted(): void {
    this._completed = !this.completed;
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
      this.createTodo(this.text, this.completed);
      this.text = "";
      this._completed = false;
      this.textError = "";
    }
  }
}
