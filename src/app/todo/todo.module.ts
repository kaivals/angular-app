import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component'; // standalone

const routes: Routes = [
  { path: '', component: TodoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TodoComponent // ✅ Import it, do not declare
  ]
})
export class TodoModule {}
