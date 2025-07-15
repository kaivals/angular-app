import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ needed for ngModel and *ngFor
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    console.log('Constructor: Component instance created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Initialization logic');
    this.todos = this.todoService.getTodos();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Custom change detection logic (if needed)');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content projected into component');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Projected content checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View checked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Cleanup before component is removed');
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.todos = [...this.todoService.getTodos()];
      this.newTodo = '';
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = [...this.todoService.getTodos()];
  }

  toggleTodo(id: number): void {
    this.todoService.toggleCompleted(id);
    this.todos = [...this.todoService.getTodos()];
  }
}
