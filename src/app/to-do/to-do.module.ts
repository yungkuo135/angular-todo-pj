import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoSidebarComponent } from './to-do-sidebar/to-do-sidebar.component';
import { SharedModule } from '../shared.module';
import { ToDoContentComponent } from './to-do-content/to-do-content.component';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';

@NgModule({
  declarations: [ToDoSidebarComponent, ToDoContentComponent, ToDoEditComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ToDoSidebarComponent,
    ToDoContentComponent,
    ToDoEditComponent
  ]
})
export class ToDoModule { }
