import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-sidebar',
  templateUrl: './to-do-sidebar.component.html',
  styleUrls: ['./to-do-sidebar.component.scss']
})
export class ToDoSidebarComponent implements OnInit {

  public clickedTag;

  constructor() { }

  ngOnInit() {
  }

}
