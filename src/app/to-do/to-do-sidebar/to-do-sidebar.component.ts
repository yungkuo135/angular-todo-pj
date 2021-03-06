import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterTags, labelTags } from 'src/app/model';

@Component({
  selector: 'app-to-do-sidebar',
  templateUrl: './to-do-sidebar.component.html',
  styleUrls: ['./to-do-sidebar.component.scss']
})
export class ToDoSidebarComponent implements OnInit {

  public clickedTag: string ;
  public filterTags: filterTags[];
  public labelTags: labelTags[];

  constructor( private router: Router) { }

  ngOnInit() {
    this.clickedTag = 'all'
    this.filterTags = [
      {
        name: 'stared',
        tag: '優先',
        iconName: 'star',
      },
      {
        name: 'important',
        tag: '重要',
        iconName: 'error',
      },
      {
        name: 'done',
        tag: '完成',
        iconName: 'check_box',
      }
    ];
    this.labelTags = [
      {
        name: 'frontend',
        iconColor: '#388e3c',
        iconName: 'label_outline'
      },
      {
        name: 'backend',
        iconColor: '#0091ea',
        iconName: 'label_outline'
      },
      {
        name: 'issue',
        iconColor: '#f44336',
        iconName: 'label_outline'
      },
    ];
  }
}
