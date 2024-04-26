import { Component } from '@angular/core';
import { Todo } from './to-do-list.model';
import { FormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, MatListModule, MatIconModule, MatFormFieldModule, MatCardModule],
  templateUrl: './to-do-list.component.html', // Updated file path
  styleUrls: ['./to-do-list.component.css'] // Updated file path
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo = '';

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push(new Todo(this.newTodo, false));
      this.newTodo = '';
    }
  }

  toggleTodoDone(todo: Todo) {
    todo.done = !todo.done;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
}