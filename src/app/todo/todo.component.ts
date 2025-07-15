import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
      this.todos = [...this.todoService.getTodos()];
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = [...this.todoService.getTodos()];
  }

  toggleTodo(id: number) {
    this.todoService.toggleCompleted(id);
    this.todos = [...this.todoService.getTodos()];
      console.log(this.todos); // 👈 Add this line to debug

  }
}
