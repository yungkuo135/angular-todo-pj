import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoContentComponent } from './to-do/to-do-content/to-do-content.component';
import { ToDoEditComponent } from './to-do/to-do-edit/to-do-edit.component';


const routes: Routes = [
  {path: '', redirectTo: '/all', pathMatch: 'full'},
  {path: 'all', component: ToDoContentComponent},
  {path: 'filter/stared', component: ToDoContentComponent},
  {path: 'filter/important', component: ToDoContentComponent},
  {path: 'filter/done', component: ToDoContentComponent},
  {path: 'tag/frontend', component: ToDoContentComponent},
  {path: 'tag/backend', component: ToDoContentComponent},
  {path: 'tag/issue', component: ToDoContentComponent},
  {path: 'edit/:id', component: ToDoEditComponent},
  {path: 'new', component: ToDoEditComponent},
  // {path: 'search', component: ToDoContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
