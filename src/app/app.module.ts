import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    BrowserModule,
    TodoComponent // ✅ because it's standalone
  ],
  bootstrap: [TodoComponent] // ✅ also here
})
export class AppModule {}
