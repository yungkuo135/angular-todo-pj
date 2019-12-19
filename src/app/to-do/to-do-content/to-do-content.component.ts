import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-content',
  templateUrl: './to-do-content.component.html',
  styleUrls: ['./to-do-content.component.scss']
})
export class ToDoContentComponent implements OnInit {
  public toDoList;
  public noContent = false;

  constructor( public toDoService: ToDoService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    let toDoListObj;
    let requset;
    let detail;

    requset = this.route.snapshot.url[0].path;
    detail = this.route.snapshot.url[1] ? this.route.snapshot.url[1].path : null;

    this.toDoList = this.toDoService.getToDoList(requset, detail);
    this.toDoService.updateSearched$.subscribe((items) => {
      if ( items[0] ) {
        this.noContent = false;
        this.toDoList = items;
        console.log('this.toDoList', this.toDoList);
      } else {
        this.noContent = true;
      }

    });

  }

  triggerTag(event, tag) {

    let icon, modifiedItem;
    icon = event.currentTarget;
    modifiedItem = this.toDoService.toDoList.filter((item) => {
      return item.id === event.currentTarget.getAttribute('itemId');
    });

    switch (tag) {
      case 'important':
        if ( icon.innerText === 'error_outline') {
          icon.innerText = 'error';
          icon.style.color = 'red';
          modifiedItem[0].important = 1;
        } else {
          icon.innerText = 'error_outline';
          icon.style.color = '#000';
          modifiedItem[0].important = 0;
        }
        break;
      case 'star':
        if ( icon.innerText === 'star_border') {
          icon.innerText = 'star';
          icon.style.color = '#ffc107';
          modifiedItem[0].stared = 1;
        } else {
          icon.innerText = 'star_border';
          icon.style.color = '#000';
          modifiedItem[0].stared = 0;
        }
        break;
      case 'done':
        if (  icon.innerText === 'check') {
          icon.innerText = 'check_box';
          icon.style.color = 'blue';
          modifiedItem[0].done = 1;
        } else {
          icon.innerText = 'check';
          icon.style.color = '#000';
          modifiedItem[0].done = 0;
        }
        break;
    }
  }

}
