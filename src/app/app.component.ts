import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // import your standalone component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
})
export class AppComponent {}
