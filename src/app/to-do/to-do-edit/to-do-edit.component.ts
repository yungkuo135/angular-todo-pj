import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent implements OnInit {

  public toDoItem;
  public itemId;
  public isNewItem;
  constructor(public toDoservice: ToDoService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id') || null;
    this.toDoItem = this.toDoservice.getToDoItem(this.itemId)[0] ||
                    { important_icon: 'error_outline',
                    stared_icon: 'star_border',
                    done_icon: 'check'
                        };
    if (this.itemId === null ) { this.isNewItem = true; }
  }
  onSubmit(form) {
    let origToDo;
    let newItem;
    if ( !this.isNewItem ) {
      origToDo = this.toDoservice.getSelectedItem(this.toDoservice.toDoList, this.itemId);
      origToDo[0].frontend = form.value.frontend;
      origToDo[0].backend = form.value.backend;
      origToDo[0].issue = form.value.issue;
      origToDo[0].title = form.value.title;
      origToDo[0].content = form.value.content;
      origToDo[0].important =  this.toDoItem.important;
      origToDo[0].stared =  this.toDoItem.stared;
      origToDo[0].done =  this.toDoItem.done;
      } else {
        newItem = {
          title: form.value.title ,
          content: form.value.content,
          frontend: form.value.frontend,
          backend: form.value.backend,
          issue: form.value.issue,
          important:  this.toDoItem.important,
          stared: this.toDoItem.stared,
          done: this.toDoItem.done
        };
        this.toDoservice.addToDoItem( newItem );
      }

    this.goBack();
  }

  setTag( event, tag ) {
    const icon = event.currentTarget;
    switch (tag) {
      case 'important':
        if ( icon.innerText === 'error_outline') {
          icon.innerText = 'error';
          icon.style.color = 'red';
          this.toDoItem.important = 1;
        } else {
          icon.innerText = 'error_outline';
          icon.style.color = '#000';
          this.toDoItem.important = 0;
        }
        break;
      case 'star':
        if ( icon.innerText === 'star_border') {
          icon.innerText = 'star';
          icon.style.color = '#ffc107';
          this.toDoItem.stared = 1;
        } else {
          icon.innerText = 'star_border';
          icon.style.color = '#000';
          this.toDoItem.stared = 0;
        }
        break;
      case 'done':
        if (  icon.innerText === 'check') {
          icon.innerText = 'check_box';
          icon.style.color = 'blue';
          this.toDoItem.done = 1;
        } else {
          icon.innerText = 'check';
          icon.style.color = '#000';
          this.toDoItem.done = 0;
        }
        break;
    }
  }

  goBack() {
    this.location.back();
  }
}
