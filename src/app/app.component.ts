import { Component, ViewChild, HostListener } from '@angular/core';
import { ToDoService } from './to-do/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public toDoservice: ToDoService) { }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

  }
  search(event) {
   let titleResult, contentResult;

   console.log(this.toDoservice.toDoList);

   titleResult = this.toDoservice.toDoList.filter( item => {
     // tslint:disable-next-line:max-line-length
     return (item.title.indexOf(event.currentTarget.nextElementSibling.value) > -1) || (item.content.indexOf(event.currentTarget.nextElementSibling.value) > -1);
   });

   this.toDoservice.updateSearched(titleResult);
  }


}
