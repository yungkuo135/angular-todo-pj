import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-to-do-content',
  templateUrl: './to-do-content.component.html',
  styleUrls: ['./to-do-content.component.scss']
})
export class ToDoContentComponent implements OnInit, OnDestroy {
  public toDoList: any;
  public noContent = false;
  public destroyed = new Subject<any>();

  constructor( public toDoService: ToDoService,
               private route: ActivatedRoute,
               private router: Router) {
                }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      this.doOnInit();
      this.noContent = false;
    });
    this.doOnInit();
  }

  doOnInit() {
    const requset = this.route.snapshot.url[0].path;
    const detail = this.route.snapshot.url[1] ? this.route.snapshot.url[1].path : null;

    this.toDoService.getToDoList(requset, detail).subscribe( (res) => {
      this.toDoList = res;
    });

    this.toDoService.updateSearched$.subscribe((items: any) => {
      if ( items && items.length ) {
        this.noContent = false;
        this.toDoList = items;
      } else {
        this.noContent = true;
      }
    });
  }

  triggerTag(event, tag, item) {

    const icon = event.currentTarget;

    switch (tag) {
      case 'important':
        item.important = !item.important;
        icon.innerText = item.important ? 'error' : 'error_outline';
        icon.style.color = item.important ? 'red' : '#000';
        this.toDoService.updateToDoItem(item).subscribe( );
        break;
      case 'star':
        item.stared = !item.stared;
        icon.innerText = item.stared ? 'star' : 'star_border';
        icon.style.color = item.stared ? '#ffc107' : '#000';
        this.toDoService.updateToDoItem(item).subscribe( );
        break;
      case 'done':
        item.done = !item.done;
        icon.innerText = item.done ? 'check_box' : 'crop_square';
        icon.style.color = item.done ? 'blue' : '#000';
        this.toDoService.updateToDoItem(item).subscribe( );
        break;
      default:
        break;
    }
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
