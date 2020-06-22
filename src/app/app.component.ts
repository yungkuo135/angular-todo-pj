import { Component, ViewChild, HostListener } from '@angular/core';
import { ToDoService } from './to-do/to-do.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public toDoservice: ToDoService,
              private router: Router) { }
  ngOnInit() {

  }
  search(event) {

   const result = this.toDoservice.toDoList.filter( item => {
     return (item.title.indexOf(event.value.searchText) > -1) || (item.content.indexOf(event.value.searchText) > -1);
   });

   this.toDoservice.updateSearched(result);

  }



}
