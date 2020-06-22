import { Component, OnInit, Inject } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { toDoListWithIcons } from 'src/app/model';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent implements OnInit {
  public isItemReady = false;
  public toDoItem: toDoListWithIcons;
  public itemId: string;
  public isNewItem: boolean;
  constructor(public toDoservice: ToDoService,
              private route: ActivatedRoute,
              private location: Location,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id') || null;
    this.toDoItem = new toDoListWithIcons();
    if (this.itemId === null ) {
      this.isItemReady = true;
      this.isNewItem = true;
    }
    this.toDoservice.getToDoList('all').subscribe( () => {
      this.toDoItem = this.toDoservice.getToDoItem(this.itemId)[0] || this.toDoItem;
      this.isItemReady = true;
    });

  }
  onSubmit(form) {
    if ( this.isNewItem ) {
        const newItem = {
          id:'',
          title: form.value.title ,
          content: form.value.content,
          frontend: form.value.frontend,
          backend: form.value.backend,
          issue: form.value.issue,
          important:  this.toDoItem.important,
          stared: this.toDoItem.stared,
          done: this.toDoItem.done
        };
        this.toDoservice.addToDoItem( newItem ).subscribe( () => {
        });
      } else {
        this.toDoservice.updateToDoItem(this.toDoItem).subscribe( () => {
        });
      }

    this.goBack();
  }

  setTag( event, tag:string ) {
    const icon = event.currentTarget;
    switch (tag) {
      case 'important':
        this.toDoItem.important = !this.toDoItem.important ? 1 : 0;
        icon.innerText = this.toDoItem.important ? 'error' : 'error_outline';
        icon.style.color = this.toDoItem.important ? 'red' : '#000';
        break;
      case 'star':
        this.toDoItem.stared = !this.toDoItem.stared ? 1 : 0;
        icon.innerText = this.toDoItem.stared ? 'star' : 'star_border';
        icon.style.color = this.toDoItem.stared ? '#ffc107' : '#000';
        break;
      case 'done':
        this.toDoItem.done = !this.toDoItem.done ? 1 : 0;
        icon.innerText = this.toDoItem.done ? 'check_box' : 'crop_square';
        icon.style.color = this.toDoItem.done ? 'blue' : '#000';
        break;
      default:
        break;
    }
  }

  goBack() {
    const dialogRef = this.dialog.open(TodoDialog);
    dialogRef.afterClosed().subscribe(result => {
      if ( result === 'yes') {
        this.location.back();
      }
    });

  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'to-do-dialog',
  templateUrl: './to-do-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class TodoDialog {

  constructor(
    public dialogRef: MatDialogRef<TodoDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }
    onNoClick() {
      this.dialogRef.close();
    }
    onYesClick() {
      this.data = 'yes';
      this.dialogRef.close(this.data);
    }

}
